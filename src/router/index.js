import Vue from 'vue';
import VueRouter from 'vue-router'

import Index from '@/components/Index';
import AddSmoothie from '@/components/AddSmoothie';
Vue.use(VueRouter);



const router = new VueRouter({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'AddSmoothie',
      path: '/add-smoothie',
      component: AddSmoothie
    }
  ],
  mode: 'history'
});

export default router;
