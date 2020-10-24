import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './types'

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: todo
	}
}

export const editTodo = id => {
	return {
		type: EDIT_TODO,
		payload: id
	}
}

export const removeTodo = id => {
	return {
		type: REMOVE_TODO,
		payload: id
	}
}

export const toggleTodo = id => {
	return {
		type: TOGGLE_TODO,
		payload: id
	}
}