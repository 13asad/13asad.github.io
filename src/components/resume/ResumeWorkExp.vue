<script setup>
import { ref } from 'vue'
import workExpData from '@/data/workExpData.json' // Import json work experience data

const isWorkExpOpen = ref(true)
const bullet = '•' // Define the bullet symbol
</script>

<template>
    <section>
        <h3
            class="text-2xl md:text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isWorkExpOpen = !isWorkExpOpen"
        >
            <span style="color: #444440">Experience</span>
            <span v-if="isWorkExpOpen">−</span>
            <span v-else>+</span>
        </h3>
        <div
            v-if="isWorkExpOpen"
        >
            <ul class="grid grid-cols-1 gap-4 text-gray-600 mb-4">
                <li
                    v-for="exp in workExpData"
                    :key="exp.id"
                    class="bg-white shadow-md rounded-lg p-4"
                >
                    <h4 class="text-lg md:text-xl font-semibold mb-2">
                        {{ exp.title }}
                    </h4>
                    <div
                        class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2"
                    >
                        <p>{{ exp.company }}</p>
                        <span class="hidden sm:block">|</span>
                        <p>{{ exp.dateRange }}</p>
                    </div>
                    <ul class="text-sm text-gray-500 list-none ml-5 mt-4">
                        <li v-for="(responsibility, index) in exp.responsibilities" :key="index" class="flex items-start">
                            <span class="bullet mr-2">{{ bullet }}</span>
                            <span>{{ responsibility }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.bullet {
    /* Define the bullet symbol styling */
    color: #4b5563; /* Tailwind gray-600 */
    font-size: 1rem;
}
.cursor-pointer {
    cursor: pointer;
}
</style>