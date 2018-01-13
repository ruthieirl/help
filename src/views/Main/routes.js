import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Container from './Container'

import Map from './Map/Map'
import Detail from './Detail/Detail'
import LoginForm from 'components/Login/LoginForm'
import SignupForm from 'components/Signup/SignupForm'
import Header from 'components/Header/Header'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      
      <Route path="detail/:placeId" component={Detail} />
      <Route exact path="/login" render={() => <LoginForm _login={this._login} _googleSignin={this._googleSignin} />} />
      <Route exact path="/signup" component={SignupForm} />

      <IndexRoute path="map" component={Map} />
    </Route>
  )
}

export default makeMainRoutes
