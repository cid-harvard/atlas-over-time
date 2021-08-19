import {
  ProductClass,
  TradeDirection,
  TradeFlow,
  failIfValidOrNonExhaustive,
  ILoadable,
  ProductMetadatumLevel as Level,
  IMetadatum,
  ICPYDatum,
} from './Utils';

import {
  DataSource as Source,
  GraphSubject as Subject,
} from '../chart/Utils';
import getSize from './getSize';
import assignCoords from './assignCoords';
import assignSection from './assignSection';
import cumulativeSum from './cumulativeSum';
import filterAndAssignValue from './filterByYearAndAssignValue_CPY_C';
import {
  getFourDigitAggregator,
  getLowerDetailLevelsAggregator,
  getSixDigitAggregator,
} from './get_CPY_C_Aggregator';
import defaultGetColorGetter from './getProductColorGetter';
import getSectionGetter from './getProductSectionGetter';
import getSubSectionGetter from './getProductSubSectionGetter';
import getValueGetter from './getValueGetter';
import groupIntoRibbons from './groupIntoRibbons';
import {
  AggregatePerYearPerSubSection,
  IDeflatorsMap,
  IPopulationMap,
} from './internalUtils';
import {
  IMergeOutput,
  InflationAdjustment,
  Layout,
  Ordering,
  PopulationAdjustment,
} from './Utils';

export interface IMergeInput {
  // Discriminant:
  subject: Subject.Product;
  source: Source.CPY;

  mainData: ILoadable<ICPYDatum[]>;
  metadata: ILoadable<Map<number, IMetadatum>>;
  high2LowMapping: ILoadable<Map<number, number>>;
  high2MidMapping: ILoadable<Map<number, number>>;
  deflatorsData: ILoadable<IDeflatorsMap>;
  populationData: ILoadable<IPopulationMap>;

  productClass: ProductClass;
  tradeDirection: TradeDirection;
  tradeFlow: TradeFlow;
  level: Level;
  deselectedCategories: number[];
  svgWidth: number | undefined;
  svgHeight: number | undefined;
  ordering: Ordering;
  populationAdjustment: PopulationAdjustment;
  inflationAdjustment: InflationAdjustment;
  layout: Layout;
  startYear: number;
  endYear: number;
  country: number;

  // Used in testing:
  getColorGetter?: (productClass: ProductClass) => (section: number) => string;
}
const merge = (input: IMergeInput): ILoadable<IMergeOutput> => {
  const {
    subject,
    productClass, level, tradeDirection, tradeFlow,
    startYear, endYear,
    inflationAdjustment, populationAdjustment, layout,
    ordering,
    svgWidth, svgHeight,
    mainData,
    high2LowMapping,
    high2MidMapping,
    metadata,
    populationData, deflatorsData,
    country,
    deselectedCategories,
    getColorGetter = defaultGetColorGetter,
  } = input;

  const getValue = getValueGetter(tradeFlow, tradeDirection);
  const withValue = filterAndAssignValue(
    mainData, deflatorsData, populationData,
    inflationAdjustment, populationAdjustment,
    startYear, endYear, country, getValue,
  );
  const getSection = getSectionGetter(high2LowMapping, metadata, level);
  const getSubSection = getSubSectionGetter(high2LowMapping, high2MidMapping, metadata, level, productClass);
  const getColor = getColorGetter(productClass);
  const assignedSection = assignSection<ICPYDatum>(
    withValue, getSection, getSubSection, deselectedCategories, getColor,
  );

  let aggregate: ILoadable<AggregatePerYearPerSubSection<ICPYDatum>>;
  if (level === Level.section || level === Level.twoDigit) {
    aggregate = getLowerDetailLevelsAggregator(metadata,  productClass, level);
  } else if (level === Level.fourDigit) {
    aggregate = getFourDigitAggregator(metadata, deflatorsData, productClass);
  } else if (level === Level.sixDigit) {
    aggregate = getSixDigitAggregator(metadata, productClass);
  } else {
    failIfValidOrNonExhaustive(level, 'Invalid detail level ' + level);
    // These lines will never be executed:
    aggregate = undefined as any;
  }
  const groupedIntoRibbons = groupIntoRibbons(
    assignedSection, aggregate, ordering, layout,
    inflationAdjustment, populationAdjustment, tradeDirection, tradeFlow,
  );
  const cumulativeSummed = cumulativeSum(groupedIntoRibbons);
  const size = getSize(svgWidth, svgHeight);
  const output = assignCoords(
    cumulativeSummed, size, layout, startYear, endYear, subject,
  );
  return output;
};

export default merge;
