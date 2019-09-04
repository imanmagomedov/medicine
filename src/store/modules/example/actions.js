import * as types from './types'

export default {
	setValue({ commit }, payload) {
		commit(types.SET_VALUE, payload)
	}
}
