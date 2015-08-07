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
var Mongo = Package.mongo.Mongo;
var Session = Package.session.Session;
var EditableJSON = Package['babrahams:editable-json'].EditableJSON;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Mongol, MongolPackage, sessionKey, docIndex, DocumentPosition, CurrentCollection, CollectionCount, newPosition;

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
// packages/msavin:mongol/client/row_header/template.header.js                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_header");                                                                               // 2
Template["Mongol_header"] = new Template("Template.Mongol_header", (function() {                                     // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": function() {                                                                                            // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")), " Mongol_header" ];                         // 7
    },                                                                                                               // 8
    id: "Mongol_cmongol_618"                                                                                         // 9
  }, HTML.Raw('\n\n    <div style="float: right" class="Mongol_Minimize" title="Minimize">_</div>\n    <!-- <div style="float: right" class="Mongol_FullScreen" title="Fullscreen">&#x2b1c;</div> -->\n\n    <strong>Mongol</strong><br>\n    <div class="Mongol_contentView">\n    <!--  -->\n      <div class="Mongol_docMenu" style="text-indent: 8px">\n        by Meteor Toys\n      </div>\n      <div class="Mongol_documentViewer ">\n\n        Created by <a href="http://maxsavin.com"><u>Max Savin</u></a>.<br>\n        Learn more at <a href="https://github.com/msavin/Mongol"><u>GitHub</u></a>.<br>\n        Issued under <a href="https://github.com/msavin/Mongol/blob/master/README.md"><u> MIT License</u></a>.<br>\n        \n\n      </div>\n    <!--  -->\n    </div>\n  '));
}));                                                                                                                 // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_header/header.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_header.events({                                                                                      // 1
  'click .Mongol_row': function () {                                                                                 // 2
    if (Session.equals("Mongol_currentCollection", "mongol_618")) {                                                  // 3
      Session.set("Mongol_currentCollection", null);                                                                 // 4
    } else {                                                                                                         // 5
      Session.set("Mongol_currentCollection", "mongol_618");                                                         // 6
    }                                                                                                                // 7
  },                                                                                                                 // 8
  'click .Mongol_Minimize' : function (e) {                                                                          // 9
    e.stopPropagation();                                                                                             // 10
    Session.set("Mongol_currentCollection", null);                                                                   // 11
  },                                                                                                                 // 12
  'click .Mongol_FullScreen' : function (e) {                                                                        // 13
    e.stopPropagation();                                                                                             // 14
	  MongolPackage.toggleFullScreen();                                                                                 // 15
  },                                                                                                                 // 16
  'click .Mongol_contentView': function (e) {                                                                        // 17
    e.stopPropagation();                                                                                             // 18
  }                                                                                                                  // 19
});                                                                                                                  // 20
                                                                                                                     // 21
Template.Mongol_header.helpers({                                                                                     // 22
  active: function () {                                                                                              // 23
    if (Session.equals("Mongol_currentCollection", "mongol_618")) {                                                  // 24
      return "Mongol_row_expand";                                                                                    // 25
    }                                                                                                                // 26
  }                                                                                                                  // 27
});                                                                                                                  // 28
                                                                                                                     // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_account/template.account.js                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_account");                                                                              // 2
Template["Mongol_account"] = new Template("Template.Mongol_account", (function() {                                   // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": function() {                                                                                            // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                           // 7
    },                                                                                                               // 8
    id: "Mongol_caccount_618",                                                                                       // 9
    style: "white-space:normal;"                                                                                     // 10
  }, HTML.Raw("\n		\n			<!-- Display sign in status -->\n			"), Blaze.If(function() {                                // 11
    return Spacebars.call(view.lookup("currentUser"));                                                               // 12
  }, function() {                                                                                                    // 13
    return [ "\n				", HTML.DIV({                                                                                    // 14
      "class": "Mongol_account_active"                                                                               // 15
    }), "\n			" ];                                                                                                   // 16
  }, function() {                                                                                                    // 17
    return [ "\n				", HTML.DIV({                                                                                    // 18
      "class": "Mongol_account_inactive"                                                                             // 19
    }), "\n			" ];                                                                                                   // 20
  }), HTML.Raw("\n\n			<!-- Name -->\n			Account\n     \n        "), HTML.DIV({                                      // 21
    "class": "Mongol_contentView"                                                                                    // 22
  }, "\n			", HTML.Raw("<!-- Document Viewer -->"), "\n			", Blaze.If(function() {                                   // 23
    return Spacebars.call(view.lookup("currentUser"));                                                               // 24
  }, function() {                                                                                                    // 25
    return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer")), "\n			" ];                    // 26
  }, function() {                                                                                                    // 27
    return [ "\n				", HTML.DIV({                                                                                    // 28
      "class": function() {                                                                                          // 29
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];                     // 30
      }                                                                                                              // 31
    }, "\n						", HTML.DIV({                                                                                        // 32
      "class": "Mongol_docBar1",                                                                                     // 33
      style: "text-indent: 8px"                                                                                      // 34
    }, "\n							Not Signed In\n						"), "\n					"), "\n				", HTML.DIV({                                           // 35
      "class": "Mongol_documentViewer"                                                                               // 36
    }, "	\n					\n				"), "\n			" ];                                                                                 // 37
  }), "\n		"), "\n	");                                                                                               // 38
}));                                                                                                                 // 39
                                                                                                                     // 40
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_account/account.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.Mongol_account.helpers({                                                                                    // 2
  active: function () {                                                                                              // 3
    if (Session.equals("Mongol_currentCollection", "account_618")) {                                                 // 4
      return "Mongol_row_expand";                                                                                    // 5
    }                                                                                                                // 6
  },                                                                                                                 // 7
  hasAccountsUI: function () {                                                                                       // 8
    if (Template.loginButtons) {                                                                                     // 9
      return true;                                                                                                   // 10
    }                                                                                                                // 11
  },                                                                                                                 // 12
  canSignIn: function () {                                                                                           // 13
    // Not reactive, but it'll have to do                                                                            // 14
    return !!Package['accounts-base'] && !!Package['accounts-ui'] && !Meteor.userId() && $('#login-sign-in-link').length;
  }                                                                                                                  // 16
});                                                                                                                  // 17
                                                                                                                     // 18
                                                                                                                     // 19
Template.Mongol_account.events({                                                                                     // 20
  'click .Mongol_row': function () {                                                                                 // 21
    if (Session.equals("Mongol_currentCollection", "account_618")) {                                                 // 22
      Session.set("Mongol_currentCollection", null);                                                                 // 23
    } else {                                                                                                         // 24
      Session.set("Mongol_currentCollection", "account_618");                                                        // 25
    }                                                                                                                // 26
  },                                                                                                                 // 27
  'click .Mongol_contentView': function(e, t) {                                                                      // 28
    e.stopPropagation();                                                                                             // 29
  }                                                                                                                  // 30
});                                                                                                                  // 31
                                                                                                                     // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_account/template.accountViewer.js                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_accountViewer");                                                                        // 2
