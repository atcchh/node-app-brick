var page = require('webpage').create();

var format = function(fmt, date) { //author: meizz   
    var o = {   
      "M+" : date.getMonth()+1,                 //月
      "d+" : date.getDate(),                    //日
      "h+" : date.getHours(),                   //小时
      "m+" : date.getMinutes(),                 //分
      "s+" : date.getSeconds(),                 //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S"  : date.getMilliseconds()             //毫秒
    };   
    if(/(y+)/.test(fmt))   
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)   
      if(new RegExp("("+ k +")").test(fmt))   
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt;   
}  

var screenshot = function(page, url, fileName) {
    page.viewportSize = { width: 1100, height: 2000 };
    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('Unable to access the network!');
        } else {
          window.setTimeout(function()  {//延迟截图
            page.render(fileName);
            page.close();
          }, 2000);  
          // page.render(fileName);
        }
    });
}

var prefix = "/tmp/screenshot"
var groupName = "lufax"
var categoryName = "index_html"
var folderName = format("yyyyMM", new Date());
var fileName = format("yyyyMMddhhmmss",new Date()) + ".png";

// console.log("------------------------------------=");
screenshot(page,'http://www.lufax.com', prefix + "/" + groupName + "/" + categoryName + "/" + folderName + "/" + fileName);  
