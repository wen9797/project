import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui'
import { MessageBox } from 'element-ui'
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'

 
axios.defaults.baseURL ='https://www.liulongbin.top:8888/api/private/v1/'

axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization =window.sessionStorage.getItem('token')
  return config
  
})

Vue.prototype.$http = axios
// Vue.prototype.$message = Message
Vue.use(ElementUI);
Vue.prototype.$confirm = MessageBox.confirm


Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
