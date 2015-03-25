var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();



var jobGroup = [
{
		name:"youli_invest_yuexitong", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_invest_yuexitong", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/yuexitong/",
			prefixPath:"/tmp/youli/invest/yuexitong",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}

]


var insertJob = function(job) {
	tideDB.getCollection("job").insert(job).then(function(){
		console.log("insert the " + job.name);
	});
}


for(var jobIndex in jobGroup) {
	var job = jobGroup[jobIndex];
	job.id = jobId;
	job.type = 'screenshot'
	job.jobDetail.scriptPath = "/git/node-app-brick/tide/job/script/lufax/index_html.js"
	jobId++;
	insertJob(job);
}


