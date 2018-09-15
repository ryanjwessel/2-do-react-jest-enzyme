import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

// STATE METHODS
import {
	toggleCompletion,
	addTask,
	deleteTask,
} from './state';

// COMPONENTS
import Nav from './components/Nav.jsx';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';

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

	render() {
		return (
			<HashRouter>
				<div className="container-fluid container">
					<div className="row center-xs">
						<div className="col-xs-12">
							<h1>2-DO</h1>
						</div>
					</div>
					<Nav />
					<hr />

					<Route exact path="/" render={() => {
						return (
							<AddTask handleNewTask={ (task) => this.addTask(task) } />
						);
					} } />
					<Route path="/tasks" render={() => {
						return (
							<TaskList
								tasks={ this.state.tasks }
								finishTask={ (id) => this.toggleCompletion(id) }
								deleteTask={ (id) => this.deleteTask(id) }
							/>
						);
					} } />

				</div>
			</HashRouter>
		);
	}
}

render(
	<App />,
	document.getElementById('root')
);