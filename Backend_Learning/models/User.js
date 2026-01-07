const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type: String
    },
}, {timestamps: true})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;