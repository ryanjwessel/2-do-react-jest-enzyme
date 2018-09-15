import React, { Component } from 'react';
import { render } from 'react-dom';

// STATE METHODS
import {
	toggleCompletion,
	addTask,
	deleteTask,
} from './state';

// COMPONENTS
import AddTask from './components/AddTask.jsx';
import Task from './components/Task.jsx';

// STYLES
import './styles/main.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
		};

		this.addTask = this.addTask.bind(this);
	}

	toggleCompletion(id) {
		this.setState(toggleCompletion(this.state, id));
	}
	
	addTask(task) {
		this.setState(addTask(this.state, task));
	}

	deleteTask(id) {
		this.setState(deleteTask(this.state, id));
	}

	renderTasks() {
		return this.state.tasks.map((task) => {
			return (
				<Task
					key={task.id}
					task={task}
					finishTask={(id) => this.toggleCompletion(id)}
					deleteTask={(id) => this.deleteTask(id)}
				/>
			);
		});
	}

	render() {
		return(
			<div className="container-fluid container">
				<div className="row center-xs">
					<div className="col-xs-12">
						<h1>2-DO</h1>
					</div>
				</div>
				<AddTask handleNewTask={ (task) => this.addTask(task) } />
				<hr />
				<div className="row task-list">
					{ this.renderTasks() }
				</div>
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById('root')
);