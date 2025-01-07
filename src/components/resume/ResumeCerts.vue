<script setup>
import { ref } from 'vue'

const isCertsOpen = ref(true)
</script>

<template>
    <section>
        <h3
            class="text-2xl md:text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isCertsOpen = !isCertsOpen"
        >
            <span style="color: #444440">Certifications</span>
            <span v-if="isCertsOpen">−</span>
            <span v-else>+</span>
        </h3>
        <ul
            v-if="isCertsOpen"
            class="grid grid-cols-1 gap-4 text-gray-600 mb-4"
        >
            <li class="bg-white shadow-md rounded-lg p-4">
                <h4 class="text-lg md:text-xl font-semibold mb-2">
                    Certified Cybersecurity Technician (CCT)
                </h4>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2">
                    <p>EC-Council</p>
                </div>
            </li>
            <li class="bg-white shadow-md rounded-lg p-4">
                <h4 class="text-lg md:text-xl font-semibold mb-2">
                    IT Support Professional Certificate
                </h4>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-500 text-sm mb-2">
                    <p>Google</p>
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