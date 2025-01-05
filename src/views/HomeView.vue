<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import PostCard from '@/components/PostCard.vue'
import Projects from '@/components/Projects.vue'
import posts from '@/data/postData.json'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

// Sort posts by date in descending order
posts.sort((a, b) => new Date(b.date) - new Date(a.date))

// Get the 6 most recent posts
const recentPosts = computed(() => posts.slice(0, 6))

// Track our current index
const activeIndex = ref(0)

// Detect if viewport is mobile
const isMobile = ref(false)
function handleResize() {
    isMobile.value = window.innerWidth < 768
}
onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

// Dynamically set posts per view
const postsPerView = computed(() => (isMobile.value ? 1 : 3))

// Navigate to the next set of posts
const showNextPosts = () => {
    if (activeIndex.value < recentPosts.value.length - postsPerView.value) {
        activeIndex.value++
    }
}

// Navigate to the previous set of posts
const showPreviousPosts = () => {
    if (activeIndex.value > 0) {
        activeIndex.value--
    }
}
</script>

<template>
    <HelloWorld />
    <section class="mb-6 md:mb-12">
        <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
        <div class="flex items-center space-x-2 md:space-x-4 overflow-x-hidden">
            <!-- Previous Button (shown on all devices, smaller for mobile) -->
            <button
                class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                @click="showPreviousPosts"
                :disabled="activeIndex === 0"
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
            <!-- Posts Wrapper -->
            <div
                class="relative w-full overflow-hidden"
                style="scroll-snap-type: x mandatory"
            >
                <div
                    class="flex transition-transform duration-300 ease-in-out"
                    :style="{
                        transform: `translateX(-${activeIndex * (100 / postsPerView)}%)`
                    }"
                >
                    <div
                        v-for="post in recentPosts"
                        :key="post.date"
                        :class="[
                            'flex-shrink-0',
                            isMobile ? 'w-full' : 'w-1/3',
                            !isMobile && 'px-2'
                        ]"
                    >
                        <PostCard :post="post" />
                    </div>
                </div>
            </div>
            <!-- Next Button (shown on all devices, smaller for mobile) -->
            <button
                class="px-2 py-1 text-sm md:px-2 md:py-2 md:text-base text-white rounded disabled:opacity-50"
                @click="showNextPosts"
                :disabled="activeIndex === recentPosts.length - postsPerView"
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
    </section>
    <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Recent Projects</h2>
        <Projects />
    </section>
</template>
