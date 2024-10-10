import { createRouter, createWebHistory } from 'vue-router';

import AboutPage from '../pages/AboutPage.vue';
import NotFound from '../pages/NotFound.vue';
import SignIn from '../pages/SignIn.vue';
import EmergencyKit from '../pages/EmergencyKit.vue'
import ForgotPassword from '../pages/ForgotPassword.vue'
import SignUp from '../pages/SignUp.vue'
import AjoutEquipement from "../pages/AjoutEquipement.vue";
import FicheEquipement from '../pages/FicheEquipement.vue'
const routes = [
 
    {
      path: '/',
      name: 'EmergencyKit',
      component: EmergencyKit
    },    
    {
      path:'/fiche-equipement',
      name:'FicheEquipement',
      component: FicheEquipement
    }, 
    {
      path:'/ajout-equipement',
      name:'AjoutEquipement',
      component: AjoutEquipement
    },   
    {
      path:'/forgotpassord',
      name:'ForgotPassword',
      component: ForgotPassword
    }, 
    {
      path:'/signup',
      name:'SignUp',
      component: SignUp
    },
    {
      path:'/signin',
      name:'SignIn',
      component: SignIn
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