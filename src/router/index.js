import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home'
import Doctor from '@/page/doctor'
import Info from '@/page/info'
import Maintain from '@/page/maintain'
import My from '@/page/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/maintain',
      name: 'maintain',
      component: Maintain
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
