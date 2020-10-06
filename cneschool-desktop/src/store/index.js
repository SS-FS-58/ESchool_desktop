import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// import moduleAuth from './auth/moduleAuth.js'
import moduleECommerce from './eCommerce/moduleECommerce.js'
// import broadcaster from './broadcaster'

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    // auth: moduleAuth,
    eCommerce: moduleECommerce
  },
  // plugins: [broadcaster],
  // strict: process.env.NODE_ENV !== 'production'
})
