import $6xORv$express from "express";
import $6xORv$mongoose from "mongoose";
import $6xORv$axios from "axios";






const $36ea94eb24917b8a$var$subSchema = new (0, $6xORv$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $36ea94eb24917b8a$var$schema = new (0, $6xORv$mongoose).Schema({
    id: Number,
    code: String,
    name: $36ea94eb24917b8a$var$subSchema
});
let $36ea94eb24917b8a$var$countrySchema = (0, $6xORv$mongoose).model("Country", $36ea94eb24917b8a$var$schema);
var $36ea94eb24917b8a$export$2e2bcd8739ae039 = $36ea94eb24917b8a$var$countrySchema;



let $405d07b1fa6adf61$var$schema = new (0, $6xORv$mongoose).Schema({
    cabinName: String,
    cabinPosition: String,
    cabinType: String,
    id: Number
});
let $405d07b1fa6adf61$var$cabinSchema = (0, $6xORv$mongoose).model("Cabin", $405d07b1fa6adf61$var$schema);
var $405d07b1fa6adf61$export$2e2bcd8739ae039 = $405d07b1fa6adf61$var$cabinSchema;



let $982f52f9e8bada10$var$schema = new (0, $6xORv$mongoose).Schema({
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
    yachtModelId: Number
});
let $982f52f9e8bada10$var$yachtSchema = (0, $6xORv$mongoose).model("Yacht", $982f52f9e8bada10$var$schema);
var $982f52f9e8bada10$export$2e2bcd8739ae039 = $982f52f9e8bada10$var$yachtSchema;



const $6b661ace786beef0$var$subSchema = new (0, $6xORv$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $6b661ace786beef0$var$schema = new (0, $6xORv$mongoose).Schema({
    id: Number,
    lat: Number,
    lon: Number,
    name: $6b661ace786beef0$var$subSchema,
    regionId: Number
});
let $6b661ace786beef0$var$locationsSchema = (0, $6xORv$mongoose).model("Location", $6b661ace786beef0$var$schema);
var $6b661ace786beef0$export$2e2bcd8739ae039 = $6b661ace786beef0$var$locationsSchema;




const $24bc9e1c92e97b3e$var$subSchema = new (0, $6xORv$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $24bc9e1c92e97b3e$var$schema = new (0, $6xORv$mongoose).Schema({
    id: Number,
    countryId: Number,
    name: $24bc9e1c92e97b3e$var$subSchema
});
let $24bc9e1c92e97b3e$var$regionSchema = (0, $6xORv$mongoose).model("Region", $24bc9e1c92e97b3e$var$schema);
var $24bc9e1c92e97b3e$export$2e2bcd8739ae039 = $24bc9e1c92e97b3e$var$regionSchema;


const $2faef3b8a72d0baa$var$app = (0, $6xORv$express)();
const $2faef3b8a72d0baa$var$PORT = 1111;
const $2faef3b8a72d0baa$export$b079286a3c21acde = function() {
    console.log("Fetching Data");
    // Options for requests
    const user = {
        username: "rest232@TTTTT",
        password: "5bTXJF82"
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    ///////////////
    // Yachts
    (0, $6xORv$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachts/102701", user).then((response)=>{
        response.data.yachts.map(async (yacht)=>{
            let yachts = new (0, $982f52f9e8bada10$export$2e2bcd8739ae039)(yacht);
            const data = await (0, $982f52f9e8bada10$export$2e2bcd8739ae039).findOne({
                id: yacht.id
            }).exec();
            if (data) return;
            yachts.save();
        });
    }).then(console.log("1. Yacts done")).catch("Some Error occured in yacts");
    // Locations
    (0, $6xORv$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/locations", user).then((response)=>{
        response.data.locations.map(async (loc)=>{
            let locations = new (0, $6b661ace786beef0$export$2e2bcd8739ae039)(loc);
            const data = await (0, $6b661ace786beef0$export$2e2bcd8739ae039).findOne({
                id: loc.id
            }).exec();
            if (data) return;
            locations.save();
        });
    }).then(console.log("2. Locations done")).catch("Some Error occured in locations");
    // Countries
    (0, $6xORv$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/countries", user).then((response)=>{
        response.data.countries.map(async (loc)=>{
            let country = new (0, $36ea94eb24917b8a$export$2e2bcd8739ae039)(loc);
            const data = await (0, $36ea94eb24917b8a$export$2e2bcd8739ae039).findOne({
                id: loc.id
            }).exec();
            if (data) return;
            country.save();
        });
    }).then(console.log("3. Countries done")).catch("Some Error occured in Countries");
    // Regions
    (0, $6xORv$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/regions", user).then((response)=>{
        response.data.regions.map(async (loc)=>{
            let region = new (0, $24bc9e1c92e97b3e$export$2e2bcd8739ae039)(loc);
            const data = await (0, $24bc9e1c92e97b3e$export$2e2bcd8739ae039).findOne({
                id: loc.id
            }).exec();
            if (data) return;
            region.save();
        });
    }).then(console.log("4. Regions done")).catch("Some Error occured in Regions");
// EquipmentCategory
} ///////////////////////////
;






