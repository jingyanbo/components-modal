// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rview from '../src/index'
import router from '../src/router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './index.less';
Vue.use(iView);
Vue.use(rview);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
