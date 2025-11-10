/**
 * Tipo de ubicación de trabajo
 */
export type WorkLocationType = 'remote' | 'hybrid' | 'onsite';

/**
 * Ubicación de trabajo
 */
export interface WorkLocation {
  /** Ciudad */
  city: string;
  /** País */
  country: string;
  /** Tipo de trabajo: remoto, presencial u híbrido */
  type: WorkLocationType;
}

/**
 * Rango de fechas con formato flexible
 */
export interface DateRange {
  /** Fecha de inicio (formato: "dd/mm/yyyy" o "mm/yyyy" o "yyyy") */
  start: string;
  /** Fecha de fin (formato: "dd/mm/yyyy" o "mm/yyyy" o "yyyy" o "present") */
  end: string | 'present';
  /** Formato de visualización (opcional) */
  format?: 'full' | 'month-year' | 'year';
}

/**
 * Bullet point con sub-puntos anidados
 */
export interface BulletPoint {
  /** Texto del bullet point */
  text: string;
  /** Sub-puntos anidados (opcional) */
  subPoints?: string[];
}

/**
 * Información personal
 */
export interface PersonalInfo {
  /** Nombre completo */
  name: string;
  /** Título profesional */
  title: string;
  /** Biografía/bio */
  bio: string;
  /** Email de contacto */
  email: string;
  /** Ubicación actual */
  location: string;
  /** Enlaces sociales */
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

/**
 * Experiencia laboral
 */
export interface Experience {
  /** ID único de la experiencia */
  id: string;
  /** Título del puesto */
  title: string;
  /** Nombre de la empresa */
  company: string;
  /** Ubicación de trabajo */
  location: WorkLocation;
  /** Rango de fechas */
  dateRange: DateRange;
  /** Descripción breve (opcional) */
  description?: string;
  /** Lista de logros/responsabilidades con bullet points */
  bulletPoints: BulletPoint[];
  /** Tecnologías usadas (opcional) */
  technologies?: string[];
  /** URL de la empresa (opcional) */
  companyUrl?: string;
  /** Logo de la empresa (opcional) */
  companyLogo?: string;
}

/**
 * Educación
 */
export interface Education {
  /** Título obtenido */
  degree: string;
  /** Institución */
  institution: string;
  /** Período de estudios */
  period: string;
  /** Descripción adicional (opcional) */
  description?: string;
  /** Ubicación (opcional) */
  location?: string;
}

/**
 * Habilidad técnica
 */
export interface Skill {
  /** Nombre de la habilidad */
  name: string;
  /** Categoría (opcional, ej: "Frontend", "Backend", "Tools") */
  category?: string;
  /** Nivel de experiencia (opcional, ej: "Avanzado", "Intermedio") */
  level?: string;
  /** Icono (opcional, puede ser nombre de icono o URL) */
  icon?: string;
}

