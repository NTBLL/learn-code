import Vue from 'vue'
import App from './App'
import router from './router'

// 控制台是否打印vue中的警告等信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
