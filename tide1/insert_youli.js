var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();




tideDB.getCollection("job").insert(
	{
		name:"youli_index", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_index", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/",
			prefixPath:"/tmp/youli/index",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the youli_index");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"youli_statistic_platform", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_statistic_platform", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/statistic/platform/",
			prefixPath:"/tmp/youli/statistic/platform",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the youli_statistic_platform");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"youli_invest_all", 
		cron : "0 0 0 */3 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_invest_all", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/invest/",
			prefixPath:"/tmp/youli/invest/all",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the youli_invest_all");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"youli_invest_wuyoubao", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_invest_wuyoubao", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/currentProduct/",
			prefixPath:"/tmp/youli/invest/wuyoubao",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the youli_invest_wuyoubao");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"youli_invest_dingcunbao", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"youli_invest_dingcunbao", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.yooli.com/dingcunbao/",
			prefixPath:"/tmp/youli/invest/dingcunbao",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the youli_invest_dingcunbao");
});
jobId++;


tideDB.getCollection("job").insert(
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
).then(function(){
	console.log("insert the youli_invest_yuexitong");
});
jobId++;