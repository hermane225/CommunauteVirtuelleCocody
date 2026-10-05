import { createRouter, createWebHistory } from 'vue-router'
import pageAccuiel from '@/components/pageAccuiel.vue'
import testPage from '@/components/testPage.vue'
import contacPage from '@/components/contacPage.vue'
import bureauPage from '@/components/bureauPage.vue'

import formPage from '@/components/formPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // en changeant de page, on attend la fin de la transition avant de viser l'ancre
      const delay = to.name === from.name ? 0 : 400
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top: 88, behavior: 'smooth' }), delay)
      })
    }
    return { top: 0 }
  },
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
