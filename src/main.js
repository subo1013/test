// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'

import Vue from 'vue'
import Cube from 'cube-ui'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css';

import './main.scss'
import Ipt from '@/components/common/input/index.vue'
import Header from '@/components/common/header/index.vue'

Vue.component('v-input', Ipt)
Vue.component('v-header', Header)
Vue.use(Cube)
Vue.use(YDUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
