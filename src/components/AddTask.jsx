import React, { Component } from 'react';

export default class AddTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};
	}

	onChange(event) {
		this.setState( { value: event.target.value } );
	}

	addTask() {
		const taskName = this.state.value;

		if(taskName) {
			this.props.handleNewTask( { name: taskName } );

			this.setState( { value: '' } );
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<input
						type="text"
						placeholder="Get it done!"
						value={ this.state.value }
						onChange={ (event) => this.onChange(event) } 
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
