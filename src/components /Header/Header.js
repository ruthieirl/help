import React from 'react'
import {Link} from 'react-router'

import style from './style.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Help</h1></Link>

        <ul>
            <li>
              <Link to="/"><h3>Login</h3></Link>
            </li>
            |
            <li>
              <Link to="/"><h3>Sign Up</h3></Link>
            </li>
        </ul>
      </div>
    )
  }
}

export default Header