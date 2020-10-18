import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Todo = ({ item }) => {
	const { handleToggle, handleRemove } = useContext(AppContext)

	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="bg-gray-700 text-white hover:bg-gray-600 text-xl font-semibold rounded-lg p-5">
				<div className="grid grid-cols-12">
					<input
						className="col-span-1 self-center"
						type="checkbox"
						checked={item.complete}
						onChange={() => handleToggle(item.id, !item.complete)} />
					<p className={`col-span-10 ${(item.complete) ? 'line-through text-gray-400' : ''}`}>{item.todo}</p>
					<div className="col-span-1">
						<span
							className="col-span-6 mx-auto my-auto text-base text-red-700 hover:text-red-900 cursor-pointer"
							onClick={() => handleRemove(item.id)}>
							Remove
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Todo