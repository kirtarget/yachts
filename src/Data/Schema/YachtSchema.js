import mongoose from "mongoose"

let schema = new mongoose.Schema({
  baseId: Number,
  berthsCabin: Number,
  berthsCrew: Number,
  berthsSalon: Number,
  berthsTotal: Number,
  buildYear: Number,
  cabins: Number,
  cabinsCrew: Number,
  canMakeBookingFixed: Boolean,
  charterType: String,
  checkInPeriods: Array,
  commission: Number,
  companyId: Number,
  deposit: Number,
  depositCurrency: String,
  depositWhenInsured: Number,
  draft: Number,
  engineBuilderId: Number,
  enginePower: Number,
  engines: Number,
  flagsId: Array,
  fourStarCharter: Boolean,

  id: Number,
  internalUse: Boolean,
  locationId: Number,
  mainPictureUrl: String,
  maxPersons: Number,
  name: String,
  needsOptionApproval: Boolean,
  numberOfRudderBlades: Number,
  pictures: Array,
  picturesURL: Array,
  sailTypeId: Number,
  seasonSpecificData: Array,
  standardYachtEquipment: Array,
  waterTank: Number,
  wc: Number,
  wcCrew: Number,
  yachtModelId: Number,
})

let yachtSchema = mongoose.model("Yacht", schema)

export default yachtSchema
