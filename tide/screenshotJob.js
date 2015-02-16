var PhantomjsCommand = require("node-forceps").PhantomjsCommand;



var screenshotJob = function(jobDetails, callBack) {
	var command = new PhantomjsCommand("./screenshot.js");
	command.run();
	if(callBack) {
		callBack(null);
	}
}
module.exports.screenshotJob = screenshotJob;