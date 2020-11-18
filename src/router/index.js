import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../pages/Discover.vue'
import Detail from '../pages/detail.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/discover'},
  {path:'/discover',component:Discover,name:'Discover'},
  {path:'/detail',component:Detail,name:'Detail'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
