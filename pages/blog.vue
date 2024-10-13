<script setup lang="ts">
interface BlogPost {
  title: string;
  description: string;
  // Add other properties as needed
}

interface PageData {
  blog: {
    title: string;
    description: string;
    posts: BlogPost[];
  }
}

interface ParsedContent extends PageData {}

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

// Ensure page is not undefined before accessing its properties
const blogTitle = computed(() => page.value?.blog?.title ?? 'Blog')
const blogDescription = computed(() => page.value?.blog?.description ?? '')
const blogPosts = computed(() => page.value?.blog?.posts ?? [])
</script>

<template>
  <ULandingSection :title="blogTitle" :description="blogDescription">
    <UBlogList>
      <UBlogPost 
        v-for="(post, index) in blogPosts" 
        :key="index" 
        v-bind="post" 
      />
    </UBlogList>
  </ULandingSection>
</template>
