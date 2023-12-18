import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginComponent.vue';
import User from '../components/UserComponent.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/user', component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;