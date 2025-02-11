<!-- ProjectsSection.vue -->
<script setup>
import ProjectsCard from '@/components/ProjectsCard.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
})

const itemsPerView = ref(1) // Start with 1, update on mount

const updateItemsPerView = () => {
    const width = window.innerWidth
    if (width < 640) {
        itemsPerView.value = 1
    } else if (width >= 640 && width < 1024) {
        itemsPerView.value = 2
    } else {
        itemsPerView.value = 4 // Desktop: 4 cards
    }
}

onMounted(() => {
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateItemsPerView)
})

const activeProjectIndex = ref(0) // Corrected variable name

const showNextProjects = () => {
    // Corrected variable name and check
    if (activeProjectIndex.value < props.projects.length - itemsPerView.value) {
        activeProjectIndex.value++
    }
}

const showPreviousProjects = () => {
    // Corrected variable name and check
    if (activeProjectIndex.value > 0) {
        activeProjectIndex.value--
    }
}

// Computed property for visible projects (Corrected variable name)
const visibleProjects = computed(() => {
    const start = activeProjectIndex.value
    const end = Math.min(start + itemsPerView.value, props.projects.length)
    return props.projects.slice(start, end)
})

// Computed property for card width, *including* gap.
const cardWidthWithGap = computed(() => {
    if (itemsPerView.value === 1) {
        return '100%' // Mobile: full width
    }
    const cardWidth = 100 / itemsPerView.value
    return `calc(${cardWidth}% - ${(16 * (itemsPerView.value - 1)) / itemsPerView.value}px)` // Consider the gap.
})
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
                        activeProjectIndex.value >=
                        props.projects.length - itemsPerView.value
                    "
                    aria-label="Show Next Projects"
                >
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
                class="flex transition-transform duration-300 ease-in-out gap-4"
                :style="{
                    transform: `translateX(-${activeProjectIndex * (100 / itemsPerView.value)}%)`
                }"
            >
                <div
                    v-for="(project, index) in visibleProjects"
                    :key="project.id || index"
                    class="flex-shrink-0"
                    :style="{ width: cardWidthWithGap }"
                >
                    <ProjectsCard :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>
