var path = require("path");
var temp = '/tmp/lufax/list_all/201503/20150324112801.png'.split(path.sep);
var result = temp.slice(2);
console.log(result.join(path.sep));
