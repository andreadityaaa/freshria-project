import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'

// Sidebar
import Dashboard from '@/components/Dashboard.vue'
import RegisterMitra from '@/components/RegisterMitra.vue'

import InputBanner from '@/components/InputBanner.vue'
import TableBanner from '@/components/TableBanner.vue'

import TraceAbility from '@/components/TraceAbility.vue'
import TableTraceAbility from '@/components/TableTraceAbility.vue'

import TableProduk from '@/components/TableProduk.vue'
import InputProduk from '@/components/InputProduk.vue'

import TableTransaksi from '@/components/TableTransaksi.vue'
import TablePembayaran from '@/components/TablePembayaran.vue'

import TableDataLokasi from '@/components/TableDataLokasi.vue'
import InputKabupaten from '@/components/InputKabupaten.vue'
import InputKecamatan from '@/components/InputKecamatan.vue'
import InputKelurahan from '@/components/InputKelurahan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/register-mitra',
        name: 'RegisterMitra',
        component: RegisterMitra
      },
      {
        path: '/input-banner',
        name: 'InputBanner',
        component: InputBanner
      },
      {
        path: '/list-banner',
        name: 'TableBanner',
        component: TableBanner
      },
      {
        path: '/trace-ability',
        name: 'TraceAbility',
        component: TraceAbility
      },
      {
        path: '/list-trace-ability',
        name: 'TableTraceAbility',
        component: TableTraceAbility
      },
      {
        path: '/input-produk',
        name: 'InputProduk',
        component: InputProduk
      },
      {
        path: '/list-produk',
        name: 'TableProduk',
        component: TableProduk
      },
      {
        path: '/list-transaksi',
        name: 'TableTransaksi',
        component: TableTransaksi
      },
      {
        path: '/list-pembayaran',
        name: 'TablePembayaran',
        component: TablePembayaran
      },
      {
        path: '/data-lokasi',
        name: 'TableDataLokasi',
        component: TableDataLokasi
      },
      {
        path: '/input-kabupaten',
        name: 'InputKabupaten',
        component: InputKabupaten
      },
      {
        path: '/input-kecamatan',
        name: 'InputKecamatan',
        component: InputKecamatan
      },
      {
        path: '/input-kelurahan',
        name: 'InputKelurahan',
        component: InputKelurahan
      }
    ]
  },
  {
    path: '/login',
    name: 'Login Page',
    component: LoginPage
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
