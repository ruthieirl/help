import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.css';

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<ul className="nav">
				<li>
					<Link to="#" className="nav-link" onClick={props._logout}>
						Logout
					</Link>
				</li>
			</ul>
		)
	} else {
		return (
			<ul className="nav">
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						<i className="fa fa-sign-in" aria-hidden="true"></i> Login
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/signup" className="nav-link">
						<i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up
					</Link>
				</li>
			</ul>
		)
	}
}

export default DisplayLinks