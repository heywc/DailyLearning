/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-03-14 14:11:08
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-04-03 15:59:15
 * @FilePath: /DailyLearning/demo/2023/todo-demo/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/virtualList',
    name: 'virtualListt',
    component: () => import(/* webpackChunkName: "virtualList" */ '../views/VirtualList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
