/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-08-29 12:07:44
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-08-29 12:37:45
 * @FilePath: /DailyLearning/demo/2022-08/2022-8-29/hello-world/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import route from "./router/router"
Vue.config.productionTip = false

Vue.use(route) 
new Vue({
  // route,
  render: h => h(App),
}).$mount('#app')
