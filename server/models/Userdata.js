const mongoose = require ("mongoose")

const UserDataSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
    },
    UserPassword: {
        type: String, 
        required: true,
    }

})