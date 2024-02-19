import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [    
      {
        path: '',
        redirect: '/facts'
      },
      {
        path: '/facts',
        component: () => import('@/views/CatFacts.vue'),

      },
      {
        path: "/fact",
        component: () => import('@/views/FactDetail.vue')
      },
      {
        path: '/favourites',
        component: () => import('@/views/FavouriteFacts.vue')
      },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
