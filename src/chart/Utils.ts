import minBy from 'lodash/minBy';
import {
  scaleLinear,
} from 'd3-scale';

export const getLinearScale =
  (domain: [number, number], range: [number, number]) =>
    scaleLinear<number, number>().domain(domain) .range(range);

// These types are used for properties shown in a graph detail overlay, like RCA, distance,
// opportunity gain:
export enum DisplayValueStatus {
  // Value is present and display that value:
  Show = 'Present',
  // Value is not applicable and display "N/A":
  ShowNotApplicable = 'NotApplicable',

  ShowNotAvailable = 'ShowNotAvailable',
  // Do not display value:
  DoNotShow = 'NotPresent',
}

export type DisplayValue = {
  status: DisplayValueStatus.Show,
  value: number | string,
} | {
  status: DisplayValueStatus.DoNotShow,
} | {
  status: DisplayValueStatus.ShowNotApplicable,
} | {
  status: DisplayValueStatus.ShowNotAvailable;
};

export interface IDetailOverlayRow {
  label: string;
  value: number | string | DisplayValue;
}

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

  tooltipInfo: IDetailOverlayRow[];
  detailOverlayInfo: IDetailOverlayRow[];
}


// Find closest data point horizontally to a given mouse x-coordinate (`desiredX`):
export const findClosestDataPoint =
  (dataPoints: IYearDataPoint[], desiredX: number): IYearDataPoint =>
    minBy(dataPoints, ({x}) => Math.abs(x - desiredX))!;

export enum DataSource {
  CPY = 'CPY',
  CCY = 'CCY',
  CCPY = 'CCPY',
}

export enum GraphSubject {
  Product = 'Product',
  Country = 'Country',
}

export type IDiscriminant = {
  source: DataSource.CPY,
  subject: GraphSubject.Product,
} | {
  source: DataSource.CPY,
  subject: GraphSubject.Country,
} | {
  source: DataSource.CCY,
  subject: GraphSubject.Country,
} | {
  source: DataSource.CCPY,
  subject: GraphSubject.Product,
} | {
  source: DataSource.CCPY,
  subject: GraphSubject.Country,
};

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

export enum TradeDirection {
  export = 'export',
  import = 'import',
}

export enum TradeFlow {
  Gross = 'Gross',
  Net = 'Net',
}

type TextInRibbon = {
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
