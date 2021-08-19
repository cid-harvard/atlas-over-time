import first from 'lodash/first';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
import sumBy from 'lodash/sumBy';
import {
  TradeDirection,
  TradeFlow,
  failIfValidOrNonExhaustive,
  groupByMapObjectProp,
  ILoadable,
  LoadableStatus,
  InflationAdjustment,
  Layout,
  Ordering,
  PopulationAdjustment,
} from './Utils';
import {
  formatPercentage,
  formatTradeValue,
} from '../chart/getTicksInfo';
import {
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import getDisplayedValueLabel from './getDisplayValueLabel';
import {
  AggregatePerYearPerSubSection,
  IDatumPerYearPerRibbonWithoutFinalValue,
  IIntermediateDatumPerYearPerRibbon,
  IIntermediateSubSection,
  ISubSectionWithoutFinalValue,
  WithSection,
  WithValue,
  WithYear,
} from './internalUtils';

export interface IResult {
  yearsWithData: number[];
  subSections: IIntermediateSubSection[];
}

type InputDatum<T> = WithYear<WithSection<WithValue<T>>>;

const groupIntoRibbons = <T>(
  inputStatus: ILoadable<Array<InputDatum<T>>>,
  aggregatePerYearPerSubsectionStatus: ILoadable<AggregatePerYearPerSubSection<T>>,
  ordering: Ordering,
  layout: Layout,
  inflationAdjustment: InflationAdjustment,
  populationAdjustment: PopulationAdjustment,
  tradeDirection: TradeDirection,
  tradeFlow: TradeFlow,
): ILoadable<IResult> => {
  if (inputStatus.status === LoadableStatus.Initial ||
    aggregatePerYearPerSubsectionStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (inputStatus.status === LoadableStatus.Loading ||
              aggregatePerYearPerSubsectionStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (inputStatus.status === LoadableStatus.NotPresent ||
              aggregatePerYearPerSubsectionStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (inputStatus.status === LoadableStatus.Present ||
              aggregatePerYearPerSubsectionStatus.status === LoadableStatus.Present) {
    const {data: input} = inputStatus;
    const {data: aggregatePerYearPerSubsection} = aggregatePerYearPerSubsectionStatus;
    const groupedBySection = groupByMapObjectProp(input, 'section');

    const subSections: ISubSectionWithoutFinalValue[] = [];
    const allDataPerYearAcrossRibbons: IDatumPerYearPerRibbonWithoutFinalValue[] = [];
    for (const [section, elemsInSection] of groupedBySection as any) {
      if (elemsInSection.length > 0) {
        // `elemsInSection` guaranteed to have at least one elem in this branch:
        const {color} = first(elemsInSection)!;
        const groupedBySubSection = (groupByMapObjectProp as any)(elemsInSection, 'subSection');
        for (const [subSection, elemsInSubSection] of groupedBySubSection as any) {
          // Guaranteed to have at least one element because it's the result of `groupBy`:
          const firstElem = elemsInSubSection[0];
          const {shortLabel, longLabel, dropdownLabel, dropdownSearchString, dropdownValue} = firstElem;
          const groupedByYear = (groupByMapObjectProp as any)(elemsInSubSection, 'year');
          const perYearPerRibbonData: IDatumPerYearPerRibbonWithoutFinalValue[] = [];
          for (const [year, elemsInSubsectionInYear] of groupedByYear as any) {
            const datum = aggregatePerYearPerSubsection(elemsInSubsectionInYear, subSection, year);
            perYearPerRibbonData.push(datum);
          }

          if (perYearPerRibbonData.length > 0) {
            const sortedByYear = sortBy(perYearPerRibbonData, 'year');
            allDataPerYearAcrossRibbons.push(...sortedByYear);
            subSections.push({
              ribbonId: subSection, color,
              dataPerYear: sortedByYear,
              shortLabel,
              longLabel,
              section,
              dropdownLabel, dropdownSearchString, dropdownValue,
            });
          }

        }
      }
    }

    const dataGroupedByYear = groupByMapObjectProp(allDataPerYearAcrossRibbons, 'year');
    const yearsWithData = sortBy([...dataGroupedByYear.keys() as any]);

    let sortedSubSections: ISubSectionWithoutFinalValue[];
    if (ordering === Ordering.Community) {
      sortedSubSections = subSections.sort((a, b) => {
        if (a.section !== b.section) {
          return a.section - b.section;
        } else {
          return a.ribbonId - b.ribbonId;
        }
      });
    } else {
      // Sort in descending order based on the `value` of the last year:
      sortedSubSections = sortBy(subSections, ({dataPerYear}: ISubSectionWithoutFinalValue) => {
        // `dataPerYear` guaranteed to have at least one elem because of check
        // `perYearPerRibbonData.length > 0` above:
        const lastElem = last(dataPerYear)!;
        return - lastElem.absoluteValue;
      });
    }

    const subSectionsWithFinalValue: IIntermediateSubSection[] = [];
    if (layout === Layout.Value) {
      // If layout out is set to "value", no calculation is needed:
      for (const {dataPerYear, shortLabel, longLabel, section, ...rest} of sortedSubSections) {
        const dataPerYearWithFinalValue = dataPerYear.map(
          ({absoluteValue, detailOverlayInfoBeforeValue, detailOverlayInfoAfterValue, tooltipInfo, ...others}) => {
            // Figure out the label and text for the detail overlay and hover
            // tooltip next to y-axis:
            const label = getDisplayedValueLabel(
              inflationAdjustment, populationAdjustment, tradeDirection, tradeFlow,
            );
            const displayedValue = formatTradeValue(absoluteValue);
            const displayValueInfo: IRow = {label, value: displayedValue};
            const detailOverlayInfo: IRow[] = [
              ...detailOverlayInfoBeforeValue,
              displayValueInfo,
              ...detailOverlayInfoAfterValue,
            ];
            const tooltipInfoWithValue = [displayValueInfo, ...tooltipInfo];
            const toBeAdded: IIntermediateDatumPerYearPerRibbon = {
              ...others,
              detailOverlayInfo,
              tooltipInfo: tooltipInfoWithValue,
              yAxisTooltipInfo: displayedValue,
              value: absoluteValue,
            };
            return toBeAdded;

          },
        );
        // const dataPerYearWithFinalValue: IIntermediateDatumPerYearPerRibbon[] = dataPerYear.map(
        //   ({absoluteValue, ...others}) => ({...others, value: absoluteValue})
        // )
        subSectionsWithFinalValue.push({
          ...rest,
          shortLabel, longLabel, section,
          dataPerYear: dataPerYearWithFinalValue,
        });
      }
    } else {
      // If layout is "share", we need to figure out the percentage of each ribbon in each year:

      // Figure out percentage for each year across all ribbons:
      const totalPerYear: Map<number, number> = new Map();
      for (const [year, elemsInYear] of dataGroupedByYear as any) {
        const summedValue = sumBy(elemsInYear, 'absoluteValue');
        totalPerYear.set(year, summedValue);
      }
      // Then divide the trade value for each year in each ribbon by the
      // corresponding total across all ribbons:
      for (const {dataPerYear, ...rest} of sortedSubSections) {
        const dataPerYearWithFinalValue: IIntermediateDatumPerYearPerRibbon[] = [];
        for (const datumPerYear of dataPerYear) {
          const {
            absoluteValue, year, detailOverlayInfoBeforeValue, detailOverlayInfoAfterValue, tooltipInfo, ...others
          } = datumPerYear;
          const totalAcrossAllRibbons = totalPerYear.get(year);
          if (totalAcrossAllRibbons !== undefined) {
            const value = absoluteValue / totalAcrossAllRibbons;

            // Figure out the label and text for the detail overlay and hover
            // tooltip next to y-axis:
            const label = 'Share';
            const displayedValue = formatPercentage(value);
            const displayValueInfo: IRow = {label, value: displayedValue};
            const detailOverlayInfo: IRow[] = [
              ...detailOverlayInfoBeforeValue,
              displayValueInfo,
              ...detailOverlayInfoAfterValue,
            ];
            const tooltipInfoWithValue = [displayValueInfo, ...tooltipInfo];

            const toBeAdded: IIntermediateDatumPerYearPerRibbon = {
              ...others,
              detailOverlayInfo,
              yAxisTooltipInfo: displayedValue,
              year,
              value,
              tooltipInfo: tooltipInfoWithValue,
            };
            dataPerYearWithFinalValue.push(toBeAdded);
          }
        }
        subSectionsWithFinalValue.push({
          ...rest,
          dataPerYear: dataPerYearWithFinalValue,
        });
      }
    }

    return {
      status: LoadableStatus.Present,
      data: {
        subSections: subSectionsWithFinalValue,
        yearsWithData,
      },
    };

  } else {
    failIfValidOrNonExhaustive(inputStatus, 'Invalid status type');
    // These lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default groupIntoRibbons;
