phantom.outputEncoding="utf8";  
var webpage = require("webpage");
var page = webpage.create();
page.viewportSize = {
    width: 1100,
  height: 2000
};
page.customHeaders = {
    'Cookie':'_lufaxSID="baea3378-bdfd-49dc-806a-4b7a8b875539,VQ2OuSBKiPBeWmXAwHfxqXQ4euhXgDmUWX4L7Ser5QNlq4yB0n4NJedQxiLUxXb/RpCGxAm3CuV8YHfySUN9yg=="'
}

page.open(url,function(status) {
    console.log('open url success');
    page.render("/lufaxMonitor/"+ path + "/lufax/" + pictureName + "_" + suffix + ".png" );
    console.log("/lufaxMonitor/"+ path + "/lufax/" + pictureName + "_" + suffix + ".png" );
    for(var e in page) {
        console.log(e + '--->' + page[e]);
        console.log('-----------------------------------------------');
    }
    console.log(page.cookies);
    if(index < lufaxPageList.pageList1.length -1) {
        var nextPicture = lufaxPageList.pageList1[index+1].name;
        var nextUrl = lufaxPageList.pageList1[index+1].url;
            saveUrlToPicture.apply(null,[nextPicture, nextUrl, index+1] );
        }else {
            return phantom.exit();  
        }
});