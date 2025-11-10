import { Project } from '@/types';

/**
 * Proyectos del portfolio
 * Proyectos de desarrollo web y aplicaciones
 */
export const projects: Project[] = [
  {
    id: 'battlecards',
    title: 'BattleCards',
    slug: 'battlecards',
    description: 'Full-stack web application that recreates the experience of collectible card games in a digital environment. Features JWT authentication, card collection system, deck building, and competitive ranking.',
    longDescription: 'BattleCards is a comprehensive full-stack web application that brings the experience of collectible card games to a digital platform. The application was developed as part of a team project with 4Geeks Academy España.\n\nKey Features:\n• Secure user authentication using JWT (JSON Web Tokens)\n• Card collection system with booster packs\n• In-game currency system with card recycling mechanics\n• Free credits system for new players\n• Deck building and management system\n• Strategic card selection for optimal deck performance\n• Deck score calculation based on card rarity and stats\n• Competitive ranking system with leaderboards\n• Card rarities: Common, Rare, and Legendary\n\nTechnical Implementation:\nThe frontend was built with React using functional components and Hooks for state management, styled with Bootstrap for responsive design and UI consistency. Vite was used as the build tool for fast development and optimized bundling.\n\nThe backend was built with Flask (Python) to create RESTful APIs, using SQLAlchemy as ORM for database modeling and queries. PostgreSQL was used as the relational database, and JWT tokens were implemented for secure authentication and user sessions.\n\nThe application was deployed on Render for backend and database hosting, with GitHub used for version control and team collaboration. Stripe integration was planned for simulating real-world transactions when buying packs.',
    imageUrl: '/images/battlecards.jpg',
    images: [],
    technologies: ['React', 'JavaScript', 'Bootstrap', 'Vite', 'Flask', 'Python', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'Render', 'Git', 'GitHub'],
    link: 'https://battlecards.onrender.com',
    githubUrl: 'https://github.com/pedro-serrano-camblor/battlecards',
    featured: true,
    category: 'Web Development',
    createdAt: '2025-07-01',
    updatedAt: '2025-08-30',
  },
  {
    id: 'jwt-authentication',
    title: 'JWT Authentication App',
    slug: 'jwt-authentication',
    description: 'A demonstration site showcasing the simplicity of building a secure JWT authentication system using React and Flask.',
    longDescription: 'A small demonstration site built to showcase the simplicity and effectiveness of implementing a secure JWT (JSON Web Token) authentication system. This project serves as a reference implementation for authentication in full-stack web applications.\n\nFeatures:\n• User registration and login\n• Secure JWT-based authentication\n• Protected routes and endpoints\n• Token-based session management\n• Clean and intuitive user interface\n\nTechnical Stack:\nThe frontend was built with React, utilizing modern React patterns and best practices. Custom Bootstrap elements were used for styling to create a clean and professional UI.\n\nThe backend was implemented using Flask (Python), providing a RESTful API for authentication endpoints. The application demonstrates proper JWT token generation, validation, and secure storage practices.\n\nThis project showcases my understanding of authentication systems and security best practices in web development.',
    imageUrl: '/images/jwt-auth.jpg',
    images: [],
    technologies: ['React', 'JavaScript', 'Flask', 'Python', 'Bootstrap', 'CSS3', 'HTML5', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/pedro-serrano-camblor/jwt-authentication',
    featured: false,
    category: 'Web Development',
    createdAt: '2025-09-01',
    updatedAt: '2025-09-30',
  },
  {
    id: 'portfolio-web',
    title: 'Portfolio Web',
    slug: 'portfolio-web',
    description: 'Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features internationalization, animations, and a responsive design.',
    longDescription: 'A comprehensive portfolio website showcasing my work as a Game Designer and Full Stack Developer. The site features:\n\n• Full internationalization support (Spanish/English) with language switcher\n• Modern animations and transitions using Framer Motion\n• Responsive design optimized for all devices\n• SEO optimization with metadata and sitemap\n• Project showcase with detailed views\n• Games section for both personal and professional projects\n• Contact information and social media integration\n• Built with Next.js 14 App Router for optimal performance\n• Type-safe with TypeScript\n• Styled with Tailwind CSS for a modern, professional look\n\nThe website serves as both a CV and portfolio, demonstrating my skills in web development while showcasing my game design experience.',
    imageUrl: '/images/portfolio-web.jpg',
    images: [],
    technologies: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui', 'Vercel', 'Git', 'GitHub'],
    link: 'https://pedroserranocamblor.vercel.app',
    githubUrl: 'https://github.com/pedro-serrano-camblor/portfolio',
    featured: true,
    category: 'Web Development',
    createdAt: '2024-12-01',
    updatedAt: '2025-01-15',
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

