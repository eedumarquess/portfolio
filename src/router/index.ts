import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import AboutMe from '../views/AboutMe.vue';
import Projects from '../views/Projects.vue';
import ContactMe from '../views/ContactMe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact-me',
      name: 'ContactMe',
      component: ContactMe
    }
  ]
})

export default router
