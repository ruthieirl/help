import ReactDOM from 'react-dom'

import React from 'react'


import 'font-awesome/css/font-awesome.css'
import './app.css'

import App from './containers/App/App'


const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App />,
mountNode);
