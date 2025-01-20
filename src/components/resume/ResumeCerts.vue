<script setup>
import { ref } from 'vue'
import certsData from '@/data/certsData.json'

const isCertsOpen = ref(true)
</script>

<template>
    <section class="mb-4">
        <h3
            class="text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isCertsOpen = !isCertsOpen"
        >
            <span class="text-gray-800">Certifications</span>
            <span v-if="isCertsOpen">−</span>
            <span v-else>+</span>
        </h3>
        <div
            v-if="isCertsOpen"
        >
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <li
                    v-for="cert in certsData"
                    :key="cert.id"
                    class="bg-white shadow-md rounded-lg p-4"
                >
                    <h4 class="text-lg md:text-xl font-semibold mb-2">
                        <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                            {{ cert.title }}
                        </a>
                    </h4>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2">
                        <p>{{ cert.issuer }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>