var Database = require('./database');


var a = new Database('aaa');
a.getCollection("test1").insert({name:"cango"})

// a.getCollections(function(err, collections){
// 	console.log(collections);
// })
// a.getCollectionNames(function(names){
// 	console.log(names);
// })


// a.getDataBaseInfo(function(databaseInfo){
// 	console.log(databaseInfo);
// })
a.getDataBaseNames(function(databaseNames){
	console.log(databaseNames);
})