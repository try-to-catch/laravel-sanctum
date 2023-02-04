import {createWebHistory, createRouter} from "vue-router";


const routes = [
    {
        name: 'get.index',
        component: () => import('./views/Get.vue'),
        path: '/get'
    },
    {
        name: 'login',
        component: () => import('./views/Login.vue'),
        path: '/login'
    },
    {
        name: 'registration',
        component: () => import('./views/Registration.vue'),
        path: '/sign-up'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
