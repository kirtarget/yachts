import mongoose from "mongoose"

let schema = new mongoose.Schema({
  companies: Array,
})

let CCompany = mongoose.model("CCompany", schema)

export default CCompany
