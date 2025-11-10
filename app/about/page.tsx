import { getPersonalInfo, getExperiences, getEducation, getSkills } from '@/lib/data-loader';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import SkillsSection from '@/components/about/SkillsSection';
import AboutHero from '@/components/about/AboutHero';
import EducationSection from '@/components/about/EducationSection';
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
      {skills.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Habilidades Técnicas
              </h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                Tecnologías y herramientas con las que trabajo
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <SkillsSection skills={skills} />
            </div>
          </div>
        </section>
      )}

      {/* Experiencia Laboral */}
      {experiences.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Experiencia Laboral
              </h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                Mi trayectoria profesional
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <ExperienceTimeline experiences={experiences} />
            </div>
          </div>
        </section>
      )}

      {/* Educación */}
      <EducationSection education={education} />
    </div>
  );
}

