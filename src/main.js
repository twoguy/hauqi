// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// import vue-awesome-swiper
require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import axios
import axios from 'axios'
Vue.prototype.axios = axios;

// import vuex
import Vuex from 'vuex'

// import fort-awesome
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
