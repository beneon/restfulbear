// server.js
// BASE SETUP
// ===
const assert = require('assert');
var express = require('express')
var app = express()
const routerFactory = require('./app/router/commonRouter')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/writingDB')
var Entries = require('./app/models/methods')
var {RouterFactory} = require('./app/router/commonRouter')
var {PugInterface} = require('./app/views/PugInterface.js')
var pugInterface = new PugInterface()
// bodyParser middleware configure
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var port = process.env.PORT || 8080
// Router generation
var router = RouterFactory(Entries,pugInterface)
app.use('/api',router)
// START SERVER
// ======
app.listen(port)
console.log('listening to port:'+port)
