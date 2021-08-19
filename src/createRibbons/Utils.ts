import {
  DataSource as Source,
  GraphSubject as Subject,
  IDetailOverlayRow as IRow,
} from '../Chart/Utils';

// Empirically measured size of character `W` (suposedly the character that
// takes up the most area) of font "Source Sans Pro" at 16px:
export const measuredCharacterWidth = 12.3;
export const measuredCharacterHeight = 18;
export const referenceFontSize = 16;

// Errors out at compile time if a discriminating `switch` doesn't catch all cases
// of an enum and at run time if for some reason an invalid enum value is passed.
// See https://basarat.gitbooks.io/typescript/content/docs/types/discriminated-unions.html
export function failIfValidOrNonExhaustive(_variable: never, message: string): never {
  throw new Error(message);
}

// 3 ways that the stack graph can show "no data": 1) there's actually no data to
// show 2) user hasn't selected a country/product 3) user hasn't selected a
// country/partner.
export enum ErrorCode {
  NoData,
  PickCountryOrProduct,
  PickCountryOrPartner,
}

// How ribbons are ordered:
export enum Ordering {
  Community = 'Community',
  Total = 'Total',
}

// Whether each year's data should be an absolute value or percentage relative
// to the total for that year:
export enum Layout {
  Value = 'Value',
  Share = 'Share',
}

// Indicates whether or not the monetary values should be adjusted for inflation and population:
export enum InflationAdjustment {
  Adjusted = 'InflationAdjusted',
  NotAdjusted = 'InflationNotAdjusted',
}

export enum PopulationAdjustment {
  Adjusted = 'PopulationAdjusted',
  NotAdjusted = 'PopulationNotAdjusted',
}

// Data associated with each year within a ribbon:
export interface IYearDataPoint {
  year: number;
  // The value shown on the y-axis when user hovers over a particular year
  // within each ribbon:
  displayedValue: string;

  // Coordinates:
  x: number;
  lowerY: number;
  upperY: number;

  // The ID of the parent ribbon that this data point belongs to:
  ribbonId: number;

  tooltipInfo: IRow[];
  detailOverlayInfo: IRow[];
}

export type TextInRibbon = {
  showText: false,
} | {
  showText: true,
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  angle: number;
  fontSize: number;
  // `textSplitIntoLines` are broken into separate lines for use in SVG which
  // does not support text wrapping. `textUnsplit` is used in DOM:
  textSplitIntoLines: string[]
  textUnsplit: string;
};

export interface IRibbon {
  dataPoints: IYearDataPoint[];
  id: number;
  // Top-level category:
  section: number;

  color: string;
  shortLabel: string;
  longLabel: string;

  // the `d` attribute of the ribbon's `path` element:
  path: string;

  // Layout info for ribbon label:
  textInRibbon: TextInRibbon;
}

export interface ITooltipMapDatum {
  id: number;
  shortLabel: string;
  longLabel: string;
  color: string;
}

export interface IMergeOutput {
  ribbons: IRibbon[];
  tooltipMap: Record<string, ITooltipMapDatum>;
  yearsWithData: number[];
  subject: Subject;
  yAxisMin: number;
  yAxisMax: number;
  xAxisMin: number;
  xAxisMax: number;
  svgWidth: number;
  svgHeight: number;
}

export const getDataPointTooltipKey =
  ({ribbonId, year}: IYearDataPoint) => `tooltip-${ribbonId}-${year}`;

export type IDiscriminant = {
  source: Source.CPY,
  subject: Subject.Product,
} | {
  source: Source.CPY,
  subject: Subject.Country,
} | {
  source: Source.CCY,
  subject: Subject.Country,
} | {
  source: Source.CCPY,
  subject: Subject.Product,
} | {
  source: Source.CCPY,
  subject: Subject.Country,
};
export enum TradeDirection {
  export = 'export',
  import = 'import',
}

export enum TradeFlow {
  Gross = 'Gross',
  Net = 'Net',
}

export enum ProductClass {
  HS = 'HS',
  SITC = 'SITC',
}

export enum Target {
  Product = 'Product',
  Partner = 'Partner',
}

export enum LoadableStatus {
  NotPresent = 'NotPresent',
  Present = 'Present',
  Loading = 'Loading',
  // This state is needed to accommodate this situation: when the application state changes,
  // the `mapStateToProps` function will be called to figure out `ICacheState`. However, at that
  // point, the fetch request still hasn't been sent out yet so without this `Initial` state,
  // we will have to use the `NotPresent` state. If that's the case, the graph component can't
  // distinguish between this state from the state of an actual failed request:
  Initial = 'Initial',
}

