import mongoose from "mongoose"

const subSchema = new mongoose.Schema({
  textEN: String,
  textRU: String,
})

let schema = new mongoose.Schema({
  id: Number,
  code: String,
  name: subSchema,
})

let countrySchema = mongoose.model("Country", schema)

export default countrySchema
