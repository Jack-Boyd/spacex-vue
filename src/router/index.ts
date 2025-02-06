import { createRouter, createWebHistory } from 'vue-router';
import RocketsView from '../views/RocketsView.vue';
import RocketDetailView from '../views/RocketDetailView.vue';

const routes = [
  { path: '/', name: 'rockets', component: RocketsView },
  { path: '/rocket/:id', name: 'rocket-detail', component: RocketDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
