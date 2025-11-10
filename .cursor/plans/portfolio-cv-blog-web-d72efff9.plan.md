<!-- d72efff9-1eda-4e6b-971a-e20268a6993d 396ed685-2a3e-42ae-af55-c585b8ad04da -->
# Plan: Portfolio Web Moderno - Guía Formativa y Profesional

## Objetivos del Proyecto

**Profesional:**

- Portfolio moderno que sirva como carta de presentación
- Demostrar habilidades en stack demandado (Next.js, TypeScript, React)
- Proyecto real deployado en producción con dominio propio
- Código limpio, bien estructurado y mantenible

**Formativo:**

- Aprender Next.js 14 con App Router (framework moderno de React)
- Aprender TypeScript (type safety y mejor DX)
- Aprender Tailwind CSS (utility-first CSS)
- Aprender Framer Motion (animaciones profesionales)
- Entender principios de arquitectura de software
- Buenas prácticas de desarrollo web moderno

## ¿Por qué este Stack?

**Next.js 14:**

- Framework de React más demandado actualmente
- Server Components para mejor performance
- Routing automático basado en archivos
- Optimizaciones automáticas (imágenes, fuentes, etc.)
- Deploy fácil en Vercel (creadores de Next.js)

**TypeScript:**

- Detecta errores antes de ejecutar el código
- Mejor autocompletado en el editor
- Código más mantenible y legible
- Estándar en la industria

**Tailwind CSS:**

- No necesitas escribir CSS personalizado
- Diseño responsive fácil
- Consistencia visual
- Muy rápido de desarrollar

**Framer Motion:**

- Biblioteca de animaciones para React
- Animaciones fluidas y profesionales
- Fácil de usar pero potente

## Empezando con Cursor

### ¿Qué es Cursor?

Cursor es un editor de código con IA integrada que te ayuda a programar. Es similar a VS Code pero con capacidades de IA para:

- Generar código
- Explicar código existente
- Refactorizar código
- Responder preguntas sobre el código

### Primeros Pasos con Cursor

1. **Abrir Cursor:**

   - Instala Cursor si no lo tienes
   - Abre Cursor en tu carpeta de trabajo

2. **Configurar el Workspace:**

   - Crea una carpeta para el proyecto: `portfolio-web`
   - Abre esa carpeta en Cursor: `File > Open Folder`

3. **Usar el Chat de Cursor:**

   - Presiona `Ctrl+L` (o `Cmd+L` en Mac) para abrir el chat
   - Puedes hacer preguntas sobre el código
   - Puedes pedir que genere código
   - Puedes pedir explicaciones

4. **Comandos Útiles:**

   - `Ctrl+K` (o `Cmd+K`): Inline edit (editar código directamente)
   - `Ctrl+L`: Chat con IA
   - `Ctrl+Shift+P`: Paleta de comandos

