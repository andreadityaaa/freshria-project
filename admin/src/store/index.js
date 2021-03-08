import Vue from 'vue'
import Vuex from 'vuex'
import client from '@/client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mitras: []
  },
  mutations: {
    setMitra (state, payload) {
      state.mitras = payload
    }
  },
  actions: {
    async fetchMitra (context) {
      const { data } = await client
        .view('allMitra')
        .readRows()
        .toPromise()
      context.commit('setMitra', data.nodes)
      // console.log(data, '>>>>>>>>>>>')
    }
  }
})
