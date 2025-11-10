import { Project } from '@/types';

/**
 * Proyectos del portfolio
 * Añade tus proyectos aquí
 */
export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Proyecto Ejemplo',
    slug: 'proyecto-ejemplo',
    description: 'Descripción corta del proyecto',
    longDescription: 'Descripción detallada del proyecto. Puede incluir múltiples párrafos y explicar en profundidad qué hace el proyecto, qué tecnologías usa, y qué problemas resuelve.',
    imageUrl: '/images/proyecto-ejemplo.jpg',
    images: [
      '/images/proyecto-ejemplo-1.jpg',
      '/images/proyecto-ejemplo-2.jpg',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://proyecto-ejemplo.com',
    githubUrl: 'https://github.com/usuario/proyecto-ejemplo',
    featured: true,
    category: 'Web Development',
    createdAt: '2024-01-01',
    videos: ['https://www.youtube.com/watch?v=ejemplo'],
  },
];

/**
 * Obtener todos los proyectos
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Obtener proyectos destacados
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

/**
 * Obtener proyecto por slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

