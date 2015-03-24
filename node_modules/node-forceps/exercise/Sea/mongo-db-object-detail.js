{ domain: null,
  _events: {},
  _maxListeners: 10,
  databaseName: 'a',
  serverConfig: 
   { domain: null,
     _events: {},
     _maxListeners: 10,
     _callBackStore: 
      { domain: null,
        _events: {},
        _maxListeners: 10,
        _notReplied: {},
        id: 1 },
     _commandsStore: 
      { count: [Function],
        write: [Function],
        read_from_writer: [Function],
        read: [Function],
        validateBufferLimit: [Function],
        execute_queries: [Function],
        execute_writes: [Function] },
     auth: 
      { add: [Function],
        contains: [Function],
        remove: [Function],
        get: [Function],
        length: [Function],
        toArray: [Function] },
     _dbStore: 
      { add: [Function],
        reset: [Function],
        db: [Function],
        fetch: [Function],
        emit: [Function] },
     host: '127.0.0.1',
     port: '27017',
     options: { firstCall: true },
     internalMaster: true,
     connected: true,
     poolSize: 5,
     disableDriverBSONSizeCheck: false,
     _used: true,
     replicasetInstance: null,
     emitOpen: false,
     ssl: false,
     sslValidate: false,
     sslCA: null,
     sslCert: undefined,
     sslKey: undefined,
     sslPass: undefined,
     serverCapabilities: 
      { hasAggregationCursor: [Getter],
        hasWriteCommands: [Getter],
        hasTextSearch: [Getter],
        hasAuthCommands: [Getter],
        minWireVersion: [Getter],
        maxWireVersion: [Getter],
        maxNumberOfDocsInBatch: [Getter] },
     name: '127.0.0.1:27017',
     _readPreference: null,
     socketOptions: 
      { host: '127.0.0.1',
        port: '27017',
        domainSocket: false,
        timeout: 0,
        noDelay: true,
        keepAlive: 0,
        encoding: null,
        bufferSize: 0 },
     logger: { error: [Function], log: [Function], debug: [Function] },
     eventHandlers: 
      { error: [],
        parseError: [],
        poolReady: [],
        message: [],
        close: [],
        timeout: [] },
     _serverState: 'connected',
     _state: { runtimeStats: [Object] },
     recordQueryStats: false,
     socketTimeoutMS: [Getter/Setter],
     db: [Circular],
     dbInstances: [ [Circular] ],
     connectionPool: 
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        socketOptions: [Object],
        bson: [Object],
        poolSize: 5,
        minPoolSize: 3,
        openConnections: [Object],
        connectionId: 5,
        currentConnectionIndex: 1,
        _poolState: 'connected',
        _timeout: false,
        _timeToWait: null,
        logger: [Object] },
     isMasterDoc: 
      { ismaster: true,
        maxBsonObjectSize: 16777216,
        maxMessageSizeBytes: 48000000,
        localTime: Mon Feb 16 2015 10:15:15 GMT+0800 (CST),
        ok: 1,
        minWireVersion: 0,
        maxWireVersion: 0 } },
  options: { w: 1 },
  _applicationClosed: false,
  slaveOk: false,
  bufferMaxEntries: -1,
  native_parser: undefined,
  bsonLib: 
   { Code: [Function: Code],
     Symbol: [Function: Symbol],
     BSON: 
      { [Function: BSON]
        BSON_INT32_MAX: 2147483647,
        BSON_INT32_MIN: -2147483648,
        BSON_INT64_MAX: 9223372036854776000,
        BSON_INT64_MIN: -9223372036854776000,
        JS_INT_MAX: 9007199254740992,
        JS_INT_MIN: -9007199254740992,
        BSON_DATA_NUMBER: 1,
        BSON_DATA_STRING: 2,
        BSON_DATA_OBJECT: 3,
        BSON_DATA_ARRAY: 4,
        BSON_DATA_BINARY: 5,
        BSON_DATA_OID: 7,
        BSON_DATA_BOOLEAN: 8,
        BSON_DATA_DATE: 9,
        BSON_DATA_NULL: 10,
        BSON_DATA_REGEXP: 11,
        BSON_DATA_CODE: 13,
        BSON_DATA_SYMBOL: 14,
        BSON_DATA_CODE_W_SCOPE: 15,
        BSON_DATA_INT: 16,
        BSON_DATA_TIMESTAMP: 17,
        BSON_DATA_LONG: 18,
        BSON_DATA_MIN_KEY: 255,
        BSON_DATA_MAX_KEY: 127,
        BSON_BINARY_SUBTYPE_DEFAULT: 0,
        BSON_BINARY_SUBTYPE_FUNCTION: 1,
        BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
        BSON_BINARY_SUBTYPE_UUID: 3,
        BSON_BINARY_SUBTYPE_MD5: 4,
        BSON_BINARY_SUBTYPE_USER_DEFINED: 128,
        calculateObjectSize: [Function: calculateObjectSize],
        serializeWithBufferAndIndex: [Function: serializeWithBufferAndIndex],
        serialize: [Function],
        functionCache: {},
        deserializeStream: [Function],
        deserialize: [Function],
        checkKey: [Function: checkKey] },
     DBRef: [Function: DBRef],
     Binary: 
      { [Function: Binary]
        BUFFER_SIZE: 256,
        SUBTYPE_DEFAULT: 0,
        SUBTYPE_FUNCTION: 1,
        SUBTYPE_BYTE_ARRAY: 2,
        SUBTYPE_UUID_OLD: 3,
        SUBTYPE_UUID: 4,
        SUBTYPE_MD5: 5,
        SUBTYPE_USER_DEFINED: 128 },
     ObjectID: 
      { [Function: ObjectID]
        index: 16257170,
        createPk: [Function: createPk],
        createFromTime: [Function: createFromTime],
        createFromHexString: [Function: createFromHexString] },
     Long: 
      { [Function: Long]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Timestamp: 
      { [Function: Timestamp]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Double: [Function: Double],
     MinKey: [Function: MinKey],
     MaxKey: [Function: MaxKey],
     promoteLongs: true },
  bson: { promoteLongs: true },
  bson_deserializer: 
   { Code: [Function: Code],
     Symbol: [Function: Symbol],
     BSON: 
      { [Function: BSON]
        BSON_INT32_MAX: 2147483647,
        BSON_INT32_MIN: -2147483648,
        BSON_INT64_MAX: 9223372036854776000,
        BSON_INT64_MIN: -9223372036854776000,
        JS_INT_MAX: 9007199254740992,
        JS_INT_MIN: -9007199254740992,
        BSON_DATA_NUMBER: 1,
        BSON_DATA_STRING: 2,
        BSON_DATA_OBJECT: 3,
        BSON_DATA_ARRAY: 4,
        BSON_DATA_BINARY: 5,
        BSON_DATA_OID: 7,
        BSON_DATA_BOOLEAN: 8,
        BSON_DATA_DATE: 9,
        BSON_DATA_NULL: 10,
        BSON_DATA_REGEXP: 11,
        BSON_DATA_CODE: 13,
        BSON_DATA_SYMBOL: 14,
        BSON_DATA_CODE_W_SCOPE: 15,
        BSON_DATA_INT: 16,
        BSON_DATA_TIMESTAMP: 17,
        BSON_DATA_LONG: 18,
        BSON_DATA_MIN_KEY: 255,
        BSON_DATA_MAX_KEY: 127,
        BSON_BINARY_SUBTYPE_DEFAULT: 0,
        BSON_BINARY_SUBTYPE_FUNCTION: 1,
        BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
        BSON_BINARY_SUBTYPE_UUID: 3,
        BSON_BINARY_SUBTYPE_MD5: 4,
        BSON_BINARY_SUBTYPE_USER_DEFINED: 128,
        calculateObjectSize: [Function: calculateObjectSize],
        serializeWithBufferAndIndex: [Function: serializeWithBufferAndIndex],
        serialize: [Function],
        functionCache: {},
        deserializeStream: [Function],
        deserialize: [Function],
        checkKey: [Function: checkKey] },
     DBRef: [Function: DBRef],
     Binary: 
      { [Function: Binary]
        BUFFER_SIZE: 256,
        SUBTYPE_DEFAULT: 0,
        SUBTYPE_FUNCTION: 1,
        SUBTYPE_BYTE_ARRAY: 2,
        SUBTYPE_UUID_OLD: 3,
        SUBTYPE_UUID: 4,
        SUBTYPE_MD5: 5,
        SUBTYPE_USER_DEFINED: 128 },
     ObjectID: 
      { [Function: ObjectID]
        index: 16257170,
        createPk: [Function: createPk],
        createFromTime: [Function: createFromTime],
        createFromHexString: [Function: createFromHexString] },
     Long: 
      { [Function: Long]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Timestamp: 
      { [Function: Timestamp]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Double: [Function: Double],
     MinKey: [Function: MinKey],
     MaxKey: [Function: MaxKey],
     promoteLongs: true },
  bson_serializer: 
   { Code: [Function: Code],
     Symbol: [Function: Symbol],
     BSON: 
      { [Function: BSON]
        BSON_INT32_MAX: 2147483647,
        BSON_INT32_MIN: -2147483648,
        BSON_INT64_MAX: 9223372036854776000,
        BSON_INT64_MIN: -9223372036854776000,
        JS_INT_MAX: 9007199254740992,
        JS_INT_MIN: -9007199254740992,
        BSON_DATA_NUMBER: 1,
        BSON_DATA_STRING: 2,
        BSON_DATA_OBJECT: 3,
        BSON_DATA_ARRAY: 4,
        BSON_DATA_BINARY: 5,
        BSON_DATA_OID: 7,
        BSON_DATA_BOOLEAN: 8,
        BSON_DATA_DATE: 9,
        BSON_DATA_NULL: 10,
        BSON_DATA_REGEXP: 11,
        BSON_DATA_CODE: 13,
        BSON_DATA_SYMBOL: 14,
        BSON_DATA_CODE_W_SCOPE: 15,
        BSON_DATA_INT: 16,
        BSON_DATA_TIMESTAMP: 17,
        BSON_DATA_LONG: 18,
        BSON_DATA_MIN_KEY: 255,
        BSON_DATA_MAX_KEY: 127,
        BSON_BINARY_SUBTYPE_DEFAULT: 0,
        BSON_BINARY_SUBTYPE_FUNCTION: 1,
        BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
        BSON_BINARY_SUBTYPE_UUID: 3,
        BSON_BINARY_SUBTYPE_MD5: 4,
        BSON_BINARY_SUBTYPE_USER_DEFINED: 128,
        calculateObjectSize: [Function: calculateObjectSize],
        serializeWithBufferAndIndex: [Function: serializeWithBufferAndIndex],
        serialize: [Function],
        functionCache: {},
        deserializeStream: [Function],
        deserialize: [Function],
        checkKey: [Function: checkKey] },
     DBRef: [Function: DBRef],
     Binary: 
      { [Function: Binary]
        BUFFER_SIZE: 256,
        SUBTYPE_DEFAULT: 0,
        SUBTYPE_FUNCTION: 1,
        SUBTYPE_BYTE_ARRAY: 2,
        SUBTYPE_UUID_OLD: 3,
        SUBTYPE_UUID: 4,
        SUBTYPE_MD5: 5,
        SUBTYPE_USER_DEFINED: 128 },
     ObjectID: 
      { [Function: ObjectID]
        index: 16257170,
        createPk: [Function: createPk],
        createFromTime: [Function: createFromTime],
        createFromHexString: [Function: createFromHexString] },
     Long: 
      { [Function: Long]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Timestamp: 
      { [Function: Timestamp]
        fromInt: [Function],
        fromNumber: [Function],
        fromBits: [Function],
        fromString: [Function],
        INT_CACHE_: [Object],
        TWO_PWR_16_DBL_: 65536,
        TWO_PWR_24_DBL_: 16777216,
        TWO_PWR_32_DBL_: 4294967296,
        TWO_PWR_31_DBL_: 2147483648,
        TWO_PWR_48_DBL_: 281474976710656,
        TWO_PWR_64_DBL_: 18446744073709552000,
        TWO_PWR_63_DBL_: 9223372036854776000,
        ZERO: [Object],
        ONE: [Object],
        NEG_ONE: [Object],
        MAX_VALUE: [Object],
        MIN_VALUE: [Object],
        TWO_PWR_24_: [Object] },
     Double: [Function: Double],
     MinKey: [Function: MinKey],
     MaxKey: [Function: MaxKey],
     promoteLongs: true },
  _state: 'connected',
  pkFactory: 
   { [Function: ObjectID]
     index: 16257170,
     createPk: [Function: createPk],
     createFromTime: [Function: createFromTime],
     createFromHexString: [Function: createFromHexString] },
  forceServerObjectId: false,
  safe: false,
  notReplied: {},
  isInitializing: true,
  openCalled: true,
  commands: [],
  logger: { error: [Function], log: [Function], debug: [Function] },
  tag: 1424052915523,
  eventHandlers: 
   { error: [],
     parseError: [],
     poolReady: [],
     message: [],
     close: [] },
  serializeFunctions: false,
  raw: false,
  recordQueryStats: false,
  retryMiliSeconds: 1000,
  numberOfRetries: 60,
  readPreference: undefined }




domain-------------->null
_events-------------->[object Object]
_maxListeners-------------->10
databaseName-------------->a
serverConfig-------------->[object Object]
options-------------->[object Object]
_applicationClosed-------------->false
slaveOk-------------->false
bufferMaxEntries-------------->-1
native_parser-------------->undefined
bsonLib-------------->[object Object]
bson-------------->[object Object]
bson_deserializer-------------->[object Object]
bson_serializer-------------->[object Object]
_state-------------->connected
pkFactory-------------->function ObjectID(id) {
  if(!(this instanceof ObjectID)) return new ObjectID(id);

  this._bsontype = 'ObjectID';
  var __id = null;

  // Throw an error if it's not a valid setup
  if(id != null && 'number' != typeof id && (id.length != 12 && id.length != 24))
    throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");

  // Generate id based on the input
  if(id == null || typeof id == 'number') {
    // convert to 12 byte binary string
    this.id = this.generate(id);
  } else if(id != null && id.length === 12) {
    // assume 12 byte string
    this.id = id;
  } else if(checkForHexRegExp.test(id)) {
    return ObjectID.createFromHexString(id);
  } else {
    throw new Error("Value passed in is not a valid 24 character hex string");
  }

  if(ObjectID.cacheHexString) this.__id = this.toHexString();
}
forceServerObjectId-------------->false
safe-------------->false
notReplied-------------->[object Object]
isInitializing-------------->true
openCalled-------------->true
commands-------------->
logger-------------->[object Object]
tag-------------->1424053396713
eventHandlers-------------->[object Object]
serializeFunctions-------------->false
raw-------------->false
recordQueryStats-------------->false
retryMiliSeconds-------------->1000
numberOfRetries-------------->60
readPreference-------------->undefined
open-------------->function (callback) {
  var self = this;

  // Check that the user has not called this twice
  if(this.openCalled) {
    // Close db
    this.close();
    // Throw error
    throw new Error("db object already connecting, open cannot be called multiple times");
  }

  // If we have a specified read preference
  if(this.readPreference != null) this.serverConfig.setReadPreference(this.readPreference);

  // Set that db has been opened
  this.openCalled = true;

  // Set the status of the server
  self._state = 'connecting';
  
  // Set up connections
  if(self.serverConfig instanceof Server || self.serverConfig instanceof ReplSet || self.serverConfig instanceof Mongos) {
    // Ensure we have the original options passed in for the server config
    var connect_options = {};
    for(var name in self.serverConfig.options) {
      connect_options[name] = self.serverConfig.options[name]
    }
    connect_options.firstCall = true;

    // Attempt to connect
    self.serverConfig.connect(self, connect_options, function(err, result) {
      if(err != null) {
        // Close db to reset connection
        return self.close(function () {
          // Return error from connection
          return callback(err, null);
        });
      }
      // Set the status of the server
      self._state = 'connected';
      // If we have queued up commands execute a command to trigger replays
      if(self.commands.length > 0) _execute_queued_command(self);
      // Callback
      process.nextTick(function() {
        try {
          callback(null, self);
        } catch(err) {
          self.close();
          throw err;
        }
      });
    });
  } else {
    try {
      callback(Error("Server parameter must be of type Server, ReplSet or Mongos"), null);
    } catch(err) {
      self.close();
      throw err;
    }
  }
}
db-------------->function (dbName) {
  // Copy the options and add out internal override of the not shared flag
  var options = {};
  for(var key in this.options) {
    options[key] = this.options[key];
  }

  // Add override flag
  options['override_used_flag'] = true;
  // Check if the db already exists and reuse if it's the case
  var db = this.serverConfig._dbStore.fetch(dbName);

  // Create a new instance
  if(!db) {
    db = new Db(dbName, this.serverConfig, options);
  }

  // Return the db object
  return db;  
}
close-------------->function (forceClose, callback) {
  var self = this;
  // Ensure we force close all connections
  this._applicationClosed = false;

  if(typeof forceClose == 'function') {
    callback = forceClose;
  } else if(typeof forceClose == 'boolean') {
    this._applicationClosed = forceClose;
  }

  this.serverConfig.close(function(err, result) {
    // You can reuse the db as everything is shut down
    self.openCalled = false;
    // If we have a callback call it
    if(callback) callback(err, result);    
  });
}
admin-------------->function (callback) {
  if(callback == null) return new Admin(this);
  callback(null, new Admin(this));
}
collectionsInfo-------------->function (collectionName, callback) {
  if(callback == null && typeof collectionName == 'function') { callback = collectionName; collectionName = null; }
  // Create selector
  var selector = {};
  // If we are limiting the access to a specific collection name
  if(collectionName != null) selector.name = this.databaseName + "." + collectionName;

  // Return Cursor
  // callback for backward compatibility
  if(callback) {
    callback(null, new Cursor(this, new Collection(this, DbCommand.SYSTEM_NAMESPACE_COLLECTION), selector));
  } else {
    return new Cursor(this, new Collection(this, DbCommand.SYSTEM_NAMESPACE_COLLECTION), selector);
  }
}
collectionNames-------------->function (collectionName, options, callback) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  collectionName = args.length ? args.shift() : null;
  options = args.length ? args.shift() || {} : {};

  // Ensure no breaking behavior
  if(collectionName != null && typeof collectionName == 'object') {
    options = collectionName;
    collectionName = null;
  }

  // Let's make our own callback to reuse the existing collections info method
  self.collectionsInfo(collectionName, function(err, cursor) {
    if(err != null) return callback(err, null);

    cursor.toArray(function(err, documents) {
      if(err != null) return callback(err, null);

      // List of result documents that have been filtered
      var filtered_documents = documents.filter(function(document) {
        return !(document.name.indexOf(self.databaseName) == -1 || document.name.indexOf('$') != -1);
      });

      // If we are returning only the names
      if(options.namesOnly) {
        filtered_documents = filtered_documents.map(function(document) { return document.name });
      }

      // Return filtered items
      callback(null, filtered_documents);
    });
  });
}
collection-------------->function (collectionName, options, callback) {
  var self = this;
  if(typeof options === "function") { callback = options; options = {}; }
  // Execute safe

  if(options && (options.strict)) {
    self.collectionNames(collectionName, function(err, collections) {
      if(err != null) return callback(err, null);

      if(collections.length == 0) {
        return callback(new Error("Collection " + collectionName + " does not exist. Currently in safe mode."), null);
      } else {
        try {
          var collection = new Collection(self, collectionName, self.pkFactory, options);
        } catch(err) {
          return callback(err, null);
        }
        return callback(null, collection);
      }
    });
  } else {
    try {
      var collection = new Collection(self, collectionName, self.pkFactory, options);
    } catch(err) {
      if(callback == null) {
        throw err;
      } else {
        return callback(err, null);
      }
    }

    // If we have no callback return collection object
    return callback == null ? collection : callback(null, collection);
  }
}
collections-------------->function (callback) {
  var self = this;
  // Let's get the collection names
  self.collectionNames(function(err, documents) {
    if(err != null) return callback(err, null);
    var collections = [];
    documents.forEach(function(document) {
      collections.push(new Collection(self, document.name.replace(self.databaseName + ".", ''), self.pkFactory));
    });
    // Return the collection objects
    callback(null, collections);
  });
}
eval-------------->function (code, parameters, options, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 1);
  callback = args.pop();
  parameters = args.length ? args.shift() : parameters;
  options = args.length ? args.shift() || {} : {};

  var finalCode = code;
  var finalParameters = [];
  // If not a code object translate to one
  if(!(finalCode instanceof this.bsonLib.Code)) {
    finalCode = new this.bsonLib.Code(finalCode);
  }

  // Ensure the parameters are correct
  if(parameters != null && parameters.constructor != Array && typeof parameters !== 'function') {
    finalParameters = [parameters];
  } else if(parameters != null && parameters.constructor == Array && typeof parameters !== 'function') {
    finalParameters = parameters;
  }

  // Create execution selector
  var selector = {'$eval':finalCode, 'args':finalParameters};
  // Check if the nolock parameter is passed in
  if(options['nolock']) {
    selector['nolock'] = options['nolock'];
  }

  // Set primary read preference
  options.readPreference = ReadPreference.PRIMARY;

  // Execute the eval
  this.collection(DbCommand.SYSTEM_COMMAND_COLLECTION).findOne(selector, options, function(err, result) {
    if(err) return callback(err);

    if(result && result.ok == 1) {
      callback(null, result.retval);
    } else if(result) {
      callback(new Error("eval failed: " + result.errmsg), null); return;
    } else {
      callback(err, result);
    }
  });
}
dereference-------------->function (dbRef, callback) {
  var db = this;
  // If we have a db reference then let's get the db first
  if(dbRef.db != null) db = this.db(dbRef.db);
  // Fetch the collection and find the reference
  var collection = db.collection(dbRef.namespace);
  collection.findOne({'_id':dbRef.oid}, function(err, result) {
    callback(err, result);
  });
}
logout-------------->function (options, callback) {
  var self = this;
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  // Number of connections we need to logout from
  var numberOfConnections = this.serverConfig.allRawConnections().length;

  // Let's generate the logout command object
  var logoutCommand = DbCommand.logoutCommand(self, {logout:1}, options);
  self._executeQueryCommand(logoutCommand, {onAll:true}, function(err, result) {
    // Count down
    numberOfConnections = numberOfConnections - 1;
    // Work around the case where the number of connections are 0
    if(numberOfConnections <= 0 && typeof callback == 'function') {
      var internalCallback = callback;
      callback = null;

      // Remove the db from auths
      self.serverConfig.auth.remove(self.databaseName);

      // Handle error result
      utils.handleSingleCommandResultReturn(true, false, internalCallback)(err, result);
    }
  });
}
authenticate-------------->function (username, password, options, callback) {
  var self = this;

  if(typeof options == 'function') {
    callback = options;
    options = {};
  }

  // Set default mechanism
  if(!options.authMechanism) {
    options.authMechanism = 'MONGODB-CR';
  } else if(options.authMechanism != 'GSSAPI' 
    && options.authMechanism != 'MONGODB-CR'
    && options.authMechanism != 'MONGODB-X509'
    && options.authMechanism != 'PLAIN') {
      return callback(new Error("only GSSAPI, PLAIN, MONGODB-X509 or MONGODB-CR is supported by authMechanism"));
  }

  // the default db to authenticate against is 'this'
  // if authententicate is called from a retry context, it may be another one, like admin
  var authdb = options.authdb ? options.authdb : self.databaseName;
  authdb = options.authSource ? options.authSource : authdb;

  // Callback
  var _callback = function(err, result) {
    if(self.listeners("authenticated").length > 9) {
      self.emit("authenticated", err, result);
    }

    // Return to caller
    callback(err, result);
  }

  // If classic auth delegate to auth command
  if(options.authMechanism == 'MONGODB-CR') {
    mongodb_cr_authenticate(self, username, password, authdb, options, _callback);
  } else if(options.authMechanism == 'PLAIN') {
    mongodb_plain_authenticate(self, username, password, options, _callback);
  } else if(options.authMechanism == 'MONGODB-X509') {
    mongodb_x509_authenticate(self, username, password, options, _callback);
  } else if(options.authMechanism == 'GSSAPI') {
    //
    // Kerberos library is not installed, throw and error
    if(hasKerberos == false) {
      console.log("========================================================================================");
      console.log("=  Please make sure that you install the Kerberos library to use GSSAPI                =");
      console.log("=                                                                                      =");
      console.log("=  npm install -g kerberos                                                             =");
      console.log("=                                                                                      =");
      console.log("=  The Kerberos package is not installed by default for simplicities sake              =");
      console.log("=  and needs to be global install                                                      =");
      console.log("========================================================================================");
      throw new Error("Kerberos library not installed");
    }

    if(process.platform == 'win32') {
      mongodb_sspi_authenticate(self, username, password, authdb, options, _callback);
    } else {
      // We have the kerberos library, execute auth process
      mongodb_gssapi_authenticate(self, username, password, authdb, options, _callback);      
    }
  }
}
addUser-------------->function (username, password, options, callback) {
  // Checkout a write connection to get the server capabilities
  var connection = this.serverConfig.checkoutWriter();
  if(connection != null && connection.serverCapabilities != null && connection.serverCapabilities.hasAuthCommands) {
    return _executeAuthCreateUserCommand(this, username, password, options, callback);
  }

  // Unpack the parameters
  var self = this;
  var args = Array.prototype.slice.call(arguments, 2);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  // Get the error options
  var errorOptions = _getWriteConcern(this, options);
  errorOptions.w = errorOptions.w == null ? 1 : errorOptions.w;
  // Use node md5 generator
  var md5 = crypto.createHash('md5');
  // Generate keys used for authentication
  md5.update(username + ":mongo:" + password);
  var userPassword = md5.digest('hex');
  // Fetch a user collection
  var collection = this.collection(DbCommand.SYSTEM_USER_COLLECTION);
  // Check if we are inserting the first user
  collection.count({}, function(err, count) {
    // We got an error (f.ex not authorized)
    if(err != null) return callback(err, null);
    // Check if the user exists and update i
    collection.find({user: username}, {dbName: options['dbName']}).toArray(function(err, documents) {
      // We got an error (f.ex not authorized)
      if(err != null) return callback(err, null);
      // Add command keys
      var commandOptions = errorOptions;
      commandOptions.dbName = options['dbName'];
      commandOptions.upsert = true;

      // We have a user, let's update the password or upsert if not
      collection.update({user: username},{$set: {user: username, pwd: userPassword}}, commandOptions, function(err, results, full) {
        if(count == 0 && err) {
          callback(null, [{user:username, pwd:userPassword}]);
        } else if(err) {
          callback(err, null)
        } else {
          callback(null, [{user:username, pwd:userPassword}]);
        }
      });
    });
  });
}
removeUser-------------->function (username, options, callback) {
  // Checkout a write connection to get the server capabilities
  var connection = this.serverConfig.checkoutWriter();
  if(connection != null && connection.serverCapabilities != null && connection.serverCapabilities.hasAuthCommands) {
    return _executeAuthRemoveUserCommand(this, username, options, callback);
  }

  // Unpack the parameters
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  // Figure out the safe mode settings
  var safe = self.safe != null && self.safe == false ? {w: 1} : self.safe;
  // Override with options passed in if applicable
  safe = options != null && options['safe'] != null ? options['safe'] : safe;
  // Ensure it's at least set to safe
  safe = safe == null ? {w: 1} : safe;

  // Fetch a user collection
  var collection = this.collection(DbCommand.SYSTEM_USER_COLLECTION);
  collection.findOne({user: username}, {dbName: options['dbName']}, function(err, user) {
    if(user != null) {
      // Add command keys
      var commandOptions = safe;
      commandOptions.dbName = options['dbName'];

      collection.remove({user: username}, commandOptions, function(err, result) {
        callback(err, true);
      });
    } else {
      callback(err, false);
    }
  });
}
createCollection-------------->function (collectionName, options, callback) {
  var self = this;
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }

  // Figure out the safe mode settings
  var safe = self.safe != null && self.safe == false ? {w: 1} : self.safe;
  // Override with options passed in if applicable
  safe = options != null && options['safe'] != null ? options['safe'] : safe;
  // Ensure it's at least set to safe
  safe = safe == null ? {w: 1} : safe;

  // Check if we have the name
  this.collectionNames(collectionName, function(err, collections) {
    if(err != null) return callback(err, null);

    var found = false;
    collections.forEach(function(collection) {
      if(collection.name == self.databaseName + "." + collectionName) found = true;
    });

    // If the collection exists either throw an exception (if db in safe mode) or return the existing collection
    if(found && options && options.strict) {
      return callback(new Error("Collection " + collectionName + " already exists. Currently in safe mode."), null);
    } else if(found){
      try {
        var collection = new Collection(self, collectionName, self.pkFactory, options);
      } catch(err) {
        return callback(err, null);
      }
      return callback(null, collection);
    }

    // Create a new collection and return it
    self._executeQueryCommand(DbCommand.createCreateCollectionCommand(self, collectionName, options)
      , {read:false, safe:safe}
      , utils.handleSingleCommandResultReturn(null, null, function(err, result) {
        if(err) return callback(err, null);
        // Create collection and return
        try {
          return callback(null, new Collection(self, collectionName, self.pkFactory, options));
        } catch(err) {
          return callback(err, null);
        }
      }));
  });
}
command-------------->function (selector, options, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {};
  }

  // Ignore command preference (I know what I'm doing)
  var ignoreCommandFilter = options.ignoreCommandFilter ? options.ignoreCommandFilter : false;
  // Set read preference if we set one
  var readPreference = _getReadConcern(this, options);

  // Ensure only commands who support read Prefrences are exeuted otherwise override and use Primary
  if(readPreference != false && ignoreCommandFilter == false) {
    if(selector['group'] || selector['aggregate'] || selector['collStats'] || selector['dbStats']
      || selector['count'] || selector['distinct'] || selector['geoNear'] || selector['geoSearch'] 
      || selector['geoWalk'] || selector['text']
      || (selector['mapreduce'] && (selector.out == 'inline' || selector.out.inline))) {
      // Set the read preference
      options.readPreference = readPreference;
    } else {
      options.readPreference = ReadPreference.PRIMARY;
    }
  } else if(readPreference != false) {
    options.readPreference = readPreference;
  }

  // Add the maxTimeMS option to the command if specified
  if(typeof options.maxTimeMS == 'number') {
    selector.maxTimeMS = options.maxTimeMS    
  }

  // Command options
  var command_options = {};

  // Do we have an override for checkKeys
  if(typeof options['checkKeys'] == 'boolean') command_options['checkKeys'] = options['checkKeys'];
  command_options['checkKeys'] = typeof options['checkKeys'] == 'boolean' ? options['checkKeys'] : false;
  if(typeof options['serializeFunctions'] == 'boolean') command_options['serializeFunctions'] = options['serializeFunctions'];
  if(options['dbName']) command_options['dbName'] = options['dbName'];

  // If we have a write command, remove readPreference as an option
  if((options.writeCommand 
    || selector['findAndModify'] 
    || selector['insert'] || selector['update'] || selector['delete']
    || selector['createUser'] || selector['updateUser'] || selector['removeUser'])
    && options.readPreference) {
    delete options['readPreference'];
  }

  // Execute a query command
  this._executeQueryCommand(DbCommand.createDbSlaveOkCommand(this, selector, command_options), options, function(err, results) {
    if(err) return callback(err, null);
    if(results.documents[0].errmsg) 
      return callback(utils.toError(results.documents[0]), null);
    callback(null, results.documents[0]);
  });
}
dropCollection-------------->function (collectionName, callback) {
  var self = this;
  callback || (callback = function(){});

  // Drop the collection
  this._executeQueryCommand(DbCommand.createDropCollectionCommand(this, collectionName)
    , utils.handleSingleCommandResultReturn(true, false, callback)
  );
}
renameCollection-------------->function (fromCollection, toCollection, options, callback) {
  var self = this;

  if(typeof options == 'function') {
    callback = options;
    options = {}
  }

  // Add return new collection
  options.new_collection = true;

  // Execute using the collection method
  this.collection(fromCollection).rename(toCollection, options, callback);
}
lastError-------------->function (options, connectionOptions, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};
  connectionOptions = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createGetLastErrorCommand(options, this), connectionOptions, function(err, error) {
    callback(err, error && error.documents);
  });
}
error-------------->function (options, connectionOptions, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};
  connectionOptions = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createGetLastErrorCommand(options, this), connectionOptions, function(err, error) {
    callback(err, error && error.documents);
  });
}
lastStatus-------------->function (options, connectionOptions, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};
  connectionOptions = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createGetLastErrorCommand(options, this), connectionOptions, function(err, error) {
    callback(err, error && error.documents);
  });
}
previousErrors-------------->function (options, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createGetPreviousErrorsCommand(this), options, function(err, error) {
    callback(err, error.documents);
  });
}
executeDbCommand-------------->function (command_hash, options, callback) {
  if(callback == null) { callback = options; options = {}; }
  this._executeQueryCommand(DbCommand.createDbSlaveOkCommand(this, command_hash, options), options, function(err, result) {
    if(callback) callback(err, result);
  });
}
executeDbAdminCommand-------------->function (command_hash, options, callback) {
  if(typeof options == 'function') {
    callback = options;
    options = {}
  }

  if(options.readPreference) {
    options.read = options.readPreference;
  }

  this._executeQueryCommand(DbCommand.createAdminDbCommand(this, command_hash), options, function(err, result) {
    if(callback) callback(err, result);
  });
}
resetErrorHistory-------------->function (options, callback) {
  // Unpack calls
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createResetErrorHistoryCommand(this), options, function(err, error) {
    if(callback) callback(err, error && error.documents);
  });
}
createIndex-------------->function (collectionName, fieldOrSpec, options, callback) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 2);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};
  options = typeof callback === 'function' ? options : callback;
  options = options == null ? {} : options;

  // Get the error options
  var errorOptions = _getWriteConcern(this, options);
  // Create command
  var command = DbCommand.createCreateIndexCommand(this, collectionName, fieldOrSpec, options);
  // Default command options
  var commandOptions = {};

  // If we have error conditions set handle them
  if(_hasWriteConcern(errorOptions) && typeof callback == 'function') {
    // Insert options
    commandOptions['read'] = false;
    // If we have safe set set async to false
    if(errorOptions == null) commandOptions['async'] = true;

    // Set safe option
    commandOptions['safe'] = errorOptions;
    // If we have an error option
    if(typeof errorOptions == 'object') {
      var keys = Object.keys(errorOptions);
      for(var i = 0; i < keys.length; i++) {
        commandOptions[keys[i]] = errorOptions[keys[i]];
      }
    }

    // Execute insert command
    this._executeInsertCommand(command, commandOptions, function(err, result) {
      if(err != null) return callback(err, null);

      result = result && result.documents;
      if (result[0].err) {
        callback(utils.toError(result[0]));
      } else {
        callback(null, command.documents[0].name);
      }
    });
  } else if(_hasWriteConcern(errorOptions) && callback == null) {
    throw new Error("Cannot use a writeConcern without a provided callback");
  } else {
    // Execute insert command
    var result = this._executeInsertCommand(command, commandOptions);
    // If no callback just return
    if(!callback) return;
    // If error return error
    if(result instanceof Error) {
      return callback(result);
    }
    // Otherwise just return
    return callback(null, null);
  }
}
ensureIndex-------------->function (collectionName, fieldOrSpec, options, callback) {
  var self = this;

  if (typeof callback === 'undefined' && typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (options == null) {
    options = {};
  }

  // Get the error options
  var errorOptions = _getWriteConcern(this, options);
  // Make sure we don't try to do a write concern without a callback
  if(_hasWriteConcern(errorOptions) && callback == null)
    throw new Error("Cannot use a writeConcern without a provided callback");
  // Create command
  var command = DbCommand.createCreateIndexCommand(this, collectionName, fieldOrSpec, options);
  var index_name = command.documents[0].name;

  // Default command options
  var commandOptions = {};
  // Check if the index allready exists
  this.indexInformation(collectionName, function(err, collectionInfo) {
    if(err != null) return callback(err, null);

    if(!collectionInfo[index_name])  {
      // If we have error conditions set handle them
      if(_hasWriteConcern(errorOptions) && typeof callback == 'function') {
        // Insert options
        commandOptions['read'] = false;
        // If we have safe set set async to false
        if(errorOptions == null) commandOptions['async'] = true;

        // If we have an error option
        if(typeof errorOptions == 'object') {
          var keys = Object.keys(errorOptions);
          for(var i = 0; i < keys.length; i++) {
            commandOptions[keys[i]] = errorOptions[keys[i]];
          }
        }

        if(typeof callback === 'function' 
          && commandOptions.w < 1 && !commandOptions.fsync && !commandOptions.journal) {
          commandOptions.w = 1;
        }

        self._executeInsertCommand(command, commandOptions, function(err, result) {
          // Only callback if we have one specified
          if(typeof callback === 'function') {
            if(err != null) return callback(err, null);

            result = result && result.documents;
            if (result[0].err) {
              callback(utils.toError(result[0]));
            } else {
              callback(null, command.documents[0].name);
            }
          }
        });
      } else {
        // Execute insert command
        var result = self._executeInsertCommand(command, commandOptions);
        // If no callback just return
        if(!callback) return;
        // If error return error
        if(result instanceof Error) {
          return callback(result);
        }
        // Otherwise just return
        return callback(null, index_name);
      }
    } else {
      if(typeof callback === 'function') return callback(null, index_name);
    }
  });
}
cursorInfo-------------->function (options, callback) {
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  options = args.length ? args.shift() || {} : {};

  this._executeQueryCommand(DbCommand.createDbSlaveOkCommand(this, {'cursorInfo':1})
    , options
    , utils.handleSingleCommandResultReturn(null, null, callback));
}
dropIndex-------------->function (collectionName, indexName, callback) {  
  this._executeQueryCommand(DbCommand.createDropIndexCommand(this, collectionName, indexName)
    , utils.handleSingleCommandResultReturn(null, null, callback));
}
reIndex-------------->function (collectionName, callback) {
  this._executeQueryCommand(DbCommand.createReIndexCommand(this, collectionName)
    , utils.handleSingleCommandResultReturn(true, false, callback));
}
indexInformation-------------->function (collectionName, options, callback) {
  if(typeof callback === 'undefined') {
    if(typeof options === 'undefined') {
      callback = collectionName;
      collectionName = null;
    } else {
      callback = options;
    }
    options = {};
  }

  // If we specified full information
  var full = options['full'] == null ? false : options['full'];
  // Build selector for the indexes
  var selector = collectionName != null ? {ns: (this.databaseName + "." + collectionName)} : {};

  // Set read preference if we set one
  var readPreference = options['readPreference'] ? options['readPreference'] : ReadPreference.PRIMARY;

  // Iterate through all the fields of the index
  this.collection(DbCommand.SYSTEM_INDEX_COLLECTION, function(err, collection) {
    // Perform the find for the collection
    collection.find(selector).setReadPreference(readPreference).toArray(function(err, indexes) {
      if(err != null) return callback(err, null);
      // Contains all the information
      var info = {};

      // if full defined just return all the indexes directly
      if(full) return callback(null, indexes);

      // Process all the indexes
      for(var i = 0; i < indexes.length; i++) {
        var index = indexes[i];
        // Let's unpack the object
        info[index.name] = [];
        for(var name in index.key) {
          info[index.name].push([name, index.key[name]]);
        }
      }

      // Return all the indexes
      callback(null, info);
    });
  });
}
dropDatabase-------------->function (callback) {
  this._executeQueryCommand(DbCommand.createDropDatabaseCommand(this)
    , utils.handleSingleCommandResultReturn(true, false, callback));
}
stats-------------->function stats(options, callback) {
  var args = Array.prototype.slice.call(arguments, 0);
  callback = args.pop();
  // Fetch all commands
  options = args.length ? args.shift() || {} : {};

  // Build command object
  var commandObject = {
    dbStats:this.collectionName
  };

  // Check if we have the scale value
  if(options['scale'] != null) commandObject['scale'] = options['scale'];

  // Execute the command
  this.command(commandObject, options, callback);
}
_executeQueryCommand-------------->function (db_command, options, callback) {
  var self = this;

  // Unpack the parameters
  if (typeof callback === 'undefined') {
    callback = options;
    options = {};
  }

  // fast fail option used for HA, no retry
  var failFast = options['failFast'] != null
    ? options['failFast']
    : false;

  // Check if the user force closed the command
  if(this._applicationClosed) {
    var err = new Error("db closed by application");
    if('function' == typeof callback) {
      return callback(err, null);
    } else {
      throw err;
    }
  }

  if(this.serverConfig.isDestroyed()) 
    return callback(new Error("Connection was destroyed by application"));

  // Specific connection
  var connection = options.connection;
  // Check if the connection is actually live
  if(connection 
    && (!connection.isConnected || !connection.isConnected())) connection = null;

  // Get the configuration
  var config = this.serverConfig;
  var read = options.read;
  // Allow for the usage of the readPreference model
  if(read == null) {
    read = options.readPreference;
  }

  if(!connection && !config.canRead(read) && !config.canWrite() && config.isAutoReconnect()) {
    if(read == ReadPreference.PRIMARY 
      || read == ReadPreference.PRIMARY_PREFERRED
      || (read != null && typeof read == 'object' && read.mode)
      || read == null) {
      
      // Save the command
      self.serverConfig._commandsStore.read_from_writer(
        {   type: 'query'
          , db_command: db_command
          , options: options
          , callback: callback
          , db: self
          , executeQueryCommand: __executeQueryCommand
          , executeInsertCommand: __executeInsertCommand
        }
      );
    } else {
      self.serverConfig._commandsStore.read(
        {   type: 'query'
          , db_command: db_command
          , options: options
          , callback: callback 
          , db: self
          , executeQueryCommand: __executeQueryCommand
          , executeInsertCommand: __executeInsertCommand
        }
      );
    }

    // If we have blown through the number of items let's 
    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {
      self.close();
    }    
  } else if(!connection && !config.canRead(read) && !config.canWrite() && !config.isAutoReconnect()) {
    return callback(new Error("no open connections"), null);
  } else {
    if(typeof callback == 'function') {
      __executeQueryCommand(self, db_command, options, function (err, result, conn) {
        callback(err, result, conn);
      });          
    } else {
      __executeQueryCommand(self, db_command, options);
    }
  }
}
_executeInsertCommand-------------->function (db_command, options, callback) {
  var self = this;

  // Unpack the parameters
  if(callback == null && typeof options === 'function') {
    callback = options;
    options = {};
  }

  // Ensure options are not null
  options = options == null ? {} : options;

  // Check if the user force closed the command
  if(this._applicationClosed) {
    if(typeof callback == 'function') {
      return callback(new Error("db closed by application"), null);
    } else {
      throw new Error("db closed by application");
    }
  }

  if(this.serverConfig.isDestroyed()) return callback(new Error("Connection was destroyed by application"));

  // Specific connection
  var connection = options.connection;
  // Check if the connection is actually live
  if(connection 
    && (!connection.isConnected || !connection.isConnected())) connection = null;

  // Get config
  var config = self.serverConfig;
  // Check if we are connected
  if(!connection && !config.canWrite() && config.isAutoReconnect()) {
    self.serverConfig._commandsStore.write(
      {   type:'insert'
        , 'db_command':db_command
        , 'options':options
        , 'callback':callback
        , db: self
        , executeQueryCommand: __executeQueryCommand
        , executeInsertCommand: __executeInsertCommand
      }
    );

    // If we have blown through the number of items let's 
    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {
      self.close();
    }        
  } else if(!connection && !config.canWrite() && !config.isAutoReconnect()) {
    return callback(new Error("no open connections"), null);
  } else {
    __executeInsertCommand(self, db_command, options, callback);
  }
}
_executeUpdateCommand-------------->function (db_command, options, callback) {
  var self = this;

  // Unpack the parameters
  if(callback == null && typeof options === 'function') {
    callback = options;
    options = {};
  }

  // Ensure options are not null
  options = options == null ? {} : options;

  // Check if the user force closed the command
  if(this._applicationClosed) {
    if(typeof callback == 'function') {
      return callback(new Error("db closed by application"), null);
    } else {
      throw new Error("db closed by application");
    }
  }

  if(this.serverConfig.isDestroyed()) return callback(new Error("Connection was destroyed by application"));

  // Specific connection
  var connection = options.connection;
  // Check if the connection is actually live
  if(connection 
    && (!connection.isConnected || !connection.isConnected())) connection = null;

  // Get config
  var config = self.serverConfig;
  // Check if we are connected
  if(!connection && !config.canWrite() && config.isAutoReconnect()) {
    self.serverConfig._commandsStore.write(
      {   type:'insert'
        , 'db_command':db_command
        , 'options':options
        , 'callback':callback
        , db: self
        , executeQueryCommand: __executeQueryCommand
        , executeInsertCommand: __executeInsertCommand
      }
    );

    // If we have blown through the number of items let's 
    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {
      self.close();
    }        
  } else if(!connection && !config.canWrite() && !config.isAutoReconnect()) {
    return callback(new Error("no open connections"), null);
  } else {
    __executeInsertCommand(self, db_command, options, callback);
  }
}
_executeRemoveCommand-------------->function (db_command, options, callback) {
  var self = this;

  // Unpack the parameters
  if(callback == null && typeof options === 'function') {
    callback = options;
    options = {};
  }

  // Ensure options are not null
  options = options == null ? {} : options;

  // Check if the user force closed the command
  if(this._applicationClosed) {
    if(typeof callback == 'function') {
      return callback(new Error("db closed by application"), null);
    } else {
      throw new Error("db closed by application");
    }
  }

  if(this.serverConfig.isDestroyed()) return callback(new Error("Connection was destroyed by application"));

  // Specific connection
  var connection = options.connection;
  // Check if the connection is actually live
  if(connection 
    && (!connection.isConnected || !connection.isConnected())) connection = null;

  // Get config
  var config = self.serverConfig;
  // Check if we are connected
  if(!connection && !config.canWrite() && config.isAutoReconnect()) {
    self.serverConfig._commandsStore.write(
      {   type:'insert'
        , 'db_command':db_command
        , 'options':options
        , 'callback':callback
        , db: self
        , executeQueryCommand: __executeQueryCommand
        , executeInsertCommand: __executeInsertCommand
      }
    );

    // If we have blown through the number of items let's 
    if(!self.serverConfig._commandsStore.validateBufferLimit(self.bufferMaxEntries)) {
      self.close();
    }        
  } else if(!connection && !config.canWrite() && !config.isAutoReconnect()) {
    return callback(new Error("no open connections"), null);
  } else {
    __executeInsertCommand(self, db_command, options, callback);
  }
}
wrap-------------->function (error) {
  if (error instanceof Error) return error;

  var msg = error.err || error.errmsg || error.errMessage || error;
  var e = new Error(msg);
  e.name = 'MongoError';

  // Get all object keys
  var keys = typeof error == 'object'
    ? Object.keys(error)
    : [];

  for(var i = 0; i < keys.length; i++) {
    e[keys[i]] = error[keys[i]];
  }

  return e;
}
state-------------->connected
removeAllEventListeners-------------->function () {
  this.removeAllListeners("close");
  this.removeAllListeners("error");
  this.removeAllListeners("timeout");
  this.removeAllListeners("parseError");
  this.removeAllListeners("poolReady");
  this.removeAllListeners("message");
}
setMaxListeners-------------->function (n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
}
emit-------------->function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (typeof this._events.error === 'object' &&
         !this._events.error.length)) {
      er = arguments[1];
      if (this.domain) {
        if (!er) er = new TypeError('Uncaught, unspecified "error" event.');
        er.domainEmitter = this;
        er.domain = this.domain;
        er.domainThrown = false;
        this.domain.emit('error', er);
      } else if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (typeof handler === 'undefined')
    return false;

  if (this.domain && this !== process)
    this.domain.enter();

  if (typeof handler === 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (typeof handler === 'object') {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  if (this.domain && this !== process)
    this.domain.exit();

  return true;
}
addListener-------------->function (type, listener) {
  var m;

  if (typeof listener !== 'function')
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type, typeof listener.listener === 'function' ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (typeof this._events[type] === 'object')
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (typeof this._events[type] === 'object' && !this._events[type].warned) {
    m = this._maxListeners;
    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      console.trace();
    }
  }

  return this;
}
on-------------->function (type, listener) {
  var m;

  if (typeof listener !== 'function')
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type, typeof listener.listener === 'function' ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (typeof this._events[type] === 'object')
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (typeof this._events[type] === 'object' && !this._events[type].warned) {
    m = this._maxListeners;
    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      console.trace();
    }
  }

  return this;
}
once-------------->function (type, listener) {
  if (typeof listener !== 'function')
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
}
removeListener-------------->function (type, listener) {
  var list, position, length, i;

  if (typeof listener !== 'function')
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (typeof list.listener === 'function' && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (typeof list === 'object') {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
}
removeAllListeners-------------->function (type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (Array.isArray(listeners)) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
}
listeners-------------->function (type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (typeof this._events[type] === 'function')
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
}
