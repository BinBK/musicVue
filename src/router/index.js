import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/musicListDetail/:id',
    name: 'musicListDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/MusicListDetail.vue')
  },
  {
    path: '/singerDetail/:id',
    name: 'singerDetail',
    component: () => import('../views/singer/SingerDetail.vue')
  },
  {
    path: '/rankingList',
    name: 'rankingList',
    component: () => import(/* webpackChunkName: "about" */ '../views/rankingList/rankingList.vue')
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import(/* webpackChunkName: "about" */ '../views/singer/singer.vue')
  },
  {
    path: '/songSheet',
    name: 'songSheet',
    component: () => import(/* webpackChunkName: "about" */ '../views/songSheet/songSheet.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "Active"
})

export default router
