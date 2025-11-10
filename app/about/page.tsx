import { getPersonalInfo, getExperiences, getEducation, getSkills } from '@/lib/data-loader';
import AboutHero from '@/components/about/AboutHero';
import SkillsSectionWrapper from '@/components/about/SkillsSectionWrapper';
import ExperienceSectionWrapper from '@/components/about/ExperienceSectionWrapper';
import EducationSectionWrapper from '@/components/about/EducationSectionWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Información personal, experiencia laboral y habilidades',
};

/**
 * Página About / CV
 * Muestra información personal, habilidades, experiencia laboral y educación
 */
export default async function AboutPage() {
  const [personalInfo, experiences, education, skills] = await Promise.all([
    getPersonalInfo(),
    getExperiences(),
    getEducation(),
    getSkills(),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <AboutHero personalInfo={personalInfo} />

      {/* Habilidades */}
      <SkillsSectionWrapper skills={skills} />

      {/* Experiencia Laboral */}
      <ExperienceSectionWrapper experiences={experiences} />

      {/* Educación */}
      <EducationSectionWrapper education={education} />
    </div>
  );
}

