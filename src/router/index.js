import Vue from 'vue';
import VueRouter from 'vue-router'

import Index from '@/components/Index';
import AddSmoothie from '@/components/AddSmoothie';
import EditSmoothie from '@/components/EditSmoothie';
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
    },
    {
      name: 'EditSmoothie',
      path: '/edit-smoothie/:smoothie_slug',
      component: EditSmoothie,
    }
  ],
  mode: 'history'
});

export default router;
