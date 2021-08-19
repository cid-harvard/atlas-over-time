import largestRect from 'd3plus/src/geom/largestRect.coffee';
import {
  determineFontSizeToFit,
  ILine,
  truncateTextInRectangle,
} from './fitTextInRectangle';
import {
  TextInRibbon,
} from './Utils';

interface IInputPoint {
  x: number;
  upperY: number;
  lowerY: number;
}
const getRibbonLabelCreator =
  (input: {
    measuredCharacterHeight: number,
    measuredCharacterWidth: number,
    referenceFontSize: number,
    minFontSize: number,
  }) =>
    (dataPoints: IInputPoint[], text: string): TextInRibbon => {

  const {measuredCharacterHeight, measuredCharacterWidth, referenceFontSize, minFontSize} = input;
  // Determine the "vertiacl thickness" of the ribbon for every year:
  const ribbonThicknesses = dataPoints.map(({upperY, lowerY}) => Math.abs(upperY - lowerY));
  const maxRibbonThickness = Math.max(...ribbonThicknesses);
  let result: TextInRibbon;
  // If the ribbon is not vertically "thick" enough at any point for a single
  // line of text, don't show any text. This helps to avoid expensive "largest
  // rectangle" and text wrapping calculations for very thin ribbons in
  // high-detail mode:
  if (maxRibbonThickness < measuredCharacterHeight) {
    result = {showText: false};
  } else {
    type IPoint = [number, number];
    const upperPoints: IPoint[] = dataPoints.map(
      ({x, upperY}) => ([x, upperY] as IPoint),
    );
    // Need to reverse the `lowerPoints` to have a closed polygon:
    const lowerPoints: IPoint[] = dataPoints.map(
      ({x, lowerY}) => ([x, lowerY] as IPoint),
    ).reverse();
    const allPoints = [...upperPoints, ...lowerPoints];

    if (allPoints.length < 4) {
      // Don't show any text if there are fewer than 4 points because to be
      // shown properly, the upper and lower curves of a ribbon must have at
      // least 2 points. Also, providing fewer than 3 points will cause
      // `largestRect` to fail:
      result = {showText: false};
    } else {
      // Find the largest rectangle that can fit inside the ribbon:
      const [{cx: centerX, cy: centerY, width, height, angle} ] = largestRect(allPoints);

      if (height < measuredCharacterHeight) {
        // If the rectangle is not taller than one line of text, don't show any
        // text.
        result = {showText: false};
      } else {
        const maxCharacterHeight = measuredCharacterHeight;
        const maxCharacterWidth = measuredCharacterWidth;

        const {fontSize, lines} = determineFontSizeToFit({
          text,
          referenceFontSize,
          referenceMeasurement: {maxCharacterHeight, maxCharacterWidth},
          rectangle: {width, height},
        });

        let adjustedLines: ILine[], adjustedFontSize: number;
        if (fontSize < minFontSize) {
          // If after fitting, the text turns out to be too small to read,
          // truncate the text so that it fits inside the rectangle at the minimum
          // font size:
          adjustedLines = truncateTextInRectangle({
            text, referenceFontSize,
            referenceMeasurement: {maxCharacterHeight, maxCharacterWidth},
            rectangle: {width, height},
            fontSizeToTry: minFontSize,
          });
          adjustedFontSize = minFontSize;
        } else {
          adjustedLines = lines;
          adjustedFontSize = fontSize;
        }
        const textsOnEachLine = adjustedLines.map(line => line.text);
        result = {
          showText: true,
          centerX, centerY, width, height, angle,
          textSplitIntoLines: textsOnEachLine,
          textUnsplit: textsOnEachLine.join(' '),
          fontSize: adjustedFontSize,
        };
      }

    }

  }
  return result;
};

export default getRibbonLabelCreator;
