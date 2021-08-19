import {
  Absolute,
  makeAbsolute,
  parseSVG,
} from 'svg-path-parser';
import {
  deepReverseIndices,
  getSegmentsFromIndicesInChunk,
  getStringifiedDrawCommands,
  splitArrayIntoChunks,
} from './splitArrayIntoChunks';
import {line, curveCardinal} from 'd3-shape';

interface IXYPair {
  x: number;
  y: number;
}
// Produce SVG path attribute from coords of points:
const getCardinalSplinePathGenerator =
  () => line<IXYPair>().x(pair => pair.x).y(pair => pair.y).curve(curveCardinal);

const generatePathFromPoints = getCardinalSplinePathGenerator();

interface IInputPoint {
  x: number;
  lowerY: number;
  upperY: number;
  hasActualValue: boolean;
}

interface IChunkInfo {
  upperPath: string;
  lowerPath: string;
}
const getCurveThroughPoints = (points: IInputPoint[]): IChunkInfo => {
  const upperPoints = points.map(({x, upperY}) => ({x, y: upperY}));
  // Because the path goes clock-wise, we need to reverse `lowerPoints` so that
  // the lower curve is in opposite direction to the upper curve, so that the
  // path is closed (so that we can fill the ribbon's interior with a solid
  // color):
  const lowerPoints = points.map(({x, lowerY}) => ({x, y: lowerY})).reverse();

  const upperPath = generatePathFromPoints(upperPoints)!;
  const lowerPath = generatePathFromPoints(lowerPoints)!;

  return {upperPath, lowerPath};
};

const getPath = (dataPoints: IInputPoint[]): string => {

  const numOfPointsOnLine = dataPoints.length;

  // Split data points on years that have no data:
  const {chunks, chunkIndices} = splitArrayIntoChunks(
    dataPoints, ({hasActualValue}) => hasActualValue === false,
  );

  const numOfChunks = chunks.length;

  let path: string;
  if (numOfChunks === 0 || numOfPointsOnLine === 1) {
    path = '';
  } else {

    // Draw curve through all data points. For years that have no data (zero
    // ribbon thickness), this will cause the upper and lower curves to cross over
    // each other, which we'll deal with later:
    const {upperPath, lowerPath} = getCurveThroughPoints(dataPoints);

    // Parse the generated paths above into a series of discrete commands so that we
    // can splice them together later if needed:
    const upperPathCommands =
      makeAbsolute(parseSVG(upperPath)) as Array<Absolute.CurveTo | Absolute.MoveTo>;
    const lowerPathCommands =
      makeAbsolute(parseSVG(lowerPath)) as Array<Absolute.CurveTo | Absolute.MoveTo>;

    // Loop through all chunks to get path fragments
    const upperPathFragments = chunkIndices.map((indicesInChunk) => {
      const commands = getSegmentsFromIndicesInChunk(indicesInChunk, numOfPointsOnLine, upperPathCommands);
      const stringifiedDrawCommands = getStringifiedDrawCommands(commands);
      const stringifiedInitialCommand = `M ${commands.initialCommand.x} ${commands.initialCommand.y}`;
      return `${stringifiedInitialCommand} ${stringifiedDrawCommands}`;
    });

    const upperPathString = upperPathFragments.join(' ');

    const reversedChunkIndices = deepReverseIndices(chunkIndices, numOfPointsOnLine);

    const lowerPathFragments = reversedChunkIndices.map((indices, indexOfChunk) => {
      const commands = getSegmentsFromIndicesInChunk(indices, numOfPointsOnLine, lowerPathCommands);
      const stringifiedDrawCommands = getStringifiedDrawCommands(commands);

      // Draw a line when we transition from the upper path to lower path but
      // otherwise, start a new subpath with "moveto":
      const initialCommandCode = (indexOfChunk === 0) ? 'L' : 'M';
      const stringifiedInitialCommand = `
        ${initialCommandCode} ${commands.initialCommand.x} ${commands.initialCommand.y}
      `;
      return `${stringifiedInitialCommand} ${stringifiedDrawCommands}`;
    });

    const lowerPathString = lowerPathFragments.join(' ');

    const {
      initialCommand: firstSegmentOfUpperPathInitialCommand,
    } = getSegmentsFromIndicesInChunk(chunkIndices[0], numOfPointsOnLine, upperPathCommands);
    // The "final commands" move starts a subpath that starts and ends at the
    // exact same place (so visually it's redundant) but we need it to ensure
    // that the "closepath" command (Z) ends on the first point of the ribbon:
    const finalCommands = `
      L ${firstSegmentOfUpperPathInitialCommand.x} ${firstSegmentOfUpperPathInitialCommand.y}
      M ${firstSegmentOfUpperPathInitialCommand.x} ${firstSegmentOfUpperPathInitialCommand.y}
      Z
    `;

    path = `${upperPathString} ${lowerPathString} ${finalCommands}`;
  }
  return path;

};

export default getPath;
