'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

/**
 * Componente 404 - No encontrado
 */
export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          {t('common.notFound')}
        </h2>
        <p className="mt-4 text-slate-600">
          {t('common.notFoundMessage')}
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.backToHome')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

