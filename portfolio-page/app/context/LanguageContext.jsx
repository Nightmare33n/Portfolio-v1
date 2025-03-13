'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0];
    // Check if we support the browser language
    const supportedLang = translations[browserLang] ? browserLang : 'es';
    setLanguage(supportedLang);
  }, []);

  const value = {
    language,
    setLanguage,
    t: (key) => {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        value = value[k];
      }
      return value;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 