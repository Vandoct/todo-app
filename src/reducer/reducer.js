export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			if (!action.payload.trim().length) {
				return state
			}

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
		case 'TOGGLE_TODO': {
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
		case 'REMOVE_TODO': {
			return {
				...state,
				data: state.data.filter(item => item.id !== action.payload)
			}
		}
		default: throw new Error('no matching action type');
	}
}