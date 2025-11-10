import { getGames, getGamesByTypeData } from '@/lib/data-loader';
import GameCard from '@/components/games/GameCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juegos',
  description: 'Proyectos de videojuegos desarrollados profesionalmente y en mi tiempo libre',
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
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Juegos
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Proyectos de videojuegos desarrollados profesionalmente y en mi tiempo libre
            </p>
          </div>
        </div>
      </section>

      {/* Juegos Personales */}
      {personalGames.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Juegos Personales
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Proyectos desarrollados en mi tiempo libre
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {personalGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Juegos Profesionales */}
      {professionalGames.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Juegos Profesionales
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Proyectos desarrollados para empresas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {professionalGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mensaje si no hay juegos */}
      {allGames.length === 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg text-slate-600">
                No hay juegos disponibles en este momento.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

