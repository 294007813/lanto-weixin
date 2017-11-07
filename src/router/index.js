import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'
import Home from '@/page/home'
import Doctor from '@/page/doctor'
import Info from '@/page/info'
import Maintain from '@/page/maintain'
import My from '@/page/my'
import Login from '@/page/login'
import Register from '@/page/register'
import CarList from '@/page/carlist'
import RecordList from '@/page/recordlist'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index, children: [
      {path: '/home', name: 'home', alias: '', component: Home},
      {path: '/doctor', name: 'doctor', component: Doctor},
      {path: '/info', name: 'info', component: Info},
      {path: '/maintain', name: 'maintain', component: Maintain},
      {path: '/my', name: 'my', component: My, meta: { requiresAuth: true }}
    ]},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/carlist', name: 'carlist', component: CarList, meta: { requiresAuth: true }},
    {path: '/recordlist', name: 'recordlist', component: RecordList, meta: { requiresAuth: true }}


  ]
})
