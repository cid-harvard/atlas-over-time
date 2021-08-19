import {
  failIfValidOrNonExhaustive,
  ILoadable,
  LoadableStatus,
  ProductMetadatumLevel as Level,
  IMetadatum,
} from './Utils';
import {
  GetNumericValue,
  IProduct,
} from './internalUtils';

const getSectionGetter = <T extends IProduct>(
    high2LowMappingStatus: ILoadable<Map<number, number>>,
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    level: Level,
  ): ILoadable<GetNumericValue<T>> => {

  if (high2LowMappingStatus.status === LoadableStatus.Initial ||
      metadataStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (high2LowMappingStatus.status === LoadableStatus.Loading ||
              metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (high2LowMappingStatus.status === LoadableStatus.NotPresent ||
              metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (high2LowMappingStatus.status === LoadableStatus.Present ||
              metadataStatus.status === LoadableStatus.Present) {
    const {data: high2LowMapping} = high2LowMappingStatus;
    const {data: metadata} = metadataStatus;
    let getSection: GetNumericValue<T>;
    if (level === Level.section || level === Level.twoDigit || level === Level.fourDigit) {
      getSection = ({product_id}) => {
        const retrievedSection = high2LowMapping.get(product_id);
        if (retrievedSection === undefined) {
          throw new Error('Could not find section for product ' + product_id);
        }
        return retrievedSection;
      };
    } else if (level === Level.sixDigit) {
      getSection = ({product_id}) => {
        const retrievedMetadatum = metadata.get(product_id);
        if (retrievedMetadatum === undefined) {
          throw new Error('Cannot find metadata for product ' + product_id);
        }
        const {parent_id} = retrievedMetadatum;
        if (parent_id === null) {
          throw new Error('Six digit product ' + product_id + ' should not have parent id of null');
        }
        const section = high2LowMapping.get(parent_id);
        if (section === undefined) {
          throw new Error('Could not find section for product ' + product_id);
        }
        return section;
      };
    } else {
      failIfValidOrNonExhaustive(level, 'Invalid product level');
      getSection = undefined as any;
    }
    return {
      status: LoadableStatus.Present,
      data: getSection,
    };
  } else {
    failIfValidOrNonExhaustive(high2LowMappingStatus, 'Invalid loadable type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default getSectionGetter;
