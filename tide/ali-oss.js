var ALY = require('aliyun-sdk');
var fs = require('fs');

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



fs.readFile('/tmp/screenshot/lufax/index_html/201503/20150306093524.png', function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }

  oss.putObject({
      Bucket: 'oneforce-monitor-1',
      Key: 'lufax/index_html/201503/20150306093524.png',
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
        return;
      }

      console.log('success:', data);

    });
});

// oss.listBuckets(function (err, data) {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }

//   console.log('success:', data);
// });