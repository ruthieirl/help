import React from 'react'
import styles from './styles.module.css'

export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {detail} = this.props;
    return (
      <div>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <h3>{detail.name}</h3>
          <p>{detail.formatted_address}</p>
          <p>{detail.formatted_phone_number}</p>
          <p>{detail.website}</p>
            <button type="submit" class="btn btn-info"> Save Info</button>
        </li>
      </div>
    )
  }
}

export default Item