export type ILoadable<T> = {
  status: LoadableStatus.NotPresent,
} | {
  status: LoadableStatus.Loading,
} | {
  status: LoadableStatus.Initial,
} | {
  status: LoadableStatus.Present,
  data: T,
};

export interface IHasNoError {
  hasError: false;
  value: ILoadable<IMergeOutput>;
}

export enum ProductMetadatumLevel {
  section = 'section',
  twoDigit = '2digit',
  fourDigit = '4digit',
  sixDigit = '6digit',
}

export enum CountryMetadatumLevel {
  country = 'country',
  region = 'region',
}

interface ILevelIndependent {
  code: string;
  description_en: string | null;
  description_es: string | null;
  id: number;
  name_en: string;
  name_es: string;
  name_short_en: string;
  name_short_es: string;
}

type ILevelSpecific = {
  level: ProductMetadatumLevel.sixDigit;
  parent_id: number;
} | {
  level: ProductMetadatumLevel.fourDigit;
  parent_id: number;
} | {
  level: ProductMetadatumLevel.twoDigit;
  parent_id: number;
} | {
  level: ProductMetadatumLevel.section;
  parent_id: null;
};

export type IMetadatum = ILevelIndependent & ILevelSpecific;

export interface ISize {
  width: number;
  height: number;
}

// Like lodash's `keyBy` but the result is a `Map`. Keys are assumed to be unique:
export const keyByMap =
  <Key, Value>(getKey: (value: Value) => Key) => (list: Value[]): Map<Key, Value> => {

  const pairs: Array<[Key, Value]> = list.map(
    value => ([getKey(value), value] as [Key, Value]),
  );
  const map: Map<Key, Value> = new Map(pairs);
  return map;
};

export const groupByMapObjectProp = <Datum, Key extends keyof Datum>(
    collection: Datum[], keyPropertyName: Key,
  ) => {

  const result: Map<Datum[Key], Datum[]> = new Map();
  const collectionLength = collection.length;
  for (let i = 0; i < collectionLength; i += 1) {
    const elem = collection[i];
    const key = elem[keyPropertyName];

    let valueForKey: Datum[];
    const currentValuesForKey = result.get(key);
    if (currentValuesForKey === undefined) {
      // If there's no value for key yet, create an empty value for it:
      valueForKey = [];
      result.set(key, valueForKey);
    } else {
      valueForKey = currentValuesForKey;
    }

    valueForKey.push(elem);
  }
  return result;

};
export type ICPYDatum = {
  product_id: number;
  location_id: number;
  year: number;
  export_value: number;
  import_value: number;
} & (
  {
    export_rca: number
    distance: number
    cog: number,
  } | {
    export_rca: null
    distance: null
    cog: null,
  }
);

// Data returned from country-country-year endpoint:
export interface ICCYDatum {
  location_id: number;
  partner_id: number;
  year: number;
  export_value: number;
  import_value: number;
}

// Data returned from country-country-product-year endpoint:
export interface ICCPYDatum {
  product_id: number;
  location_id: number;
  year: number;
  partner_id: number;
  export_value: number;
  import_value: number;
}

// Data returned from product-year endpoint:
export interface IPYDatum {
  export_value: number;
  import_value: number;
  pci: number | null;
  product_id: number;
  year: number;
  deflator: number;
}

export interface ICYDatum {
  location_id: number;
  population: number;
  year: number;
  coi: number;
  hs_coi: number;
  eci: number;
  hs_eci: number;
}

export interface IYearlyDatum {
  deflator: number;
  year: number;
}
export const isProductIdService = (id: number, productClass: ProductClass): boolean => {
  if (productClass === ProductClass.HS) {
          // section level:
    return (id === 10) ||
          // 2-digit level:
            (id === 400) || (id === 401) || (id === 402) || (id === 403) || (id === 404) ||
          // 4-digit level:
            (id === 4000) || (id === 4001) || (id === 4002) || (id === 4003) || (id === 4004) ||
          // 6-digit level:
            (id === 11000) || (id === 11001) || (id === 11002) || (id === 11003) || (id === 11004);

  } else if (productClass === ProductClass.SITC) {
            // section level:
    return (id === 10) ||
            // 2-digit level:
              (id === 200) || (id === 201) || (id === 202) || (id === 203) || (id === 204) ||
            // 4-digit level:
              (id === 2000) || (id === 2001) || (id === 2002) || (id === 2003) || (id === 2004);
  } else {
    failIfValidOrNonExhaustive(productClass, 'Invalid product class');
    return false;
  }

};

