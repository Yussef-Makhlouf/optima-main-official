import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import servicesEn from './locales/en/services.json';
import projectsEn from './locales/en/projects.json';
import aboutEn from './locales/en/about.json';
import contactEn from './locales/en/contact.json';
import industriesEn from './locales/en/industries.json';

import commonAr from './locales/ar/common.json';
import homeAr from './locales/ar/home.json';
import servicesAr from './locales/ar/services.json';
import projectsAr from './locales/ar/projects.json';
import aboutAr from './locales/ar/about.json';
import contactAr from './locales/ar/contact.json';
import industriesAr from './locales/ar/industries.json';

const resources = {
    en: {
        common: commonEn,
        home: homeEn,
        services: servicesEn,
        projects: projectsEn,
        about: aboutEn,
        contact: contactEn,
        industries: industriesEn,
    },
    ar: {
        common: commonAr,
        home: homeAr,
        services: servicesAr,
        projects: projectsAr,
        about: aboutAr,
        contact: contactAr,
        industries: industriesAr,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
