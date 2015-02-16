// document : http://mongodb.github.io/node-mongodb-native/2.0/api/Db.html#collections
var Q = require("q");
var Db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var HOST = '127.0.0.1';
var PORT = '27017';

module.exports = Database;
function Database(dbname, host, port) {
        this._dbname = dbname;
        this._host = host;
        this._port = port;
}
Database.prototype = {
        getConnection : function() {
                
                if(!this._promise ) {
                        var db = new Db(this._dbname, new Server(this._host || HOST,  this._port || PORT, {}),{w:1});
                        this._promise = Q.fcall(function(){
                                var deferred = Q.defer();
                                db.open(function(err, db){
                                        if(err) {
                                                console.log(err);
                                                deferred.reject(err);
                                        } else {
                                                deferred.resolve(db);
                                        }
                                 });
                                 return deferred.promise;
                        });
                }
                return this._promise;
        },
        getCollection : function(collectionName) {
                return new Collection(this, collectionName);
        },
        getCollections: function(callBack) {
            this.getConnection().then(function(db){
                db.collections(callBack);
            })
        },
        getCollectionNames: function(callBack) {
            this.getConnection().then(function(db){
                db.collections(function(err, collections){
                    if(err) {
                        console.log(err);
                    } else {
                        var collectionNames = [];
                        for(var index in collections) {
                            var collection = collections[index];
                            collectionNames.push(collection.collectionName);
                        }
                        callBack(collectionNames);
                    }
                });
            })
        },
        getDataBaseInfo : function(callBack) {
            this.getConnection().then(function(db){
                var adminDb = db.admin();
                  // List all the available databases
                adminDb.listDatabases(function(err, dbs) {
                    if(err) {
                        console.log(err);
                    } else {
                        callBack(dbs);
                    }
                });
            });
        },
        getDataBaseNames : function(callBack) {
            this.getDataBaseInfo(function(batabaseInfo){
                var batabaseName = [];
                for(var index in batabaseInfo.databases) {
                    batabaseName.push(batabaseInfo.databases[index].name);
                }
                callBack(batabaseName);
            });
        },
};

function Collection(database, collectionName) {
        this._db = database;
        this._collectionName = collectionName;
}
Collection.prototype = {
        insert : function(data, handler)  {
                var a = this._getCollection();
                
                if(!data.id) {
                        data.id = new ObjectID().toHexString();
                }
                if(!data.createdAt) {
                        data.createdAt = new Date().getTime();
                }
                a.then(function(collection){
                        collection.insert(data, function(err, records){
                                if(err) {
                                        console.log(err);
                                } else {
                                        if(handler) {
                                                handler(records);
                                        }
                                }
                        });
                })
        },
        delete : function(data, handler) {
                this._getCollection().then(function(collection){
                        collection.remove(data, {w:1}, function(err, num) {
                                if(err) {
                                        console.log(err);
                                        return;
                                }
                                if(handler) {
                                        handler(num);
                                }
                        });
                })
        },
        update : function(targetID, newData, handler) {
                var _self = this;
                
                var _collection = this._getCollection();
                _collection.then(function(collection){
                        
                        collection.find({id:targetID}).toArray(function(err, data){
                                if(err) {
                                        console.log(err);
                                }
                                if(!newData.updatedAt) {
                                        newData.updatedAt = new Date().getTime();
                                }
                                for(var field in newData) {
                                        if(field != 'id') {
                                                data[0][field] = newData[field];
                                        }
                                };

                                
                                collection.save(data[0],{w:0},function(err,num){
                                        if(err) {
                                                console.log(err);
                                                return;
                                        }
                                        if(handler) {
                                                handler(num);
                                        }
                                })
                           
                        })      
                })

        },
        find : function(condition, handler)  {
                this._getCollection().then(function(collection){
                         collection.find(condition).toArray(function(err, data){
                                 if(err)  {
                                         console.log(err);
                                         return ;
                                 } else {
                                         handler(data);
                                 }

                         });
                });
        },
	findAll : function(handler) {
		this._getCollection().then(function(collection){
			collection.find().toArray(function(err, data){
                                 if(err)  {
                                         console.log(err);
                                         return ;
                                 } else {
                                         handler(data);
                                 }

                         });
		});
	},
        _getCollection : function() {
                var self = this;
                if(!this._collection) {
                        this._collection = this._db.getConnection().then(function(db) {
                                var collection = db.collection(self._collectionName);
                                if(!collection) {
                                        return db.createCollection(self._collectionName, function(err, t){
                                                if(!err) {
                                                        console.log(err);
                                                }
                                        });
                                } else {
                                        return collection;
                                }
                        });
                }
                return this._collection;
        }
}
// var db = new Database('exampleDb1');
// var testCollection = db.getCollection('T');
// var  id = new Date().getTime();
// testCollection.insert({'name':'cango3111', 'age':121212, 'id':id}, function(data) {
//         testCollection.find({id:id}, function(data) {
//                 data[0].address = 'shanghai';
//                 data[0].name = 'John';
//                 data[0].name1 = 'John';
//                 data[0].id = 1406104466898;
//                 console.log("start to update ");
//                 testCollection.update(1406104466898, data[0], function(num){
//                         console.log("end update ");
//                         testCollection.find({name:'John'},function(temp) {
//                                 console.log(temp);
//                         })
//                 })
//         })
// });
