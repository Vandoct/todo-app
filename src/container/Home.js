import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/loading/Loading';
import InputTodo from '../components/todo/InputTodo';
import ListTodo from '../components/todo/ListTodo';
import { addTodo, removeTodo, toggleTodo } from '../redux';

const Home = () => {
	const isLoading = useSelector(state => state.commonReducer.isLoading)
	const data = useSelector(state => state.todoReducer.data)
	const dispatch = useDispatch()

	const handleSubmit = todo => {
		dispatch(addTodo(todo))
	}

	const handleToggle = id => {
		dispatch(toggleTodo(id))
	}

	const handleRemove = id => {
		dispatch(removeTodo(id))
	}

	return (
		<>
			{isLoading && <Loading />}
			<div className="mx-auto h-screen bg-gray-800">
				<div className="grid grid-flow-row">
					<InputTodo isLoading={isLoading} onSubmit={handleSubmit} />
					<ListTodo data={data} onToggle={handleToggle} onRemove={handleRemove} />
				</div>
			</div>
		</>
	);
}

export default Home;
