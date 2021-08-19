import React from 'react';
import {
  IRibbon,
  ITooltipMapDatum,
  IYearDataPoint,
} from '../chart/Utils';
import styles from './inChartProjectionLine.css';
import classnames from 'classnames';
import styled from 'styled-components';
import {
  getTooltipInput,
} from './Utils';

const Root = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 2;
  position: relative;
`;

interface IProps {
  tooltipMap: Record<string, ITooltipMapDatum>;
  ribbons: IRibbon[];
  hovered: IYearDataPoint | undefined;
  selected: IYearDataPoint | undefined;
  highlighted: number | undefined;
  svgWidth: number;
}

export default class extends React.PureComponent<IProps> {
  render() {
    const {hovered, selected, svgWidth, tooltipMap, ribbons, highlighted} = this.props;
    const input = getTooltipInput(tooltipMap, ribbons, hovered, selected, highlighted);

    const verticalClassName = classnames(styles.projectionLine, styles.vertical);
    const horizontalClassName = classnames(styles.projectionLine, styles.horizontal);

    const elems = input.map(({x, upperY, lowerY}, index) => {
      const verticalLineStyle = {
        '--distance-from-top': `${upperY}px`,
        '--translation': `${x}px`,
      } as any;
      const verticalLine = (
        <div className={verticalClassName} style={verticalLineStyle} key={`${index}-x-line`}/>
      );
      const horizontalUpperLineStyle = {
        '--distance-from-right': `${svgWidth - x}px`,
        '--translation': `${upperY}px`,
      } as any;
      const horizontalUpperLine = (
        <div className={horizontalClassName} style={horizontalUpperLineStyle} key={`${index}y-upper-line`}/>
      );

      const horizontalLowerLineStyle = {
        '--distance-from-right': `${svgWidth - x}px`,
        '--translation': `${lowerY}px`,
      } as any;
      const horizontalLowerLine = (
        <div className={horizontalClassName} style={horizontalLowerLineStyle} key={`${index}y-lower-line`}/>
      );
      return (
        <React.Fragment key={`projection-line-${index}`}>
          {verticalLine}
          {horizontalUpperLine}
          {horizontalLowerLine}
        </React.Fragment>
      );
    });

    return (
      <Root>
        {elems}
      </Root>
    );

  }

}
