import { db } from '../../firebase';
import { hideLoading, showError, showLoading } from '../common/actions';
import { setTodo as setTodoAction } from './actions';

let todos

export const getTodo = () => {
	return dispatch => {
		dispatch(showLoading())

		todos = db.ref('/todos')
		todos.on('value', snapshot => {
			const data = snapshot.val() || []
			const listTodo = []
			for (const [key, value] of Object.entries(data)) {
				listTodo.push({
					id: key,
					...value
				})
			}
			dispatch(hideLoading())
			dispatch(setTodoAction(listTodo))
		})
	}
}

export const addTodo = todo => {
	return dispatch => {
		if (!todo.trim().length) return

		dispatch(showLoading())

		const time = Date.now()
		db.ref(`/todos/${time}`).set({
			todo: todo,
			complete: false
		}, (error) => {
			if (error == null) {
				dispatch(hideLoading())
			} else {
				dispatch(showError(error.message))
			}
		})
	}
}

export const removeTodo = id => {
	return dispatch => {
		dispatch(showLoading())

		db.ref(`/todos/${id}`).remove((error) => {
			if (error == null) {
				dispatch(hideLoading())
			} else {
				dispatch(showError(error.message))
			}
		})
	}
}

export const toggleTodo = (id, isComplete) => {
	return dispatch => {
		dispatch(showLoading())

		db.ref(`/todos/${id}`).update({
			complete: isComplete
		}, (error) => {
			if (error == null) {
				dispatch(hideLoading())
			} else {
				dispatch(showError(error.message))
			}
		})
	}
}

export const cleanup = () => {
	todos.off()
}
