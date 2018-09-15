import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
	return (
		<div className="row around-xs">
			<div className="col-xs-5">
				<NavLink
					exact to="/"
				>
					Add Task
				</NavLink>
			</div>
			<div className="col-xs-5">
				<NavLink
					to="/tasks"
				>
					View Tasks
				</NavLink>
			</div>
		</div>
	);
}

export default Nav;
