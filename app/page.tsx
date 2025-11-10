import { getPersonalInfo, getFeaturedProjectsData, getFeaturedGamesData } from '@/lib/data-loader';
import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import FeaturedGamesSection from '@/components/home/FeaturedGamesSection';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portfolio personal - Desarrollador Full Stack',
  openGraph: {
    title: 'Portfolio Web',
    description: 'Portfolio personal desarrollado con Next.js 14',
  },
};

/**
 * Homepage del portfolio
 * Incluye hero section, proyectos destacados y juegos destacados
 */
export default async function Home() {
  const [personalInfo, featuredProjects, featuredGames] = await Promise.all([
    getPersonalInfo(),
    getFeaturedProjectsData(),
    getFeaturedGamesData(),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HomeHero personalInfo={personalInfo} />

      {/* Proyectos Destacados */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* Juegos Destacados */}
      <FeaturedGamesSection games={featuredGames} />
    </div>
  );
}