5. **Terminal Integrada:**

   - `Ctrl+` ` (backtick): Abrir terminal integrada
   - Puedes ejecutar comandos npm, git, etc. directamente

### Flujo de Trabajo con Cursor

1. **Leer el Plan:** Antes de cada fase, lee qué vas a hacer
2. **Hacer Preguntas:** Si algo no está claro, pregunta en el chat
3. **Revisar Código:** Cursor puede explicar cada línea de código
4. **Iterar:** Ve paso a paso, no intentes hacer todo de una vez
5. **Aprender:** Entiende por qué haces cada cosa, no solo cómo

## Stack Tecnológico Detallado

### Frontend + Backend

- **Next.js 14 (App Router)** - Framework React full-stack
  - ¿Por qué?: Framework más moderno y demandado, excelente para portfolios
  - ¿Qué hace?: Maneja routing, optimizaciones, y puede servir como backend también

- **TypeScript** - JavaScript con tipos
  - ¿Por qué?: Previene errores, mejor autocompletado, código más mantenible
  - ¿Qué hace?: Añade tipos estáticos a JavaScript

- **Tailwind CSS** - Framework de CSS utility-first
  - ¿Por qué?: Desarrollo rápido, diseño consistente, responsive fácil
  - ¿Qué hace?: Clases CSS predefinidas que aplicas directamente

- **Framer Motion** - Biblioteca de animaciones
  - ¿Por qué?: Animaciones profesionales y fluidas
  - ¿Qué hace?: Facilita crear animaciones complejas con poco código

- **shadcn/ui** - Componentes UI accesibles
  - ¿Por qué?: Componentes modernos y accesibles listos para usar
  - ¿Qué hace?: Proporciona componentes como botones, cards, etc.

### Control de Versiones

- **Git** - Sistema de control de versiones
  - ¿Por qué?: Esencial para cualquier proyecto, te permite volver atrás si algo falla
  - ¿Qué hace?: Guarda historial de cambios en tu código

- **GitHub** - Plataforma para alojar código
  - ¿Por qué?: Gratuito, estándar en la industria, facilita colaboración
  - ¿Qué hace?: Almacena tu código en la nube y permite compartirlo

### Deploy

- **Vercel** - Plataforma de deploy para Next.js
  - ¿Por qué?: Creado por los creadores de Next.js, gratuito, muy fácil de usar
  - ¿Qué hace?: Despliega tu sitio web automáticamente desde GitHub

## Estructura del Proyecto Explicada

```
portfolio-web/
├── app/                    # Next.js App Router - Aquí van las páginas
│   ├── page.tsx           # Homepage (página principal)
│   ├── about/             # Página "Sobre mí"
│   ├── portfolio/         # Página de proyectos
│   └── games/             # Página de juegos
├── components/            # Componentes reutilizables de React
│   ├── ui/               # Componentes UI básicos (botones, cards, etc.)
│   └── layout/           # Componentes de layout (header, footer)
├── data/                 # Datos del portfolio (proyectos, juegos, etc.)
├── types/                # Definiciones de tipos TypeScript
├── lib/                  # Utilidades y funciones auxiliares
├── public/               # Archivos estáticos (imágenes, juegos Unity)
└── styles/               # Estilos globales
```

**¿Por qué esta estructura?**

- Separación clara de responsabilidades
- Fácil de navegar y mantener
- Sigue convenciones de Next.js
- Escalable para futuras funcionalidades

## Tipos TypeScript Explicados

### ¿Qué son los tipos?

Los tipos le dicen a TypeScript qué estructura tienen tus datos. Por ejemplo:

```typescript
// Esto define que un Project tiene estos campos
export interface Project {
  id: string;           // ID único (texto)
  title: string;        // Título (texto)
  featured: boolean;    // ¿Es destacado? (true/false)
  technologies: string[]; // Tecnologías (array de textos)
}
```

**¿Por qué es importante?**

- TypeScript te avisa si usas mal los datos
- Autocompletado en el editor
- Documentación implícita del código
- Previene errores comunes

## Fases de Desarrollo Detalladas

### Fase 0: Preparación y Configuración del Entorno

**Objetivo:** Tener todo listo para empezar a programar

**Pasos:**

1. **Instalar Node.js:**

   - Ve a nodejs.org y descarga la versión LTS
   - ¿Por qué?: Node.js es necesario para ejecutar Next.js
   - Verifica: Abre terminal y escribe `node --version`

2. **Instalar Git:**

   - Ve a git-scm.com y descarga Git
   - ¿Por qué?: Necesario para control de versiones
   - Verifica: `git --version`

3. **Crear cuenta en GitHub:**

   - Ve a github.com y crea una cuenta
   - ¿Por qué?: Para alojar tu código y hacer deploy
   - Es gratis y es el estándar de la industria

4. **Instalar Cursor:**

   - Ve a cursor.sh y descarga Cursor
   - ¿Por qué?: Editor con IA que te ayudará a programar
   - Configura según tus preferencias

5. **Crear carpeta del proyecto:**

   - Crea una carpeta: `portfolio-web`
   - Ábrela en Cursor: `File > Open Folder`

**Preguntas para entender:**

- ¿Qué es Node.js y para qué sirve?
- ¿Por qué usamos Git y GitHub?
- ¿Cómo funciona Cursor?

### Fase 1: Configuración de Git y GitHub

**Objetivo:** Inicializar control de versiones y conectar con GitHub

**¿Por qué hacer esto primero?**

- Te permite guardar tu progreso
- Puedes volver atrás si algo falla
- Es una buena práctica empezar con Git desde el inicio

**Pasos:**

1. **Inicializar Git:**
   ```bash
   git init
   ```


   - ¿Qué hace?: Crea un repositorio Git en tu carpeta
   - ¿Por qué?: Permite rastrear cambios en tu código

2. **Crear .gitignore:**

   - Crea archivo `.gitignore` en la raíz
   - Contenido inicial:
     ```
     node_modules/
     .next/
     .env*.local
     *.log
     .DS_Store
     ```

   - ¿Qué hace?: Le dice a Git qué archivos NO subir
   - ¿Por qué?: node_modules es muy pesado y se regenera, no debe subirse

3. **Crear README.md:**

   - Crea archivo `README.md`
   - Contenido básico:
     ```markdown
     # Portfolio Web
     
     Portfolio personal desarrollado con Next.js 14, TypeScript y Tailwind CSS.
     ```

   - ¿Qué hace?: Documenta tu proyecto
   - ¿Por qué?: Es lo primero que ven otros desarrolladores

4. **Crear repositorio en GitHub:**

   - Ve a github.com
   - Click en "New repository"
   - Nombre: `portfolio-web`
   - Público o privado (ambos gratuitos)
   - NO marques "Initialize with README" (ya lo creamos)

5. **Conectar con GitHub:**
   ```bash
   git remote add origin https://github.com/tu-usuario/portfolio-web.git
   ```


   - ¿Qué hace?: Conecta tu repositorio local con GitHub
   - ¿Por qué?: Para poder subir código a GitHub

6. **Primer commit:**
   ```bash
   git add .
   git commit -m "Initial commit: Project setup"
   git branch -M main
   git push -u origin main
   ```


   - ¿Qué hace?: Guarda los archivos y los sube a GitHub
   - ¿Por qué?: Para tener respaldo en la nube

**Conceptos importantes:**

- **Commit:** Snapshot de tu código en un momento dado
- **Push:** Subir cambios a GitHub
- **Branch:** Rama de desarrollo (main es la principal)

**Preguntas para entender:**

- ¿Qué es un commit y cuándo debo hacerlo?
- ¿Qué es .gitignore y por qué es importante?
- ¿Cómo funciona el flujo de Git (add, commit, push)?

### Fase 2: Crear Proyecto Next.js

**Objetivo:** Inicializar proyecto Next.js con TypeScript y Tailwind

**¿Por qué Next.js?**

- Framework más moderno de React
- Optimizaciones automáticas
- Routing automático
- Excelente para portfolios

**Pasos:**

1. **Crear proyecto:**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
   ```


   - ¿Qué hace?: Crea estructura de Next.js en la carpeta actual
   - Flags explicados:
     - `--typescript`: Usa TypeScript
     - `--tailwind`: Instala Tailwind CSS
     - `--app`: Usa App Router (lo más moderno)
     - `--no-src-dir`: No crea carpeta `src`

