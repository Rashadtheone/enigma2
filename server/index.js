const express = require ("express");
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const cors = require ("cors");
const routesUrls = require ("./routes/routes");


const app = express()

//Basic connection to MongoDb
//Configure env file to connect to db safely
dotenv.config()

mongoose.connect(process.env.DATA_ACCESS, () => console.log("Database Connected")) 

//base route for routes folder 
app.use(express.json())
app.use("/app", routesUrls)


// allows you to communicate with front end
app.use(cors()) 


//shows Active listening port
app.listen(3001, () => {
    console.log("Connected on port 3001")
})