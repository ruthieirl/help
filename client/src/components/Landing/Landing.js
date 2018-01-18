import React, { Component } from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import logo from '../../media/happy-trash-fire.png'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="Landing-header">
            <h1>HELP!</h1>
              <h3>What seems to be your emergency?</h3>
                <div className="col-sm-6 offset-sm-3">
                  <input className="form-control controls text-center" id="pac-input" type="text" placeholder="Your Emergency"></input>
                    <button type="button" className="btn btn-block search-btn"><i className="fa fa-search" aria-hidden="true"></i> SEARCH</button>
                </div> 
        </header>
      </div>
    );
  }
}

export default Landing;