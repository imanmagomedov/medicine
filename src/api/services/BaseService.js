import axios from 'axios'

export default class BaseService {
	constructor(options = {}) {
		axios.defaults.responseType = 'json'
		axios.defaults.withCredentials = true

		axios.defaults = Object.assign(axios.defaults, options)

		this.http = axios
	}

	get(url, variables = {}, options = {}) {
		return this.http.get('https://medicinebegov.ru' + url, {
			params: variables
		}, options)
	}

	post(url, variables = {}, options = {}) {
		return this.http.post('https://medicinebegov.ru' + url, variables, options)
	}

	handleErrors(data) {
		if (data.errors) {
			const error = data.errors[0];

			if (error.level === 'user') {
				throw new Error(error.message)
			}
		}
	}
}
