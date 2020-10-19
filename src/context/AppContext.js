import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer'

const AppContext = createContext()
const { Provider, Consumer } = AppContext
const sampleData = {
	data: [
		{
			id: 1,
			todo: 'Do Something Useful!!',
			complete: false
		}
	]
}

const AppProvider = props => {
	const [state, dispatch] = useReducer(reducer, sampleData)

	return (
		<Provider value={{ state, dispatch }}>
			{props.children}
		</Provider>
	)
}

export { AppProvider, Consumer, AppContext }
