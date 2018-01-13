import React, { PropTypes as T } from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'

import styles from './styles.module.css'

export class Container extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    searchNearby(
      this.props.google,
      map,
      {
        location: map.center,
        radius: '500',
        types: ['garage', 'mechanic', 'body shop']
      }
    ).then((results, pagination) => {
      this.setState({
        places: results,
        pagination
      })
    }).catch((status) => {
      console.log('error fetching nearby', status)
    })
  }

  onMapMove() {}

  onMarkerClick(item) {
    const {push} = this.context.router;
    const {place} = item;
    push(`/map/detail/${place.place_id}`)
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        google: this.props.google,
        places: this.state.places,
        loaded: this.props.loaded,
        router: this.context.router,
        onMove: this.onMapMove.bind(this),
        onMarkerClick: this.onMarkerClick.bind(this),
        zoom: this.props.zoom
      })
    }

    return (
      <Header>
        <Map
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}
          className={styles.wrapper}>
          <div className={styles.content}>
            {children}
          </div>
        </Map>
      </Header>
    )
  }
}

Container.contextTypes = {
  router: T.object
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
