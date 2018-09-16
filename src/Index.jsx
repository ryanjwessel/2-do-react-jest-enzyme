import React, { Component } from 'react';
import { render } from 'react-dom';

// STATE METHODS
import {
	toggleCompletion,
	addTask,
	updateTask,
	deleteTask,
} from './state';

// COMPONENTS
import TaskEditor from './components/TaskEditor.jsx';
import TaskList from './components/TaskList.jsx';

// STYLES
import './styles/main.scss';

class App extends Component {
	constructor(props) {
		super(props);

		// Parse the tasks stored in localStorage. If there are any use that as the App state, otherwise return an empty array for tasks.
		const persistedState = JSON.parse(localStorage.getItem('state'));
		const constructorState = (persistedState) ? persistedState : { tasks: [] };
		this.state = constructorState;

		this.toggleCompletion = this.toggleCompletion.bind(this);
		this.addTask = this.addTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	toggleCompletion(id) {
		this.setState(toggleCompletion(this.state, id));
	}
	
	addTask(task) {
		this.setState(addTask(this.state, task));
	}

	updateTask(task) {
		this.setState(updateTask(this.state, task));
	}

	deleteTask(id) {
		this.setState(deleteTask(this.state, id));
	}

	render() {
		return (
			<div className="container-fluid container">
				<div className="row center-xs">
					<div className="col-xs-12">
						<h1>2-DO</h1>
					</div>
				</div>
				<hr />
				<TaskEditor
					actionLabel="Add"
					handleNewTask={ (task) => this.addTask(task) }
				/>
				<TaskList
					tasks={ this.state.tasks }
					updateTask={ (task) => this.updateTask(task) }
					finishTask={ (id) => this.toggleCompletion(id) }
					deleteTask={ (id) => this.deleteTask(id) }
				/>
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById('root')
);