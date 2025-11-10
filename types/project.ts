/**
 * Tipo para proyectos del portfolio
 * Define la estructura de un proyecto que se muestra en el portfolio
 */
export interface Project {
  /** ID único del proyecto */
  id: string;
  /** Título del proyecto */
  title: string;
  /** Slug para la URL (ej: "mi-proyecto") */
  slug: string;
  /** Descripción corta del proyecto */
  description: string;
  /** Descripción larga/detallada (opcional) */
  longDescription?: string;
  /** URL de la imagen principal */
  imageUrl: string;
  /** Array de URLs de imágenes adicionales (opcional) */
  images?: string[];
  /** Array de tecnologías usadas */
  technologies: string[];
  /** URL del proyecto en vivo (opcional) */
  link?: string;
  /** URL del repositorio en GitHub (opcional) */
  githubUrl?: string;
  /** Si el proyecto es destacado */
  featured: boolean;
  /** Categoría del proyecto */
  category: string;
  /** Fecha de creación (formato ISO string) */
  createdAt: string;
  /** Fecha de última actualización (opcional) */
  updatedAt?: string;
  /** Vídeos relacionados (opcional) - URLs de YouTube, Vimeo, etc. */
  videos?: string[];
}

