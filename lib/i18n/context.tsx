'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale, translations } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

/**
 * Hook para usar el contexto de i18n
 */
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

/**
 * Función helper para obtener traducción anidada
 */
function getNestedTranslation(obj: any, path: string): string {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }
  return typeof value === 'string' ? value : path;
}

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

/**
 * Provider de i18n
 * Maneja el estado del idioma y proporciona traducciones
 */
export function I18nProvider({ children, defaultLocale = 'es' }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Cargar idioma desde localStorage al montar (solo en cliente)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      } else {
        document.documentElement.lang = defaultLocale;
      }
    }
    setMounted(true);
  }, [defaultLocale]);

  // Guardar idioma en localStorage cuando cambie
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  // Función de traducción
  const t = (key: string): string => {
    const translation = translations[locale];
    return getNestedTranslation(translation, key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

