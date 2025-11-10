import { getPersonalInfo } from '@/lib/data-loader';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
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

  const contactMethods = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: 'Ubicación',
      value: personalInfo.location,
      icon: MapPin,
    },
  ].filter(method => method.value);

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.socialLinks.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: personalInfo.socialLinks.twitter,
      icon: Twitter,
    },
  ].filter(link => link.href);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <ContactHero />

      {/* Información de contacto */}
      <ContactInfo personalInfo={personalInfo} />
    </div>
  );
}

