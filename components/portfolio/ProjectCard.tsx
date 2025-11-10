'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Componente Card para proyectos
 * Muestra información del proyecto con animaciones
 */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const router = useRouter();
  const { t } = useI18n();

  const handleCardClick = () => {
    router.push(`/portfolio/${project.slug}`);
  };

  // Obtener descripción traducida
  const getTranslatedDescription = (): string => {
    const translationKey = `portfolio.projects.${project.id}.description`;
    const translated = t(translationKey);
    // Si la traducción no existe, usar la descripción original
    return translated !== translationKey ? translated : project.description;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Imagen */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {getTranslatedDescription()}
        </p>

        {/* Tecnologías */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
            >
              <ExternalLink className="h-4 w-4" />
              {t('portfolio.demo')}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              {t('portfolio.github')}
            </a>
          )}
          <Link 
            href={`/portfolio/${project.slug}`}
            className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 ml-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {t('portfolio.viewMore')}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

