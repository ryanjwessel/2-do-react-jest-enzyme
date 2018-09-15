import Task from '../src/components/Task.jsx';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

test('TaskComponent calls doneChange when task is clicked', () => {
	const task = { id: 1, done: false, name: 'Sample Task' };
	const finishTask = jest.fn();
	const wrapper = mount(
		<Task task={task} finishTask={finishTask} />
	);

	const p = wrapper.find('.toggle-task');
	p.simulate('click');
	expect(finishTask).toBeCalledWith(1);
});
