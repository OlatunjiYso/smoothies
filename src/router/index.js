import Vue from 'vue';
import VueRouter from 'vue-router'

import Index from '@/components/Index'
Vue.use(VueRouter);



const router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index
    }
  ],
  mode: 'history'
});

export default router;
