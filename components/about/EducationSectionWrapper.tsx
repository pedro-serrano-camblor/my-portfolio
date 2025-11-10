'use client';

import EducationSection from './EducationSection';
import { Education } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface EducationSectionWrapperProps {
  education: Education[];
}

export default function EducationSectionWrapper({ education }: EducationSectionWrapperProps) {
  const { t } = useI18n();

  return <EducationSection education={education} title={t('about.education.title')} />;
}

