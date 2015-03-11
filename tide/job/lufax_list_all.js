var screenshotJob = require('./screenshotJob.js').screenshotJob

var job_detail = {
     	jobName:"lufax_list_all", 
		phantomjs_config : '--ssl-protocol=any',
		type:"screenshotJob",
		scriptPath:"/git/node-app-brick/tide/job/script/lufax/index_html.js",
		url:"https://list.lufax.com/list/all",
		prefixPath:"/tmp/lufax/list_all",
		width:"1200",
		height:"1200",
		lazyTime:"2000",
		isLogin:false
	}
screenshotJob(job_detail);
