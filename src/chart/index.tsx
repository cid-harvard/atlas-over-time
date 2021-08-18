import React from 'react';
import styled from 'styled-components';
import {
  IRibbon,
  IYearDataPoint,
  TradeDirection,
  TradeFlow,
  IDiscriminant,
  InflationAdjustment,
  Layout,
  PopulationAdjustment,
} from './Utils';
import Ribbon from './Ribbon';
import classnames from 'classnames';
import YAxisLabel, {
  IndividualAdjustments,
} from './YAxisLabel';
import axisStyles from './axis.css';
import getTicksInfo from './getTicksInfo';
import RibbonLabels from './ribbonLabels';

const zIndices = {
  gridLines: 10,
  xAxisElements: 20,
  yAxisElems: 30,
  chartNormal: 40,
  ribbonLabelsNormal: 50,
  yAxisLabel: 80,
  // Make chart & ribbon labels appear above y-axis options when mouse is
  // interacting with chart area:
  chartFocused: 90,
  ribbonLabelsFocused: 100,
};
const axisThickness = '2px';
const axisColor = '#ccc';

const StackChartRoot = styled.div`
  grid-row: 1;
  grid-column: 2;
  position: relative;
`;

const YAxisContainer = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 1;
`;

const XAxisContainer = styled.div`
  position: relative;
  grid-row: 2;
  grid-column: 2;
`;

const ChartContainer = styled(StackChartRoot)`
  width: 100%;
  contain: content;
`;

const SVG = styled.svg`
  overflow: visible;
`;

const XContainer = styled(XAxisContainer)`
  font-size: 0.7rem;
  color: #666;
  border-top: ${axisThickness} solid ${axisColor};
  z-index: ${zIndices.xAxisElements};
`;
const YOtherElemsContainer = styled(YAxisContainer)`
  font-size: 0.7rem;
  color: #666;
`;
const YLabelContainer = styled(YAxisContainer)`
  font-size: 0.7rem;
  color: #666;
  writing-mode: vertical-lr;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: ${zIndices.yAxisLabel};
`;
const GridLinesContainer = styled(StackChartRoot)`
  position: relative;
  background-color: rgba(1, 1, 1, 0.04);
  z-index: ${zIndices.gridLines};
`;

const RibbonLabelsContainer = styled(StackChartRoot)`
  position: relative;
  pointer-events: none;
