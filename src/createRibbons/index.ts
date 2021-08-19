import {
  DataSource,
  GraphSubject,
} from '../chart/Utils';
import merge_CCPY_CC, {
  IMergeInput as IMergeInput_CCPY_CC,
} from './merge_CCPY_CC';
import merge_CCPY_CP, {
  IMergeInput as IMergeInput_CCPY_CP,
} from './merge_CCPY_CP';
import merge_CCY_C, {
  IMergeInput as IMerge_CCY_C,
} from './merge_CCY_C';
import merge_CPY_C, {
  IMergeInput as IMergeInput_CPY_C,
} from './merge_CPY_C';
import merge_CPY_P, {
  IMergeInput as IMergeInput_CPY_P,
} from './merge_CPY_P';
import {
  IHasNoError,
  ILoadable,
  IMergeOutput,
} from './Utils';

export type IMergeInput =
  IMergeInput_CPY_C | IMergeInput_CPY_P | IMergeInput_CCPY_CC |
  IMergeInput_CCPY_CP | IMerge_CCY_C;

interface IComputeInput {
  // Info that's actually used in the computation:
  computationInput: IMergeInput;
}

const compute = (
    {computationInput}: IComputeInput,
  ) => {

  let computedValue: ILoadable<IMergeOutput>;
  if (computationInput.source === DataSource.CPY &&
      computationInput.subject === GraphSubject.Product) {

    computedValue = merge_CPY_C(computationInput as IMergeInput_CPY_C);
  } else if (computationInput.source === DataSource.CPY &&
              computationInput.subject === GraphSubject.Country) {

    computedValue = merge_CPY_P(computationInput as IMergeInput_CPY_P);
  } else if (computationInput.source === DataSource.CCPY &&
              computationInput.subject === GraphSubject.Product) {
    computedValue = merge_CCPY_CC(computationInput as IMergeInput_CCPY_CC);
  } else if (computationInput.source === DataSource.CCPY &&
              computationInput.subject === GraphSubject.Country) {

    computedValue = merge_CCPY_CP(computationInput as IMergeInput_CCPY_CP);
  } else {
    computedValue = merge_CCY_C(computationInput as IMerge_CCY_C);
  }
  const mergedData: IHasNoError = {
    hasError: false, value: computedValue,
  };
  return mergedData;
};

export default compute;
