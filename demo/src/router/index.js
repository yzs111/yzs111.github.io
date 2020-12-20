import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/Home')
const Category = () => import('../views/Category.vue')
const Cart = () => import('../views/Cart.vue')
const login = () => import('../views/denglu/login.vue')

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: login },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/Cart', component: Cart },
        { path: '/Category', component: Category }
      ]
    }
  ]
})

export default router