2. **Instalar dependencias adicionales:**
   ```bash
   npm install framer-motion
   ```


   - ¿Qué hace?: Instala Framer Motion para animaciones
   - ¿Por qué?: Para animaciones profesionales

3. **Instalar shadcn/ui:**
   ```bash
   npx shadcn-ui@latest init
   ```


   - Sigue las preguntas (acepta defaults generalmente)
   - ¿Qué hace?: Instala componentes UI modernos
   - ¿Por qué?: Para tener componentes listos (botones, cards, etc.)

4. **Verificar que funciona:**
   ```bash
   npm run dev
   ```


   - Abre http://localhost:3000
   - Deberías ver la página de Next.js
   - ¿Qué hace?: Inicia servidor de desarrollo
   - ¿Por qué?: Para ver tu sitio mientras desarrollas

5. **Commit:**
   ```bash
   git add .
   git commit -m "Setup Next.js project with TypeScript and Tailwind"
   git push
   ```


**Estructura creada:**

- `app/` - Páginas y rutas
- `components/` - Componentes React
- `public/` - Archivos estáticos
- `package.json` - Dependencias del proyecto

**Preguntas para entender:**

- ¿Qué es Next.js y en qué se diferencia de React puro?
- ¿Qué es el App Router?
- ¿Cómo funciona el desarrollo local (npm run dev)?
- ¿Qué es package.json?

### Fase 3: Crear Tipos TypeScript

