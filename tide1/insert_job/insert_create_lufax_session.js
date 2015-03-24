var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var jobId = new Date().getTime();

tideDB.getCollection("job").insert(
	{
		name:"create-lufax-cookie", 
		cron : "0 */5 * * * *", 
		status:"done", 
		id:jobId + "", 
		command:"/usr/local/bin/node",
		type : "default",
		arguments: ["/git/node-app-brick/tide/job/createAndKeepLufaxSessionCookie.js"] ,
		options: ""
	}
).then(function(){
	console.log("insert the create-lufax-cookie");
});
