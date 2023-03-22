//////////////////////////////////////////
////Server Set-Up
/////////////////////////////////////////

// get .env variables
require('dotenv').config()

// pull variables from .env
// if PORT doesn't exist, give default value of 3000
const {mongoURI, PORT = 3000} = process.env

//import express and create application object
const express = require('express')
const app = express()
// import mongoose
const mongoose = require('mongoose')
// import middleware
const cors = require("cors")
const morgan = require("morgan")

// import 

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

/////////////////////////////
/// Controllers
/////////////////////////////



////////////////////////////////////////
/// Routes 
////////////////////////////////////////

// test route
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// GET - BLOG INDEX
// app.get("/blogs", (req, res) => {
//   // boilerplate for blogs
//   res.send("All of the blogs!")
// })




////////////////////////////////////////
/// Connections
////////////////////////////////////////
const db = mongoose.connection
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
})

db
.on('connected', () => {console.log(`Connected to mongo at ${mongoURI}`)})
.on('disconnected', () => {console.log('Disconnected')})
.on('error', (err) => {console.log(`${err.message}... Is mongodb not working?`)})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))