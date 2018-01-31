import React, { Component } from 'react';
import styles from './styles.module.css'

//import 'bootstrap/dist/css/bootstrap.css';
//import 'font-awesome/css/font-awesome.min.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="Landing-header">
          
          <h1 className="Landing-title">HELP!<br/>What is your EMERGENCY?</h1>
          
          <input type="text"></input>&nbsp;
          <button type="button" className="btn btn-mint">SEARCH</button>

        </header>
        <div className="container">
        <div className="row">
          
          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
                <h3>ROADSIDE<br/> ASSISTANCE </h3>
                <i className="fa fa-tachometer fa-3x" aria-hidden="true"></i>
            </div>
          </div>
        
          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
                <h3>GAS STATION </h3>
                <i className="fa fa-exclamation-triangle fa-3x" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
              <h3>DIRECTIONS </h3>
              <i className="fa fa-street-view fa-3x" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
              <h3>LOCKSMITH </h3>
              <i className="fa fa-key fa-3x" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
              <h3>MEDICAL CARE </h3>
              <i className="fa fa-hospital-o fa-3x" aria-hidden="true"></i>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 text-center"> 
            <div className="icon-box">
              <h3>POLICE </h3>
              <i className="fa fa-taxi fa-3x" aria-hidden="true"></i>
            </div>
          </div>

        </div>
        </div>
      
      </div>
    );
  }
}

export default Landing;