'use client';

import SkillsSection from './SkillsSection';
import { Skill } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface SkillsSectionWrapperProps {
  skills: Skill[];
}

export default function SkillsSectionWrapper({ skills }: SkillsSectionWrapperProps) {
  const { t } = useI18n();

  if (skills.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('about.skills.title')}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            {t('about.skills.description')}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <SkillsSection skills={skills} />
        </div>
      </div>
    </section>
  );
}

