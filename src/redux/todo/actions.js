import { SET_TODO } from './types'

export const setTodo = todos => {
	return {
		type: SET_TODO,
		payload: todos
	}
}
