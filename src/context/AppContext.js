import React, { createContext, useState } from 'react'

const AppContext = createContext()
const { Provider, Consumer } = AppContext
const sampleData = [{
	id: 1,
	todo: 'Do Something Useful!',
	complete: false
}]

const AppProvider = props => {
	const [data, setData] = useState(sampleData)

	const handleAdd = (todo) => {
		setData((prevState) => {
			if (!todo.trim().length) {
				return prevState
			}

			return [...prevState, {
				id: Date.now(),
				todo: todo,
				complete: false
			}]
		})
	}

	const handleDone = (id) => {
		setData((prevState) => {
			return prevState.map(item => {
				if (item.id === id) {
					item.complete = true
				}
				return item
			})
		})
	}

	const handleCancel = (id) => {
		setData((prevState) => {
			return prevState.map(item => {
				if (item.id === id) {
					item.complete = false
				}
				return item
			})
		})
	}

	const handleRemove = (id) => {
		setData((prevState) => {
			return prevState.filter(item => item.id !== id)
		})
	}

	return (
		<Provider value={{ handleAdd, handleDone, handleCancel, handleRemove, data }}>
			{props.children}
		</Provider>
	)
}

export { AppProvider, Consumer, AppContext }