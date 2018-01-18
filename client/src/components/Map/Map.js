import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Sidebar from '../Sidebar/Sidebar';
import Detail from '../Detail/Detail';
import Map from 'google-maps-react';
import axios from 'axios';

import styles from './styles.module.css';

const MARKER_SIZE = 40;
const greatPlaceStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2
};

// MOCK MARKER, CREATE AS NEEDED
const AnyReactComponent = props => <img style={greatPlaceStyle} src={props.src} style={{ width: '20px' }} />;

export class MapContainer extends Component {
  state = {
    places: [],
    center: {},
    zoom: 14,
    selectedPlace: {},
    isPlaceSelected: false
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
    axios.get(`/api/places/${this.state.center.lat}/${this.state.center.lng}`).then(res => {
      console.log(res.data.results);
      this.setState({
        places: res.data.results
      });
    });
  };

  // Get an individual place's info
  getPlacesDetail = placeId => {
    console.log(placeId);
    axios.get(`/api/places/details/${placeId}`).then(res => {
      console.log(res.data);
      // do something with place details
      this.setState({
        selectedPlace: res.data,
        isPlaceSelected: true
      });
    });
  };

  closePlacesDetail = () => {
    this.setState({
      selectedPlace: {},
      isPlaceSelected: false
    });
  };

  // Change markers based on moving the map around
  mapOnChange = ({ center, zoom, bounds, marginBounds }) => {
    console.log(center, zoom, bounds);
    this.setState({
      center
    });
    this.getPlacesList();
  };

  render() {
    console.log(this.state);
    return (
      <div className="row" style={{ minWidth: '100vh', maxHeight: '100vh', minHeight: '100vh', overflow: 'scroll' }}>
        <div className="col-xs-12 col-sm-12 col-md-5">
          <Sidebar places={this.state.places} getPlacesDetail={this.getPlacesDetail} title={'Near you'} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-7">
          {this.state.isPlaceSelected ? (
            <Detail name={this.state.selectedPlace.name} address={this.state.selectedPlace.formatted_address} phone={this.state.selectedPlace.formatted_phone_number} reviews={this.state.selectedPlace.reviews} website={this.state.selectedPlace.website} googleMap={this.state.selectedPlace.url} 
            photos={this.state.selectedPlace.photos}
            closeDetail={this.closePlacesDetail}/>
          ) : (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBLGby-UMhLuPgAHOhojCWjg75EJAC6M3k',
                language: 'en'
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              center={this.state.center}
              zoom={this.state.zoom}
              onChange={this.mapOnChange}
            >
              {this.state.places
                ? this.state.places.map(place => (
                    <AnyReactComponent
                      lat={place.geometry.location.lat}
                      lng={place.geometry.location.lng}
                      src={place.icon}
                    />
                  ))
                : ''}
            </GoogleMapReact>
          )}
        </div>
      </div>
    );
  }
}

export default MapContainer;
