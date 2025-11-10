'use client';

import { useI18n } from '@/lib/i18n/context';

export default function GamesEmptyState() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg text-slate-600">
            {t('common.noGames') || 'No hay juegos disponibles en este momento.'}
          </p>
        </div>
      </div>
    </section>
  );
}

