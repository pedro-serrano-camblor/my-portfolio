'use client';

import { I18nProvider } from '@/lib/i18n/context';

interface I18nProviderWrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper del I18nProvider
 * Necesario porque el layout es Server Component y I18nProvider es Client Component
 */
export default function I18nProviderWrapper({ children }: I18nProviderWrapperProps) {
  return <I18nProvider defaultLocale="es">{children}</I18nProvider>;
}

