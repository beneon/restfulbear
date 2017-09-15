// ROUTES FOR API
// ===
var express = require('express')
var RouterFactory = function(modelInterface,viewInterface){
	var router = express.Router()
	router.use(function(req,res,next){
	console.log("incoming cmd")
	next()
	})
	router.get('/',function(req,res){
	res.json({message:'hooray! welcome to our api!'})
	})

	router.route('/entries')
		.post(function(req,res){
			var entry = new modelInterface()
			for (key in req.body){
				entry[key] = req.body[key]
			}
			console.log(entry);

			entry.save((eSave)=>{
				if(eSave)res.send(eSave)
				res.json({message:"doc created, title:"+entry.title})
			})
		})
		.get((req,res)=>{
			modelInterface.find((eFind,entries)=>{
				if(eFind)res.send(eFind)
				res.json(entries)
				viewInterface.test1(entries,200)
			})
		})
	router.route('/entries/query')
		.get((req,res)=>{
			// converting string to regexp
			for(key in req.query){
				var val = req.query[key]
				req.query[key]=new RegExp(val)
			}
			modelInterface.find(req.query,(eFind,entries)=>{
				if(eFind)res.send(eFind)
				res.json(entries)
			})
		})
	router.route('/entry/:entry_id')
		.get((req,res)=>{
			modelInterface.findById(req.params.entry_id,(e,entry)=>{
				if(e)res.send(e)
				res.json(entry)
			})
		})
		.put((req,res)=>{
			modelInterface.findById(req.params.entry_id,(e,entry)=>{
				if(e)res.send(e)
				for(key in req.body){
					entry[key]=req.body[key]
				}
				entry.save((eSave)=>{
					if(eSave)res.send(eSave)
					res.json({message:"Entry updated"})
				})
			})
		})
		.delete((req,res)=>{
			modelInterface.remove({
				_id:req.params.entry_id
			},(eRemove,entry)=>{
				if(eRemove)res.send(eRemove)
				res.json({message:"Successfully removed"})
			})
		})
	return router
}
exports.RouterFactory = RouterFactory
