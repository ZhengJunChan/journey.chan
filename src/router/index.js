import Vue from 'vue'
import Router from 'vue-router'

import pc from './pc'
// import wap from './wap'

// import { RouterInterceptor } from '@/interceptors'

Vue.use(Router)

let route = [{
  path: '*',
  redirect: '/'
}]

route = route.concat(pc)

const routers = new Router({
  mode: 'history',
  routes: route
})

// 注册路由拦截器
// RouterInterceptor(routers)

export default routers
