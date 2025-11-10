'use client';

import { motion } from 'framer-motion';
import { Education } from '@/types';

interface EducationSectionProps {
  education: Education[];
}

/**
 * Componente para mostrar educación
 * Client component con animaciones
 */
export default function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Educación
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {edu.degree}
              </h3>
              <p className="mt-1 text-lg text-slate-700">
                {edu.institution}
              </p>
              {edu.location && (
                <p className="mt-1 text-sm text-slate-600">
                  {edu.location}
                </p>
              )}
              <p className="mt-2 text-sm text-slate-500">
                {edu.period}
              </p>
              {edu.description && (
                <p className="mt-4 text-sm text-slate-600">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

