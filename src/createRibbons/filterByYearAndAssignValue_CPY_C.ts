import {
  ICPYDatum,
  ILoadable,
  LoadableStatus,
  InflationAdjustment,
  PopulationAdjustment,
} from './Utils';
import {
  getCYHash,
  IDeflatorsMap,
  IPopulationMap,
  WithValue,
} from './internalUtils';

const filter = (
    dataStatus: ILoadable<ICPYDatum[]>,
    deflatorsStatus: ILoadable<IDeflatorsMap>,
    populationStatus: ILoadable<IPopulationMap>,
    inflationAdjustment: InflationAdjustment,
    populationAdjustment: PopulationAdjustment,
    startYear: number,
    endYear: number,
    locationId: number,
    getValue: (datum: ICPYDatum) => number,
  ): ILoadable<Array<WithValue<ICPYDatum>>> => {

  let result: ILoadable<Array<WithValue<ICPYDatum>>>;
  if (dataStatus.status === LoadableStatus.Initial ||
      deflatorsStatus.status === LoadableStatus.Initial ||
      populationStatus.status === LoadableStatus.Initial) {
    result = {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.Loading ||
    deflatorsStatus.status === LoadableStatus.Loading ||
    populationStatus.status === LoadableStatus.Loading) {
    result = {status: LoadableStatus.Loading};
  } else if (dataStatus.status === LoadableStatus.NotPresent ||
    deflatorsStatus.status === LoadableStatus.NotPresent ||
    populationStatus.status === LoadableStatus.NotPresent) {
    result = {status: LoadableStatus.NotPresent};
  } else {
    const {data} = dataStatus;
    const {data: deflators} = deflatorsStatus;
    const {data: population} = populationStatus;

    let filterIteratee: (input: ICPYDatum) => boolean;
    let getAdjustedValue: (tradeValue: number, input: ICPYDatum, locationId: number) => number;
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
      const {availableYears, dataByCountryYear} = population;
      const availableYearsForLocation = availableYears.get(locationId);
      if (availableYearsForLocation === undefined) {
        throw new Error('Cannot find per-year population data for location' + locationId);
      }

      filterIteratee = ({year}) => (year >= startYear && year <= endYear && availableYearsForLocation.has(year));
      getAdjustedValue = (tradeValue, {year}, location) => {
        const key = getCYHash(location, year);
        const retrievedPopulation = dataByCountryYear.get(key);
        if (retrievedPopulation === undefined) {
          throw new Error('Cannot find population for location ' + location + ' in year ' + year);
        }

        return tradeValue / retrievedPopulation;
      };
    } else {
      const {availableYears: availableYearsProduct, dataByYear} = deflators;
      const {availableYears, dataByCountryYear} = population;
      const availableYearsLocation = availableYears.get(locationId);
      if (availableYearsLocation === undefined) {
        throw new Error('Cannot find per-year population data for location' + locationId);
      }
      filterIteratee = ({year}) => (
        year >= startYear && year <= endYear &&
          availableYearsLocation.has(year) && availableYearsProduct.has(year)
      );

      getAdjustedValue = (tradeValue, {year, product_id}, location) => {
        const deflator = dataByYear.get(year);

        const locationKey = getCYHash(location, year);
        const retrievedPopulation = dataByCountryYear.get(locationKey);

        if (deflator === undefined || retrievedPopulation === undefined) {
          throw new Error('Cannot find per-year population data for location' + location +
            ' or product ' + product_id + ' in year ' + year,
          );
        }

        return tradeValue * deflator / retrievedPopulation;
      };
    }

    const filteredByYear = data.filter(filterIteratee);

    const withValues: Array<WithValue<ICPYDatum>> = [];
    for (const datum of filteredByYear) {
      const unadjustedValue = getValue(datum);
      // Filter out negative
      if (unadjustedValue > 0) {
        const adjustedValue = getAdjustedValue(unadjustedValue, datum, locationId);
        const valueAdded = Object.assign({}, datum, {
          value: adjustedValue,
        });
        withValues.push(valueAdded);
      }
    }

    result = {
      status: LoadableStatus.Present,
      data: withValues,
    };
  }
  return result;
};

export default filter;
