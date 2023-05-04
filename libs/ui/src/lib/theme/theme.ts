import { AppTheme, ThemeType } from './theme.type';

const appTheme = new Map<ThemeType, AppTheme>();

appTheme.set(ThemeType.Dark, {
  pallette: {
    primary: '#BA2649',
    light: '#fff',
    grey: '#9E9E9E',
    slider: {
      0: {
        backgroundColor: '#335c67',
        textColor: '#35D2DA',
      },
      1: {
        backgroundColor: '#fff3b0',
        textColor: '#024E23',
      },
      2: {
        backgroundColor: '#e09f3e',
        textColor: '#006171',
      },
    },
  },
});

appTheme.set(ThemeType.Light, {
  pallette: {
    primary: '#BA2649',
    light: '#fff',
    grey: '#9E9E9E',
    slider: {
      0: {
        backgroundColor: '#335c67',
        textColor: '#35D2DA',
      },
      1: {
        backgroundColor: '#fff3b0',
        textColor: '#024E23',
      },
      2: {
        backgroundColor: '#e09f3e',
        textColor: '#006171',
      },
    },
  },
});

export const getAppTheme = (type: ThemeType) => appTheme.get(type);
