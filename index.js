const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./dbConfig/connectDB');
const signUpRoute = require('./routes/auth/signupRoute');

const port = process.env.PORT || 4000;


// Routes
app.use("/api/signup", signUpRoute);



app.listen(port, () => {
    console.log('Server Started Successfully');
    console.log(port)
    // connect Database
    connectDB();
})
