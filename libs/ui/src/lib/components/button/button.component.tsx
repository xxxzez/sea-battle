import React, { FC } from 'react';
import { PressableProps } from 'react-native';
import { Variant } from './button.types';
import * as Styled from './button.styles';

export interface ButtonProps extends Omit<PressableProps, 'disabled'> {
  variant?: Variant;
  title?: string;
  color?: string;
  textColor?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'contained',
  title,
  children,
  color,
  textColor,
  ...props
}) => {
  return (
    <Styled.Wrapper {...props} color={color} variant={variant}>
      {!title ? (
        children
      ) : (
        <Styled.CustomText
          textColor={textColor}
          color={color}
          variant={variant}
        >
          {title}
        </Styled.CustomText>
      )}
    </Styled.Wrapper>
  );
};
