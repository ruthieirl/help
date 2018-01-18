import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from 'google-maps-react';
import axios from 'axios';
import Item from '../Listing/Item'; 

export class Detail extends React.Component {


    render() {
            return (
                <div className='container' style={{marginTop: '30px'}}>
                <div className='row'>
                    <div className='col-md-9 col-sm-12'>
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.address}</h4>
                    <p>Call: {this.props.phone} || Website: <a href={this.props.website} target="_blank">{this.props.website}</a> || <a href={this.props.url} target="_blank">View on Google Maps</a>
                    </p>
                    </div>
                    <div className="col-md-3 col-sm-12 text-right">
                        <button className='btn-outline-danger btn-small' onClick={this.props.closeDetail}>X</button>
                    </div>

                </div>
                </div>
            )       
        };
}

export default Detail;