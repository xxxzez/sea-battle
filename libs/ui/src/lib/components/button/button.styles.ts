import styled, { css } from '../../theme/styled-components';
import { ButtonVariantsMap, Variant } from './button.types';

const buttonStylesMap: ButtonVariantsMap = {
  contained: css`
    ${({ theme }) => ({
      backgroundColor: theme.pallette.primary,
    })}
  `,
  outlined: css`
    ${({ theme }) => ({
      borderWidth: 1,
      borderColor: theme.pallette.primary,
    })}
  `,
  text: css``,
};

const disableButtonStylesMap: ButtonVariantsMap = {
  contained: css`
    ${({ theme }) => ({
      backgroundColor: theme.pallette.grey,
    })}
  `,
  outlined: css`
    ${({ theme }) => ({
      borderWidth: 1,
      borderColor: theme.pallette.grey,
    })}
  `,
  text: css``,
};

const textStylesMap: ButtonVariantsMap = {
  contained: css`
    ${({ theme }) => ({
      color: theme.pallette.light,
    })}
  `,
  outlined: css`
    ${({ theme }) => ({
      color: theme.pallette.primary,
    })}
  `,
  text: css`
    ${({ theme }) => ({
      color: theme.pallette.primary,
    })}
  `,
};

export const Wrapper = styled.Pressable<{
  variant: Variant;
  disabled?: boolean;
  color?: string;
}>`
  ${({ variant }) => buttonStylesMap[variant]};
  ${({ disabled, variant }) => disabled && disableButtonStylesMap[variant]};
  ${({ color, variant }) =>
    color && variant !== 'text' && { borderColor: color }};
  ${({ color, variant }) =>
    color && variant === 'contained' && { backgroundColor: color }};
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  border-radius: 10px;
`;

export const CustomText = styled.Text<{
  variant: Variant;
  color?: string;
  textColor?: string;
}>`
  ${({ variant }) => textStylesMap[variant]};
  ${({ color, variant }) => color && variant !== 'contained' && { color }};
  ${({ textColor }) => textColor && { color: textColor }};
`;
