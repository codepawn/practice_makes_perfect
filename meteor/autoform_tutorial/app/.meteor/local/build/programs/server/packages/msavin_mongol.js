(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Mongol, newId, targetCollection, trashDocument;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/common/common.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
if (Mongol === undefined) {                                                                                          // 1
                                                                                                                     // 2
  // Reserve this variable name across the package                                                                   // 3
  // In case we'd like to export it to give package users a simple api                                               // 4
  // e.g. when all collections have been matched by default, but the developer wants to suppress some                // 5
  // Mongol.hideCollection('posts');                                                                                 // 6
  // Downside is that it pollutes the global namespace with `Mongol`, but most apps can probably live with that      // 7
  // See /client/defaults/defaults.js for implementation                                                             // 8
                                                                                                                     // 9
  Mongol = {};                                                                                                       // 10
                                                                                                                     // 11
}                                                                                                                    // 12
                                                                                                                     // 13
// Go through a variety of means of trying to return the correct collection                                          // 14
                                                                                                                     // 15
Mongol.Collection = function (collectionName) {                                                                      // 16
                                                                                                                     // 17
  return Mongo.Collection.get(collectionName)                                                                        // 18
    // This should automatically match all collections by default                                                    // 19
    // including namespaced collections                                                                              // 20
                                                                                                                     // 21
  || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.')))) // 22
  // For user defined collection names                                                                               // 23
  // in the form of Meteor's Mongo.Collection names as strings                                                       // 24
                                                                                                                     // 25
  || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
  // For user defined collections where the user has typical upper-case collection names                             // 27
  // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                     // 29
  || null;                                                                                                           // 30
  // If the user has gone for unconventional casing of collection names,                                             // 31
  // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 32
                                                                                                                     // 33
                                                                                                                     // 34
  // Changes the first character of a string to upper case                                                           // 35
                                                                                                                     // 36
  function firstToUpper(text) {                                                                                      // 37
                                                                                                                     // 38
    return text.charAt(0).toUpperCase() + text.substr(1);                                                            // 39
                                                                                                                     // 40
  }                                                                                                                  // 41
                                                                                                                     // 42
};                                                                                                                   // 43
                                                                                                                     // 44
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/server/methods.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var insertDoc = function (MongolCollection, documentData) {                                                          // 1
  if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
    // This is to nullify the effects of SimpleSchema/Collection2                                                    // 3
    newId = MongolCollection.insert(documentData, {                                                                  // 4
      filter: false,                                                                                                 // 5
      autoConvert: false,                                                                                            // 6
      removeEmptyStrings: false,                                                                                     // 7
      validate: false                                                                                                // 8
    });                                                                                                              // 9
  }                                                                                                                  // 10
  else {                                                                                                             // 11
    newId = MongolCollection.insert(documentData);                                                                   // 12
  }                                                                                                                  // 13
  return newId;                                                                                                      // 14
}                                                                                                                    // 15
                                                                                                                     // 16
