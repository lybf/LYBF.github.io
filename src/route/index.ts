import { createRouter, createMemoryHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: () => import('../pages/Blogs.vue'),
        children: [
            {
                path: '',
                name: 'homeblog',
                component: () => import('../pages/blogs/HomeBlog.vue')
            },
            {
                path: '/blog/:title',
                name: 'blog',
                component: () => import('../pages/blogs/Blog.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue')
    }
]
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router