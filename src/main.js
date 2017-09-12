// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import App from './../src/pages/pc/pc.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#Chan',
  router,
  template: '<App/>',
  components: { App }
})