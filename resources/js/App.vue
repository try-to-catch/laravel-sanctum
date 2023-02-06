<template>
    <div class="container pt-4">
        <header>
            <nav>
                <router-link v-if="isAuth" class="me-1" :to="{name: 'get.index'}">Get</router-link>
                <router-link class="mx-1" :to="{name: 'personal.index'}">Personal</router-link>
                <router-link v-if="!isAuth" class="mx-1" :to="{name: 'user.register'}">Registration</router-link>
                <router-link v-if="!isAuth" class="mx-1" :to="{name: 'user.login'}">Login</router-link>
                <a v-if="isAuth" @click.prevent="logout" href="#">Logout</a>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return {
            isAuth: false
        }
    },
    computed: {
      currentRoute(){
          return this.$route.name
      }
    },
    methods: {
        logout(){
            axios.post('/logout')
                .then(res => {
                localStorage.removeItem('x_xsrf_token')
                this.$router.push({ name: 'user.login'})
            })
        },
        authCheck(){
            this.isAuth = Boolean(localStorage.getItem('x_xsrf_token'))
        }
    },
    watch:{
        currentRoute(){
            this.authCheck()
            // console.log(1)
        }
    },
}
</script>
