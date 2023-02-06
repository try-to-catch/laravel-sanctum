<template>
    <form class="w-25 pt-5 mx-auto">
        <input v-model.lazy="name" type="text" class="form-control" placeholder="Name">
        <input v-model.lazy="email" type="email" class="form-control mt-1" placeholder="Email">
        <input v-model.lazy="password" type="password" class="form-control mt-1" placeholder="Password">
        <input v-model.lazy="passwordConfirmation" type="password" class="form-control mt-1" placeholder="Re-password">
        <div v-if="message" class="text-danger">{{ message }}</div>
        <button @click.prevent="login" type="submit" class="btn button btn-primary mt-2 w-100">Register now</button>
    </form>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            message: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', this.preparedData)
                        .then((res) => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'personal.index'})
                        })
                        .catch(() => {
                            this.message = 'Wrong data'
                        })
                });
        }
    },
    computed: {
        preparedData() {
            return {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation
            }
        }
    },
}
</script>
