import Presenter from './BasePresenter'

export default class BaseParamsPresenter extends Presenter {
	constructor(attributes = {}) {
		super(attributes)
	}

	/**
	 * Обработчик параметра типа "флаг"
	 *
	 * @param {*} value
	 * @param {* | string} positiveFallback
	 * @param {* | string} negativeFallback
	 * @param {* | string} undefinedFallback
	 * @return {* | string}
	 */
	flagParam(value, positiveFallback = 'Да', negativeFallback = 'Нет', undefinedFallback = 'Не указано') {
		if (value === null || value === undefined) {
			return undefinedFallback
		}

		return value ? positiveFallback : negativeFallback
	}
}
