const mongoose = require('mongoose')

const MONGODBURI = process.env.MONGODB_URI


async function connectToDatabases() {
    try {
        await mongoose.connect(MONGODBURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Success when connection to mongoDB")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = { connectToDatabases }