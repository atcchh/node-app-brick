// phantomjs lufax.js
//  1 : url
//  2 : filePath
//  2 : width
//  3 : height
//  5   lazyTime
//  4 : cookie


var page = require('webpage').create();
var system = require('system')

var argsLength = system.args.length;
var url;
var filePath;
var width = 1100;
var height = 2000;
var lazyTime = 2000;
var lufaxSID;

if(argsLength <= 2) {
  console.log("miss the path info");
  phantom.exit(1);
} else {
  url = system.args[1]
  filePath = system.args[2]
}
if(argsLength>=4) {
  width = system.args[3]
}
if(argsLength>=5) {
  height = system.args[4]
}

if(argsLength>=6) {
  lazyTime = system.args[5]
}
if(argsLength>=7) {
  lufaxSID = system.args[6]
}



var screenshot = function(page, url, fileName) {
    page.viewportSize = { width: width, height: height };
    if(lufaxSID) {

      page.customHeaders = {
          'Cookie':'_lufaxSID="' + lufaxSID + '"'
      }    
    }

    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('Unable to access the network!');
        } else {
          window.setTimeout(function()  {//延迟截图
            page.render(fileName);
            page.close();
            return phantom.exit();
          }, lazyTime);  
        }
    });
}


screenshot(page, url, filePath);  
