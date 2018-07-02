import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header'
import MailchimpForm from './components/MailchimpForm'
import Water from './components/Water'
import Blog from './components/Blog'

Vue.component('Header', Header)
Vue.component('MailchimpForm', MailchimpForm)
Vue.component('Water', Water)
Vue.component('Blog', Blog)

new Vue({
  el: '#app',
  render: h => h(App)
})
