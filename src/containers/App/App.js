import React, { PropTypes } from 'react';
import { Route, IndexRoute, Switch, BrowserRouter as Router } from 'react-router-dom'
import Container from '../../views/Main/Container'

import Map from '../../views/Main/Map/Map'
import Detail from '../../views/Main/Detail/Detail'
import LoginForm from '../../components/Login/LoginForm'
import SignupForm from '../../components/Signup/SignupForm'
import Header from '../../components/Header/Header'
class App extends React.Component {
  
  render () {
     return (
       <div style={{ height: '100%' }}>
         <Router>
           <Switch>
             <Route path="/" component={Container}>

               <Route path="/detail/:placeId" component={Detail} />
               <Route exact path="/login" render={() => <LoginForm _login={this._login} _googleSignin={this._googleSignin} />} />
               <Route exact path="/signup" component={SignupForm} />
               <IndexRoute path="map" component={Map} />
             </Route>
           </Switch>
         </Router>
       </div>
     )
   }
}

export default App;
