import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from 'google-maps-react';
import axios from 'axios';
import { searchNearby } from '../../utils/googleApiHelpers';

import styles from './styles.module.css';

// MOCK MARKER, CREATE AS NEEDED
const AnyReactComponent = (props) => <img src={props.src} style={{width: '20px'}}/>;

export class MapContainer extends Component {
  state = {
    places: [],
    center: {},
    zoom: 11
  };

  // in case browser can't find your location (change this to be local)
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  componentDidMount() {
    this.getPosition();
  }

  // USE HTML5 API TO GET BROWSER LOCATION
  getPosition = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          center: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
        this.getPlacesList();
      });
    }
  };

  // HIT OUR API TO PASS PARAMS INTO PLACES SEARCH (add more params for keywords or just hard code them)
  getPlacesList = () => {
    console.log('this hit');
    axios.get(`/api/places/${this.state.center.lat}/${this.state.center.lng}`).then(res => {
      console.log(res.data.results);
      this.setState({
        places: res.data.results
      });
    });
  };



  render() {
    console.log(this.state);
    return (
      <div className="mapCont">
        <div style={{ minWidth: '100vh', height: '100vh' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBLGby-UMhLuPgAHOhojCWjg75EJAC6M3k',
              language: 'en'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            {this.state.places ? this.state.places.map(place => 
              <AnyReactComponent lat={place.geometry.location.lat} lng={place.geometry.location.lng} src={place.icon} />
            )
          : '' 
        }
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapContainer;
