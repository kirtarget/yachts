import mongoose from "mongoose"

const subSchema = new mongoose.Schema({
  textEN: String,
  textRU: String,
})

let schema = new mongoose.Schema({
  id: Number,
  lat: Number,
  lon: Number,
  name: subSchema,
  regionId: Number,
})

let locationsSchema = mongoose.model("Location", schema)

export default locationsSchema
