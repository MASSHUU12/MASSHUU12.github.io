import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./localization/en/en.json";
import * as pl from "./localization/pl/pl.json";

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  pl: {
    translation: {
      ...pl,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.languages = ["en", "pl"];

export default i18n;