const $a08d95e3e0f325f1$export$faf1348ccfe21018 = async (req, res)=>{
    try {
        const yachts = await (0, $982f52f9e8bada10$export$2e2bcd8739ae039).find();
        res.send(yachts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось загрузить список"
        });
    }
};
const $a08d95e3e0f325f1$export$44f7508c6c352cc6 = async (req, res)=>{
    try {
        const country = await (0, $36ea94eb24917b8a$export$2e2bcd8739ae039).find();
        res.send(country);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось загрузить список"
        });
    }
};
const $a08d95e3e0f325f1$export$14682eeac6801e56 = async (req, res)=>{
    try {
        const region = await (0, $24bc9e1c92e97b3e$export$2e2bcd8739ae039).find();
        res.send(region);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось загрузить список"
        });
    }
};
const $a08d95e3e0f325f1$export$c07c686062478869 = async (req, res)=>{
    try {
        const locations = await (0, $6b661ace786beef0$export$2e2bcd8739ae039).find();
        res.send(locations);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось загрузить список"
        });
    }
};
const $a08d95e3e0f325f1$export$7689702b54a32ac7 = async (req, res)=>{
    try {
        const location = await (0, $6b661ace786beef0$export$2e2bcd8739ae039).find({
            id: req.params.id
        });
        res.send(location);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось загрузить список"
        });
    }
};


///////////////////////////////////////
// Set Up
// Подключение к БД
(0, $6xORv$mongoose).connect("mongodb+srv://admin:admin@cluster0.5zy4l.mongodb.net/yacht?retryWrites=true&w=majority").then(()=>console.log("DB ok!")).catch((err)=>console.log("DB not ok", err));
// Обновление БД
(0, $2faef3b8a72d0baa$export$b079286a3c21acde)();
setInterval((0, $2faef3b8a72d0baa$export$b079286a3c21acde), 36000000);
// Подключение Express
const $79881796d07e2293$var$app = (0, $6xORv$express)();
$79881796d07e2293$var$app.use((0, $6xORv$express).json());
// Роуты
$79881796d07e2293$var$app.get("/yachts", (0, $a08d95e3e0f325f1$export$faf1348ccfe21018));
$79881796d07e2293$var$app.get("/", (0, $a08d95e3e0f325f1$export$faf1348ccfe21018));
$79881796d07e2293$var$app.get("/country", (0, $a08d95e3e0f325f1$export$44f7508c6c352cc6));
$79881796d07e2293$var$app.get("/region", (0, $a08d95e3e0f325f1$export$14682eeac6801e56));
$79881796d07e2293$var$app.get("/locations", (0, $a08d95e3e0f325f1$export$c07c686062478869));
$79881796d07e2293$var$app.get("/locations/:id", (0, $a08d95e3e0f325f1$export$7689702b54a32ac7));
// Запуск сервака
$79881796d07e2293$var$app.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("Server OK");
}) ////////////////////////////////////
;


//# sourceMappingURL=index.js.map
