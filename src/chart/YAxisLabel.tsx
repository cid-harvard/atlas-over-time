import React from 'react';
import getValueLabel from './getDisplayValueLabel';
import {
  IDiscriminant,
  InflationAdjustment as Inflation,
  Layout,
  PopulationAdjustment as Population,
  GraphSubject,
} from './Utils';
import AdjustmentOption from './AdjustmentOption';
import {
  CloseButtonContent,
  OptionsCloseButtonContainer,
  OptionsContainer,
  YAxisLabelArrowExplore as YAxisLabelArrow,
  YAxisLabelContainer,
  YAxisLabelText,
} from './YAxisLabelUtils';

enum TradeDirection {
  export = 'export',
  import = 'import',
}

enum TradeFlow {
  Gross = 'Gross',
  Net = 'Net',
}

interface IChoice<T extends string | number> {
  value: T;
  label: string;
}

function failIfValidOrNonExhaustive(_variable: never, message: string): never {
  throw new Error(message);
}

export interface IndividualAdjustments {
  inflationAdjustment: Inflation;
  populationAdjustment: Population;
}

export enum CombinedAdjustment {
  None,
  Constant,
  PerCapita,
  PerCapitaConstant,
}

const getOptionsMap = (tradeDirection: TradeDirection, tradeFlow: TradeFlow) => {
  let nominalLabel: string;
  if (tradeDirection === TradeDirection.export) {
    if (tradeFlow === TradeFlow.Gross) {
      nominalLabel = 'Current Gross Export';
    } else if (tradeFlow === TradeFlow.Net) {
      nominalLabel = 'Current Net Export';
    } else {
      failIfValidOrNonExhaustive(tradeFlow, 'Invalid trade flow ' + tradeFlow);
      nominalLabel = '';
    }
  } else if (tradeDirection === TradeDirection.import) {
    if (tradeFlow === TradeFlow.Gross) {
      nominalLabel = 'Current Gross Import';
    } else if (tradeFlow === TradeFlow.Net) {
      nominalLabel = 'Current Net Import';
    } else {
      failIfValidOrNonExhaustive(tradeFlow, 'Invalid trade flow ' + tradeFlow);
      nominalLabel = '';
    }
  } else {
    failIfValidOrNonExhaustive(tradeDirection, 'Invalid trade direction ' + tradeDirection);
    // These lines should never be executed:
    nominalLabel = '';
  }
  const optionsMap: Map<Inflation, Map<Population, IChoice<CombinedAdjustment>>> = new Map([
    [Inflation.NotAdjusted, new Map([
        [Population.NotAdjusted, {
          label: nominalLabel,
          value: CombinedAdjustment.None },
        ],
        [Population.Adjusted, {
          label: 'Per Capita',
          value: CombinedAdjustment.PerCapita},
        ],
      ]),
    ],
    [Inflation.Adjusted, new Map([
        [Population.NotAdjusted, {
          label: 'Constant',
          value: CombinedAdjustment.Constant },
        ],
        [Population.Adjusted, {
          label: 'Per Capita Constant',
          value: CombinedAdjustment.PerCapitaConstant},
        ],
      ]),
    ],
  ] as const);
  return optionsMap;
};

const mapToCombinedAdjustment =
  (inflation: Inflation, population: Population): CombinedAdjustment => {

  if (inflation === Inflation.NotAdjusted) {
    if (population === Population.NotAdjusted) {
      return CombinedAdjustment.None;
    } else {
      return CombinedAdjustment.PerCapita;
    }
  } else {
    if (population === Population.NotAdjusted) {
      return CombinedAdjustment.Constant;
    } else {
      return CombinedAdjustment.PerCapitaConstant;
    }
  }
};

const mapToSeparateAdjustments =
  (combined: CombinedAdjustment): IndividualAdjustments => {

  if (combined === CombinedAdjustment.None) {
    return {
      inflationAdjustment: Inflation.NotAdjusted,
      populationAdjustment: Population.NotAdjusted,
    };
  } else if (combined === CombinedAdjustment.Constant) {
    return {
      inflationAdjustment: Inflation.Adjusted,
      populationAdjustment: Population.NotAdjusted,
    };
  } else if (combined === CombinedAdjustment.PerCapita) {
    return {
      inflationAdjustment: Inflation.NotAdjusted,
      populationAdjustment: Population.Adjusted,
    };
  } else {
    return {
      inflationAdjustment: Inflation.Adjusted,
      populationAdjustment: Population.Adjusted,
    };
  }
};

interface IProps {
  type: IDiscriminant | undefined;
  inflationAdjustment: Inflation;
  populationAdjustment: Population;
  onOptionSelect: (adjustments: IndividualAdjustments) => void;
  layout: Layout;
  tradeDirection: TradeDirection;
  tradeFlow: TradeFlow;
  areYAxisOptionsShown: boolean;
  toggleOptionsVisibility: () => void;
  hideOptions: () => void;
}

export default class extends React.Component<IProps> {
  private onOptionSelect = (combinedAdjustment: CombinedAdjustment) => {
    const individualAdjustments = mapToSeparateAdjustments(combinedAdjustment);
    this.props.onOptionSelect(individualAdjustments);
  }

  render() {
    const {
      inflationAdjustment, populationAdjustment, type, layout, tradeDirection, tradeFlow,
      areYAxisOptionsShown, hideOptions, toggleOptionsVisibility,
    } = this.props;

    const optionsMap = getOptionsMap(tradeDirection, tradeFlow);

    const inflationOptions: Array<IChoice<CombinedAdjustment>> = [
      optionsMap.get(Inflation.NotAdjusted)!.get(Population.NotAdjusted)!,
      optionsMap.get(Inflation.Adjusted)!.get(Population.NotAdjusted)!,
    ];

    let populationOptions: Array<IChoice<CombinedAdjustment>>;
    if (type === undefined || type.subject === GraphSubject.Country) {
      populationOptions = [];
    } else {
      populationOptions = [
        optionsMap.get(Inflation.NotAdjusted)!.get(Population.Adjusted)!,
        optionsMap.get(Inflation.Adjusted)!.get(Population.Adjusted)!,
      ];
    }

    const adjustmentType = mapToCombinedAdjustment(inflationAdjustment, populationAdjustment);

    const yLabel = (layout === Layout.Share) ?
                    'Share' :
                  getValueLabel(inflationAdjustment, populationAdjustment, tradeDirection, tradeFlow);

    // Need to reverse because before the 180 deg rotation flips the order of the options:
    const options: React.ReactNode[] = [...inflationOptions, ...populationOptions].reverse().map(
      ({value, label}) => (
        <AdjustmentOption<CombinedAdjustment>
          selected={adjustmentType} assigned={value}
          label={label} key={value}
          onClick={this.onOptionSelect}
        />
      ),
    );

    let yAxisOptions: React.ReactNode;
    if (areYAxisOptionsShown) {
      yAxisOptions = (
        <OptionsContainer>
          {options}
          <OptionsCloseButtonContainer onClick={hideOptions} >
            <CloseButtonContent dangerouslySetInnerHTML={{__html: '&#x2715'}}/>
          </OptionsCloseButtonContainer>
        </OptionsContainer>
      );
    } else {
      yAxisOptions = null;
    }

    return (
      <YAxisLabelContainer>
        <YAxisLabelText onClick={toggleOptionsVisibility}>
          {yLabel}
          <YAxisLabelArrow/>
        </YAxisLabelText>
        {yAxisOptions}
      </YAxisLabelContainer>

    );
  }

}
