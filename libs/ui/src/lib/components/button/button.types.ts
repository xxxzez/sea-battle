import { FlattenInterpolation, ThemeProps } from 'styled-components';
import { AppTheme } from '../../theme';

export type Variant = 'contained' | 'outlined' | 'text';

export type ButtonVariantsMap = {
  [key in Variant]: FlattenInterpolation<ThemeProps<AppTheme>>;
};
