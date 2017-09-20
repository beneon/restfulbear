const pug = require('pug');
const path = require('path');
var PugInterface = function(){
	this.fn = pug.compileFile(path.join(__dirname,'entrieslist.pug'),{pretty:true})
}
PugInterface.prototype.headerGet = function(obj){
	var header = []
	var entry1 = obj.length>1?obj[0]:obj
	console.log(entry1);
	for(h in entry1){
		header.push(h)
	}
	header = header.filter(e=>{
		return typeof entry1[e]=="string"
	})
	return header
}
PugInterface.prototype.entrieslist = function (entriesList) {
	console.log(this.headerGet(entriesList));
	return entriesList
};
PugInterface.prototype.entryDetail = function(entry){
	return entry
}
PugInterface.prototype.welcomePage = function(){
	return {message:'hooray! welcome to our api!'}
}
exports.PugInterface = PugInterface
