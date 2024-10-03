<script setup>

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
  }
]
</script>

<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Blog</h2>
    <ul class="space-y-4">
      <li v-for="post in posts" :key="post.date" class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-gray-200 flex-shrink-0">
          <img :src="post.coverImage" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <div>
          <span class="text-gray-500">{{ post.date }}</span>
          <a href="#" class="block font-semibold hover:underline">{{ post.title }}</a>
        </div>
      </li>
    </ul>
  </section>
</template>