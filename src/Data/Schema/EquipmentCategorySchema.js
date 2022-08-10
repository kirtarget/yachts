import mongoose from "mongoose"

const subSchema = new mongoose.Schema({
  textEN: String,
  textRU: String,
})

let schema = new mongoose.Schema({
  id: Number,
  name: subSchema,
})

let equipmentCategorySchema = mongoose.model("EquipmentCategory", schema)

export default equipmentCategorySchema
