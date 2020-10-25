import { SET_TODO } from "./types";

const initialState = {
	data: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODO: {
			return {
				...state,
				data: action.payload
			}
		}
		default: return state
	}
}

export default reducer