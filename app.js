// (1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const mahasiswaRoutes = require('./routes/mahasiswa')

app.use("/mahasiswa", mahasiswaRoutes)



// (3) koneksi ke mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology: true})
let db = mongoose.connection

//jika error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))

// jika success
db.once('open', () => {
    console.log('Database is Connected');
})

// (2) listen port
app.listen(process.env.PORT, ()=> {
    console.log(`server running on ${process.env.PORT}`);
})