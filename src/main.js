/**
 * 入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  // components: {
  //   App
  // }
  render: h => h(App),
  /**
   * 结果：多了route-link、router-view标签
   * 多了两个属性$router、$route
  */
  router
})