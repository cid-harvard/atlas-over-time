import React from 'react';
import styles from './ribbonLabel.css';

type IProps = {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  angle: number;
  text: string;
  fontSize: number;
};
export default class extends React.Component<IProps> {
  render() {
    const {
      centerX, centerY, width, height, angle, text, fontSize,
    } = this.props;

    const style = {
      '--translationX': `${centerX}px`,
      '--translationY': `${centerY}px`,
      '--width': `${width}px`,
      '--height': `${height}px`,
      // Need to negate angle because the angle output by the `largestRect`
      // algorithm is opposite that of the sense of direction of CSS rotation
      // angles;
      '--rotation': `${-angle}deg`,
      'fontSize': `${fontSize}px`,
    };

    return (
      <div className={styles.ribbonLabel} style={style}>
        {text}
      </div>
    );
  }
}
