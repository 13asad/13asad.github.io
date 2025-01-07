<script setup>
import { ref } from 'vue'

const isAboutOpen = ref(true)
</script>

<template>
    <!-- Intro & Contact Section -->
    <section class="mb-12 rounded-lg bg-[#f4f4f4] py-8 px-4">
        <h2 class="text-3xl font-bold mb-4 text-center">
            <span style="color: #444440; letter-spacing: 0.1em"
                >MOHAMMAD ASAD </span
            ><span style="color: #828206; letter-spacing: 0.1em"
                >ATTERKHAN</span
            >
        </h2>
        <!-- contacts -->
        <div
            class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-sm"
        >
            <p>
                <a
                    href="tel:+23058455140"
                    class="text-gray-600 flex items-center"
                >
                    <font-awesome-icon
                        :icon="['fas', 'phone']"
                        class="icon-size mr-1"
                    />
                    +230 5845 5140</a
                >
            </p>
            <p>
                <a
                    href="mailto:masad.atterkhan@gmail.com"
                    class="text-gray-600 flex items-center"
                >
                    <font-awesome-icon
                        :icon="['fas', 'envelope']"
                        class="icon-size mr-1"
                    />
                    masad.atterkhan@gmail.com</a
                >
            </p>
            <p class="text-gray-600 flex items-center">
                <a
                    href="https://linkedin.com/in/maatterkhan"
                    class="text-gray-600 flex items-center"
                >
                    <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                        class="icon-size mr-1"
                    />
                    LinkedIn
                </a>
            </p>
            <p class="text-gray-600 flex items-center">
                <a
                    href="https://github.com/ma-asad"
                    target="_blank"
                    class="text-gray-600 flex items-center"
                >
                    <font-awesome-icon
                        :icon="['fab', 'github']"
                        class="icon-size mr-1"
                    />
                    GitHub
                </a>
            </p>
        </div>
    </section>

    <!-- About Section -->
    <section class="mb-4">
        <h3
            class="text-2xl font-bold mb-4 cursor-pointer flex justify-between items-center"
            @click="isAboutOpen = !isAboutOpen"
        >
            <span style="color: #444440">About Me</span>
            <span v-if="isAboutOpen">−</span>
            <span v-else>+</span>
        </h3>
        <p v-if="isAboutOpen" class="text-gray-600">
            Final-year BSc (Hons) Computer Science (Systems Engineering) student
            with professional experience as an IT Support Engineer and prior
            training as a Software Trainee. Skilled in IT systems management,
            including Active Directory (AD), Group Policy, Windows and Linux
            Administration, and troubleshooting complex technical issues.
            Certified as a Certified Cybersecurity Technician (CCT) by
            EC-Council, with a solid foundation in networking and system
            security. Focused on enhancing IT infrastructure, strengthening
            security measures, and providing reliable technical support.
        </p>
    </section>
</template>

<style scoped>
.icon-size {
    transform: scale(1.2);
}
.cursor-pointer {
    cursor: pointer;
}
</style>
