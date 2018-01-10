import React from 'react';
import {browserHistory, Router, Route, Redirect, IndexRoute} from 'react-router'

import makeMainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path="" component={Container}>
      <Route path="map" component={Map} />
      <Route path="detail/:placeId" component={Detail} />

      <IndexRoute component={Map} />
    </Route>
  )
};

export default makeRoutes;