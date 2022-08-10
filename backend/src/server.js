import express from "express"
import mongoose from "mongoose"
import { getDB } from "./Data/data.js"
import path from "path"
import cors from "cors"
import {
  getYachts,
  getLocations,
  getCountries,
  getRegions,
  getLocationsById,
} from "./routes.js"

///////////////////////////////////////
// Set Up
const port = 3100
const __dirname = path.resolve()
// Подключение к БД
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.5zy4l.mongodb.net/yacht?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok!"))
  .then(() => {
    app.listen(port, (err) => {
      if (err) return console.log(err)
      console.log("Server OK on  port " + port)
    })
  })
  .catch((err) => console.log("DB not ok", err))

// Обновление БД
getDB()
setInterval(getDB, 36000000)

// Подключение Express
const app = express()
app.use(express.json())
app.use(cors())
// Роуты

app.get("/api/yachts", getYachts)
app.get("/api/country", getCountries)
app.get("/api/region", getRegions)
app.get("/api/locations", getLocations)
app.get("/api/locations/:id", getLocationsById)
app.get("*", function (req, res) {
  res.sendFile(
    // path.join(__dirname, "../../yachts
    "/frontend/build/index.html"
  ),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
})

// Запуск сервака

////////////////////////////////////
