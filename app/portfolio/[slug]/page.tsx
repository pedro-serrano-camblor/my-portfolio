import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlugData, getProjects } from '@/lib/data-loader';
import ImageLightbox from '@/components/portfolio/ImageLightbox';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Genera las rutas estáticas para todos los proyectos
 */
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Genera metadata para cada proyecto
 */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlugData(params.slug);
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

/**
 * Página de detalle de proyecto
 * Muestra información completa del proyecto con galería de imágenes
 */
export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlugData(params.slug);

  if (!project) {
    notFound();
  }

  // Combinar imagen principal con imágenes adicionales
  const allImages = project.images 
    ? [project.imageUrl, ...project.images]
    : [project.imageUrl];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al portfolio
            </Button>
          </Link>
          
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.description}
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
                  Ver proyecto
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
                  Ver código
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Imagen principal */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

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
                  Tecnologías
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
                  Galería
                </h2>
                <ImageLightbox images={allImages} alt={project.title} />
              </div>
            )}

            {/* Vídeos */}
            {project.videos && project.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Vídeos
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
                            title={`Video ${index + 1}`}
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
                            title={`Video ${index + 1}`}
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
                        Ver video {index + 1}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

