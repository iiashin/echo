import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

import '../src/mock/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
