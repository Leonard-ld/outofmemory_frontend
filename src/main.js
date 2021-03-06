import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import'@/assets/app.css'
import '@/permission'
import relativeTime from 'dayjs/plugin/relativeTime';
// 国际化
import 'dayjs/locale/zh-cn'
import format from 'date-fns/format'

const dayjs = require('dayjs');

// 相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance

Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Buefy)

Vue.filter('date', (date) => {
  return format(new Date(date), 'yyyy-MM-dd')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
