const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send("Hello")
})


app.listen(port, () => {
    console.log('Server Started Successfully');
    console.log(port)
})
