import Service from './BaseService'

export default class UserService extends Service {
	constructor () {
		super()
	}

	getUsersPagination () {
		return this.get('/rest/users').then(({ data }) => {
			return data
		})
	}

	deleteUser (userId) {
		return this.get('/rest/users/delete/' + userId).then(({ data }) => {
			return data
		})
	}
}
