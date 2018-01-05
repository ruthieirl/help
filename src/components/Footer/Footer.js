import React from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className={styles.bottombar}>
        <Link to="/"><h2>Help. Copyright 2017.</h2></Link>
        <ul>
            <li>
                <Link to="https://github.com/ruthieirl/help"><h3>Github</h3></Link>
            </li>
            |
            <li>
                <Link to="https://github.com/ruthieirl/help/issues"><h3>Issues</h3></Link>
            </li>
            |
            <li>
                <Link to="/"><h3>Contact</h3></Link>
            </li>
        </ul>
      </div>
    )
  }
}

export default Footer