'use client';

import Image from 'next/image';
import ImageLightbox from './ImageLightbox';
import { Project } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface ProjectDetailContentProps {
  project: Project;
  allImages: string[];
}

export default function ProjectDetailContent({ project, allImages }: ProjectDetailContentProps) {
  const { t } = useI18n();

  return (
    <>
      {/* Contenido */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Descripción detallada */}
            {project.longDescription && (
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-8 text-slate-600 whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>
            )}

            {/* Tecnologías */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('portfolio.technologies')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Galería de imágenes */}
            {allImages.length > 1 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('portfolio.gallery')}
                </h2>
                <ImageLightbox images={allImages} alt={project.title} />
              </div>
            )}

            {/* Vídeos */}
            {project.videos && project.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('portfolio.videos')}
                </h2>
                <div className="space-y-4">
                  {project.videos.map((video, index) => {
                    // Detectar si es YouTube o Vimeo
                    const youtubeMatch = video.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
                    const vimeoMatch = video.match(/vimeo\.com\/(\d+)/);
                    
                    if (youtubeMatch) {
                      const videoId = youtubeMatch[1];
                      return (
                        <div key={index} className="aspect-video w-full overflow-hidden rounded-lg">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${t('common.videoNumber')} ${index + 1}`}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                    
                    if (vimeoMatch) {
                      const videoId = vimeoMatch[1];
                      return (
                        <div key={index} className="aspect-video w-full overflow-hidden rounded-lg">
                          <iframe
                            src={`https://player.vimeo.com/video/${videoId}`}
                            title={`${t('common.videoNumber')} ${index + 1}`}
                            className="h-full w-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                    
                    return (
                      <a
                        key={index}
                        href={video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-slate-600 hover:text-slate-900"
                      >
                        {t('portfolio.viewVideo')} {index + 1}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

