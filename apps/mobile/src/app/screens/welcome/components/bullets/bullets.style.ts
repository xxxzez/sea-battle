import styled from '@ui/src';
import { Dimensions } from 'react-native';

export const Wrapper = styled.View`
  width: 60px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
  left: ${(Dimensions.get('screen').width - 60) / 2}px;
  margin: 0 auto;
`;

export const Bullet = styled.View<{
  active: boolean;
  colorIndex: number;
}>`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border: 1px solid red;
  border: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].textColor};
  background-color: ${({ theme, colorIndex, active }) =>
    active ? theme.pallette.slider[colorIndex].textColor : 'transparent'};
`;
