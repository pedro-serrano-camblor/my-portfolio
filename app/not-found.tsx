import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

/**
 * Página 404 - No encontrado
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-700">
          Página no encontrada
        </h2>
        <p className="mt-4 text-slate-600">
          Lo sentimos, la página que buscas no existe.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

