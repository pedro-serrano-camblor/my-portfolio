/**
 * Tipo de juego: profesional (de empresa) o personal (tiempo libre)
 */
export type GameType = 'professional' | 'personal';

/**
 * Tipo de enlace para juegos
 */
export type LinkType = 'build' | 'github' | 'web' | 'documentation' | 'itch' | 'gamejolt' | 'steam' | 'other';

/**
 * Enlace para un juego
 */
export interface GameLink {
  /** Tipo de enlace */
  type: LinkType;
  /** Texto del enlace */
  label: string;
  /** URL del enlace */
  url: string;
  /** Icono personalizado (opcional) */
  icon?: string;
}

/**
 * Tipo para juegos del portfolio
 * Soporta juegos personales (con enlaces a builds) y profesionales (con preview de webs)
 */
export interface Game {
  /** ID único del juego */
  id: string;
  /** Título del juego */
  title: string;
  /** Slug para la URL (ej: "mi-juego") */
  slug: string;
  /** Descripción del juego */
  description: string;
  /** URL de la imagen principal */
  imageUrl: string;
  /** Tipo de juego: profesional o personal */
  gameType: GameType;
  /** Si el juego es destacado */
  featured: boolean;
  /** Fecha de creación (formato ISO string) */
  createdAt: string;
  /** Tags del juego (opcional) */
  tags?: string[];
  /** Tecnologías usadas (opcional) */
  technologies?: string[];
  /** Screenshots del juego (opcional) */
  screenshots?: string[];
  /** Vídeos del juego (opcional) - URLs de YouTube, Vimeo, etc. */
  videos?: string[];
  
  // Campos específicos para juegos personales
  /** Enlaces a builds externos, GitHub, etc. (para juegos personales) */
  links?: GameLink[];
  /** Ruta al build Unity WebGL (futuro, opcional) */
  unityBuildPath?: string;
  /** Nota personal sobre el proyecto (opcional) */
  personalNote?: string;
  /** Instrucciones de juego (opcional) */
  instructions?: string;
  
  // Campos específicos para juegos profesionales
  /** Nombre de la empresa (para juegos profesionales) */
  company?: string;
  /** URL de la empresa (opcional) */
  companyUrl?: string;
  /** URL principal del juego/web (para juegos profesionales) */
  gameUrl?: string;
  /** Tu rol en el proyecto (opcional) */
  role?: string;
  /** Fecha de lanzamiento (opcional) */
  releaseDate?: string;
  /** Si mostrar preview de la web (para juegos profesionales) */
  showWebPreview?: boolean;
}

