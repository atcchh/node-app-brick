var screenshotJob = require('./screenshotJob.js').screenshotJob

var job_detail = {
     	jobName:"lufax_list_transfer", 
		phantomjs_config : '--ssl-protocol=any',
		type:"screenshotJob",
		scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
		url:"https://list.lufax.com/list/transfer",
		prefixPath:"/tmp/lufax/list_transfer",
		width:"1200",
		height:"1200",
		lazyTime:"2000",
		isLogin:true
	}
screenshotJob(job_detail);
