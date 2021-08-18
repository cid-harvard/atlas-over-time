import React from 'react'

import OverTime, {
  Layout,
  TradeDirection,
  TradeFlow,
  InflationAdjustment,
  PopulationAdjustment,
  DataSource,
  GraphSubject,
} from 'atlas-over-time'
import 'atlas-over-time/dist/index.css'

const App = () => {
  return (
    <OverTime
      ribbons={[]}
      selected={undefined}
      highlighted={undefined}
      xAxisMin={1996}
      xAxisMax={2016}
      yAxisMin={0}
      yAxisMax={10000}
      layout={Layout.Share}
      tradeDirection={TradeDirection.import}
      tradeFlow={TradeFlow.Net}
      inflationAdjustment={InflationAdjustment.Adjusted}
      populationAdjustment={PopulationAdjustment.Adjusted}
      type={{
        source: DataSource.CPY,
        subject: GraphSubject.Product,
      }}
      hideTooltip={() => console.log('hideTooltip')}
      showTooltip={(info) => console.log(info)}
      onClick={() => console.log('onClick')}
    />
  );
}

export default App
