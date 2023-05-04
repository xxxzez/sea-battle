import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider, getAppTheme, ThemeType } from '@ui/src';
import { Welcome } from './screens/welcome';
import { i18n } from './localization';

export const App = () => {
  const type = useColorScheme() === 'dark' ? ThemeType.Dark : ThemeType.Light;
  const theme = getAppTheme(type);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Welcome />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
