import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
  count: 0
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  ADD_COUNT(state) {
    state.count++
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  addCount(context) {
    context.commit('ADD_COUNT')
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getCount(state) {
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
