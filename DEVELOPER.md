# Guía para Desarrolladores

Esta guía contiene información interna de desarrollo para este proyecto.

## 🚀 Configuración Inicial

### Prerequisitos

- Node.js 18+ instalado
- Git instalado
- Cuenta en GitHub (para deploy)

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
portfolio-web/
├── app/                    # Next.js App Router
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

## 📝 Personalización de Datos

### Información Personal

Edita `data/personal.ts`:
- Información personal (nombre, título, bio, email, ubicación)
- Enlaces sociales
- Experiencias laborales con fechas flexibles y bullet points anidados
- Educación
- Habilidades técnicas

### Proyectos

Edita `data/projects.ts`:
- Añade tus proyectos con título, descripción, imagen
- Tecnologías utilizadas
- Enlaces a demo y GitHub
- Galería de imágenes
- Vídeos embebidos (YouTube, Vimeo)

### Juegos

Edita `data/games.ts`:
- **Juegos personales**: Enlaces a builds externos, GitHub, documentación
- **Juegos profesionales**: Información de la empresa, preview de la web, tu rol

### Imágenes

Coloca tus imágenes en `public/images/` y referencia them en los datos con rutas relativas (ej: `/images/mi-proyecto.jpg`).

## 🎨 Características de Diseño

- **Animaciones**: Transiciones suaves con Framer Motion
- **Responsive**: Diseño mobile-first
- **Performance**: Optimización automática de imágenes, code splitting
- **Accesibilidad**: ARIA labels, navegación por teclado
- **SEO**: Metadata dinámica, sitemap, robots.txt

## 🔒 Campos Opcionales

Los campos opcionales (marcados con `?` en TypeScript) solo se muestran si tienen valor. No se renderizan espacios vacíos.

## 📅 Fechas Flexibles

Las fechas en experiencia laboral pueden tener formato:
- `dd/mm/yyyy` (ej: "01/01/2020")
- `mm/yyyy` (ej: "01/2020")
- `yyyy` (ej: "2020")
- `present` para fechas actuales

## 🎮 Juegos Unity WebGL

El proyecto está preparado para añadir juegos Unity WebGL en el futuro. Por ahora, puedes enlazar a builds externos.

## 🔄 Migración Futura

La estructura está preparada para migrar a base de datos (Prisma) en el futuro sin cambiar los componentes. La función `lib/data-loader.ts` abstrae la fuente de datos.

## 🐛 Solución de Problemas

### Build falla
- Verifica que todas las imágenes existan
- Verifica que los tipos TypeScript sean correctos
- Ejecuta `npm run lint` para ver errores

### Imágenes no se muestran
- Verifica que las rutas sean correctas (deben empezar con `/`)
- Verifica que las imágenes estén en `public/images/`

### Animaciones no funcionan
- Asegúrate de que los componentes con animaciones tengan `'use client'`

### Error de hidratación
- Verifica que no haya elementos de bloque dentro de `<Link>`
- Asegúrate de que los componentes Client estén marcados con `'use client'`

## 🚀 Deploy

### Deploy en Vercel

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
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

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🎯 Próximos Pasos

1. Personaliza tus datos en `data/`
2. Añade tus imágenes a `public/images/`
3. Prueba localmente con `npm run dev`
4. Sube a GitHub
5. Deploy a Vercel
6. Configura dominio personalizado (opcional)

