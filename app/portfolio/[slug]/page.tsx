import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectBySlugData, getProjects } from '@/lib/data-loader';
import ProjectDetailHeader from '@/components/portfolio/ProjectDetailHeader';
import ProjectDetailContent from '@/components/portfolio/ProjectDetailContent';

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
      <ProjectDetailHeader project={project} />

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ProjectDetailContent project={project} allImages={allImages} />
        </div>
      </div>
    </div>
  );
}

