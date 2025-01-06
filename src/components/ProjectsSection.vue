<script setup>
import ProjectsCard from '@/components/ProjectsCard.vue'
import { ref } from 'vue'

// Props
const props = defineProps({
    projects: Array,
    itemsPerView: Number
})

const activeProjectIndex = ref(0)

const showNextProjects = () => {
    if (activeProjectIndex.value < props.projects.length - props.itemsPerView) {
        activeProjectIndex.value++
    }
}

const showPreviousProjects = () => {
    if (activeProjectIndex.value > 0) {
        activeProjectIndex.value--
    }
}
</script>

<template>
    <section class="mb-6 md:mb-12">
        <h2 class="text-2xl font-bold mb-4">Latest Projects</h2>
        <div class="flex items-center space-x-2 md:space-x-4 overflow-x-hidden">
            <button
                class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                @click="showPreviousProjects"
                :disabled="activeProjectIndex === 0"
            >
                <!-- SVG Icon -->
                                 <svg
                    fill="#000000"
                    height="16"
                    width="16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g>
                        <polygon
                            points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3"
                        ></polygon>
                    </g>
                </svg>
            </button>
            <div
                class="relative w-full overflow-hidden"
                style="scroll-snap-type: x mandatory"
            >
                <div
                    class="flex transition-transform duration-300 ease-in-out"
                    :style="{
                        transform: `translateX(-${activeProjectIndex * (100 / itemsPerView)}%)`
                    }"
                >
                    <div
                        v-for="project in projects"
                        :key="project.date"
                        :class="[
                            'flex-shrink-0',
                            isMobile ? 'w-full' : 'w-1/3',
                            !isMobile && 'px-2'
                        ]"
                    >
                        <ProjectsCard :project="project" />
                    </div>
                </div>
            </div>
            <button
                class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                @click="showNextProjects"
                :disabled="
                    activeProjectIndex === projects.length - itemsPerView
                "
            >
                <!-- SVG Icon -->
                                 <svg
                    fill="#000000"
                    height="16"
                    width="16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                    <g>
                        <polygon
                            points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3"
                        ></polygon>
                    </g>
                </svg>
            </button>
        </div>
    </section>
</template>
