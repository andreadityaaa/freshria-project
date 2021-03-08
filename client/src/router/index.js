import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import DetailProduk from '@/views/DetailProduk.vue'
import ProdukList from '@/views/ProdukList.vue'
import Cart from '@/views/Cart.vue'
import PaymentConfirmation from '@/views/PaymentConfirmation.vue'
import User from '@/views/User.vue'
import DetailOrder from '@/views/DetailOrder.vue'
import OrderList from '@/views/OrderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/detail-produk/:id',
    name: 'DetailProduk',
    component: DetailProduk
  },
  {
    path: '/produk-list',
    name: 'ProdukList',
    component: ProdukList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment-confirmation',
    name: 'PaymentConfirmation',
    component: PaymentConfirmation
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/detail-order',
    name: 'DetailOrder',
    component: DetailOrder
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
