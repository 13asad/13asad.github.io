<!-- NavBar.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBarLarge from './NavBarLarge.vue'
import NavBarResponsive from './NavBarResponsive.vue'

const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <component :is="isMobile ? NavBarResponsive : NavBarLarge" />
</template>