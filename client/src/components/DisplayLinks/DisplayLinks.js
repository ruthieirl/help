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
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/signup" className="nav-link">
						Sign Up
					</Link>
				</li>
			</ul>
		)
	}
}

export default DisplayLinks