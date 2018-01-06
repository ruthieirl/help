// in src/views/Main/Container.js
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

export class Container extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <Map
          google={this.props.google} />
        <Footer />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)