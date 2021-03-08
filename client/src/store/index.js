import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import client from '@/client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kabupaten: [],
    kecamatan: [],
    kelurahan: [],
    banner: [],
    user: []
  },
  mutations: {
    setKabupaten (state, payload) {
      state.kabupaten = payload
    },
    setKecamatan (state, payload) {
      state.kecamatan = payload
    },
    setKelurahan (state, payload) {
      state.kelurahan = payload
    },
    setBanner (state, payload) {
      state.banner = payload
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    fetchKabupaten (context) {
      axios({
        url: 'https://x.rajaapi.com/MeP7c5neVqvBVauIhTH4HzbUPAabE8E3LEtJqbv5BTT0Jj9jOpSC7UlRQd/m/wilayah/kabupaten?idpropinsi=53',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setKabupaten', data.data)
          console.log(data.data, '<<< ini dataaa')
        })
        .catch(err => {
          throw err
        })
    },
    async fetchUser (context) {
      const { data } = await client
        .view('allMember')
        .readRows()
        .toPromise()
      context.commit('setUser', data.nodes)
    },
    async fetchBanner (context) {
      const { data } = await client
        .view('allBanner')
        .readRows()
        .toPromise()
      context.commit('setBanner', data.nodes)
    }
  },
  modules: {
  }
})
