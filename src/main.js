import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'es6-promise/auto'
import store from './store'
import { request } from './network/request'
import './assets/css/css.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.prototype.$request = request;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
