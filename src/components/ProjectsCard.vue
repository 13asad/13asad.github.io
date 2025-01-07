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
    class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-60 h-64 mx-auto"
  >
    <img
      :src="props.project.coverImage"
      :alt="props.project.title"
      class="w-full h-32 object-cover"
    />
    <div class="p-4 flex flex-col justify-between h-full">
      <div>
        <span class="text-gray-500 text-sm">{{ props.project.date }}</span>
        <router-link
          :to="`/projects/${props.project.id}`"
          class="block text-xl font-semibold hover:underline mt-2 truncate"
        >
          {{ props.project.title }}
        </router-link>
        <div class="mt-2">
          <span class="text-gray-500 text-sm">{{ props.project.categories.join(', ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
}
</style>