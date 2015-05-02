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
var __coffeescriptShare;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/yogiben:autoform-file/lib/client/template.autoform-file.js                              //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
                                                                                                    // 1
Template.__checkName("afFileUpload");                                                               // 2
Template["afFileUpload"] = new Template("Template.afFileUpload", (function() {                      // 3
  var view = this;                                                                                  // 4
  return [ HTML.Raw('<!-- <div class="form-group file-upload invisible"> -->\n		'), HTML.DIV({      // 5
    "class": "form-group file-upload"                                                               // 6
  }, "\n			", Blaze._TemplateWith(function() {                                                      // 7
    return {                                                                                        // 8
      name: Spacebars.call(view.lookup("name"))                                                     // 9
    };                                                                                              // 10
  }, function() {                                                                                   // 11
    return Spacebars.include(view.lookupTemplate("afFieldLabel"));                                  // 12
  }), "\n			", HTML.Raw("<br>"), "\n			", Blaze.If(function() {                                     // 13
    return Spacebars.dataMustache(view.lookup("fileUpload"), view.lookup("name"), view.lookup("collection"), view.lookup("label"));
  }, function() {                                                                                   // 15
    return [ "\n			", Spacebars.With(function() {                                                   // 16
      return Spacebars.dataMustache(view.lookup("fileUpload"), view.lookup("name"), view.lookup("collection"), view.lookup("label"));
    }, function() {                                                                                 // 18
      return [ "\n				", Blaze._TemplateWith(function() {                                           // 19
        return {                                                                                    // 20
          template: Spacebars.call(view.lookup("template")),                                        // 21
          data: Spacebars.call(view.lookup("data"))                                                 // 22
        };                                                                                          // 23
      }, function() {                                                                               // 24
        return Spacebars.include(function() {                                                       // 25
          return Spacebars.call(Template.__dynamic);                                                // 26
        });                                                                                         // 27
      }), "\n			" ];                                                                                // 28
    }), "\n			", HTML.BR(), "\n			", HTML.A({                                                       // 29
      "class": "file-upload-clear",                                                                 // 30
      "file-input": function() {                                                                    // 31
        return Spacebars.mustache(view.lookup("name"));                                             // 32
      }                                                                                             // 33
    }, HTML.I({                                                                                     // 34
      "class": "fa fa-times"                                                                        // 35
    }), " Remove"), "\n			" ];                                                                      // 36
  }, function() {                                                                                   // 37
    return [ "\n			", HTML.LABEL({                                                                  // 38
      "for": function() {                                                                           // 39
        return [ "file-", Spacebars.mustache(view.lookup("name")) ];                                // 40
      },                                                                                            // 41
      "class": "btn btn-default"                                                                    // 42
    }, "\n				Choose file\n				", HTML.INPUT({                                                      // 43
      "class": "hidden",                                                                            // 44
      id: function() {                                                                              // 45
        return [ "file-", Spacebars.mustache(view.lookup("name")) ];                                // 46
      },                                                                                            // 47
      "file-input": function() {                                                                    // 48
        return Spacebars.mustache(view.lookup("name"));                                             // 49
      },                                                                                            // 50
      collection: function() {                                                                      // 51
        return Spacebars.mustache(view.lookup("collection"));                                       // 52
      },                                                                                            // 53
      type: "file"                                                                                  // 54
    }), "\n			"), "\n			" ];                                                                        // 55
  }), "\n			", HTML.DIV({                                                                           // 56
    "class": ""                                                                                     // 57
  }, Blaze._TemplateWith(function() {                                                               // 58
    return {                                                                                        // 59
      name: Spacebars.call(view.lookup("name"))                                                     // 60
    };                                                                                              // 61
  }, function() {                                                                                   // 62
    return Spacebars.include(view.lookupTemplate("afQuickField"));                                  // 63
  })), "\n		") ];                                                                                   // 64
}));                                                                                                // 65
                                                                                                    // 66
Template.__checkName("fileThumbIcon");                                                              // 67
Template["fileThumbIcon"] = new Template("Template.fileThumbIcon", (function() {                    // 68
  var view = this;                                                                                  // 69
  return HTML.A({                                                                                   // 70
    "class": "btn btn-default",                                                                     // 71
    target: "_blank"                                                                                // 72
  }, "\n		", HTML.I({                                                                               // 73
    "class": function() {                                                                           // 74
      return [ "fa fa-", Spacebars.mustache(view.lookup("icon")) ];                                 // 75
    }                                                                                               // 76
  }), " ", Blaze.View(function() {                                                                  // 77
    return Spacebars.mustache(view.lookup("src"));                                                  // 78
  }), "\n	");                                                                                       // 79
}));                                                                                                // 80
                                                                                                    // 81
