import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import ToastPlugin from 'vue-toast-notification';

const app = createApp(App);

app.use(router);
app.use(ToastPlugin);

app.mount('#app');
