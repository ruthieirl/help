import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  render() {
    const { place } = this.props;
    return (
      <div className='item'>
        <h5>{place.name}</h5>
          <button type="button" className='btn btn-sm btn-info' 
                  onClick={() => this.props.onClick(place.place_id)}> 
                  Info
          </button>
      </div>
    );
  }
}

export default Item;
