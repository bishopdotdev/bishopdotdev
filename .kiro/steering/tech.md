# Technology Stack

## Framework & Core

- **Nuxt 3** (v3.17.7) - Vue.js meta-framework for SSR/SSG
- **Vue 3** (v3.5.17) - Frontend framework
- **TypeScript** (v5.8.3) - Type safety and development experience
- **Node.js** with ES modules (`"type": "module"`)

## UI & Styling

- **Nuxt UI Pro** - Premium component library
- **Tailwind CSS** - Utility-first CSS framework
- **Nuxt Fonts** - Web font optimization
- **Nuxt Icon** - Icon management
- **Nuxt Image** - Image optimization

## Content & Development

- **Nuxt Content** - File-based CMS for markdown content
- **ESLint** with Nuxt configuration - Code linting and formatting

## Common Commands

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Setup
npm run postinstall  # Prepare Nuxt (runs automatically after install)
```

## Development Notes

- Uses Nuxt's auto-import system - no need to manually import Vue composables
- Content is managed through `@nuxt/content` module for markdown-based pages
- ESLint configuration extends from Nuxt's recommended setup
- CSS imports Tailwind and UI Pro styles in `~/assets/css/main.css`
