// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //根组件

// 全局配置
import './modules/config'
import './components/commons/component'
import store from './store'
import router from './router'


/* eslint-disable */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})

