var Database = require("node-forceps").DatabasePromise
var cronParser = require('cron-parser');
var Q = require("q");
var screenshotJob = require('./job/screenshotJob.js').screenshotJob
var createAndKeepLufaxSessionCookie = require('./job/createAndKeepLufaxSessionCookie.js')

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
				var job = jobs[jobIndex];
				if(run_job(job)) {
					var jobId = job.id;
					var lastRuntime = new Date();
					var nextRuntime = getNextRuntime(job);
					tideDB.getCollection("job_detail").find({jobId: jobId})
						.then(function(jobDetails){
							var jobDetail = jobDetails[0];
							return tideDB.getCollection("job").update(jobId, {status:"running", lastRunTime : lastRuntime, nextRuntime:nextRuntime})
								.then(function(){
									var deferred = Q.defer();
									if(jobDetail.type == 'createAndKeepLufaxSessionCookie') {

										Q.fcall(function(){
											createAndKeepLufaxSessionCookie();
										});
										deferred.resolve(jobDetail);
									} else {
										screenshotJob(jobDetail,function(err){
						                    if(err) {
						                        deferred.reject(new Error(err));
						                    } else {
						                        deferred.resolve(jobDetail);
						                    }
										});
									}
									
									return deferred.promise;
								});
						// })
					// tideDB.getCollection("job").update(jobId, {status:"running", lastRunTime : lastRuntime, nextRuntime:nextRuntime})
					// 	.then(function(){
					// 		console.log(job.name + " updat statue to running : " + jobId + "time : " + new Date() + "the job lastRunTime [" + job.lastRunTime + "]");	
					// 		// get the job detail
					// 		return tideDB.getCollection("job_detail").find({jobId: jobId});
					// 	}).then(function(jobDetails){ // runt job
					// 		var jobDetail = jobDetails[0];
					// 		var deferred = Q.defer();
					// 		console.log(jobDetail.type);
					// 		if(jobDetail.type == 'createAndKeepLufaxSessionCookie') {
					// 			console.log("run createAndKeepLufaxSessionCookie");
					// 			// createAndKeepLufaxSessionCookie();
					// 			deferred.resolve(jobDetail);
					// 		} else {
					// 			screenshotJob(jobDetail,function(err){
				 //                    if(err) {
				 //                        deferred.reject(new Error(err));
				 //                    } else {
				 //                        deferred.resolve(jobDetail);
				 //                    }
					// 			});
					// 		}
							
					// 		return deferred.promise;

						}).then(function(jobDetail){

							console.log(jobDetail.type + " updat statue to done    : " + jobDetail.jobId + "tiem : " + new Date());	
							tideDB.getCollection("job").update(jobDetail.jobId, {status:"done"})
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

