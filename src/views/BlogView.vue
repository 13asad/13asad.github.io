<!-- BlogView.vue -->
<script setup>
import PostCard from '@/components/Posts/PostCard.vue';
import { posts } from '@/data/postData';
</script>

<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">All Posts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostCard v-for="post in posts" :key="post.date" :post="post" />
    </div>
  </section>
</template>