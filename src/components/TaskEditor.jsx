import React, { Component } from 'react';

export default class TaskEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: '',
		};
	}

	onChange( field, event ) {
		this.setState( { [ field ]: event.target.value } );
	}

	addTask() {
		const taskName = this.state.name;
		const taskDescription = this.state.description;

		if(taskName) {
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
						onClick={ () => this.addTask() }
					>
						Add 2-DO
					</button>
				</div>
			</div>
		);
	}
}
