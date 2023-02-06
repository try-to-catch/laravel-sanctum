<template>
    <div>the message: {{ message }}</div>
</template>

<script>
export default {
    name: "Get",
    data(){
        return {
            message: null
        }
    },
    methods: {
        getData(){
            axios.get('/api/get').then(res => {
                this.message = res.data
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>
