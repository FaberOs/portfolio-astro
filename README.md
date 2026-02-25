<p align="center">
  <img src="public/HeroImage-Portfolio.png" alt="Vista previa del portfolio" width="100%"/>
</p>

<h1 align="center">Portfolio — FaberOs</h1>

<p align="center">
  Portfolio minimalista inspirado en la interfaz de VS Code, construido con Astro y con integración directa a la API de GitHub. Muestra información de perfil, habilidades, resumen profesional y proyectos reales obtenidos dinámicamente desde GitHub, organizados por año en un sidebar navegable. El diseño es limpio, responsivo y soporta modo claro/oscuro, replicando la experiencia visual y la familiaridad de un editor de código.
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC">
    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
</p>

---

## ✨ Características

- **Integración con GitHub API** — Los proyectos, lenguajes y README de cada repositorio se obtienen en tiempo real desde la API pública de GitHub.
- **Sidebar estilo VS Code** — Navegación por proyectos organizada por año, con íconos de lenguaje via Devicon, completamente colapsable.
- **Vista de detalle de proyecto** — Cada proyecto tiene su propia página que renderiza el README desde GitHub con soporte de imágenes y descripción enriquecida.
- **Modo claro/oscuro** — Tema persistido en `localStorage` con transición suave.
- **Modal de configuración** — Accesible desde el ícono de ajustes en el sidebar.
- **Página 404 personalizada** — Redirección automática cuando un proyecto no existe.
- **Server-side rendering** — Desplegado en Netlify con output `server` para peticiones dinámicas.
- **Diseño responsivo** — Optimizado para desktop; sidebar oculto en pantallas pequeñas.

---

## 🛠️ Stack

| Tecnología | Uso |
|---|---|
| [Astro](https://astro.build) | Framework principal (SSR) |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos y utilidades |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |
| [GitHub REST API](https://docs.github.com/en/rest) | Datos de perfil y repositorios |
| [Devicon](https://devicon.dev) | Íconos de lenguajes de programación |
| [Netlify](https://netlify.com) | Despliegue y hosting |

---

## 🚀 Instalación

### Prerrequisitos

- Node.js ≥ 18
- [pnpm](https://pnpm.io) (recomendado) o npm

### Pasos

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/FaberOs/portfolio-astro.git
   cd portfolio-astro
   ```

2. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```env
   GITHUB_USER_URL=https://api.github.com/users/TU_USUARIO
   BASE_URL=https://api.github.com
   GITHUB_USER=TU_USUARIO
   ```

   Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

4. **Iniciar el servidor de desarrollo:**

   ```bash
   pnpm dev
   ```

5. **Build para producción:**

   ```bash
   pnpm build
   ```

---

## 📁 Estructura del proyecto

```
portfolio-astro/
├── public/               # Archivos estáticos e imagen de portada
├── src/
│   ├── components/       # Componentes Astro reutilizables
│   ├── icons/            # Íconos SVG como componentes Astro
│   ├── layouts/          # Layout principal
│   ├── pages/            # Rutas: index, /project/[id], 404
│   ├── styles/           # Estilos globales (Tailwind)
│   └── js/               # Scripts TypeScript del cliente
├── astro.config.mjs      # Configuración de Astro
└── tsconfig.json         # Configuración de TypeScript
```

---

## 📄 Licencia y uso

Este proyecto es de **código abierto** y puedes usarlo como base o inspiración para tu propio portfolio personal, siempre que respetes las siguientes condiciones:

- ✅ Puedes clonar, modificar y adaptar este proyecto libremente.
- ✅ Puedes desplegarlo como tu propio portfolio personal.
- ❌ **No** puedes redistribuirlo como si fuera de tu autoría sin mencionar la fuente original.
- ❌ **No** puedes usar el diseño o código con fines comerciales sin autorización explícita del autor.

> Si usas este proyecto como base, se agradece (aunque no es obligatorio) un crédito o mención al repositorio original: [github.com/FaberOs/portfolio-astro](https://github.com/FaberOs/portfolio-astro).

---

<p align="center">Hecho con 🤍 por <a href="https://github.com/FaberOs">FaberOs</a></p>
