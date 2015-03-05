var PhantomjsCommand = require("node-forceps").PhantomjsCommand;



var screenshotJob = function(jobDetails, callBack) {
	console.log(jobDetails)
	var command = new PhantomjsCommand("/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js");
	command.run();
	if(callBack) {
		callBack(null);
	}
}
module.exports.screenshotJob = screenshotJob;