import sumBy from 'lodash/sumBy';
import {
  ProductClass,
  failIfValidOrNonExhaustive,
  getDisplayedProductCode,
  ICCPYDatum,
  ILoadable,
  LoadableStatus,
  ProductMetadatumLevel as Level,
  IMetadatum,
  isProductIdService,
} from './Utils';
import {
  DisplayValueStatus,
  IDetailOverlayRow as IRow,
} from '../chart/Utils';
import {
  AggregatePerYearPerSubSection,
  IDatumPerYearPerRibbonWithoutFinalValue,
  WithSection,
  WithValue,
  WithYear,
} from './internalUtils';

type InputDatum = WithYear<WithSection<WithValue<ICCPYDatum>>>;

const codeLabel = 'Code';
const yearLabel = 'Year';
const pciLabel = 'Product Complexity Index (PCI)';

const getAggregator = (input: {
    metadata: ILoadable<Map<number, IMetadatum>>,
    productClass: ProductClass,
    level: Level,
  }): ILoadable<AggregatePerYearPerSubSection<ICCPYDatum>> => {
  const {
    metadata: metadataStatus,
    productClass, level,
  } = input;

  if (metadataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (metadataStatus.status === LoadableStatus.Present) {
    const {data: metadata} = metadataStatus;

    let aggregateValue: (input: InputDatum[], subSection: number) => number;
    if (level === Level.fourDigit || level === Level.sixDigit) {
      aggregateValue = (inputData, subSection) => {
        const soleElem = inputData[0];
        if (soleElem === undefined) {
          throw new Error('input array for subSection ' + subSection + ' must have at least one element.');
        }
        return soleElem.value;
      };
    } else if (level === Level.twoDigit || level === Level.section) {
      aggregateValue = (inputData) => sumBy(inputData, 'value');
    } else {
      failIfValidOrNonExhaustive(level, 'Invalid level value');
      // The following lines will never be executed:
      aggregateValue = undefined as any;
    }

    const func = (inputData: InputDatum[], subSection: number, year: number) => {
      const aggregatedValue = aggregateValue(inputData, subSection);

      const retrievedMetadatum = metadata.get(subSection);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadatum for product ' + subSection);
      }

      const {code} = retrievedMetadatum;
      const codeInfo: IRow = {
        label: codeLabel,
        value: getDisplayedProductCode(code, productClass, Level.fourDigit),
      };
      const yearInfo: IRow = {label: yearLabel, value: year};
      const pciInfo: IRow = {
        label: pciLabel,
        value: {status: DisplayValueStatus.ShowNotApplicable},
      };

      let detailOverlayInfoBeforeValue: IRow[], tooltipInfo: IRow[];
      if (isProductIdService(retrievedMetadatum.id, productClass)) {
        detailOverlayInfoBeforeValue = [yearInfo];
        tooltipInfo = [yearInfo];
      } else {
        detailOverlayInfoBeforeValue = [codeInfo, yearInfo];
        tooltipInfo = [codeInfo, yearInfo];
      }

      const detailOverlayInfoAfterValue = [pciInfo];

      const result: IDatumPerYearPerRibbonWithoutFinalValue = {
        year,
        absoluteValue: aggregatedValue,
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

export default getAggregator;
