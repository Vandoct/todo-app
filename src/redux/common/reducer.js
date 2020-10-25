import { HIDE_LOADING, SHOW_ERROR, SHOW_LOADING } from "./types";

const initialState = {
	isLoading: false,
	error: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADING: {
			return {
				...state,
				isLoading: true
			}
		}
		case HIDE_LOADING: {
			return {
				...state,
				isLoading: false
			}
		}
		case SHOW_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}
		default: return state
	}
}

export default reducer