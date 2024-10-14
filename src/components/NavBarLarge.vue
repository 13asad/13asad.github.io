<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isScrolled = ref(false);

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  // Determine if header should be fixed
  isScrolled.value = currentScrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    :class="[
      'bg-white z-50 transition-all duration-300 px-6 sm:px-8 md:px-16 sticky top-0 left-0 right-0',
      { 'py-2 bg-opacity-90': isScrolled, 'py-4': !isScrolled }
    ]"
  >
    <div class="flex items-center space-x-4" :class="{ 'mb-4': !isScrolled }">
      <div>
        <img 
          src="@/assets/img/PixMeAlone.gif" 
          alt="Pixel Me" 
          :class="{ 'h-10 w-10': isScrolled, 'h-15 w-15': !isScrolled }"
        />
      </div>
      <div>
        <nav>
          <ul class="flex space-x-4 font-medium">
            <li><RouterLink to="/" class="hover:underline hover:text-red-700">Home</RouterLink></li>
            <li><RouterLink to="/about" class="hover:underline hover:text-red-700">About</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:underline hover:text-red-700">Blog</RouterLink></li>
            <li><RouterLink to="/projects" class="hover:underline hover:text-red-700">Projects</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  
  <!-- Spacer div to prevent content jump when header becomes fixed -->
  <div :class="{ 'h-[120px] md:h-[100px]': isScrolled }"></div>
</template>