Template["Mongol_accountViewer"] = new Template("Template.Mongol_accountViewer", (function() {                       // 3
  var view = this;                                                                                                   // 4
  return [ Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n\n	", HTML.DIV({                         // 5
    "class": function() {                                                                                            // 6
      return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                             // 7
    },                                                                                                               // 8
    id: "MongolDoc_account_618",                                                                                     // 9
    contenteditable: function() {                                                                                    // 10
      return Spacebars.mustache(view.lookup("editContent"));                                                         // 11
    }                                                                                                                // 12
  }, "	\n		", HTML.PRE(Blaze.View("lookup:accountData", function() {                                                 // 13
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("accountData")));                                        // 14
  })), "\n	") ];                                                                                                     // 15
}));                                                                                                                 // 16
                                                                                                                     // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_account/accountViewer.js                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_accountViewer.helpers({                                                                              // 1
  accountData: function () {                                                                                         // 2
    var docCurrent = Meteor.user(),                                                                                  // 3
      json_output = JSON.stringify(docCurrent, null, 2),                                                             // 4
      colorized = MongolPackage.colorize(json_output);                                                               // 5
    return colorized;                                                                                                // 6
  },                                                                                                                 // 7
  editContent: function () {                                                                                         // 8
                                                                                                                     // 9
    var editMode = Session.get("Mongol_editMode");                                                                   // 10
                                                                                                                     // 11
    if (editMode) {                                                                                                  // 12
      return "true";                                                                                                 // 13
    }                                                                                                                // 14
                                                                                                                     // 15
  },                                                                                                                 // 16
  editStyle: function () {                                                                                           // 17
                                                                                                                     // 18
    var editMode = Session.get("Mongol_editMode");                                                                   // 19
                                                                                                                     // 20
    if (editMode) {                                                                                                  // 21
      return "Mongol_editable";                                                                                      // 22
    }                                                                                                                // 23
                                                                                                                     // 24
  },                                                                                                                 // 25
  usercode: function () {                                                                                            // 26
    return Meteor.userId();                                                                                          // 27
  },                                                                                                                 // 28
});                                                                                                                  // 29
                                                                                                                     // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_collection/template.collections.js                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_collection");                                                                           // 2
Template["Mongol_collection"] = new Template("Template.Mongol_collection", (function() {                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": function() {                                                                                            // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                           // 7
    },                                                                                                               // 8
    id: function() {                                                                                                 // 9
      return [ "Mongol_c", Spacebars.mustache(view.lookup(".")) ];                                                   // 10
    }                                                                                                                // 11
  }, HTML.Raw('\n		\n        <!-- <div class="Mongol_toggle_selected_collection"> -->\n        \n			<!-- Collection Count -->\n			'), HTML.DIV({
    "class": "Mongol_counter"                                                                                        // 13
  }, "\n				", Blaze.If(function() {                                                                                 // 14
    return Spacebars.call(view.lookup("collectionCount"));                                                           // 15
  }, function() {                                                                                                    // 16
    return [ "\n				", HTML.SPAN({                                                                                   // 17
      "class": "MongolHide"                                                                                          // 18
    }, Blaze.View("lookup:currentPosition", function() {                                                             // 19
      return Spacebars.mustache(view.lookup("currentPosition"));                                                     // 20
    }), "/") ];                                                                                                      // 21
  }), Blaze.View("lookup:collectionCount", function() {                                                              // 22
    return Spacebars.mustache(view.lookup("collectionCount"));                                                       // 23
  }), "\n			"), HTML.Raw("\n	\n			<!-- Collection Name -->\n			"), HTML.DIV({                                        // 24
    "class": "Mongol_row_name"                                                                                       // 25
  }, Blaze.View("lookup:.", function() {                                                                             // 26
    return Spacebars.mustache(view.lookup("."));                                                                     // 27
  })), HTML.Raw("\n    	    \n        <!-- </div> -->\n\n		<!-- Document Viewer -->\n		"), HTML.DIV({                // 28
    "class": "Mongol_contentView"                                                                                    // 29
  }, "\n			", Spacebars.include(view.lookupTemplate("Mongol_docViewer")), "\n		"), "\n	");                           // 30
}));                                                                                                                 // 31
                                                                                                                     // 32
Template.__checkName("Mongol_collection_notFound");                                                                  // 33
Template["Mongol_collection_notFound"] = new Template("Template.Mongol_collection_notFound", (function() {           // 34
  var view = this;                                                                                                   // 35
  return HTML.Raw('<div class="Mongol_empty">\n		No collections found. If you think this is an error, please report it on\n		<a href="https://github.com/msavin/Mongol" style="color: #cc0000">GitHub</a>.\n	</div>');
}));                                                                                                                 // 37
                                                                                                                     // 38
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_collection/collections.js                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_collection.events({                                                                                  // 1
  'click .Mongol_row': function (evt) {                                                                              // 2
                                                                                                                     // 3
    var targetCollection = String(this);                                                                             // 4
    var sessionKey = "Mongol_" + targetCollection;                                                                   // 5
                                                                                                                     // 6
    if (Session.equals("Mongol_currentCollection", targetCollection)) {                                              // 7
                                                                                                                     // 8
      // either do nothing or collapse the pane                                                                      // 9
      // comment out the line below for not collapsing the pane                                                      // 10
      Session.set("Mongol_currentCollection", null);                                                                 // 11
                                                                                                                     // 12
    } else {                                                                                                         // 13
                                                                                                                     // 14
      Session.set("Mongol_editMode", false);                                                                         // 15
                                                                                                                     // 16
      // If the collection doesn't have an index key set,                                                            // 17
      // start it from the first document                                                                            // 18
      if (!Session.get(sessionKey)) {                                                                                // 19
        Session.set(sessionKey, 0);                                                                                  // 20
      }                                                                                                              // 21
                                                                                                                     // 22
      Session.set("Mongol_currentCollection", targetCollection);                                                     // 23
                                                                                                                     // 24
    }                                                                                                                // 25
                                                                                                                     // 26
  },                                                                                                                 // 27
  'click .Mongol_contentView': function(e, t) {                                                                      // 28
    e.stopPropagation();                                                                                             // 29
  }                                                                                                                  // 30
});                                                                                                                  // 31
                                                                                                                     // 32
