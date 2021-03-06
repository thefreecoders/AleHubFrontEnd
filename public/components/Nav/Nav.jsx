import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default" id="navbarFull">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/home"><div className="navbar-brand">AleHub</div></Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/home"><div>Home</div></Link></li>
              <li><a href="">Tap Room</a></li>
              <li><Link to="/beers">Beers</Link></li>
              <li><Link to="/brewers"><div>Brewers</div></Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="">Register</a></li>
              <li><a href="">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
