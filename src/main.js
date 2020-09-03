import Vue from 'vue';
import jQuery from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import 'boxicons';

window.$ = jQuery;
window.jQuery = jQuery;

require('@/helpers/generalHelpers.js');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
