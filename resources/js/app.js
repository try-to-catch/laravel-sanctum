import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import App from "./App.vue";
import router from "@/router";

app.component('app', App);

app.use(router)
app.mount('#app');
