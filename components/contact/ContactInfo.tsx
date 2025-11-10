'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { PersonalInfo } from '@/types';

interface ContactInfoProps {
  personalInfo: PersonalInfo;
}

/**
 * Componente de información de contacto
 * Client component con animaciones
 */
export default function ContactInfo({ personalInfo }: ContactInfoProps) {
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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-500">
                        {method.name}
                      </h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="mt-1 text-lg font-semibold text-slate-900 hover:text-slate-700"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold text-slate-900">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Redes Sociales */}
          {socialLinks.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Redes Sociales
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Icon className="h-5 w-5 text-slate-600" />
                      <span className="font-medium text-slate-900">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

