// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'hUrYR4hH5XExjuf6qHt7TLDhyqM08GYF'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  template: '<App/>',
  components: { App }
})

