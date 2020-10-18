import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Todo = ({ item }) => {
	const { handleDone, handleCancel, handleRemove } = useContext(AppContext)

	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="bg-gray-700 text-white hover:bg-gray-600 text-xl font-semibold rounded-lg p-5">
				<div className="grid grid-cols-12">
					<p className={`col-span-10 ${(item.complete) ? 'line-through' : ''}`}>{item.todo}</p>
					<div className="grid grid-flow-col gap-x-3">
						<span
							className={`col-span-6 mx-auto my-auto text-base ${(item.complete) ? 'text-yellow-500 hover:text-yellow-700' : 'text-teal-500 hover:text-teal-700'} cursor-pointer`}
							onClick={() => {
								if (item.complete) {
									handleCancel(item.id)
								} else {
									handleDone(item.id)
								}
							}}>
							{(item.complete) ? 'Cancel' : 'Done'}
						</span>
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