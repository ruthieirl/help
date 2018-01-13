import React from 'react'
import {Link} from 'react-router'
import DisplayLinks from '../DisplayLinks/DisplayLinks'

import styles from './styles.module.css';

export class Header extends React.Component {
  
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to="/"><h1>Help</h1></Link>
        <section>
          <DisplayLinks />
        </section>
      </div>
    )
  }
}

export default Header
