'use client';

import { useI18n } from '@/lib/i18n/context';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Componente para cambiar el idioma
 */
export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      aria-label={`Change language to ${locale === 'es' ? 'English' : 'Español'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{locale === 'es' ? 'ES' : 'EN'}</span>
      <span className="sm:hidden">{locale === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}

