import TaskEditor from '../src/components/TaskEditor.jsx';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

test('TaskEditor should trigger handleTaskChange when in the adding or editing view', () => {
	// Testing adding a new task
	const addTask = jest.fn();
	const addingEditor = shallow(
		<TaskEditor
			actionLabel="Add"
			handleNewTask={addTask}
		/>
	);
	const addButton = addingEditor.find('.add-task');

	addingEditor.setState({ name: 'Sample Task' });
	addButton.simulate('click');
	expect(addTask).toBeCalledWith(expect.anything());

	// Testing updating an existing task
	const task = { id: 1, done: false, name: 'Sample Task' };
	const updateTask = jest.fn();
	const updatingEditor = shallow(
		<TaskEditor
			task={ task }
			actionLabel="Update"
			handleNewTask={updateTask}
		/>
	);
	const updateButton = updatingEditor.find('.add-task');

	updateButton.simulate('click');
	expect(updateTask).toBeCalledWith(expect.anything());
});
