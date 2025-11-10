'use client';

import Image from 'next/image';
import { Game } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface GameDetailContentProps {
  game: Game;
}

export default function GameDetailContent({ game }: GameDetailContentProps) {
  const { t } = useI18n();

  return (
    <>
      {/* Tags */}
      {game.tags && game.tags.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t('games.tags')}
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
            {t('games.technologies')}
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
            {t('games.screenshots')}
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
            {t('games.videos')}
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
                  {t('games.viewVideo')} {index + 1}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

