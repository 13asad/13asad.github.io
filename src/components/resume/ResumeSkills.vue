<script setup>
import { ref } from 'vue'

const isSkillsOpen = ref(true)
const bullet = '•' // Define the bullet symbol here
</script>

<template>
    <section class="mb-4">
        <h3
            class="text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isSkillsOpen = !isSkillsOpen"
        >
            <span class="text-gray-800">Skills</span>
            <span v-if="isSkillsOpen">−</span>
            <span v-else>+</span>
        </h3>
        <div
            v-if="isSkillsOpen"
            class="bg-white shadow-md rounded-lg p-6"
        >
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>IT System Administration (Linux & Windows, O365 Administration)</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Networking & Security</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Hardware/Software Troubleshooting & Support</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Identity and Access Management (IAM) (AD, Group Policy)</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Programming & Scripting (Python, Bash, Batch)</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Documentation & Process Improvement</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Raspberry Pi</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Git</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Communication</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Team Management</span>
                </li>
                <li class="flex items-start">
                    <span class="bullet mr-2">{{ bullet }}</span>
                    <span>Project Management</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.bullet {
    /* Define the bullet symbol styling here */
    color: #4B5563; /* Tailwind gray-600 */
    font-size: 1rem;
}
.cursor-pointer {
    cursor: pointer;
}
</style>