import React from 'react'
import {Link} from 'react-router'

import style from './style.module.css';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h2>Help. CopyRight 2017.</h2></Link>
          <ul>
            <li>
              <Link to="https://github.com/ruthieirl/help"><h3>Github</h3></Link>
            </li>
            <li>
              <Link to="https://github.com/ruthieirl/help/issues"><h3>Issues</h3></Link>
            </li>
            <li>
              <Link to="/"><h3>Contact</h3></Link>
            </li>
          </ul>
      </div>
    )
  }
}

export default Footer