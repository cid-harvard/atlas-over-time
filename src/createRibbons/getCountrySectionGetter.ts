import {
  failIfValidOrNonExhaustive,
  ILoadable,
  LoadableStatus,
} from './Utils';
import {
  GetNumericValue,
} from './internalUtils';

const getSectionGetter = <T>(
    levelMappingStatus: ILoadable<Map<number, number>>,
    getId: (datum: T) => number,
  ): ILoadable<GetNumericValue<T>> => {

  if (levelMappingStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (levelMappingStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (levelMappingStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};
  } else if (levelMappingStatus.status === LoadableStatus.Present) {
    const {data: levelMapping} = levelMappingStatus;
    const getSection: GetNumericValue<T> = (datum: T) => {
      const id = getId(datum);
      const retrievedSection = levelMapping.get(id);
      if (retrievedSection === undefined) {
        throw new Error('Cannot find section for location ' + id);
      }
      return retrievedSection;
    };
    return {
      status: LoadableStatus.Present,
      data: getSection,
    };
  } else {
    failIfValidOrNonExhaustive(levelMappingStatus, 'Invalid loadable type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};
  }
};

export default getSectionGetter;
