const pug = require('pug');
var PugInterface = function(){

}
PugInterface.prototype.test1 = function (data,states) {
	console.log(data,states);
};
exports.PugInterface = PugInterface
