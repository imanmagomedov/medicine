export const initialState = {
	profile: null,
	notifications: []
}

export function createState () {
	return Object.assign({}, initialState)
}
