import React from 'react';
import Todo from './Todo';

const ListTodo = ({ data }) => (
	<div className="grid grid-rows gap-y-4 mt-10 px-5">
		{
			data.map(item => {
				return <Todo item={item} key={item.id} />
			})
		}
	</div>
)

export default ListTodo