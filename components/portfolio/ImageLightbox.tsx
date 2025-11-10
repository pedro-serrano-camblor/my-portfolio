'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

interface ImageLightboxProps {
  images: string[];
  alt: string;
  initialIndex?: number;
}

/**
 * Componente Lightbox para galería de imágenes
 * Permite ver imágenes en pantalla completa con navegación
 */
export default function ImageLightbox({ images, alt, initialIndex = 0 }: ImageLightboxProps) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Manejar teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100 hover:opacity-90 transition-opacity"
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            onClick={closeLightbox}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label={t('common.close')}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Imagen */}
            <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative aspect-video w-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${alt} ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Navegación */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                    aria-label={t('common.previousImage')}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                    aria-label={t('common.nextImage')}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Indicador */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

