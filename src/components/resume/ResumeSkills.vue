<script setup>
import { ref } from 'vue'

const isSkillsOpen = ref(true)
const bullet = '•' // bullet symbol
</script>

<template>
    <section>
        <h3
            class="text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isSkillsOpen = !isSkillsOpen"
        >
            <span style="color: #444440">Skills</span>
            <span v-if="isSkillsOpen">−</span>
            <span v-else>+</span>
        </h3>
        <ul
            v-if="isSkillsOpen"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-gray-600"
        >
            <li>{{ bullet }} JavaScript</li>
            <li>{{ bullet }} Vue.js</li>
            <li>{{ bullet }} CSS</li>
            <li>{{ bullet }} HTML</li>
            <li>{{ bullet }} Node.js</li>
            <li>{{ bullet }} Tailwind CSS</li>
            <li>{{ bullet }} Git</li>
            <li>{{ bullet }} REST APIs</li>
            <li>{{ bullet }} Docker</li>
        </ul>
    </section>
</template>

<style scoped>

.cursor-pointer {
    cursor: pointer;
}
</style>
