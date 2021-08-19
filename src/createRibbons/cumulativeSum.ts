import max from 'lodash/max';
import {
  failIfValidOrNonExhaustive,
  ILoadable,
  keyByMap,
  LoadableStatus,
} from './Utils';
import {
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import {
  IResult as IResultFromPrevStep,
} from './groupIntoRibbons';
import {
  IAccumulatedPerYear,
  IAccumulatedRibbon,
  IIntermediateDatumPerYearPerRibbon,
} from './internalUtils';

export interface IResult {
  maxGraphValue: number;
  yearsWithData: number[];
  ribbons: IAccumulatedRibbon[];
}

const cumulativeSum = (
    inputStatus: ILoadable<IResultFromPrevStep>,
  ): ILoadable<IResult> => {

  if (inputStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (inputStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (inputStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (inputStatus.status === LoadableStatus.Present) {
    const {data: {subSections, yearsWithData}} = inputStatus;
    if (subSections.length === 0 || yearsWithData.length === 0) {
      return {
        status: LoadableStatus.Present,
        data: {yearsWithData: [], ribbons: [], maxGraphValue: 0},
      };
    } else {
      const currentRibbonBaseline: Map<number, number> = new Map(yearsWithData.map(year =>
        ([year, 0] as [number, number]
      )));

      // Stack ribbons on top of each other:
      const ribbons: IAccumulatedRibbon[] = [];
      for (const {ribbonId, dataPerYear, shortLabel, longLabel, section, ...rest} of subSections) {
        const dataPerYearAsMap = keyByMap<number, IIntermediateDatumPerYearPerRibbon>(({year}) => year)(dataPerYear);
        const pointsOnCurve: IAccumulatedPerYear[] = [];
        for (const year of yearsWithData) {
          const retrievedDatum = dataPerYearAsMap.get(year);
          const lowerValue = currentRibbonBaseline.get(year);
          if (lowerValue === undefined) {
            throw new Error('Cannot find lower value for ribbonId ' + ribbonId + ' in year ' + year);
          }
          let hasActualValue: boolean, valueForYear: number, yAxisTooltipInfo: string;
          let tooltipInfo: IRow[], detailOverlayInfo: IRow[];
          if (retrievedDatum === undefined) {
            // Assign 0 for years that have no data so that the ribbons above this
            // ribbon stack up correctly but make a note of this lack of value:
            hasActualValue = false;
            valueForYear = 0;
            yAxisTooltipInfo = '';
            tooltipInfo = [];
            detailOverlayInfo = [];
          } else {
            hasActualValue = true;
            valueForYear = retrievedDatum.value;
            yAxisTooltipInfo = retrievedDatum.yAxisTooltipInfo;
            tooltipInfo = retrievedDatum.tooltipInfo;
            detailOverlayInfo = retrievedDatum.detailOverlayInfo;
          }

          const upperValue = lowerValue + valueForYear;
          currentRibbonBaseline.set(year, upperValue);
          const newDatum: IAccumulatedPerYear = {
            year, upperValue, lowerValue, hasActualValue, yAxisTooltipInfo,
            tooltipInfo, detailOverlayInfo,
          };
          pointsOnCurve.push(newDatum);
        }
        const ribbon: IAccumulatedRibbon = {
          ...rest,
          ribbonId, shortLabel, longLabel, section,
          pointsOnCurve,
        };
        ribbons.push(ribbon);
      }

      // The highest point on the upper edge of the uppermost ribbon:
      const maxGraphValue = max([...currentRibbonBaseline.values() as any]);
      if (maxGraphValue === undefined) {
        throw new Error('Cannot find max value in array');
      }

      return {
        status: LoadableStatus.Present,
        data: {maxGraphValue, ribbons, yearsWithData},
      };
    }
  } else {
    failIfValidOrNonExhaustive(inputStatus, 'Invalid status type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default cumulativeSum;
