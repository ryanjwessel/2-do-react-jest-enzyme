import {
	toggleCompletion,
	addTask,
	updateTask,
	deleteTask,
} from '../src/state';

test('toggleCompletion completes an incomplete task', () => {
	const startState = {
		tasks: [{ id: 1, done: false, name: 'Sample Task', description: 'A random task' }]
	};

	const finState = toggleCompletion(startState, 1);

	expect(finState.tasks).toEqual([
		{ id: 1, done: true, name: 'Sample Task', description: 'A random task' }
	]);
});

test('addTask adds a task as it was inputted by the user', () => {
	const startState = {
		tasks: [{ id: 1, done: false, name: 'Sample Task', description: 'A random task' }]
	};

	const finState = addTask(startState, {
		name: 'Second Task',
		description: 'A second task',
	}, 2);

	expect(finState.tasks).toEqual([
		{ id: 1, done: false, name: 'Sample Task', description: 'A random task' },
		{ id: 2, done: false, name: 'Second Task', description: 'A second task' }
	]);
});

test('updateTask updates a task as it was inputted by the user', () => {
	const startState = {
		tasks: [{ id: 1, done: false, name: 'Sample Task', description: 'A random task' }]
	};

	const finState = updateTask(startState, {
		id: 1,
		name: 'Renamed Task',
		description: 'With a new description',
	});

	expect(finState.tasks).toEqual([
		{ id: 1, done: false, name: 'Renamed Task', description: 'With a new description' }
	]);
});

test('deleteTask deletes the task it is given', () => {
	const startState = {
		tasks: [{ id: 1, done: false, name: 'Sample Task', description: 'A random task' }]
	};

	const finState = deleteTask(startState, 1);

	expect(finState.tasks).toEqual([]);
});
