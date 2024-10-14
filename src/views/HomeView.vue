<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import PostCard from '@/components/Posts/PostCard.vue';
import Projects from '@/components/Projects.vue';
import { posts } from '@/data/postData';
import { computed } from 'vue';

// Sort posts by date in descending order
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Get the 6 most recent posts
const recentPosts = computed(() => posts.slice(0, 6));
</script>

<template>
  <HelloWorld />
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostCard v-for="post in recentPosts" :key="post.date" :post="post" />
    </div>
    <div class="mt-4 text-center">
      <a href="/blog" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 inline-block">
        View More
      </a>
    </div>
  </section>
  <Projects />
</template>