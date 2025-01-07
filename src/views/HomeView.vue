<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import PostsSection from '@/components/PostsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import posts from '@/data/postData.json'
import projects from '@/data/projectData.json'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

// Sort posts and projects by date in descending order
posts.sort((a, b) => new Date(b.date) - new Date(a.date))
projects.sort((a, b) => new Date(b.date) - new Date(a.date))

// Get the 6 most recent posts and projects
const recentPosts = computed(() => posts)
const recentProjects = computed(() => projects)

// Detect if viewport is mobile
const isMobile = ref(false)
function handleResize() {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// Dynamically set items per view
const itemsPerView = computed(() => (isMobile.value ? 1 : 3))
</script>

<template>
  <HelloWorld />
  <PostsSection :posts="recentPosts" :itemsPerView="itemsPerView" />
  <ProjectsSection :projects="recentProjects" :itemsPerView="itemsPerView" />
</template>