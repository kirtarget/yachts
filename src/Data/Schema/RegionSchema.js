import mongoose from "mongoose"

const subSchema = new mongoose.Schema({
  textEN: String,
  textRU: String,
})

let schema = new mongoose.Schema({
  id: Number,
  countryId: Number,
  name: subSchema,
})

let regionSchema = mongoose.model("Region", schema)

export default regionSchema
