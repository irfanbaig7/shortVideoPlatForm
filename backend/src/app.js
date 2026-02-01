const express = require('express');
const authRoutes = require('./routes/auth.route.js')

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World this is reels applicaiton for zomato");
})

app.use('/api/auth', authRoutes);

module.exports = app;