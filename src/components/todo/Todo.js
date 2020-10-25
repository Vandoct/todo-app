import React from 'react'

const Todo = ({ item, onToggle, onRemove }) => {
	const isLineTrough = (item.complete) ? 'line-through text-gray-400' : null

	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="bg-gray-700 text-white hover:bg-gray-600 text-xl font-semibold rounded-lg p-5">
				<div className="grid grid-cols-12">
					<input
						className="col-span-1 self-center"
						type="checkbox"
						checked={item.complete}
						onChange={() => onToggle(item.id, !item.complete)} />
					<p className={`col-span-10 ${isLineTrough}`}>{item.todo}</p>
					<div className="col-span-1">
						<span
							className="col-span-6 mx-auto my-auto text-base text-red-700 hover:text-red-900 cursor-pointer"
							onClick={() => onRemove(item.id)}>
							Remove
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Todo