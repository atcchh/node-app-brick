var http = require('http')
,   Database = require('./database');
;
//var db = new Database('PagerGen');
var dbList = {};
http.createServer(function (req, res) {
	console.log('{"url" : "'+req.url+'", "method":"'+req.method+ '"}');
	var collectionName = getCollectionName(req);
	if(!dbList.collectionName){
		dbList.collectionName = new Database(collectionName);
	}
	var db = dbList.collectionName;
	var method = req.method;
	switch (method) {
		case 'GET':
			
			var url = req.url;
			if(/^(\/([^\/]+)){2,2}$/.test(url)) {
				findAll(req, res,db);
			} else if(/^(\/([^\/]+)){3,3}$/.test(url)) {
				find(req,res,db);
			}
			break;
		case 'POST':
			insert(req,res,db);
			break;
		case 'DELETE':
			deleteById(req, res,db);
			break;
		case 'PUT':
			update(req,res,db);
			break;
		default:
			res.writeHead(403, {'Content-Type': 'application/json'});
  			res.end('{"message":"don\'t support","url" : "'+req.url+'", "method":"'+req.method+ '"}');	
	}
}).listen(3000, '0.0.0.0');
console.log('Server running at http://0.0.0.0:3000/');

function getModel(req) {
	var url = req.url;
	var result =  url.split("/");
	return result ? result[2] : undefined;
}
function getCollectionName(req) {
        var url = req.url;
        var result =  url.match(/^\/([^\/]+)/);
        return result ? result[1] : undefined;

}
function getId(req) {
	var url = req.url;
	var result =  url.split("/");
	return result ? result[3] : undefined;
}

function findAll(req, res, db) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var model = getModel(req);
	db.getCollection(model).findAll(function(data){
		
	        var result = {};
        	result[model] = data;
        	res.write(JSON.stringify(result));
        	res.end();
	})
}
function deleteById(req, res, db) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var model = getModel(req);
	var id = getId(req);
	db.getCollection(model).delete({id:id},function(num){
	        var result = {};
        	result['size'] = num;
        	res.write(JSON.stringify(result));

        	res.end();
	})
}
function update(req, res, db) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var model = getModel(req);
	var id = getId(req);

	var postData = "";
	req.addListener("data",function(data){  
	    postData  += data;   
	});  
	req.addListener("end",function(){
		if(postData) {
			var jsonData = JSON.parse(postData);
			var temp = model.substr(0,model.length -1);
	    	db.getCollection(model).update(id,jsonData[temp], function(num){
		        var result = {};
	        	result['size'] = num;
	        	res.write(JSON.stringify(result));
	        	res.end();
			})
    	} else {
    		res.write('{}');
    	}
	    res.end();
	})  

}
function find(req, res, db){
	res.writeHead(200, {'Content-Type': 'application/json'});
	var model = getModel(req);
	var id = getId(req);
	
	db.getCollection(model).find({id:id}, function(data){
		if(data && data[0]) {
        	res.write(JSON.stringify(data[0]));
        }  else {
        	res.write(JSON.stringify({}));
        }
        res.end();
        
	})
}
function insert(req, res,db) {
	var model = getModel(req);
	var postData = "";
	req.setEncoding("utf8");  
	req.addListener("data",function(data){  
	    postData  += data;   
	});  
	req.addListener("end",function(){
		var model = getModel(req);
		var temp = model.substr(0,model.length -1);
		var jsonData = JSON.parse(postData);
	    db.getCollection(model).insert(jsonData[temp]);
	    res.end();
	})  
}
