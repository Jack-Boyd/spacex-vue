import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router); // ✅ Ensure router is used before mounting
app.mount('#app');
