import Vue from 'vue'
import App from './App.vue'
import store from './store';
import { MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(MdIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
