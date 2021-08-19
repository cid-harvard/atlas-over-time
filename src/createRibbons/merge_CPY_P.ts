import {
  ProductClass,
  TradeDirection,
  TradeFlow,
  CountryMetadatumLevel as Level,
  failIfValidOrNonExhaustive,
  ICPYDatum,
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
  InflationAdjustment,
  Layout,
  Ordering,
  PopulationAdjustment,
} from './Utils';

export interface IMergeInput {
  // Discriminants:
  subject: Subject.Country;
  source: Source.CPY;

  // Fetched data:
  mainData: ILoadable<ICPYDatum[]>;
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
  inflationAdjustment: InflationAdjustment;
  layout: Layout;
  startYear: number;

  // Used in testing:
  getColor?: (section: number) => string;
  endYear: number;
}

const merge = (input: IMergeInput) => {
  const {
    tradeDirection, tradeFlow, metadata,
    levelMapping,
    mainData, deflatorsData,
    startYear, endYear,
    inflationAdjustment,
    level,
    getColor = defaultGetColor,
    deselectedCategories,
    ordering, layout,
    svgHeight, svgWidth,
    subject,
  } = input;
  const getValue = getValueGetter(tradeFlow, tradeDirection);
  const withValue = filterAndAssignValue(
    mainData, deflatorsData,
    inflationAdjustment,
    startYear, endYear, getValue,
  );
  const getId = ({location_id}: ICPYDatum) => location_id;
  const getSection = getSectionGetter(levelMapping, getId);
  const getSubSection = getSubSectionGetter(levelMapping, metadata, level, getId);
  const assignedSection = assignSection<ICPYDatum>(
    withValue, getSection, getSubSection, deselectedCategories, getColor,
  );
  let aggregate: ILoadable<AggregatePerYearPerSubSection<ICPYDatum>>;
  if (level === Level.region) {
    aggregate = getRegionAggregator<WithValue<ICPYDatum>>();
  } else if (level === Level.country) {
    aggregate = getCountryAggregator<WithValue<ICPYDatum>>();
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
