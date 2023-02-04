<template>
    <div class="container pt-4">
        <header>
            <nav>
                <router-link class="me-1" :to="{name: 'get.index'}">Get</router-link>
                <router-link class="mx-1" :to="{name: 'user.registration'}">Registration</router-link>
                <router-link class="mx-1" :to="{name: 'user.login'}">Login</router-link>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "App.vue"
}
</script>
