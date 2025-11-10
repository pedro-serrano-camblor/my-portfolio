import { PersonalInfo, Experience, Education, Skill } from '@/types';

/**
 * Información personal
 * Actualiza estos datos con tu información real
 */
export const personalInfo: PersonalInfo = {
  name: 'Pedro Serrano Camblor',
  title: 'Game Designer & Full Stack Developer', 
  bio: 'Game Designer with 7+ years of professional experience, having contributed to 7 commercialized video games and a VR therapy project. Currently working as Game Design Consultant for Sindria World on the horror game "The Vineyard Massacre". Recently, I\'ve expanded my skill set to include Full Stack Development, building web applications with Next.js, TypeScript, and modern frameworks. I\'m actively seeking opportunities to combine my game design expertise with my programming skills, whether as a Game Designer, Full Stack Developer, or in roles that leverage both disciplines.',
  email: 'p.serranocamblor@gmail.com',
  location: 'Oviedo, Spain',
  socialLinks: {
    github: 'https://github.com/pedro-serrano-camblor',
    linkedin: 'https://www.linkedin.com/in/pedroserranoc',
    portfolio: 'https://pserrano.itch.io',
  },
};

/**
 * Experiencia laboral
 */
export const experiences: Experience[] = [
  {
    id: 'exp-sindria',
    title: 'Game Design Consultant',
    company: 'Sindria World',
    location: {
      city: 'Remote',
      country: 'International',
      type: 'remote',
    },
    dateRange: {
      start: '2025',
      end: 'present',
      format: 'year',
    },
    description: 'Game Design Consultant for the upcoming horror game "The Vineyard Massacre"',
    bulletPoints: [
      {
        text: 'Leading game design consultation for horror game development',
        subPoints: [
          'Designing core gameplay mechanics and systems',
          'Collaborating with development team on game design decisions',
          'Contributing to the creative vision of "The Vineyard Massacre"',
        ],
      },
    ],
    technologies: ['Game Design', 'Level Design', 'Game Mechanics', 'Unity 3D'],
    companyUrl: 'https://sindriaworld.com',
  },
  {
    id: 'exp-stage-clear',
    title: 'Lead Game Designer',
    company: 'Stage Clear Studios (Thunderful group)',
    location: {
      city: 'Madrid',
      country: 'Spain',
      type: 'remote',
    },
    dateRange: {
      start: '06/2021',
      end: '05/2024',
      format: 'month-year',
    },
    description: 'Led the design team on the enhanced edition of "Islanders", and its sequel "Islanders: New Shores"',
    bulletPoints: [
      {
        text: 'Defined and maintained the creative vision for all aspects of game design',
      },
      {
        text: 'Managed the Game Design team, fostering innovation and collaboration',
      },
      {
        text: 'Created and maintained Game Design Documents (GDD), outlining mechanics, systems, and storytelling elements',
      },
      {
        text: 'Planned milestones alongside leads and game directors, ensuring deadlines and quality benchmarks were met',
      },
      {
        text: 'Designed and implemented core game mechanics and interactive experiences',
      },
    ],
    technologies: ['Game Design', 'Team Management', 'Project Management', 'Unity 3D', 'Level Design', 'Narrative Design', 'Jira', 'Github', 'Confluence', 'Figma'],
  },
  {
    id: 'exp-scopely',
    title: 'Narrative Designer',
    company: 'Scopely',
    location: {
      city: 'Seville',
      country: 'Spain',
      type: 'remote',
    },
    dateRange: {
      start: '02/2021',
      end: '06/2021',
      format: 'month-year',
    },
    description: 'Developed and implemented interactive narrative content for "Tuscany Villa" (iOS & Android)',
    bulletPoints: [
      {
        text: 'Designed episodic content, writing compelling storylines and character dialogues',
      },
      {
        text: 'Implemented branching narrative structures and cutscenes in the game editor',
      },
      {
        text: 'Collaborated with design and art teams to ensure seamless integration of story and gameplay',
      },
    ],
    technologies: ['Narrative Design', 'Interactive Storytelling', 'Game Design', 'Mobile Games', 'Unity 3D', 'Jira', 'Github'],
  },
  {
    id: 'exp-ea',
    title: 'Certification and Compliance Tester',
    company: 'Electronic Arts',
    location: {
      city: 'Madrid',
      country: 'Spain',
      type: 'hybrid',
    },
    dateRange: {
      start: '03/2020',
      end: '02/2021',
      format: 'month-year',
    },
    description: 'Ensured that "Madden NFL 21" met compliance standards for Sony platforms (PS4 and PS5)',
    bulletPoints: [
      {
        text: 'Analyzed game builds to detect compliance issues based on platform-specific requirements',
      },
      {
        text: 'Provided structured reports with clear, actionable feedback to development teams',
      },
      {
        text: 'Worked closely with QA and production teams to ensure timely resolution of detected issues',
      },
    ],
    technologies: ['QA Testing', 'Compliance Testing', 'TRC Guidelines', 'PlayStation', 'PS4', 'PS5'],
  },
  {
    id: 'exp-gamehouse-madrid',
    title: 'Content, Narrative & Game Designer',
    company: 'Gamehouse',
    location: {
      city: 'Madrid',
      country: 'Spain',
      type: 'onsite',
    },
    dateRange: {
      start: '10/2018',
      end: '10/2019',
      format: 'month-year',
    },
    description: 'Developed interactive stories and gameplay elements for "My Original Stories" (Android & iOS)',
    bulletPoints: [
      {
        text: 'Conceptualized and developed engaging story arcs and character progression',
      },
      {
        text: 'Managed a team of external writers, ensuring alignment with the game\'s creative vision',
      },
      {
        text: 'Implemented content in proprietary engines and refined user interactions',
      },
    ],
    technologies: ['Narrative Design', 'Game Design', 'Content Design', 'Mobile Games', 'Team Management', 'Jira', 'Github', 'Yarn Spinner', 'Unity 3D'],
  },
  {
    id: 'exp-gamehouse-alicante',
    title: 'Narrative & Game Designer',
    company: 'Gamehouse',
    location: {
      city: 'Alicante',
      country: 'Spain',
      type: 'onsite',
    },
    dateRange: {
      start: '05/2017',
      end: '09/2018',
      format: 'month-year',
    },
    description: 'Worked on narrative and game design for "Sally\'s Salon: Kiss & Make-Up" (Android, iOS & PC)',
    bulletPoints: [
      {
        text: 'Developed narrative structures, integrating compelling storytelling with gameplay mechanics',
      },
      {
        text: 'Collaborated with art and animation teams to create engaging cutscenes',
      },
      {
        text: 'Designed level pacing and player interactions to enhance immersion',
      },
    ],
    technologies: ['Narrative Design', 'Game Design', 'Level Design', 'Mobile Games', 'PC Games', 'Unity 3D', 'Perforce'],
  },
  {
    id: 'exp-gamehouse-barcelona',
    title: 'Junior Narrative Designer',
    company: 'Gamehouse',
    location: {
      city: 'Barcelona',
      country: 'Spain',
      type: 'onsite',
    },
    dateRange: {
      start: '01/2017',
      end: '04/2017',
      format: 'month-year',
    },
    description: 'Collaborated with the Barcelona Studio in the creation of cutscenes for "Delicious Emily\'s Miracle of Life" (Android and iOS)',
    bulletPoints: [
      {
        text: 'Worked closely with design and animation teams to develop cutscenes',
      },
      {
        text: 'Assisted in the integration of animations into the game engine',
      },
      {
        text: 'Ensured cutscenes were aligned with the overall art direction of the game',
      },
    ],
    technologies: ['Narrative Design', 'Cutscenes', 'Animation Integration', 'Mobile Games'],
  },
  {
    id: 'exp-psious',
    title: 'Junior 3D Animator',
    company: 'Psious',
    location: {
      city: 'Barcelona',
      country: 'Spain',
      type: 'onsite',
    },
    dateRange: {
      start: '02/2016',
      end: '01/2017',
      format: 'month-year',
    },
    description: 'Performed motion capture sessions and created animations for VR therapy projects',
    bulletPoints: [
      {
        text: 'Conducted motion capture sessions for character and object animations',
      },
      {
        text: 'Cleaned and processed raw data to ensure high-quality output',
      },
      {
        text: 'Created traditional keyframe animations when required, ensuring smooth and expressive movements',
      },
    ],
    technologies: ['3D Animation', 'Motion Capture', 'Keyframe Animation', 'VR', 'Autodesk Maya', 'Blender 3D', 'Unity 3D'],
  },
];

