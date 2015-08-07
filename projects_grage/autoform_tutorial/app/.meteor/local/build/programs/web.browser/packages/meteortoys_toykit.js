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
var Template = Package.templating.Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToys_Data, MeteorToys_ToyKit;

(function () {

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/meteortoys:toykit/client/template.main.js                       //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
                                                                            // 1
Template.body.addContent((function() {                                      // 2
  var view = this;                                                          // 3
  return Blaze.If(function() {                                              // 4
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                   // 5
  }, function() {                                                           // 6
    return [ "\n		", Blaze.If(function() {                                  // 7
      return Spacebars.call(view.lookup("MeteorToys"));                     // 8
    }, function() {                                                         // 9
      return [ "\n			", HTML.DIV({                                          // 10
        "class": "MeteorToys_orbs"                                          // 11
      }, "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_accounts")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_shell")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_method")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_sub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_pubsub")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_intercept")), "\n				", Spacebars.include(view.lookupTemplate("MeteorToys_reload")), "\n			"), "\n		" ];
    }), "\n	" ];                                                            // 13
  });                                                                       // 14
}));                                                                        // 15
Meteor.startup(Template.body.renderToDocument);                             // 16
                                                                            // 17
Template.__checkName("MeteorToy");                                          // 18
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {    // 19
  var view = this;                                                          // 20
  return HTML.DIV({                                                         // 21
    "class": function() {                                                   // 22
      return [ "MeteorToys_orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },                                                                      // 24
    id: function() {                                                        // 25
      return Spacebars.mustache(view.lookup("name"));                       // 26
    }                                                                       // 27
  }, HTML.Raw('\n		<div class="MeteorToys_icon"></div>\n		'), HTML.DIV({    // 28
    "class": "MeteorToys_orb_wrapper"                                       // 29
  }, "\n			", Blaze._InOuterTemplateScope(view, function() {                // 30
    return Spacebars.include(function() {                                   // 31
      return Spacebars.call(view.templateContentBlock);                     // 32
    });                                                                     // 33
  }), "\n		"), "\n	");                                                      // 34
}));                                                                        // 35
                                                                            // 36
//////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/meteortoys:toykit/client/main.js                                //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Template.MeteorToy.helpers({                                                // 1
  type: function () {                                                       // 2
    if (this.type === "button") {                                           // 3
        return "MeteorToys_button";                                         // 4
    }                                                                       // 5
  },                                                                        // 6
  state: function () {                                                      // 7
    if (Session.equals("MeteorToys_current", this.name)) {                  // 8
      return "MeteorToys_orb_active";                                       // 9
    } else {                                                                // 10
      return "MeteorToys_orb_condensed";                                    // 11
    }                                                                       // 12
  }                                                                         // 13
});                                                                         // 14
                                                                            // 15
Template.MeteorToy.events({                                                 // 16
  'click .MeteorToys_orb': function () {                                    // 17
    if (Session.get("MeteorToys_current") === this.name) {                  // 18
      Session.set("MeteorToys_current", false)                              // 19
    } else {                                                                // 20
      Session.set("MeteorToys_current", this.name)                          // 21
    }                                                                       // 22
  },                                                                        // 23
  'click .MeteorToys_orb_wrapper': function (event, t) {                    // 24
    if ($('#' + this.name).hasClass('MeteorToys_orb_active')) {             // 25
      event.stopPropagation();                                              // 26
    }                                                                       // 27
  }                                                                         // 28
                                                                            // 29
});                                                                         // 30
                                                                            // 31
//////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/meteortoys:toykit/client/functions.js                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
UI.registerHelper('MeteorToys', function(){                                 // 1
  return Session.get("MeteorToys_display");                                 // 2
});                                                                         // 3
                                                                            // 4
Meteor.startup(function(){                                                  // 5
                                                                            // 6
  MeteorToys_ToyKit.hotKeys();                                              // 7
  MeteorToys_ToyKit.observe();                                              // 8
  Meteor.subscribe("MeteorToys");                                           // 9
});                                                                         // 10
                                                                            // 11
