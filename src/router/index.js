import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import User from '@/components/User'
import Login from '@/components/Login'
import Purchase from '@/components/Purchase'
import Cashroute from '@/components/Cashroute'
import Project from '@/components/Project'
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/cashroute',
      name: 'Cashroute',
      component: Cashroute
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    }

  ]
})
