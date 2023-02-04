import {createWebHistory, createRouter} from "vue-router";


const routes = [
    {
        name: 'get.index',
        component: () => import('./views/Get.vue'),
        path: '/get'
    },
    {
        name: 'user.login',
        component: () => import('./views/Login.vue'),
        path: '/user/login'
    },
    {
        name: 'user.registration',
        component: () => import('./views/Registration.vue'),
        path: '/user/sign-up'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
