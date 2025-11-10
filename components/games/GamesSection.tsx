'use client';

import { Game } from '@/types';
import GameCard from './GameCard';
import { useI18n } from '@/lib/i18n/context';

interface GamesSectionProps {
  games: Game[];
  type: 'personal' | 'professional';
}

export default function GamesSection({ games, type }: GamesSectionProps) {
  const { t } = useI18n();

  if (games.length === 0) return null;

  const isPersonal = type === 'personal';
  const title = isPersonal ? t('games.personal.title') : t('games.professional.title');
  const description = isPersonal ? t('games.personal.description') : t('games.professional.description');
  const bgClass = isPersonal ? '' : 'bg-slate-50';

  return (
    <section className={`py-16 sm:py-24 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

