import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AuthToken: ''
  },
  mutations: {
    setAuthToken: (state, payload) => {
      state.AuthToken = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
