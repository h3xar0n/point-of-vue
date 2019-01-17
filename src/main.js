import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header'
import Water from './components/Water'
import Map from './components/Map'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Water', Water)
Vue.component('Map', Map)

new Vue({
  el: '#app',
  render: h => h(App)
})