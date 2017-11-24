import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import BaiduMap from 'vue-baidu-map'


import './login.js'
import axios from './myaxios.js'

Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  template: '<App/>',
  components: { App }
})

