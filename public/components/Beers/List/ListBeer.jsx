import React from "react";


export default class ListBeer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: []
    }
  }

  componentDidMount () {
    $.ajax({
      url: 'components/Beers/beers.json',
      error: function(data) {
        console.log("Something Broke?!\n\n", data)
      },
      success: function(data) {
        this.setState({info: data})
      }.bind(this)
    })
  }
  render () {
    console.log(this.state.info)
    var listBeers = this.state.info.map((item) => {
      return (
        <div key={item.BeerId} className="text-center">
          <div className="name field-data">{item.Name}</div>
          <div className="beerBrewer field-data">{item.Brewer}</div>
          <div className="abv field-data">{item.Abv}</div>
          <div className="Ibu field-data">{item.Ibu}</div>
          <div className="Description field-data">{item.Description}</div>
          <img src={item.LogoPath} width="200px" height="200px"/>
        </div>
      )
    })

    return (
      <div>
        {listBeers}
      </div>
    )
  }
}
