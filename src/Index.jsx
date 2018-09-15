import React, { Component } from 'react';
import { render } from 'react-dom';

// STYLES
import './styles/main.scss';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container-fluid container">
				<div className="row center-xs">
					<div className="col-xs-12">
						<h1>2-DO</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<input type="text" placeholder="Get it done!" />
					</div>
					<div className="col-xs-12">
						<button type="button">Add 2-DO</button>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById('root')
);