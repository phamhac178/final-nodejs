const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://new-user1:phamhac90@cluster0.flrto.mongodb.net/final?retryWrites=true&w=majority",{useNewUrlParser: true});
    } catch (error) {
        console.log(error); 
    }
}

module.exports = { connect };
