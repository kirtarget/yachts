import express from "express"

import countrySchema from "./Schema/CountrySchema.js"

import yachtSchema from "./Schema/YachtSchema.js"
import locationsSchema from "./Schema/LocationsSchema.js"
import axios from "axios"
import regionSchema from "./Schema/RegionSchema.js"

export const getDB = function () {
  console.log("Fetching Data")

  // Options for requests
  const user = {
    username: "rest232@TTTTT",
    password: "5bTXJF82",
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }

  ///////////////

  // Yachts

  axios
    .post(
      "http://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachts/102701",
      user
    )

    .then((response) => {
      response.data.yachts.map(async (yacht) => {
        let yachts = new yachtSchema(yacht)
        const data = await yachtSchema.findOne({ id: yacht.id }).exec()
        if (data) return

        yachts.save()
      })
    })
    .then(console.log("1. Yacts done"))
    .catch("Some Error occured in yacts")

  // Locations
  axios
    .post(
      "http://ws.nausys.com/CBMS-external/rest/catalogue/v6/locations",
      user
    )

    .then((response) => {
      response.data.locations.map(async (loc) => {
        let locations = new locationsSchema(loc)
        const data = await locationsSchema.findOne({ id: loc.id }).exec()
        if (data) return

        locations.save()
      })
    })
    .then(console.log("2. Locations done"))
    .catch("Some Error occured in locations")

  // Countries
  axios
    .post(
      "http://ws.nausys.com/CBMS-external/rest/catalogue/v6/countries",
      user
    )
    .then((response) => {
      response.data.countries.map(async (loc) => {
        let country = new countrySchema(loc)
        const data = await countrySchema.findOne({ id: loc.id }).exec()
        if (data) return

        country.save()
      })
    })
    .then(console.log("3. Countries done"))
    .catch("Some Error occured in Countries")

  // Regions
  axios
    .post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/regions", user)
    .then((response) => {
      response.data.regions.map(async (loc) => {
        let region = new regionSchema(loc)
        const data = await regionSchema.findOne({ id: loc.id }).exec()
        if (data) return

        region.save()
      })
    })
    .then(console.log("4. Regions done"))
    .catch("Some Error occured in Regions")

  // EquipmentCategory
}
///////////////////////////
