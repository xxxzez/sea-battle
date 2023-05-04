import styled, { Button } from '@ui/src';
import { Dimensions } from 'react-native';

export const SLID_WIDTH = Dimensions.get('screen').width;

export const SlideWrapper = styled.View<{
  colorIndex: number;
}>`
  justify-content: center;
  align-items: center;
  width: ${SLID_WIDTH}px;
  background-color: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].backgroundColor};
  padding: 0 20px;
`;

export const ContentWrapper = styled.View`
  display: flex;
  align-items: center;
`

export const SlideTitle = styled.Text<{
  colorIndex: number;
}>`
  font-size: 34px;
  margin: 20px 0;
  color: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].textColor};
`;

export const SlideDescription = styled.Text<{
  colorIndex: number;
}>`
  font-size: 24px;
  text-align: center;
  color: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].textColor};
`;

export const ConfirmationSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ConfirmationTitle = styled.Text<{
  colorIndex: number;
}>`
  font-size: 17px;
  margin: 10px 0;
  color: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].textColor};
`;

export const ConfirmationText = styled.Text<{
  colorIndex: number;
}>`
  color: ${({ theme, colorIndex }) =>
    theme.pallette.slider[colorIndex].textColor};
`;

export const AuthButton = styled(Button)`
  width: 200px;
  padding: 15px 0;
  margin: 5px 0;
`;