**Objetivo:** Definir la estructura de datos del portfolio

**¿Por qué hacer esto primero?**

- TypeScript necesita saber la estructura de tus datos
- Te ayuda a escribir código correcto
- Previene errores antes de ejecutar

**Pasos:**

1. **Crear carpeta types:**
   ```bash
   mkdir types
   ```

2. **Crear tipos para Project:**

   - Archivo: `types/project.ts`
   - Define la estructura de un proyecto del portfolio
   - Explicación línea por línea en comentarios

3. **Crear tipos para Game:**

   - Archivo: `types/game.ts`
   - Define juegos personales y profesionales
   - Incluye tipos para enlaces y ubicaciones

4. **Crear tipos para Personal:**

   - Archivo: `types/personal.ts`
   - Define información personal, experiencia laboral, educación
   - Incluye tipos para fechas flexibles y bullet points anidados

5. **Crear archivo de índice:**

   - Archivo: `types/index.ts`
   - Exporta todos los tipos
   - ¿Por qué?: Facilita importar tipos desde otros archivos

**Conceptos importantes:**

- **Interface:** Define la forma de un objeto
- **Type:** Define un tipo (puede ser union, etc.)
- **Optional (?):** Campo que puede no existir

**Preguntas para entender:**

- ¿Qué es una interface en TypeScript?
- ¿Cuándo usar `?` para campos opcionales?
- ¿Cómo se relacionan los tipos con los datos reales?

### Fase 4: Crear Archivos de Datos

**Objetivo:** Crear datos de ejemplo para el portfolio

**¿Por qué archivos TypeScript en vez de JSON?**

- TypeScript valida que los datos coincidan con los tipos
- Puedes usar comentarios
- Mejor autocompletado

**Pasos:**

1. **Crear carpeta data:**
   ```bash
   mkdir data
   ```

2. **Crear datos personales:**

   - Archivo: `data/personal.ts`
   - Información personal, experiencia laboral, educación
   - Usa los tipos definidos anteriormente

3. **Crear datos de proyectos:**

   - Archivo: `data/projects.ts`
   - Array de proyectos del portfolio
   - Incluye proyectos de ejemplo

4. **Crear datos de juegos:**

   - Archivo: `data/games.ts`
   - Juegos personales y profesionales
   - Diferencia entre ambos tipos

5. **Crear función de carga de datos:**

   - Archivo: `lib/data-loader.ts`
   - Funciones para obtener proyectos, juegos, etc.
   - ¿Por qué?: Abstrae cómo se cargan los datos (fácil migrar a BD después)

**Conceptos importantes:**

- **Array:** Lista de elementos
- **Export:** Hace que algo sea importable desde otros archivos
- **Const:** Constante que no cambia

**Preguntas para entender:**

- ¿Cómo se estructura un array de objetos en TypeScript?
- ¿Cómo funcionan las importaciones y exportaciones?
- ¿Por qué abstraer la carga de datos?

### Fase 5: Crear Layout y Navegación

**Objetivo:** Crear estructura básica del sitio (header, footer, navegación)

**¿Por qué empezar por el layout?**

- Define la estructura visual del sitio
- Se usa en todas las páginas
- Es la base sobre la que construyes

**Pasos:**

1. **Crear Header:**

   - Componente: `components/layout/Header.tsx`
   - Logo/nombre
   - Navegación con links
   - Responsive (menú hamburguesa en mobile)
   - Animaciones con Framer Motion

2. **Crear Footer:**

   - Componente: `components/layout/Footer.tsx`
   - Enlaces sociales
   - Copyright
   - Información de contacto

3. **Modificar layout principal:**

   - Archivo: `app/layout.tsx`
   - Incluir Header y Footer
   - Metadata para SEO
   - Estilos globales

4. **Crear componente de navegación:**

   - Con animaciones de hover
   - Indicador de página activa
   - Transiciones suaves

**Conceptos importantes:**

- **Componente React:** Función que retorna JSX
- **Props:** Datos que se pasan a un componente
- **JSX:** Sintaxis que parece HTML pero es JavaScript

**Preguntas para entender:**

- ¿Qué es un componente en React?
- ¿Cómo se pasan datos entre componentes (props)?
- ¿Qué es JSX y cómo funciona?

