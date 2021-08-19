import sumBy from 'lodash/sumBy';
import {
  ProductClass,
  failIfValidOrNonExhaustive,
  getDisplayedProductCode,
  ICPYDatum,
  ILoadable,
  LoadableStatus,
  ProductMetadatumLevel as Level,
  isProductIdService,
  IMetadatum,
} from './Utils';
import {
  DisplayValue,
  DisplayValueStatus,
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import {
  AggregatePerYearPerSubSection,
  getPYHash,
  IDatumPerYearPerRibbonWithoutFinalValue,
  IDeflatorsMap,
  WithSection,
  WithValue,
  WithYear,
} from './internalUtils';
import {format} from 'd3-format';

const formatRCA = format('.3');
const formatDistance = format('.3');
const formatPCI = format('.3');
const formatOpportunityGain = format('.3');

type InputDatum = WithYear<WithSection<WithValue<ICPYDatum>>>;

const rcaLabel = 'Revealed Comparative Advantage (RCA)';
const distanceLabel = 'Distance';
const opportunityGainLabel = 'Opportunity Gain';
const codeLabel = 'Code';
const yearLabel = 'Year';
const pciLabel = 'Product Complexity Index (PCI)';

export const getSixDigitAggregator = (
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    productClass: ProductClass,
  ): ILoadable<AggregatePerYearPerSubSection<ICPYDatum>> => {

  if (metadataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (metadataStatus.status === LoadableStatus.Present) {
    const {data: metadata} = metadataStatus;

    const func = (input: InputDatum[], subSection: number, year: number) => {
      const soleElem = input[0];
      if (soleElem === undefined) {
        throw new Error('input array for subSection ' + subSection + ' must have at least one element.');
      }
      const {value} = soleElem;
      const retrievedMetadatum = metadata.get(subSection);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadatum for product ' + subSection);
      }
      const {code} = retrievedMetadatum;
      const rcaValue: DisplayValue = {status: DisplayValueStatus.ShowNotAvailable};
      const distanceValue: DisplayValue = {status: DisplayValueStatus.ShowNotAvailable};
      const opportunityGainValue: DisplayValue = {status: DisplayValueStatus.ShowNotAvailable};
      const pciValue: DisplayValue = {status: DisplayValueStatus.ShowNotAvailable};
      const codeInfo: IRow = {
        label: codeLabel,
        value: getDisplayedProductCode(code, productClass, Level.fourDigit),
      };
      const yearInfo: IRow = {label: yearLabel, value: year};
      const rcaInfo: IRow = {label: rcaLabel, value: rcaValue};
      const opportunityGainInfo: IRow = {label: opportunityGainLabel, value: opportunityGainValue};
      const distanceInfo: IRow = {label: distanceLabel, value: distanceValue};
      const pciInfo: IRow = {
        label: pciLabel,
        value: pciValue,
      };

      const detailOverlayInfoAfterValue = [rcaInfo, pciInfo, opportunityGainInfo, distanceInfo];

      let detailOverlayInfoBeforeValue: IRow[], tooltipInfo: IRow[];
      if (isProductIdService(retrievedMetadatum.id, productClass)) {
        detailOverlayInfoBeforeValue = [yearInfo];
        tooltipInfo = [yearInfo];
      } else {
        detailOverlayInfoBeforeValue = [codeInfo, yearInfo];
        tooltipInfo = [codeInfo, yearInfo];
      }

      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: value,
        detailOverlayInfoAfterValue, detailOverlayInfoBeforeValue,
        tooltipInfo,
        ribbonId: subSection,
      };
      return result;
    };

    return {status: LoadableStatus.Present, data: func};
  } else {
    failIfValidOrNonExhaustive(metadataStatus, 'Invalid loadable status');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export const getFourDigitAggregator = (
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    data_PY_Status: ILoadable<IDeflatorsMap>,
    productClass: ProductClass,
  ): ILoadable<AggregatePerYearPerSubSection<ICPYDatum>> => {
  if (metadataStatus.status === LoadableStatus.Initial ||
      data_PY_Status.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (metadataStatus.status === LoadableStatus.Loading ||
              data_PY_Status.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (metadataStatus.status === LoadableStatus.NotPresent ||
              data_PY_Status.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (metadataStatus.status === LoadableStatus.Present ||
              data_PY_Status.status === LoadableStatus.Present) {
    const {data: metadata} = metadataStatus;
    const {data: dataPY} = data_PY_Status;

    const func = (input: InputDatum[], subSection: number, year: number) => {
      const soleElem = input[0];
      const key_PY = getPYHash(subSection, year);
      const retrieved_PY_Datum = dataPY.dataByProductYear.get(key_PY);
      if (soleElem === undefined) {
        throw new Error('input array for subSection ' + subSection + ' must have at least one element.');
      }
      if (retrieved_PY_Datum === undefined) {
        throw new Error('Cannot find PCI for product ' + subSection + ' for year ' + year);
      }
      const {value, export_rca, distance, cog} = soleElem;
      const {pci} = retrieved_PY_Datum;

      const retrievedMetadatum = metadata.get(subSection);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadatum for product ' + subSection);
      }

      const {code} = retrievedMetadatum;
      const rcaValue: DisplayValue | string = (export_rca === null) ?
                                              {status: DisplayValueStatus.ShowNotAvailable} :
                                              formatRCA(export_rca);
      const distanceValue: DisplayValue | string = (distance === null) ?
                                                  {status: DisplayValueStatus.ShowNotAvailable} :
                                                  formatDistance(distance);
      const opportunityGainValue: DisplayValue | string = (cog === null) ?
                                                          {status: DisplayValueStatus.ShowNotAvailable} :
                                                          formatOpportunityGain(cog);
      const pciValue: DisplayValue | string = (pci === null) ?
                                                {status: DisplayValueStatus.ShowNotAvailable} :
                                                formatPCI(pci);
      const codeInfo: IRow = {
        label: codeLabel,
        value: getDisplayedProductCode(code, productClass, Level.fourDigit),
      };
      const yearInfo: IRow = {label: yearLabel, value: year};
      const rcaInfo: IRow = {label: rcaLabel, value: rcaValue};
      const opportunityGainInfo: IRow = {label: opportunityGainLabel, value: opportunityGainValue};
      const distanceInfo: IRow = {label: distanceLabel, value: distanceValue};
      const pciInfo: IRow = {
        label: pciLabel,
        value: pciValue,
      };

      let detailOverlayInfoBeforeValue: IRow[], tooltipInfo: IRow[];
      if (isProductIdService(retrievedMetadatum.id, productClass)) {
        detailOverlayInfoBeforeValue = [yearInfo];
        tooltipInfo = [yearInfo];
      } else {
        detailOverlayInfoBeforeValue = [codeInfo, yearInfo];
        tooltipInfo = [codeInfo, yearInfo];
      }
      const detailOverlayInfoAfterValue = [rcaInfo, pciInfo, opportunityGainInfo, distanceInfo];

      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: value,
        detailOverlayInfoAfterValue, detailOverlayInfoBeforeValue,
        tooltipInfo,
        ribbonId: subSection,
      };
      return result;
    };
    return {status: LoadableStatus.Present, data: func};
  } else {
    failIfValidOrNonExhaustive(metadataStatus, 'Invalid loadable status');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export const getLowerDetailLevelsAggregator = (
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    productClass: ProductClass,
    level: Level,
  ): ILoadable<AggregatePerYearPerSubSection<ICPYDatum>> => {
  if (metadataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (metadataStatus.status === LoadableStatus.Present) {
    const {data: metadata} = metadataStatus;
    const func = (input: InputDatum[], subSection: number, year: number) => {
      if (input.length <= 0) {
        throw new Error('input array must have at least one element.');
      }
      const valueSum = sumBy(input, 'value');
      const retrievedMetadatum = metadata.get(subSection);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadatum for product ' + subSection);
      }
      const {code} = retrievedMetadatum;
      const codeInfo: IRow = {
        label: codeLabel,
        value: getDisplayedProductCode(code, productClass, level),
      };
      const yearInfo: IRow = {label: yearLabel, value: year};
      const pciInfo: IRow = {
        label: pciLabel,
        value: {status: DisplayValueStatus.ShowNotApplicable},
      };
      const detailOverlayInfoAfterValue: IRow[] = [pciInfo];

      let detailOverlayInfoBeforeValue: IRow[], tooltipInfo: IRow[];
      if (isProductIdService(retrievedMetadatum.id, productClass)) {
        detailOverlayInfoBeforeValue = [yearInfo];
        tooltipInfo = [yearInfo];
      } else {
        detailOverlayInfoBeforeValue = [codeInfo, yearInfo];
        tooltipInfo = [codeInfo, yearInfo];
      }

      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: valueSum,
        detailOverlayInfoAfterValue, detailOverlayInfoBeforeValue,
        tooltipInfo,
        ribbonId: subSection,
      };
      return result;
    };
    return {status: LoadableStatus.Present, data: func};
  } else {
    failIfValidOrNonExhaustive(metadataStatus, 'Invalid loadable status');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};
