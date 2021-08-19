import {
  CountryMetadatumLevel as Level,
  failIfValidOrNonExhaustive,
  getCountryDropdownLabel,
  getCountryDropdownSearchString,
  ILoadable,
  LoadableStatus,
  IMetadatum,
} from './Utils';
import {
  SubSectionGetter,
} from './internalUtils';

const getSubSectionGetter = <T>(
    levelMappingStatus: ILoadable<Map<number, number>>,
    metadataStatus: ILoadable<Map<number, IMetadatum>>,
    level: Level,
    getId: (datum: T) => number,
  ): ILoadable<SubSectionGetter<T>> => {
  if (levelMappingStatus.status === LoadableStatus.Initial ||
      metadataStatus.status === LoadableStatus.Initial) {

    return {status: LoadableStatus.Initial};
  } else if (levelMappingStatus.status === LoadableStatus.Loading ||
              metadataStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};
  } else if (levelMappingStatus.status === LoadableStatus.NotPresent ||
              metadataStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};

  } else if (levelMappingStatus.status === LoadableStatus.Present ||
              metadataStatus.status === LoadableStatus.Present) {
    const {data: levelMapping} = levelMappingStatus;
    const {data: metadata} = metadataStatus;
    const getLabelAndDropdownInfo = (locationId: number) => {
      const retrievedMetadatum = metadata.get(locationId);
      if (retrievedMetadatum === undefined) {
        throw new Error('Cannot find metadata for location ' + locationId);
      }
      const {name_en, name_short_en, code} = retrievedMetadatum;
      return {
        longLabel: name_en,
        shortLabel: name_short_en,
        dropdownValue: locationId,
        dropdownLabel: getCountryDropdownLabel(name_short_en, {level, code}),
        dropdownSearchString: getCountryDropdownSearchString(name_short_en, name_en, {level, code}),
      };
    };

    let getSubSection: SubSectionGetter<T>;
    switch (level) {
      case Level.country:
        getSubSection = (datum: T) => {
          const id = getId(datum);
          return {
            ...getLabelAndDropdownInfo(id),
            subSection: id,
          };
        };
        break;
      case Level.region:
        getSubSection = (datum: T) => {
          const id = getId(datum);
          const retrievedRegion = levelMapping.get(id);
          if (retrievedRegion === undefined) {
            throw new Error('Cannot retrieved metadata for location ' + id);
          }
          return {
            ...getLabelAndDropdownInfo(retrievedRegion),
            subSection: retrievedRegion,
          };

        };
        break;
      default:
        failIfValidOrNonExhaustive(level, 'Invalid region level type');
        // The following lines will never be executed:
        getSubSection = () => 1 as any;
    }
    return {
      status: LoadableStatus.Present,
      data: getSubSection,
    };
  } else {
    failIfValidOrNonExhaustive(levelMappingStatus, 'Invalid loadable type');
    // failIfValidOrNonExhaustive(metadataStatus, 'Invalid loadable type');
    // The following lines will never be executed:
    return {status: LoadableStatus.NotPresent};

  }
};

export default getSubSectionGetter;
