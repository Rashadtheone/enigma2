const mongoose = require ("mongoose")


//this is the user sign up form database object
const UserDataSchema = new mongoose.Schema ({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String, 
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userDate: {
        type: Date, 
        default: Date.now,
    }

})

const Userdata = mongoose.model("userdata", UserDataSchema)
module.exports = Userdata