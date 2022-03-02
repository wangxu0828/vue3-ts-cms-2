import { createStore } from 'vuex'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      token: ''
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store
