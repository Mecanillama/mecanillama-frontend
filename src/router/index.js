import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: "/about",
      name: 'about',
      component: AboutView
    },
    {
      path: '/home-view',
      name: 'home-view',
      component: () => import('../views/HomeView.vue')
    },
  ]
})

export default router
