import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutStyleGude from '@/layouts/LayoutStyleGude.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutDefault,
      children: [
        {
          path: '/home-page',
          name: 'homepage',
          component: HomeView,
        },
      ],
    },
    {
      path: '/style-guide',
      component: LayoutStyleGude,
    },
  ],
})

export default router
