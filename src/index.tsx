import React, {useRef} from 'react'
import Chart from './chart';
import {
  IRibbon,
  IYearDataPoint,
  Layout,
  TradeDirection,
  TradeFlow,
  InflationAdjustment,
  PopulationAdjustment,
  IDiscriminant,
  DataSource,
  GraphSubject,
} from './chart/Utils';
import styled from 'styled-components/macro';

const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 55px;
  grid-template-columns: 90px 1fr;
`;

interface Props {
  ribbons: IRibbon[];
  selected: IYearDataPoint | undefined;
  highlighted: number | undefined;
  xAxisMin: number;
  xAxisMax: number;
  yAxisMin: number;
  yAxisMax: number;
  layout: Layout;
  tradeDirection: TradeDirection;
  tradeFlow: TradeFlow;
  inflationAdjustment: InflationAdjustment;
  populationAdjustment: PopulationAdjustment;
  type: IDiscriminant;
  hideTooltip: () => void;
  showTooltip: (info: IYearDataPoint) => void;
  onClick: () => void;
  svgWidth: number;
  svgHeight: number;
}

const OverTime = (props: Props) => {
  const {
    ribbons, selected, highlighted,
    xAxisMin ,xAxisMax ,yAxisMin ,yAxisMax,
    layout, tradeDirection, tradeFlow,
    inflationAdjustment, populationAdjustment,
    showTooltip, hideTooltip, onClick,
    type, svgWidth, svgHeight,
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const rememberChartRootEl = (el: HTMLDivElement | null) => ref.current = el;

  return (
    <Root ref={ref} style={{width: svgWidth, height: svgHeight}}>
      <Chart
        svgWidth={svgWidth} svgHeight={svgHeight}
        svgTop={0} svgLeft={0}
        ribbons={ribbons} selected={selected}
        highlighted={highlighted}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
        onRibbonClick={onClick}
        rememberChartRootEl={rememberChartRootEl}
        xAxisMin={xAxisMin} xAxisMax={xAxisMax}
        yAxisMin={yAxisMin} yAxisMax={yAxisMax}
        layout={layout} tradeDirection={tradeDirection}
        tradeFlow={tradeFlow}
        inflationAdjustment={inflationAdjustment} populationAdjustment={populationAdjustment}
        type={type}
        onYAxisChange={() => {}}
        // onYAxisChange={this.onAdjustmentChange}
      />
    </Root>
  )
}

export {
  Layout,
  TradeDirection,
  TradeFlow,
  InflationAdjustment,
  PopulationAdjustment,
  IDiscriminant,
  DataSource,
  GraphSubject,
}

export default OverTime;
