import React, { Fragment } from 'react';
const classNames = require('classnames');

// COMPONENTS
import TaskEditor from './TaskEditor.jsx';

export default class Task extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			editable: false,
		};
	}

	toggleEdit() {
		this.setState( { editable: !this.state.editable } );
	}

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
					{ !this.state.editable ? (
						<Fragment>
							<div className="col-xs-7 col-sm-9">
								<p className="toggle-task" onClick={() => this.toggleDone() }>{ task.name }</p>
								<p className="task-description">{ task.description }</p>
							</div>
							<div className="col-xs-5 col-sm-3">
								<button type="button" className="edit-task" onClick={() => this.toggleEdit() }>Edit</button>
								<button type="button" className="delete-task" onClick={() => this.deleteTask() }>Delete</button>
							</div>
						</Fragment>
					) : (
						<Fragment>
							<TaskEditor
								actionLabel="Update"
								handleNewTask={ (task) => this.addTask(task) }
							/>
						</Fragment>
					) }
					<div className="col-xs-12">
						<hr />
					</div>
				</div>
			</div>
		);
	}
}
