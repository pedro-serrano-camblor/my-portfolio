import { Game } from '@/types';

/**
 * Juegos del portfolio
 * Incluye juegos personales y profesionales
 */
export const games: Game[] = [
  // Juegos profesionales
  {
    id: 'islanders-new-shores',
    title: 'Islanders: New Shores',
    slug: 'islanders-new-shores',
    description: 'The sequel to the minimalist city-building game "Islanders". Building on the core mechanics of the original, the sequel introduced expanded progression systems, new mechanics, and fresh challenges, while maintaining the signature relaxing and strategic experience.',
    imageUrl: '/images/islanders-new-shores.jpg',
    gameType: 'professional',
    featured: true,
    createdAt: '2022-10-01',
    tags: ['City Building', 'Strategy', 'Minimalist', 'Indie'],
    technologies: ['Unity 3D', 'Game Design', 'Level Design', 'System Design'],
    company: 'Stage Clear Studios',
    companyUrl: 'https://stageclearstudios.com',
    gameUrl: 'https://store.steampowered.com/app/1743810/ISLANDERS_New_Shores',
    role: 'Lead Game Designer',
    releaseDate: '2024-05-01',
    showWebPreview: false,
    screenshots: [],
  },
  {
    id: 'islanders-enhanced',
    title: 'Islanders Enhanced Edition',
    slug: 'islanders-enhanced-edition',
    description: 'A series of patches for this popular and beloved indie gem. Implemented new systems to extend the game\'s lifespan, added Quality of Life improvements, seasonal content, and new features highly requested by the community.',
    imageUrl: '/images/islanders-enhanced.jpg',
    gameType: 'professional',
    featured: true,
    createdAt: '2022-09-01',
    tags: ['City Building', 'Strategy', 'Content Update', 'QoL'],
    technologies: ['Unity 3D', 'Game Design', 'Community Management'],
    company: 'Stage Clear Studios',
    companyUrl: 'https://stageclearstudios.com',
    gameUrl: 'https://store.steampowered.com/app/1046030/ISLANDERS',
    role: 'Lead Game Designer',
    releaseDate: '2023-05-01',
    showWebPreview: false,
    screenshots: [],
  },
  {
    id: 'islanders-vr',
    title: 'Islanders: VR Edition',
    slug: 'islanders-vr-edition',
    description: 'Designed the core features of the VR edition for Islanders, adapting the city-building mechanics for virtual reality platforms.',
    imageUrl: '/images/islanders-vr.jpg',
    gameType: 'professional',
    featured: false,
    createdAt: '2022-09-01',
    tags: ['VR', 'City Building', 'Meta Quest', 'Virtual Reality'],
    technologies: ['Unity 3D', 'VR Development', 'UX Design', 'Meta Quest'],
    company: 'Stage Clear Studios',
    companyUrl: 'https://stageclearstudios.com',
    gameUrl: 'https://store.steampowered.com/app/2532160/ISLANDERS_VR_Edition',
    role: 'Game Designer',
    releaseDate: '2023-05-01',
    showWebPreview: false,
    screenshots: [],
  },
  {
    id: 'my-original-stories',
    title: 'My Original Stories',
    slug: 'my-original-stories',
    description: 'A F2P interactive stories game where players experience engaging narratives through interactive storytelling. Worked on conception, pre-production, production, and analysis of story content.',
    imageUrl: '/images/my-original-stories.jpg',
    gameType: 'professional',
    featured: false,
    createdAt: '2018-10-01',
    tags: ['Interactive Fiction', 'Narrative', 'Mobile', 'F2P'],
    technologies: ['Narrative Design', 'Content Design', 'Mobile Games', 'Team Management'],
    company: 'Gamehouse',
    companyUrl: 'https://gamehouse.com',
    gameUrl: 'https://www.gamehouse.com/games/my-original-stories',
    role: 'Content, Narrative & Game Designer',
    releaseDate: '2019-11-01',
    showWebPreview: false,
    screenshots: [],
  },
  {
    id: 'sallys-salon',
    title: 'Sally\'s Salon: Kiss & Make-Up',
    slug: 'sallys-salon-kiss-make-up',
    description: 'A time-management casual game developed and released for Android, iOS and PC. The third installment of the "Sally\'s Salon" series. Worked as a Narrative Game Designer on script definition, pipeline creation, and implementation of cutscenes and dialogues.',
    imageUrl: '/images/sallys-salon.jpg',
    gameType: 'professional',
    featured: false,
    createdAt: '2017-05-01',
    tags: ['Time Management', 'Casual', 'Narrative', 'Mobile', 'PC'],
    technologies: ['Narrative Design', 'Game Design', 'Level Design', 'Unity 3D'],
    company: 'Gamehouse',
    companyUrl: 'https://gamehouse.com',
    gameUrl: 'https://www.gamehouse.com/games/sallys-salon-kiss-make-up',
    role: 'Narrative Game Designer',
    releaseDate: '2018-09-01',
    showWebPreview: false,
    screenshots: [],
  },
  {
    id: 'madden-2021',
    title: 'NFL Madden 2021',
    slug: 'nfl-madden-2021',
    description: 'Worked on certification and compliance testing for NFL Madden 2021, ensuring the game met all platform requirements and standards for PlayStation 4 and PlayStation 5.',
    imageUrl: '/images/madden-2021.jpg',
    gameType: 'professional',
    featured: false,
    createdAt: '2020-02-01',
    tags: ['Sports', 'Testing', 'Certification', 'PS4', 'PS5'],
    technologies: ['Testing', 'Certification', 'Quality Assurance', 'PlayStation'],
    company: 'Electronic Arts',
    companyUrl: 'https://www.ea.com',
    gameUrl: 'https://www.ea.com/games/madden-nfl/madden-nfl-21',
    role: 'Certification and Compliance Tester',
    releaseDate: '2021-01-01',
    showWebPreview: false,
    screenshots: [],
  },
  // Juegos personales - Añadir aquí cuando tengas proyectos personales
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

