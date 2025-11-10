'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface ProjectDetailHeaderProps {
  project: Project;
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  const { t } = useI18n();

  // Obtener descripción traducida
  const getTranslatedDescription = (): string => {
    const translationKey = `portfolio.projects.${project.id}.description`;
    const translated = t(translationKey);
    return translated !== translationKey ? translated : project.description;
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('portfolio.backToPortfolio')}
          </Button>
        </Link>
        
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {getTranslatedDescription()}
          </p>
          
          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                <ExternalLink className="h-4 w-4" />
                {t('portfolio.viewProject')}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                <Github className="h-4 w-4" />
                {t('portfolio.viewCode')}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

