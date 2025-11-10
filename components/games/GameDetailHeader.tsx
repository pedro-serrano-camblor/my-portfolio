'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Game } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface GameDetailHeaderProps {
  game: Game;
}

export default function GameDetailHeader({ game }: GameDetailHeaderProps) {
  const { t } = useI18n();
  const isPersonal = game.gameType === 'personal';

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/games">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('games.backToGames')}
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
              {isPersonal ? t('games.personalGameLabel') : t('games.professionalGameLabel')}
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
  );
}

