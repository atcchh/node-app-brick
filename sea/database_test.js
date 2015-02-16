var Q = require("q");
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var HOST = '127.0.0.1';
var PORT = '27017';

//module.exports = Database;
function Database(dbname, host, port) {
        this._dbname = dbname;
        this._host = host;
        this._port = port;
}
Database.prototype = {
        getConnection : function() {
                console.log(this._dbname);
                if(!this._promise ) {
                        var db = new Db(this._dbname, new Server(this._host || HOST,  this._port || PORT, {}), {w:1});
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
        }
};

function Collection(database, collectionName) {
        this._db = database;
        this._collectionName = collectionName;
}
Collection.prototype = {
        insert : function(data)  {
                var a = this._getCollection();
                console.log(a);
                a.then(function(collection){
                        collection.insert(data, function(){});
                }, function(err) {// TODO set the error method
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
 var db = new Database('exampleDb1');
 var testCollection = db.getCollection('test');
 testCollection.insert({'name':'cango3111', 'age':121212});
 testCollection.find({name:'cango3111'}, function(data){
         console.log(data);
 });


var a = new Database('a');

 a.getCollection('test').insert({'name':'cango1', _id: '1'});
 a.getCollection('test').insert({'name':'cango2', _id: '1'});
 a.getCollection('test').insert({'name':'cango3', _id: '2'});
 a.getCollection('test').insert({'name':'cango4'});
 console.log(a);
