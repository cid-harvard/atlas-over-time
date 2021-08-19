import {
  failIfValidOrNonExhaustive,
  ILoadable,
  LoadableStatus,
  InflationAdjustment,
} from './Utils';
import {
  IImportExport,
} from './getValueGetter';
import {
  IDeflatorsMap,
  WithValue,
} from './internalUtils';

type HaveYearAndTrade = IImportExport & {
  year: number;
};

const filter = <T extends HaveYearAndTrade>(
    dataStatus: ILoadable<T[]>,
    deflatorsStatus: ILoadable<IDeflatorsMap>,
    inflationAdjustment: InflationAdjustment,
    startYear: number,
    endYear: number,
    getValue: (datum: IImportExport) => number,
  ): ILoadable<Array<WithValue<T>>> => {

  if (dataStatus.status === LoadableStatus.Initial ||
      deflatorsStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.Loading ||
              deflatorsStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};

  } else if (dataStatus.status === LoadableStatus.NotPresent ||
              deflatorsStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};

  } else if (dataStatus.status === LoadableStatus.Present ||
              deflatorsStatus.status === LoadableStatus.Present) {
    const {data} = dataStatus;
    const {data: deflators} = deflatorsStatus;
    let filterIteratee: (input: T) => boolean;
    let getAdjustedValue: (tradeValue: number, input: T) => number;
    if (inflationAdjustment === InflationAdjustment.NotAdjusted) {
      filterIteratee = ({year}) => (year >= startYear && year <= endYear);
      getAdjustedValue = tradeValue => tradeValue;
    } else if (inflationAdjustment === InflationAdjustment.Adjusted) {
      const {availableYears, dataByYear} = deflators;
      filterIteratee = ({year}) => (year >= startYear && year <= endYear && availableYears.has(year));
      getAdjustedValue = (tradeValue, {year}) => {
        const deflator = dataByYear.get(year);
        if (deflator === undefined) {
          throw new Error('Cannot find deflator for year ' + year);
        }
        return tradeValue * deflator;
      };
    } else {
      failIfValidOrNonExhaustive(inflationAdjustment, 'Invalid value for inflation adjustment');
      // The following lines will never be executed:
      filterIteratee = undefined as any;
      getAdjustedValue = undefined as any;
    }

    const filteredByYear = data.filter(filterIteratee);

    const withValues: Array<WithValue<T>> = [];
    for (const datum of filteredByYear) {
      const unadjustedValue = getValue(datum);
      if (unadjustedValue > 0) {
        const adjustedValue = getAdjustedValue(unadjustedValue, datum);
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
    failIfValidOrNonExhaustive(dataStatus, 'Invalid status type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default filter;
