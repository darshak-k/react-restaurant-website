import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './assets/locales/en/translation.json';
import fsTranslation from './assets/locales/fs/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fs: { translation: fsTranslation },
    },
    lng: 'fs', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;