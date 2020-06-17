import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chartjs',
    name: 'ChartJs',
    component: function () {
      return import('../components/chartjs.vue')
    }
  },
  {
    path: '/vue-trend-chart',
    name: 'vueTrendChart',
    component: function () {
      return import('../components/vue-trend-chart.vue')
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
