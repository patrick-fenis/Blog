//////////////////////////////////////////
////Server Set-Up
/////////////////////////////////////////

// get .env variables
require('dotenv').config()

// pull variables from .env
// if PORT doesn't exist, give default value of 3000
const {MONGOURI, PORT = 3000} = process.env

//import express and create application object
const express = require('express')
const app = express()
// import mongoose
const mongoose = require('mongoose')
// import middleware
const cors = require("cors")
const morgan = require("morgan")

const mainController = require('./controllers/main')



////////////////////////////////////////
/// Middleware
////////////////////////////////////////
// (i think method override isn't necessary for this project)
// const methodOverride = require('method-override')
// app.use(methodOverride('_method'))

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static('public'))

////////////////////////////////////////
/// Controllers
////////////////////////////////////////
app.use("/blogs", mainController)


////////////////////////////////////////
/// Connections
////////////////////////////////////////

const db = mongoose.connection
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
})

db
.on('connected', () => {console.log(`Connected to mongo at ${MONGOURI}`)})
.on('disconnected', () => {console.log('Disconnected')})
.on('error', (err) => {console.log(`${err.message} ... Is mongodb not working?`)})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))