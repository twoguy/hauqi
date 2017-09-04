import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
