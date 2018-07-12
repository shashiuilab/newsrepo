import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { store } from './store'

export const EventBus = new Vue();
Vue.use(VueResource)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