### Fase 6: Crear Homepage

**Objetivo:** Página principal del portfolio

**Pasos:**

1. **Hero Section:**

   - Nombre y título
   - Descripción breve
   - Call to action
   - Animaciones de entrada

2. **Sección About (resumen):**

   - Información personal resumida
   - Link a página completa

3. **Proyectos destacados:**

   - Grid de proyectos
   - Cards con imagen y descripción
   - Animaciones al hacer scroll

4. **Juegos destacados:**

   - Preview de juegos
   - Link a sección de juegos

5. **Call to action:**

   - Invitación a ver portfolio
   - Link a contacto

**Conceptos importantes:**

- **Server Components:** Componentes que se renderizan en el servidor
- **Client Components:** Componentes que se renderizan en el cliente (para interactividad)
- **Framer Motion:** Para animaciones (requiere 'use client')

**Preguntas para entender:**

- ¿Cuándo usar Server Components vs Client Components?
- ¿Cómo funcionan las animaciones con Framer Motion?
- ¿Qué es el scroll animation?

### Fase 7: Crear Página About / CV

**Objetivo:** Página completa con información personal y experiencia

**Pasos:**

1. **Información personal:**

   - Nombre, título, bio
   - Foto (opcional)
   - Enlaces sociales

2. **Habilidades técnicas:**

   - Lista de tecnologías
   - Iconos (opcional)
   - Niveles o categorías

3. **Experiencia laboral:**

   - Timeline animada
   - Para cada experiencia:
     - Nombre de empresa
     - Lugar (ciudad, país, remoto/oficina/híbrido)
     - Fechas (formato flexible)
     - Bullet points (con sub-puntos anidados)
     - Tecnologías usadas
   - Animaciones al hacer scroll

4. **Educación:**

   - Títulos obtenidos
   - Instituciones
   - Períodos

5. **Certificaciones (opcional):**

   - Certificados obtenidos
   - Fechas
   - Links a verificaciones

**Conceptos importantes:**

- **Timeline:** Línea de tiempo visual
- **Conditional rendering:** Mostrar algo solo si existe
- **Array methods:** map, filter, etc. para procesar datos

**Preguntas para entender:**

- ¿Cómo crear un timeline visual?
- ¿Cómo renderizar listas en React?
- ¿Cómo manejar fechas flexibles (dd/mm/yyyy vs mm/yyyy)?

### Fase 8: Crear Página Portfolio

**Objetivo:** Mostrar proyectos del portfolio

**Pasos:**

1. **Página de listado:**

   - Grid responsivo de proyectos
   - Filtros por tecnología/categoría
   - Búsqueda (opcional)
   - Animaciones de entrada

2. **Cards de proyectos:**

   - Imagen destacada
   - Título y descripción
   - Tecnologías
   - Links (demo, GitHub)
   - Hover effects

3. **Página de detalle:**

   - Información completa del proyecto
   - Galería de imágenes con lightbox
   - Descripción detallada
   - Tecnologías y herramientas
   - Links externos
   - Vídeos embebidos (si aplica)

**Conceptos importantes:**

- **Dynamic routing:** Rutas dinámicas con [slug]
- **Lightbox:** Modal para ver imágenes en grande
- **Image optimization:** Usar next/image para optimizar

**Preguntas para entender:**

- ¿Cómo funcionan las rutas dinámicas en Next.js?
- ¿Cómo crear un lightbox para imágenes?
- ¿Cómo optimizar imágenes con next/image?

### Fase 9: Crear Página de Juegos

**Objetivo:** Mostrar juegos personales y profesionales

**Pasos:**

1. **Página de listado:**

   - Separación visual entre tipos
   - Tabs o secciones separadas
   - Filtros por tipo
   - Grid de juegos

2. **Vista para juegos personales:**

   - Enlaces a builds externos
   - Links a GitHub, documentación, etc.
   - Información del proyecto
   - Screenshots/videos
   - Preparado para Unity WebGL (futuro)

3. **Vista para juegos profesionales:**

   - Enlace a web del juego
   - Preview/iframe de la web
   - Información de la empresa
   - Tu rol en el proyecto
   - Screenshots/videos