Template.Mongol_collection.helpers({                                                                                 // 33
  active: function () {                                                                                              // 34
                                                                                                                     // 35
    var currentCollection = Session.get("Mongol_currentCollection"),                                                 // 36
      targetCollection = String(this);                                                                               // 37
                                                                                                                     // 38
    if (currentCollection === targetCollection) {                                                                    // 39
      return "Mongol_row_expand";                                                                                    // 40
    }                                                                                                                // 41
                                                                                                                     // 42
  },                                                                                                                 // 43
  collectionCount: function () {                                                                                     // 44
                                                                                                                     // 45
    var collectionName = String(this);                                                                               // 46
    var collectionVar = Mongol.Collection(collectionName);                                                           // 47
                                                                                                                     // 48
    var count = collectionVar && collectionVar.find().count() || 0;                                                  // 49
                                                                                                                     // 50
    return count;                                                                                                    // 51
                                                                                                                     // 52
  },                                                                                                                 // 53
  currentPosition: function () {                                                                                     // 54
                                                                                                                     // 55
    var targetCollection = String(this);                                                                             // 56
    var sessionKey = "Mongol_" + targetCollection;                                                                   // 57
                                                                                                                     // 58
    var current = Session.get(sessionKey);                                                                           // 59
    var count = current + 1;                                                                                         // 60
                                                                                                                     // 61
    return count;                                                                                                    // 62
                                                                                                                     // 63
  }                                                                                                                  // 64
});                                                                                                                  // 65
                                                                                                                     // 66
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_editor/template.docViewer.js                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_docViewer");                                                                            // 2
Template["Mongol_docViewer"] = new Template("Template.Mongol_docViewer", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("notEmpty"));                                                                  // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("activeDocument"));                                                          // 9
    }, function() {                                                                                                  // 10
      return [ "\n      ", Blaze.If(function() {                                                                     // 11
        return Spacebars.call(view.lookup("editStyle"));                                                             // 12
      }, function() {                                                                                                // 13
        return [ "\n        ", HTML.DIV({                                                                            // 14
          "class": function() {                                                                                      // 15
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                       // 16
          },                                                                                                         // 17
          id: function() {                                                                                           // 18
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                          // 19
          },                                                                                                         // 20
          contenteditable: function() {                                                                              // 21
            return Spacebars.mustache(view.lookup("editContent"));                                                   // 22
          }                                                                                                          // 23
        }, "  \n          ", HTML.PRE(Blaze.View("lookup:documentJSON", function() {                                 // 24
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("documentJSON")));                                 // 25
        })), "\n        "), "\n      " ];                                                                            // 26
      }, function() {                                                                                                // 27
        return [ "\n        ", HTML.DIV({                                                                            // 28
          "class": function() {                                                                                      // 29
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                       // 30
          },                                                                                                         // 31
          id: function() {                                                                                           // 32
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                          // 33
          },                                                                                                         // 34
          contenteditable: function() {                                                                              // 35
            return Spacebars.mustache(view.lookup("editContent"));                                                   // 36
          }                                                                                                          // 37
        }, "  \n          ", Blaze.If(function() {                                                                   // 38
          return Spacebars.call(view.lookup("noInlineEditing"));                                                     // 39
        }, function() {                                                                                              // 40
          return [ "\n            ", HTML.PRE(Blaze.View("lookup:documentJSON", function() {                         // 41
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("documentJSON")));                               // 42
          })), "\n          " ];                                                                                     // 43
        }, function() {                                                                                              // 44
          return [ "\n            ", Blaze._TemplateWith(function() {                                                // 45
            return {                                                                                                 // 46
              document: Spacebars.call(view.lookup(".")),                                                            // 47
              collection: Spacebars.call(view.lookup(".."))                                                          // 48
            };                                                                                                       // 49
          }, function() {                                                                                            // 50
            return Spacebars.include(view.lookupTemplate("editableJSON"));                                           // 51
          }), "\n          " ];                                                                                      // 52
        }), "\n        "), "\n      " ];                                                                             // 53
      }), "\n    " ];                                                                                                // 54
    }, function() {                                                                                                  // 55
      return [ "\n      ", HTML.DIV({                                                                                // 56
        "class": "Mongol_documentViewer",                                                                            // 57
        id: function() {                                                                                             // 58
          return [ "MongolDoc_", Spacebars.mustache(view.lookup(".")) ];                                             // 59
        }                                                                                                            // 60
      }, "  \n        ", HTML.PRE("No document found"), "\n      "), "\n    " ];                                     // 61
    }), "\n  " ];                                                                                                    // 62
  }, function() {                                                                                                    // 63
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docInsert")), "\n  " ];                         // 64
  });                                                                                                                // 65
}));                                                                                                                 // 66
                                                                                                                     // 67
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_editor/docViewer.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_docViewer.helpers({                                                                                  // 1
  activeDocument: function () {                                                                                      // 2
    var collectionName = String(this);                                                                               // 3
    var currentCollection = Mongol.Collection(collectionName);                                                       // 4
    var documents = currentCollection.find().fetch();                                                                // 5
    var sessionKey = "Mongol_" + String(this);                                                                       // 6
    var docNumber = Session.get(sessionKey);                                                                         // 7
    var docCurrent = documents[docNumber];                                                                           // 8
    return docCurrent;                                                                                               // 9
  },                                                                                                                 // 10
  documentJSON: function () {                                                                                        // 11
    var docCurrent = this;                                                                                           // 12
    var json_output = JSON.stringify(docCurrent, null, 2), colorize;                                                 // 13
                                                                                                                     // 14
    if (!(json_output === undefined)) {                                                                              // 15
      colorize = MongolPackage.colorize(json_output);                                                                // 16
    } else {                                                                                                         // 17
      colorize = json_output;                                                                                        // 18
    }                                                                                                                // 19
                                                                                                                     // 20
    return colorize;                                                                                                 // 21
                                                                                                                     // 22
  },                                                                                                                 // 23
  editContent: function () {                                                                                         // 24
                                                                                                                     // 25
    var editMode = Session.get("Mongol_editMode");                                                                   // 26
                                                                                                                     // 27
    if (editMode) {                                                                                                  // 28
      return "true";                                                                                                 // 29
    }                                                                                                                // 30
                                                                                                                     // 31
  },                                                                                                                 // 32
  editStyle: function () {                                                                                           // 33
                                                                                                                     // 34
    var editMode = Session.get("Mongol_editMode");                                                                   // 35
                                                                                                                     // 36
    if (editMode) {                                                                                                  // 37
      return "Mongol_editable";                                                                                      // 38
    }                                                                                                                // 39
                                                                                                                     // 40
  },                                                                                                                 // 41
  notEmpty: function () {                                                                                            // 42
    var documentCount = Mongol.Collection(String(this)) && Mongol.Collection(String(this)).find().count() || 0;      // 43
    if (documentCount >= 1) {                                                                                        // 44
      return true;                                                                                                   // 45
    }                                                                                                                // 46
  },                                                                                                                 // 47
  noInlineEditing: function () {                                                                                     // 48
	return Session.get('Mongol_noInlineEditing');                                                                       // 49
  }                                                                                                                  // 50
});                                                                                                                  // 51
                                                                                                                     // 52
// Will possibly be used in augmented document udpate UI                                                             // 53
/*Template.Mongol_docViewer.events({                                                                                 // 54
                                                                                                                     // 55
	'click .Mongol_string' : function (evt,tmpl) {                                                                      // 56
		var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                         // 57
		Session.set('Mongol_inlineEdit',true);                                                                             // 58
		Tracker.flush();                                                                                                   // 59
		// Do something to trigger the editable text element                                                               // 60
	}                                                                                                                   // 61
                                                                                                                     // 62
});*/                                                                                                                // 63
                                                                                                                     // 64
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_insert/template.docInsert.js                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_docInsert");                                                                            // 2
Template["Mongol_docInsert"] = new Template("Template.Mongol_docInsert", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return [ HTML.Raw('<div class="Mongol_docMenu">\n		<div class="Mongol_docMenu_insert" style="float: right">Insert</div>\n		&nbsp;Create the First Document\n	</div>\n\n	'), HTML.DIV({
    "class": "Mongol_documentViewer ",                                                                               // 6
    id: function() {                                                                                                 // 7
      return [ "Mongol_", Spacebars.mustache(view.lookup(".")), "_newEntry" ];                                       // 8
    },                                                                                                               // 9
    tabindex: "-1",                                                                                                  // 10
    contenteditable: "true"                                                                                          // 11
  }, "	\n", HTML.Raw("<pre>{\n\n}</pre>"), "\n	") ];                                                                 // 12
}));                                                                                                                 // 13
                                                                                                                     // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_insert/docInsert.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_docInsert.events({                                                                                   // 1
  'click .Mongol_docMenu_insert': function () {                                                                      // 2
                                                                                                                     // 3
    var CollectionName = String(this),                                                                               // 4
      newDataID = "Mongol_" + String(this) + "_newEntry";                                                            // 5
    var newData = document.getElementById(newDataID).textContent;                                                    // 6
    var newObject = MongolPackage.parse(newData);                                                                    // 7
                                                                                                                     // 8
    if (newObject) {                                                                                                 // 9
      Meteor.call('Mongol_insert', CollectionName, newObject, function (error, result) {                             // 10
        if (!error) {                                                                                                // 11
          sessionKey = "Mongol_" + CollectionName;                                                                   // 12
          Session.set(sessionKey, 0);                                                                                // 13
        } else {                                                                                                     // 14
          MongolPackage.error("insert");                                                                             // 15
        }                                                                                                            // 16
      });                                                                                                            // 17
      // if successful, set the proper session                                                                       // 18
    }                                                                                                                // 19
                                                                                                                     // 20
  }                                                                                                                  // 21
});                                                                                                                  // 22
                                                                                                                     // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_subscriptions/template.subscriptions.js                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_subscriptions");                                                                        // 2
