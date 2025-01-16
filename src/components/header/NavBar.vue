<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBarLarge from '@/components/header/NavBarLarge.vue';
import NavBarResponsive from '@/components/header/NavBarResponsive.vue';

const isMobile = ref(false);

function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <component :is="isMobile ? NavBarResponsive : NavBarLarge" />
</template>