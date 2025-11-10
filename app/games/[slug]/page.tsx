import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getGameBySlugData, getGames } from '@/lib/data-loader';
import PersonalGameView from '@/components/games/PersonalGameView';
import ProfessionalGameView from '@/components/games/ProfessionalGameView';
import GameDetailHeader from '@/components/games/GameDetailHeader';
import GameDetailContent from '@/components/games/GameDetailContent';

/**
 * Genera las rutas estáticas para todos los juegos
 */
export async function generateStaticParams() {
  const games = await getGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}

/**
 * Genera metadata para cada juego
 */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const game = await getGameBySlugData(params.slug);
  
  if (!game) {
    return {
      title: 'Juego no encontrado',
    };
  }

  return {
    title: `${game.title} | Games Portfolio`,
    description: game.description,
  };
}

/**
 * Página de detalle de juego
 * Muestra diferente contenido según el tipo de juego (personal o profesional)
 */
export default async function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = await getGameBySlugData(params.slug);

  if (!game) {
    notFound();
  }

  const isPersonal = game.gameType === 'personal';

  return (
    <div className="flex flex-col">
      {/* Header */}
      <GameDetailHeader game={game} />

      {/* Imagen principal */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <Image
              src={game.imageUrl}
              alt={game.title}
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
            {/* Vista según tipo de juego */}
            {isPersonal ? (
              <PersonalGameView game={game} />
            ) : (
              <ProfessionalGameView game={game} />
            )}

            {/* Contenido adicional (tags, tecnologías, screenshots, vídeos) */}
            <GameDetailContent game={game} />
          </div>
        </div>
      </section>
    </div>
  );
}

