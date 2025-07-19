// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
   {
    rules: {
      // Disable multi-word component names for pages (standard Nuxt convention)
      'vue/multi-word-component-names': ['error', {
        ignores: ['index', 'error', 'default']
      }]
    }
  }
)
