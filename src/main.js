import Vue from 'vue';
import jQuery from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import 'boxicons';

Vue.config.productionTip = false;
window.$ = jQuery;
window.jQuery = jQuery;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
