var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");

var jobId = new Date().getTime(); 
// tideDB.getCollection("job").insert(
// 	{
// 		name:"lufax-my-acount", 
// 		cron : "0/5 * * * * *", 
// 		status:"done", 
// 		id:jobId, 
// 		type:"screenshotJob",
// 		scriptPath:"./job/script/lufax/index_html.js" 
// 	}
// );

// tideDB.getCollection("job_detail").insert(
// 	{
// 		jobId:jobId,
//      jobName:"lufax-my-acount", 
// 		phantomjs_config : '--ssl-protocol=any',
// 		type:"screenshotJob",
// 		scriptPath:"./job/script/lufax/index_html.js",
// 		url:"https://my.lufax.com/my/account",
// 		prefixPath:"/lufax/my-account",
// 		width:"1100",
// 		height:"2000",
// 		isLogin:true,
// 	}
// );

///////////////////////////////////////////////
/// insert the ruo kuai 
///////////////////////////////////////////////

tideDB.getCollection("job").insert(
	{
		jobName:"lufax-create-session", 
		cron : "* * * * * *", 
		status:"done", 
		id:jobId, 
		type:"createAndKeepLufaxSessionCookie",
		scriptPath:"./job/createAndKeepLufaxSessionCookie.js" 
	}
);

tideDB.getCollection("job_detail").insert(
	{
		jobId:jobId,
		name:"lufax-create-session",
		type:"createAndKeepLufaxSessionCookie"
	}
);


// // params.push("--ssl-protocol=any");
// 	params.push(jobDetails.phantomjs_config);
// 	// params.push("./job/script/lufax/index_html.js");
// 	params.push(jobDetails.scriptPath);
// 	// params.push("https://my.lufax.com/my/account");
// 	params.push(jobDetails.url);
// 	// params.push("/tmp/3.png");
// 	// file name
// 	var prefixPath = jobDetails.prefixPath;
// 	var targetMonth = dateUtils.format('yyyyMM', new Date());
// 	var fileName = dateUtils.format('yyyyMMddhhmmss', new Date()) + ".png";
// 	params.push(prefixPath + "/" + targetMonth + "/" + fileName);
// 	// params.push("1100");
// 	params.push(jobDetails.width);
// 	// params.push("2000");
// 	params.push(jobDetails.height);
// 	if(jobDetails.isLogin) {
// 		// params.push("9cfcb4f2-1456-446e-a089-faf75beea963,xZzPgE444BcwhXbydpWUXsyfh81TZhBQmdQXTDNLzmdYgvFppUjH75QHw4Cos36bvwcYNuhSbSXY/aW4TK/gTQ==");
// 		var lufaxDB = new Database("lufaxDB");
// 		var collection = lufaxDB.getCollection("loginCookie4");
// 		collection.findAll().then(function(cookies){

// 			if(cookies.length) { 		// the cookie is exists

// 				cookies.sort(function(cookie1, cookie2){
// 					return cookie1.expireTime.getTime() - cookie2.expireTime.getTime();
// 				})
// 				var lastCookie = cookies.pop();
// 				params.push(lastCookie.lufaxSID);
// 			}
// 			return params;
// 		}).then(function(params){
// 			var command = new PhantomjsCommand(params);
// 			command.run();
// 			if(callBack) {
// 				callBack(null);
// 			}	
// 		})
// 	} else {
// 		var command = new PhantomjsCommand(params);
// 		command.run();
// 		if(callBack) {
// 			callBack(null);
// 		}	
// 	}


// var createAndKeepLufaxSessionCookie = require('./job/createAndKeepLufaxSessionCookie.js')
// createAndKeepLufaxSessionCookie();