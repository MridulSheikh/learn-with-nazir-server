const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors")
const app = require("./app")

// database connection

mongoose.connect(process.env.ATLAS_CONECTION).then(()=>{
    console.log(`Database connection is successfull`.red.bold)
})

//server
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`App is runnig on port ${port}`)
})