Meteor.methods({                                                                                                     // 17
  Mongol_verify: function () {                                                                                       // 18
                                                                                                                     // 19
    // NOTE: This function is not in use                                                                             // 20
                                                                                                                     // 21
    // Check if the Meteor absolute URL                                                                              // 22
    // begins with http://localhost:                                                                                 // 23
                                                                                                                     // 24
    var location = Meteor.absoluteUrl(),                                                                             // 25
         current = location.substring(0, 17);                                                                        // 26
                                                                                                                     // 27
    if (current === "http://localhost:") {                                                                           // 28
      return "verified";                                                                                             // 29
    }                                                                                                                // 30
    return false;                                                                                                    // 31
                                                                                                                     // 32
    // Currently not in use, but under consideration                                                                 // 33
    // To Use:                                                                                                       // 34
                                                                                                                     // 35
    // Meteor.call("Mongol_verify", function (error, result) {                                                       // 36
    //   if (result === "verified") {                                                                                // 37
    //     task();                                                                                                   // 38
    //   } else {                                                                                                    // 39
    //      return "absoluteURLError"                                                                                // 40
    //   }                                                                                                           // 41
    // });                                                                                                           // 42
                                                                                                                     // 43
  },                                                                                                                 // 44
  Mongol_update: function (collectionName, documentData, originalDocumentData) {                                     // 45
                                                                                                                     // 46
    check(collectionName, String);                                                                                   // 47
    check(documentData, Object);                                                                                     // 48
    check(originalDocumentData, Object);                                                                             // 49
                                                                                                                     // 50
    var MongolCollection = Mongol.Collection(collectionName),                                                        // 51
      documentID = documentData._id;                                                                                 // 52
                                                                                                                     // 53
    var currentDbDoc = MongolCollection.findOne({                                                                    // 54
      _id: documentID                                                                                                // 55
    });                                                                                                              // 56
                                                                                                                     // 57
    if (!currentDbDoc) {                                                                                             // 58
      // A document with this _id value is not in the db                                                             // 59
      // Do an insert instead                                                                                        // 60
      Meteor.call("Mongol_insert", collectionName, documentData);                                                    // 61
      return;                                                                                                        // 62
    }                                                                                                                // 63
                                                                                                                     // 64
    delete documentData._id;                                                                                         // 65
    delete originalDocumentData._id;                                                                                 // 66
    delete currentDbDoc._id;                                                                                         // 67
                                                                                                                     // 68
    var updatedDocumentData = Mongol.diffDocumentData(currentDbDoc, documentData, originalDocumentData);             // 69
                                                                                                                     // 70
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
                                                                                                                     // 72
      // This is to nullify the effects of SimpleSchema/Collection2                                                  // 73
      // Using `upsert` means that a user can change the _id value in the JSON                                       // 74
      // and then press the 'Update' button to create a duplicate (published keys/values only) with a different _id  // 75
                                                                                                                     // 76
      MongolCollection.update({                                                                                      // 77
        _id: documentID                                                                                              // 78
      }, {$set: updatedDocumentData}, {                                                                              // 79
        filter: false,                                                                                               // 80
        autoConvert: false,                                                                                          // 81
        removeEmptyStrings: false,                                                                                   // 82
        validate: false                                                                                              // 83
      });                                                                                                            // 84
                                                                                                                     // 85
      return;                                                                                                        // 86
    }                                                                                                                // 87
                                                                                                                     // 88
    // Run the magic                                                                                                 // 89
    MongolCollection.update({                                                                                        // 90
        _id: documentID                                                                                              // 91
      },                                                                                                             // 92
      updatedDocumentData                                                                                            // 93
    );                                                                                                               // 94
                                                                                                                     // 95
  },                                                                                                                 // 96
  Mongol_remove: function (collectionName, documentID) {                                                             // 97
                                                                                                                     // 98
    check(collectionName, String);                                                                                   // 99
    check(documentID, String);                                                                                       // 100
                                                                                                                     // 101
    var MongolCollection = Mongol.Collection(collectionName);                                                        // 102
                                                                                                                     // 103
    var docToBeRemoved = MongolCollection.findOne(documentID);                                                       // 104
                                                                                                                     // 105
    MongolCollection.remove(documentID);                                                                             // 106
                                                                                                                     // 107
                                                                                                                     // 108
    // Start Trash Can                                                                                               // 109
      if (Package["meteortoys:toypro"]) {                                                                            // 110
        targetCollection        = Mongol.Collection("MeteorToysData_Mongol");                                        // 111
        trashDocument           = docToBeRemoved;                                                                    // 112
        trashDocument["origin"] = String(collectionName);                                                            // 113
        targetCollection.insert(trashDocument);                                                                      // 114
      }                                                                                                              // 115
    // End Trash Can                                                                                                 // 116
                                                                                                                     // 117
    return docToBeRemoved;                                                                                           // 118
                                                                                                                     // 119
  },                                                                                                                 // 120
  Mongol_duplicate: function (collectionName, documentID) {                                                          // 121
                                                                                                                     // 122
    check(collectionName, String);                                                                                   // 123
    check(documentID, String);                                                                                       // 124
                                                                                                                     // 125
    var MongolCollection = Mongol.Collection(collectionName),                                                        // 126
      OriginalDoc = MongolCollection.findOne(documentID);                                                            // 127
                                                                                                                     // 128
    if (OriginalDoc) {                                                                                               // 129
                                                                                                                     // 130
      delete OriginalDoc._id;                                                                                        // 131
                                                                                                                     // 132
      var NewDocumentId = insertDoc(MongolCollection, OriginalDoc);                                                  // 133
                                                                                                                     // 134
      return NewDocumentId;                                                                                          // 135
                                                                                                                     // 136
    }                                                                                                                // 137
                                                                                                                     // 138
  },                                                                                                                 // 139
  Mongol_insert: function(collectionName, documentData) {                                                            // 140
                                                                                                                     // 141
    check(collectionName, String);                                                                                   // 142
    check(documentData, Object);                                                                                     // 143
                                                                                                                     // 144
    var MongolCollection = Mongol.Collection(collectionName),                                                        // 145
        newId = null;                                                                                                // 146
                                                                                                                     // 147
    if (documentData._id && MongolCollection.findOne({_id: documentData._id})) {                                     // 148
      console.log('Duplicate _id found');                                                                            // 149
      return null;                                                                                                   // 150
    }                                                                                                                // 151
                                                                                                                     // 152
    var newId = insertDoc(MongolCollection, documentData);                                                           // 153
                                                                                                                     // 154
    return newId;                                                                                                    // 155
                                                                                                                     // 156
  },                                                                                                                 // 157
});                                                                                                                  // 158
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/server/utility_functions.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// This function takes three data points into account:                                                               // 1
                                                                                                                     // 2
