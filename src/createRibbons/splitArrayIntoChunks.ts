import max from 'lodash/max';
import min from 'lodash/min';
import tail from 'lodash/tail';
import {
  Absolute,
  Relative,
} from 'svg-path-parser';

// Given array `input`, split the array into chunks separated by elements
// elements that match `exclusionCriterion`. See tests for examples.
export const splitArrayIntoChunks = <IElement>(
    input: IElement[],
    exclusionCriterion: (elem: IElement) => boolean,
  ): {chunks: IElement[][], chunkIndices: number[][]} => {

  const arrayLength = input.length;

  // Find the first element that should be included:
  let result: IElement[][] = [];
  let chunkIndices: number[][] = [];

  let index = -1;
  let foundFirstToBeIncluded = false;

  while (foundFirstToBeIncluded === false && index < arrayLength) {
    index = index + 1;
    const elem = input[index];
    foundFirstToBeIncluded = !exclusionCriterion(elem);
  }

  if (index === arrayLength) {
    // This means all elements of this array fails the inclusion test.
    result = [];
    chunkIndices = [];
  } else {
    let currentGroup: IElement[] = [];
    let currentChunkIndices: number[] = [];

    let shouldCurrentBeIncluded = true;
    let shouldPreviousBeIncluded = true;

    while (index < arrayLength) {
      const currentElement = input[index];

      shouldPreviousBeIncluded = shouldCurrentBeIncluded;
      shouldCurrentBeIncluded = !exclusionCriterion(currentElement);
      if (shouldCurrentBeIncluded === true && shouldPreviousBeIncluded === false) {
        // If we've just arrived at a region of inclusion from a region of exclusion,
        // start a new chunk:
        currentGroup = [];
        currentChunkIndices = [];
      }

      if (shouldCurrentBeIncluded === true) {
        currentGroup.push(currentElement);
        currentChunkIndices.push(index);
      }

      if (shouldCurrentBeIncluded === false && shouldPreviousBeIncluded === true) {
        // When going from an "included" region to an "excluded" region, store the
        // current chunk in the result:
        result.push(currentGroup);
        chunkIndices.push(currentChunkIndices);
      }

      index = index + 1;
    }

    if (shouldCurrentBeIncluded === true) {
      // This takes care of the case where the the last chunk has one only
      // element, which is also the last element of the array:
      result.push(currentGroup);
      chunkIndices.push(currentChunkIndices);
    }
  }

  return {
    chunks: result,
    chunkIndices,
  };
};

export const getSegmentIndicesFromChunkIndices = (
    indicesInChunk: number[],
    totalNumOfPointsOnLine: number,
  ): number[] => {

  const minIndex = min(indicesInChunk)!;
  const maxIndex = max(indicesInChunk)!;

  let result: number[] = [];
  if (minIndex > 0) {
    result = [minIndex];
  }

  result = [...result, ...tail(indicesInChunk)];

  if (maxIndex < totalNumOfPointsOnLine - 1) {
    result = [...result, maxIndex + 1];
  }
  return result;
};

interface ICommandsForRibbonHaflPath {
  initialCommand: Relative.MoveTo | Relative.LineTo;
  drawCommands: Array<Relative.CurveTo | Relative.LineTo>;
}

// See tests for examples:
export const getSegmentsFromIndicesInChunk = (
    indicesInChunk: number[],
    totalNumOfPointsOnLine: number,
    absoluteCommands: Array<Absolute.CurveTo | Absolute.MoveTo>,
  ): ICommandsForRibbonHaflPath => {

  const segmentIndices = getSegmentIndicesFromChunkIndices(indicesInChunk, totalNumOfPointsOnLine);
  const segments = segmentIndices.map(
    index => absoluteCommands[index],
  ) as Array<Absolute.CurveTo | Absolute.LineTo>;
  const initialCommand: Relative.MoveTo = {
    code: 'M',
    command: 'moveto',
    x: segments[0].x0,
    y: segments[0].y0,
  };

  const halfPath: ICommandsForRibbonHaflPath = {
    initialCommand,
    drawCommands: segments,
  };
  return halfPath;
};

export const getStringifiedDrawCommands = ({drawCommands}: ICommandsForRibbonHaflPath): string => {
  const result = drawCommands.map(command => {
    let output: string;
    if (command.code === 'C') {
      const {x1, y1, x2, y2, x, y} = command;
      output = `${command.code} ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
    } else {
      const {x, y} = command;
      output = `L ${x} ${y}`;
    }
    return output;
  });
  return result.join(' ');
};

export const deepReverseIndices = (indices: number[][], numOfPointsOnLine: number) => {
  const outerReversed = [...indices].reverse() as number[][];
  const innerReversed = outerReversed.map(inner => {
    const orderReversed = [...inner].reverse() as number[];
    const valueReversed = orderReversed.map(value => numOfPointsOnLine - 1 - value);
    return valueReversed;
  });
  return innerReversed;
};
