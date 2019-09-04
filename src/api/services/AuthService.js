import Service from './BaseService'

export default class AuthService extends Service {
	constructor() {
		super()
	}

	profile() {
		return this.get('/rest/auth').then(({ data }) => {
			return data;
		})
	}
}
