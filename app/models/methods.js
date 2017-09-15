var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MethodSchema = new Schema({
	title:String,
	content:String,
	source:String
})

module.exports = mongoose.model('Methods',MethodSchema)
