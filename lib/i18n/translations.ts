/**
 * Traducciones del sitio
 */

export type Locale = 'es' | 'en';

export const translations = {
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      portfolio: 'Dev Portfolio',
      games: 'Games Portfolio',
      contact: 'Contacto',
    },
    // Homepage
    home: {
      hero: {
        title: 'Hola, soy',
        subtitle: 'Desarrollador Full Stack & Game Designer',
        description: 'Creando experiencias digitales y videojuegos',
        cta: 'Ver mi trabajo',
        bio: 'Game Designer con más de 7 años de experiencia profesional, habiendo contribuido a 7 videojuegos comercializados y un proyecto de terapias mediante realidad virtual. Actualmente trabajo como Consultor de Game Design para Sindria World en el juego de terror "The Vineyard Massacre". Recientemente, he ampliado mi conjunto de habilidades para incluir Desarrollo Full Stack, construyendo aplicaciones web con Next.js, TypeScript y frameworks modernos. Estoy buscando activamente oportunidades para combinar mi experiencia en game design con mis habilidades de programación, ya sea como Game Designer, Desarrollador Full Stack, o en roles que aprovechen ambas disciplinas.',
      },
      featuredProjects: {
        title: 'Proyectos Destacados',
        description: 'Una selección de mis mejores trabajos.',
        viewAll: 'Ver todos los proyectos',
      },
      featuredGames: {
        title: 'Juegos Destacados',
        description: 'Mis proyectos de videojuegos, tanto personales como profesionales.',
        viewAll: 'Ver todos los juegos',
      },
    },
    // About
    about: {
      hero: {
        title: 'Sobre mí',
        description: 'Conoce más sobre mi experiencia y habilidades',
        bio: 'Game Designer con más de 7 años de experiencia profesional, habiendo contribuido a 7 videojuegos comercializados y un proyecto de terapias mediante realidad virtual. Actualmente trabajo como Consultor de Game Design para Sindria World en el juego de terror "The Vineyard Massacre". Recientemente, he ampliado mi conjunto de habilidades para incluir Desarrollo Full Stack, construyendo aplicaciones web con Next.js, TypeScript y frameworks modernos. Estoy buscando activamente oportunidades para combinar mi experiencia en game design con mis habilidades de programación, ya sea como Game Designer, Desarrollador Full Stack, o en roles que aprovechen ambas disciplinas.',
      },
      skills: {
        title: 'Habilidades Técnicas',
        description: 'Tecnologías y herramientas con las que trabajo',
        categories: {
          'Game Development': 'Desarrollo de Videojuegos',
          'Management': 'Gestión',
          'Testing': 'Testing',
          'Tools': 'Herramientas',
          'Web Development': 'Desarrollo Web',
          'Otros': 'Otros',
        },
        levels: {
          'Avanzado': 'Avanzado',
          'Intermedio': 'Intermedio',
          'Básico': 'Básico',
        },
      },
      experience: {
        title: 'Experiencia Laboral',
        description: 'Mi trayectoria profesional',
        present: 'Presente',
        remote: 'Remoto',
        onsite: 'Presencial',
        hybrid: 'Híbrido',
        experiences: {
          'exp-sindria': {
            title: 'Consultor de Game Design',
            description: 'Consultor de Game Design para el próximo juego de terror "The Vineyard Massacre"',
          },
          'exp-stage-clear': {
            title: 'Diseñador Jefe de Videojuegos',
            description: 'Lideré el equipo de diseño en la edición mejorada de "Islanders" y su secuela "Islanders: New Shores"',
          },
          'exp-scopely': {
            title: 'Diseñador Narrativo',
            description: 'Desarrollé e implementé contenido narrativo interactivo para "Tuscany Villa" (iOS & Android)',
          },
          'exp-ea': {
            title: 'Tester de Certificación y Cumplimiento',
            description: 'Aseguré que "Madden NFL 21" cumpliera con los estándares de cumplimiento para plataformas de Sony (PS4 y PS5)',
          },
          'exp-gamehouse-madrid': {
            title: 'Diseñador de Contenido, Narrativa y Videojuegos',
            description: 'Desarrollé historias interactivas y elementos de gameplay para "My Original Stories" (Android & iOS)',
          },
          'exp-gamehouse-alicante': {
            title: 'Diseñador Narrativo y de Videojuegos',
            description: 'Trabajé en diseño narrativo y de videojuegos para "Sally\'s Salon: Kiss & Make-Up" (Android, iOS & PC)',
          },
          'exp-gamehouse-barcelona': {
            title: 'Diseñador Narrativo Junior',
            description: 'Colaboré con el Studio de Barcelona en la creación de cutscenes para "Delicious Emily\'s Miracle of Life" (Android e iOS)',
          },
          'exp-psious': {
            title: 'Animador 3D Junior',
            description: 'Realicé sesiones de captura de movimiento y creé animaciones para proyectos de terapias VR',
          },
        },
      },
      education: {
        title: 'Educación',
      },
    },
    // Portfolio
    portfolio: {
      title: 'Dev Portfolio',
      description: 'Mis proyectos de desarrollo web',
      viewProject: 'Ver proyecto',
      demo: 'Demo',
      github: 'GitHub',
      viewMore: 'Ver más',
      viewCode: 'Ver código',
      technologies: 'Tecnologías',
      backToPortfolio: 'Volver al Dev Portfolio',
      gallery: 'Galería',
      videos: 'Vídeos',
      viewVideo: 'Ver video',
      projects: {
        battlecards: {
          description: 'Aplicación web full-stack que recrea la experiencia de juegos de cartas coleccionables en un entorno digital. Incluye autenticación JWT, sistema de colección de cartas, construcción de mazos y ranking competitivo.',
          longDescription: 'BattleCards es una aplicación web full-stack que lleva la experiencia de los juegos de cartas coleccionables a una plataforma digital. La aplicación fue desarrollada como parte de un proyecto de equipo con 4Geeks Academy España.\n\nCaracterísticas principales:\n• Autenticación segura de usuarios usando JWT (JSON Web Tokens)\n• Sistema de colección de cartas con sobres booster\n• Sistema de moneda del juego con mecánicas de reciclaje de cartas\n• Sistema de créditos gratuitos para nuevos jugadores\n• Sistema de construcción y gestión de mazos\n• Selección estratégica de cartas para optimizar el rendimiento del mazo\n• Cálculo de puntuación del mazo basado en la rareza y estadísticas de las cartas\n• Sistema de ranking competitivo con tablas de clasificación\n• Rarezas de cartas: Común, Rara y Legendaria\n\nImplementación técnica:\nEl frontend fue construido con React usando componentes funcionales y Hooks para la gestión de estado, estilizado con Bootstrap para diseño responsive y consistencia de UI. Vite fue usado como herramienta de construcción para desarrollo rápido y bundling optimizado.\n\nEl backend fue construido con Flask (Python) para crear APIs RESTful, usando SQLAlchemy como ORM para modelado de base de datos y consultas. PostgreSQL fue usado como base de datos relacional, y los tokens JWT fueron implementados para autenticación segura y sesiones de usuario.\n\nLa aplicación fue desplegada en Render para hosting del backend y base de datos, con GitHub usado para control de versiones y colaboración en equipo. La integración de Stripe fue planeada para simular transacciones del mundo real al comprar sobres.',
        },
        'jwt-authentication': {
          description: 'Un sitio de demostración que muestra la simplicidad de construir un sistema de autenticación JWT seguro usando React y Flask.',
          longDescription: 'Un pequeño sitio de demostración construido para mostrar la simplicidad y efectividad de implementar un sistema de autenticación JWT (JSON Web Token) seguro. Este proyecto sirve como una implementación de referencia para autenticación en aplicaciones web full-stack.\n\nCaracterísticas:\n• Registro e inicio de sesión de usuarios\n• Autenticación segura basada en JWT\n• Rutas y endpoints protegidos\n• Gestión de sesiones basada en tokens\n• Interfaz de usuario limpia e intuitiva\n\nStack técnico:\nEl frontend fue construido con React, utilizando patrones modernos de React y mejores prácticas. Elementos personalizados de Bootstrap fueron usados para el estilo para crear una UI limpia y profesional.\n\nEl backend fue implementado usando Flask (Python), proporcionando una API RESTful para endpoints de autenticación. La aplicación demuestra prácticas adecuadas de generación, validación y almacenamiento seguro de tokens JWT.\n\nEste proyecto muestra mi comprensión de los sistemas de autenticación y mejores prácticas de seguridad en desarrollo web.',
        },
        'portfolio-web': {
          description: 'Sitio web de portfolio moderno construido con Next.js 14, TypeScript y Tailwind CSS. Incluye internacionalización, animaciones y diseño responsive.',
          longDescription: 'Un sitio web de portfolio completo que muestra mi trabajo como Game Designer y Desarrollador Full Stack. El sitio incluye:\n\n• Soporte completo de internacionalización (Español/Inglés) con selector de idioma\n• Animaciones y transiciones modernas usando Framer Motion\n• Diseño responsive optimizado para todos los dispositivos\n• Optimización SEO con metadata y sitemap\n• Exhibición de proyectos con vistas detalladas\n• Sección de juegos para proyectos personales y profesionales\n• Información de contacto e integración de redes sociales\n• Construido con Next.js 14 App Router para rendimiento óptimo\n• Type-safe con TypeScript\n• Estilizado con Tailwind CSS para un look moderno y profesional\n\nEl sitio web sirve tanto como CV como portfolio, demostrando mis habilidades en desarrollo web mientras muestra mi experiencia en diseño de videojuegos.',
        },
      },
    },
    // Games
    games: {
      title: 'Games Portfolio',
      description: 'Mis proyectos de videojuegos',
      personal: {
        title: 'Juegos Personales',
        description: 'Juegos desarrollados en mi tiempo libre',
      },
      professional: {
        title: 'Juegos Profesionales',
        description: 'Juegos desarrollados para empresas',
      },
      personalGame: 'Personal',
      professionalGame: 'Profesional',
      personalGameLabel: 'Juego Personal',
      professionalGameLabel: 'Juego Profesional',
      playGame: 'Jugar',
      viewGame: 'Ver juego',
      viewWebsite: 'Ver web del juego',
      company: 'Empresa',
      role: 'Rol',
      releaseDate: 'Fecha de lanzamiento',
      instructions: 'Instrucciones',
      backToGames: 'Volver a Games Portfolio',
      technologies: 'Tecnologías',
      tags: 'Tags',
      screenshots: 'Screenshots',
      videos: 'Vídeos',
      viewVideo: 'Ver video',
      personalNote: 'Sobre este proyecto',
      links: 'Enlaces',
      visitCompany: 'Visitar empresa',
      preview: 'Preview',
      showPreview: 'Mostrar preview',
      hidePreview: 'Ocultar preview',
      games: {
        'islanders-new-shores': {
          description: 'La secuela del juego minimalista de construcción de ciudades "Islanders". Construyendo sobre las mecánicas principales del original, la secuela introdujo sistemas de progresión expandidos, nuevas mecánicas y desafíos frescos, manteniendo la experiencia relajante y estratégica característica.',
          role: 'Diseñador Jefe de Videojuegos',
        },
        'islanders-enhanced-edition': {
          description: 'Una serie de parches para esta joya indie popular y querida. Implementé nuevos sistemas para extender la vida útil del juego, agregué mejoras de calidad de vida, contenido estacional y nuevas características muy solicitadas por la comunidad.',
          role: 'Diseñador Jefe de Videojuegos',
        },
        'islanders-vr-edition': {
          description: 'Diseñé las características principales de la edición VR para Islanders, adaptando las mecánicas de construcción de ciudades para plataformas de realidad virtual.',
          role: 'Diseñador de Videojuegos',
        },
        'my-original-stories': {
          description: 'Un juego F2P de historias interactivas donde los jugadores experimentan narrativas atractivas a través de narración interactiva. Trabajé en la concepción, preproducción, producción y análisis del contenido de las historias.',
          role: 'Diseñador de Contenido, Narrativa y Videojuegos',
        },
        'sallys-salon-kiss-make-up': {
          description: 'Un juego casual de gestión del tiempo desarrollado y lanzado para Android, iOS y PC. La tercera entrega de la serie "Sally\'s Salon". Trabajé como Narrative Game Designer en la definición del guión, creación de pipeline e implementación de cutscenes y diálogos.',
          role: 'Diseñador Narrativo de Videojuegos',
        },
        'madden-2021': {
          description: 'Trabajé en pruebas de certificación y cumplimiento para NFL Madden 2021, asegurando que el juego cumpliera con todos los requisitos y estándares de la plataforma para PlayStation 4 y PlayStation 5.',
          role: 'Tester de Certificación y Cumplimiento',
        },
      },
    },
    // Contact
    contact: {
      hero: {
        title: 'Contacto',
        description: '¿Tienes un proyecto en mente? ¡Hablemos!',
      },
      title: 'Contáctame',
      description: 'Estoy disponible para nuevas oportunidades y proyectos.',
      socialMedia: 'Redes Sociales',
      location: 'Ubicación',
      email: 'Email',
    },
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      notFound: 'Página no encontrada',
      notFoundMessage: 'Lo sentimos, la página que buscas no existe.',
      backToHome: 'Volver al inicio',
      readMore: 'Leer más',
      copyright: 'Todos los derechos reservados.',
      navigation: 'Navegación',
      noProjects: 'No hay proyectos disponibles en este momento.',
      noGames: 'No hay juegos disponibles en este momento.',
      siteName: 'Portfolio',
      unityWebGLComingSoon: 'El reproductor Unity WebGL estará disponible próximamente.',
      close: 'Cerrar',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      toggleMenu: 'Abrir/cerrar menú',
      videoNumber: 'Video',
      screenshotNumber: 'captura de pantalla',
    },
    // Personal
    personal: {
      title: 'Diseñador de Videojuegos & Desarrollador Full Stack',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Dev Portfolio',
      games: 'Games Portfolio',
      contact: 'Contact',
    },
    // Homepage
    home: {
      hero: {
        title: 'Hi, I\'m',
        subtitle: 'Full Stack Developer & Game Designer',
        description: 'Creating digital experiences and video games',
        cta: 'View my work',
        bio: 'Game Designer with 7+ years of professional experience, having contributed to 7 commercialized video games and a VR therapy project. Currently working as Game Design Consultant for Sindria World on the horror game "The Vineyard Massacre". Recently, I\'ve expanded my skill set to include Full Stack Development, building web applications with Next.js, TypeScript, and modern frameworks. I\'m actively seeking opportunities to combine my game design expertise with my programming skills, whether as a Game Designer, Full Stack Developer, or in roles that leverage both disciplines.',
      },
      featuredProjects: {
        title: 'Featured Projects',
        description: 'A selection of my best web development projects.',
        viewAll: 'View all projects',
      },
      featuredGames: {
        title: 'Featured Games',
        description: 'My video game projects, both personal and professional.',
        viewAll: 'View all games',
      },
    },
    // About
    about: {
      hero: {
        title: 'About Me',
        description: 'Learn more about my experience and skills',
        bio: 'Game Designer with 7+ years of professional experience, having contributed to 7 commercialized video games and a VR therapy project. Currently working as Game Design Consultant for Sindria World on the horror game "The Vineyard Massacre". Recently, I\'ve expanded my skill set to include Full Stack Development, building web applications with Next.js, TypeScript, and modern frameworks. I\'m actively seeking opportunities to combine my game design expertise with my programming skills, whether as a Game Designer, Full Stack Developer, or in roles that leverage both disciplines.',
      },
      skills: {
        title: 'Technical Skills',
        description: 'Technologies and tools I work with',
        categories: {
          'Game Development': 'Game Development',
          'Management': 'Management',
          'Testing': 'Testing',
          'Tools': 'Tools',
          'Web Development': 'Web Development',
          'Otros': 'Other',
        },
        levels: {
          'Avanzado': 'Advanced',
          'Intermedio': 'Intermediate',
          'Básico': 'Basic',
        },
      },
      experience: {
        title: 'Work Experience',
        description: 'My professional journey',
        present: 'Present',
        remote: 'Remote',
        onsite: 'On-site',
        hybrid: 'Hybrid',
        experiences: {
          'exp-sindria': {
            title: 'Game Design Consultant',
            description: 'Game Design Consultant for the upcoming horror game "The Vineyard Massacre"',
          },
          'exp-stage-clear': {
            title: 'Lead Game Designer',
            description: 'Led the design team on the enhanced edition of "Islanders", and its sequel "Islanders: New Shores"',
          },
          'exp-scopely': {
            title: 'Narrative Designer',
            description: 'Developed and implemented interactive narrative content for "Tuscany Villa" (iOS & Android)',
          },
          'exp-ea': {
            title: 'Certification and Compliance Tester',
            description: 'Ensured that "Madden NFL 21" met compliance standards for Sony platforms (PS4 and PS5)',
          },
          'exp-gamehouse-madrid': {
            title: 'Content, Narrative & Game Designer',
            description: 'Developed interactive stories and gameplay elements for "My Original Stories" (Android & iOS)',
          },
          'exp-gamehouse-alicante': {
            title: 'Narrative & Game Designer',
            description: 'Worked on narrative and game design for "Sally\'s Salon: Kiss & Make-Up" (Android, iOS & PC)',
          },
          'exp-gamehouse-barcelona': {
            title: 'Junior Narrative Designer',
            description: 'Collaborated with the Barcelona Studio in the creation of cutscenes for "Delicious Emily\'s Miracle of Life" (Android and iOS)',
          },
          'exp-psious': {
            title: 'Junior 3D Animator',
            description: 'Performed motion capture sessions and created animations for VR therapy projects',
          },
        },
      },
      education: {
        title: 'Education',
      },
    },
    // Portfolio
    portfolio: {
      title: 'Dev Portfolio',
      description: 'My web development projects',
      viewProject: 'View project',
      demo: 'Demo',
      github: 'GitHub',
      viewMore: 'View more',
      viewCode: 'View code',
      technologies: 'Technologies',
      backToPortfolio: 'Back to Dev Portfolio',
      gallery: 'Gallery',
      videos: 'Videos',
      viewVideo: 'View video',
      projects: {
        battlecards: {
          description: 'Full-stack web application that recreates the experience of collectible card games in a digital environment. Features JWT authentication, card collection system, deck building, and competitive ranking.',
          longDescription: 'BattleCards is a comprehensive full-stack web application that brings the experience of collectible card games to a digital platform. The application was developed as part of a team project with 4Geeks Academy España.\n\nKey Features:\n• Secure user authentication using JWT (JSON Web Tokens)\n• Card collection system with booster packs\n• In-game currency system with card recycling mechanics\n• Free credits system for new players\n• Deck building and management system\n• Strategic card selection for optimal deck performance\n• Deck score calculation based on card rarity and stats\n• Competitive ranking system with leaderboards\n• Card rarities: Common, Rare, and Legendary\n\nTechnical Implementation:\nThe frontend was built with React using functional components and Hooks for state management, styled with Bootstrap for responsive design and UI consistency. Vite was used as the build tool for fast development and optimized bundling.\n\nThe backend was built with Flask (Python) to create RESTful APIs, using SQLAlchemy as ORM for database modeling and queries. PostgreSQL was used as the relational database, and JWT tokens were implemented for secure authentication and user sessions.\n\nThe application was deployed on Render for backend and database hosting, with GitHub used for version control and team collaboration. Stripe integration was planned for simulating real-world transactions when buying packs.',
        },
        'jwt-authentication': {
          description: 'A demonstration site showcasing the simplicity of building a secure JWT authentication system using React and Flask.',
          longDescription: 'A small demonstration site built to showcase the simplicity and effectiveness of implementing a secure JWT (JSON Web Token) authentication system. This project serves as a reference implementation for authentication in full-stack web applications.\n\nFeatures:\n• User registration and login\n• Secure JWT-based authentication\n• Protected routes and endpoints\n• Token-based session management\n• Clean and intuitive user interface\n\nTechnical Stack:\nThe frontend was built with React, utilizing modern React patterns and best practices. Custom Bootstrap elements were used for styling to create a clean and professional UI.\n\nThe backend was implemented using Flask (Python), providing a RESTful API for authentication endpoints. The application demonstrates proper JWT token generation, validation, and secure storage practices.\n\nThis project showcases my understanding of authentication systems and security best practices in web development.',
        },
        'portfolio-web': {
          description: 'Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features internationalization, animations, and a responsive design.',
          longDescription: 'A comprehensive portfolio website showcasing my work as a Game Designer and Full Stack Developer. The site features:\n\n• Full internationalization support (Spanish/English) with language switcher\n• Modern animations and transitions using Framer Motion\n• Responsive design optimized for all devices\n• SEO optimization with metadata and sitemap\n• Project showcase with detailed views\n• Games section for both personal and professional projects\n• Contact information and social media integration\n• Built with Next.js 14 App Router for optimal performance\n• Type-safe with TypeScript\n• Styled with Tailwind CSS for a modern, professional look\n\nThe website serves as both a CV and portfolio, demonstrating my skills in web development while showcasing my game design experience.',
        },
      },
    },
    // Games
    games: {
      title: 'Games Portfolio',
      description: 'My video game projects',
      personal: {
        title: 'Personal Games',
        description: 'Games developed in my free time',
      },
      professional: {
        title: 'Professional Games',
        description: 'Games developed for companies',
      },
      personalGame: 'Personal',
      professionalGame: 'Professional',
      personalGameLabel: 'Personal Game',
      professionalGameLabel: 'Professional Game',
      playGame: 'Play',
      viewGame: 'View game',
      viewWebsite: 'View game website',
      company: 'Company',
      role: 'Role',
      releaseDate: 'Release Date',
      instructions: 'Instructions',
      backToGames: 'Back to Games Portfolio',
      technologies: 'Technologies',
      tags: 'Tags',
      screenshots: 'Screenshots',
      videos: 'Videos',
      viewVideo: 'View video',
      personalNote: 'About this project',
      links: 'Links',
      visitCompany: 'Visit company',
      preview: 'Preview',
      showPreview: 'Show preview',
      hidePreview: 'Hide preview',
      games: {
        'islanders-new-shores': {
          description: 'The sequel to the minimalist city-building game "Islanders". Building on the core mechanics of the original, the sequel introduced expanded progression systems, new mechanics, and fresh challenges, while maintaining the signature relaxing and strategic experience.',
          role: 'Lead Game Designer',
        },
        'islanders-enhanced-edition': {
          description: 'A series of patches for this popular and beloved indie gem. Implemented new systems to extend the game\'s lifespan, added Quality of Life improvements, seasonal content, and new features highly requested by the community.',
          role: 'Lead Game Designer',
        },
        'islanders-vr-edition': {
          description: 'Designed the core features of the VR edition for Islanders, adapting the city-building mechanics for virtual reality platforms.',
          role: 'Game Designer',
        },
        'my-original-stories': {
          description: 'A F2P interactive stories game where players experience engaging narratives through interactive storytelling. Worked on conception, pre-production, production, and analysis of story content.',
          role: 'Content, Narrative & Game Designer',
        },
        'sallys-salon-kiss-make-up': {
          description: 'A time-management casual game developed and released for Android, iOS and PC. The third installment of the "Sally\'s Salon" series. Worked as a Narrative Game Designer on script definition, pipeline creation, and implementation of cutscenes and dialogues.',
          role: 'Narrative Game Designer',
        },
        'madden-2021': {
          description: 'Worked on certification and compliance testing for NFL Madden 2021, ensuring the game met all platform requirements and standards for PlayStation 4 and PlayStation 5.',
          role: 'Certification and Compliance Tester',
        },
      },
    },
    // Contact
    contact: {
      hero: {
        title: 'Contact',
        description: 'Have a project in mind? Let\'s talk!',
      },
      title: 'Get in Touch',
      description: 'I\'m available for new opportunities and projects.',
      socialMedia: 'Social Media',
      location: 'Location',
      email: 'Email',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      notFound: 'Page not found',
      notFoundMessage: 'Sorry, the page you are looking for does not exist.',
      backToHome: 'Back to home',
      readMore: 'Read more',
      copyright: 'All rights reserved.',
      navigation: 'Navigation',
      noProjects: 'No projects available at the moment.',
      noGames: 'No games available at the moment.',
      siteName: 'Portfolio',
      unityWebGLComingSoon: 'Unity WebGL player will be available soon.',
      close: 'Close',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      toggleMenu: 'Toggle menu',
      videoNumber: 'Video',
      screenshotNumber: 'screenshot',
    },
    // Personal
    personal: {
      title: 'Game Designer & Full Stack Developer',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