/**
 * Educación
 */
export const education: Education[] = [
  {
    degree: 'Payroll Management and Administration',
    institution: 'Fundación Impulsarse & SEPE',
    period: '2025 - 2025',
    location: 'Oviedo, Spain',
    description: 'Essential knowledge in creating employment contracts and processing payroll for employees. Covers salary calculations, deductions, benefits management, and legal compliance.',
  },
  {
    degree: 'FP de Grado Superior en Animación 3D, Juegos y entornos interactivos + HND in Creative Media (Video Games Development and 3D Animation)',
    institution: 'CEV Barcelona',
    period: '2014 - 2016',
    location: 'Barcelona, Spain',
    description: 'Técnico Superior/Vocational Qualification Level 2 studies focused on video game development, culminating in an award-winning project at Barcelona Games World 2015.',
  },
  {
    degree: 'RTVE Courses',
    institution: 'Haz Instituto RTVE',
    period: '2024 - 2024',
    location: 'Online',
    description: 'Screenwriting for Film, The Role of Showrunner in TV Series Production, Artificial Intelligence in Media.',
  },
  {
    degree: 'IELTS Language Certificate',
    institution: 'Harrogate Language Academy',
    period: '2014',
    location: 'Leeds, UK',
    description: 'Score of 7 out of 9 (CEFR C1 Advanced proficiency level). Operational command of the language with ability to handle complex language and understand detailed reasoning.',
  },
];

