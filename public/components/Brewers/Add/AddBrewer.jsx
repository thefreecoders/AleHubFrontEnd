import React from 'react';



export default class AddBrewer extends React.Component {
  brewersAddSaveFunction () {
    var valueOfInputs = [];
    var idsOfArr = ['brewersAddName', 'brewersAddDecription', 'brewersAddLogo', 'brewersAddStreetAddress', 'brewersAddStreetAddress1', 'brewersAddCity', 'brewersAddState', 'brewersAddZipcode'];
    var beerObject = {
      'name': '6-Row',
      'description': 'German Pilsner',
      'logoPath': 'https://www.motherearthbrewco.com/wp-content/themes/motherearth/images/logo-horizontal.svg',
      'abv': '4.9%',
      'ibu': '37',
      'brewer': 'Mother Earth Brew Co.',
      'bars': [
        {
          "name": "PAON",
          "googlePlaceId": "ChIJoWDQdhBy3IARsa-c9eZot1k",
          "sundayDiscounts": null,
          "mondayDiscounts": null,
          "tuesdayDiscounts": null,
          "wednesdayDiscounts": null,
          "thursdayDiscounts": null,
          "fridayDiscounts": null,
          "saturdayDiscounts": null,
          "number": null,
          "streetName": null,
          "city": null,
          "state": null,
          "zipCode": 0,
        }
      ]
    };
    var getDocument = function(inp) {
      //Using Array to select DOM
      return document.getElementById(inp);
    }
    var getValueOfInput = function(inp) {
      //Getting Value of DOM
      return inp.value;
    }
    var mapValuesToArray = function(cb) {
      //Mapping Values to Array with above Functions
      idsOfArr.map(function(data) {
        let doc = getDocument(data);
        valueOfInputs.push(getValueOfInput(doc));
      })
      // Sending Back Array after Completion
      cb(valueOfInputs)
    }
    var saveValuesToObject = function(inp, cb) {
      //Saving Mapped Array to an Object
      var valuesOfInputObject = {
        'name': inp[0],
        'description': inp[1],
        'logoPath': inp[2],
        'address': inp[3],
        'address1': inp[4],
        'city': inp[5],
        'state': inp[6],
        'zipCode': inp[7],
        beer: beerObject
      }

      //Sending Back Object to send for AJAX call
      cb(valuesOfInputObject)
    }
    // Calling Functions
    mapValuesToArray(function(res) {
      saveValuesToObject(res, function(json) {
        //AJAX Call
        $.ajax({
          url: 'http://alehub.gear.host/api/brewersapi',
          dataType: 'json',
          type: 'POST',
          data: json,
          success: function(data) {
            console.log(data, 'Correct');
          },
          error: function(xhr, status, err) {
            console.log(xhr, status, err, 'SOMETHING IS WRONG');
          }
        })
      })
    })

  }
  render () {
    return (
      <div className="brewersAdd">
        <label>Name:</label>
        <input type="text" id="brewersAddName"  />
        <label>Description:</label>
        <input type="text" id="brewersAddDecription" />
        <label>Logo:</label>
        <input type="text" id="brewersAddLogo" />
        <label>Street Address:</label>
        <input type="text" id="brewersAddStreetAddress" />
        <label>Street Address (Apt/something Else):</label>
        <input type="text" id="brewersAddStreetAddress1" />
        <label>City:</label>
        <input type="text" id="brewersAddCity" />
        <label>State:</label>
        <input type="text" id="brewersAddState" />
        <label>Zipcode:</label>
        <input type="text" id="brewersAddZipcode" />
        <button id="brewersAddSave" className="btn btn-main" onClick={this.brewersAddSaveFunction}>Save</button>
      </div>

    )
  }
}
