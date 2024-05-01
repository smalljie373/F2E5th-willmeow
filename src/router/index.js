import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import DonateView from '@/views/DonateView.vue'
import IntroView from '@/views/IntroView.vue'
import NewsView from '@/views/NewsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: '/donate',
          name: 'donate',
          component: DonateView
        },
        {
          path: '/intro',
          name: 'intro',
          component: IntroView
        },
        {
          path: '/news',
          name: 'news',
          component: NewsView
        }
      ]
    }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
