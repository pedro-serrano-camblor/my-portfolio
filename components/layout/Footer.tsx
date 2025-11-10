import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { getPersonalInfo } from '@/lib/data-loader';

/**
 * Componente Footer
 * Muestra enlaces sociales y información de contacto
 */
export default async function Footer() {
  const personalInfo = await getPersonalInfo();

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
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ].filter(link => link.href); // Solo mostrar enlaces que existan

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
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Juegos
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Redes Sociales
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
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

