const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://new-user:phamhac123@cluster0.wd1iiuf.mongodb.net/", { useNewUrlParser: true });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