Template["Mongol_subscriptions"] = new Template("Template.Mongol_subscriptions", (function() {                       // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": function() {                                                                                            // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                           // 7
    },                                                                                                               // 8
    id: "Mongol_subscriptions_618",                                                                                  // 9
    style: "white-space:normal;"                                                                                     // 10
  }, HTML.Raw('\n		\n        <div class="Mongol_toggle_selected_collection">\n			<!-- Name -->\n			Subscriptions\n        </div>\n\n		'), HTML.DIV({
    "class": "Mongol_contentView"                                                                                    // 12
  }, "\n		", HTML.DIV({                                                                                              // 13
    "class": "Mongol_docMenu",                                                                                       // 14
    style: "text-indent: 8px"                                                                                        // 15
  }, "\n			", Blaze.View("lookup:subType", function() {                                                              // 16
    return Spacebars.mustache(view.lookup("subType"));                                                               // 17
  }), "\n		"), "\n		", HTML.Raw("<!-- Document Viewer -->"), "\n		", HTML.DIV({                                      // 18
    "class": "Mongol_documentViewer "                                                                                // 19
  }, "\n			", Blaze.Each(function() {                                                                                // 20
    return Spacebars.call(view.lookup("subscription"));                                                              // 21
  }, function() {                                                                                                    // 22
    return [ "\n				", HTML.DIV({                                                                                    // 23
      "class": "Mongol_subscription"                                                                                 // 24
    }, "\n					", HTML.DIV({                                                                                         // 25
      "class": "Mongol_subscription_toggle"                                                                          // 26
    }, HTML.CharRef({                                                                                                // 27
      html: "&times;",                                                                                               // 28
      str: "×"                                                                                                       // 29
    })), "\n					", HTML.DIV({                                                                                       // 30
      "class": "Mongol_subscription_name"                                                                            // 31
    }, Blaze.View("lookup:name", function() {                                                                        // 32
      return Spacebars.mustache(view.lookup("name"));                                                                // 33
    })), "\n					Params: ", Blaze.View("lookup:params", function() {                                                 // 34
      return Spacebars.mustache(view.lookup("params"));                                                              // 35
    }), " \n				"), "\n			" ];                                                                                       // 36
  }, function() {                                                                                                    // 37
    return "\n				No subscriptions available\n			";                                                                  // 38
  }), "\n		"), "\n		", HTML.Raw("<!--  -->"), "\n	"), "\n		\n\n	");                                                  // 39
}));                                                                                                                 // 40
                                                                                                                     // 41
Template.__checkName("Mongol_subscriptionsx");                                                                       // 42
Template["Mongol_subscriptionsx"] = new Template("Template.Mongol_subscriptionsx", (function() {                     // 43
  var view = this;                                                                                                   // 44
  return HTML.Raw('<!-- Ssshh... this is supposed to be a surprise :) -->\n\n\n<!-- 	<div id="createNewSub">New Sub</div>\n\n	{{#each subscription}}\n		ID: {{this.id}}\n		Name: {{this.name}}<br>\n\n		{{#each subscriptionParams}}\n			Param: {{this}}<br>\n		{{/each}}\n		<div style="background: #cc0000; display: inline-block" class="Mongol_stop_subscription">\n			STOP\n		</div>\n		<hr>\n	{{/each}} -->');
}));                                                                                                                 // 46
                                                                                                                     // 47
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/row_subscriptions/subscriptions.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol_subscriptions.helpers({                                                                              // 1
  active: function () {                                                                                              // 2
    if (Session.equals("Mongol_currentCollection", "subscriptions_618")) {                                           // 3
      return "Mongol_row_expand";                                                                                    // 4
    }                                                                                                                // 5
  },                                                                                                                 // 6
  subscription: function () {                                                                                        // 7
                                                                                                                     // 8
    var subscriptionIDs = Session.get("MeteorToys_PubSub")                                                           // 9
    return subscriptionIDs;                                                                                          // 10
                                                                                                                     // 11
  },                                                                                                                 // 12
  name: function () {                                                                                                // 13
    var subName = Meteor.default_connection._subscriptions[this] && Meteor.default_connection._subscriptions[this].name;
    return subName;                                                                                                  // 15
  },                                                                                                                 // 16
  params: function () {                                                                                              // 17
    var p = Meteor.default_connection._subscriptions[this] && Meteor.default_connection._subscriptions[this].params  // 18
                                                                                                                     // 19
    if (p && p.length > 0) {                                                                                         // 20
      return p;                                                                                                      // 21
    } else {                                                                                                         // 22
      return "none";                                                                                                 // 23
    }                                                                                                                // 24
  },                                                                                                                 // 25
  subType: function () {                                                                                             // 26
                                                                                                                     // 27
    if (!Object.observe) {                                                                                           // 28
      return "Polling every 3 seconds"                                                                               // 29
    } else {                                                                                                         // 30
      return "Observing Changes";                                                                                    // 31
    }                                                                                                                // 32
                                                                                                                     // 33
  }                                                                                                                  // 34
});                                                                                                                  // 35
                                                                                                                     // 36
                                                                                                                     // 37
  Template.Mongol_subscriptions.events({                                                                             // 38
    'click .Mongol_row': function () {                                                                               // 39
      if (Session.equals("Mongol_currentCollection", "subscriptions_618")) {                                         // 40
        Session.set("Mongol_currentCollection", null);                                                               // 41
      } else {                                                                                                       // 42
        Session.set("Mongol_currentCollection", "subscriptions_618");                                                // 43
      }                                                                                                              // 44
    },                                                                                                               // 45
    'click .Mongol_subscription_toggle': function () {                                                               // 46
      Meteor.default_connection._subscriptions[this].stop()                                                          // 47
    },                                                                                                               // 48
    'click .Mongol_contentView': function(e, t) {                                                                    // 49
      e.stopPropagation();                                                                                           // 50
    }                                                                                                                // 51
  });                                                                                                                // 52
                                                                                                                     // 53
                                                                                                                     // 54
