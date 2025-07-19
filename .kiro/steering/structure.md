# Project Structure

## Root Level

- `app.vue` - Main application entry point using UApp wrapper
- `nuxt.config.ts` - Nuxt configuration with modules and settings
- `package.json` - Dependencies and npm scripts
- `eslint.config.mjs` - ESLint configuration extending Nuxt defaults
- `tsconfig.json` - TypeScript configuration

## Key Directories

### `/app`

- `assets/` - Static assets and global styles
  - `main.css` - Global CSS imports (Tailwind + UI Pro)

### `/public`

- Static files served directly (favicon, robots.txt, etc.)

### `/server`

- Server-side code and API routes
- `tsconfig.json` - Server-specific TypeScript config

### `/.nuxt` (Generated)

- Auto-generated Nuxt build files
- Type definitions and component registrations
- UI component configurations for Nuxt UI and UI Pro

### `/.data`

- Content database and cached data
- `content/contents.sqlite` - Nuxt Content database

## File Conventions

- Use `.vue` for Vue components
- Use `.ts` for TypeScript files
- Use `.md` for content files (processed by Nuxt Content)
- CSS follows Tailwind utility-first approach
- Components auto-imported from `components/` directory (when created)

## Architecture Notes

- Follows Nuxt 3 file-based routing conventions
- Uses Nuxt UI Pro component library for consistent design
- Content-driven architecture with markdown support
- Auto-imports enabled for Vue composables and utilities
