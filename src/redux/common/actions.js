import { HIDE_LOADING, SHOW_ERROR, SHOW_LOADING } from './types'

export const showLoading = () => {
	return {
		type: SHOW_LOADING
	}
}

export const hideLoading = () => {
	return {
		type: HIDE_LOADING
	}
}

export const showError = error => {
	return {
		type: SHOW_ERROR,
		payload: error
	}
}
