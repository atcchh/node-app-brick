var Database = require("node-forceps").DatabasePromise
var Command = require("node-forceps").Command
var cronParser = require('cron-parser');
var Q = require("q");

var tideDB = new Database("tideDB");
var interval = 1000 * 1; //30s
var i = 100;

var schedule = function(job){
	job();
	setTimeout(function(){
		schedule(job);
	}, interval);
}


schedule(function() {
	var currentDate = new Date();
	tideDB.getCollection("job").findAll()
		.then(function(jobs){
			for(var jobIndex in jobs) {

				if(run_job(jobs[jobIndex])) {
					doJob(jobs[jobIndex]);
				} 
			}
		});
});


var doJob = function(job) {
	var lastRuntime = new Date();

	var nextRuntime = getNextRuntime(job);

	return  tideDB.getCollection("job").update(job.id, {status:"running", lastRunTime : lastRuntime, nextRuntime:nextRuntime})
		.then(function(){
			console.log("start" + job.name);
			var argu = job.arguments;// add the  job id
			
			if(job.type === 'default') {
			} else if(job.type === 'lufax.screenshot') {
				argu.push(job.id);
			}
			console.log(argu);
			var command = new Command(job.command, argu);
			var promise =  command.run();

			return Q.when(promise, function(){
				
				return job;
			});
		}).then(function(){
			console.log(" updat statue to done    : " + job.id + "tiem : " + new Date());	
			tideDB.getCollection("job").update(job.id, {status:"done"});
		});
}
function run_job(job) {

	if(job.status != 'done') {
		return false;
	}
	
	if(!job.lastRunTime || !job.nextRuntime) {
		return true;
	} else {
		if(new Date().getTime() >= job.nextRuntime.getTime()) {
			return true;
		}
	}
	return false;
}

function getNextRuntime(job) {
	var option = {currentDate: job.nextRuntime || new Date()};
	var cron = cronParser.parseExpression(job.cron, option);
	cron.next();// current date
	var nextRuntime =  cron.next();
	if(nextRuntime.getTime() < new Date().getTime()) {
		return new Date();
	} else {
		return nextRuntime;
	}
}

