import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import router from './router';
import store from './store';
import App from './App';

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
});
