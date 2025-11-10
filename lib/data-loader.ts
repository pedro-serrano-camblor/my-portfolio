/**
 * Función abstracta para cargar datos
 * En la Fase 1: carga desde archivos TypeScript
 * En la Fase 2 (futuro): puede modificarse para cargar desde base de datos (Prisma)
 * 
 * Esta abstracción permite migrar fácilmente de archivos a BD sin cambiar
 * los componentes que usan estos datos.
 */

import { Project } from '@/types/project';
import { Game } from '@/types/game';
import { PersonalInfo, Experience, Education, Skill } from '@/types/personal';

import { 
  getAllProjects, 
  getFeaturedProjects, 
  getProjectBySlug 
} from '@/data/projects';

import { 
  getAllGames, 
  getFeaturedGames, 
  getGamesByType, 
  getGameBySlug 
} from '@/data/games';

import { 
  personalInfo, 
  experiences, 
  education, 
  skills 
} from '@/data/personal';

/**
 * Obtener todos los proyectos
 */
export async function getProjects(): Promise<Project[]> {
  return getAllProjects();
}

/**
 * Obtener proyectos destacados
 */
export async function getFeaturedProjectsData(): Promise<Project[]> {
  return getFeaturedProjects();
}

/**
 * Obtener proyecto por slug
 */
export async function getProjectBySlugData(slug: string): Promise<Project | null> {
  const project = getProjectBySlug(slug);
  return project || null;
}

/**
 * Obtener todos los juegos
 */
export async function getGames(): Promise<Game[]> {
  return getAllGames();
}

/**
 * Obtener juegos destacados
 */
export async function getFeaturedGamesData(): Promise<Game[]> {
  return getFeaturedGames();
}

/**
 * Obtener juegos por tipo
 */
export async function getGamesByTypeData(type: 'personal' | 'professional'): Promise<Game[]> {
  return getGamesByType(type);
}

/**
 * Obtener juego por slug
 */
export async function getGameBySlugData(slug: string): Promise<Game | null> {
  const game = getGameBySlug(slug);
  return game || null;
}

/**
 * Obtener información personal
 */
export async function getPersonalInfo(): Promise<PersonalInfo> {
  return personalInfo;
}

/**
 * Obtener experiencias laborales
 */
export async function getExperiences(): Promise<Experience[]> {
  return experiences;
}

/**
 * Obtener educación
 */
export async function getEducation(): Promise<Education[]> {
  return education;
}

/**
 * Obtener habilidades
 */
export async function getSkills(): Promise<Skill[]> {
  return skills;
}

