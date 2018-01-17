import React from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.module.css';

export class Footer extends React.Component {
  
  render() {
    return (
      <div className="bottombar">
        <Link to="/">
          <p className="footer">
            <i className="fa fa-yelp" aria-hidden="true"></i> HELP! <i className="fa fa-copyright" aria-hidden="true"></i> 2018 
          </p>
        </Link>
      </div>
    )
  }
}

export default Footer;