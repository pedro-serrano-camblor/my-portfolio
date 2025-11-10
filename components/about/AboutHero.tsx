'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { PersonalInfo } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface AboutHeroProps {
  personalInfo: PersonalInfo;
}

/**
 * Componente Hero para la página About
 * Client component con animaciones
 */
export default function AboutHero({ personalInfo }: AboutHeroProps) {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            {t('about.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-slate-900">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

