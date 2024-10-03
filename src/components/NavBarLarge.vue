<!-- NavBar.vue -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="p-4 flex flex-col items-start">
    <div class="flex items-center space-x-4 mb-4">
      <img src="@/assets/img/PixMeAlone.gif" alt="Pixel Me" class="h-15 w-15" />
      <div>
        <h1 class="text-xl font-bold">Mohammad Asad</h1>
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