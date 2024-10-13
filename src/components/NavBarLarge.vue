<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isScrolled = ref(false);
const isMobile = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    :class="{
      'p-4 flex flex-col items-start transition-all duration-300 z-50': true,
      'fixed top-0 left-0 right-0 bg-white shadow-md': isScrolled,
      'relative': !isScrolled
    }"
  >
    <div class="flex items-center space-x-4" :class="{ 'mb-4': !isScrolled }">
      <img 
        src="@/assets/img/PixMeAlone.gif" 
        alt="Pixel Me" 
        :class="{
          'h-15 w-15': !isScrolled,
          'h-10 w-10': isScrolled
        }"
      />
      <div>
        <h1 :class="{
          'text-xl font-bold': !isScrolled,
          'text-lg font-semibold': isScrolled
        }">Mohammad Asad</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><RouterLink to="/" class="hover:underline hover:text-red-700">Home</RouterLink></li>
            <li><RouterLink to="/about" class="hover:underline hover:text-red-700">About</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:underline hover:text-red-700">Blog</RouterLink></li>
            <li><RouterLink to="/projects" class="hover:underline hover:text-red-700">Projects</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>