(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var EJSON = Package.ejson.EJSON;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/babrahams:editable-json/editable-json-common.js          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({                                                     // 1
                                                                     // 2
  update: function (collectionName, _id, action) {                   // 3
                                                                     // 4
    var Collection = Mongo.Collection.get(collectionName),           // 5
        updated = 0;                                                 // 6
                                                                     // 7
    try {                                                            // 8
                                                                     // 9
      if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(Collection.simpleSchema) && Collection._c2) {
                                                                     // 11
        updated = Collection.update(_id, action, {                   // 12
          filter: false,                                             // 13
          autoConvert: false,                                        // 14
          removeEmptyStrings: false,                                 // 15
          validate: false                                            // 16
        });                                                          // 17
                                                                     // 18
      }                                                              // 19
                                                                     // 20
      else {                                                         // 21
                                                                     // 22
        updated = Collection.update(_id, action);                    // 23
                                                                     // 24
      }                                                              // 25
                                                                     // 26
    }                                                                // 27
                                                                     // 28
    catch (err) {                                                    // 29
      throw new Meteor.Error(err);                                   // 30
    }                                                                // 31
                                                                     // 32
    return updated;                                                  // 33
                                                                     // 34
  }                                                                  // 35
                                                                     // 36
});                                                                  // 37
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-json'] = {};

})();

//# sourceMappingURL=babrahams_editable-json.js.map
