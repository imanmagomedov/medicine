import * as types from './types'

import AuthService from '../../../api/services/AuthService'
const authService = new AuthService()

import { hash } from '../../../utils/strings'

export default {
	loadProfile ({ dispatch }) {
		return authService.profile().then((profile) => {
			dispatch('setValue', { name: 'profile', value: profile })
		})
	},

	addNotification({ commit, dispatch }, { text, type = 'info', duration = 5000 }) {
		const id = hash()

		commit(types.ADD_NOTIFICATION, { id, text, type, duration })

		setTimeout(() => {
			dispatch('removeNotification', id)
		}, duration)
	},

	removeNotification ({ commit }, id) {
		commit(types.REMOVE_NOTIFICATION, id)
	},

	setValue ({ commit }, payload) {
		commit(types.SET_VALUE, payload)
	},
}
