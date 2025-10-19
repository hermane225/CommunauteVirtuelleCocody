import { createRouter, createWebHistory } from 'vue-router'
import pageAccuiel from '@/components/pageAccuiel.vue'
import testPage from '@/components/testPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageaccuiel',
      component: pageAccuiel,
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
