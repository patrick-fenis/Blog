//////////////////////////////////////////
////Server Set-Up
/////////////////////////////////////////

require('dotenv').config()
const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const mongoURI = process.env.MONGOURI
const PORT = 3001


////////////////////////////////////////
/// Middleware
////////////////////////////////////////

// const db = mongoose.connection 
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static('public'))


////////////////////////////////////////
/// Routes 
////////////////////////////////////////

// test route
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// GET - BLOG INDEX
app.get("/blogs", (req, res) => {
  // boilerplate for blogs
  res.send("All of the blogs!")
})




////////////////////////////////////////
/// Connections
////////////////////////////////////////

// mongoose.connect(mongoURI, {useNewUrlParser: true})
// db.on('error', (err) => {console.log(`${err.message}... Is mongodb not working?`)})
// db.on('connected', () => {console.log(`Connected to mongo at ${mongoURI}`)})
// db.on('disconnected', () => {console.log('Disconnected')})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))