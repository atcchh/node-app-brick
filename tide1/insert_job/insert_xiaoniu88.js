var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();




tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_index", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_index", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/portal/index",
			prefixPath:"/tmp/xiaoniu88/index",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_index");
});
jobId++;



tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_product_listing", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_product_listing", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/product/listing",
			prefixPath:"/tmp/xiaoniu88/product/listing",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_product_listing");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_product_planning", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_product_planning", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/product/planning",
			prefixPath:"/tmp/xiaoniu88/product/planning",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_product_planning");
});
jobId++;



tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_product_transfer", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_product_transfer", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/product/transfer",
			prefixPath:"/tmp/xiaoniu88/product/transfer",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_product_transfer");
});
jobId++;



tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_login", 
		cron : "0 0 0 */2 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_login", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://www.xiaoniu88.com/user/login",
			prefixPath:"/tmp/xiaoniu88/login",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_login");
});
jobId++;



tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_register", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_register", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://www.xiaoniu88.com/user/register",
			prefixPath:"/tmp/xiaoniu88/register",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_register");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_help", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_help", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/portal/help/index",
			prefixPath:"/tmp/xiaoniu88/help",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_help");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_loan", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_loan", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/portal/myloan",
			prefixPath:"/tmp/xiaoniu88/loan",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_loan");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"xiaoniu88_notice", 
		cron : "0 0 0 */10 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/git/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"xiaoniu88_notice", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.xiaoniu88.com/portal/article/index/2",
			prefixPath:"/tmp/xiaoniu88/notice",
			width:"1200",
			height:"1200",
			lazyTime:"2000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the xiaoniu88_notice");
});
jobId++;