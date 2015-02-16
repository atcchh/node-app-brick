var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");
var screenshotJob = require('./screenshotJob.js').screenshotJob

var tideDB = new Database("tideDB8");
var interval = 1000 * 1; //30s
var i = 100;

var schedule = function(job){
	job();
	setTimeout(function(){
		schedule(job);
	}, interval);
}

tideDB.getCollection("job").update(1424074392219,{status:"done"});
// tideDB.getCollection("job_detail").insert({type:"screenshotJob", script:"", jobId:jobId});
// tideDB.getCollection("job").insert({name:"cango-test3", cron : "*/3 * * * * *", status:"done", id:jobId});


schedule(function() {
	var currentDate = new Date();
	tideDB.getCollection("job").findAll()
		.then(function(jobs){
			for(var jobIndex in jobs) {
				var job = jobs[jobIndex];
				if(run_job(job)) {
					var jobId = job.id;
					var lastRuntime = new Date();
					var nextRuntime = getNextRuntime(job);
					tideDB.getCollection("job").update(jobId, {status:"running", lastRunTime : lastRuntime, nextRuntime:nextRuntime})
						.then(function(){
							console.log(job.name + " updat statue to running : " + job.id + "time : " + new Date() + "the job lastRunTime [" + job.lastRunTime + "]");	
							// get the job detail
							return tideDB.getCollection("job_detail").find({jobId: job.id});
						}).then(function(jobDetails){ // runt job
							var jobDetail = jobDetails[0];
							var deferred = Q.defer();
							
							screenshotJob(jobDetails,function(err){
			                    if(err) {
			                        deferred.reject(new Error(err));
			                    } else {
			                        deferred.resolve(jobDetail);
			                    }
							});
							
							return deferred.promise;

						}).then(function(jobDetail){
							console.log(job.name + " updat statue to done    : " + job.id + "tiem : " + new Date());	
							tideDB.getCollection("job").update(jobId, {status:"done"})
						});
				} 
			}
		});
});
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
