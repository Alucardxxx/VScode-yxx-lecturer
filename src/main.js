import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

const router = new VueRouter({
    routes,
    mode:'history',
    
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})



