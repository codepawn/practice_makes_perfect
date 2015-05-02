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
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var loadFilePicker;

(function () {

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/natestrauser:filepicker-plus/client.js                                 //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
loadFilePicker = function(key, callback){                                          // 1
  //todo - shift arguements to support just callback                               // 2
  if(typeof filepicker === "undefined"){                                           // 3
    if(!key && Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.key)
        key = Meteor.settings.public.filepicker.key;                               // 5
                                                                                   // 6
    if(key){                                                                       // 7
        // Functions to run after the script tag has loaded                        // 8
        var filepickerLoadCallback = function() {                                  // 9
          filepicker.setKey(key);                                                  // 10
                                                                                   // 11
          if (Object.prototype.toString.call(callback) === "[object Function]")    // 12
            callback();                                                            // 13
        };                                                                         // 14
                                                                                   // 15
        // If the script doesn't load                                              // 16
        var filepickerErrorCallback = function(error) {                            // 17
          if(typeof console !== "undefined") {                                     // 18
            console.log(error);                                                    // 19
          }                                                                        // 20
        };                                                                         // 21
                                                                                   // 22
        // Generate a script tag                                                   // 23
        var script = document.createElement("script");                             // 24
        script.type = "text/javascript";                                           // 25
        script.src = "//api.filepicker.io/v1/filepicker.js";                       // 26
        script.onload = filepickerLoadCallback;                                    // 27
        script.onerror = filepickerErrorCallback;                                  // 28
                                                                                   // 29
        // Load the script tag                                                     // 30
        document.getElementsByTagName('head')[0].appendChild(script);              // 31
                                                                                   // 32
    }else{                                                                         // 33
      if(typeof console !== "undefined") {                                         // 34
        console.log("filepicker-plus - tried to load but key not supplied");       // 35
      }                                                                            // 36
    }                                                                              // 37
  }                                                                                // 38
};                                                                                 // 39
                                                                                   // 40
UI.registerHelper("filepickerIdToImageUrl", function(imageId, options) {           // 41
  var url = "";                                                                    // 42
  if(!imageId && options.hash.placehold_it){                                       // 43
    url = "http://placehold.it/"+options.hash.placehold_it;                        // 44
  }else if(!imageId && options.hash.placeholder_url){                              // 45
    url = options.hash.placeholder_url;                                            // 46
  }else if(imageId){                                                               // 47
    var domain = "www.filepicker.io";                                              // 48
    if(Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.cdn_domain)
      domain = Meteor.settings.public.filepicker.cdn_domain;                       // 50
                                                                                   // 51
    url = "//"+domain+"/api/file/" + imageId;                                      // 52
    var convertOptions = _.omit(options.hash, ['placehold_it','placeholder_url']); // 53
    if(_.keys(convertOptions).length > 0)                                          // 54
      url += "/convert?"+$.param(convertOptions);                                  // 55
  }                                                                                // 56
  return url;                                                                      // 57
});                                                                                // 58
                                                                                   // 59
UI.registerHelper("filepickerIdToUrl", function(filepickerId) {                    // 60
  var url = "";                                                                    // 61
  if(filepickerId){                                                                // 62
    var domain = "www.filepicker.io";                                              // 63
    if(Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.cdn_domain)
      domain = Meteor.settings.public.filepicker.cdn_domain;                       // 65
                                                                                   // 66
    url = "//"+domain+"/api/file/" + filepickerId;                                 // 67
  }                                                                                // 68
  return url;                                                                      // 69
});                                                                                // 70
/////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['natestrauser:filepicker-plus'] = {
  loadFilePicker: loadFilePicker
};

})();
