const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo DB connected: ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Database Error: ${error}`)
    }
}

module.exports = connectDB;