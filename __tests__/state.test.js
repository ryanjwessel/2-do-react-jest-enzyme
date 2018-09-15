import { toggleCompletion, deleteTask } from '../src/state';

test('tooggleDone completes an incomplete task', () => {
	const startState = {
		tasks: [{ id: 1, done: false, text: 'Sample Task' }]
	};

	const finState = toggleCompletion(startState, 1);

	expect(finState.tasks).toEqual([
		{ id: 1, done: true, text: 'Sample Task' }
	]);
});

test('deleteTask deletes the task it is given', () => {
	const startState = {
		tasks: [{ id: 1, done: false, text: 'Sample Task' }]
	};

	const finState = deleteTask(startState, 1);

	expect(finState.tasks).toEqual([]);
});
