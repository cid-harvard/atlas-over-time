import React from 'react';
import {
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
} from '../chart/Utils';

import {
  getTooltipInput,
} from './Utils';
import styles from './offChartElements.css';
import classnames from 'classnames';
import styled from 'styled-components/macro';

const YAxisContainer = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 1;
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

    const tickClassName = classnames(styles.tick, styles.yTick);
    const labelClassName = classnames(styles.label, styles.yLabel);

    const result = tooltipInfo.map(({upperY, lowerY, displayedValue, color}, index) => {
      const upperTickStyle = {
        '--translation': `${upperY}px`,
        '--color': color,
      } as any;
      const lowerTickStyle = {
        '--translation': `${lowerY}px`,
        '--color': color,
      } as any;
      // Label appears in between the 2 ticks:
      const labelStyle = {
        '--translation': `${(upperY + lowerY) / 2}px`,
        '--color': color,
      } as any;
      return (
        <React.Fragment key={`y-axis-tooltip-${index}`}>
          <div className={tickClassName} style={upperTickStyle}/>
          <div className={tickClassName} style={lowerTickStyle}/>
          <div className={labelClassName} style={labelStyle}>
            {displayedValue}
          </div>

        </React.Fragment>
      );
    });

    return (
      <YAxisContainer>
        {result}
      </YAxisContainer>
    );
  }
}
