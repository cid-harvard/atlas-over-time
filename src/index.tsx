import React, {useRef, useState} from 'react'
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
  ITooltipMapDatum,
} from './chart/Utils';
import styled from 'styled-components/macro';
import AxisProjections from './axisProjections';

const leftMargin = 90; // in pixels
const bottomMargin = 55; // in pixels

const Root = styled.div`
  position: relative;
`;

const InteractiveRoot = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 55px;
  grid-template-columns: 90px 1fr;
`;

  const NonInteractiveRoot = styled(InteractiveRoot)`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

interface Props {
  ribbons: IRibbon[];
  tooltipMap: Record<string, ITooltipMapDatum>;
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
  width: number;
  height: number;
}

const OverTime = (props: Props) => {
  const {
    ribbons, selected, highlighted,
    xAxisMin ,xAxisMax ,yAxisMin ,yAxisMax,
    layout, tradeDirection, tradeFlow,
    inflationAdjustment, populationAdjustment,
    onClick, tooltipMap,
    width, height,
    type,
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const rememberChartRootEl = (el: HTMLDivElement | null) => ref.current = el;

  const [hovered, setHovered] = useState<IYearDataPoint | undefined>(undefined);

  const onRibbonClick = () => {
    onClick();
  }

  const showTooltip = (d: IYearDataPoint) => {
    props.showTooltip(d);
    setHovered(d);
  }
  const hideTooltip = () => {
    props.hideTooltip();
    setHovered(undefined);
  }

  const svgWidth = width - leftMargin;
  const svgHeight = height - bottomMargin;

  return (
    <Root>
      <InteractiveRoot ref={ref} style={{width, height}}>
        <Chart
          svgWidth={svgWidth} svgHeight={svgHeight}
          svgTop={bottomMargin} svgLeft={leftMargin}
          ribbons={ribbons} selected={selected}
          highlighted={highlighted}
          showTooltip={showTooltip}
          hideTooltip={hideTooltip}
          onRibbonClick={onRibbonClick}
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
      </InteractiveRoot>
      <NonInteractiveRoot style={{width, height}}>
        <AxisProjections
          hovered={hovered} selected={selected}
          svgWidth={svgWidth} tooltipMap={tooltipMap}
          ribbons={ribbons} highlighted={highlighted}
        />
      </NonInteractiveRoot>
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
