<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <h1 class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
      Coming Soon
    </h1>
    <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-center">
      I'm working hard to bring you something amazing. Stay tuned!
    </p>
    <NuxtPicture
      src="/under-construction.gif"
      alt="Funny under construction animation"
      class="w-64 h-64 mb-8"
      format="gif"
    />
    <div class="flex space-x-4">
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
      >
        Home
      </NuxtLink>
      <button
        @click="toggleColorMode"
        class="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition duration-300"
      >
        Toggle Theme
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
