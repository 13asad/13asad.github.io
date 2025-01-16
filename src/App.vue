<script setup>
import NavBar from '@/components/header/NavBar.vue';
import Footer from '@/components/header/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>