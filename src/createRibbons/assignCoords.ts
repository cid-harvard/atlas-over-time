import {
  failIfValidOrNonExhaustive,
  ILoadable,
  LoadableStatus,
  measuredCharacterHeight,
  measuredCharacterWidth,
  referenceFontSize,
  getDataPointTooltipKey,
  IMergeOutput,
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
  Layout,
  TextInRibbon,
} from './Utils';
import {
  GraphSubject as Subject,
  getLinearScale,
} from '../chart/Utils';
import {
  scaleLinear,
} from 'd3-scale';
import {
  IResult as IResultFromPrevStep,
} from './cumulativeSum';
import getPath from './getPath';
import getRibbonLabelCreator from './getRibbonLabelCreator';

const getRibbonLabel = getRibbonLabelCreator({
  measuredCharacterHeight,
  measuredCharacterWidth,
  referenceFontSize,
  minFontSize: 10,
});

const assignCoords = (
    inputStatus: ILoadable<IResultFromPrevStep>,
    sizeStatus: ILoadable<{width: number, height: number}>,
    layout: Layout,
    startYear: number,
    endYear: number,
    subject: Subject,
  ): ILoadable<IMergeOutput> => {
  if (inputStatus.status === LoadableStatus.Initial ||
      sizeStatus.status === LoadableStatus.Initial) {
    return {status: LoadableStatus.Initial};
  } else if (inputStatus.status === LoadableStatus.Loading ||
              sizeStatus.status === LoadableStatus.Loading) {
    return {status: LoadableStatus.Loading};

  } else if (inputStatus.status === LoadableStatus.NotPresent ||
              sizeStatus.status === LoadableStatus.NotPresent) {
    return {status: LoadableStatus.NotPresent};

  } else if (inputStatus.status === LoadableStatus.Present ||
              sizeStatus.status === LoadableStatus.Present) {
    const {data: {maxGraphValue, ribbons, yearsWithData}} = inputStatus;
    const {data: {width, height}} = sizeStatus;

    const xAxisMin = startYear;
    const xAxisMax = endYear;
    const yAxisMin = 0;
    // Assign coordinates:
    let yAxisMax: number;
    if (layout === Layout.Share) {
      yAxisMax = 1; // this means 100%
    } else if (layout === Layout.Value) {
      ([, yAxisMax] = scaleLinear<number, number>()
                                    .domain([yAxisMin, maxGraphValue])
                                    .nice().domain());

    } else {
      failIfValidOrNonExhaustive(layout, 'Invalid layout type');
      // The following lines will never be executed:
      yAxisMax = 0;
    }
    const xScale = getLinearScale([xAxisMin, xAxisMax], [0, width]);
    const yScale = getLinearScale([yAxisMin, yAxisMax], [height, 0]);

    const ribbonsWithCoords: IRibbon[] = [];
    const tooltipMap: Record<string, ITooltipMapDatum> = {};

    for (const ribbon of ribbons) {
      const {
        pointsOnCurve, ribbonId, section, shortLabel, longLabel,
        color,
      } = ribbon;
      const dataForPathGenerator: Array<IYearDataPoint & {hasActualValue: boolean}> = [];
      for (const pointOnCurve of pointsOnCurve) {
        const {year, upperValue, lowerValue, yAxisTooltipInfo, hasActualValue, ...restOfDatum} = pointOnCurve;
        const xCoord = xScale(year);
        const upperYCoord = yScale(upperValue);
        const lowerYCoord = yScale(lowerValue);
        const newDatum = {
          ...restOfDatum,
          year,
          x: xCoord,
          lowerY: lowerYCoord,
          upperY: upperYCoord,
          displayedValue: yAxisTooltipInfo,
          ribbonId,
          hasActualValue,
        };
        dataForPathGenerator.push(newDatum);
        const tooltipDatumKey = getDataPointTooltipKey(newDatum);
        const tooltipDatum: ITooltipMapDatum = {
          id: ribbonId,
          shortLabel, longLabel, color,
        };
        tooltipMap[tooltipDatumKey] = tooltipDatum
;      }
      const svgPath = getPath(dataForPathGenerator);
      const dataPoints: IYearDataPoint[] = dataForPathGenerator.filter(
        ({hasActualValue}) => hasActualValue === true,
      ).map(
        ({hasActualValue: _unused, ...rest}) => ({...rest}),
      );

      // If the ribbon doesn't have data for all years, we'll need to manually
      // remove the portions that don't have data. This will in turn cause the
      // labels to be shown in the wrong places. This check disables the labels
      // in those cases:
      let textInRibbon: TextInRibbon;
      if (dataForPathGenerator.every(({hasActualValue}) => hasActualValue === true)) {
        textInRibbon = getRibbonLabel(dataPoints, shortLabel);
      } else {
        textInRibbon = {showText: false};
      }

      const newRibbon: IRibbon = {
        color,
        path: svgPath,
        dataPoints,
        id: ribbonId,
        section,
        shortLabel, longLabel,
        textInRibbon,
      };
      ribbonsWithCoords.push(newRibbon);

    }

    return {
      status: LoadableStatus.Present,
      data: {
        ribbons: ribbonsWithCoords,
        xAxisMin, xAxisMax,
        yAxisMin, yAxisMax,
        svgWidth: width,
        svgHeight: height,
        tooltipMap,
        yearsWithData,
        subject,
      },
    };

  } else {
    failIfValidOrNonExhaustive(inputStatus, 'Invalid status');
    return {status: LoadableStatus.NotPresent};
  }
};
export default assignCoords;
