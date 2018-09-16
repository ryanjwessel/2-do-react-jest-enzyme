import React, { Component } from 'react';

// COMPONENTS
import Task from './Task.jsx';

class TaskList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: 'ALL',
		};
	}

	updateFilter(filter) {
		this.setState({ filter });
	}

	viewableTask(task) {
		const filter = this.state.filter;

		if( filter === 'ALL' ) {
			return true;
		} else if( filter === '2-DO' ) {
			if( !task.done ) {
				return true;
			}
		} else if( filter === 'DONE' ) {
			if( task.done) {
				return true;
			}
		}

		return false;
	}

	render() {
		const filters = [ 'ALL', '2-DO', 'DONE' ];

		return (
			<div className="row task-list-container">
				<div className="col-xs-12">
					<p>Filter Tasks:</p>
					<div className="row around-xs">
						{
							filters.map((label) => {
								return (
									<div key={ label } className="col-xs-4">
										<button
											type="button"
											className={`filter-tasks ${(this.state.filter === label) ? 'active-filter' : '' }`}
											onClick={ () => {
												this.updateFilter(label);
											} }
										>
											{ label }
										</button>
									</div>
								);
							})
						}
					</div>
					<hr />
				</div>
				<div className="col-xs-12">
					<div className="row task-list">
						{
							this.props.tasks.map((task) => {
								if(this.viewableTask(task)) {
									return (
										<Task
											key={task.id}
											task={task}
											finishTask={(id) => this.props.finishTask(id)}
											updateTask={(id) => this.props.updateTask(id)}
											deleteTask={(id) => this.props.deleteTask(id)}
										/>
									);
								}
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default TaskList;
