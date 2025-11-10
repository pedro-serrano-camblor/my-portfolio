'use client';

import { Game } from '@/types';
import { useState } from 'react';
import { ExternalLink, Building2, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfessionalGameViewProps {
  game: Game;
}

/**
 * Vista para juegos profesionales
 * Muestra información de la empresa, preview de la web, y tu rol
 */
export default function ProfessionalGameView({ game }: ProfessionalGameViewProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-8">
      {/* Información de la empresa */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-start gap-4">
          <Building2 className="h-6 w-6 text-slate-600 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {game.company}
            </h3>
            {game.companyUrl && (
              <a
                href={game.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
              >
                Visitar empresa
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tu rol */}
      {game.role && (
        <div className="flex items-center gap-2 text-slate-700">
          <User className="h-5 w-5 text-slate-500" />
          <span className="font-medium">Rol:</span>
          <span>{game.role}</span>
        </div>
      )}

      {/* Fecha de lanzamiento */}
      {game.releaseDate && (
        <div className="flex items-center gap-2 text-slate-700">
          <Calendar className="h-5 w-5 text-slate-500" />
          <span className="font-medium">Lanzamiento:</span>
          <span>{new Date(game.releaseDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      )}

      {/* Enlace al juego */}
      {game.gameUrl && (
        <div>
          <a
            href={game.gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Visitar juego
          </a>
        </div>
      )}

      {/* Preview de la web */}
      {game.showWebPreview && game.gameUrl && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Preview
            </h3>
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? 'Ocultar preview' : 'Mostrar preview'}
            </Button>
          </div>
          {showPreview && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <iframe
                src={game.gameUrl}
                className="h-full w-full"
                title={`Preview de ${game.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

