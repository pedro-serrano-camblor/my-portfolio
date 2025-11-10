import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/portfolio/ProjectCard';
import GameCard from '@/components/games/GameCard';
import { getPersonalInfo, getFeaturedProjectsData, getFeaturedGamesData } from '@/lib/data-loader';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';

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
      {featuredProjects.length > 0 && (
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Proyectos Destacados
              </h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                Algunos de mis proyectos más recientes
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/portfolio">
                <Button variant="outline">
                  Ver todos los proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Juegos Destacados */}
      {featuredGames.length > 0 && (
        <section className="bg-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Juegos
              </h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                Proyectos de videojuegos desarrollados profesionalmente y en mi tiempo libre
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {featuredGames.slice(0, 3).map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/games">
                <Button variant="outline">
                  Ver todos los juegos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sección About (Resumen) */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sobre mí
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {personalInfo.bio}
            </p>
            <div className="mt-10">
              <Link href="/about">
                <Button>
                  Conocer más sobre mí
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
