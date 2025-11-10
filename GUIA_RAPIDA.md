# Guía Rápida - Portfolio Web

## ✅ Lo que está implementado

- ✅ Proyecto Next.js 14 con TypeScript y Tailwind CSS
- ✅ Layout con Header y Footer responsive
- ✅ Homepage con hero section, proyectos y juegos destacados
- ✅ Página About/CV con experiencia laboral detallada (timeline animada)
- ✅ Página Portfolio con listado y detalle de proyectos
- ✅ Página Juegos con separación entre personales y profesionales
- ✅ Página de Contacto
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Animaciones con Framer Motion
- ✅ Diseño responsive
- ✅ Build exitoso sin errores

## 📝 Personalizar tus datos

### 1. Información Personal
Edita el archivo `data/personal.ts`:
- Actualiza `personalInfo` con tu nombre, título, bio, email, ubicación
- Añade tus enlaces sociales (GitHub, LinkedIn, Twitter)
- Añade tus experiencias laborales en `experiences`
- Añade tu educación en `education`
- Añade tus habilidades en `skills`

### 2. Proyectos
Edita el archivo `data/projects.ts`:
- Añade tus proyectos reales
- Cada proyecto necesita: título, slug, descripción, imagen, tecnologías
- Puedes añadir enlaces a demo y GitHub
- Marca como `featured: true` los proyectos que quieras destacar

### 3. Juegos
Edita el archivo `data/games.ts`:
- Añade tus juegos personales (tipo: 'personal')
- Añade tus juegos profesionales (tipo: 'professional')
- Para juegos personales: añade enlaces a builds externos
- Para juegos profesionales: añade información de la empresa y preview de la web

### 4. Imágenes
- Coloca tus imágenes en la carpeta `public/images/`
- Usa las rutas relativas en los datos (ej: `/images/mi-proyecto.jpg`)
- Asegúrate de optimizar las imágenes antes de subirlas

## 🚀 Deploy a Vercel

### Paso 1: Subir a GitHub
```bash
git add .
git commit -m "Portfolio completo implementado"
git push origin main
```

### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con GitHub
3. Click en "New Project"
4. Selecciona tu repositorio
5. Vercel detectará Next.js automáticamente
6. Click en "Deploy"

### Paso 3: Configurar dominio (opcional)
1. En el dashboard de Vercel, ve a "Settings" > "Domains"
2. Añade tu dominio personalizado
3. Sigue las instrucciones para configurar DNS
4. Vercel configurará SSL automáticamente

### Paso 4: Variables de entorno (si es necesario)
Si en el futuro añades variables de entorno:
1. Ve a "Settings" > "Environment Variables"
2. Añade las variables necesarias
3. Vercel redeployará automáticamente

## 📁 Estructura del Proyecto

```
portfolio-web/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Homepage
│   ├── about/             # Página About
│   ├── portfolio/         # Portfolio
│   ├── games/             # Juegos
│   └── contact/           # Contacto
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── portfolio/        # Componentes portfolio
│   ├── games/            # Componentes juegos
│   └── about/            # Componentes about
├── data/                 # Datos del portfolio
│   ├── personal.ts       # Info personal y CV
│   ├── projects.ts       # Proyectos
│   └── games.ts          # Juegos
├── types/                # Tipos TypeScript
├── lib/                  # Utilidades
└── public/               # Archivos estáticos
    └── images/           # Imágenes
```

## 🎨 Personalizar diseño

### Colores
Edita `tailwind.config.ts` para cambiar los colores del tema.

### Fuentes
Edita `app/layout.tsx` para cambiar la fuente (actualmente Inter).

### Estilos
Los estilos globales están en `app/globals.css`.

## 🔧 Comandos útiles

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

## 📚 Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación Framer Motion](https://www.framer.com/motion)
- [Documentación TypeScript](https://www.typescriptlang.org/docs)

## ⚠️ Notas importantes

1. **Campos opcionales**: Los campos opcionales (marcados con `?`) solo se muestran si tienen valor. No se renderizan espacios vacíos.

2. **Fechas flexibles**: Las fechas en experiencia laboral pueden tener formato:
   - `dd/mm/yyyy` (ej: "01/01/2020")
   - `mm/yyyy` (ej: "01/2020")
   - `yyyy` (ej: "2020")
   - `present` para fechas actuales

3. **Bullet points anidados**: Puedes añadir sub-puntos en las experiencias laborales usando `subPoints` en el array de `bulletPoints`.

4. **Juegos Unity WebGL**: El proyecto está preparado para añadir juegos Unity WebGL en el futuro. Por ahora, puedes enlazar a builds externos.

5. **Migración futura**: La estructura está preparada para migrar a base de datos (Prisma) en el futuro sin cambiar los componentes.

## 🎯 Próximos pasos

1. Personaliza tus datos en `data/`
2. Añade tus imágenes a `public/images/`
3. Prueba localmente con `npm run dev`
4. Sube a GitHub
5. Deploy a Vercel
6. ¡Disfruta de tu portfolio!

## 🐛 Problemas comunes

### Build falla
- Verifica que todas las imágenes existan
- Verifica que los tipos TypeScript sean correctos
- Ejecuta `npm run lint` para ver errores

### Imágenes no se muestran
- Verifica que las rutas sean correctas (deben empezar con `/`)
- Verifica que las imágenes estén en `public/images/`

### Animaciones no funcionan
- Asegúrate de que los componentes con animaciones tengan `'use client'`

## 📞 Soporte

Si tienes problemas, revisa:
1. La documentación de Next.js
2. Los comentarios en el código
3. Los tipos TypeScript para ver qué campos son requeridos

¡Buena suerte con tu portfolio! 🚀

