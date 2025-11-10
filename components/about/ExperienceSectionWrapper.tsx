'use client';

import ExperienceTimeline from './ExperienceTimeline';
import { Experience } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface ExperienceSectionWrapperProps {
  experiences: Experience[];
}

export default function ExperienceSectionWrapper({ experiences }: ExperienceSectionWrapperProps) {
  const { t } = useI18n();

  if (experiences.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('about.experience.title')}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            {t('about.experience.description')}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
}

