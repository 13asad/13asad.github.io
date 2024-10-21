<script setup>
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
  <section class="mb-12 bg-blue-50 p-4 rounded-lg">
    <h2 class="text-3xl font-bold mb-4">Hi, I'm Mohammad Asad Atterkhan!👋</h2>
    <p class="mb-4">
      Currently working as an IT Engineer at <span class="text-blue-700 font-semibold">Tropic Knits</span>.
    </p>
    <p class="mb-4">
      Passionate about solving problems and optimizing systems. Enthusiast of technology and innovation.<br>
      Oh and I like Cats! 🐱
    </p>
    <div class="flex items-center space-x-4">
      <SocialLinks />
      <a href="/resume.pdf" target="_blank" class="border border-gray-600 text-gray-600 px-2 py-1 rounded hover:border-blue-900 hover:bg-blue-900 hover:text-white transition">
        Resume
      </a>
    </div>
  </section>
</template>