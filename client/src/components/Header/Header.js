import React from 'react'
import {Link} from 'react-router-dom'
import DisplayLinks from '../DisplayLinks/DisplayLinks'

import styles from './styles.module.css';

export class Header extends React.Component {
  
  render() {
    return (
      <div className="topbar">
        <Link to="/"><h1>HELP!</h1></Link>
        <section>
          <DisplayLinks />
        </section>
      </div>
    )
  }
}

export default Header
