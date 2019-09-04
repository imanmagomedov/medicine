import Presenter from './base/BasePresenter'

/**
 * Тип "ошибка"
 * @type {string}
 */
const TYPE_ERROR = 'error'

/**
 * Тип "успешно"
 * @type {string}
 */
const TYPE_SUCCESS = 'success'

/**
 * Уведомение
 */
export default class NotificationPresenter extends Presenter {
	constructor(attributes) {
		super(attributes)
	}

	/**
	 * Идентификатор
	 * @return {number | null}
	 */
	get id() {
		return this.get('id')
	}

	/**
	 * Сообщение
	 * @return {string | null}
	 */
	get text() {
		return this.get('text')
	}

	/**
	 * Тип
	 * @return {string | null}
	 */
	get type() {
		return this.get('type')
	}

	/**
	 * Тип ошибка (да / нет)
	 * @return {boolean}
	 */
	get isError() {
		return this.type === TYPE_ERROR
	}

	/**
	 * Тип успешно (да / нет)
	 * @return {boolean}
	 */
	get isSuccess() {
		return this.type === TYPE_SUCCESS
	}

	/**
	 * Иконка
	 * @return {string | undefined}
	 */
	get icon() {
		let icon = this.get('icon')

		if (icon) {
			return icon
		}

		if (this.isError) {
			return 'warning'
		}

		if (this.isSuccess) {
			return 'tick-circled'
		}

		return undefined;
	}
}
