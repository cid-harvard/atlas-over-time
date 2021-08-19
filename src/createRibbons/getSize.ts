import {
  ILoadable,
  LoadableStatus,
} from './Utils';
import {
  ISize,
} from './Utils';

const getSize = (
  width: number | undefined, height: number | undefined): ILoadable<ISize> => {

  if (width === undefined || height === undefined) {
    return {status: LoadableStatus.Loading};
  } else {
    return {
      status: LoadableStatus.Present,
      data: {width, height},
    };
  }
};

export default getSize;
