<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-4">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <p class="mb-2">&copy; {{ currentYear }} Mohammad Asad Atterkhan</p>
      <nav>
        <ul class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <li><RouterLink to="/" class="hover:underline">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:underline">About</RouterLink></li>
          <li><RouterLink to="/blog" class="hover:underline">Blog</RouterLink></li>
          <li><RouterLink to="/projects" class="hover:underline">Projects</RouterLink></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>