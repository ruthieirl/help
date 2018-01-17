import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MapContainer from './components/Map/Map';
import Landing from './components/Landing/Landing';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MapContainer} />
        <Route exact path="/landing" component={Landing} />
        <Route path="/detail/:placeId" component={MapContainer} />
        <Route exact path="/login" render={() => <LoginForm _login={this._login} _googleSignin={this._googleSignin} />}/>
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
