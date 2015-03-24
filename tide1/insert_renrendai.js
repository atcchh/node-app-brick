var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();




tideDB.getCollection("job").insert(
	{
		name:"renrendai_index", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_index", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/",
			prefixPath:"/tmp/renrendai/index",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_index");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"renrendai_investment", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_investment", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/lend/index.action",
			prefixPath:"/tmp/renrendai/investment",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_investment");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"renrendai_investment_ujihua", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_investment_ujihua", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/lend/index.action",
			prefixPath:"/tmp/renrendai/investment/ujihua",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_investment_ujihua");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"renrendai_investment_ujihua_list", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_investment_ujihua_list", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/financeplan/listPlan!listPlan.action",
			prefixPath:"/tmp/renrendai/investment/ujihua/list",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_investment_ujihua_list");
});
jobId++;

tideDB.getCollection("job").insert(
	{
		name:"renrendai_investment_list", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_investment_list", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/lend/loanList.action",
			prefixPath:"/tmp/renrendai/investment/list",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_investment_list");
});
jobId++;


tideDB.getCollection("job").insert(
	{
		name:"renrendai_transfer_list", 
		cron : "0 0 0 * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_transfer_list", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/transfer/transferList.action",
			prefixPath:"/tmp/renrendai/investment/transfer",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_transfer_list");
});


tideDB.getCollection("job").insert(
	{
		name:"renrendai_register", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_register", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://www.renrendai.com/regPage.action",
			prefixPath:"/tmp/renrendai/register",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_register");
});

jobId++;


tideDB.getCollection("job").insert(
	{
		name:"renrendai_login", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_login", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"https://www.renrendai.com/loginPage.action",
			prefixPath:"/tmp/renrendai/login",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_login");
});

jobId++;


tideDB.getCollection("job").insert(
	{
		name:"renrendai_loan", 
		cron : "0 0 0 */15 * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/screenshotJob.js"] ,
		type : "lufax.screenshot",
		jobDetail : {
	     	jobName:"renrendai_loan", 
			phantomjs_config : '--ssl-protocol=any',
			type:"screenshotJob",
			scriptPath:"/home/caoyanfei079/mygithub/node-app-brick/tide/job/script/lufax/index_html.js",
			url:"http://www.renrendai.com/borrow/index.action",
			prefixPath:"/tmp/renrendai/loan",
			width:"1200",
			height:"1200",
			lazyTime:"3000",
			isLogin:false
		},
		options: ""
	}
).then(function(){
	console.log("insert the renrendai_loan");
});

jobId++;