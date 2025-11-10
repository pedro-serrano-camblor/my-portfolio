'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Game } from '@/types';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

interface GameCardProps {
  game: Game;
  index?: number;
}

/**
 * Componente Card para juegos
 * Muestra información del juego con badge según tipo (personal/profesional)
 */
export default function GameCard({ game, index = 0 }: GameCardProps) {
  const router = useRouter();
  const { t } = useI18n();
  const isPersonal = game.gameType === 'personal';

  const handleCardClick = () => {
    router.push(`/games/${game.slug}`);
  };

  // Obtener descripción traducida
  const getTranslatedDescription = (): string => {
    const translationKey = `games.games.${game.id}.description`;
    const translated = t(translationKey);
    // Si la traducción no existe, usar la descripción original
    return translated !== translationKey ? translated : game.description;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Imagen con badge */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={game.imageUrl}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge de tipo */}
        <div className="absolute top-2 right-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              isPersonal
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {isPersonal ? t('games.personalGame') : t('games.professionalGame')}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700">
          {game.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {getTranslatedDescription()}
        </p>

        {/* Información adicional */}
        {game.company && (
          <p className="mt-2 text-sm text-slate-500">
            {game.company}
          </p>
        )}

        {/* Tags */}
        {game.tags && game.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {game.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        <div className="mt-4">
          <Link 
            href={`/games/${game.slug}`}
            className="flex items-center gap-1 text-sm text-slate-600 group-hover:text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {t('portfolio.viewMore')}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

