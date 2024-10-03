<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-1">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <p>&copy; {{ currentYear }} Mohammad Asad Atterkhan</p>
      <nav>
        <ul class="flex space-x-4">
            <li><RouterLink to="/" class="hover:underline">Home</RouterLink></li>
            <li><RouterLink to="/about" class="hover:underline">About</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:underline">Blog</RouterLink></li>
            <li><RouterLink to="/projects" class="hover:underline">Projects</RouterLink></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>