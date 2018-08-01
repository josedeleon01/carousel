import Vue from 'vue'
import App from './App'
import Carousel from './components/Carousel.vue'

Vue.config.productionTip = false
Vue.component('Carousel', Carousel)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
