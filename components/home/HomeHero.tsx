'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PersonalInfo } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface HomeHeroProps {
  personalInfo: PersonalInfo;
}

/**
 * Componente Hero para la homepage
 * Client component con animaciones
 */
export default function HomeHero({ personalInfo }: HomeHeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            {t('personal.title')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base leading-7 text-slate-500"
          >
            {t('home.hero.bio')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/portfolio">
              <Button size="lg">
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                {t('nav.about')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

