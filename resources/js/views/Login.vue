<template>
    <form class="w-25 pt-5 mx-auto">
        <input v-model.lazy="email" type="email" class="form-control" placeholder="Email">
        <input v-model.lazy="password" type="password" class="form-control mt-1" placeholder="Password">
        <div v-if="message" class="text-danger">{{ message }}</div>
        <button @click.prevent="login" type="submit" class="btn button btn-primary mt-2 w-100">Login</button>
    </form>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            message: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', this.preparedData)
                        .then((res) => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'personal.index'})
                        })
                        .catch(() => {
                            this.message = 'Wrong email or password'
                        })
                });
        }
    },
    computed: {
        preparedData() {
            return {
                email: this.email,
                password: this.password
            }
        }
    },
}
</script>
