'use client';

import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import { useI18n } from '@/lib/i18n/context';

interface PortfolioListProps {
  projects: Project[];
}

export default function PortfolioList({ projects }: PortfolioListProps) {
  const { t } = useI18n();

  if (projects.length === 0) {
    return (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-lg text-slate-600">
              {t('common.noProjects') || 'No hay proyectos disponibles en este momento.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

