import React, { useEffect } from 'react';
import Home from './container/Home';

const App = () => {

	useEffect(() => {
		// Once
		// db.ref('/todos').once('value').then(snapshot => {
		// 	console.log(snapshot.val());
		// })

		// Listen
		// const todos = db.ref('/todos')
		// todos.on('value', snapshot => {
		// 	const data = snapshot.val()
		// 	for (const [key, value] of Object.entries(data)) {
		// 		console.log(key, value);
		// 	}
		// })

		// Detaching listener
		// todos.off()

		// Create with auto generated UID
		// db.ref('/todos').push({
		// 	id: Date.now(),
		// 	todo: 'Do Something!',
		// 	complete: false
		// })

		// Create with custom UID
		// db.ref(`/todos/{ID}}`).set({
		// 	todo: 'Do Something!',
		// 	complete: false
		// })

		// Edit
		// db.ref('/todos/{ID}').set({
		// 	id: Date.now(),
		// 	todo: 'Do Something!',
		// 	complete: true
		// })

		// Remove
		// db.ref('/todos/{ID}').remove()
	}, [])

	return (
		<Home />
	);
}

export default App;
