import yachtSchema from "./Data/Schema/YachtSchema.js"
import locationsSchema from "./Data/Schema/LocationsSchema.js"
import countrySchema from "./Data/Schema/CountrySchema.js"
import regionSchema from "./Data/Schema/RegionSchema.js"

export const getYachts = async (req, res) => {
  try {
    const yachts = await yachtSchema.find()
    res.send(yachts)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось загрузить список",
    })
  }
}

export const getCountries = async (req, res) => {
  try {
    const country = await countrySchema.find()

    res.send(country)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось загрузить список",
    })
  }
}

export const getRegions = async (req, res) => {
  try {
    const region = await regionSchema.find()

    res.send(region)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось загрузить список",
    })
  }
}

export const getLocations = async (req, res) => {
  try {
    const locations = await locationsSchema.find()

    res.send(locations)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось загрузить список",
    })
  }
}

export const getLocationsById = async (req, res) => {
  try {
    const location = await locationsSchema.find({ id: req.params.id })

    res.send(location)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось загрузить список",
    })
  }
}
