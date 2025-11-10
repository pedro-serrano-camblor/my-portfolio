'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { PersonalInfo } from '@/types';
import { useI18n } from '@/lib/i18n/context';

interface FooterClientProps {
  personalInfo: PersonalInfo;
}

/**
 * Componente Footer (Client Component)
 * Muestra enlaces sociales y información de contacto con traducciones
 */
export default function FooterClient({ personalInfo }: FooterClientProps) {
  const { t } = useI18n();

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
    {
      name: 'Portfolio',
      href: personalInfo.socialLinks.portfolio,
      icon: Globe,
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ].filter(link => link.href);

  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Información */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {personalInfo.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {personalInfo.title}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {personalInfo.location}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t('common.navigation')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {t('nav.games')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {t('contact.socialMedia')}
            </h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. {t('common.copyright') || 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}

