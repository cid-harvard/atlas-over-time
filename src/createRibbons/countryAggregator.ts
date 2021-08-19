import sumBy from 'lodash/sumBy';
import {
  ILoadable,
  LoadableStatus,
} from './Utils';
import {
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import {
  AggregatePerYearPerSubSection,
  IDatumPerYearPerRibbonWithoutFinalValue,
} from './internalUtils';

interface IHaveValue {
  value: number;
}

const yearLabel = 'Year';

export const getCountryAggregator = <T extends IHaveValue>(): ILoadable<AggregatePerYearPerSubSection<T>> => {
    const func = (input: T[], subSection: number, year: number) => {
      const soleElem = input[0];
      if (soleElem === undefined) {
        throw new Error('input array must have at least one element.');
      }
      const {value} = soleElem;
      const yearInfo: IRow = {
        label: yearLabel,
        value: year,
      };
      const detailOverlayInfoBeforeValue = [yearInfo];
      const detailOverlayInfoAfterValue: IRow[] = [];
      const tooltipInfo: IRow[] = [yearInfo];
      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: value,
        detailOverlayInfoBeforeValue, detailOverlayInfoAfterValue,
        tooltipInfo,
        ribbonId: subSection,
      };
      return result;
    };
    return {status: LoadableStatus.Present, data: func};
};

export const getRegionAggregator = <T extends IHaveValue>(): ILoadable<AggregatePerYearPerSubSection<T>> => {
    const func = (input: T[], subSection: number, year: number) => {
      const valueSum = sumBy(input, 'value');
      const yearInfo: IRow = {
        label: yearLabel,
        value: year,
      };
      const detailOverlayInfoBeforeValue = [yearInfo];
      const detailOverlayInfoAfterValue: IRow[] = [];
      const tooltipInfo: IRow[] = [yearInfo];
      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: valueSum,
        detailOverlayInfoBeforeValue, detailOverlayInfoAfterValue,
        tooltipInfo,
        ribbonId: subSection,
      };
      return result;
    };
    return {status: LoadableStatus.Present, data: func};
};
