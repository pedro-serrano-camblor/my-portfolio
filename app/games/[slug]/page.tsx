import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getGameBySlugData, getGames } from '@/lib/data-loader';
import PersonalGameView from '@/components/games/PersonalGameView';
import ProfessionalGameView from '@/components/games/ProfessionalGameView';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    title: `${game.title} | Juegos`,
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
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/games">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a juegos
            </Button>
          </Link>
          
          <div className="mx-auto max-w-3xl">
            {/* Badge de tipo */}
            <div className="mb-4">
              <span
                className={`inline-block rounded-full px-4 py-1 text-sm font-medium ${
                  isPersonal
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {isPersonal ? 'Juego Personal' : 'Juego Profesional'}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {game.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {game.description}
            </p>
          </div>
        </div>
      </section>

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

            {/* Tags */}
            {game.tags && game.tags.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-3">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tecnologías */}
            {game.technologies && game.technologies.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Tecnologías
                </h2>
                <div className="flex flex-wrap gap-3">
                  {game.technologies.map((tech) => (
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

            {/* Screenshots */}
            {game.screenshots && game.screenshots.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {game.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
                    >
                      <Image
                        src={screenshot}
                        alt={`${game.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vídeos */}
            {game.videos && game.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Vídeos
                </h2>
                <div className="space-y-4">
                  {game.videos.map((video, index) => {
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

