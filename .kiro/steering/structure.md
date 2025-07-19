# Project Structure

## Root Configuration

- `nuxt.config.ts` - Main Nuxt configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `.env` - Environment variables (not committed)

## Application Structure

```
app/
├── app.vue           # Root application component
├── pages/            # File-based routing
│   └── index.vue     # Homepage component
└── assets/
    └── css/
        └── main.css  # Global styles (Tailwind + UI Pro)
```

## Content & Static Assets

```
public/               # Static files served at root
├── favicon.ico
└── robots.txt

.data/                # Content database
└── content/
    └── contents.sqlite
```

## Development & Build

```
.nuxt/                # Generated build files (auto-generated)
node_modules/         # Dependencies
server/               # Server-side code
└── tsconfig.json     # Server TypeScript config
```

## Conventions

### File Naming

- Vue components: PascalCase (e.g., `MyComponent.vue`)
- Pages: kebab-case or camelCase (e.g., `index.vue`, `about.vue`)
- Assets: kebab-case (e.g., `main.css`)

### Component Structure

- Use `<script setup>` syntax for Vue 3 Composition API
- Utilize `useHead()` for SEO meta tags
- Wrap pages in `<UApp>` component for UI Pro integration

### Styling

- Tailwind utility classes preferred
- Global styles in `app/assets/css/main.css`
- UI Pro components available globally (e.g., `<UApp>`)

### Content Management

- Markdown content managed via Nuxt Content module
- Content stored in `.data/content/` as SQLite database
