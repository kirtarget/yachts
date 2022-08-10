import $iPS4O$express from "express";
import $iPS4O$mongoose from "mongoose";
import $iPS4O$path from "path";
import $iPS4O$axios from "axios";





const $36ea94eb24917b8a$var$subSchema = new (0, $iPS4O$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $36ea94eb24917b8a$var$schema = new (0, $iPS4O$mongoose).Schema({
    id: Number,
    code: String,
    name: $36ea94eb24917b8a$var$subSchema
});
let $36ea94eb24917b8a$var$countrySchema = (0, $iPS4O$mongoose).model("Country", $36ea94eb24917b8a$var$schema);
var $36ea94eb24917b8a$export$2e2bcd8739ae039 = $36ea94eb24917b8a$var$countrySchema;



let $982f52f9e8bada10$var$schema = new (0, $iPS4O$mongoose).Schema({
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
let $982f52f9e8bada10$var$yachtSchema = (0, $iPS4O$mongoose).model("Yacht", $982f52f9e8bada10$var$schema);
var $982f52f9e8bada10$export$2e2bcd8739ae039 = $982f52f9e8bada10$var$yachtSchema;



const $6b661ace786beef0$var$subSchema = new (0, $iPS4O$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $6b661ace786beef0$var$schema = new (0, $iPS4O$mongoose).Schema({
    id: Number,
    lat: Number,
    lon: Number,
    name: $6b661ace786beef0$var$subSchema,
    regionId: Number
});
let $6b661ace786beef0$var$locationsSchema = (0, $iPS4O$mongoose).model("Location", $6b661ace786beef0$var$schema);
var $6b661ace786beef0$export$2e2bcd8739ae039 = $6b661ace786beef0$var$locationsSchema;




const $24bc9e1c92e97b3e$var$subSchema = new (0, $iPS4O$mongoose).Schema({
    textEN: String,
    textRU: String
});
let $24bc9e1c92e97b3e$var$schema = new (0, $iPS4O$mongoose).Schema({
    id: Number,
    countryId: Number,
    name: $24bc9e1c92e97b3e$var$subSchema
});
let $24bc9e1c92e97b3e$var$regionSchema = (0, $iPS4O$mongoose).model("Region", $24bc9e1c92e97b3e$var$schema);
var $24bc9e1c92e97b3e$export$2e2bcd8739ae039 = $24bc9e1c92e97b3e$var$regionSchema;


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
    (0, $iPS4O$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/yachts/102701", user).then((response)=>{
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
    (0, $iPS4O$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/locations", user).then((response)=>{
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
    (0, $iPS4O$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/countries", user).then((response)=>{
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
    (0, $iPS4O$axios).post("http://ws.nausys.com/CBMS-external/rest/catalogue/v6/regions", user).then((response)=>{
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
const $c741cbfe1353d8c3$var$port = 3100;
const $c741cbfe1353d8c3$var$__dirname = (0, $iPS4O$path).resolve();
// Подключение к БД
(0, $iPS4O$mongoose).connect("mongodb+srv://admin:admin@cluster0.5zy4l.mongodb.net/yacht?retryWrites=true&w=majority").then(()=>console.log("DB ok!")).then(()=>{
    $c741cbfe1353d8c3$var$app.listen($c741cbfe1353d8c3$var$port, (err)=>{
        if (err) return console.log(err);
        console.log("Server OK on  port " + $c741cbfe1353d8c3$var$port);
    });
}).catch((err)=>console.log("DB not ok", err));
// Обновление БД
(0, $2faef3b8a72d0baa$export$b079286a3c21acde)();
setInterval((0, $2faef3b8a72d0baa$export$b079286a3c21acde), 36000000);
// Подключение Express
const $c741cbfe1353d8c3$var$app = (0, $iPS4O$express)();
$c741cbfe1353d8c3$var$app.use((0, $iPS4O$express).json());
$c741cbfe1353d8c3$var$app.use((0, $iPS4O$express).static("/build/"));
// Роуты
$c741cbfe1353d8c3$var$app.get("/api/yachts", (0, $a08d95e3e0f325f1$export$faf1348ccfe21018));
$c741cbfe1353d8c3$var$app.get("/api/country", (0, $a08d95e3e0f325f1$export$44f7508c6c352cc6));
$c741cbfe1353d8c3$var$app.get("/api/region", (0, $a08d95e3e0f325f1$export$14682eeac6801e56));
$c741cbfe1353d8c3$var$app.get("/api/locations", (0, $a08d95e3e0f325f1$export$c07c686062478869));
$c741cbfe1353d8c3$var$app.get("/api/locations/:id", (0, $a08d95e3e0f325f1$export$7689702b54a32ac7));
$c741cbfe1353d8c3$var$app.get("*", function(req, res) {
    res.sendFile((0, $iPS4O$path).join($c741cbfe1353d8c3$var$__dirname, "../../yachts/build/index.html"), function(err) {
        if (err) res.status(500).send(err);
    });
}) // Запуск сервака
 ////////////////////////////////////
;


//# sourceMappingURL=index.js.map
