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
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_index_login", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
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
jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_list_all", 
		cron : "0 1 */4 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_list_all", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://list.lufax.com/list/all",
			prefixPath:"/tmp/lufax/list_all",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_list_all");
});

jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_list_anye", 
		cron : "0 2 */4 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_list_anye", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://list.lufax.com/list/anye",
			prefixPath:"/tmp/lufax/list_anye",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_list_anye");
});


jobId++;

tideDB.getCollection("job").insert(
	{
		name:"lufax_list_anye", 
		cron : "0 3 */4 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_list_anyi", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://list.lufax.com/list/anyi",
			prefixPath:"/tmp/lufax/list_anyi",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_list_anye");
});

jobId++;jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_list_fuying", 
		cron : "0 4 */4 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_list_fuying", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://list.lufax.com/list/fuying",
			prefixPath:"/tmp/lufax/list_fuying",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_list_fuying");
});
jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_list_licai", 
		cron : "0 4 */4 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_list_licai", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://list.lufax.com/list/licai",
			prefixPath:"/tmp/lufax/list_licai",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_list_licai");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"lufax_lumi_index", 
		cron : "0 5 */3 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_lumi_index", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://lumi.lufax.com/lumi/index",
			prefixPath:"/tmp/lufax/lumi_index",
			width:"1200",
			height:"2000",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_lumi_index");
});

jobId++;
tideDB.getCollection("job").insert(
	{
		name:"lufax_my_acount", 
		cron : "0 6 1 * * *", 
		status:"done", 
		id: jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_my_acount", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://my.lufax.com/my/account",
			prefixPath:"/tmp/lufax/my_account",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:true
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_my_acount");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"lufax_help", 
		cron : "0 0 1 1 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_help", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.lufax.com/help/",
			prefixPath:"/tmp/lufax/help",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_help");
});
jobId++

tideDB.getCollection("job").insert(
	{
		name:"lufax_mobile", 
		cron : "0 0 2 1 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"lufax_mobile", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.lufax.com/activity/app201307/index.html",
			prefixPath:"/tmp/lufax/mobile",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the lufax_mobile");
});
