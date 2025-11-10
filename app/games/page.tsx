import { getGames, getGamesByTypeData } from '@/lib/data-loader';
import type { Metadata } from 'next';
import GamesHero from '@/components/games/GamesHero';
import GamesSection from '@/components/games/GamesSection';
import GamesEmptyState from '@/components/games/GamesEmptyState';

export const metadata: Metadata = {
  title: 'Games Portfolio',
  description: 'Video game projects developed professionally and in my free time',
};

/**
 * Página de listado de juegos
 * Muestra juegos personales y profesionales separados
 */
export default async function GamesPage() {
  const [allGames, personalGames, professionalGames] = await Promise.all([
    getGames(),
    getGamesByTypeData('personal'),
    getGamesByTypeData('professional'),
  ]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <GamesHero />

      {/* Juegos Personales */}
      <GamesSection games={personalGames} type="personal" />

      {/* Juegos Profesionales */}
      <GamesSection games={professionalGames} type="professional" />

      {/* Mensaje si no hay juegos */}
      {allGames.length === 0 && <GamesEmptyState />}
    </div>
  );
}

