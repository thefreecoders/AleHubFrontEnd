module.exports = {
  "Beer_Model": {
      "Name": {"type": String, "required": true},
      "Ibu": Number,
      "Abv": Number,
      "Brewer": {"type": String, "required": true},
      "Description": String,
      "LogoPath": String,
      "BeerId": Number,
      "DateAdded": Number,
      "Brewer_BrewerId": Number
  },
  "Brewer_Model": {
      "name": {"type": String, "required": true},
      "description": {"type": String, "required": true},
      "GooglePlaceId": String,
      "LogoPath": String,
      "Address": String,
      "Address1": String,
      "City": String,
      "State": String,
      "ZipCode": Number,
      "LastUpdated" Date
      "DateAdded" Date
      "Beers": Array,
      "BusienssAccountId": String,
  },
  "User_Model": {
      "BusienssAccountId": String,
      "username": {"type": String, "required": true},
      "email": {"type": String, "required": true},
      "password": {"type": String, "required": true},
      "PasswordConfirmed": {"type": String, "required": true},
      "firstname": {"type": String, "required": true},
      "LastName": {"type": String, "required": true},
      "Title": String,
      "JoinDate": Date,
      "reviews": Array,
      "favorites": {
          "places": Array,
          "beers": Array,
          "brewers": Array
      },
      "checkIn": {
          "locations": Array,
          "drinks": Array
      },
      "IsDeleted": Boolean,
      "SocialAuth" {
          "Facebook": String,
          "Twitter": String,
          "Instagram": String,
          "Pintrest": String,
          "GitHub": String
      }
  }
  "Business_User_Model": {
      "BusinessAccountId": {"type": String, "required": true},
      "BarId": String,
      "Bars": Array,
      "BrewerId": String,
      "Brewers": Array,
      "reps": Array
  }
}
