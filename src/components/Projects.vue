<script setup></script>

<template>
  <section>
    <ul class="space-y-2">
      <li v-for="tech in technologies" :key="tech.name">
        <strong>{{ tech.name }}:</strong> {{ tech.description }}
      </li>
    </ul>
  </section>
</template>