export const productLevelToDigit = (level: ProductMetadatumLevel): number => {
  if (level === ProductMetadatumLevel.sixDigit) {
    return 6;
  } else if (level === ProductMetadatumLevel.fourDigit) {
    return 4;
  } else if (level === ProductMetadatumLevel.twoDigit) {
    return 2;
  } else if (level === ProductMetadatumLevel.section) {
    return 1;
  } else {
    failIfValidOrNonExhaustive(level, 'Invalid product level');
    return 0;
  }
};

export const getDisplayedProductCode =
    (code: string, productClass: ProductClass, level: ProductMetadatumLevel) => {

  const productClassPhrase = (productClass === ProductClass.HS) ? 'HS' : 'SITC';
  // Make the space between product class and product code non-breaking:
  return `${code} ${productClassPhrase}${productLevelToDigit(level)}`.replace(/ /g, '\u00a0');
};

enum HSColor {
  vegetable = '#F5CF23',
  minerals = 'rgb(187, 150, 138)',
  chemicals = 'rgb(197, 123, 217)',
  textiles = 'rgb(125, 218, 161)',
  stone = 'rgb(218, 180, 125)',
  metals = 'rgb(217, 123, 123)',
  machinery = 'rgb(123, 162, 217)',
  electronics = 'rgb(125, 218, 218)',
  transport = 'rgb(141, 123, 216)',
  others = '#2a607c',
  services = 'rgb(178, 61, 109)',
}

export const hsServicesCategory = 10;

export const hsColorsMap: Map<number, string> = new Map([
  [0, HSColor.textiles],
  [1, HSColor.vegetable],
  [2, HSColor.stone],
  [3, HSColor.minerals],
  [4, HSColor.metals],
  [5, HSColor.chemicals],
  [6, HSColor.transport],
  [7, HSColor.machinery],
  [8, HSColor.electronics],
  [9, HSColor.others],
  [hsServicesCategory, HSColor.services],
]);


enum SITCColor {
  food = '#F5CF23',
  drinks = '#FE85AD',
  materials = 'rgb(217, 123, 123)',
  mineral = 'rgb(187, 150, 138)',
  fats = '#FDA81B',
  chemical = 'rgb(197, 123, 217)',
  goods = '#DA3329',
  machinery = 'rgb(123, 162, 217)',
  commodities = '#00A6AA',
  miscellaneous = '#2a607c',
  services = 'rgb(178, 61, 109)',
}

export const sitcServicesCategory = 10;
export const sitcColorMap: Map<number, string> = new Map([
  [0, SITCColor.food],
  [1, SITCColor.drinks],
  [2, SITCColor.materials],
  [3, SITCColor.mineral],
  [4, SITCColor.fats],
  [5, SITCColor.chemical],
  [6, SITCColor.goods],
  [7, SITCColor.machinery],
  [8, SITCColor.commodities],
  [9, SITCColor.miscellaneous],
  [sitcServicesCategory, SITCColor.services],
]);

export const isProductCodeService = (code: string) => {
  const services = 'services';
  const insuranceFinance = 'financial';
  const ict = 'ict';
  const other = 'other';
  const transport = 'transport';
  const travel = 'travel';
  return (code === services) || (code === insuranceFinance) ||
          (code === ict) || (code === other) || (code === transport) || (code === travel);
};

export const getProductDropdownLabel =
    (shortName: string, productClass: ProductClass, code: string, level: ProductMetadatumLevel): string => {

  if (isProductCodeService(code)) {
    return shortName;
  } else {
    return `${shortName} (${getDisplayedProductCode(code, productClass, level)})`;
  }
};

export const getProductSearchString = (shortName: string, productClass: ProductClass, code: string) => {

  const productClassPhrase = (productClass === ProductClass.HS) ? 'HS' : 'SITC';
  return `${shortName} ${productClassPhrase} ${code}`.toLowerCase();
};

export const getCountryDropdownLabel = (
    shortName: string,
    codeInfo: {level: CountryMetadatumLevel, code: string},
  ) => {
  if (codeInfo.level === CountryMetadatumLevel.country) {
    return `${shortName} (${codeInfo.code})`;
  } else {
    return `${shortName}`;
  }
};

export const getCountryDropdownSearchString = (
    shortName: string,
    longName: string,
    codeInfo: {level: CountryMetadatumLevel, code: string},
  ) => {

  // For regions, the `code` is a digit (instead of country ISO code) which is not useful:
  const codePhrase = (codeInfo.level === CountryMetadatumLevel.country) ? codeInfo.code : '';
  return `${shortName} ${longName} ${codePhrase}`.toLowerCase();
};