4. **Componentes:**

   - PersonalGameView: Para juegos personales
   - ProfessionalGameView: Para juegos profesionales
   - WebPreview: Preview de webs con iframe
   - GameLinks: Múltiples enlaces con iconos

**Conceptos importantes:**

- **Iframe:** Incrustar otra página web
- **Lazy loading:** Cargar contenido solo cuando se necesita
- **Conditional rendering:** Mostrar diferente contenido según tipo

**Preguntas para entender:**

- ¿Cómo incrustar una web con iframe?
- ¿Cómo hacer lazy loading de iframes?
- ¿Cómo diferenciar la vista según el tipo de juego?

### Fase 10: Optimización y SEO

**Objetivo:** Mejorar visibilidad y performance

**Pasos:**

1. **Metadata dinámica:**

   - Open Graph tags (para compartir en redes sociales)
   - Twitter Cards
   - Meta descriptions
   - Títulos únicos por página

2. **Sitemap.xml:**

   - Generar sitemap estático
   - Incluir todas las páginas
   - ¿Por qué?: Ayuda a buscadores a indexar tu sitio

3. **Robots.txt:**

   - Permitir indexación
   - Especificar sitemap

4. **Optimización de imágenes:**

   - Usar next/image en todo el sitio
   - Lazy loading automático
   - Formatos modernos (WebP)

5. **Performance:**

   - Code splitting automático
   - Lazy loading de componentes
   - Optimización de bundles

6. **Google Analytics (opcional):**

   - Integrar GA4
   - Tracking de páginas

**Conceptos importantes:**

- **SEO:** Optimización para motores de búsqueda
- **Metadata:** Información sobre tu página
- **Performance:** Velocidad de carga

**Preguntas para entender:**

- ¿Qué es SEO y por qué es importante?
- ¿Cómo funcionan los meta tags?
- ¿Cómo optimizar el performance de un sitio?

### Fase 11: Deploy a Vercel

**Objetivo:** Publicar el sitio en internet

**Pasos:**

1. **Preparación:**

   - Verificar que todo funciona localmente
   - Revisar que no hay errores
   - Optimizar imágenes y assets

2. **Conectar con Vercel:**

   - Ve a vercel.com
   - Inicia sesión con GitHub
   - Click en "New Project"
   - Selecciona tu repositorio
   - Configura el proyecto (Next.js se detecta automáticamente)

3. **Deploy:**

   - Vercel hace build automático
   - Deploy a URL temporal
   - Verifica que funciona

4. **Configurar dominio:**

   - Opción 1: Usar dominio gratuito de Vercel
   - Opción 2: Comprar dominio y configurarlo
   - DNS se configura automáticamente
   - SSL/HTTPS automático y gratuito

5. **Deploy automático:**

   - Cada push a main hace deploy automático
   - Preview deployments para Pull Requests

**Conceptos importantes:**

- **Build:** Proceso de compilar tu código para producción
- **Deploy:** Publicar tu sitio en internet
- **DNS:** Sistema de nombres de dominio
- **SSL/HTTPS:** Conexión segura

**Preguntas para entender:**

- ¿Qué es un build y por qué es necesario?
- ¿Cómo funciona el deploy automático?
- ¿Cómo configurar un dominio personalizado?

## Buenas Prácticas de Seguridad

### ¿Por qué es importante?

- Proteger información personal
- Prevenir ataques
- Construir confianza

### Prácticas a seguir:

1. **Variables de entorno:**

   - Nunca subir claves API a GitHub
   - Usar `.env.local` para secretos
   - Agregar `.env*.local` a `.gitignore`

2. **Validación de datos:**

   - Validar datos de entrada
   - Sanitizar inputs
   - Prevenir XSS

3. **HTTPS:**

   - Siempre usar HTTPS en producción
   - Vercel lo proporciona automáticamente

4. **Dependencias:**

   - Mantener dependencias actualizadas
   - Revisar vulnerabilidades: `npm audit`

5. **Contenido:**

   - No exponer información sensible
   - Validar enlaces externos
   - Sanitizar contenido de usuarios (si aplica)

## Recursos de Aprendizaje

### Documentación Oficial:

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion

### Tutoriales:

- Next.js Learn: https://nextjs.org/learn
- React Tutorial: https://react.dev/learn

### Comunidad:

- Stack Overflow: Para preguntas técnicas
- GitHub Discussions: Para discusiones sobre Next.js
- Discord de Next.js: Comunidad en tiempo real

## Checklist de Seguimiento

### Por cada fase, verifica:

- [ ] Entiendo qué estoy haciendo
- [ ] Sé por qué lo estoy haciendo
- [ ] El código funciona correctamente
- [ ] He hecho commit de los cambios
- [ ] He hecho push a GitHub
- [ ] No hay errores en la consola
- [ ] El sitio se ve bien en diferentes tamaños de pantalla

### Antes de deploy:

- [ ] Todo funciona localmente
- [ ] No hay errores de TypeScript
- [ ] No hay errores en la consola del navegador
- [ ] Imágenes optimizadas
- [ ] Metadata configurada
- [ ] Enlaces funcionan correctamente
- [ ] Responsive en mobile, tablet y desktop

## Consejos para el Aprendizaje

1. **Ve paso a paso:** No intentes hacer todo de una vez
2. **Haz preguntas:** Usa el chat de Cursor para preguntar
3. **Experimenta:** Prueba cambiar cosas y ve qué pasa
4. **Lee el código:** Entiende qué hace cada línea
5. **Haz commits frecuentes:** Guarda tu progreso
6. **No te frustres:** Es normal tener errores, es parte de aprender
7. **Documenta:** Escribe comentarios en código complejo
8. **Practica:** Cuanto más código escribas, más aprenderás

## Siguientes Pasos Después del Proyecto

1. **Mejorar el diseño:** Iterar sobre el diseño visual
2. **Añadir más proyectos:** Actualizar portfolio con nuevos proyectos
3. **Optimizar performance:** Mejorar velocidad de carga
4. **Añadir funcionalidades:** Blog, comentarios, etc.
5. **Migrar a base de datos:** Cuando sea necesario, añadir panel admin
6. **Aprender más:** Explorar otras tecnologías y frameworks

## Manejo de Campos Opcionales

**Principio:** Los campos opcionales solo se muestran si tienen valor.

**Implementación:**

- Usar conditional rendering: `{field && <Component />}`
- No renderizar secciones vacías
- UI se adapta dinámicamente

**Ejemplo:**

```tsx
{project.githubUrl && (
  <a href={project.githubUrl}>GitHub</a>
)}
```

## Arquitectura para Migración Futura

**Estrategia:**

- Tipos TypeScript compatibles con Prisma
- Función abstracta `data-loader.ts`
- Componentes independientes de la fuente de datos
- Fácil migrar de archivos a base de datos

**Cuando migrar:**

- Cuando necesites actualizar contenido frecuentemente
- Cuando quieras un panel de administración
- Cuando el contenido crezca mucho

### To-dos

- [ ] Configurar proyecto Next.js 14 con TypeScript, Tailwind CSS y dependencias principales (Prisma, NextAuth, Framer Motion, React Markdown, shadcn/ui)
- [ ] Configurar Prisma con schema completo (User, Post, Project, Category, Tag, Media) y crear migraciones iniciales
- [ ] Implementar autenticación con NextAuth.js v5, crear páginas de login y middleware de protección de rutas admin
- [ ] Crear panel de administración con dashboard, CRUD de posts (editor Markdown), CRUD de proyectos y gestión de medios
- [ ] Crear layout público con Header y Footer responsive, navegación animada y sistema de rutas
- [ ] Implementar homepage con hero section, proyectos destacados, últimos posts y animaciones
- [ ] Crear página About/CV con información personal, habilidades, timeline de experiencia y educación
- [ ] Implementar página de portfolio con grid, filtros, cards de proyectos y página de detalle con galería
- [ ] Crear página de blog con listado, filtros, búsqueda, paginación y página de detalle con renderizado Markdown
- [ ] Integrar Cloudinary para upload de imágenes, crear galería de medios y soporte para vídeos embebidos
- [ ] Crear sección de juegos con grid, cards y sistema de iframe para juegos externos
- [ ] Implementar metadata dinámica, sitemap.xml, robots.txt, optimización de imágenes y Google Analytics
- [ ] Configurar deploy en Vercel, conectar dominio personalizado, configurar PostgreSQL en producción y CI/CD