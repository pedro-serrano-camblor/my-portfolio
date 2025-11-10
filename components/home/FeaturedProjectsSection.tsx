'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export default function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const { t } = useI18n();

  if (projects.length === 0) return null;

  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('home.featuredProjects.title')}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            {t('home.featuredProjects.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="outline">
              {t('home.featuredProjects.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

