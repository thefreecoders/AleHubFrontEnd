import React from 'react';
//TODO: Change Location
export default class Banner extends React.Component {
  render () {
    return (
      <div>
        <img src="public/img/banner.jpg" alt=""/>
        <h1 className="hidden-xs">
          Find the Barstool with Your Name on It.
          <button className="btn btn-main btn-focus">
            Learn More
          </button>
        </h1>
        <button className="show-xs btn btn-main">
          Learn More
        </button>
      </div>
    )
  }
}
