<script setup>
import ProjectsCard from '@/components/ProjectsCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Props
const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
})

// Reactive variable for itemsPerView
const itemsPerView = ref(3)

const updateItemsPerView = () => {
    const width = window.innerWidth
    if (width < 640) {
        // Mobile devices
        itemsPerView.value = 1
    } else if (width >= 640 && width < 1024) {
        // Tablets
        itemsPerView.value = 2
    } else {
        // Desktop and larger
        itemsPerView.value = 3
    }
}

onMounted(() => {
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateItemsPerView)
})

// Navigation Functions
const activeProjectIndex = ref(0)

const showNextProjects = () => {
    if (activeProjectIndex.value < props.projects.length - itemsPerView.value) {
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
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold">Latest Projects</h2>
            <div class="flex space-x-2 md:space-x-4">
                <button
                    class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                    @click="showPreviousProjects"
                    :disabled="activeProjectIndex === 0"
                    aria-label="Show Previous Projects"
                >
                    <!-- Previous SVG Icon -->
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
                <button
                    class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                    @click="showNextProjects"
                    :disabled="
                        activeProjectIndex === projects.length - itemsPerView
                    "
                    aria-label="Show Next Projects"
                >
                    <!-- Next SVG Icon -->
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
        </div>
        <div
            class="relative w-full overflow-x-hidden overflow-y-visible min-h-[17rem] md:min-h-[20rem] md:flex md:items-center"
            style="scroll-snap-type: x mandatory"
        >
            <div
                class="flex transition-transform duration-300 ease-in-out"
                :style="{
                    transform: `translateX(-${activeProjectIndex * (100 / itemsPerView)}%)`
                }"
            >
                <!-- loop through projectData.json -->
                <div
                    v-for="project in projects"
                    :key="project.date"
                    :class="[
                        'flex-shrink-0',
                        itemsPerView === 1 ? 'w-full' : 'w-72',
                        itemsPerView !== 1 && 'px-2'
                    ]"
                >
                    <ProjectsCard :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>
