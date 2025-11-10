'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GameCard from '@/components/games/GameCard';
import { ArrowRight } from 'lucide-react';
import { Game } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface FeaturedGamesSectionProps {
  games: Game[];
}

export default function FeaturedGamesSection({ games }: FeaturedGamesSectionProps) {
  const { t } = useI18n();

  if (games.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('home.featuredGames.title')}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            {t('home.featuredGames.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {games.slice(0, 3).map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/games">
            <Button variant="outline">
              {t('home.featuredGames.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

