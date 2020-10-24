import { hideLoading, showLoading } from '../common/actions';
import { addTodo as addTodoAction, removeTodo as removeTodoAction, toggleTodo as toggleTodoAction } from './actions';

export const addTodo = todo => {
	return dispatch => {
		if (!todo.trim().length) return

		dispatch(showLoading())
		setTimeout(() => {
			dispatch(addTodoAction(todo))
			dispatch(hideLoading())
		}, 1000);
	}
}

export const removeTodo = id => {
	return removeTodoAction(id)
}

export const toggleTodo = id => {
	return toggleTodoAction(id)
}
