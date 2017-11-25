import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'
import Home from '@/page/home'
import Doctor from '@/page/doctor'
import InfoList from '@/page/infoList'
import Maintain from '@/page/maintain'
import My from '@/page/my'
import Login from '@/page/login'
import Register from '@/page/register'
import CarList from '@/page/carlist'
import RecordList from '@/page/recordlist'
import VehicleDetail from '@/page/vehicleDetail'
import RepairSearchList from '@/page/repairSearchList'
import Setting from '@/page/setting'
import Suggestion from '@/page/suggestion'
import InfoService from '@/page/infoService'
import Complaint from '@/page/complaint'
import AboutUs from '@/page/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index, children: [
      {path: '/home', name: 'home', alias: '', component: Home},
      {path: '/doctor', name: 'doctor', component: Doctor},
      {path: '/infoService', name: 'infoService', component: InfoService},
      {path: '/maintain', name: 'maintain', component: Maintain},
      {path: '/my', name: 'my', component: My, meta: { requiresAuth: true }}
    ]},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/carlist', name: 'carlist', component: CarList, meta: { requiresAuth: true }},
    {path: '/recordlist', name: 'recordlist', component: RecordList, meta: { requiresAuth: true }},
    {path: '/vehicleDetail', name: 'vehicleDetail', component: VehicleDetail, meta: { requiresAuth: true }},
    {path: '/repairSearchList', name: 'repairSearchList', component: RepairSearchList, meta: { requiresAuth: true }},
    {path: '/setting', name: 'setting', component: Setting, meta: { requiresAuth: true }},
    {path: '/suggestion', name: 'suggestion', component: Suggestion},
    {path: '/infoList', name: 'infoList', component: InfoList},
    {path: '/complaint', name: 'complaint', component: Complaint},
    {path: '/aboutUs', name: 'aboutUs', component: AboutUs}
  ]
})
