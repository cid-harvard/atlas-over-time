import {
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import {
  IPYDatum,
  InflationAdjustment,
  PopulationAdjustment,
} from './Utils';

export const getPYHash = (product_id: number, year: number) => `${product_id}-${year}`;

export const getCYHash = (location_id: number, year: number) => `${location_id}-${year}`;

export type ScaleFactorsData = {
  inflationAdjustment: InflationAdjustment.NotAdjusted;
  populationAdjustment: PopulationAdjustment.NotAdjusted;
} | {
  availableYears: number[];
  inflation: InflationAdjustment.Adjusted;
  populationAdjustment: PopulationAdjustment.NotAdjusted;
} | {
  availableYears: number[];
  inflation: InflationAdjustment.NotAdjusted;
  populationAdjustment: PopulationAdjustment.Adjusted;
} | {
  availableYears: number[];
  inflation: InflationAdjustment.Adjusted;
  populationAdjustment: PopulationAdjustment.Adjusted;
};

export interface IDeflatorsMap {
  dataByProductYear: Map<string, IPYDatum>;
  dataByYear: Map<number, number>;
  availableYears: Set<number>;
}

export interface IPopulationMap {
  dataByCountryYear: Map<string, number>;
  availableYears: Map<number, Set<number>>;
}

export type WithValue<T> = T & {
  value: number;
};

export type WithSection<T> = T & {
  section: number;
  subSection: number;
  color: string;
  shortLabel: string;
  longLabel: string;
  dropdownValue: number;
  dropdownLabel: string;
  dropdownSearchString: string;
};

export type WithYear<T> = T & {
  year: number;
};

export type GetNumericValue<T> = (input: T) => number;

export type SubSectionGetter<T> = (input: T) => {
  subSection: number;
  shortLabel: string;
  longLabel: string;
  dropdownValue: number;
  dropdownLabel: string;
  dropdownSearchString: string;
};

export interface IProduct {
  product_id: number;
}

export interface IIntermediateDatumPerYearPerRibbon {
  year: number;
  value: number;
  tooltipInfo: IRow[];
  detailOverlayInfo: IRow[];
  ribbonId: number;
  yAxisTooltipInfo: string;
}

export interface IIntermediateSubSection {
  ribbonId: number;
  color: string;
  shortLabel: string;
  longLabel: string;
  section: number;
  dataPerYear: IIntermediateDatumPerYearPerRibbon[];
  dropdownValue: number;
  dropdownLabel: string;
  dropdownSearchString: string;
}

export interface IAccumulatedPerYear {
  year: number;
  upperValue: number;
  lowerValue: number;
  hasActualValue: boolean;
  yAxisTooltipInfo: string;
  tooltipInfo: IRow[];
  detailOverlayInfo: IRow[];
}

export interface IAccumulatedRibbon {
  ribbonId: number;
  section: number;
  color: string;
  pointsOnCurve: IAccumulatedPerYear[];
  shortLabel: string;
  longLabel: string;
  dropdownValue: number;
  dropdownLabel: string;
  dropdownSearchString: string;
}

export interface ISubSectionWithoutFinalValue {
  ribbonId: number;
  color: string;
  shortLabel: string;
  longLabel: string;
  section: number;
  dataPerYear: IDatumPerYearPerRibbonWithoutFinalValue[];
  dropdownValue: number;
  dropdownLabel: string;
  dropdownSearchString: string;
}

export type AggregatePerYearPerSubSection<T> =
  (input: T[], subSection: number, year: number) => IDatumPerYearPerRibbonWithoutFinalValue;

export interface IDatumPerYearPerRibbonWithoutFinalValue {
  year: number;
  // Value in absolute terms (rather than percentage):
  absoluteValue: number;
  tooltipInfo: IRow[];
  detailOverlayInfoBeforeValue: IRow[];
  detailOverlayInfoAfterValue: IRow[];
  ribbonId: number;
}
