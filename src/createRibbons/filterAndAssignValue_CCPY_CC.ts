import {
  getCYHash,
  IDeflatorsMap,
  IPopulationMap,
  WithValue,
} from './internalUtils';
import {
  failIfValidOrNonExhaustive,
  ICCPYDatum,
  ILoadable,
  LoadableStatus,
  InflationAdjustment,
  PopulationAdjustment,
} from './Utils';

const filter = (input: {
    data: ILoadable<ICCPYDatum[]>,
    deflators: ILoadable<IDeflatorsMap>,
    populationData: ILoadable<IPopulationMap>,
    inflationAdjustment: InflationAdjustment,
    populationAdjustment: PopulationAdjustment,
    startYear: number,
    endYear: number,
    getValue: (datum: ICCPYDatum) => number,
    partner: number,
  }): ILoadable<Array<WithValue<ICCPYDatum>>> => {

  const {
    data: dataStatus,
    populationData: populationDataStatus,
    deflators: deflatorsStatus,
    inflationAdjustment, startYear, endYear, getValue,
    populationAdjustment, partner,
  } = input;

  if (dataStatus.status === LoadableStatus.Initial ||
      deflatorsStatus.status === LoadableStatus.Initial ||
      populationDataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.Loading ||
              deflatorsStatus.status === LoadableStatus.Loading ||
              populationDataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};

  } else if (dataStatus.status === LoadableStatus.NotPresent ||
              deflatorsStatus.status === LoadableStatus.NotPresent ||
              populationDataStatus.status === LoadableStatus.NotPresent) {

    return {status: LoadableStatus.NotPresent};
  } else if (dataStatus.status === LoadableStatus.Present ||
              deflatorsStatus.status === LoadableStatus.Present ||
              populationDataStatus.status === LoadableStatus.Present) {
    const {data} = dataStatus;
    const {data: deflators} = deflatorsStatus;
    const {data: populationData} = populationDataStatus;

    let filterIteratee: (input: ICCPYDatum) => boolean;
    let getAdjustedValue: (tradeValue: number, input: ICCPYDatum, partnerId: number) => number;
    if (inflationAdjustment === InflationAdjustment.NotAdjusted &&
        populationAdjustment === PopulationAdjustment.NotAdjusted) {
      filterIteratee = ({year}) => (year >= startYear && year <= endYear);
      getAdjustedValue = tradeValue => tradeValue;
    } else if (inflationAdjustment === InflationAdjustment.Adjusted &&
                populationAdjustment === PopulationAdjustment.NotAdjusted) {
      const {availableYears, dataByYear} = deflators;
      filterIteratee = ({year}) => (year >= startYear && year <= endYear && availableYears.has(year));
      getAdjustedValue = (tradeValue, {product_id, year}) => {
        const deflator = dataByYear.get(year);
        if (deflator === undefined) {
          throw new Error('Cannot find deflator for product ' + product_id + ' in year ' + year);
        }
        return tradeValue * deflator;
      };
    } else if (inflationAdjustment === InflationAdjustment.NotAdjusted &&
                populationAdjustment === PopulationAdjustment.Adjusted) {
      const {availableYears, dataByCountryYear} = populationData;
      const availableYearsForLocation = availableYears.get(partner);
      if (availableYearsForLocation === undefined) {
        throw new Error('Cannot find per-year population data for location' + partner);
      }

      filterIteratee = ({year}) => (year >= startYear && year <= endYear && availableYearsForLocation.has(year));
      getAdjustedValue = (tradeValue, {year}, locationId) => {
        const key = getCYHash(locationId, year);
        const population = dataByCountryYear.get(key);
        if (population === undefined) {
          throw new Error('Cannot find population for location ' + locationId + ' in year ' + year);
        }

        return tradeValue / population;
      };
    } else {
      const {availableYears: availableYearsProduct, dataByYear} = deflators;
      const {availableYears, dataByCountryYear} = populationData;
      const availableYearsLocation = availableYears.get(partner);
      if (availableYearsLocation === undefined) {
        throw new Error('Cannot find per-year population data for location' + partner);
      }
      filterIteratee = ({year}) => (
        year >= startYear && year <= endYear &&
          availableYearsLocation.has(year) && availableYearsProduct.has(year)
      );

      getAdjustedValue = (tradeValue, {year, product_id}, locationId) => {
        const retrieved = dataByYear.get(year);

        const locationKey = getCYHash(locationId, year);
        const population = dataByCountryYear.get(locationKey);

        if (retrieved === undefined || population === undefined) {
          throw new Error( 'Cannot find per-year population data for location' + locationId +
            ' or product ' + product_id + ' in year ' + year,
          );
        }

        return tradeValue * retrieved / population;
      };
    }

    const filteredByYear = data.filter(filterIteratee);

    const withValues: Array<WithValue<ICCPYDatum>> = [];
    for (const datum of filteredByYear) {
      const unadjustedValue = getValue(datum);
      // Filter out negative
      if (unadjustedValue > 0) {
        const adjustedValue = getAdjustedValue(unadjustedValue, datum, partner);
        const valueAdded = Object.assign({}, datum, {
          value: adjustedValue,
        });
        withValues.push(valueAdded);
      }
    }
    return {
      status: LoadableStatus.Present,
      data: withValues,
    };
  } else {
    failIfValidOrNonExhaustive(dataStatus, 'Invalid loadable status');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default filter;
