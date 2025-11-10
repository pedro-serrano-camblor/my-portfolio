'use client';

import { motion } from 'framer-motion';

/**
 * Componente Hero para la página de contacto
 * Client component con animaciones
 */
export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </motion.p>
        </div>
      </div>
    </section>
  );
}

