<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isFixed = ref(false);
const isVisible = ref(true);
let lastScrollY = 0;

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Determine if header should be fixed
  isFixed.value = currentScrollY > 50;

  // Determine visibility based on scroll direction, but only when fixed
  if (isFixed.value) {
    if (currentScrollY < lastScrollY) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  } else {
    isVisible.value = true;
  }
  
  lastScrollY = currentScrollY;
};

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
      'w-full bg-white z-50 transition-all duration-300 px-6 sm:px-8 md:px-16',
      { 'fixed top-0 left-0 shadow-md': isFixed },
      { 'relative': !isFixed },
      { 'transform -translate-y-full': !isVisible && isFixed },
      { 'py-2': isFixed, 'py-4': !isFixed }
    ]"
  >
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center space-y-2">
        <img 
          src="@/assets/img/PixMeAlone.gif" 
          alt="Pixel Me" 
          :class="{ 'h-14 w-14': isFixed, 'h-15 w-15': !isFixed }"
        />
      </div>
      
      <!-- Centered Hamburger Icon -->
      <button class="md:hidden block mt-2" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', 'ellipsis']" size="2x"/>
      </button>

      <!-- Navigation -->
      <nav 
        :class="{ 
          'hidden': !menuOpen, 
          'block': menuOpen,
          'md:block': true // Always show on larger screens
        }" 
        class="w-full mt-4 md:mt-2"
      >
        <ul class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <li><RouterLink to="/" class="hover:underline hover:text-red-700">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:underline hover:text-red-700">About</RouterLink></li>
          <li><RouterLink to="/blog" class="hover:underline hover:text-red-700">Blog</RouterLink></li>
          <li><RouterLink to="/projects" class="hover:underline hover:text-red-700">Projects</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <!-- Spacer div to prevent content jump when header becomes fixed -->
  <div :class="{ 'h-[120px] md:h-[100px]': isFixed }"></div>
</template>