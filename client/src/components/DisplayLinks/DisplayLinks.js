import React from 'react';
import {Link} from 'react-router-dom';


import styles from './styles.module.css';

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<ul className="nav">
				<li className="nav-item">
					<a target="_blank" href="https://github.com/ruthieirl/help" className="nav-link">
						<i className="fa fa-lg fa-github" aria-hidden="true"></i> Github
					</a>
				</li>
				<li className="nav-item">
					<a target="_blank" href="https://github.com/ruthieirl/help/issues/new" className="nav-link">
						<i className="fa fa-lg fa-exclamation-triangle" aria-hidden="true"></i> Issues
					</a>
				</li>
				<li>
					<Link to="#" className="nav-link" onClick={props._logout}>
						<i className="fa fa-lg fa-space-shuttle" aria-hidden="true"></i> Logout
					</Link>
				</li>
			</ul>
		)
	} else {
		return (
			<ul className="nav">
				<li className="nav-item">
					<Link to="/map" className="nav-link" onClick={props._logout}>
						<i className="fa fa-map-marker" aria-hidden="true"></i> Map
					</Link>
				</li>
				<li className="nav-item">
					<a target="_blank" href="https://github.com/ruthieirl/help" className="nav-link">
						<i className="fa fa-lg fa-github" aria-hidden="true"></i> Github
					</a>
				</li>
				<li className="nav-item">
					<a target="_blank" href="https://github.com/ruthieirl/help/issues/new" className="nav-link">
					<i className="fa fa-lg fa-exclamation-triangle" aria-hidden="true"></i> Issues
					</a>
				</li>
			</ul>
		)
	}
}

export default DisplayLinks