import * as types from './types'
import UserService from '../../../api/services/UserService'
const userService = new UserService()


export default {
	setValue({ commit }, payload) {
		commit(types.SET_VALUE, payload)
	},

	getUsers ({ dispatch }) {
		return userService.getUsersPagination().then((users) => {
			dispatch('setValue', { name: 'data', value: users.data })
		})
	},

	delete({ dispatch }, userId) {
		return userService.deleteUser(userId).then((data) => {
			if (data) {
				dispatch('getUsers')
			}
		})
	}
}
