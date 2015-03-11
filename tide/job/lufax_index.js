var screenshotJob = require('./screenshotJob.js').screenshotJob

var job_detail = {
     	jobName:"lufax_index_login", 
		phantomjs_config : '--ssl-protocol=any',
		type:"screenshotJob",
		scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
		url:"https://www.lufax.com",
		prefixPath:"/tmp/lufax/index_login",
		width:"1200",
		height:"1200",
		lazyTime:"2000",
		isLogin:false
	}
screenshotJob(job_detail);
