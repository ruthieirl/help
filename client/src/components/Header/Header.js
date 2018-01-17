import React from 'react'
import {Link} from 'react-router-dom'
import DisplayLinks from '../DisplayLinks/DisplayLinks'
import logo from 'media/happy-trash-fire.png'

import styles from './styles.module.css';

export class Header extends React.Component {
  
  render() {
    return (
      <div className="topbar">
        <img src={logo} alt="Logo" height="70px" width="70px" />
        <Link to="/"><h1><i className="fa fa-yelp" aria-hidden="true"></i> HELP!</h1></Link>
        <section>
          <DisplayLinks />
        </section>
      </div>
    )
  }
}

export default Header
