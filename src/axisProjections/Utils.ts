import uniqBy from 'lodash/uniqBy';
import {
  css,
} from 'styled-components';
import {
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
} from '../chart/Utils';

const getDataPointTooltipKey =
  ({ribbonId, year}: IYearDataPoint) => `tooltip-${ribbonId}-${year}`;

export const offChartTextStyling = css`
  font-size: 0.7rem;
  color: #666;
`;

interface IDisplayedTooltipInfo extends IYearDataPoint {
  shortLabel: string;
  color: string;
}

// Arrange the hover tooltip to appear in front of the select tooltip and
// de-dupe them:
export const getTooltipInput = (
    tooltipMap: Record<string, ITooltipMapDatum>,
    ribbons: IRibbon[],
    hovered: IYearDataPoint | undefined,
    selected: IYearDataPoint | undefined,
    highlighted: number | undefined,
  ): IDisplayedTooltipInfo[] => {

  // Because the highlight only identifies which ribbon to highlight, we need to
  // pick a year roughly in the middle of the ribbon for a tooltip to point to:
  let highlightedTooltipInfo: IYearDataPoint | undefined;
  if (highlighted === undefined) {
    highlightedTooltipInfo = undefined;
  } else {
    const foundRibbon = ribbons.find(({id}) => id === highlighted);
    if (foundRibbon === undefined) {
      highlightedTooltipInfo = undefined;
    } else {
      const {dataPoints} = foundRibbon;
      const numYears = dataPoints.length;
      if (numYears === 0) {
        highlightedTooltipInfo = undefined;
      } else {
        const middleYearIndex = Math.floor(numYears / 2);
        highlightedTooltipInfo = dataPoints[middleYearIndex];
      }
    }
  }
  let tooltipInfo: IYearDataPoint[] = [];
  if (selected !== undefined) {
    tooltipInfo = [selected];
  }
  if (highlightedTooltipInfo !== undefined) {
    tooltipInfo = [...tooltipInfo, highlightedTooltipInfo];
  }
  if (hovered !== undefined) {
    tooltipInfo = [...tooltipInfo, hovered];
  }

  // De-dupe tooltips:
  const uniqueInfo = uniqBy(tooltipInfo, ({ribbonId, year}) => `${ribbonId}-${year}`);
  const unfiltered: Array<IDisplayedTooltipInfo | undefined> = uniqueInfo.map(datum => {
    const {ribbonId, ...rest} = datum;
    const tooltipLookupKey = getDataPointTooltipKey(datum);
    const retrievedTooltipMapDatum = tooltipMap[tooltipLookupKey];
    if (retrievedTooltipMapDatum === undefined) {
      return undefined;
    } else {
      const {shortLabel, color} =  retrievedTooltipMapDatum;
      return {
        ...rest,
        ribbonId, shortLabel, color,
      };
    }
  });
  const filtered = unfiltered.filter(elem => elem !== undefined) as IDisplayedTooltipInfo[];
  return filtered;
};
