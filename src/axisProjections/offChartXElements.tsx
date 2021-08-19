import React from 'react';
import {
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
} from '../chart/Utils';
import styled from 'styled-components/macro';

import {
  getTooltipInput,
} from './Utils';
import styles from './offChartElements.css';
import classnames from 'classnames';

const XAxisContainer = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 2;
`;

interface IProps {
  highlighted: number | undefined;
  ribbons: IRibbon[];
  tooltipMap: Record<string, ITooltipMapDatum>;
  hovered: IYearDataPoint | undefined;
  selected: IYearDataPoint | undefined;
}

export default class extends React.PureComponent<IProps> {
  render() {
    const {hovered, selected, tooltipMap, ribbons, highlighted} = this.props;
    const tooltipInfo = getTooltipInput(tooltipMap, ribbons, hovered, selected, highlighted);

    const tickClassName = classnames(styles.tick, styles.xTick);
    const labelClassName = classnames(styles.label, styles.xLabel);

    const result = tooltipInfo.map(({x, year, color}, index) => {
      const tickStyle = {
        '--translation': `${x}px`,
        '--color': color,
      } as any;
      // Label appears in between the 2 ticks:
      const labelStyle = {
        '--translation': `${x}px`,
        '--color': color,
      } as any;
      return (
        <React.Fragment key={`x-tick-${index}`}>
          <div className={tickClassName} style={tickStyle}/>
          <div className={labelClassName} style={labelStyle}>
            {year}
          </div>
        </React.Fragment>
      );
    });

    return (
      <XAxisContainer>
        {result}
      </XAxisContainer>
    );
  }
}
