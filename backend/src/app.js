const express = require('express');
const authRoutes = require('./routes/auth.route.js')
const foodRoutes = require('./routes/food.route.js')
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World this is reels applicaiton for zomato");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);


module.exports = app;