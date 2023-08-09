const mongoose = require('mongoose');

const db_uri = process.env.DB_URL;

const connectDB = async () => {
    try {
        const connectedDb = await mongoose.connect(db_uri);
        console.log('Connection DB SUCCESS')
    } catch (err) {
        console.log('connection failed')
    }
}

module.exports = connectDB;