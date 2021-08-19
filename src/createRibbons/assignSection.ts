import {
  failIfValidOrNonExhaustive,
  ILoadable,
  LoadableStatus,
} from './Utils';
import {
  GetNumericValue,
  SubSectionGetter,
  WithSection,
  WithValue,
} from './internalUtils';

type OutputDatum<T> = WithSection<WithValue<T>>;

const assignAndFilterSection = <T>(
    dataStatus: ILoadable<Array<WithValue<T>>>,
    getSectionStatus: ILoadable<GetNumericValue<T>>,
    getSubSectionStatus: ILoadable<SubSectionGetter<T>>,
    deselectedCategories: number[],
    getColor: (section: number) => string,
  ) => {

  let result: ILoadable<Array<OutputDatum<T>>>;
  if (dataStatus.status === LoadableStatus.Initial ||
      getSectionStatus.status === LoadableStatus.Initial ||
      getSubSectionStatus.status === LoadableStatus.Initial) {
    result = {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.Loading ||
              getSectionStatus.status === LoadableStatus.Loading ||
              getSubSectionStatus.status === LoadableStatus.Loading) {
    result = {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.NotPresent ||
              getSectionStatus.status === LoadableStatus.NotPresent ||
              getSubSectionStatus.status === LoadableStatus.NotPresent) {

    result = {status: LoadableStatus.Initial};
  } else if (dataStatus.status === LoadableStatus.Present) {
    const {data} = dataStatus;
    const {data: getSection} = getSectionStatus;
    const {data: getSubSection} = getSubSectionStatus;

    // Remove all negative trade values (possible with net export/import):
    const filteredByValue = data.filter(({value}) => value > 0);

    const deselectedCategoriesSet = new Set(deselectedCategories);
    // Assign section and subsection to each datum and exclude sections that
    // the user has deselected:
    const withSection: Array<OutputDatum<T>> = [];
    for (const datum of filteredByValue) {
      const section = getSection(datum);
      if (deselectedCategoriesSet.has(section) === false) {
        const {
          subSection, shortLabel, longLabel, dropdownLabel, dropdownSearchString, dropdownValue,
        } = getSubSection(datum);
        const datumWithSection: OutputDatum<T> = Object.assign({}, datum, {
          section, subSection,
          color: getColor(section),
          shortLabel, longLabel,
          dropdownLabel, dropdownSearchString, dropdownValue,
        });
        withSection.push(datumWithSection);
      }
    }

    result = {
      status: LoadableStatus.Present,
      data: withSection,
    };
  } else {
    failIfValidOrNonExhaustive(dataStatus, 'Invalid loadable status');
    // The following lines will never be executed:
    result = {status: LoadableStatus.NotPresent};
  }
  return result;
};

export default assignAndFilterSection;
