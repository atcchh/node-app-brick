var screenshotJob = require('./screenshotJob.js').screenshotJob

var job_detail = {
     	jobName:"lufax_lumi_index", 
		phantomjs_config : '--ssl-protocol=any',
		type:"screenshotJob",
		scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
		url:"https://lumi.lufax.com/lumi/index",
		prefixPath:"/tmp/lufax/lumi_index",
		width:"1200",
		height:"1200",
		lazyTime:"2000",
		isLogin:true
	}
screenshotJob(job_detail);
