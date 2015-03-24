var PhantomjsCommand = require("node-forceps").PhantomjsCommand;
var dateUtils = require("node-forceps").dateUtils;
var Database = require("node-forceps").DatabasePromise
var lufaxDB = new Database("lufaxDB");
var tideDB = new Database("tideDB");
var loginCookieCollection = lufaxDB.getCollection("loginCookie");
var screenshotFileCollection = lufaxDB.getCollection("screenshot");

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
	params.push(prefixPath + "/" + targetMonth + "/" + fileName);
	// params.push("1100");
	params.push(jobDetails.width);
	// params.push("2000");
	params.push(jobDetails.height);
	// params.push("2000")
	params.push(jobDetails.lazyTime);

	if(jobDetails.isLogin) {
		// params.push("9cfcb4f2-1456-446e-a089-faf75beea963,xZzPgE444BcwhXbydpWUXsyfh81TZhBQmdQXTDNLzmdYgvFppUjH75QHw4Cos36bvwcYNuhSbSXY/aW4TK/gTQ==");
		
		var screenshotFile = {}
		screenshotFile.filePath = prefixPath + "/" + targetMonth + "/" + fileName;
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
		}).then(function(params){ // save the screen shot file
			console.log('insert screen shot');
			var screenshot = {};
			screenshot.picture_group = jobDetails.jobName;
			screenshot.created_at = new Date();
			screenshot.filePath = params[3];
			screenshot.width = jobDetails.width;
			screenshot.height = jobDetails.height;
			return screenshotFileCollection.insert(screenshot)
				.then(function(){
					return params;
				})
		}).then(function(params){ // close the db
			lufaxDB.close();
			return params;
		}).then(function(params){
	                console.log('run phantomjs');
			var command = new PhantomjsCommand(params);
			console.log(params)
			command.run().then(function(){
				if(callBack) {
					callBack(null);
				}		
			});
		})
	} else {
		console.log('insert screen shot');
		var screenshot = {};
		screenshot.picture_group = jobDetails.jobName;
		screenshot.created_at = new Date();
		screenshot.filePath = params[3];
		screenshot.width = jobDetails.width;
		screenshot.height = jobDetails.height;
		return screenshotFileCollection.insert(screenshot)
			.then(function(){
				return params;
			}).then(function(){
				lufaxDB.close();
			}).then(function(){
				var command = new PhantomjsCommand(params);
				command.run().then(function(){
					if(callBack) {
						callBack(null);
					}		
				});				
			})
		
	}
}
var args = process.argv.slice(2);
var jobid = args[0];
tideDB.getCollection("job").find({id:jobid}).then(function(jobs){
	console.log(jobs);
	var job = jobs[0];
	var jobDetail = job.jobDetail;
	screenshotJob(jobDetail);
}).then(function(){
	console.log("end");
	tideDB.close();
}).fail(function(err){
	console.log(err);
})
