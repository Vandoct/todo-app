import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types";

const initialState = {
	data: [
		{
			id: 1,
			todo: 'Do Something Useful!!',
			complete: false
		}
	]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				data: [
					...state.data,
					{
						id: Date.now(),
						todo: action.payload,
						complete: false
					}
				]
			}
		}
		case EDIT_TODO: {
			return {
				...state,
				data: state.data.map(item => {
					if (item.id === action.payload) {
						item.complete = !item.complete
					}
					return item
				})
			}
		}
		case REMOVE_TODO: {
			return {
				...state,
				data: state.data.filter(item => item.id !== action.payload)
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				data: state.data.map(item => {
					if (item.id === action.payload) {
						item.complete = !item.complete
					}
					return item
				})
			}
		}
		default: return state
	}
}

export default reducer