// Object for subscriptions                                                                                          // 55
// var subscriptions = Meteor.default_connection._subscriptions                                                      // 56
// Object.observe polyfill                                                                                           // 57
                                                                                                                     // 58
// Template.Mongol_subscriptions.helpers({                                                                           // 59
//  subscription: function () {                                                                                      // 60
//    var data = MongolSubData.get()                                                                                 // 61
//    return data;                                                                                                   // 62
//  },                                                                                                               // 63
//  subscriptionParams: function() {                                                                                 // 64
//    return this.params                                                                                             // 65
//  }                                                                                                                // 66
// });                                                                                                               // 67
                                                                                                                     // 68
// Template.Mongol_subscriptions.events({                                                                            // 69
//  'click .Mongol_stop_subscription': function () {                                                                 // 70
//    this.stop()                                                                                                    // 71
//  },                                                                                                               // 72
//  'click #createNewSub': function () {                                                                             // 73
                                                                                                                     // 74
//    var argument = false,                                                                                          // 75
//      stuff = [];                                                                                                  // 76
                                                                                                                     // 77
//    var askForArgument = function () {                                                                             // 78
//      argument = prompt("What is the name of your subscription?");                                                 // 79
//      addArgument(argument);                                                                                       // 80
//    }                                                                                                              // 81
                                                                                                                     // 82
//    var addArgument = function (argument) {                                                                        // 83
//      if (argument) {                                                                                              // 84
//        stuff.push(argument);                                                                                      // 85
//        askForArgument();                                                                                          // 86
//      } else {                                                                                                     // 87
//        Meteor.subscribe.apply(Meteor, stuff);                                                                     // 88
//      }                                                                                                            // 89
//    }                                                                                                              // 90
                                                                                                                     // 91
//    askForArgument();                                                                                              // 92
                                                                                                                     // 93
//  }                                                                                                                // 94
// });                                                                                                               // 95
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/template.Mongol.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.body.addContent((function() {                                                                               // 2
  var view = this;                                                                                                   // 3
  return Spacebars.include(view.lookupTemplate("Mongol"));                                                           // 4
}));                                                                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                                                                      // 6
                                                                                                                     // 7
Template.__checkName("Mongol");                                                                                      // 8
Template["Mongol"] = new Template("Template.Mongol", (function() {                                                   // 9
  var view = this;                                                                                                   // 10
  return Blaze.If(function() {                                                                                       // 11
    return Spacebars.call(view.lookup("MeteorToys"));                                                                // 12
  }, function() {                                                                                                    // 13
    return [ "\n		\n		", HTML.DIV({                                                                                  // 14
      id: "Mongol",                                                                                                  // 15
      "class": function() {                                                                                          // 16
        return [ Spacebars.mustache(view.lookup("active")), " MeteorToys" ];                                         // 17
      }                                                                                                              // 18
    }, "\n			\n			", Blaze.If(function() {                                                                           // 19
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                          // 20
    }, function() {                                                                                                  // 21
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_header_pro")), "\n			" ];                     // 22
    }, function() {                                                                                                  // 23
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_header")), "\n			" ];                         // 24
    }), "\n\n			", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\n			", Blaze.Unless(function() {    // 25
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                          // 26
    }, function() {                                                                                                  // 27
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_subscriptions")), "\n			" ];                  // 28
    }), "\n\n			", Blaze.Each(function() {                                                                           // 29
      return Spacebars.call(view.lookup("Mongol_collections"));                                                      // 30
    }, function() {                                                                                                  // 31
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n			" ];                     // 32
    }, function() {                                                                                                  // 33
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n			" ];            // 34
    }), "\n\n			", Blaze.If(function() {                                                                             // 35
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                          // 36
    }, function() {                                                                                                  // 37
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_trash")), "\n			" ];                          // 38
    }), "\n\n		"), "\n		\n	" ];                                                                                      // 39
  });                                                                                                                // 40
}));                                                                                                                 // 41
                                                                                                                     // 42
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/Mongol.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.Mongol.helpers({                                                                                            // 1
  Mongol_collections: function () {                                                                                  // 2
    var MongolConfig = Session.get("Mongol");                                                                        // 3
    return MongolConfig && _.without(MongolConfig.collections, null) || [];                                          // 4
  },                                                                                                                 // 5
  active: function () {                                                                                              // 6
    var MongolCollection = Session.get("Mongol_currentCollection");                                                  // 7
    if (MongolCollection) {                                                                                          // 8
      return ((Session.get("Mongol_fullscreen")) ? "Mongol_fullscreen " : "") + "Mongol_expand";                     // 9
    }                                                                                                                // 10
  }                                                                                                                  // 11
});                                                                                                                  // 12
                                                                                                                     // 13
                                                                                                                     // 14
// Namespaced Functions                                                                                              // 15
                                                                                                                     // 16
MongolPackage = {                                                                                                    // 17
  'colorize': function (json) {                                                                                      // 18
    // colorized the JSON objects                                                                                    // 19
    if (typeof json != 'string') {                                                                                   // 20
      json = JSON.stringify(json, undefined, 2);                                                                     // 21
    }                                                                                                                // 22
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');                                  // 23
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'Mongol_number';                                                                                     // 25
      if (/^"/.test(match)) {                                                                                        // 26
        if (/:$/.test(match)) {                                                                                      // 27
          cls = 'Mongol_key';                                                                                        // 28
        } else {                                                                                                     // 29
          cls = 'Mongol_string';                                                                                     // 30
        }                                                                                                            // 31
      } else if (/true|false/.test(match)) {                                                                         // 32
        cls = 'Mongol_boolean';                                                                                      // 33
      } else if (/null/.test(match)) {                                                                               // 34
        cls = 'Mongol_null';                                                                                         // 35
      }                                                                                                              // 36
      return '<span class="' + cls + '">' + match + '</span>';                                                       // 37
    });                                                                                                              // 38
  },                                                                                                                 // 39
  'getDocumentUpdate': function (data) {                                                                             // 40
                                                                                                                     // 41
    var elementID = 'MongolDoc_' + data,                                                                             // 42
      newData = document.getElementById(elementID).textContent;                                                      // 43
                                                                                                                     // 44
    return newData;                                                                                                  // 45
                                                                                                                     // 46
  },                                                                                                                 // 47
  'error': function (data) {                                                                                         // 48
                                                                                                                     // 49
    switch (data) {                                                                                                  // 50
      case "json.parse":                                                                                             // 51
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");       // 52
        break;                                                                                                       // 53
      case "duplicate":                                                                                              // 54
        alert("Strange, there was an error duplicating your document.");                                             // 55
        break;                                                                                                       // 56
      case "remove":                                                                                                 // 57
        alert("Strange, there was an error removing your document.");                                                // 58
        break;                                                                                                       // 59
      case "insert":                                                                                                 // 60
        alert("Strange, there was an error inserting your document.");                                               // 61
        break;                                                                                                       // 62
      case "update":                                                                                                 // 63
        alert("There was an error updating your document. Please review your changes and try again.");               // 64
        break;                                                                                                       // 65
      case "permission":                                                                                             // 66
        // under consideration                                                                                       // 67
        alert("This Meteor applications looks to be deployed in debug mode. Mongol cannot edit this document because it onlys works if the absolute URL beings with 'http://localhost:'")
      default:                                                                                                       // 69
        return "Request Credentials";                                                                                // 70
        break;                                                                                                       // 71
    }                                                                                                                // 72
                                                                                                                     // 73
  },                                                                                                                 // 74
  'parse': function (data) {                                                                                         // 75
    var newObject = false;                                                                                           // 76
                                                                                                                     // 77
    try {                                                                                                            // 78
      newObject = JSON.parse(data);                                                                                  // 79
    } catch (error) {                                                                                                // 80
      MongolPackage.error("json.parse");                                                                             // 81
    }                                                                                                                // 82
                                                                                                                     // 83
    return newObject;                                                                                                // 84
                                                                                                                     // 85
  },                                                                                                                 // 86
  'setSubscriptionKeys': function () {                                                                               // 87
                                                                                                                     // 88
      var subscriptions  = Meteor.default_connection._subscriptions,                                                 // 89
          subKeys        = Object.keys(subscriptions);                                                               // 90
                                                                                                                     // 91
          Session.set("MeteorToys_PubSub", subKeys)                                                                  // 92
                                                                                                                     // 93
  }                                                                                                                  // 94
};                                                                                                                   // 95
                                                                                                                     // 96
                                                                                                                     // 97
