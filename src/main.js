import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
// rem 插件
// import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
