import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const InputTodo = () => {
	const [todo, setTodo] = useState('')
	const { handleAdd } = useContext(AppContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		handleAdd(todo)
		setTodo('')
	}

	return (
		<div className="w-full max-w-md mx-auto mt-20">
			<form className="bg-gray-700 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
				<div className="flex items-center">
					<input
						className="shadow appearance-none border rounded w-full mr-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="todo"
						placeholder="What needs to be done?"
						value={todo}
						onChange={e => setTodo(e.target.value)} />
					<button
						className="flex-shrink-0 bg-teal-700 hover:bg-teal-900 border-teal-700 hover:border-teal-900 text-sm border-4 text-white py-1 px-2 rounded"
						type="submit">
						Add
					</button>
				</div>
			</form>
		</div>
	)
}

export default InputTodo