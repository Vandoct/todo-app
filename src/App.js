import React, { useContext } from 'react';
import InputTodo from './components/todo/InputTodo';
import ListTodo from './components/todo/ListTodo';
import { AppContext } from './context/AppContext';

const App = () => {
	const { data } = useContext(AppContext)

	return (
		<div className="mx-auto h-screen bg-gray-800">
			<div className="grid grid-flow-row">
				<InputTodo />
				<ListTodo data={data} />
			</div>
		</div>
	);
}

export default App;
