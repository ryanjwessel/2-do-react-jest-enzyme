import Task from '../src/components/Task.jsx';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

test('TaskComponent calls finishTask when task is clicked', () => {
	const task = { id: 1, done: false, name: 'Sample Task' };
	const finishTask = jest.fn();
	const wrapper = shallow(
		<Task task={task} finishTask={finishTask} />
	);

	const button = wrapper.find('.toggle-btn');
	button.simulate('click');
	expect(finishTask).toBeCalledWith(1);
});

test('TaskComponent calls updateTask when edit button is clicked', () => {
	const task = { id: 1, done: false, name: 'Sample Task' };
	const updateTask = jest.fn();
	const wrapper = shallow(
		<Task task={task} updateTask={updateTask} />
	);

	expect(wrapper.state().editable).toEqual(false);
	const button = wrapper.find('.edit-task');
	button.simulate('click');
	expect(wrapper.state().editable).toEqual(true);
});

test('TaskComponent calls deleteTask when delete button is clicked', () => {
	const task = { id: 1, done: false, name: 'Sample Task' };
	const deleteTask = jest.fn();
	const wrapper = shallow(
		<Task task={task} deleteTask={deleteTask} />
	);

	const button = wrapper.find('.delete-task');
	button.simulate('click');
	expect(deleteTask).toBeCalledWith(1);
});
