import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'
import notebook from './modules/notebook'
import trash from './modules/trash'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notebook,
    note,
    trash,
    user
  }
})
