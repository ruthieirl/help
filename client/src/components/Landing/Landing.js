import React, { Component } from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        
        <header className="Landing-header">
          <h1>WELP!</h1>
          <h3>What seems to be your emergency?</h3>
            <div className="col-sm-6 offset-sm-3">
              <input className="form-control controls text-center" id="pac-input" type="text" placeholder="Your Emergency"></input>
              <button type="button" className="btn btn-block search-btn"><i className="fa fa-search" aria-hidden="true"></i> SEARCH</button>
            </div> 
        </header>
        
        <div className="container">
          
          <div className="row">
          
            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>ROADSIDE<br/> ASSISTANCE </h3>
                  <i className="fa fa-tachometer fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
        
            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>GAS STATION </h3>
                  <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>DIRECTIONS </h3>
                  <i className="fa fa-street-view fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>LOCKSMITH </h3>
                  <i className="fa fa-key fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>MEDICAL CARE </h3>
                  <i className="fa fa-hospital-o fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 text-center"> 
              <div className="icon-box">
                <Link to="#" className="iconbtn">
                  <h3>POLICE </h3>
                  <i className="fa fa-taxi fa-3x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

          </div>
        
        </div>
      
      </div> 
    );
  }
}

export default Landing;