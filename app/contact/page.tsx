import { getPersonalInfo } from '@/lib/data-loader';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Información de contacto y redes sociales',
};

/**
 * Página de contacto
 * Muestra información de contacto y enlaces sociales
 */
export default async function ContactPage() {
  const personalInfo = await getPersonalInfo();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <ContactHero />

      {/* Información de contacto */}
      <ContactInfo personalInfo={personalInfo} />
    </div>
  );
}

