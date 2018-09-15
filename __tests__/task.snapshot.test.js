import Task from '../src/components/Task.jsx';
import renderer from 'react-test-renderer';
import React from 'react';

test('Task component renders the task correctly', () => {
	const task = { id: 1, done: false, name: 'Sample Task' };
	const rendered = renderer.create(
		<Task task={task} />
	);
	expect(rendered.toJSON()).toMatchSnapshot();
});