// 1) the actual document as it stands on the server, prior to being updated                                         // 3
// 2) the oldData that was on the client before the user pressed save                                                // 4
// 3) the newData that the client is trying to save                                                                  // 5
                                                                                                                     // 6
// This function decides which fields it is going to make writes to on this basis:                                   // 7
// 1) The field(s) being overwritten must appear in the db doc and on the client oldData                             // 8
//    (if they only appear in the oldData these must have been added dynamically on the client                       // 9
//     and we don't want to save these fields to the db)                                                             // 10
//    -- this includes fields that are being removed (i.e. they must appear in the db doc and the oldData)           // 11
// 2) Only fields that appear in the newData, but not the oldData or db doc can be added                             // 12
//    (if it appears in the db doc, throw an error that says:                                                        // 13
//     "There is an unpublished field in the database with that name. Update cannot be made.")                       // 14
                                                                                                                     // 15
// The ramifications of all this:                                                                                    // 16
// You can only update/remove fields that are published                                                              // 17
// You can only add new fields if they don't exist in the db already                                                 // 18
                                                                                                                     // 19
                                                                                                                     // 20
Mongol.diffDocumentData = function (dbDoc, newData, oldData) {                                                       // 21
                                                                                                                     // 22
  // TODO -- recurse into subdocuments, performing checks                                                            // 23
  // using the Meteor._get function (as seen in /common/common.js)                                                   // 24
                                                                                                                     // 25
  var finalData = {};                                                                                                // 26
                                                                                                                     // 27
  var dbDocFields = _.keys(dbDoc),                                                                                   // 28
    newDataFields = _.keys(newData),                                                                                 // 29
    oldDataFields = _.keys(oldData); // console.log("dbDocFields",dbDocFields); console.log("newDataFields",newDataFields); console.log("oldDataFields",oldDataFields);
                                                                                                                     // 31
  // First get the set of fields that we won't be saving because they were dynamically added on the client           // 32
                                                                                                                     // 33
  var dynamicallyAddedFields = _.difference(oldDataFields, dbDocFields);                                             // 34
                                                                                                                     // 35
  // The get the fields that must retain their dbDoc field value, because they we'ren't published                    // 36
                                                                                                                     // 37
  var unpublishedFields = _.difference(dbDocFields, oldDataFields); // console.log("unpublishedFields",unpublishedFields);
                                                                                                                     // 39
  // iterate over all fields, old and new, and ascertain the field value that must be added to the final data object // 40
                                                                                                                     // 41
  var oldAndNewFields = _.union(dbDocFields, newDataFields);                                                         // 42
                                                                                                                     // 43
  _.each(oldAndNewFields, function(field) {                                                                          // 44
                                                                                                                     // 45
    if (_.contains(dynamicallyAddedFields, field)) {                                                                 // 46
                                                                                                                     // 47
      // We don't want to add this field to the actual mongodb document                                              // 48
      console.log("'" + field + "' appears to be a dynamically added field. This field was not updated.");           // 49
      return;                                                                                                        // 50
                                                                                                                     // 51
    }                                                                                                                // 52
                                                                                                                     // 53
    if (_.contains(unpublishedFields, field)) {                                                                      // 54
                                                                                                                     // 55
      // We don't want to overwrite the existing mondodb document value                                              // 56
      if (newData[field]) {                                                                                          // 57
        // Give a message to user as to why that field wasn't updated                                                // 58
        console.log("'" + field + "' is an unpublished field. This field's value was not overwritten.");             // 59
      }                                                                                                              // 60
      // Make sure the old value is retained                                                                         // 61
      finalData[field] = dbDoc[field];                                                                               // 62
      return;                                                                                                        // 63
                                                                                                                     // 64
    }                                                                                                                // 65
                                                                                                                     // 66
    finalData[field] = newData[field];                                                                               // 67
                                                                                                                     // 68
    // This will let unpublished fields into the database,                                                           // 69
    // so the user may be confused by the lack of an update in the client                                            // 70
    // simply because the added field isn't published                                                                // 71
    // The following solves that problem, but doesn't allow new fields to be published at all:                       // 72
    //     finalData[field] = oldData[field] && newData[field];                                                      // 73
    // We actually need to know the set of fields published by the publication that the client side doc came from    // 74
    // but how do we get that?                                                                                       // 75
                                                                                                                     // 76
  });                                                                                                                // 77
                                                                                                                     // 78
  return finalData;                                                                                                  // 79
                                                                                                                     // 80
};                                                                                                                   // 81
                                                                                                                     // 82
