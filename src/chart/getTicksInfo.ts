import {
  format,
} from 'd3-format';
import {getLinearScale} from './Utils';

// Taken from https://stackoverflow.com/a/22885197:
const log10 = Math.log(10);
const getSignificantDigitCount = (n: number) => {
    n = Math.abs(+String(n).replace('.', '')); //remove decimal and make positive
    if (n === 0) {
      return 0;
    }
    while (n !== 0 && n % 10 === 0) {
      n /= 10; //kill the 0s at the end of n
    }

    return Math.floor(Math.log(n) / log10) + 1; //get number of digits
};

const percentageFormatter = format('.2%');
// Convert from number `0.10` to  string `10%`:
export const toPercentageString =
  (percentage: number) => percentageFormatter(percentage);

// Format monetary sums into nice number with as many significant digits as in
// the input not exceeding 3. Also replace the `G` prefix with `B` because `B`
// makes more sense for money sums. The other prefixes are fine:
export const formatTradeValue = (input: number) => {
  const maxNumSignificantDigits = 3;
  const numSignificantDigitsInInput = getSignificantDigitCount(input);
  const numSignificantDigitsInOutput = (numSignificantDigitsInInput <= maxNumSignificantDigits) ?
                                        numSignificantDigitsInInput :
                                        maxNumSignificantDigits;
  return format(`$.${numSignificantDigitsInOutput}s`)(input).replace('G', 'B');
};

// Convert from number `0.10` to  string `10%`:
export const formatPercentage =
  (percentage: number, decimalPlaces: number = 2) => format(`.${decimalPlaces}%`)(percentage);

// Whether each year's data should be an absolute value or percentage relative
// to the total for that year:
export enum Layout {
  Value = 'Value',
  Share = 'Share',
}

interface ITick {
  position: number;
  label: string;
}

interface IOutput {
  xTicks: ITick[];
  yTicks: ITick[];
}

interface IInput {
  xAxisMax: number;
  xAxisMin: number;
  yAxisMax: number;
  yAxisMin: number;
  layout: Layout;
  svgWidth: number;
  svgHeight: number;
}
const getTicksInfo = (input: IInput): IOutput => {
  const {
    xAxisMin, xAxisMax, yAxisMin, yAxisMax,
    svgWidth, svgHeight, layout,
  } = input;
  const xScale = getLinearScale([xAxisMin, xAxisMax], [0, svgWidth]);
  const yScale = getLinearScale([yAxisMin, yAxisMax], [svgHeight, 0]);

  const integerXTickValues: number[] = xScale.ticks().filter(value => Number.isInteger(value));
  const xTicks: ITick[] = integerXTickValues.map(year => ({
    position: xScale(year),
    label: year.toString(),
  }));

  const yTicks: ITick[] = yScale.ticks().map(value => ({
    position: yScale(value),
    label: (layout === Layout.Share) ? toPercentageString(value) : formatTradeValue(value),
  }));

  return {xTicks, yTicks};
};

export default getTicksInfo;
