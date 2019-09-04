import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { state as createState, mutations, actions, getters } from './modules/root'
import * as modules from './modules'

export default new Vuex.Store({
	state: createState(),
	actions,
	mutations,
	getters,
	modules
})
