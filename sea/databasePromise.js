var Q = require("q");
var Db = require('mongodb').Db;
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
        close: function() {
            
        }
};

function Collection(database, collectionName) {
        this._db = database;
        this._collectionName = collectionName;
}
Collection.prototype = {
        insert : function(data)  {
            var deferred = Q.defer();
            if(!data.id) {
                data.id = new ObjectID().toHexString();
            }
            if(!data.createdAt) {
                data.createdAt = new Date().getTime();
            }
            this._getCollection().then(function(collection){
                collection.insert(data, function(err, records){
                    if(err) {
                        deferred.reject(new Error(err));
                    } else {
                        deferred.resolve(records);
                    }
                });
            });
            return deferred.promise;
        },
        delete : function(data) {
            var deferred = Q.defer();
            this._getCollection().then(function(collection){
                collection.remove(data, {w:1}, function(err, num) {
                    if(err) {
                        deferred.reject(new Error(err));
                    } else {
                        deferred.resolve(num);
                    }
                });
            })
            return deferred.promise;
        },
        update : function(targetID, newData) {
            var deferred = Q.defer();
            var _self = this;
            var _collection = this._getCollection();
            _collection.then(function(collection){
                return collection.find({id:targetID}).toArray(function(err, data){
                    if(err) {
                        console.log(err);
                    }
                    
                    newData.updatedAt = new Date().getTime();
                    
                    for(var field in newData) {
                        if(field != 'id') {
                            data[0][field] = newData[field];
                        }

                    };

                    
                    collection.save(data[0],{w:0},function(err,num){
                        // TODO problem : the num is undefined
                        if(err) {
                            deferred.reject(new Error(err));
                        } else {
                            deferred.resolve(num);
                        }
                    })
                   
                })      
            })
            return deferred.promise;

        },
        find : function(condition)  {
            var deferred = Q.defer();
            this._getCollection().then(function(collection){
                collection.find(condition).toArray(function(err, data){
                    if(err) {
                        deferred.reject(new Error(err));
                    } else {
                        deferred.resolve(data);
                    }

                });
            });
            return deferred.promise;
        },
	findAll : function() {
        var deferred = Q.defer();
		this._getCollection().then(function(collection){
			collection.find().toArray(function(err, data){
                if(err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(data);
                }
            });
		});
        return deferred.promise;
	},
    _getCollection : function() {
        var self = this;
        if(!this._collection) {
            this._collection = this._db.getConnection().then(function(db) {
                var collection = db.collection(self._collectionName);
                if(!collection) {
                    return db.createCollection(self._collectionName);
                } else {
                    return collection;
                }
            });
        }
        return this._collection;
    }
}
// var db = new Database('exampleDb1');
// var testCollection = db.getCollection('T1');
// var  id = new Date().getTime();
// testCollection.insert({'name':'cango3111', 'age':121212, 'id':id})
//     .then(function(data){
//         console.log(data)
//         return testCollection.find({id:1406107123902});
//     }) .then(function(data){
//         console.log(data);
//         data[0].address = 'shanghai';
//         data[0].name = 'John';
//         data[0].name1 = 'John';
//         return testCollection.update(1406107123902, data[0])
//     }).then(function(num) {
//         console.log("update number is : " + num)
//         return testCollection.find({id:1406107123902});
//     }).then(function(data){
//         console.log(data);
//     });
