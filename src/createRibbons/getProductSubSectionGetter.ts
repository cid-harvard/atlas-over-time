import {
  ProductClass,
  failIfValidOrNonExhaustive,
  getProductDropdownLabel,
  getProductSearchString,
  ILoadable,
  LoadableStatus,
  ProductMetadatumLevel as Level,
  IMetadatum,
} from './Utils';

import {
  IProduct,
  SubSectionGetter,
} from './internalUtils';

const getSubSectionGetter = <T extends IProduct>(
    high2LowMappingStatus: ILoadable<Map<number, number>>,
    high2MidMappingStatus: ILoadable<Map<number, number>>,
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    level: Level,
    productClass: ProductClass,
  ): ILoadable<SubSectionGetter<T>> => {

  if (high2LowMappingStatus.status === LoadableStatus.Initial ||
      high2MidMappingStatus.status === LoadableStatus.Initial ||
      metadataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (high2LowMappingStatus.status === LoadableStatus.Loading ||
              high2MidMappingStatus.status === LoadableStatus.Loading ||
              metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (high2LowMappingStatus.status === LoadableStatus.NotPresent ||
              high2MidMappingStatus.status === LoadableStatus.NotPresent ||
              metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (high2LowMappingStatus.status === LoadableStatus.Present ||
              high2MidMappingStatus.status === LoadableStatus.Present ||
              metadataStatus.status === LoadableStatus.Present) {
    const {data: high2Low} = high2LowMappingStatus;
    const {data: high2Mid} = high2MidMappingStatus;
    const {data: metadata} = metadataStatus;

    const getLabelsAndDropdownInfo = (product_id: number) => {
      const retrievedMetadatum = metadata.get(product_id);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadata for product ' + product_id);
      } else {
        const {name_en, name_short_en, code} = retrievedMetadatum;
        return {
          longLabel: name_en,
          shortLabel: name_short_en,
          dropdownValue: product_id,
          dropdownLabel: getProductDropdownLabel(name_short_en, productClass, code, level),
          dropdownSearchString: getProductSearchString(name_short_en, productClass, code),
        };
      }
    };

    let getSubSection: SubSectionGetter<T>;
    switch (level) {
      case Level.fourDigit:
      case Level.sixDigit:
        getSubSection = ({product_id}) => ({...getLabelsAndDropdownInfo(product_id), subSection: product_id});
        break;
      case Level.twoDigit:
        getSubSection = ({product_id}) => {
          const retrievedSubSection = high2Mid.get(product_id);
          if (retrievedSubSection === undefined) {
            throw new Error('Could not find section for product ' + product_id);
          }
          return {...getLabelsAndDropdownInfo(retrievedSubSection), subSection: retrievedSubSection};
        };
        break;
      case Level.section:
        getSubSection = ({product_id}) => {
          const retrievedSubSection = high2Low.get(product_id);
          if (retrievedSubSection === undefined) {
            throw new Error('Could not find section for product ' + product_id);
          }
          return {...getLabelsAndDropdownInfo(retrievedSubSection), subSection: retrievedSubSection};
        };
        break;
      default:
        failIfValidOrNonExhaustive(level, 'Invalid product level type');
        // The following lines will never be executed:
        getSubSection = () => 1 as any;
    }
    return {
      status: LoadableStatus.Present,
      data: getSubSection,
    };
  } else {
    failIfValidOrNonExhaustive(high2LowMappingStatus, 'Invalid loadable type');
    failIfValidOrNonExhaustive(high2MidMappingStatus, 'Invalid loadable type');
    failIfValidOrNonExhaustive(metadataStatus, 'Invalid loadable type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default getSubSectionGetter;