/**
 * Habilidades técnicas
 */
export const skills: Skill[] = [
  // Game Design
  {
    name: 'Game Design',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Level Design',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Game Mechanics',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Narrative Design',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Interactive Storytelling',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Unity 3D',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'Unreal Engine',
    category: 'Game Development',
    level: 'Intermedio',
  },
  {
    name: 'C#',
    category: 'Game Development',
    level: 'Avanzado',
  },
  {
    name: 'VR Development',
    category: 'Game Development',
    level: 'Intermedio',
  },
  {
    name: '3D Animation',
    category: 'Game Development',
    level: 'Intermedio',
  },
  {
    name: 'Motion Capture',
    category: 'Game Development',
    level: 'Intermedio',
  },
  // Project Management
  {
    name: 'Project Management',
    category: 'Management',
    level: 'Avanzado',
  },
  {
    name: 'Team Management',
    category: 'Management',
    level: 'Avanzado',
  },
  {
    name: 'Agile Methodologies',
    category: 'Management',
    level: 'Avanzado',
  },
  {
    name: 'SCRUM',
    category: 'Management',
    level: 'Avanzado',
  },
  // QA & Testing
  {
    name: 'QA Testing',
    category: 'Testing',
    level: 'Intermedio',
  },
  {
    name: 'Compliance Testing',
    category: 'Testing',
    level: 'Intermedio',
  },
  {
    name: 'Certification Testing',
    category: 'Testing',
    level: 'Intermedio',
  },
  // Tools
  {
    name: 'Adobe Suite',
    category: 'Tools',
    level: 'Intermedio',
  },
  {
    name: 'Autodesk Suite',
    category: 'Tools',
    level: 'Intermedio',
  },
  // Web Development
  {
    name: 'Next.js',
    category: 'Web Development',
    level: 'Intermedio',
  },
  {
    name: 'React',
    category: 'Web Development',
    level: 'Intermedio',
  },
  {
    name: 'TypeScript',
    category: 'Web Development',
    level: 'Intermedio',
  },
  {
    name: 'Tailwind CSS',
    category: 'Web Development',
    level: 'Intermedio',
  },
  {
    name: 'Node.js',
    category: 'Web Development',
    level: 'Básico',
  },
];

