
var screenshot = function(page, url, fileName, callback) {
    page.viewportSize = { width: 320, height: 480 };
    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('Unable to access the network!');
        } else {
            page.render(fileName);
        }
        if(callback) {
            callback();
        }
    });
}

var page = require('webpage').create();
screenshot(page,'http://www.lufax.com', '/tmp/1.png', function() {
    screenshot(page, 'http://www.lufax.com','/tmp/2.png', function() {
        page.exit();
    });
});
