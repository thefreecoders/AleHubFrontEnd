import React from "react";

import ListBeer from './List/ListBeer.jsx';
// <AddBrewer />


export default class Beer extends React.Component {
  componentDidMount () {
    
  }
  render () {
    return (
      <div>
        <ListBeer/>
      </div>
    )
  }
}
