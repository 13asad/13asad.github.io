<script setup>
import PostCard from '@/components/PostCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Props
const props = defineProps({
    posts: {
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
const activePostIndex = ref(0)

const showNextPosts = () => {
    if (activePostIndex.value < props.posts.length - itemsPerView.value) {
        activePostIndex.value++
    }
}

const showPreviousPosts = () => {
    if (activePostIndex.value > 0) {
        activePostIndex.value--
    }
}
</script>

<template>
    <section class="mb-6 md:mb-12">
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold">Recent Posts</h2>
            <div class="flex space-x-2">
                <button
                    class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                    @click="showPreviousPosts"
                    :disabled="activePostIndex === 0"
                    aria-label="Show Previous Posts"
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
                    @click="showNextPosts"
                    :disabled="activePostIndex === posts.length - itemsPerView"
                    aria-label="Show Next Posts"
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
                    transform: `translateX(-${activePostIndex * (100 / itemsPerView)}%)`
                }"
            >
                <!-- Post Cards; Loop through postData.json -->
                <div
                    v-for="post in posts"
                    :key="post.date"
                    :class="[
                        'flex-shrink-0',
                        itemsPerView === 1 ? 'w-full' : 'w-72',
                        itemsPerView !== 1 && 'px-2'
                    ]"
                >
                    <PostCard :post="post" />
                </div>
            </div>
        </div>
    </section>
</template>
