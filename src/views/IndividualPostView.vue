<script setup>
import { marked } from 'marked'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import posts from '@/data/postData.json'

// Get the route parameters
const route = useRoute()
const postId = route.params.id

// Find the post data
const post = posts.find((p) => p.id === postId)

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
        <div class="post-meta">
            <div>
                <span class="text-gray-500">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" />
                     {{ post.date }}
                </span>
            </div>
            <div>
                <span v-for="tag in post.tags" :key="tag" class="tag">#{{
                    tag
                }}</span>
            </div>
            <div>
                <span
                    v-for="category in post.categories"
                    :key="category"
                    class="category"
                    >{{ category }}</span
                >
            </div>
        </div>
        <div class="output" v-html="markedToRender"></div>
    </div>
</template>

<style scoped>
.post-content {
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

.post-meta {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    align-items: left;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #555;
}

.tag {
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

.category {
    display: inline-block;
    background-color: #e2e8f0;
    color: #2d3748;
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

.prose h1 {
    color: #1f1f1f;
    font-weight: 700;
}

.prose h2 {
    color: #1f1f1f;
    font-weight: 600;
}

.prose h3 {
    color: #1f1f1f;
    font-weight: 600;
}

.prose h4 {
    color: #718096;
    font-weight: 600;
}

.prose h5 {
    color: #718096;
    font-weight: 600;
}

.prose h6 {
    color: #718096;
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
    padding: 1em;
    border-radius: 12px;
    overflow-x: auto;
}

.prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
}

.prose th,
.prose td {
    border: 1px solid #e2e8f0;
    padding: 0.5em 1em;
}

.prose th {
    background-color: #edf2f7;
    font-weight: bold;
}
</style>
