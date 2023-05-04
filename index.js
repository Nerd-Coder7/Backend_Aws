const express = require("express");
require("dotenv").config();
const app = express();
const Port = process.env.PORT;
const cors = require("cors");
const morgan = require('morgan');
const home = require("./router/homePage")
const aboutAs = require("./router/aboutAs")
const services = require("./router/services")
const services_detail2= require("./router/services_detail2")
const resources = require("./router/resources")
const industrial_page =require("./router/industrial_page")
const case_studies= require("./router/case_studies")
const case_studiesDetail = require("./router/case_studiesDetail")
app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
const connection = require("./connection/connection")

app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use("/api", home , aboutAs,services,services_detail2,resources,case_studies,industrial_page,case_studiesDetail);


app.listen(Port, () => {
    connection()
    console.log(`http://localhost:${Port}`);
  });