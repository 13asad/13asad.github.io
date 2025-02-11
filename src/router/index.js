import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectView from '../views/IndividualProjectView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import IndividualPostView from '../views/IndividualPostView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        },
        {
            path: '/post/:id',
            name: 'post',
            component: IndividualPostView
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: NotFoundView
        }
    ]
})

export default router
