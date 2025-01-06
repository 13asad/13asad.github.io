<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-11/12 md:w-full mx-auto"
  >
    <img :src="props.project.coverImage" :alt="props.project.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <span class="text-gray-500">{{ props.project.date }}</span>
      <router-link
        :to="`/projects/${props.project.id}`"
        class="block text-xl font-semibold hover:underline mt-2"
      >
        {{ props.project.title }}
      </router-link>
      <div class="mt-2">
        <span class="text-gray-500">{{ props.project.categories.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
}
</style>