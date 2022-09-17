const express = require ("express");
const mongoose = require ("mongoose")
const cors = require ("cors")


const app = express()

app.use(express.json()) //using express to comunicate with mongodb
app.use(cors()) 

mongoose.connect(
    "mongodb+srv://user1:bacon123@cluster0.6ypzfec.mongodb.net/enigma2?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
})


app.listen(3001, () => {
    console.log("Connected on port 3001")
})