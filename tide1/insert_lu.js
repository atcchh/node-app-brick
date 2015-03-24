var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();



tideDB.getCollection("job").insert(
	{
		name:"lu_index", 
		cron : "0 0 */2 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lu_index", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.lu.com",
			prefixPath:"/tmp/lu/index",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the lu_index");
});
jobId++;
