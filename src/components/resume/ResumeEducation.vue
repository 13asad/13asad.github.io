<script setup>
import { ref } from 'vue'

const isEducationOpen = ref(true)
</script>

<template>
    <section>
        <h3
            class="text-2xl md:text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isEducationOpen = !isEducationOpen"
        >
            <span style="color: #444440">Education</span>
            <span v-if="isEducationOpen">−</span>
            <span v-else>+</span>
        </h3>
        <ul
            v-if="isEducationOpen"
            class="grid grid-cols-1 gap-4 text-gray-600 mb-4"
        >
            <li class="bg-white shadow-md rounded-lg p-4">
                <h4 class="text-lg md:text-xl font-semibold mb-2">
                    COMPUTER SCIENCE (SYSTEMS ENGINEERING)
                </h4>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2">
                    <p>Bachelor of Science (Hons)</p>
                    <span class="hidden sm:block">|</span>
                    <p>Middlesex University Mauritius</p>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm">
                    <p>GPA: 4.0</p>
                    <span class="hidden sm:block">|</span>
                    <p>Graduation: July 2025</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>