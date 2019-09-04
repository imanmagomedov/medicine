import Presenter from './base/BasePresenter'

/**
 * Тип "Пользователь"
 * @type {string}
 */
export const USER_CODE = 'user'

/**
 * Тип "Администратор"
 * @type {string}
 */
export const ADMIN_CODE = 'admin'

/**
 * Роль
 */
export default class RolePresenter extends Presenter {
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
	 * Ссылка на профиль
	 * @return {string}
	 */
	get profileLink() {
		return `/roles/${this.id}/`
	}

	/**
	 * Название
	 * @return {string | null}
	 */
	get name() {
		return this.get('name')
	}

	/**
	 * Код
	 * @return {string}
	 */
	get code() {
		return this.get('code')
	}
}
