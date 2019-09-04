import * as types from './types'

export default {
	[types.SET_VALUE] (state, { name, value }) {
		state[name] = value
	},

	[types.ADD_NOTIFICATION] (state, payload) {
		let entities = [...state.notifications]

		entities.unshift(payload)

		state.notifications = [...entities]
	},

	[types.REMOVE_NOTIFICATION] (state, id) {
		let entities = [...state.notifications]

		entities = entities.filter((row) => row.id !== id)

		state.notifications = [...entities]
	}
}
