var ALY = require('aliyun-sdk');
var fs = require('fs');
var Q = require('q');
var PhantomjsCommand = require("node-forceps").PhantomjsCommand;
var dateUtils = require("node-forceps").dateUtils;
var Database = require("node-forceps").DatabasePromise
var lufaxDB = new Database("lufaxDB");
var screenshotFileCollection = lufaxDB.getCollection("screenshot");

var size = 0;
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
var size = 0;
screenshotFileCollection.findAll().then(function(screenshots){
	for(var i in screenshots) {
		var screenshot = screenshots[i];
		if(screenshot.isAliOss === undefined) {
			size++;
			uploadOSS(screenshot);
		}
	}
	if(size <= 0) {
		lufaxDB.close();
	}
})

var uploadOSS = function(screenshot) {
	fs.readFile(screenshot.filePath, function (err, data) {
		  if (err) {
		    console.log('error:', err);
		    screenshotFileCollection.update(screenshot.id,{statue:"failed",reason:"the file is not exists",isAliOss:"false"}).then(release);
		    // TODO 
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
			      // ServerSideEncryption: 'AES256',
			      // Expires: ''                       // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
			    },
			    function (err, data) {
			      if (err) {
			        console.log('error:', err);
			        release();
			      } else {
				      // success, update the recode to end
				      screenshotFileCollection.update(screenshot.id,{isAliOss:"true"}).then(release);
			      }
			    });
			}
		});
}
var release = function() {
	size--;
	console.log(size);
	if(size <= 0) {
		lufaxDB.close();
	}
}