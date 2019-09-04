import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'platform',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('./views/Users.vue')
    },
    {
      path: '*',
      name: 'Error404',
      component: () => import('./views/Error404.vue')
    }
  ]
})
