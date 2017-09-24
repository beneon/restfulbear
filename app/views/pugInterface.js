const pug = require('pug');
const path = require('path');
var PugInterface = function(){
	this.fn = pug.compileFile(path.join(__dirname,'entrieslist.pug'),{pretty:true})
}
PugInterface.prototype.headerGet = function(obj){
	var header = []
	var entry1 = obj.length>1?obj[0]:obj
	for(h in entry1.schema.paths){
		header.push(h)
	}
	return header
}
PugInterface.prototype.getEntryContent = function(entry){
	return this.headerGet(entry).map(h=>entry[h])
}
PugInterface.prototype.entrieslist = function (entriesList) {
	// console.log(this.headerGet(entriesList));
	var header = this.headerGet(entriesList)
	var entriesListContents = entriesList.map(e=>this.getEntryContent(e))
	return this.fn({
		hasHeader:true,
		header:this.headerGet(entriesList),
		data:entriesListContents
	})
};
PugInterface.prototype.entryDetail = function(entry){
	return entry
}
PugInterface.prototype.welcomePage = function(){
	return {message:'hooray! welcome to our api!'}
}
exports.PugInterface = PugInterface
