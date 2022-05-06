import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home-view'
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
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/sign-in.component.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/sign-up.component.vue')
    },
    {
      path: '/home-customer',
      name: 'home-customer',
      component: () => import('../customer/pages/home-customer.component.vue')
    },
    {
      path: '/home-mechanic',
      name: 'home-mechanic',
      component: () => import('../mechanic/pages/home-mechanic.component.vue')
    },
    {
      path: '/mechanic-profile',
      name: 'mechanic-profile',
      component: () => import('../mechanic/pages/mechanic-profile.component.vue')
    },
    {
      path:'/appointments-customer',
      name: 'appointments-customer',
      component: () => import('../customer/pages/appointments-customer.component.vue')
    }
  ]
})

export default router
