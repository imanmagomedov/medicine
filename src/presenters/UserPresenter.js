import Presenter from './base/BasePresenter'
import RolePresenter from './RolePresenter'
import store from '../store'

/**
 * Пользователь
 */
export default class UserPresenter extends Presenter {
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
	 * Фамилия Имя Отчество
	 * @return {string | null}
	 */
	get name() {
		return this.get('name')
	}

	/**
	 * Почтовый ящик пользователя
	 * @return {string | null}
	 */
	get email() {
		return this.get('email')
	}

	/**
	 * Дата создания пользователя
	 * @return {string | null}
	 */
	get createdDate() {
		return this.get('created_at')
	}

	/**
	 * Дата обновления пользователя
	 * @return {string | null}
	 */
	get updatedDate() {
		return this.get('updated_at')
	}
 
	/**
	 * Ссылка на профиль пользователя
	 * @return {string}
	 */
	get profileLink() {
		return `/users/${this.id}/`
	}

	/**
	 * Компании
	 * @return {RolePresenter}
	 */
	get role() {
		return new RolePresenter(this.get('role'))
	}

	/**
	 * Текущий авторизованный пользователь
	 * @return {UserPresenter | function}
	 */
	static get auth() {
		return store.getters.currentUser
	}
}
