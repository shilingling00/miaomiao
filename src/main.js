import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios=axios;
Vue.config.productionTip = false;

//滑动
import Scroller from './components/Scroller';
Vue.component('Scroller',Scroller)
//loading
import Loading from '@/components/Loading';
Vue.component('Loading',Loading)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
