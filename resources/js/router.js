import {createWebHistory, createRouter} from "vue-router";


const routes = [
    {
        name: 'get.index',
        component: () => import('./views/Get.vue'),
        path: '/get'
    },
    {
        name: 'personal.index',
        component: () => import('./views/Personal.vue'),
        path: '/personal'
    },
    {
        name: 'user.login',
        component: () => import('./views/Login.vue'),
        path: '/user/login'
    },
    {
        name: 'user.register',
        component: () => import('./views/Registration.vue'),
        path: '/user/sign-up'
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

const authRoutes = ['get.index']
const guestRoutes = ['user.login', 'user.register']
router.beforeEach((to, from, next) => {
    const nextRoute = to.name
    const token = localStorage.getItem('x_xsrf_token')

    if (token) {
        if (!guestRoutes.includes(nextRoute)) {
            next();
        } else {
            router.push({name: 'personal.index'})
        }
    } else {
        if (!authRoutes.includes(nextRoute)) {
            next();
        } else {
            router.push({name: 'login'})
        }
    }
})
export default router
