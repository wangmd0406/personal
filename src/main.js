// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App';
import Router from 'vue-router'
import router from './router';

Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
