import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import Listing from '../Listing/Listing';
import styles from './styles.module.css';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='heading'>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places} onClick={this.props.getPlacesDetail} />
      </div>
    );
  }
}

export default Sidebar;
