import React from 'react'
import Item from 'Item'
import styles from './styles.module.css'
import detail from '../Detail/detail';

export class Listing extends React.Component {
  render() {
    return (
      <div className="container">
          <Item detail={detail} key={place.id} />
      </div>
    )
  }
}

export default Listing
