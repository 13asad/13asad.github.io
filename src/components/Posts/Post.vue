<script setup>
import { ref, computed } from 'vue';

const posts = [
  {
    date: '2023-10-01',
    title: 'Understanding Vue 3 Composition API',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-09-25',
    title: 'A Guide to Vue Router',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-09-15',
    title: 'State Management with Vuex',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-09-10',
    title: 'Introduction to Vue 3',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-09-05',
    title: 'Building Single Page Applications',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-09-01',
    title: 'Vue 3 Directives',
    coverImage: 'https://via.placeholder.com/150'
  },
  {
    date: '2023-08-25',
    title: 'Vue 3 Lifecycle Hooks',
    coverImage: 'https://via.placeholder.com/150'
  }
];

// Sort posts by date in descending order
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const recentPosts = computed(() => posts.slice(0, 6));
</script>

<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Blog</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="post in recentPosts" :key="post.date" class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <span class="text-gray-500">{{ post.date }}</span>
          <a href="#" class="block text-xl font-semibold hover:underline mt-2">{{ post.title }}</a>
        </div>
      </div>
    </div>
    <div class="mt-6 text-center">
      <a href="/blog" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
        View More
      </a>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
}
</style>