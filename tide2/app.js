var Database = require("node-forceps").DatabasePromise
var PhantomjsCommand = require("node-forceps").PhantomjsCommand;
var Command = require("node-forceps").Command
var dateUtils = require("node-forceps").dateUtils;
var cronParser = require('cron-parser');
var fs = require('fs');
var Q = require("q");
var ALY = require('aliyun-sdk');


var oss = new ALY.OSS({
  "accessKeyId": "6A3BlwpSAn9ARNXj",
  "secretAccessKey": "Obj78KoVM9OnTl3AOtX8DZrVbUpNnT",
  // 根据你的 oss 实例所在地区选择填入
  // 杭州：http://oss-cn-hangzhou.aliyuncs.com
  // 北京：http://oss-cn-beijing.aliyuncs.com
  // 青岛：http://oss-cn-qingdao.aliyuncs.com
  // 深圳：http://oss-cn-shenzhen.aliyuncs.com
  // 香港：http://oss-cn-hongkong.aliyuncs.com
  // 注意：如果你是在 ECS 上连接 OSS，可以使用内网地址，速度快，没有带宽限制。
  // 杭州：http://oss-cn-hangzhou-internal.aliyuncs.com
  // 北京：http://oss-cn-beijing-internal.aliyuncs.com
  // 青岛：http://oss-cn-qingdao-internal.aliyuncs.com
  // 深圳：http://oss-cn-shenzhen-internal.aliyuncs.com
  // 香港：http://oss-cn-hongkong-internal.aliyuncs.com
  endpoint: 'http://oss-cn-qingdao.aliyuncs.com',
  // 这是 oss sdk 目前支持最新的 api 版本, 不需要修改
  apiVersion: '2013-10-15'
});

var tideDB = new Database("tideDB");
var lufaxDB = new Database("lufaxDB");

var screenshotFileCollection = lufaxDB.getCollection("screenshot");

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
			if(job.type === 'screenshot') {
				console.log("start the screen shot job")
				return doScreenshot(job);
			} else {
				console.log("The job type [" + job.type + "] is not support");
				return ;
			}
		}).then(function(){
			console.log(" updat statue to done    : " + job.id + "tiem : " + new Date());	
			tideDB.getCollection("job").update(job.id, {status:"done"});
		}).fail(function(err){
			console.log("failed" + err);
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

///////////////////////////////////////////
// job detail
// screenshot
///////////////////////////////////////////


var doScreenshot = function(job) {
	var params = []
	// params.push("--ssl-protocol=any");
	params.push(job.jobDetail.phantomjs_config);
	// params.push("./job/script/lufax/index_html.js");
	params.push(job.jobDetail.scriptPath);
	// params.push("https://my.lufax.com/my/account");
	params.push(job.jobDetail.url);
	// params.push("/tmp/3.png");
	// file name
	var prefixPath = job.jobDetail.prefixPath;
	var targetMonth = dateUtils.format('yyyyMM', new Date());
	var fileName = dateUtils.format('yyyyMMddhhmmss', new Date()) + ".png";
	var fileFullName = prefixPath + "/" + targetMonth + "/" + fileName;
	params.push(fileFullName); 
	// params.push("1100");
	params.push(job.jobDetail.width);
	// params.push("2000");
	params.push(job.jobDetail.height);
	// params.push("2000")
	params.push(job.jobDetail.lazyTime);

	var screenshot = {};
	screenshot.picture_group = job.jobDetail.jobName;
	screenshot.created_at = new Date();
	screenshot.filePath = fileFullName;
	screenshot.width = job.jobDetail.width;
	screenshot.height = job.jobDetail.height;
	return screenshotFileCollection.insert(screenshot)
				.then(function(){
					console.log("start to run the phantomjs")
					var command = new PhantomjsCommand(params);
					return command.run();
				}).then(function(){ // upload the pictue to oss
					// update the to aliyun 
					console.log("start to upload the file");
					var deferred = Q.defer();
					fs.readFile(screenshot.filePath, function (err, data) {
					  if (err) {
					    deferred.reject(err);
					  } else {
						  var temp = screenshot.filePath.split("/");
						  temp = temp.slice(2);
						  var key = temp.join("/")
						  oss.putObject({
						      Bucket: 'oneforce-monitor-1',
						      Key: key,
						      Body: data,
						      AccessControlAllowOrigin: '',
						      ContentType: 'image/png',
						      CacheControl: 'cached',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
						      ContentDisposition: '',           // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
						      ContentEncoding: 'utf-8'         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
						    },
						    function (err, data) {
						      if (err) {
						        deferred.reject(err);
						      } else {
							      // success, update the recode to end
							      
							      deferred.resolve(data);
						      }
						    });
						}
					});
					return deferred.promise;
				});
			
}
