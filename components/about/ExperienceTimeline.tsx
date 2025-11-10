'use client';

import { Experience } from '@/types';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

/**
 * Componente Timeline para mostrar experiencia laboral
 * Incluye animaciones y formato de fechas flexible
 */
export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  /**
   * Formatea una fecha según su formato
   */
  const formatDate = (date: string, format?: 'full' | 'month-year' | 'year'): string => {
    if (date === 'present') return 'Presente';
    
    // Si tiene formato específico, usarlo
    if (format === 'year') {
      // Extraer año si es posible
      const yearMatch = date.match(/\d{4}/);
      return yearMatch ? yearMatch[0] : date;
    }
    
    if (format === 'month-year') {
      // Formato mm/yyyy o yyyy-mm
      const parts = date.split('/');
      if (parts.length === 2) {
        return `${parts[1]}/${parts[0]}`;
      }
      return date;
    }
    
    // Formato completo por defecto
    return date;
  };

  /**
   * Obtiene el texto del tipo de ubicación
   */
  const getLocationTypeText = (type: string): string => {
    switch (type) {
      case 'remote':
        return 'Remoto';
      case 'office':
        return 'Oficina';
      case 'hybrid':
        return 'Híbrido';
      default:
        return type;
    }
  };

  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-slate-200 md:left-1/2" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start"
          >
            {/* Punto en la línea */}
            <div className="absolute left-6 z-10 h-4 w-4 rounded-full border-4 border-white bg-slate-900 md:left-1/2 md:-translate-x-1/2" />

            {/* Contenido */}
            <div className={`ml-16 w-full md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {experience.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <h4 className="text-lg font-medium text-slate-700">
                        {experience.company}
                      </h4>
                      {experience.companyUrl && (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-700"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  {experience.companyLogo && (
                    <div className="ml-4 h-12 w-12 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={experience.companyLogo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Ubicación y fechas */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {experience.location.city}, {experience.location.country}
                    </span>
                    <span className="ml-1 text-slate-400">•</span>
                    <span className="ml-1">
                      {getLocationTypeText(experience.location.type)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {formatDate(experience.dateRange.start, experience.dateRange.format)} - {formatDate(experience.dateRange.end, experience.dateRange.format)}
                    </span>
                  </div>
                </div>

                {/* Descripción */}
                {experience.description && (
                  <p className="mt-4 text-sm text-slate-600">
                    {experience.description}
                  </p>
                )}

                {/* Bullet Points */}
                {experience.bulletPoints && experience.bulletPoints.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {experience.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        <div className="flex-1">
                          <p className="text-sm text-slate-700">{point.text}</p>
                          {/* Sub-puntos anidados */}
                          {point.subPoints && point.subPoints.length > 0 && (
                            <ul className="mt-2 ml-4 space-y-1">
                              {point.subPoints.map((subPoint, subIndex) => (
                                <li key={subIndex} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
                                  <span className="text-sm text-slate-600">
                                    {subPoint}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tecnologías */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

