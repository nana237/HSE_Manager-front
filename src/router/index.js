import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import NotFound from '../pages/NotFound.vue';


const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/:pathMatch(.*)*', // Gérer les routes non définies
      name: 'NotFound',
      component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;