import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ContactDetailsView from '../views/ContactDetailsView.vue'
import Statistics from '../views/Statistics.vue'
import ContactEdit from '../views/ContactEdit.vue'
import ContactCreate from '../views/ContactCreate.vue'
import Signup from '../views/Signup.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact-edit/:_id?',
      component: ContactEdit
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/contact-create',
      component: ContactCreate
    },
    
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/contacts',
      component: ContactsView
    },
    {
      path: '/contacts/:_id',
      component: ContactDetailsView
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
