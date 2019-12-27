import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
import Vfilters from '@/filters/filters';
import './assets/css/index.css'
import './permission.ts'
import './utils/rem.ts'
for (const key in Vfilters) {
  Vue.filter(key, Vfilters[key]);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
