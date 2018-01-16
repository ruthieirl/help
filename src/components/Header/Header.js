import React from 'react'
import {Link} from 'react-router'
import logo from 'media/happy-trash-fire.png';

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
       <img src={logo} alt="Logo" height="70px" width="70px"/>
        <Link className={styles.logo} to="/"><h1>Help</h1></Link>
  
      
        <section>
        <Link className={styles.logo} to="/"><h2>Login</h2></Link>
        |
        <Link className={styles.logo} to="/"><h2>Sign Up</h2></Link>
        </section>
      </div>
    )
  }
}

export default Header
