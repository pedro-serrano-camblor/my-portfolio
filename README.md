# Portfolio Web

Portfolio personal moderno desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## ✨ Características

- 🎨 Diseño moderno y profesional con animaciones suaves
- 📱 Completamente responsive (mobile, tablet, desktop)
- ⚡ Optimizado para performance (SSG, lazy loading, optimización de imágenes)
- 🎮 Sección de juegos con separación entre personales y profesionales
- 💼 Portfolio de proyectos con galería de imágenes y lightbox
- 📝 Experiencia laboral detallada con timeline animada
- 🎯 SEO optimizado (metadata, sitemap, robots.txt)

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio-web/
├── app/              # Páginas Next.js
├── components/       # Componentes React
├── data/            # Datos del portfolio
├── types/           # Tipos TypeScript
├── lib/             # Utilidades
└── public/          # Archivos estáticos
```

## 📝 Personalización

Los datos del portfolio se configuran en los archivos de la carpeta `data/`:
- `data/personal.ts` - Información personal y CV
- `data/projects.ts` - Proyectos del portfolio
- `data/games.ts` - Juegos personales y profesionales

## 🚀 Deploy

Este proyecto está optimizado para deploy en [Vercel](https://vercel.com):

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará Next.js automáticamente
3. Deploy automático en cada push a la rama principal

## 📄 Licencia

MIT
