import React from 'react';
import {
  IRibbon,
} from '../Utils';
import RibbonLabel from './RibbonLabel';

interface IProps {
  ribbons: IRibbon[];
}

export default class extends React.PureComponent<IProps> {
  render() {
    const {ribbons} = this.props;

    const unfiltered: Array<JSX.Element | undefined> = ribbons.map(({textInRibbon, id}) => {
      if (textInRibbon.showText === true) {
        const {centerX, centerY, width, height, angle, fontSize, textUnsplit} = textInRibbon;
        return (
          <RibbonLabel
            centerX={centerX} centerY={centerY} width={width} height={height}
            angle={angle} fontSize={fontSize}
            text={textUnsplit} key={id}
          />
        );
      } else {
        return undefined;
      }
    });

    const filtered = unfiltered.filter(elem => elem !== undefined) as JSX.Element[];

    return (
      <React.Fragment>
        {filtered}
      </React.Fragment>
    );
  }
}
