const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Biography = new Schema({
    name: {
        type: String,
    },
    Date: {
        type: String,
    },
    nationality: {
        type: String,
    },
    stageName: {
        type: String,
    },
    ngheNghiep: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
    },
    videoID: {
        type: String,
    }
},
{
    timestamps: true,
})
module.exports = mongoose.model('Biography', Biography);