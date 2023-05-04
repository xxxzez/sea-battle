export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
}

export interface AppTheme {
  pallette: {
    primary: string;
    light: string;
    grey: string;
    slider: {
      0: {
        backgroundColor: string,
        textColor: string
      };
      1: {
        backgroundColor: string,
        textColor: string
      };
      2: {
        backgroundColor: string,
        textColor: string
      };
    };
  };
}
