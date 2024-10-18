<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 class="text-4xl font-bold mb-4">Coming Soon</h1>
    <p class="text-xl mb-8">I'm working hard to build something amazing!</p>
    <NuxtImg
      src="/under-construction.gif"
      alt="Under Construction"
      width="300"
      height="300"
      class="rounded-lg shadow-lg"
      placeholder
      format="gif"
    />
    <p class="mt-8 text-sm text-gray-400">Stay tuned for updates!</p>
    <NuxtLink
      to="/"
      class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out"
    >
      Back to Homepage
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Coming Soon | Bishop.dev',
  meta: [
    { name: 'description', content: 'Our new site is under construction. Check back soon for updates!' }
  ]
})
</script>
