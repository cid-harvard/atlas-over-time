import React from 'react';
import {
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
} from '../chart/Utils';

import InChartProjectionLines from './InChartProjectionLines';
import OffChartXElements from './offChartXElements';
import OffChartYElements from './offChartYElements';

interface IProps {
  highlighted: number | undefined;
  ribbons: IRibbon[];
  tooltipMap: Record<string, ITooltipMapDatum>;
  hovered: IYearDataPoint | undefined;
  selected: IYearDataPoint | undefined;
  svgWidth: number | undefined;
}

export default class extends React.PureComponent<IProps> {
  render() {
    const {hovered, selected, svgWidth, tooltipMap, ribbons, highlighted} = this.props;
    if (svgWidth === undefined) {
      return null;
    } else {
      return (
        <React.Fragment>
          <InChartProjectionLines
            hovered={hovered} selected={selected}
            svgWidth={svgWidth} tooltipMap={tooltipMap}
            ribbons={ribbons} highlighted={highlighted}
          />
          <OffChartYElements
            hovered={hovered} selected={selected}
            tooltipMap={tooltipMap} ribbons={ribbons} highlighted={highlighted}
          />
          <OffChartXElements
            hovered={hovered} selected={selected}
            tooltipMap={tooltipMap} ribbons={ribbons} highlighted={highlighted}
          />
        </React.Fragment>
      );
    }

  }
}
