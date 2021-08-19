import {
  ProductClass,
  TradeDirection,
  TradeFlow,
  ILoadable,
  ProductMetadatumLevel as Level,
  IMetadatum,
} from './Utils';
import {
  DataSource,
  GraphSubject as Subject,
} from '../chart/Utils';
import getSize from './getSize';
import assignCoords from './assignCoords';
import assignSection from './assignSection';
import cumulativeSum from './cumulativeSum';
import filterAndAssignValue from './filterAndAssignValue_CCPY_CC';
import getAggregator from './get_CCPY_CC_Aggregator';
import defaultGetColorGetter from './getProductColorGetter';
import getSectionGetter from './getProductSectionGetter';
import getSubSectionGetter from './getProductSubSectionGetter';
import getValueGetter from './getValueGetter';
import groupIntoRibbons from './groupIntoRibbons';
import {
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

interface ICCPYDatum {
  product_id: number;
  location_id: number;
  year: number;
  partner_id: number;
  export_value: number;
  import_value: number;
}

export interface IMergeInput {
  // Discriminant:
  subject: Subject.Product;
  source: DataSource.CCPY;

  mainData: ILoadable<ICCPYDatum[]>;
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
  inflationAdjustment: InflationAdjustment;
  populationAdjustment: PopulationAdjustment;
  layout: Layout;
  startYear: number;
  endYear: number;
  partner: number;

  // Used in testing:
  getColorGetter?: (productClass: ProductClass) => (section: number) => string;
}

const merge = (input: IMergeInput): ILoadable<IMergeOutput> => {
  const {
    mainData, deflatorsData, inflationAdjustment, populationData, populationAdjustment,
    metadata, level, productClass,
    high2LowMapping, high2MidMapping,
    startYear, endYear,
    tradeDirection, tradeFlow,
    getColorGetter = defaultGetColorGetter,
    deselectedCategories, ordering, layout,
    svgWidth, svgHeight, subject, partner,
  } = input;
  const getValue = getValueGetter(tradeFlow, tradeDirection);
  const withValue = filterAndAssignValue({
    data: mainData,
    deflators: deflatorsData,
    populationData,
    populationAdjustment,
    inflationAdjustment, startYear, endYear, getValue,
    partner,
  });
  const getSection = getSectionGetter(high2LowMapping, metadata, level);
  const getSubSection = getSubSectionGetter(high2LowMapping, high2MidMapping, metadata, level, productClass);
  const getColor = getColorGetter(productClass);
  const assignedSection = assignSection<ICCPYDatum>(
    withValue, getSection, getSubSection, deselectedCategories, getColor,
  );
  const aggregate = getAggregator({metadata, productClass, level});
  const groupedIntoRibbons = groupIntoRibbons(
    assignedSection, aggregate, ordering, layout,
    inflationAdjustment, PopulationAdjustment.NotAdjusted, tradeDirection, tradeFlow,
  );
  const cumulativeSummed = cumulativeSum(groupedIntoRibbons);
  const size = getSize(svgWidth, svgHeight);
  const output = assignCoords(
    cumulativeSummed, size, layout, startYear, endYear, subject,
  );
  return output;
};

export default merge;
