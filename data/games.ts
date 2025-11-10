import { Game } from '@/types';

/**
 * Juegos del portfolio
 * Incluye juegos personales y profesionales
 */
export const games: Game[] = [
  // Ejemplo de juego personal
  {
    id: 'game-1',
    title: 'Mi Juego Personal',
    slug: 'mi-juego-personal',
    description: 'Un juego desarrollado en mi tiempo libre usando Unity.',
    imageUrl: '/images/juego-personal.jpg',
    gameType: 'personal',
    featured: true,
    createdAt: '2024-01-01',
    tags: ['Unity', '2D', 'Platformer'],
    technologies: ['Unity', 'C#'],
    screenshots: [
      '/images/juego-personal-1.jpg',
      '/images/juego-personal-2.jpg',
    ],
    links: [
      {
        type: 'itch',
        label: 'Jugar en itch.io',
        url: 'https://usuario.itch.io/mi-juego',
      },
      {
        type: 'github',
        label: 'Ver código en GitHub',
        url: 'https://github.com/usuario/mi-juego',
      },
    ],
    personalNote: 'Este juego fue desarrollado como proyecto personal para aprender Unity.',
    instructions: 'Usa las flechas para moverte y la barra espaciadora para saltar.',
  },
  // Ejemplo de juego profesional
  {
    id: 'game-2',
    title: 'Juego Profesional',
    slug: 'juego-profesional',
    description: 'Juego desarrollado para una empresa cliente.',
    imageUrl: '/images/juego-profesional.jpg',
    gameType: 'professional',
    featured: true,
    createdAt: '2024-02-01',
    tags: ['Unity', '3D', 'Action'],
    technologies: ['Unity', 'C#'],
    company: 'Nombre de la Empresa',
    companyUrl: 'https://empresa.com',
    gameUrl: 'https://juego-empresa.com',
    role: 'Desarrollador Unity',
    releaseDate: '2024-03-01',
    showWebPreview: true,
    screenshots: [
      '/images/juego-profesional-1.jpg',
    ],
  },
];

/**
 * Obtener todos los juegos
 */
export function getAllGames(): Game[] {
  return games;
}

/**
 * Obtener juegos destacados
 */
export function getFeaturedGames(): Game[] {
  return games.filter(game => game.featured);
}

/**
 * Obtener juegos por tipo
 */
export function getGamesByType(type: 'personal' | 'professional'): Game[] {
  return games.filter(game => game.gameType === type);
}

/**
 * Obtener juego por slug
 */
export function getGameBySlug(slug: string): Game | undefined {
  return games.find(game => game.slug === slug);
}

