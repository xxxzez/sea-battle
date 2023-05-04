import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AppLanguages } from '../constants/app-languages.constant';
import enJson from './en/translation.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enJson,
    },
  },
  lng: AppLanguages.En,
  fallbackLng: AppLanguages.En,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
