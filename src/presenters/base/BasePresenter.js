import store from '../../store'

export default class BasePresenter {
	constructor(attributes = {}) {
		this.attributes = attributes
		this.store = store
	}

	/**
	 * Возвращает значение атрибута или значение по умолчанию
	 *
	 * @param {string | string[]} attribute	Имя атрибута
	 * @param {* | null} fallbackValue		Возвращаемое значение по умолчанию
	 * @return {*}
	 */
	get(attribute, fallbackValue = null) {
		if (typeof attribute !== 'string') {
			throw new Error('The argument "attribute" must be string')
		}

		attribute = attribute.split('.')

		let value = this.attributes

		for (let i = 0; i < attribute.length; i++) {
			const key = attribute[i]

			if (typeof value !== 'object' || value === null) {
				value = fallbackValue

				break
			}

			if (!value.hasOwnProperty(key)) {
				value = fallbackValue

				break
			}

			value = value[key]
		}

		return value
	}

	/**
	 * Изменияет значение атрибута на переданное
	 *
	 * @param {string} attribute		Имя атрибута
	 * @param {* | !undefined} value	Новое значение атрибута
	 */
	set(attribute, value) {
		if (typeof attribute !== 'string') {
			throw new Error('The argument "attribute" must be string')
		}

		if (typeof value === 'undefined') {
			throw new Error('The argument "value" does not exists')
		}

		this.attributes[attribute] = value
	}

	/**
	 * @todo Добавить описание
	 * @param {*} payload
	 * @return {*|Promise<any>}
	 */
	dispatch(...payload) {
		return this.store.dispatch(...payload)
	}
}
