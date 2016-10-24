import React from 'react'

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
          <a href="#" className="navbar-brand">AleHub</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="">Home</a></li>
            <li><a href="">Tap Room</a></li>
            <li><a href="">Beers</a></li>
            <li><a href="">Brewers</a></li>
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
