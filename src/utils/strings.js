/**
 * Создаёт строку, создержащую рандомную последовательность латинских букв и цифр, заданной длины
 * @param {number} length
 * @return {string}
 */
export function hash(length = 32) {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	let text = ''

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}

	return text
}