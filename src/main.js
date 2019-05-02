import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

let i18n = new VueI18n()

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
