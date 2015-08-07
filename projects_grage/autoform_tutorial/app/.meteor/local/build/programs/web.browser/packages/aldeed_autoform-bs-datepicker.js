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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/aldeed:autoform-bs-datepicker/template.autoform-bs-datepicker.js                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("afBootstrapDatepicker");                                                   // 2
Template["afBootstrapDatepicker"] = new Template("Template.afBootstrapDatepicker", (function() { // 3
  var view = this;                                                                               // 4
  return Blaze.If(function() {                                                                   // 5
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "buttonClasses"));                  // 6
  }, function() {                                                                                // 7
    return [ "\n    ", HTML.DIV({                                                                // 8
      "class": "input-group date"                                                                // 9
    }, "\n      ", HTML.INPUT(HTML.Attrs({                                                       // 10
      type: "text",                                                                              // 11
      value: ""                                                                                  // 12
    }, function() {                                                                              // 13
      return Spacebars.attrMustache(view.lookup("atts"));                                        // 14
    })), HTML.SPAN({                                                                             // 15
      "class": "input-group-addon"                                                               // 16
    }, HTML.I({                                                                                  // 17
      "class": function() {                                                                      // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "buttonClasses"));          // 19
      }                                                                                          // 20
    })), "\n    "), "\n  " ];                                                                    // 21
  }, function() {                                                                                // 22
    return [ "\n    ", HTML.INPUT(HTML.Attrs({                                                   // 23
      type: "text",                                                                              // 24
      value: ""                                                                                  // 25
    }, function() {                                                                              // 26
      return Spacebars.attrMustache(view.lookup("atts"));                                        // 27
    })), "\n  " ];                                                                               // 28
  });                                                                                            // 29
}));                                                                                             // 30
                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/aldeed:autoform-bs-datepicker/autoform-bs-datepicker.js                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
/* global AutoForm, $ */                                                                         // 1
                                                                                                 // 2
AutoForm.addInputType("bootstrap-datepicker", {                                                  // 3
  template: "afBootstrapDatepicker",                                                             // 4
  valueOut: function () {                                                                        // 5
    if (this.val()) {                                                                            // 6
      var val = this.datepicker('getUTCDate');                                                   // 7
      return (val instanceof Date) ? val : this.val();                                           // 8
    }                                                                                            // 9
  },                                                                                             // 10
  valueConverters: {                                                                             // 11
    "string": function (val) {                                                                   // 12
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;            // 13
    },                                                                                           // 14
    "stringArray": function (val) {                                                              // 15
      if (val instanceof Date) {                                                                 // 16
        return [AutoForm.Utility.dateToDateStringUTC(val)];                                      // 17
      }                                                                                          // 18
      return val;                                                                                // 19
    },                                                                                           // 20
    "number": function (val) {                                                                   // 21
      return (val instanceof Date) ? val.getTime() : val;                                        // 22
    },                                                                                           // 23
    "numberArray": function (val) {                                                              // 24
      if (val instanceof Date) {                                                                 // 25
        return [val.getTime()];                                                                  // 26
      }                                                                                          // 27
      return val;                                                                                // 28
    },                                                                                           // 29
    "dateArray": function (val) {                                                                // 30
      if (val instanceof Date) {                                                                 // 31
        return [val];                                                                            // 32
      }                                                                                          // 33
      return val;                                                                                // 34
    }                                                                                            // 35
  }                                                                                              // 36
});                                                                                              // 37
                                                                                                 // 38
Template.afBootstrapDatepicker.helpers({                                                         // 39
  atts: function addFormControlAtts() {                                                          // 40
    var atts = _.clone(this.atts);                                                               // 41
    // Add bootstrap class                                                                       // 42
    atts = AutoForm.Utility.addClass(atts, "form-control");                                      // 43
    delete atts.datePickerOptions;                                                               // 44
    return atts;                                                                                 // 45
  }                                                                                              // 46
});                                                                                              // 47
                                                                                                 // 48
Template.afBootstrapDatepicker.rendered = function () {                                          // 49
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');     // 50
  var data = this.data;                                                                          // 51
                                                                                                 // 52
  // instanciate datepicker                                                                      // 53
  $input.datepicker(data.atts.datePickerOptions);                                                // 54
                                                                                                 // 55
  // set and reactively update values                                                            // 56
  this.autorun(function () {                                                                     // 57
    var data = Template.currentData();                                                           // 58
                                                                                                 // 59
    // set field value                                                                           // 60
    if (data.value instanceof Date) {                                                            // 61
      $input.datepicker('setUTCDate', data.value);                                               // 62
    } else if (typeof data.value === "string") {                                                 // 63
      $input.datepicker('update', data.value);                                                   // 64
    }                                                                                            // 65
                                                                                                 // 66
    // set start date if there's a min in the schema                                             // 67
    if (data.min instanceof Date) {                                                              // 68
      // datepicker plugin expects local Date object,                                            // 69
      // so convert UTC Date object to local                                                     // 70
      var startDate = utcToLocal(data.min);                                                      // 71
      $input.datepicker('setStartDate', startDate);                                              // 72
    }                                                                                            // 73
                                                                                                 // 74
    // set end date if there's a max in the schema                                               // 75
    if (data.max instanceof Date) {                                                              // 76
      // datepicker plugin expects local Date object,                                            // 77
      // so convert UTC Date object to local                                                     // 78
      var endDate = utcToLocal(data.max);                                                        // 79
      $input.datepicker('setEndDate', endDate);                                                  // 80
    }                                                                                            // 81
  });                                                                                            // 82
};                                                                                               // 83
                                                                                                 // 84
Template.afBootstrapDatepicker.destroyed = function () {                                         // 85
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');     // 86
  $input.datepicker('remove');                                                                   // 87
};                                                                                               // 88
                                                                                                 // 89
function utcToLocal(utcDate) {                                                                   // 90
  var localDateObj = new Date();                                                                 // 91
  localDateObj.setDate(utcDate.getUTCDate());                                                    // 92
  localDateObj.setMonth(utcDate.getUTCMonth());                                                  // 93
  localDateObj.setFullYear(utcDate.getUTCFullYear());                                            // 94
  localDateObj.setHours(0);                                                                      // 95
  localDateObj.setMinutes(0);                                                                    // 96
  localDateObj.setSeconds(0);                                                                    // 97
  localDateObj.setMilliseconds(0);                                                               // 98
  return localDateObj;                                                                           // 99
}                                                                                                // 100
                                                                                                 // 101
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform-bs-datepicker'] = {};

})();
