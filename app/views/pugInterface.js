const pug = require('pug');
var PugInterface = function(){

}
PugInterface.prototype.entrieslist = function (entriesList) {
	return entriesList
};
PugInterface.prototype.entryDetail = function(entry){
	return entry
}
PugInterface.prototype.welcomePage = function(){
	return {message:'hooray! welcome to our api!'}
}
exports.PugInterface = PugInterface
