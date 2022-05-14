import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Homepage.vue'
import AboutPage from '@/components/Aboutpage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    }
  ]
})