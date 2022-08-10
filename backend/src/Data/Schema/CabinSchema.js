import mongoose from "mongoose"

let schema = new mongoose.Schema({
  cabinName: String,
  cabinPosition: String,
  cabinType: String,
  id: Number,
})

let cabinSchema = mongoose.model("Cabin", schema)

export default cabinSchema
