import React from 'react';

import Banner from './Banner/Banner.jsx';

import AppStore from './../../stores/AppStore.js'

export default class Homepage extends React.Component {
  render () {
    console.log(AppStore.getState())
    return (
      <div className="banner">
        <Banner />
      </div>
    )
  }
}