// default.js                                                                                                        // 98
                                                                                                                     // 99
Meteor.startup(function() {                                                                                          // 100
                                                                                                                     // 101
  // If the user hasn't done a Session.set('Mongol',{ ... });                                                        // 102
  // set some default values                                                                                         // 103
  if (Session.get('Mongol') === undefined) {                                                                         // 104
                                                                                                                     // 105
  // Build a default config object                                                                                   // 106
  // Build a default config object                                                                                   // 107
                                                                                                                     // 108
    var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                       // 109
                                                                                                                     // 110
      // Note this returns the actual mongo collection name, not Meteor's Mongo.Collection name                      // 111
      return collection.name;                                                                                        // 112
                                                                                                                     // 113
    });                                                                                                              // 114
                                                                                                                     // 115
    var defaults = {                                                                                                 // 116
      'collections': collections,                                                                                    // 117
    };                                                                                                               // 118
                                                                                                                     // 119
    Session.set("Mongol", defaults);                                                                                 // 120
                                                                                                                     // 121
  }                                                                                                                  // 122
});                                                                                                                  // 123
                                                                                                                     // 124
                                                                                                                     // 125
// Give devs an api for hiding some collections, since they're all matched by default                                // 126
                                                                                                                     // 127
Mongol.hideCollection = function (collectionName) {                                                                  // 128
                                                                                                                     // 129
  var MongolConfig = Session.get("Mongol") || {},                                                                    // 130
    collections = MongolConfig.collections || {};                                                                    // 131
                                                                                                                     // 132
  collections = _.without(collections, collectionName);                                                              // 133
                                                                                                                     // 134
  MongolConfig.collections = collections;                                                                            // 135
                                                                                                                     // 136
  Session.set("Mongol", MongolConfig);                                                                               // 137
                                                                                                                     // 138
}                                                                                                                    // 139
                                                                                                                     // 140
Meteor.startup(function () {                                                                                         // 141
  Mongol.hideCollection("MeteorToysData_Impersonate");                                                               // 142
  Mongol.hideCollection("MeteorToysData_Methods");                                                                   // 143
  Mongol.hideCollection("MeteorToysData_Settings");                                                                  // 144
  // Mongol.hideCollection("MeteorToysData_Mongol");                                                                 // 145
});                                                                                                                  // 146
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_controls/template.docControls.js                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("Mongol_docControls");                                                                          // 2
Template["Mongol_docControls"] = new Template("Template.Mongol_docControls", (function() {                           // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("active"));                                                                    // 6
  }, function() {                                                                                                    // 7
    return [ "\n		\n		", HTML.DIV({                                                                                  // 8
      "class": function() {                                                                                          // 9
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];                     // 10
      }                                                                                                              // 11
    }, "\n			", Blaze.If(function() {                                                                                // 12
      return Spacebars.call(view.lookup("account"));                                                                 // 13
    }, function() {                                                                                                  // 14
      return [ "\n				", HTML.DIV({                                                                                  // 15
        "class": "Mongol_docBar1"                                                                                    // 16
      }, "\n					", Blaze.If(function() {                                                                            // 17
        return Spacebars.call(view.lookup("editing"));                                                               // 18
      }, function() {                                                                                                // 19
        return [ "\n						", HTML.DIV({                                                                              // 20
          "class": "Mongol_edit_title"                                                                               // 21
        }, "Update Document"), "\n						", HTML.DIV({                                                                // 22
          "class": "Mongol_edit_save"                                                                                // 23
        }, "Save"), "\n						", HTML.DIV({                                                                           // 24
          "class": "Mongol_edit_cancel"                                                                              // 25
        }, "Cancel"), "\n					" ];                                                                                   // 26
      }, function() {                                                                                                // 27
        return [ "	\n						\n                        ", HTML.Comment("For some reason, the method in place does not work for this\n                        Commenting out for now"), "\n                        ", HTML.DIV({
          "class": "Mongol_m_edit Mongol_m_updateAccount"                                                            // 29
        }, "Update"), "\n						\n						", HTML.Comment(" &nbsp;Currently Read-Only "), "\n						", HTML.DIV({        // 30
          "class": "Mongol_m_signout"                                                                                // 31
        }, "Sign Out"), "\n                        \n					" ];                                                       // 32
      }), "\n				"), "\n			" ];                                                                                      // 33
    }, function() {                                                                                                  // 34
      return [ "\n				", HTML.DIV({                                                                                  // 35
        "class": "Mongol_docBar1"                                                                                    // 36
      }, "\n					", Blaze.If(function() {                                                                            // 37
        return Spacebars.call(view.lookup("editing"));                                                               // 38
      }, function() {                                                                                                // 39
        return [ "\n						", HTML.DIV({                                                                              // 40
          "class": "Mongol_edit_title"                                                                               // 41
        }, "Update Document"), "\n						", HTML.DIV({                                                                // 42
          "class": "Mongol_edit_save"                                                                                // 43
        }, "Save"), "\n						", HTML.DIV({                                                                           // 44
          "class": "Mongol_edit_cancel"                                                                              // 45
        }, "Cancel"), "\n					" ];                                                                                   // 46
      }, function() {                                                                                                // 47
        return [ "\n						", HTML.DIV({                                                                              // 48
          "class": "Mongol_m_edit"                                                                                   // 49
        }, "Update"), "\n						", HTML.DIV({                                                                         // 50
          "class": "Mongol_m_new"                                                                                    // 51
        }, "Duplicate"), "\n						", HTML.DIV({                                                                      // 52
          "class": "Mongol_m_delete"                                                                                 // 53
        }, "Remove"), "\n						", HTML.DIV({                                                                         // 54
          "class": function() {                                                                                      // 55
            return [ Spacebars.mustache(view.lookup("disable_right")), " Mongol_m_right" ];                          // 56
          }                                                                                                          // 57
        }, HTML.CharRef({                                                                                            // 58
          html: "&rsaquo;",                                                                                          // 59
          str: "›"                                                                                                   // 60
        })), "\n						", HTML.DIV({                                                                                  // 61
          "class": function() {                                                                                      // 62
            return [ Spacebars.mustache(view.lookup("disable_left")), " Mongol_m_left" ];                            // 63
          }                                                                                                          // 64
        }, HTML.CharRef({                                                                                            // 65
          html: "&lsaquo;",                                                                                          // 66
          str: "‹"                                                                                                   // 67
        })), "\n					" ];                                                                                            // 68
      }), "\n				"), "\n			" ];                                                                                      // 69
    }), "	\n		"), "\n\n	" ];                                                                                         // 70
  }, function() {                                                                                                    // 71
    return [ "\n\n		", HTML.DIV({                                                                                    // 72
      "class": "Mongol_docMenu"                                                                                      // 73
    }, "\n			", HTML.DIV({                                                                                           // 74
      "class": "Mongol_docBar1"                                                                                      // 75
    }, "\n				", HTML.CharRef({                                                                                      // 76
      html: "&nbsp;",                                                                                                // 77
      str: " "                                                                                                       // 78
    }), "\n			"), "\n		"), "\n\n	" ];                                                                                // 79
  });                                                                                                                // 80
}));                                                                                                                 // 81
                                                                                                                     // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/msavin:mongol/client/doc_controls/docControls.js                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Strip out functions in case documents have had methods added to them                                              // 1
                                                                                                                     // 2
