import * as types from './types'

export default {
	[types.SET_VALUE] (state, { name, value }) {
		state[name] = value
	}
}