MeteorToys_ToyKit = {                                                       // 12
  observe: function () {                                                    // 13
                                                                            // 14
    // first load                                                           // 15
    MeteorToys_ToyKit.runPubSub();                                          // 16
    MeteorToys_ToyKit.runJetSetter();                                       // 17
                                                                            // 18
    // start                                                                // 19
    if (!Object.observe) {                                                  // 20
      setInterval(function(){                                               // 21
        MeteorToys_ToyKit.runPubSub();                                      // 22
        MeteorToys_ToyKit.runJetSetter();                                   // 23
      }, 3000);                                                             // 24
    } else {                                                                // 25
      Object.observe(Meteor.default_connection._subscriptions, function() { // 26
        MeteorToys_ToyKit.runPubSub();                                      // 27
      })                                                                    // 28
      Object.observe(Session.keys, function () {                            // 29
        MeteorToys_ToyKit.runJetSetter();                                   // 30
      })                                                                    // 31
    }                                                                       // 32
    // end                                                                  // 33
  },                                                                        // 34
  hotKeys: function () {                                                    // 35
    // start                                                                // 36
    $(document).keydown(function (e) {                                      // 37
      if (e.keyCode === 77 && e.ctrlKey) {                                  // 38
        MeteorToys_ToyKit.toggleDisplay();                                  // 39
      }                                                                     // 40
    });                                                                     // 41
    // end                                                                  // 42
  },                                                                        // 43
                                                                            // 44
  toggleDisplay: function () {                                              // 45
                                                                            // 46
    var displayStatus = Session.get("MeteorToys_display");                  // 47
                                                                            // 48
    if (displayStatus) {                                                    // 49
      Session.set("MeteorToys_display", false);                             // 50
    } else {                                                                // 51
      Session.set("MeteorToys_display", true);                              // 52
    }                                                                       // 53
                                                                            // 54
  },                                                                        // 55
  runJetSetter: function () {                                               // 56
    if (Package["msavin:jetsetter"]) {                                      // 57
      Package["msavin:jetsetter"].JetSetter.getKeys()                       // 58
    }                                                                       // 59
  },                                                                        // 60
  runPubSub: function () {                                                  // 61
    if (Package["msavin:pubsub"]) {                                         // 62
      Package["msavin:pubsub"].MeteorToys_PubSub.getSubscriptionKeys();     // 63
    } else if (Package["msavin:mongol"]) {                                  // 64
      Package["msavin:mongol"].MongolPackage.setSubscriptionKeys()          // 65
    }                                                                       // 66
  }                                                                         // 67
}                                                                           // 68
                                                                            // 69
                                                                            // 70
//////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// packages/meteortoys:toykit/lib/main.js                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
// MeteorToys_Data = {                                                      // 1
// 	'Impersonate': new Mongo.Collection("MeteorToysData_Impersonate"),      // 2
// 	'Methods':     new Mongo.Collection("MeteorToysData_Methods"),          // 3
// 	'Settings':    new Mongo.Collection("MeteorToysData_Settings"),         // 4
// 	'Mongol':      new Mongo.Collection("MeteorToysData_Mongol"),           // 5
// }                                                                        // 6
                                                                            // 7
// MeteorToys_Data.Impersonate.allow({                                      // 8
// 	insert: function () {                                                   // 9
// 	    return true;                                                        // 10
// 	},                                                                      // 11
// 	remove: function (){                                                    // 12
// 	    return true;                                                        // 13
// 	},                                                                      // 14
// 	update: function() {                                                    // 15
// 	    return true;                                                        // 16
// 	}                                                                       // 17
// });                                                                      // 18
                                                                            // 19
// MeteorToys_Data.Methods.allow({                                          // 20
// 	insert: function () {                                                   // 21
// 	    return true;                                                        // 22
// 	},                                                                      // 23
// 	remove: function (){                                                    // 24
// 	    return true;                                                        // 25
// 	},                                                                      // 26
// 	update: function() {                                                    // 27
// 	    return true;                                                        // 28
// 	}                                                                       // 29
// });                                                                      // 30
                                                                            // 31
// MeteorToys_Data.Settings.allow({                                         // 32
// 	insert: function () {                                                   // 33
// 	    return true;                                                        // 34
// 	},                                                                      // 35
// 	remove: function (){                                                    // 36
// 	    return true;                                                        // 37
// 	},                                                                      // 38
// 	update: function() {                                                    // 39
// 	    return true;                                                        // 40
// 	}                                                                       // 41
// });                                                                      // 42
                                                                            // 43
// MeteorToys_Data.Mongol.allow({                                           // 44
// 	insert: function () {                                                   // 45
// 	    return true;                                                        // 46
// 	},                                                                      // 47
// 	remove: function (){                                                    // 48
// 	    return true;                                                        // 49
// 	},                                                                      // 50
// 	update: function() {                                                    // 51
// 	    return true;                                                        // 52
// 	}                                                                       // 53
// });                                                                      // 54
                                                                            // 55
//////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toykit'] = {
  MeteorToys_Data: MeteorToys_Data
};

})();
