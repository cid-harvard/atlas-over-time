import throttle from 'lodash/throttle';
import React from 'react';
import {
  findClosestDataPoint,
  IYearDataPoint,
} from './Utils';
import styles from './ribbon.css';
import {
  darken,
  desaturate,
  lighten,
  saturate,
} from 'polished';

const tooltipDelay = 350; // in ms;

const millisecondsPerFrame = 17; // 60fps

const getRelativeCoord =
  (clientX: number, clientY: number, offsetTop: number, offsetLeft: number) =>
    ({x: clientX - offsetLeft, y: clientY - offsetTop});

interface IProps {
  path: string;
  svgTop: number;
  svgLeft: number;
  dataPoints: IYearDataPoint[];
  id: number;
  color: string;
  showTooltip: (dataPoint: IYearDataPoint) => void;
  hideTooltip: () => void;
  onClick: (dataPoint: IYearDataPoint) => void;
  highlightedRibibon: number | undefined;
  selectedRibbon: number | undefined;
}

// Allow CSS custom properties
declare module 'csstype' {
  interface Properties {
    '--regular-color'?: string;
    '--emphasis-color'?: string;
  }
}
export default class extends React.Component<IProps> {

  private tooltipShown: boolean = false;
  private enterTimeStamp: number | undefined;
  private onMouseEnter = () => {
    this.enterTimeStamp = Date.now();
  }

  private onMouseLeave = () => {
    this.showTooltip.cancel();
    if (this.tooltipShown === true) {
      this.props.hideTooltip();
    }
    this.enterTimeStamp = undefined;
    this.tooltipShown = false;
  }

  private clientX: number | undefined;
  private clientY: number | undefined;
  private onMouseMove = ({clientX, clientY}: React.MouseEvent<any>) => {
    this.clientX = clientX;
    this.clientY = clientY;
    this.showTooltip();
  }

  // When we delay showing the tooltip until `delayDuration` is up, if the mouse
  // enters the ribbon but stop moving before `delayDuration` is up, the tooltip
  // will never be shown because `actuallyShowTooltip` is only triggered by
  // mouse movement. As such, when the mouse move within `delayDuration`, we
  // must schedule `actuallyShowTooltip` to run when `delayDuration` is up.
  private compensatingShowTooltipTimer: number | undefined;

  private actuallyShowTooltip = () => {
    const timestamp = Date.now();
    // Only trigger tooltip until the mouse has been over the ribbon for a
    // certain duration. This avoids slugging performance in "high" detail mode
    // where the ribbons are spaced very closely apart and keep triggering
    // tooltips repeatedly:
    if (this.enterTimeStamp !== undefined && timestamp - this.enterTimeStamp > tooltipDelay) {
      if (this.compensatingShowTooltipTimer !== undefined) {
        clearTimeout(this.compensatingShowTooltipTimer);
      }
      const clientX = this.clientX;
      const clientY = this.clientY;
      if (clientX !== undefined && clientY !== undefined) {
        const {svgTop, svgLeft, dataPoints, showTooltip} = this.props;
        const {x} = getRelativeCoord(clientX, clientY, svgTop, svgLeft);
        const closestDataPoint = findClosestDataPoint(dataPoints, x);
        showTooltip(closestDataPoint);
        this.tooltipShown = true;
      }
    } else {
      if (this.compensatingShowTooltipTimer === undefined && this.enterTimeStamp !== undefined) {
        // This `timeoutDuration` is chosen so that the function will be called
        // at `tooltipDelay` milliseconds after the mouse first enters the
        // ribbon:
        const timeoutDuration = tooltipDelay - (timestamp - this.enterTimeStamp);
        this.compensatingShowTooltipTimer = setTimeout(() => {
          this.compensatingShowTooltipTimer = undefined;
          this.showTooltip();
        }, timeoutDuration) as any as number;
      }
    }
  }

  private showTooltip = throttle(this.actuallyShowTooltip, millisecondsPerFrame);

  private onClick = (event: React.MouseEvent<any>) => {
    // Need to `stopPropagation` to keep tooltips open:
    event.stopPropagation();
    const {clientX, clientY} = event;
    const {svgTop, svgLeft, dataPoints, onClick} = this.props;
    const {x} = getRelativeCoord(clientX, clientY, svgTop, svgLeft);
    const closestDataPoint = findClosestDataPoint(dataPoints, x);
    onClick(closestDataPoint);
  }

  render() {
    const {path, color, selectedRibbon, highlightedRibibon, id} = this.props;

    // Prevent hover interaction if any node is highlighted,
    let className: string;
    if (highlightedRibibon === undefined) {
      className = `${styles.ribbon} ${styles.hoverEnabled}`;
    } else {
      className = styles.ribbon;
    }

    const deemphasisColor = desaturate(0.2, darken(0.3, color));
    const emphasisColor = lighten(0.1, saturate(0.3, color));

    let regularColor: string;
    if (highlightedRibibon === undefined) {
      // If no ribbon is highlighted, behave as normal:
        regularColor = (selectedRibbon === id) ? emphasisColor : color;
    } else {
      // Else all non-highlighted nodes get grey color and the highlighted one
      // retains its original color:
      regularColor = (highlightedRibibon === id) ? emphasisColor : deemphasisColor;
    }

    const style = {
      '--regular-color': regularColor,
      '--emphasis-color': emphasisColor,
    };

    return (
      <path d={path} className={className}
        fill={color}
        onMouseEnter={this.onMouseEnter}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        style={style}/>
    );
  }
}
