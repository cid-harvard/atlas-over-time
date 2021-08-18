import styled from 'styled-components';

const arrowColor = 'rgb(153, 153, 153)';
const arrowHeight = 10; // in pixels
const arrowHalfBase = arrowHeight * Math.sqrt(3) / 2;

export const YAxisLabelContainer = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.7rem;
  color: #666;
  white-space: nowrap;
  transform: rotate(180deg);
  cursor: pointer;
`;

export const YAxisLabelText = styled.div`
  display: inline-block;
  border: 1px solid ${arrowColor};
  border-radius: 5px;
  text-transform: uppercase;
  padding: 7px;
`;

export const YAxisLabelArrowExplore = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: ${arrowHalfBase}px solid transparent;
  border-bottom: ${arrowHalfBase}px solid transparent;
  border-right: ${arrowHeight}px solid ${arrowColor};
  position: relative;
  left: -2px;
  margin-top: 5px;
`;

export const OptionsContainer = styled.ul`
  display: block;
  position: absolute;
  top: 100%;
  right: calc(100% + 10px);
  transform: rotate(90deg);
  transform-origin: top right;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.22) 0 0 10px;
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 2;
  color: rgb(102, 102, 102);
`;

export const OptionsCloseButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(153, 153, 153);
  color: white;
  transform: translateX(50%) translateY(50%);
`;

export const CloseButtonContent = styled.div`
  position: absolute;
  font-size: 0.7rem;
  top: 5px;
  left: -1px;
`;
