import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/sys/users',
        name: 'users',
        component: () => import('../views/users')
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('../views/roles')
      },
      {
        path: '/sys/menus',
        name: 'menus',
        component: () => import('../views/menus')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
