
// 检查特定目录下文件是否存在
// 如果哦不存在，创建文件
// 检查文件的内容，
// 获取最后一行的内容
// 如果没有：新建一条记录
// 如果有：按照时间解析
// 系统:::创建时间:::最后一次登录时间:::cookie值
// www.lufax.com:::1397711895251::::::adfasdfasdfasdfadfasdfadf
// 判断时间:是否在6小时内
// 如果在，访问https://user.lufax.com/user/keepSession.gif?timestamp=1397697642842
// 如果不再，在重新登录，创建cookie，
var fs = require('fs');
var http = require('http');
var https = require('https');
var parseCookies = require('cookie');
var httpUtils = require('node-forceps').httpUtils

var Path = require('path');
var Database = require("node-forceps").DatabasePromise



var creatAndKeepLufaxSession = function(){
	var getCookie = function(response, cookieName) {
		var cookies = response.headers['set-cookie'];
		for(var index =0; index < cookies.length; index++) {

			var cookie = parseCookies.parse(cookies[index]);
			if(cookie[cookieName]) {
				return cookie[cookieName];
			}
		}
		return null;
	}

	var lufaxDB = new Database("lufaxDB");

	var collection = lufaxDB.getCollection("loginCookie4");

	var prefixIMVC = '/tmp/';

	var createCookie = function() {

		https.get("https://user.lufax.com/user/captcha/captcha.jpg?source=login&_=" + new Date().getTime(), function(res) {
			var imvc = getCookie(res,'IMVC');
			var buffer = new Buffer(0, 'binary');
			res.on('data', function (chunk) {
				buffer = Buffer.concat([buffer, new Buffer(chunk,'binary')])
			});
			res.on('end', function(){ // 
				// write the captcha to temp file
				fs.writeFile( prefixIMVC + imvc +'.png',buffer, function() {
					httpUtils.uploadFile('http://api.ruokuai.com/create.json',{
							'username': 'rfvbgtyuxx7 ',
							'password': '60B711EC4CD9F45E65151F487EFC02D6',
							'typeid':'3040',
							'softid': '6865',
							'softkey': 'c009a96f01a622653fea46e324a3d4ce'
						}, prefixIMVC + imvc +'.png')
					.then(function(data) {
						console.log('000000000000000000000000000000000');
						var jsonData = JSON.parse(data);
						if(!jsonData.Result) {
							console.log("parse issue : " + data);
							return;
						}
						// login www.lufax.com
						var optionsLogin = {
							'host':"user.lufax.com",//远端服务器域名
							'port':443,//远端服务器端口号
							'method':'POST',
							'path':'/user/login',//上传服务路径
							'headers':{
								'Content-Type':'application/x-www-form-urlencoded',
								'Connection':'close',
								'Cookie':'IMVC='+imvc
							}
						};
						var loginRequest = https.request(optionsLogin, function(loginResponse){
							console.log("login success");
							_lufaxSID = getCookie(loginResponse,'_lufaxSID');
							console.log(_lufaxSID);
							// fs.appendFileSync(lufaxConfigFile,'www.lufax.com:::'+new Date().getTime() + ':::'+new Date().getTime() + ':::' + _lufaxSID + '\n');
							var cookie = {}
							cookie.lufaxSID = _lufaxSID;
							cookie.createTime = new Date();
							cookie.expireTime = new Date(new Date().getTime() + 1000 * 60 * 60 * 6);
							console.log(cookie);
							collection.insert(cookie);
						});
						loginRequest.write('');
						loginRequest.end('password=830A5C7ED170D32979DD9904C8DC0F6D3E6477B5B3CD83686BA069B406ECCB311E065E700A5F0EC2AD5C8009AB4C79833D4579DC4657752758CF793F9D12FD56A60196B68E71850D1493B64053168C3A6C983F53290929AE1E7B85E5D6DC3FB8F010F518526B790F31AF52C9B845189EA44A690D809B2B33C77697E6EDCD0E2B&userNameLogin=oneforce&pwd=************&validNum='+jsonData.Result);
					});
				});
			});
		});
	}
	collection.findAll().then(function(cookies){

		if(cookies.length) { 		// the cookie is exists

			cookies.sort(function(cookie1, cookie2){
				return cookie1.expireTime.getTime() - cookie2.expireTime.getTime();
			})
			var lastCookie = cookies.pop();
			if(lastCookie.expireTime.getTime() < new Date().getTime()) {
				createCookie();	
			} else {
				// update the keep session.gif
				var lufaxSID = lastCookie.lufaxSID;
				var keepSessionRequest = https.request({'host':'user.lufax.com',//远端服务器域名
					'port':443,//远端服务器端口号
					'method':'GET',
					'path':'/user/keepSession.gif',//
					'headers':{
						'Connection':'close',
						'Cookie':'_lufaxSID="' + lufaxSID + '"'
					}}, function(keepSessionResponse){
						keepSessionRequest.end();
						keepSessionResponse.on('close', function(){
							console.log('response close');
						});
					});
				keepSessionRequest.end();
			}
		} else { // the cookie is not exists
			createCookie();
		}
	})
}

module.exports.creatAndKeepLufaxSession = creatAndKeepLufaxSession;
// creatAndKeepLufaxSession();