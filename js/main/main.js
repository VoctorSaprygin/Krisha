import Vue from 'vue'
import {i18n} from './lang/lang'

const app = new Vue({
    i18n,
    el: '#app',
    render: h => h(App)
  }).$mount('#app')