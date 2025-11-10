import { getProjects } from '@/lib/data-loader';
import ProjectCard from '@/components/portfolio/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Colección de proyectos y trabajos',
};

/**
 * Página de listado de proyectos
 * Muestra todos los proyectos con filtros
 */
export default async function PortfolioPage() {
  const projects = await getProjects();

  // Obtener todas las categorías únicas
  const categories = Array.from(new Set(projects.map(p => p.category)));
  const allTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una colección de mis proyectos y trabajos
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">
                No hay proyectos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

