import Cookies from 'js-cookie'

export const cookieService = {
	setCookie,
	getCookie,
}

export const MODE_KEY = 'theme'

function setCookie(cookieName, cookieValue) {
	Cookies.set(cookieName, cookieValue)
}

function getCookie(cookieName) {
	let cookieValue = Cookies.get(cookieName)
	if (cookieValue) return cookieValue

	return _getInitTheme()
}

function _getInitTheme() {
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}
