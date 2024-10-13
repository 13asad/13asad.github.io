<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isVisible = ref(true);
let lastScrollY = window.scrollY;

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const handleScroll = () => {
  if (window.scrollY < lastScrollY) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="['fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300', { 'transform -translate-y-full': !isVisible }]">
    <div class="p-4 flex flex-col items-center">
      <div class="flex flex-col items-center space-y-2">
        <img src="@/assets/img/PixMeAlone.gif" alt="Pixel Me" class="h-15 w-15" />
        <h1 class="text-xl font-bold">Mohammad Asad</h1>
      </div>
      
      <!-- Centered Hamburger Icon -->
      <button class="md:hidden block mt-2" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'ellipsis']" size="2x"/>
      </button>

      <!-- Navigation -->
      <nav :class="{ hidden: !menuOpen, block: menuOpen }" class="w-full mt-4">
        <ul class="flex flex-col items-center space-y-2">
          <li><RouterLink to="/" class="hover:underline hover:text-red-700">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:underline hover:text-red-700">About</RouterLink></li>
          <li><RouterLink to="/blog" class="hover:underline hover:text-red-700">Blog</RouterLink></li>
          <li><RouterLink to="/projects" class="hover:underline hover:text-red-700">Projects</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>