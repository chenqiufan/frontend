import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Connect from '@/components/Connect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Resgiter',
      component: Register
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    }
  ]
})
