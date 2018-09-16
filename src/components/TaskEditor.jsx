import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: '',
		};
	}

	componentDidMount() {
		if(this.props.task) {
			const { name, description } = this.props.task;
		
			if(name) {
				this.setState( {
					name,
					description: (description) ? description : '',
				} );
			}
		}
	}

	onChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

	handleTaskChange() {
		const taskName = this.state.name;
		const taskDescription = this.state.description;

		// If there is an ID, then this is an updating action.
		if(this.props.task) {
			this.props.handleNewTask( {
				name: taskName,
				description: taskDescription,
				id: this.props.task.id,
			} );
		} else if(taskName) { // Otherwise, this is from the adding form. If there is a name in the field, then dispatch the action and clear the fields.
			this.props.handleNewTask( {
				name: taskName,
				description: taskDescription,
			} );

			this.setState( {
				name: '',
				description: '',
			} );
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<input
						type="text"
						placeholder={`${this.props.actionLabel} New Task`}
						value={ this.state.name }
						onChange={ (event) => this.onChange( 'name', event ) } 
					/>
				</div>
				<div className="col-xs-12">
					<textarea
						type="text"
						placeholder={`${this.props.actionLabel} Task Description`}
						value={ this.state.description }
						onChange={ (event) => this.onChange( 'description', event ) } 
					/>
				</div>
				<div className="col-xs-12">
					<button
						type="button"
						className="add-task"
						onClick={ () => this.handleTaskChange() }
					>
						{ this.props.actionLabel } 2-DO
					</button>
				</div>
			</div>
		);
	}
}

TaskEditor.propTypes = {
	task: PropTypes.object,
	handleNewTask: PropTypes.func,
	actionLabel: PropTypes.string,
};

export default TaskEditor;