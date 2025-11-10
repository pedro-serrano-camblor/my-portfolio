import { PersonalInfo, Experience, Education, Skill } from '@/types';

/**
 * Información personal
 * Actualiza estos datos con tu información real
 */
export const personalInfo: PersonalInfo = {
  name: 'Tu Nombre',
  title: 'Full Stack Developer',
  bio: 'Desarrollador apasionado por crear soluciones web modernas y eficientes.',
  email: 'tu-email@ejemplo.com',
  location: 'Ciudad, País',
  socialLinks: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-usuario',
    twitter: 'https://twitter.com/tu-usuario',
  },
};

/**
 * Experiencia laboral
 * Añade tus experiencias laborales aquí
 */
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Desarrollador Full Stack',
    company: 'Nombre de la Empresa',
    location: {
      city: 'Ciudad',
      country: 'País',
      type: 'remote', // 'remote' | 'office' | 'hybrid'
    },
    dateRange: {
      start: '01/2020',
      end: 'present',
      format: 'month-year',
    },
    description: 'Descripción breve del puesto',
    bulletPoints: [
      {
        text: 'Responsabilidad principal o logro importante',
        subPoints: [
          'Sub-punto detallado 1',
          'Sub-punto detallado 2',
        ],
      },
      {
        text: 'Otra responsabilidad o logro',
      },
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
    companyUrl: 'https://empresa.com',
  },
];

/**
 * Educación
 */
export const education: Education[] = [
  {
    degree: 'Grado en Ingeniería Informática',
    institution: 'Nombre de la Universidad',
    period: '2015 - 2019',
    location: 'Ciudad, País',
    description: 'Especialización en desarrollo de software',
  },
];

/**
 * Habilidades técnicas
 */
export const skills: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    level: 'Avanzado',
  },
  {
    name: 'TypeScript',
    category: 'Lenguajes',
    level: 'Avanzado',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Intermedio',
  },
  {
    name: 'Next.js',
    category: 'Frameworks',
    level: 'Avanzado',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Avanzado',
  },
];

