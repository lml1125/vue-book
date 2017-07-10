// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import resource from 'vue-resource'



import mintui from 'mint-ui'
import  'mint-ui/lib/style.css';
import  'mint-ui/lib/index.js';
/*import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'*/

import  './style/style.css';
import './style/font-awesome.css'

//图片预览组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//Vue.use(ElementUI, { locale })

Vue.use(resource)
Vue.use(mintui)

Vue.config.productionTip = false
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
