(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var MeteorToys_Data;

(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/meteortoys:toykit/server/publish.js                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Meteor.publish("MeteorToys", function () {                          // 1
// 	return [                                                           // 2
// 		MeteorToys_Data.Impersonate.find({}, {limit: 6}),                 // 3
// 		MeteorToys_Data.Methods.find(),                                   // 4
// 		MeteorToys_Data.Settings.find(),                                  // 5
// 		MeteorToys_Data.Mongol.find(),                                    // 6
// 	];                                                                 // 7
// });                                                                 // 8
/////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/meteortoys:toykit/lib/main.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// MeteorToys_Data = {                                                 // 1
// 	'Impersonate': new Mongo.Collection("MeteorToysData_Impersonate"), // 2
// 	'Methods':     new Mongo.Collection("MeteorToysData_Methods"),     // 3
// 	'Settings':    new Mongo.Collection("MeteorToysData_Settings"),    // 4
// 	'Mongol':      new Mongo.Collection("MeteorToysData_Mongol"),      // 5
// }                                                                   // 6
                                                                       // 7
// MeteorToys_Data.Impersonate.allow({                                 // 8
// 	insert: function () {                                              // 9
// 	    return true;                                                   // 10
// 	},                                                                 // 11
// 	remove: function (){                                               // 12
// 	    return true;                                                   // 13
// 	},                                                                 // 14
// 	update: function() {                                               // 15
// 	    return true;                                                   // 16
// 	}                                                                  // 17
// });                                                                 // 18
                                                                       // 19
// MeteorToys_Data.Methods.allow({                                     // 20
// 	insert: function () {                                              // 21
// 	    return true;                                                   // 22
// 	},                                                                 // 23
// 	remove: function (){                                               // 24
// 	    return true;                                                   // 25
// 	},                                                                 // 26
// 	update: function() {                                               // 27
// 	    return true;                                                   // 28
// 	}                                                                  // 29
// });                                                                 // 30
                                                                       // 31
// MeteorToys_Data.Settings.allow({                                    // 32
// 	insert: function () {                                              // 33
// 	    return true;                                                   // 34
// 	},                                                                 // 35
// 	remove: function (){                                               // 36
// 	    return true;                                                   // 37
// 	},                                                                 // 38
// 	update: function() {                                               // 39
// 	    return true;                                                   // 40
// 	}                                                                  // 41
// });                                                                 // 42
                                                                       // 43
// MeteorToys_Data.Mongol.allow({                                      // 44
// 	insert: function () {                                              // 45
// 	    return true;                                                   // 46
// 	},                                                                 // 47
// 	remove: function (){                                               // 48
// 	    return true;                                                   // 49
// 	},                                                                 // 50
// 	update: function() {                                               // 51
// 	    return true;                                                   // 52
// 	}                                                                  // 53
// });                                                                 // 54
                                                                       // 55
/////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toykit'] = {
  MeteorToys_Data: MeteorToys_Data
};

})();

//# sourceMappingURL=meteortoys_toykit.js.map
