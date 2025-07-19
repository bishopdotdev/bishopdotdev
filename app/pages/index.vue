<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"/>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"/>
      <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"/>
    </div>

    <!-- Main content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Logo/Avatar placeholder -->
      <div class="mb-8">
        <div class="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
          <UIcon name="i-heroicons-code-bracket" class="w-12 h-12 text-white" />
        </div>
      </div>

      <!-- Main heading with gradient text -->
      <h1 class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 animate-fade-in">
        Coming Soon
      </h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
        Something amazing is brewing at <span class="text-purple-400 font-semibold">bishop.dev</span>
      </p>

      <!-- Description -->
      <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
        Chris Bishop's developer portfolio and blog is under construction. 
        Get ready for insights, projects, educational content and more!
      </p>

      <!-- Social links -->
      <div class="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
        <UButton 
          variant="ghost" 
          size="lg" 
          icon="i-simple-icons-twitter"
          to="https://x.com/bishopdotdev"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors"
        />
        <UButton 
          variant="ghost" 
          size="lg" 
          icon="i-simple-icons-youtube"
          to="https://www.youtube.com/@bishopdotdev"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors"
        />
        <UButton 
          variant="ghost" 
          size="lg" 
          icon="i-simple-icons-github"
          to="https://github.com/bishopdotdev"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors"
        />
      </div>

      <!-- Progress indicator -->
      <div class="max-w-md mx-auto animate-fade-in-delay-4">
        <div class="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>25%</span>
        </div>
        <UProgress :value="25" class="mb-6" />
      </div>
    </div>

    <!-- Floating particles effect -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-float"/>
      <div class="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-float animation-delay-1000"/>
      <div class="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-35 animate-float animation-delay-2000"/>
      <div class="absolute top-3/4 right-1/4 w-1 h-1 bg-violet-300 rounded-full opacity-30 animate-float animation-delay-3000"/>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Coming Soon - Chris Bishop",
  meta: [
    {
      name: "description",
      content: "Chris Bishop's developer portfolio and blog coming soon - Toronto-based developer sharing insights, projects, and content.",
    },
    {
      name: "keywords",
      content: "Chris Bishop, developer, Toronto, portfolio, blog, web development",
    },
    {
      property: "og:title",
      content: "Coming Soon - Chris Bishop",
    },
    {
      property: "og:description",
      content: "Something amazing is brewing at bishop.dev",
    },
  ],
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fade-in 1s ease-out 0.6s both;
}

.animate-fade-in-delay-4 {
  animation: fade-in 1s ease-out 0.8s both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
