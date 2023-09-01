import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/categories'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/categories'
      },
      {
        path: 'menu',
        component: () => import('@/views/MenuItems.vue'),
        name: 'menu'
      },
      {
        path: 'categories',
        component: () => import('@/views/MenuCategories.vue'),
        name: 'categories'
      },
      {
        path: 'selections',
        component: () => import('@/views/MenuSelections.vue'),
        name: 'selections'
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
