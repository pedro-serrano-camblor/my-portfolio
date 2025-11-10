# Portfolio Web

Portfolio personal moderno desarrollado con Next.js 14, TypeScript y Tailwind CSS. Incluye sección de proyectos, juegos (personales y profesionales), experiencia laboral detallada con timeline animada, y diseño completamente responsive.

## ✨ Características

- 🎨 Diseño moderno y profesional con animaciones suaves
- 📱 Completamente responsive (mobile, tablet, desktop)
- ⚡ Optimizado para performance (SSG, lazy loading, optimización de imágenes)
- 🎮 Sección de juegos con separación entre personales y profesionales
- 💼 Portfolio de proyectos con galería de imágenes y lightbox
- 📝 Experiencia laboral detallada con timeline animada
- 🎯 SEO optimizado (metadata, sitemap, robots.txt)
- 🔒 Type-safe con TypeScript
- 🚀 Listo para deploy en Vercel

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety y mejor DX
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones profesionales
- **shadcn/ui** - Componentes UI accesibles
- **Lucide React** - Iconos modernos

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Ejecutar servidor de desarrollo
npm run dev

# Abrir en http://localhost:3000
```

### Build

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio-web/
├── app/                    # Páginas Next.js (App Router)
│   ├── page.tsx           # Homepage
│   ├── about/             # Página About/CV
│   ├── portfolio/         # Portfolio de proyectos
│   ├── games/             # Juegos personales y profesionales
│   └── contact/           # Página de contacto
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── portfolio/        # Componentes del portfolio
│   ├── games/            # Componentes de juegos
│   ├── about/            # Componentes de About
│   └── ui/               # Componentes UI básicos
├── data/                 # Datos del portfolio
│   ├── personal.ts       # Información personal y CV
│   ├── projects.ts       # Proyectos del portfolio
│   └── games.ts          # Juegos personales y profesionales
├── types/                # Tipos TypeScript
│   ├── project.ts        # Tipo Project
│   ├── game.ts           # Tipo Game
│   └── personal.ts       # Tipos Personal, Experience, etc.
├── lib/                  # Utilidades
│   ├── data-loader.ts    # Función abstracta para cargar datos
│   └── utils.ts          # Utilidades generales
└── public/               # Archivos estáticos
    └── images/           # Imágenes del portfolio
```

## 📝 Personalización

### 1. Información Personal
Edita `data/personal.ts` para añadir tu información personal, experiencias laborales, educación y habilidades.

### 2. Proyectos
Edita `data/projects.ts` para añadir tus proyectos. Cada proyecto puede incluir:
- Título, descripción, imagen
- Tecnologías utilizadas
- Enlaces a demo y GitHub
- Galería de imágenes
- Vídeos embebidos

### 3. Juegos
Edita `data/games.ts` para añadir tus juegos:
- **Juegos personales**: Enlaces a builds externos, GitHub, documentación
- **Juegos profesionales**: Información de la empresa, preview de la web, tu rol

### 4. Imágenes
Coloca tus imágenes en `public/images/` y referencia them en los datos con rutas relativas (ej: `/images/mi-proyecto.jpg`).

## 🚀 Deploy

### Deploy en Vercel (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Click en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará Next.js automáticamente
   - Click en "Deploy"

3. **Configurar dominio (opcional)**
   - En el dashboard de Vercel, ve a "Settings" > "Domains"
   - Añade tu dominio personalizado
   - Sigue las instrucciones para configurar DNS
   - Vercel configurará SSL automáticamente

## 🎨 Características de Diseño

- **Animaciones**: Transiciones suaves con Framer Motion
- **Responsive**: Diseño mobile-first
- **Performance**: Optimización automática de imágenes, code splitting
- **Accesibilidad**: ARIA labels, navegación por teclado
- **SEO**: Metadata dinámica, sitemap, robots.txt

## 📚 Documentación

Para más detalles, consulta [GUIA_RAPIDA.md](./GUIA_RAPIDA.md).

## 🔧 Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

## 📖 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 Licencia

MIT

## 🙏 Agradecimientos

Este proyecto está construido con las siguientes tecnologías y herramientas de código abierto:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React

