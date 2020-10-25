import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/loading/Loading';
import InputTodo from '../components/todo/InputTodo';
import ListTodo from '../components/todo/ListTodo';
import { addTodo, cleanup, getTodo, removeTodo, toggleTodo } from '../redux';

const Home = () => {
	const { isLoading, error } = useSelector(state => state.commonReducer)
	const data = useSelector(state => state.todoReducer.data)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodo())

		return () => {
			cleanup()
		}
	}, [])

	const handleSubmit = todo => {
		dispatch(addTodo(todo))
	}

	const handleToggle = (id, isComplete) => {
		dispatch(toggleTodo(id, isComplete))
	}

	const handleRemove = id => {
		dispatch(removeTodo(id))
	}

	if (error.length) {
		console.log(error)
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
