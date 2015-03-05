var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB12");

var jobId = new Date().getTime(); 
tideDB.getCollection("job").insert(
	{
		name:"lufax-index-html", 
		cron : "*/3 * * * * *", 
		status:"done", 
		id:jobId, 
		type:"screenshotJob",
		scriptPath:"./job/script/lufax/index_html.js" 
	}
);

tideDB.getCollection("job_detail").insert(
	{
		jobId:jobId,
		type:"screenshotJob",
		scriptPath:"./job/script/lufax/index_html.js" 
	}
);