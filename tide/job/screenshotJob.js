var PhantomjsCommand = require("node-forceps").PhantomjsCommand;
var dateUtils = require("node-forceps").dateUtils;
var Database = require("node-forceps").DatabasePromise


var screenshotJob = function(jobDetails, callBack) {
	var params = []
	// params.push("--ssl-protocol=any");
	params.push(jobDetails.phantomjs_config);
	// params.push("./job/script/lufax/index_html.js");
	params.push(jobDetails.scriptPath);
	// params.push("https://my.lufax.com/my/account");
	params.push(jobDetails.url);
	// params.push("/tmp/3.png");
	// file name
	var prefixPath = jobDetails.prefixPath;
	var targetMonth = dateUtils.format('yyyyMM', new Date());
	var fileName = dateUtils.format('yyyyMMddhhmmss', new Date()) + ".png";
	params.push("/tmp" + prefixPath + "/" + targetMonth + "/" + fileName);
	// params.push("1100");
	params.push(jobDetails.width);
	// params.push("2000");
	params.push(jobDetails.height);

	if(jobDetails.isLogin) {
		// params.push("9cfcb4f2-1456-446e-a089-faf75beea963,xZzPgE444BcwhXbydpWUXsyfh81TZhBQmdQXTDNLzmdYgvFppUjH75QHw4Cos36bvwcYNuhSbSXY/aW4TK/gTQ==");
		var lufaxDB = new Database("lufaxDB");
		var loginCookieCollection = lufaxDB.getCollection("loginCookie");
		var screenshotFileCollection = lufaxDB.getCollection("screenshot");
		var screenshotFile = {}
		screenshotFile.filePath = "/tmp" + prefixPath + "/" + targetMonth + "/" + fileName;
		screenshotFile.tagetPath = prefixPath + "/" + targetMonth + "/" + fileName;

		loginCookieCollection.findAll().then(function(cookies){

			if(cookies.length) { 		// the cookie is exists

				cookies.sort(function(cookie1, cookie2){
					return cookie1.expireTime.getTime() - cookie2.expireTime.getTime();
				})
				var lastCookie = cookies.pop();
				params.push(lastCookie.lufaxSID);
			}
			return params;
		}).then(function(params){
			var command = new PhantomjsCommand(params);
			command.run().then(function(){
				console.log("-------------------------------");
				console.log("-------------------------------");
				console.log("-------------------------------");
				console.log("-------------------------------");
				if(callBack) {
					callBack(null);
				}		
			});
		})
	} else {
		var command = new PhantomjsCommand(params);
		command.run().then(function(){
			console.log("-------------------------------");
			console.log("-------------------------------");
			console.log("-------------------------------");
			console.log("-------------------------------");
			if(callBack) {
				callBack(null);
			}		
		});
		
	}
}
module.exports.screenshotJob = screenshotJob;
