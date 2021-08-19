import {
  ProductClass,
  TradeDirection,
  TradeFlow,
  CountryMetadatumLevel as Level,
  failIfValidOrNonExhaustive,
  ICCYDatum,
  ILoadable,
  IMetadatum,
} from './Utils';
import {
  DataSource as Source,
  GraphSubject as Subject,
} from '../chart/Utils';
import getSize from './getSize';
import assignCoords from './assignCoords';
import assignSection from './assignSection';
import {
  getCountryAggregator,
  getRegionAggregator,
} from './countryAggregator';
import cumulativeSum from './cumulativeSum';
import filterAndAssignValue from './filterAndAssignValueCountry';
import defaultGetColor from './getCountryColor';
import getSectionGetter from './getCountrySectionGetter';
import getSubSectionGetter from './getCountrySubSectionGetter';
import getValueGetter from './getValueGetter';
import groupIntoRibbons from './groupIntoRibbons';
import {
  AggregatePerYearPerSubSection,
  IDeflatorsMap,
  WithValue,
} from './internalUtils';
import {
  IMergeOutput,
  InflationAdjustment,
  Layout,
  Ordering,
  PopulationAdjustment,
} from './Utils';

export interface IMergeInput {
  subject: Subject.Country;
  source: Source.CCY;

  mainData: ILoadable<ICCYDatum[]>;
  metadata: ILoadable<Map<number, IMetadatum>>;
  levelMapping: ILoadable<Map<number, number>>;
  deflatorsData: ILoadable<IDeflatorsMap>;

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

  // Used in testing:
  getColor?: (section: number) => string;
}

const merge = (input: IMergeInput): ILoadable<IMergeOutput> => {
  const {
    tradeFlow, tradeDirection,
    metadata, level, deselectedCategories,
    mainData, deflatorsData,
    inflationAdjustment, startYear, endYear,
    levelMapping,
    getColor = defaultGetColor,
    ordering, layout,
    svgWidth, svgHeight,
    subject,
  } = input;
  const getValue = getValueGetter(tradeFlow, tradeDirection);
  const withValue = filterAndAssignValue(
    mainData, deflatorsData,
    inflationAdjustment,
    startYear, endYear, getValue,
  );
  const getId = ({partner_id}: ICCYDatum) => partner_id;
  const getSection = getSectionGetter(levelMapping, getId);
  const getSubSection = getSubSectionGetter(levelMapping, metadata, level, getId);
  const assignedSection = assignSection<ICCYDatum>(
    withValue, getSection, getSubSection, deselectedCategories, getColor,
  );
  let aggregate: ILoadable<AggregatePerYearPerSubSection<ICCYDatum>>;
  if (level === Level.region) {
    aggregate = getRegionAggregator<WithValue<ICCYDatum>>();
  } else if (level === Level.country) {
    aggregate = getCountryAggregator<WithValue<ICCYDatum>>();
  } else {
    failIfValidOrNonExhaustive(level, 'Invalid country level');
    // The following lines will never be executed:
    aggregate = undefined as any;
  }
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
