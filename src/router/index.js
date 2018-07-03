import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/PageIndex';
import Image from '@/components/PageImage';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  }, {
    path: '/about',
    name: 'Weather',
    component: Index,
  }, {
    path: '/contact',
    name: 'Contact',
    component: Index,
  },
  {
    path: '/image',
    name: 'Image',
    component: Image,
  }],
});
