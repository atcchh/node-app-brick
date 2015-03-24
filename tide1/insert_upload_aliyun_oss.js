var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();


tideDB.getCollection("job").insert(
	{
		name:"upload_aliyun_oss", 
		cron : "0 */5 * * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		type : "default",
		arguments: ["/home/caoyanfei079/mygithub/node-app-brick/tide/job/upload_aliyun_oss.js"] ,
		options: ""
	}
).then(function(){
	console.log("insert the upload_aliyun_oss");
});