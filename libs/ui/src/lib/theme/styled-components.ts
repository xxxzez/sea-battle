import * as styledComponents from "styled-components/native";

import type { AppTheme } from "./theme.type";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<AppTheme>;

export { css, ThemeProvider };
export default styled;