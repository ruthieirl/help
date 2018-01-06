// in src/views/Main/Container.js
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelper'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

export class Container extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }
  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Map
          google={this.props.google}
          onReady={this.onReady.bind(this)}
          visible={false}>

          {this.state.places.map(place => {
            return (<div key={place.id}>{place.name}</div>)
          })}

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)