Mongol.validateDocument = function (doc) {                                                                           // 3
  var validatedDoc = {};                                                                                             // 4
  _.each(doc, function (val, key) {                                                                                  // 5
    if (_.isFunction(val)) {                                                                                         // 6
      return;                                                                                                        // 7
    }                                                                                                                // 8
    validatedDoc[key] = val;                                                                                         // 9
  });                                                                                                                // 10
  return validatedDoc;                                                                                               // 11
}                                                                                                                    // 12
                                                                                                                     // 13
Mongol.inlineEditingTimer = null;                                                                                    // 14
                                                                                                                     // 15
Mongol.resetInlineEditingTimer = function() {                                                                        // 16
  if (Mongol.inlineEditingTimer) {                                                                                   // 17
	Meteor.clearTimeout(Mongol.inlineEditingTimer);                                                                     // 18
  }                                                                                                                  // 19
  Session.set('Mongol_noInlineEditing', true);                                                                       // 20
  Mongol.inlineEditingTimer = Meteor.setTimeout(function () {                                                        // 21
    Session.set('Mongol_noInlineEditing', false);                                                                    // 22
  },300);                                                                                                            // 23
}                                                                                                                    // 24
                                                                                                                     // 25
Template.Mongol_docControls.events({                                                                                 // 26
  'click .Mongol_m_new': function() {                                                                                // 27
                                                                                                                     // 28
    var CollectionName = Session.get("Mongol_currentCollection"),                                                    // 29
      DocumentPosition = Session.get("Mongol_" + String(this)),                                                      // 30
      CurrentCollection = Mongol.Collection(CollectionName).find().fetch(),                                          // 31
      CollectionCount = Mongol.Collection(CollectionName).find().count();                                            // 32
                                                                                                                     // 33
    var CurrentDocument = CurrentCollection[DocumentPosition],                                                       // 34
      DocumentID = CurrentDocument._id,                                                                              // 35
      sessionKey = "Mongol_" + String(this);                                                                         // 36
                                                                                                                     // 37
    var ValidatedCurrentDocument = Mongol.validateDocument(CurrentDocument);                                         // 38
                                                                                                                     // 39
    Meteor.call("Mongol_duplicate", CollectionName, ValidatedCurrentDocument._id, function(error, result) {          // 40
      if (!error) {                                                                                                  // 41
                                                                                                                     // 42
        if (Mongol.Collection(CollectionName).findOne(result)) {                                                     // 43
                                                                                                                     // 44
          // Get position of new document                                                                            // 45
          var list = Mongol.Collection(CollectionName).find().fetch();                                               // 46
          var docID = result;                                                                                        // 47
                                                                                                                     // 48
          docIndex = $.map(list, function(obj, index) {                                                              // 49
            if (obj._id == docID) {                                                                                  // 50
              return index;                                                                                          // 51
            }                                                                                                        // 52
          })                                                                                                         // 53
                                                                                                                     // 54
          Session.set(sessionKey, Number(docIndex));                                                                 // 55
        }                                                                                                            // 56
                                                                                                                     // 57
      } else {                                                                                                       // 58
        MongolPackage.error("duplicate");                                                                            // 59
      }                                                                                                              // 60
    });                                                                                                              // 61
                                                                                                                     // 62
                                                                                                                     // 63
                                                                                                                     // 64
  },                                                                                                                 // 65
  'click .Mongol_m_edit': function() {                                                                               // 66
    Session.set("Mongol_editMode", true);                                                                            // 67
  },                                                                                                                 // 68
  'click .Mongol_m_delete': function() {                                                                             // 69
                                                                                                                     // 70
    var CollectionName = Session.get("Mongol_currentCollection"),                                                    // 71
      sessionKey = "Mongol_" + String(this);                                                                         // 72
    DocumentPosition = Session.get(sessionKey),                                                                      // 73
      CurrentCollection = Mongol.Collection(CollectionName).find().fetch(),                                          // 74
      CollectionCount = Mongol.Collection(CollectionName).find().count();                                            // 75
                                                                                                                     // 76
    var CurrentDocument = CurrentCollection[DocumentPosition],                                                       // 77
      DocumentID = CurrentDocument._id;                                                                              // 78
                                                                                                                     // 79
                                                                                                                     // 80
                                                                                                                     // 81
    Meteor.call('Mongol_remove', CollectionName, DocumentID, function(error, result) {                               // 82
                                                                                                                     // 83
      if (!error) {                                                                                                  // 84
        // Log the action                                                                                            // 85
        console.log("Removed " + DocumentID + " from " + CollectionName + ". Back-up below:");                       // 86
        console.log(CurrentDocument);                                                                                // 87
                                                                                                                     // 88
        // Adjust the position                                                                                       // 89
        if (DocumentPosition >= CollectionCount - 1) {                                                               // 90
          newPosition = DocumentPosition - 1;                                                                        // 91
          Session.set(sessionKey, newPosition);                                                                      // 92
        }                                                                                                            // 93
                                                                                                                     // 94
        if (Session.get(sessionKey) === -1) {                                                                        // 95
          Session.set(sessionKey, 0);                                                                                // 96
        }                                                                                                            // 97
                                                                                                                     // 98
                                                                                                                     // 99
      } else {                                                                                                       // 100
        MongolPackage.error("remove");                                                                               // 101
      }                                                                                                              // 102
                                                                                                                     // 103
    });                                                                                                              // 104
                                                                                                                     // 105
                                                                                                                     // 106
                                                                                                                     // 107
  },                                                                                                                 // 108
  'click .Mongol_m_right': function() {                                                                              // 109
    // Verify that the button is not disabled                                                                        // 110
    if (!$('.Mongol_m_right').hasClass('Mongol_m_disabled')) {                                                       // 111
                                                                                                                     // 112
      // Disable inline editing for 0.3s for quick flick to next doc                                                 // 113
      Mongol.resetInlineEditingTimer();                                                                              // 114
	                                                                                                                    // 115
      // Grab the key                                                                                                // 116
      sessionKey = "Mongol_" + String(this);                                                                         // 117
                                                                                                                     // 118
      // Go forward one doc                                                                                          // 119
      var MongolDocNumber = Session.get(sessionKey) + 1;                                                             // 120
      Session.set(sessionKey, MongolDocNumber);                                                                      // 121
      // console.log("right" + this);                                                                                // 122
    }                                                                                                                // 123
  },                                                                                                                 // 124
  'click .Mongol_m_left': function() {                                                                               // 125
                                                                                                                     // 126
    // Verify that the button is not disabled                                                                        // 127
    if (!$('.Mongol_m_left').hasClass('Mongol_m_disabled')) {                                                        // 128
                                                                                                                     // 129
      // Disable inline editing for 0.3s for quick flick to next doc                                                 // 130
      Mongol.resetInlineEditingTimer();                                                                              // 131
                                                                                                                     // 132
      // Grab the key                                                                                                // 133
      sessionKey = "Mongol_" + String(this);                                                                         // 134
                                                                                                                     // 135
      // Go back one doc                                                                                             // 136
      var MongolDocNumber = Session.get(sessionKey) - 1;                                                             // 137
      Session.set(sessionKey, MongolDocNumber);                                                                      // 138
      // console.log("left" + this);                                                                                 // 139
    }                                                                                                                // 140
                                                                                                                     // 141
  },                                                                                                                 // 142
  'click .Mongol_edit_save': function() {                                                                            // 143
                                                                                                                     // 144
    // Get current document to get its current state                                                                 // 145
    // We need to send this to the server so we know which fields are up for change                                  // 146
    // when applying the diffing algorithm                                                                           // 147
                                                                                                                     // 148
    var collectionName = (Session.equals("Mongol_currentCollection", "account_618")) ? "users" : String(this);       // 149
                                                                                                                     // 150
    if (Session.equals("Mongol_currentCollection", "account_618")) {                                                 // 151
      var newData = MongolPackage.getDocumentUpdate("account_618");                                                  // 152
      var newObject = MongolPackage.parse(newData);                                                                  // 153
      var oldObject = Meteor.user();                                                                                 // 154
      // console.log(targetCollection);                                                                              // 155
      // console.log(newData);                                                                                       // 156
      // console.log(newObject);                                                                                     // 157
    } else {                                                                                                         // 158
      var sessionKey = "Mongol_" + collectionName;                                                                   // 159
      DocumentPosition = Session.get(sessionKey),                                                                    // 160
        CurrentCollection = Mongol.Collection(collectionName).find().fetch();                                        // 161
      var newData = MongolPackage.getDocumentUpdate(collectionName);                                                 // 162
      var newObject = MongolPackage.parse(newData);                                                                  // 163
      var oldObject = CurrentCollection[DocumentPosition];                                                           // 164
    }                                                                                                                // 165
                                                                                                                     // 166
    if (newObject) {                                                                                                 // 167
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                // 169
          Session.set('Mongol_editMode', null);                                                                      // 170
          console.log('success')                                                                                     // 171
        } else {                                                                                                     // 172
          MongolPackage.error('update')                                                                              // 173
        }                                                                                                            // 174
      });                                                                                                            // 175
    }                                                                                                                // 176
  },                                                                                                                 // 177
  'click .Mongol_edit_cancel': function() {                                                                          // 178
    Session.set('Mongol_editMode', null);                                                                            // 179
  },                                                                                                                 // 180
  'click .Mongol_m_signout': function() {                                                                            // 181
    Meteor.logout();                                                                                                 // 182
  },                                                                                                                 // 183
});                                                                                                                  // 184
                                                                                                                     // 185
                                                                                                                     // 186
