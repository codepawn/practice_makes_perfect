//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;

/* Package-scope variables */
var value;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/gwendall:session-json/export.js                                               //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
var deep = function (obj, key, value) {                                                   // 1
	                                                                                         // 2
	var keys = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.'), // 3
			root,                                                                                  // 4
			i = 0,                                                                                 // 5
			n = keys.length;                                                                       // 6
                                                                                          // 7
	// Set deep value                                                                        // 8
	if (arguments.length > 2) {                                                              // 9
                                                                                          // 10
		root = obj;                                                                             // 11
		n--;                                                                                    // 12
                                                                                          // 13
		while (i < n) {                                                                         // 14
			key = keys[i++];                                                                       // 15
			obj = obj[key] = _.isObject(obj[key]) ? obj[key] : {};                                 // 16
		}                                                                                       // 17
                                                                                          // 18
		obj[keys[i]] = value;                                                                   // 19
                                                                                          // 20
		value = root;                                                                           // 21
                                                                                          // 22
	// Get deep value                                                                        // 23
	} else {                                                                                 // 24
		while ((obj = obj[keys[i++]]) != null && i < n) {};                                     // 25
		value = i < n ? void 0 : obj;                                                           // 26
	}                                                                                        // 27
                                                                                          // 28
	return value;                                                                            // 29
                                                                                          // 30
}                                                                                         // 31
                                                                                          // 32
_.extend(ReactiveDict.prototype, {                                                        // 33
	                                                                                         // 34
	getJSON: function(selector) {                                                            // 35
		                                                                                        // 36
		var self = this,                                                                        // 37
			pathKeys = selector.split('.');                                                        // 38
                                                                                          // 39
		if (pathKeys.length == 1) {                                                             // 40
                                                                                          // 41
			return self.get(selector);                                                             // 42
                                                                                          // 43
		} else {                                                                                // 44
                                                                                          // 45
			var key = pathKeys[0],                                                                 // 46
				jsonValue = self.get(key);                                                            // 47
                                                                                          // 48
			pathKeys.shift();                                                                      // 49
                                                                                          // 50
			var jsonPath = pathKeys.join('.');                                                     // 51
                                                                                          // 52
			try {                                                                                  // 53
				value = deep(jsonValue, jsonPath);				                                                // 54
			} catch(e) {                                                                           // 55
				value = null;				                                                                     // 56
			}                                                                                      // 57
                                                                                          // 58
			return value;                                                                          // 59
                                                                                          // 60
		}                                                                                       // 61
		                                                                                        // 62
	}                                                                                        // 63
                                                                                          // 64
});                                                                                       // 65
                                                                                          // 66
_.extend(ReactiveDict.prototype, {                                                        // 67
	                                                                                         // 68
	setJSON: function(selector, value) {                                                     // 69
		                                                                                        // 70
		var self = this,                                                                        // 71
			pathKeys = selector.split('.'),                                                        // 72
			key = pathKeys[0];                                                                     // 73
                                                                                          // 74
		if (pathKeys.length == 1) {                                                             // 75
			                                                                                       // 76
			self.set(selector, value);                                                             // 77
                                                                                          // 78
		} else {                                                                                // 79
                                                                                          // 80
			var jsonValue = self.getJSON(key);                                                     // 81
                                                                                          // 82
			if (!jsonValue) {                                                                      // 83
				jsonValue = {};                                                                       // 84
				self.set(key, jsonValue);                                                             // 85
			};                                                                                     // 86
			                                                                                       // 87
			pathKeys.shift();                                                                      // 88
			var jsonPath = pathKeys.join('.');                                                     // 89
			                                                                                       // 90
			value = deep(jsonValue, jsonPath, value);                                              // 91
			self.set(key, value);                                                                  // 92
			                                                                                       // 93
		}                                                                                       // 94
		                                                                                        // 95
	}                                                                                        // 96
                                                                                          // 97
});                                                                                       // 98
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gwendall:session-json'] = {};

})();
