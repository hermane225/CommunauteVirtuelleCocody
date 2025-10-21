import { createRouter, createWebHistory } from 'vue-router'
import pageAccuiel from '@/components/pageAccuiel.vue'
import testPage from '@/components/testPage.vue'
import contacPage from '@/components/contacPage.vue'
import bureauPage from '@/components/bureauPage.vue'

import formPage from '@/components/formPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'testPage',
      component: testPage,
    },

    {
      path: '/page',
      name: 'pageaccuiel',
      component: pageAccuiel,
    },
    {
      path: '/contacPage',
      name: 'contacPage',
      component: contacPage,
    },

    {
      path: '/bureauPage',
      name: 'bureauPage',
      component: bureauPage,
    },

    {
      path: '/formePage',
      name: 'formePage',
      component: formPage,
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
