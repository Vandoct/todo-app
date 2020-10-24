import { HIDE_LOADING, SHOW_LOADING } from "./types";

const initialState = {
	isLoading: false
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
		default: return state
	}
}

export default reducer