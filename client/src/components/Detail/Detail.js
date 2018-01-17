import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from 'google-maps-react';
import axios from 'axios';
import { Item } from '../../Listing/Item'; 

export class Detail extends React.Component {

    state = {
        details: {}
    };

    componentDidMount() {
    if (this.props.map) {
        this.getDetails(this.props.map.placeId);
    };

    getDetails = placeId => {
        axios.get(`/api/places/details/${placeId}`).then(res => {
            console.log(res.data.results);
            this.setState({
                details: res.data.results
            });
        });
    };

    render() {
        console.log(this.state);
            return (
                <Item>
                    {this.state.details ? this.state.details.map(detail =>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <h3>{detail.name}</h3>
                                <p>{detail.formatted_address}</p>
                                <p>{detail.formatted_phone_number}</p>
                                <p>{detail.website}</p>
                                <button type="submit" class="btn btn-info"> Save Info</button>
                        </li>
                    )}
                </Item>
            )       
        });
}

export default Detail;