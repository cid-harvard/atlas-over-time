import {
  TradeDirection,
  TradeFlow,
  failIfValidOrNonExhaustive,
} from './Utils';

export interface IImportExport {
  import_value: number;
  export_value: number;
}

type ValueGetter = (datum: IImportExport) => number;

const getValueGetter = (tradeFlow: TradeFlow, tradeDirection: TradeDirection): ValueGetter => {
  if (tradeFlow === TradeFlow.Gross) {
    if (tradeDirection === TradeDirection.export) {
      return ({export_value}) => export_value;
    } else if (tradeDirection === TradeDirection.import) {
      return ({import_value}) => import_value;
    } else {
      failIfValidOrNonExhaustive(tradeDirection, 'Invalid trade flow');
      // These lines will never be executed:
      return () => 1;
    }
  } else if (tradeFlow === TradeFlow.Net) {
    if (tradeDirection === TradeDirection.export) {
      return ({export_value, import_value}) => (export_value - import_value);
    } else if (tradeDirection === TradeDirection.import) {
      return ({export_value, import_value}) => (import_value - export_value);
    } else {
      failIfValidOrNonExhaustive(tradeDirection, 'Invalid trade flow');
      // These lines will never be executed:
      return () => 1;
    }
  } else {
    failIfValidOrNonExhaustive(tradeFlow, 'Invalid trade flow');
      // These lines will never be executed:
    return () => 1;
  }
};

export default getValueGetter;