Template.Mongol_docControls.helpers({                                                                                // 187
  disable_right: function() {                                                                                        // 188
    var sessionKey = "Mongol_" + String(this);                                                                       // 189
    var CurrentDocument = Session.get(sessionKey);                                                                   // 190
    var collectionName = String(this);                                                                               // 191
    var collectionVar = Mongol.Collection(collectionName);                                                           // 192
                                                                                                                     // 193
    var collectionCount = collectionVar.find().count() - 1;                                                          // 194
                                                                                                                     // 195
    if (CurrentDocument === collectionCount) {                                                                       // 196
      return "Mongol_m_disabled";                                                                                    // 197
    }                                                                                                                // 198
                                                                                                                     // 199
  },                                                                                                                 // 200
  editing: function() {                                                                                              // 201
    var editing = Session.get('Mongol_editMode');                                                                    // 202
    return editing;                                                                                                  // 203
  },                                                                                                                 // 204
  editing_class: function() {                                                                                        // 205
    var edit = Session.get('Mongol_editMode');                                                                       // 206
    if (edit) {                                                                                                      // 207
      return "Mongol_m_wrapper_expand"                                                                               // 208
    }                                                                                                                // 209
  },                                                                                                                 // 210
  disable_left: function() {                                                                                         // 211
    var sessionKey = "Mongol_" + String(this);                                                                       // 212
    var CurrentDocument = Session.get(sessionKey);                                                                   // 213
                                                                                                                     // 214
    if (CurrentDocument <= 0) {                                                                                      // 215
      return "Mongol_m_disabled";                                                                                    // 216
    }                                                                                                                // 217
                                                                                                                     // 218
  },                                                                                                                 // 219
  Mongol_docMenu_editing: function() {                                                                               // 220
    var editMode = Session.get("Mongol_editMode");                                                                   // 221
                                                                                                                     // 222
    if (editMode) {                                                                                                  // 223
      return "Mongol_docMenu_editing";                                                                               // 224
    }                                                                                                                // 225
                                                                                                                     // 226
  },                                                                                                                 // 227
  active: function() {                                                                                               // 228
                                                                                                                     // 229
    var current = Session.get("Mongol_currentCollection");                                                           // 230
                                                                                                                     // 231
    // return true if collection name matches                                                                        // 232
    if (current === String(this)) {                                                                                  // 233
      return true;                                                                                                   // 234
    }                                                                                                                // 235
                                                                                                                     // 236
    // return true if it's a user account                                                                            // 237
    if (current === "account_618") {                                                                                 // 238
      return true;                                                                                                   // 239
    }                                                                                                                // 240
                                                                                                                     // 241
  },                                                                                                                 // 242
  account: function() {                                                                                              // 243
                                                                                                                     // 244
    var currentCollection = Session.get("Mongol_currentCollection");                                                 // 245
    if (currentCollection === "account_618") {                                                                       // 246
      return true                                                                                                    // 247
    } else {                                                                                                         // 248
      return false                                                                                                   // 249
    }                                                                                                                // 250
  },                                                                                                                 // 251
                                                                                                                     // 252
});                                                                                                                  // 253
                                                                                                                     // 254
// Will possibly be used in augmented document udpate UI                                                             // 255
/*Template.Mongol_docViewer.events({                                                                                 // 256
'click .Mongol_string' : function (evt,tmpl) {                                                                       // 257
var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                           // 258
Session.set('Mongol_inlineEdit',true);                                                                               // 259
Tracker.flush();                                                                                                     // 260
// Do something to trigger the editable text element                                                                 // 261
}                                                                                                                    // 262
});*/                                                                                                                // 263
                                                                                                                     // 264
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:mongol'] = {
  Mongol: Mongol,
  MongolPackage: MongolPackage
};

})();
