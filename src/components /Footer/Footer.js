import React from 'react'
import {Link} from 'react-router'

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Help</h1></Link>
        <section>
          Fullstack.io
        </section>
      </div>
    )
  }
}

export default Footer