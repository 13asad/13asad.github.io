<script setup></script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Projects</h2>
    <ul class="space-y-2">
      <li v-for="tech in technologies" :key="tech.name">
        <strong>{{ tech.name }}:</strong> {{ tech.description }}
      </li>
    </ul>
  </section>
</template>
