var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();



jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_index_login", 
		cron : "0 0 */2 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_index_login", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://www.lufax.com",
			prefixPath:"/tmp/lufax/index_login",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_index_login");
});
