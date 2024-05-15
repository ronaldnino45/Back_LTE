const mongoose = require("mongoose");;
require("dotenv").config({path:".env"});

const ConectarDB = async ()=> {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log ("Conexion con mongodb OK"))
    .catch((err) => console.log(err)); 
}


module.exports = ConectarDB;