Template.__checkName("fileThumbImg");                                                               // 82
Template["fileThumbImg"] = new Template("Template.fileThumbImg", (function() {                      // 83
  var view = this;                                                                                  // 84
  return HTML.IMG({                                                                                 // 85
    src: function() {                                                                               // 86
      return Spacebars.mustache(view.lookup("src"));                                                // 87
    },                                                                                              // 88
    alt: "",                                                                                        // 89
    "class": "img-fileUpload-thumbnail img-thumbnail img-rounded"                                   // 90
  });                                                                                               // 91
}));                                                                                                // 92
                                                                                                    // 93
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/yogiben:autoform-file/lib/client/autoform-file.coffee.js                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var getIcon, getTemplate, refreshFileInput;

refreshFileInput = function(name) {
  var callback;
  callback = function() {
    var value;
    value = $('input[name="' + name + '"]').val();
    return Session.set('fileUpload[' + name + ']', value);
  };
  return setTimeout(callback, 10);
};

getIcon = function(file) {
  var icon;
  file = file.toLowerCase();
  icon = 'file-o';
  if (file.indexOf('youtube.com') > -1) {
    icon = 'youtube';
  } else if (file.indexOf('vimeo.com') > -1) {
    icon = 'vimeo-square';
  } else if (file.indexOf('.pdf') > -1) {
    icon = 'file-pdf-o';
  } else if (file.indexOf('.doc') > -1 || file.indexOf('.docx') > -1) {
    icon = 'file-word-o';
  } else if (file.indexOf('.ppt') > -1) {
    icon = 'file-powerpoint-o';
  } else if (file.indexOf('.avi') > -1 || file.indexOf('.mov') > -1 || file.indexOf('.mp4') > -1) {
    icon = 'file-movie-o';
  } else if (file.indexOf('http://') > -1 || file.indexOf('https://') > -1) {
    icon = 'link';
  }
  return icon;
};

getTemplate = function(file) {
  var template;
  template = 'fileThumbIcon';
  if (file.indexOf('.jpg') > -1 || file.indexOf('.png') > -1 || file.indexOf('.gif') > -1) {
    template = 'fileThumbImg';
  }
  return template;
};

Template.afFileUpload.rendered = function() {
  var data, doc;
  doc = Template.parentData(1)._af.doc;
  return data = Template.currentData();
};

Template.afFileUpload.destroyed = function() {
  var name;
  name = this.data.name;
  return Session.set('fileUpload[' + name + ']', null);
};

Template.afFileUpload.events({
  "change .file-upload": function(e, t) {
    var collection, files;
    files = e.target.files;
    collection = $(e.target).attr('collection');
    return window[collection].insert(files[0], function(err, fileObj) {
      var name;
      name = $(e.target).attr('file-input');
      $('input[name="' + name + '"]').val(fileObj._id);
      Session.set('fileUploadSelected[' + name + ']', files[0].name);
      return refreshFileInput(name);
    });
  },
  'click .file-upload-clear': function(e, t) {
    var name;
    name = $(e.currentTarget).attr('file-input');
    $('input[name="' + name + '"]').val('');
    return Session.set('fileUpload[' + name + ']', 'delete-file');
  }
});

Template.afFileUpload.helpers({
  fileUpload: function(name, collection) {
    var doc, file, filename, obj, src, _ref;
    doc = Template.parentData(1)._af.doc;
    if (Session.equals('fileUpload[' + name + ']', 'delete-file')) {
      return null;
    } else if (Session.get('fileUpload[' + name + ']')) {
      file = Session.get('fileUpload[' + name + ']');
    } else {
      if (name.indexOf('.') > -1) {
        name = name.split('.');
        file = (_ref = doc[name[0]]) != null ? _ref[name[1]] : void 0;
      } else {
        file = doc[name];
      }
    }
    if (file !== '' && file) {
      if (file.length === 17) {
        doc = window[collection].findOne({
          _id: file
        });
        filename = window[collection].findOne({
          _id: file
        }).name();
        src = window[collection].findOne({
          _id: file
        }).url();
      } else {
        filename = file;
        src = filename;
      }
      obj = {
        template: getTemplate(filename),
        data: {
          src: src,
          icon: getIcon(filename)
        }
      };
      return obj;
    }
  },
  fileUploadSelected: function(name) {
    return Session.get('fileUploadSelected[' + name + ']');
  },
  isUploaded: function(name, collection) {
    var doc, file, isUploaded;
    file = Session.get('fileUpload[' + name + ']');
    isUploaded = false;
    if (file && file.length === 17) {
      doc = window[collection].findOne({
        _id: file
      });
      isUploaded = doc.isUploaded();
    } else {
      isUploaded = true;
    }
    return isUploaded;
  },
  getFileByName: function(name, collection) {
    var doc, file;
    file = Session.get('fileUpload[' + name + ']');
    if (file && file.length === 17) {
      doc = window[collection].findOne({
        _id: file
      });
      console.log(doc);
      return doc;
    } else {
      return null;
    }
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['yogiben:autoform-file'] = {};

})();
