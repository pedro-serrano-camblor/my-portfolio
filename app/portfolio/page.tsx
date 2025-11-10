import { getProjects } from '@/lib/data-loader';
import type { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioList from '@/components/portfolio/PortfolioList';

export const metadata: Metadata = {
  title: 'Dev Portfolio',
  description: 'Web development projects and applications',
};

/**
 * Página de listado de proyectos
 * Muestra todos los proyectos
 */
export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <PortfolioHero />

      {/* Proyectos */}
      <PortfolioList projects={projects} />
    </div>
  );
}

