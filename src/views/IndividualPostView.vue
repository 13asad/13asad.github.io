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
    <div class="post-content prose lg:prose-xl mx-auto">
        <div class="output" v-html="markedToRender"></div>
    </div>
</template>

<style scoped>
.post-content {
    padding: 20px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

.output {
    width: 100%; 
    max-width: 100%;
    box-sizing: border-box;
}

.prose {
    color: #333;
}

.prose h1 {
    color: #1a202c;
    font-weight: 700;
}

.prose h2 {
    color: #2d3748;
    font-weight: 600;
}

.prose a {
    color: #3182ce;
    text-decoration: underline;
    transition: color 0.3s;
}

.prose a:hover {
    color: #2b6cb0;
}

.prose code {
    color: #e53e3e;
    background-color: #f7fafc;
    padding: 2px 4px;
    border-radius: 4px;
}

.prose blockquote {
    border-left: 4px solid #cbd5e0;
    padding-left: 1em;
    color: #718096;
    font-style: italic;
}

.prose ul {
    list-style-type: disc;
    padding-left: 1.5em;
}

.prose ol {
    list-style-type: decimal;
    padding-left: 1.5em;
}

.prose img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1em 0;
}

.prose pre {
    background-color: #f7fafc;
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
}

.prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
}

.prose th, .prose td {
    border: 1px solid #e2e8f0;
    padding: 0.5em 1em;
}

.prose th {
    background-color: #edf2f7;
    font-weight: bold;
}
</style>