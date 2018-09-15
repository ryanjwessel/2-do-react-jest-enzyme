import React from 'react';
const classNames = require('classnames');

export default class Task extends React.Component {
	toggleDone() {
		this.props.finishTask(this.props.task.id);
	}

	deleteTask() {
		this.props.deleteTask(this.props.task.id);
	}

	render() {
		const { task } = this.props;

		const classes = classNames(
			'col-xs-12',
			'task',
			{
				[ `task-${task.id}` ]: task.id,
				'done-task': task.done,
			},
		);

		return (
			<div className={ classes }>
				<div className="row middle-xs between-xs">
					<div className="col-xs-7 col-sm-9">
						<p className="toggle-task" onClick={() => this.toggleDone() }>{ task.name }</p>
					</div>
					<div className="col-xs-5 col-sm-3">
						<button type="button" className="edit-task">Edit</button>
						<button type="button" className="delete-task" onClick={() => this.deleteTask() }>Delete</button>
					</div>
					<div className="col-xs-12">
						<hr />
					</div>
				</div>
			</div>
		);
	}
}