`;

interface IProps {
  svgWidth: number | undefined;
  svgHeight: number | undefined;
  svgTop: number | undefined;
  svgLeft: number | undefined;
  ribbons: IRibbon[];
  rememberChartRootEl: (el: HTMLElement | null) => void;
  showTooltip: (dataPoint: IYearDataPoint) => void;
  hideTooltip: () => void;
  onRibbonClick: (dataPoint: IYearDataPoint) => void;
  highlighted: number | undefined;
  selected: IYearDataPoint | undefined;

  xAxisMin: number;
  xAxisMax: number;
  yAxisMin: number;
  yAxisMax: number;
  layout: Layout;
  inflationAdjustment: InflationAdjustment;
  populationAdjustment: PopulationAdjustment;
  tradeDirection: TradeDirection;
  tradeFlow: TradeFlow;
  type: IDiscriminant | undefined;
  onYAxisChange: (adjustments: IndividualAdjustments) => void;
}

interface IState {
  areYAxisOptionsShown: boolean;
  isMouseOverChart: boolean;
}

export default class extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      areYAxisOptionsShown: false,
      isMouseOverChart: false,
    };
  }
  private passRootElToParent = (el: HTMLElement | null) => this.props.rememberChartRootEl(el);

  private hideYAxisOptions = () => this.setState(
    (prevState: IState): IState => ({...prevState, areYAxisOptionsShown: false}),
  )

  private toggleOptionsVisibility = () => this.setState(
    (prevState: IState): IState => ({...prevState, areYAxisOptionsShown: !prevState.areYAxisOptionsShown}),
  )

  private onOptionSelect = (adjustment: IndividualAdjustments) => this.setState(
    (prevState: IState): IState => ({...prevState, areYAxisOptionsShown: false}),
    () => this.props.onYAxisChange(adjustment),
  )

  private onMouseEnterChart = () => this.setState(
    (prevState: IState): IState => ({...prevState, isMouseOverChart: true}),
  )

  private onMouseLeaveChart = () => this.setState(
    (prevState: IState): IState => ({...prevState, isMouseOverChart: false}),
  )

  render() {
    const {
      ribbons,
      showTooltip, hideTooltip, onRibbonClick,
      svgWidth, svgHeight, svgTop, svgLeft,
      highlighted, selected,
      xAxisMin, xAxisMax, yAxisMin, yAxisMax,
      layout,
      inflationAdjustment, populationAdjustment,
      tradeDirection, tradeFlow, type,
    } = this.props;

    if (svgWidth === undefined || svgHeight === undefined ||
        svgTop === undefined || svgLeft === undefined) {
      return (
        <ChartContainer ref={this.passRootElToParent}/>
      );
    } else {
      const {areYAxisOptionsShown, isMouseOverChart} = this.state;

      //#region Actual chart
      const selectedRibbon = (selected === undefined) ? undefined : selected.ribbonId;

      const ribbonElems = ribbons.map(({id, path, color, dataPoints}) => {
        return (
          <Ribbon
            id={id} color={color} path={path}
            svgLeft={svgLeft} svgTop={svgTop}
            dataPoints={dataPoints} showTooltip={showTooltip} hideTooltip={hideTooltip}
            highlightedRibibon={highlighted}
            selectedRibbon={selectedRibbon}
            onClick={onRibbonClick}
            key={`ribbon-${id}`}
          />
        );
      });
      //#endregion

      //#region Axis elements

      const xTickClassName = classnames(axisStyles.tick, axisStyles.xTick);
      const xTickLabelClassName = classnames(axisStyles.label, axisStyles.xLabel);

      const {xTicks, yTicks} = getTicksInfo({
        xAxisMin, xAxisMax, yAxisMin, yAxisMax,
        layout, svgHeight, svgWidth,
      });

      const xElems = xTicks.map(({position, label}, index) => {
        const tickStyle = {
          '--translation': `${position}px`,
        } as any;
        return [
          <div className={xTickClassName} style={tickStyle} key={`${index}-x-tick`}/>,
          (
            <div className={xTickLabelClassName} style={tickStyle} key={`${index}-x-label`}>
              {label}
            </div>
          ),
        ];
      });

      const yTickClassName = classnames(axisStyles.tick, axisStyles.yTick);
      const yTickLabelClassName = classnames(axisStyles.label, axisStyles.yLabel);

      const yElems = yTicks.map(({position, label}, index) => {
        const tickStyle = {
          '--translation': `${position}px`,
        } as any;
        return (
          <React.Fragment key={`y-tick-${index}`}>
            <div className={yTickClassName} style={tickStyle}/>
            <div className={yTickLabelClassName} style={tickStyle}>
              {label}
            </div>
          </React.Fragment>
        );
      });

      const xGridlineClassName = classnames(axisStyles.gridline, axisStyles.xGridline);
      const xGridLines = xTicks.map(({position}, index) => {
        const style = {
          '--translation': `${position}px`,
        } as any;
        return (
          <div className={xGridlineClassName} style={style} key={`${index}-x-gridline`}/>
        );
      });

      const yGridlineClassName = classnames(axisStyles.gridline, axisStyles.yGridline);
      const yGridLines = yTicks.map(({position}, index) => {
        const style = {
          '--translation': `${position}px`,
        } as any;
        return (
          <div className={yGridlineClassName} style={style} key={`${index}-y-gridline`}/>
        );
      });
      const yLabel = (
        <YAxisLabel
          layout={layout} tradeDirection={tradeDirection} tradeFlow={tradeFlow}
          inflationAdjustment={inflationAdjustment}
          populationAdjustment={populationAdjustment}
          type={type}
          areYAxisOptionsShown={areYAxisOptionsShown}
          toggleOptionsVisibility={this.toggleOptionsVisibility}
          hideOptions={this.hideYAxisOptions}
          onOptionSelect={this.onOptionSelect}
        />
      );
      //#endregion

      //#region Ribbon labels
      const ribbonLabels = (
        <RibbonLabels ribbons={ribbons}/>
      );
      //#endregion

      // Make chart appear above all axis elements and gridlines if the mouse is
      // over the chart area AND the y-axis options are not currently being
      // shown:
      let chartZIndex: number, ribbonLabelsZIndex: number;
      if (isMouseOverChart && !areYAxisOptionsShown) {
        chartZIndex = zIndices.chartFocused;
        ribbonLabelsZIndex = zIndices.ribbonLabelsFocused;
      } else {
        chartZIndex = zIndices.chartNormal;
        ribbonLabelsZIndex = zIndices.ribbonLabelsNormal;
      }

      const chartStyle: React.CSSProperties = {
        zIndex: chartZIndex,
      };
      const ribbonLabelsStyle: React.CSSProperties = {
        zIndex: ribbonLabelsZIndex,
      };
      return (
        <React.Fragment>
          <ChartContainer ref={this.passRootElToParent} style={chartStyle}
            onMouseEnter={this.onMouseEnterChart}
            onMouseLeave={this.onMouseLeaveChart}>
            <SVG width={svgWidth} height={svgHeight}>
              {ribbonElems}
            </SVG>
          </ChartContainer>
          <XContainer>
            {xElems}
          </XContainer>
          <YOtherElemsContainer>
            {yElems}
          </YOtherElemsContainer>
          <YLabelContainer>
            {yLabel}
          </YLabelContainer>
          <GridLinesContainer>
            {xGridLines}
            {yGridLines}
          </GridLinesContainer>
          <RibbonLabelsContainer style={ribbonLabelsStyle}>
            {ribbonLabels}
          </RibbonLabelsContainer>
        </React.Fragment>
      );

    }

  }
}
