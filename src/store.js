
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navOpened: false
  },
  mutations: {
    openNav (state) {
      state.navOpened = true
    },
    closeNav (state) {
      state.navOpened = false
    },
    moveNav (state) {
      state.navOpened = !state.navOpened
    }
  }
})

export default store
