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
			dispatch(hideLoading())

			if (error !== null) {
				dispatch(showError(error.message))
			}
		})
	}
}

export const removeTodo = id => {
	return dispatch => {
		dispatch(showLoading())

		db.ref(`/todos/${id}`).remove((error) => {
			dispatch(hideLoading())

			if (error !== null) {
				dispatch(showError(error.message))
			}
		})
	}
}

export const toggleTodo = (id) => {
	return dispatch => {
		dispatch(showLoading())

		db.ref(`/todos/${id}`).transaction(currentData => {
			if (currentData !== null) {
				return {
					...currentData,
					complete: !currentData.complete
				}
			}
		}, (error, _committed, _snapshot) => {
			dispatch(hideLoading())

			if (error) {
				dispatch(showError(error.message))
			}
		})
	}
}

export const cleanup = () => {
	todos.off()
}
