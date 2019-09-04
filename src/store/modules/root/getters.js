import UserPresenter from '../../../presenters/UserPresenter'

export default {
	currentUser (state) {
		return new UserPresenter(state.profile || {})
	},

	notifications (state) {
		return state.notifications || []
	}
}
