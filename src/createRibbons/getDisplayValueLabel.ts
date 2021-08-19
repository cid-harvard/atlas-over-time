import {
  TradeDirection,
  TradeFlow,
  InflationAdjustment,
  PopulationAdjustment,
} from './Utils';

const getFactor = (
    inflationAdjustment: InflationAdjustment,
    populationAdjustment: PopulationAdjustment,
    tradeDirection: TradeDirection,
    tradeFlow: TradeFlow,
  ): string => {

  let result: string;
  if (inflationAdjustment === InflationAdjustment.Adjusted) {
    if (populationAdjustment === PopulationAdjustment.Adjusted) {
      // result = perCapitaConstant;
      if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Gross) {
        result = 'Per Capita Constant Gross Export';
      } else if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Net) {

        result = 'Per Capita Constant Net Export';
      } else if (tradeDirection === TradeDirection.import && tradeFlow === TradeFlow.Gross) {

        result = 'Per Capita Constant Gross Import';
      } else {

        result = 'Per Capita Constant Net Import';
      }
    } else {
      if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Gross) {
        result = 'Constant Gross Export';
      } else if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Net) {

        result = 'Constant Net Export';
      } else if (tradeDirection === TradeDirection.import && tradeFlow === TradeFlow.Gross) {

        result = 'Constant Gross Import';
      } else {

        result = 'Constant Net Import';
      }
    }
  } else {
    if (populationAdjustment === PopulationAdjustment.Adjusted) {
      if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Gross) {
        result ='Per Capita Current Gross Export';
      } else if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Net) {

        result ='Per Capita Current Net Export';
      } else if (tradeDirection === TradeDirection.import && tradeFlow === TradeFlow.Gross) {

        result ='Per Capita Current Gross Import';
      } else {

        result ='Per Capita Current Net Import';
      }
    } else {
      if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Gross) {
        result = 'Current Gross Export';
      } else if (tradeDirection === TradeDirection.export && tradeFlow === TradeFlow.Net) {

        result = 'Current Net Export';
      } else if (tradeDirection === TradeDirection.import && tradeFlow === TradeFlow.Gross) {

        result = 'Current Gross Import';
      } else {

        result = 'Current Net Import';
      }
    }

  }

  return result;
};

export default getFactor;
