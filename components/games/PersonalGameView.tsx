'use client';

import { Game } from '@/types';
import Image from 'next/image';
import { ExternalLink, Github, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n/context';

interface PersonalGameViewProps {
  game: Game;
}

/**
 * Vista para juegos personales
 * Muestra enlaces a builds externos, GitHub, documentación, etc.
 */
export default function PersonalGameView({ game }: PersonalGameViewProps) {
  const { t } = useI18n();

  // Obtener icono según tipo de enlace
  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="h-4 w-4" />;
      case 'documentation':
        return <FileText className="h-4 w-4" />;
      case 'build':
      case 'itch':
      case 'gamejolt':
      case 'steam':
        return <Play className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  // Obtener color según tipo de enlace
  const getLinkColor = (type: string) => {
    switch (type) {
      case 'build':
      case 'itch':
      case 'gamejolt':
      case 'steam':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'github':
        return 'bg-slate-900 hover:bg-slate-800 text-white';
      case 'documentation':
        return 'bg-slate-600 hover:bg-slate-700 text-white';
      default:
        return 'bg-slate-100 hover:bg-slate-200 text-slate-900';
    }
  };

  return (
    <div className="space-y-8">
      {/* Nota personal */}
      {game.personalNote && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            {t('games.personalNote') || 'Sobre este proyecto'}
          </h3>
          <p className="text-blue-800">{game.personalNote}</p>
        </div>
      )}

      {/* Enlaces */}
      {game.links && game.links.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {t('games.links') || 'Enlaces'}
          </h3>
          <div className="flex flex-wrap gap-4">
            {game.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${getLinkColor(link.type)}`}
              >
                {getLinkIcon(link.type)}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Instrucciones */}
      {game.instructions && (
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {t('games.instructions')}
          </h3>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-700 whitespace-pre-line">
              {game.instructions}
            </p>
          </div>
        </div>
      )}

      {/* Preparado para Unity WebGL (futuro) */}
      {game.unityBuildPath && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
          <p className="text-amber-800">
            {t('common.unityWebGLComingSoon')}
          </p>
        </div>
      )}
    </div>
  );
}

