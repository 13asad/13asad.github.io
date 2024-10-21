<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
  >
    <img :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <span class="text-gray-500">{{ post.date }}</span>
      <router-link
        :to="`/post/${post.id}`"
        class="block text-xl font-semibold hover:underline mt-2"
        >{{ post.title }}</router-link
      >
      <div class="mt-2">
        <span class="text-gray-500">{{ post.categories.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
}
</style>