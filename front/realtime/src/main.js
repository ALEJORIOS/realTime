import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import TrendChart from "vue-trend-chart"

Vue.config.productionTip = false
Vue.use(TrendChart);

new Vue({
  router,
  //render: h => h(App)
  render: function (h) { return h(App) }
}).$mount('#app')
