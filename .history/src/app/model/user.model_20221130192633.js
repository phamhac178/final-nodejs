const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    passWord: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    })
module.exports = mongoose.model('User', User);