// Test code for Mongol.diffDocumentData                                                                             // 83
                                                                                                                     // 84
/*Meteor.startup(function() {                                                                                        // 85
                                                                                                                     // 86
  // Take a user document                                                                                            // 87
  var sampleDbDoc = { "_id" : "exampleuser1", "createdAt" : 1375253926213, "defaultPrograms" : { "514d75dc97d9562095578800" : "MYP", "515be9e6a57068c708000000" : "PYP" }, "department_id" : [  "GMsv9YzaCuL6dFBYL" ], "emails" : [  {  "address" : "babrahams@wab.edu",  "verified" : true } ], "myCourses" : [  "QqofG3XyEtQPgFb72",  "fvTxhAyfMxFbhzwK7",  "jcPtgwN2t6pTMQDEp" ], "organization_id" : [  "51f76bcb45623dfb1e0d3100" ], "permContexts" : [ 	{ 	"department_id" : "GMsv9YzaCuL6dFBYL", "perms" : [ 	"editRoles", 	"editCourses", 	"editUnits", 	"editAssessments", 	"editDepartments" ] } ], "roleContexts" : [ 	{ 	"organization_id" : "51f76bcb45623dfb1e0d3100", 	"school_id" : "514d75dc97d9562095578800", 	"department_id" : "GMsv9YzaCuL6dFBYL", 	"roles" : [ 	"iQD4BhnB8PFWwHCcg" ] }, 	{ 	"organization_id" : "2BjJbMyRLWa4iofQm" } ], "school_id" : [  "514d75dc97d9562095578800" ], "services" : { "password" : { "bcrypt" : "$2a$10$M55xiZA6rX0EwZ6xBk3Rre6/J5s3XUunre5.5ijyU3.ilpYZQFmtO" }, "resume" : { "loginTokens" : [ 	{ 	"when" : "2014-12-24T12:00:06.725Z", 	"hashedToken" : "not/telling=" }, 	{ 	"when" : "2015-01-16T04:45:10.574Z", 	"hashedToken" : "bigbadhashedtoken=" }, 	{ 	"when" : "2015-01-22T02:01:57.671Z", 	"hashedToken" : "9HSCRUygOiPYgmUsmWA5jcYutqKnjT9OByHPA6LbBB8=" } ] } }, "superuser" : [  "51f76bcb45623dfb1e0d3100",  "2BjJbMyRLWa4iofQm",  "ZkeRkDEEcp72bAFQY" ], "transaction_id" : "shQ9fzcZYSgLLnptC" };
                                                                                                                     // 89
  // Simulate the oldData getting sent back from the client (the fields should be a subset of the db fields)         // 90
  var sampleOldData = _.extend(_.clone(sampleDbDoc),{dynamicallyAddedField:true, secondDynamicallyAddedField: "Dynamically added value"}); // Simulate two dynamically added fields
  delete sampleOldData.services; // Simulate an unpublished field                                                    // 92
                                                                                                                     // 93
  // Simulate the newData getting sent back from the client                                                          // 94
  // e.g. user adds a new field                                                                                      // 95
  var sampleNewData = _.extend(_.clone(sampleOldData),{brandNewField: true});                                        // 96
  // brandNewField should be added                                                                                   // 97
  delete sampleNewData.createdAt; // This should be gone                                                             // 98
  sampleNewData.secondDynamicallyAddedField = "Dynamically added value overwritten by user"; // seconddynamicallyAddedField should be gone
  sampleNewData.transaction_id = "overwritten transaction id"; // This field should be changed                       // 100
                                                                                                                     // 101
  // Run the test                                                                                                    // 102
                                                                                                                     // 103
  console.log(Mongol.diffDocumentData(sampleDbDoc, sampleNewData, sampleOldData));                                   // 104
                                                                                                                     // 105
});*/                                                                                                                // 106
                                                                                                                     // 107
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:mongol'] = {};

})();

//# sourceMappingURL=msavin_mongol.js.map
