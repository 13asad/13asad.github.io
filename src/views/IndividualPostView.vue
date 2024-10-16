<script setup>
import { marked } from 'marked'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Get the route parameters
const route = useRoute()
const postId = route.params.id

// Load the Markdown content for the post
const input = ref('')

onMounted(() => {
    const fetchPostContent = async () => {
        try {
            const response = await fetch(`/data/posts/${postId}.md`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const text = await response.text()
            input.value = text
        } catch (error) {
            input.value = '# Error\n\nFailed to load the post content.'
            console.error('Failed to fetch post content:', error)
        }
    }

    fetchPostContent()
})

const markedToRender = computed(() => {
    return marked(input.value)
})
</script>

<template>
    <div class="post-content prose">
        <div class="output" v-html="markedToRender"></div>
    </div>
</template>

<style>
.post-content {
  padding: 20px;
}

.output {
  font-family: 'Arial', sans-serif;
}

code {
  color: #f66;
}
</style>