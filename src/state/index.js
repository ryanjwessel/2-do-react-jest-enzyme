import shortid from 'shortid';

export function toggleCompletion(state, id) {
	const tasks = state.tasks.map((task) => {
		if (task.id === id) {
			task.done = !task.done;
		}

		return task;
	});

	const tasksObject = { tasks };
	localStorage.setItem( 'state', JSON.stringify(tasksObject) );
	return tasksObject;
}

export function addTask(state, task) {
	const newTask = Object.assign({}, task, {
		id: shortid.generate(),
		done: false,
	});
	
	const tasksObject = {
		tasks: [
			...state.tasks,
			newTask,
		]
	};
	localStorage.setItem( 'state', JSON.stringify(tasksObject) );
	return tasksObject;
}

export function updateTask(state, task) {
	const tasksObject = {
		tasks: state.tasks.map( (item) => {
			// This is not a match, so return the task as is.
			if(item.id !== task.id) {
				return item;
			}

			// This is a match, return the updated value.
			return {
				...item,
				name: task.name,
				description: task.description,
			};
		} )
	};
	localStorage.setItem( 'state', JSON.stringify(tasksObject) );
	return tasksObject;
}

export function deleteTask(state, id) {
	const tasksObject = {
		tasks: state.tasks.filter((task) => task.id !== id)
	};
	localStorage.setItem( 'state', JSON.stringify(tasksObject) );
	return tasksObject;
}
