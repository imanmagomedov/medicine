import UserPresenter from '../../../presenters/UserPresenter'

export default {
    data (state) {
		return state.data.map((user) => {
            return new UserPresenter(user)
        })
	},
}
