import shortid from 'shortid';

export function toggleCompletion(state, id) {
	const tasks = state.tasks.map((task) => {
		if (task.id === id) {
			task.done = !task.done;
		}

		return task;
	});

	return { tasks };
}

export function addTask(state, task) {
	const newTask = Object.assign({}, task, {
		id: shortid.generate(),
		done: false,
	});
	
	return {
		tasks: [
			...state.tasks,
			newTask,
		]
	};
}

export function deleteTask(state, id) {
	return {
		tasks: state.tasks.filter((task) => task.id !== id)
	};
}
