import React from 'react'

import Listing from '/Listing/Listing'
import styles from './styles.module.css'

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.heading}>
          <h3>{this.props.title}</h3>
        </div>
        <Listing details={this.props.details}/>
      </div>
    )
  }
}

export default Sidebar
