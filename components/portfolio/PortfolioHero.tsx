'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

export default function PortfolioHero() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            {t('portfolio.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            {t('portfolio.description')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

