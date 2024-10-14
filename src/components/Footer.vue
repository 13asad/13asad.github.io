<script setup>
import SocialLinks from '@/components/SocialLinks.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-4 md:px-8 text-gray-700">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p class="mb-2 md:mb-0 text-center md:text-left">
        &copy; {{ currentYear }} Mohammad Asad Atterkhan
      </p>
      <div class="flex justify-center md:justify-end mt-2 md:mt-0">
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>