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
var Spacebars = Package.spacebars.Spacebars;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var EJSON = Package.ejson.EJSON;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var EditableJSON, EditableJSONInternal;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/babrahams:editable-json/editable-json-common.js                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.methods({                                                                                                    // 1
                                                                                                                    // 2
  update: function (collectionName, _id, action) {                                                                  // 3
                                                                                                                    // 4
    var Collection = Mongo.Collection.get(collectionName),                                                          // 5
        updated = 0;                                                                                                // 6
                                                                                                                    // 7
    try {                                                                                                           // 8
                                                                                                                    // 9
      if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(Collection.simpleSchema) && Collection._c2) {
                                                                                                                    // 11
        updated = Collection.update(_id, action, {                                                                  // 12
          filter: false,                                                                                            // 13
          autoConvert: false,                                                                                       // 14
          removeEmptyStrings: false,                                                                                // 15
          validate: false                                                                                           // 16
        });                                                                                                         // 17
                                                                                                                    // 18
      }                                                                                                             // 19
                                                                                                                    // 20
      else {                                                                                                        // 21
                                                                                                                    // 22
        updated = Collection.update(_id, action);                                                                   // 23
                                                                                                                    // 24
      }                                                                                                             // 25
                                                                                                                    // 26
    }                                                                                                               // 27
                                                                                                                    // 28
    catch (err) {                                                                                                   // 29
      throw new Meteor.Error(err);                                                                                  // 30
    }                                                                                                               // 31
                                                                                                                    // 32
    return updated;                                                                                                 // 33
                                                                                                                    // 34
  }                                                                                                                 // 35
                                                                                                                    // 36
});                                                                                                                 // 37
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/babrahams:editable-json/template.editable-json.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("editableJSON");                                                                               // 2
Template["editableJSON"] = new Template("Template.editableJSON", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return Spacebars.With(function() {                                                                                // 5
    return Spacebars.call(view.lookup("json"));                                                                     // 6
  }, function() {                                                                                                   // 7
    return HTML.DIV({                                                                                               // 8
      "class": "editable-JSON"                                                                                      // 9
    }, Spacebars.include(view.lookupTemplate("editable_JSON_object")));                                             // 10
  });                                                                                                               // 11
}));                                                                                                                // 12
                                                                                                                    // 13
Template.__checkName("editable_JSON");                                                                              // 14
Template["editable_JSON"] = new Template("Template.editable_JSON", (function() {                                    // 15
  var view = this;                                                                                                  // 16
  return Blaze.Each(function() {                                                                                    // 17
    return Spacebars.call(view.lookup("fields"));                                                                   // 18
  }, function() {                                                                                                   // 19
    return [ Spacebars.With(function() {                                                                            // 20
      return Spacebars.call(view.lookup("field"));                                                                  // 21
    }, function() {                                                                                                 // 22
      return [ HTML.SPAN({                                                                                          // 23
        "class": function() {                                                                                       // 24
          return [ "editable-JSON-field ", Spacebars.mustache(view.lookup("_idClass")) ];                           // 25
        }                                                                                                           // 26
      }, '"', Spacebars.With(function() {                                                                           // 27
        return Spacebars.call(view.lookup("editingField"));                                                         // 28
      }, function() {                                                                                               // 29
        return HTML.INPUT({                                                                                         // 30
          type: "text",                                                                                             // 31
          value: function() {                                                                                       // 32
            return Spacebars.mustache(view.lookup("."));                                                            // 33
          }                                                                                                         // 34
        });                                                                                                         // 35
      }, function() {                                                                                               // 36
        return HTML.SPAN({                                                                                          // 37
          "class": "editable-JSON-field-text"                                                                       // 38
        }, Blaze.View("lookup:.", function() {                                                                      // 39
          return Spacebars.mustache(view.lookup("."));                                                              // 40
        }));                                                                                                        // 41
      }), '":'), HTML.CharRef({                                                                                     // 42
        html: "&nbsp;",                                                                                             // 43
        str: " "                                                                                                    // 44
      }) ];                                                                                                         // 45
    }), Spacebars.With(function() {                                                                                 // 46
      return Spacebars.call(view.lookup("value"));                                                                  // 47
    }, function() {                                                                                                 // 48
      return Blaze.If(function() {                                                                                  // 49
        return Spacebars.call(view.lookup("isArray"));                                                              // 50
      }, function() {                                                                                               // 51
        return Blaze._TemplateWith(function() {                                                                     // 52
          return Spacebars.call(view.lookup("val"));                                                                // 53
        }, function() {                                                                                             // 54
          return Spacebars.include(view.lookupTemplate("editable_JSON_array"));                                     // 55
        });                                                                                                         // 56
      }, function() {                                                                                               // 57
        return Blaze.If(function() {                                                                                // 58
          return Spacebars.call(view.lookup("isDate"));                                                             // 59
        }, function() {                                                                                             // 60
          return Blaze._TemplateWith(function() {                                                                   // 61
            return Spacebars.call(view.lookup("val"));                                                              // 62
          }, function() {                                                                                           // 63
            return Spacebars.include(view.lookupTemplate("editable_JSON_date"));                                    // 64
          });                                                                                                       // 65
        }, function() {                                                                                             // 66
          return Blaze.If(function() {                                                                              // 67
            return Spacebars.call(view.lookup("isString"));                                                         // 68
          }, function() {                                                                                           // 69
            return Blaze._TemplateWith(function() {                                                                 // 70
              return Spacebars.call(view.lookup("val"));                                                            // 71
            }, function() {                                                                                         // 72
              return Spacebars.include(view.lookupTemplate("editable_JSON_string"));                                // 73
            });                                                                                                     // 74
          }, function() {                                                                                           // 75
            return Blaze.If(function() {                                                                            // 76
              return Spacebars.call(view.lookup("isBoolean"));                                                      // 77
            }, function() {                                                                                         // 78
              return Blaze._TemplateWith(function() {                                                               // 79
                return Spacebars.call(view.lookup("val"));                                                          // 80
              }, function() {                                                                                       // 81
                return Spacebars.include(view.lookupTemplate("editable_JSON_boolean"));                             // 82
              });                                                                                                   // 83
            }, function() {                                                                                         // 84
              return Blaze.If(function() {                                                                          // 85
                return Spacebars.call(view.lookup("isObject"));                                                     // 86
              }, function() {                                                                                       // 87
                return Blaze._TemplateWith(function() {                                                             // 88
                  return Spacebars.call(view.lookup("val"));                                                        // 89
                }, function() {                                                                                     // 90
                  return Spacebars.include(view.lookupTemplate("editable_JSON_object"));                            // 91
                });                                                                                                 // 92
              }, function() {                                                                                       // 93
                return Blaze.If(function() {                                                                        // 94
                  return Spacebars.call(view.lookup("isNumber"));                                                   // 95
                }, function() {                                                                                     // 96
                  return Blaze._TemplateWith(function() {                                                           // 97
                    return Spacebars.call(view.lookup("val"));                                                      // 98
                  }, function() {                                                                                   // 99
                    return Spacebars.include(view.lookupTemplate("editable_JSON_number"));                          // 100
                  });                                                                                               // 101
                }, function() {                                                                                     // 102
                  return Blaze.If(function() {                                                                      // 103
                    return Spacebars.call(view.lookup("isNull"));                                                   // 104
                  }, function() {                                                                                   // 105
                    return Blaze._TemplateWith(function() {                                                         // 106
                      return Spacebars.call(view.lookup("val"));                                                    // 107
                    }, function() {                                                                                 // 108
                      return Spacebars.include(view.lookupTemplate("editable_JSON_null"));                          // 109
                    });                                                                                             // 110
                  });                                                                                               // 111
                });                                                                                                 // 112
              });                                                                                                   // 113
            });                                                                                                     // 114
          });                                                                                                       // 115
        });                                                                                                         // 116
      });                                                                                                           // 117
    }), Blaze.Unless(function() {                                                                                   // 118
      return Spacebars.dataMustache(view.lookup("last"), view.lookup(".."));                                        // 119
    }, function() {                                                                                                 // 120
      return [ ",", HTML.BR() ];                                                                                    // 121
    }) ];                                                                                                           // 122
  });                                                                                                               // 123
}));                                                                                                                // 124
                                                                                                                    // 125
Template.__checkName("editable_JSON_array");                                                                        // 126
Template["editable_JSON_array"] = new Template("Template.editable_JSON_array", (function() {                        // 127
  var view = this;                                                                                                  // 128
  return [ "[", Spacebars.With(function() {                                                                         // 129
    return Spacebars.call(view.lookup("elements"));                                                                 // 130
  }, function() {                                                                                                   // 131
    return [ HTML.DIV({                                                                                             // 132
      "class": "editable-JSON-indent"                                                                               // 133
    }, Blaze.Each(function() {                                                                                      // 134
      return Spacebars.call(view.lookup("."));                                                                      // 135
    }, function() {                                                                                                 // 136
      return [ Blaze._TemplateWith(function() {                                                                     // 137
        return Spacebars.call(view.lookup("element"));                                                              // 138
      }, function() {                                                                                               // 139
        return Spacebars.include(view.lookupTemplate("editable_JSON"));                                             // 140
      }), Blaze.Unless(function() {                                                                                 // 141
        return Spacebars.dataMustache(view.lookup("last"), view.lookup(".."));                                      // 142
      }, function() {                                                                                               // 143
        return [ ",", HTML.BR() ];                                                                                  // 144
      }) ];                                                                                                         // 145
    })), HTML.SPAN({                                                                                                // 146
      "class": "editable-JSON-closer"                                                                               // 147
    }, "]") ];                                                                                                      // 148
  }, function() {                                                                                                   // 149
    return "]";                                                                                                     // 150
  }) ];                                                                                                             // 151
}));                                                                                                                // 152
                                                                                                                    // 153
Template.__checkName("editable_JSON_object");                                                                       // 154
Template["editable_JSON_object"] = new Template("Template.editable_JSON_object", (function() {                      // 155
  var view = this;                                                                                                  // 156
  return Blaze.If(function() {                                                                                      // 157
    return Spacebars.call(view.lookup("notEmpty"));                                                                 // 158
  }, function() {                                                                                                   // 159
    return [ "{", HTML.DIV({                                                                                        // 160
      "class": "editable-JSON-indent"                                                                               // 161
    }, Blaze._TemplateWith(function() {                                                                             // 162
      return Spacebars.call(view.lookup("."));                                                                      // 163
    }, function() {                                                                                                 // 164
      return Spacebars.include(view.lookupTemplate("editable_JSON"));                                               // 165
    })), HTML.SPAN({                                                                                                // 166
      "class": "editable-JSON-closer"                                                                               // 167
    }, "}") ];                                                                                                      // 168
  }, function() {                                                                                                   // 169
    return "{}";                                                                                                    // 170
  });                                                                                                               // 171
}));                                                                                                                // 172
                                                                                                                    // 173
Template.__checkName("editable_JSON_string");                                                                       // 174
Template["editable_JSON_string"] = new Template("Template.editable_JSON_string", (function() {                      // 175
  var view = this;                                                                                                  // 176
  return HTML.SPAN({                                                                                                // 177
    "class": function() {                                                                                           // 178
      return [ "editable-JSON-string ", Blaze.If(function() {                                                       // 179
        return Spacebars.call(view.lookup("_idField"));                                                             // 180
      }, function() {                                                                                               // 181
        return "editable-JSON-_id-value";                                                                           // 182
      }) ];                                                                                                         // 183
    }                                                                                                               // 184
  }, '"', Blaze.If(function() {                                                                                     // 185
    return Spacebars.call(view.lookup("editable_JSON_collection"));                                                 // 186
  }, function() {                                                                                                   // 187
    return Spacebars.With(function() {                                                                              // 188
      return Spacebars.call(view.lookup("editable_JSON_getField"));                                                 // 189
    }, function() {                                                                                                 // 190
      return Blaze._TemplateWith(function() {                                                                       // 191
        return {                                                                                                    // 192
          value: Spacebars.call(view.lookup("..")),                                                                 // 193
          field: Spacebars.call(view.lookup(".")),                                                                  // 194
          collection: Spacebars.call(view.lookup("editable_JSON_collection"))                                       // 195
        };                                                                                                          // 196
      }, function() {                                                                                               // 197
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                         // 198
      });                                                                                                           // 199
    }, function() {                                                                                                 // 200
      return Blaze.View("lookup:.", function() {                                                                    // 201
        return Spacebars.mustache(view.lookup("."));                                                                // 202
      });                                                                                                           // 203
    });                                                                                                             // 204
  }, function() {                                                                                                   // 205
    return Blaze.If(function() {                                                                                    // 206
      return Spacebars.call(view.lookup("_idField"));                                                               // 207
    }, function() {                                                                                                 // 208
      return Blaze.View("lookup:.", function() {                                                                    // 209
        return Spacebars.mustache(view.lookup("."));                                                                // 210
      });                                                                                                           // 211
    }, function() {                                                                                                 // 212
      return Blaze._TemplateWith(function() {                                                                       // 213
        return {                                                                                                    // 214
          value: Spacebars.call(view.lookup(".")),                                                                  // 215
          field: Spacebars.call(view.lookup("editable_JSON_getField"))                                              // 216
        };                                                                                                          // 217
      }, function() {                                                                                               // 218
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                         // 219
      });                                                                                                           // 220
    });                                                                                                             // 221
  }), '"');                                                                                                         // 222
}));                                                                                                                // 223
                                                                                                                    // 224
Template.__checkName("editable_JSON_boolean");                                                                      // 225
Template["editable_JSON_boolean"] = new Template("Template.editable_JSON_boolean", (function() {                    // 226
  var view = this;                                                                                                  // 227
  return HTML.SPAN({                                                                                                // 228
    "class": "editable-JSON-boolean"                                                                                // 229
  }, Blaze.View("lookup:boolean", function() {                                                                      // 230
    return Spacebars.mustache(view.lookup("boolean"));                                                              // 231
  }));                                                                                                              // 232
}));                                                                                                                // 233
                                                                                                                    // 234
Template.__checkName("editable_JSON_date");                                                                         // 235
Template["editable_JSON_date"] = new Template("Template.editable_JSON_date", (function() {                          // 236
  var view = this;                                                                                                  // 237
  return HTML.SPAN({                                                                                                // 238
    "class": "editable-JSON-date"                                                                                   // 239
  }, HTML.SPAN({                                                                                                    // 240
    "class": "editable-JSON-string"                                                                                 // 241
  }, '"', HTML.INPUT({                                                                                              // 242
    type: "text",                                                                                                   // 243
    value: function() {                                                                                             // 244
      return Spacebars.mustache(view.lookup("date"));                                                               // 245
    }                                                                                                               // 246
  }), '"'));                                                                                                        // 247
}));                                                                                                                // 248
                                                                                                                    // 249
Template.__checkName("editable_JSON_number");                                                                       // 250
Template["editable_JSON_number"] = new Template("Template.editable_JSON_number", (function() {                      // 251
  var view = this;                                                                                                  // 252
  return HTML.SPAN({                                                                                                // 253
    "class": "editable-JSON-number editable-text-trigger"                                                           // 254
  }, Blaze.If(function() {                                                                                          // 255
    return Spacebars.call(view.lookup("editable_JSON_collection"));                                                 // 256
  }, function() {                                                                                                   // 257
    return Spacebars.With(function() {                                                                              // 258
      return Spacebars.call(view.lookup("editable_JSON_getField"));                                                 // 259
    }, function() {                                                                                                 // 260
      return Blaze._TemplateWith(function() {                                                                       // 261
        return {                                                                                                    // 262
          value: Spacebars.call(view.lookup("..")),                                                                 // 263
          field: Spacebars.call(view.lookup(".")),                                                                  // 264
          collection: Spacebars.call(view.lookup("editable_JSON_collection")),                                      // 265
          number: Spacebars.call(true)                                                                              // 266
        };                                                                                                          // 267
      }, function() {                                                                                               // 268
        return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                         // 269
      });                                                                                                           // 270
    }, function() {                                                                                                 // 271
      return Blaze.View("lookup:.", function() {                                                                    // 272
        return Spacebars.mustache(view.lookup("."));                                                                // 273
      });                                                                                                           // 274
    });                                                                                                             // 275
  }, function() {                                                                                                   // 276
    return Blaze._TemplateWith(function() {                                                                         // 277
      return {                                                                                                      // 278
        value: Spacebars.call(view.lookup(".")),                                                                    // 279
        field: Spacebars.call(view.lookup("editable_JSON_getField")),                                               // 280
        number: Spacebars.call(true)                                                                                // 281
      };                                                                                                            // 282
    }, function() {                                                                                                 // 283
      return Spacebars.include(view.lookupTemplate("editableJSONInput"));                                           // 284
    });                                                                                                             // 285
  }));                                                                                                              // 286
}));                                                                                                                // 287
                                                                                                                    // 288
Template.__checkName("editable_JSON_null");                                                                         // 289
Template["editable_JSON_null"] = new Template("Template.editable_JSON_null", (function() {                          // 290
  var view = this;                                                                                                  // 291
  return HTML.Raw('<span class="editable-JSON-null">null</span>');                                                  // 292
}));                                                                                                                // 293
                                                                                                                    // 294
Template.__checkName("editableJSONInput");                                                                          // 295
Template["editableJSONInput"] = new Template("Template.editableJSONInput", (function() {                            // 296
  var view = this;                                                                                                  // 297
  return Blaze.If(function() {                                                                                      // 298
    return Spacebars.call(view.lookup("editing"));                                                                  // 299
  }, function() {                                                                                                   // 300
    return HTML.INPUT({                                                                                             // 301
      type: "text",                                                                                                 // 302
      "class": "editable-JSON-input",                                                                               // 303
      value: function() {                                                                                           // 304
        return Spacebars.mustache(view.lookup("value"));                                                            // 305
      }                                                                                                             // 306
    });                                                                                                             // 307
  }, function() {                                                                                                   // 308
    return HTML.SPAN({                                                                                              // 309
      "class": "editable-JSON-edit"                                                                                 // 310
    }, Blaze.View("lookup:value", function() {                                                                      // 311
      return Spacebars.mustache(view.lookup("value"));                                                              // 312
    }));                                                                                                            // 313
  });                                                                                                               // 314
}));                                                                                                                // 315
                                                                                                                    // 316
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/babrahams:editable-json/editable-json-client.js                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
EditableJSON = {};                                                                                                  // 1
                                                                                                                    // 2
EditableJSON.afterUpdate = function (store, action, JSONbefore, documentsUpdated) {                                 // 3
  // Overwrite this function to create a callback after every edit	                                                 // 4
  // `this` is the document or the json after the update                                                            // 5
};                                                                                                                  // 6
                                                                                                                    // 7
EditableJSONInternal = {};                                                                                          // 8
                                                                                                                    // 9
EditableJSONInternal.timer = null;                                                                                  // 10
                                                                                                                    // 11
EditableJSONInternal.resize = function (elem) {                                                                     // 12
  var el = $(elem);                                                                                                 // 13
  EditableJSONInternal.editing_key_press.fakeEl.text(el.val());                                                     // 14
  var width = EditableJSONInternal.editing_key_press.fakeEl.width() + 8;                                            // 15
  el.width(width);                                                                                                  // 16
  el.css('min-width',width);                                                                                        // 17
}                                                                                                                   // 18
                                                                                                                    // 19
EditableJSONInternal.editing_key_press = function (elem,noDelay) {                                                  // 20
  if (EditableJSONInternal.editing_key_press.fakeEl === undefined) {                                                // 21
    EditableJSONInternal.editing_key_press.fakeEl = $('<span class="editable-JSON-input">').hide().appendTo(document.body);
  }                                                                                                                 // 23
  if (noDelay) {                                                                                                    // 24
    var input = elem.find('input');                                                                                 // 25
    EditableJSONInternal.resize(input);                                                                             // 26
    input.select();                                                                                                 // 27
  }                                                                                                                 // 28
  else {                                                                                                            // 29
    Meteor.defer(function () {                                                                                      // 30
      EditableJSONInternal.resize(elem);                                                                            // 31
    });                                                                                                             // 32
  }                                                                                                                 // 33
}                                                                                                                   // 34
                                                                                                                    // 35
EditableJSONInternal.getContext = function () {                                                                     // 36
  var jsonTemplateData = Template && Template.parentData(function (data) { return _.isObject(data) && data.document; });
  var data = jsonTemplateData && jsonTemplateData.document;                                                         // 38
  return data || {};                                                                                                // 39
}                                                                                                                   // 40
                                                                                                                    // 41
EditableJSONInternal.getField = function () {                                                                       // 42
  var field = Blaze._parentData(1).fld;                                                                             // 43
  return (!(EditableJSON.disableIdField && field === '_id')) && field;                                              // 44
}                                                                                                                   // 45
                                                                                                                    // 46
EditableJSONInternal.update = function (tmpl, modifier, action) {                                                   // 47
  var collectionName = tmpl.get('collection');                                                                      // 48
  if (!action) {                                                                                                    // 49
    var action = {};                                                                                                // 50
    var mod = {};                                                                                                   // 51
    mod[modifier.field] = modifier.value;                                                                           // 52
    action[modifier.action] = mod;                                                                                  // 53
  }                                                                                                                 // 54
  if (collectionName) {                                                                                             // 55
    // Validate -- make sure the change isn't on the id field                                                       // 56
    // And make sure we're not modifying the same field twice                                                       // 57
    var okay = true;                                                                                                // 58
    var conflict = false;                                                                                           // 59
    var modFields = [];                                                                                             // 60
    _.each(action, function (modifier, action) {                                                                    // 61
      if (_.has(modifier,'_id')) {                                                                                  // 62
        okay = false;                                                                                               // 63
      }                                                                                                             // 64
      var field = _.keys(modifier)[0];                                                                              // 65
      if (!_.contains(modFields, field)) {                                                                          // 66
        // The following prevents all errors, but is too restrictive                                                // 67
        // && !_.find(modFields,function (f){ return field.indexOf(f) !== -1; })                                    // 68
        modFields.push(field);                                                                                      // 69
      }                                                                                                             // 70
      else {                                                                                                        // 71
        conflict = true;                                                                                            // 72
      }                                                                                                             // 73
    });                                                                                                             // 74
    if (!okay) {                                                                                                    // 75
      if (EditableJSON.disableIdField) {                                                                            // 76
        console.log("You can't change the _id field.");                                                             // 77
      }                                                                                                             // 78
      return;                                                                                                       // 79
    }                                                                                                               // 80
    if (conflict) {                                                                                                 // 81
      console.log("You can't use conflicting modifiers.");                                                          // 82
      return;                                                                                                       // 83
    }                                                                                                               // 84
    var doc = EditableJSONInternal.getContext();                                                                    // 85
    // Mongo.Collection.get(collectionName).update({_id:doc._id},action);                                           // 86
    Meteor.call('update', collectionName, doc._id, action, function (err, res) {                                    // 87
      if (err) {                                                                                                    // 88
        console.log("You can't use conflicting modifiers."); // We're making a big assumption here in giving this message -- TODO -- actually check the message
        console.log(err);                                                                                           // 90
      }                                                                                                             // 91
	  else {                                                                                                           // 92
		if (res && _.isFunction(EditableJSON.afterUpdate)) {                                                              // 93
		  var mutatedDoc = Mongo.Collection.get(collectionName).findOne({_id: doc._id});                                  // 94
		  EditableJSON.afterUpdate.call(mutatedDoc, collectionName, action, doc, res);                                    // 95
		}                                                                                                                 // 96
	  }                                                                                                                // 97
    });                                                                                                             // 98
  }                                                                                                                 // 99
  else {                                                                                                            // 100
	var JSONbefore = Session.getJSON('editableJSON' + EditableJSONInternal.store(tmpl.get('store')));                  // 101
    _.each(action, function (modifier, action) {                                                                    // 102
      var fieldName = _.keys(modifier)[0];                                                                          // 103
      var value = modifier[fieldName];                                                                              // 104
      switch (action) {                                                                                             // 105
        case '$set' :                                                                                               // 106
          Session.setJSON('editableJSON' + EditableJSONInternal.store(tmpl.get('store')) + '.' + fieldName, value); // 107
          break;                                                                                                    // 108
        case '$unset' :                                                                                             // 109
          Session.setJSON('editableJSON' + EditableJSONInternal.store(tmpl.get('store')) + '.' + fieldName, undefined);
          break;                                                                                                    // 111
      }                                                                                                             // 112
    });                                                                                                             // 113
	var JSONafter = Session.getJSON('editableJSON' + EditableJSONInternal.store(tmpl.get('store')));                   // 114
	EditableJSON.afterUpdate.call(JSONafter, tmpl.get('store'), action, JSONbefore, 1);                                // 115
  }                                                                                                                 // 116
}                                                                                                                   // 117
                                                                                                                    // 118
EditableJSONInternal.saveToSession = function (evt, tmpl, self, noDelay) {                                          // 119
  var elem = tmpl.$(evt.target);                                                                                    // 120
  var val = elem.val();                                                                                             // 121
  if (self.number && !/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(val)) {                                         // 122
    // If it's not a number, just revert the value and return                                                       // 123
    elem.val(self.value);                                                                                           // 124
    return;                                                                                                         // 125
  }                                                                                                                 // 126
  var field = 'editableJSON' + EditableJSONInternal.store(tmpl.get('store')) + '.' + self.field;                    // 127
  var value = (self.number) ? parseFloat(val) : val;                                                                // 128
  if (noDelay) {                                                                                                    // 129
    Session.setJSON(field, value);                                                                                  // 130
  }                                                                                                                 // 131
  else {                                                                                                            // 132
    if (!self.collection) {                                                                                         // 133
      if (EditableJSONInternal.timer) {                                                                             // 134
        Meteor.clearTimeout(EditableJSONInternal.timer);                                                            // 135
      }                                                                                                             // 136
      EditableJSONInternal.timer = Meteor.setTimeout(function () {                                                  // 137
        Session.setJSON(field, value);                                                                              // 138
      },300);                                                                                                       // 139
    }                                                                                                               // 140
  }                                                                                                                 // 141
}                                                                                                                   // 142
                                                                                                                    // 143
EditableJSONInternal.store = function (storeName) {                                                                 // 144
  return (storeName) ? '.' + storeName : '';                                                                        // 145
}                                                                                                                   // 146
                                                                                                                    // 147
EditableJSON.retrieve = function (storeName) {                                                                      // 148
  return Session.getJSON('editableJSON' + EditableJSONInternal.store(storeName));                                   // 149
}                                                                                                                   // 150
                                                                                                                    // 151
Template.editableJSON.created = function () {                                                                       // 152
  var self = this;                                                                                                  // 153
  self.editingField = new ReactiveVar();                                                                            // 154
  if (self.data && self.data.collection) {                                                                          // 155
    self.autorun(function () {                                                                                      // 156
      var Collection = Mongo.Collection.get(self.data.collection);                                                  // 157
      var doc = Collection && Collection.find().count() && self.data.document; // Collection.find().count() is the reactivity trigger
      self.collection = self.data.collection;                                                                       // 159
      self.document = doc || {};                                                                                    // 160
    });                                                                                                             // 161
    return;                                                                                                         // 162
  }                                                                                                                 // 163
  else if (self.data && self.data.store) {                                                                          // 164
    self.store = self.data.store;                                                                                   // 165
  }                                                                                                                 // 166
  var initialValue = (!_.isUndefined(self.data.json)) ? self.data.json : (((self.store) ? self.parent().data : self.data) || {});
  Session.setJSON('editableJSON' + EditableJSONInternal.store(self.store), initialValue);                           // 168
  // To keep the state of which field name is being edited                                                          // 169
}                                                                                                                   // 170
                                                                                                                    // 171
Template.editableJSON.helpers({                                                                                     // 172
  json: function () {                                                                                               // 173
    if (this.collection && this.document) {                                                                         // 174
      return this.document;                                                                                         // 175
    }                                                                                                               // 176
    if (this.json) {                                                                                                // 177
      var currentData = Session.getJSON('editableJSON' + EditableJSONInternal.store(this.store));                   // 178
      if (_.isUndefined(currentData) || _.isEmpty(currentData)) {                                                   // 179
        Session.setJSON('editableJSON' + EditableJSONInternal.store(this.store), this.json);                        // 180
      }                                                                                                             // 181
    }                                                                                                               // 182
    return Session.getJSON('editableJSON' + EditableJSONInternal.store(this.store));                                // 183
  }                                                                                                                 // 184
});                                                                                                                 // 185
                                                                                                                    // 186
Template.editable_JSON.helpers({                                                                                    // 187
  fields: function () {                                                                                             // 188
    var self = this;                                                                                                // 189
    var index = -1;                                                                                                 // 190
    if (_.has(self,'____val')) {                                                                                    // 191
      index = self.arrIndex - 1;                                                                                    // 192
      delete self.arrIndex;                                                                                         // 193
    }                                                                                                               // 194
    var fields = _.map(self, function (value, field) {                                                              // 195
      index++;                                                                                                      // 196
      var parent = null;                                                                                            // 197
      var number = 2;                                                                                               // 198
      while (Blaze._parentData(number) && Blaze._parentData(number)._id === undefined && Blaze._parentData(number).fld === undefined) {
        number++;                                                                                                   // 200
      }                                                                                                             // 201
      parent = Blaze._parentData(number);                                                                           // 202
      var currentField = (field !== '____val') ? field : index;                                                     // 203
      var fld = (parent && parent.fld) ? parent.fld + ((currentField !== undefined) ? '.' + currentField : '') : currentField;
      return {                                                                                                      // 205
        field:(field !== '____val') ? currentField : null,                                                          // 206
        value:{val: value, fld: fld, field: currentField},                                                          // 207
        index:index                                                                                                 // 208
      };                                                                                                            // 209
    });                                                                                                             // 210
    return fields;                                                                                                  // 211
  },                                                                                                                // 212
  value: function () {                                                                                              // 213
    return (_.isObject(this.value) && _.has(this.value, '____val')) ? this.value.____val : this.value;              // 214
  },                                                                                                                // 215
  isArray: function () {                                                                                            // 216
    return _.isArray(this.val);                                                                                     // 217
  },                                                                                                                // 218
  isObject: function () {                                                                                           // 219
    return _.isObject(this.val);                                                                                    // 220
  },                                                                                                                // 221
  isString: function () {                                                                                           // 222
    return _.isString(this.val);                                                                                    // 223
  },                                                                                                                // 224
  isBoolean: function () {                                                                                          // 225
    return _.isBoolean(this.val);                                                                                   // 226
  },                                                                                                                // 227
  isDate: function () {                                                                                             // 228
    return _.isDate(this.val);                                                                                      // 229
  },                                                                                                                // 230
  isNumber: function () {                                                                                           // 231
    return _.isNumber(this.val);                                                                                    // 232
  },                                                                                                                // 233
  isNull : function () {                                                                                            // 234
    return _.isNull(this.val);                                                                                      // 235
  },                                                                                                                // 236
  last: function (obj) {                                                                                            // 237
    return (obj.____val !== undefined) || _.size(obj) === (this.index + 1);                                         // 238
  },                                                                                                                // 239
  editingField : function () {                                                                                      // 240
    var fieldName = this.toString()                                                                                 // 241
    var fldData = Template.parentData(function (data) { return data && data.fld; });                                // 242
    var fld = fldData && (fldData.fld + '.' + fieldName) || fieldName;                                              // 243
    var template = Blaze._templateInstance();                                                                       // 244
    var editingField = template.get('editingField');                                                                // 245
    return editingField && (editingField.get() === fld) && fieldName;                                               // 246
  },                                                                                                                // 247
  _idClass: function () {                                                                                           // 248
    return (String(this) === "_id") ? "editable-JSON-_id-field" : "";                                               // 249
  }                                                                                                                 // 250
});                                                                                                                 // 251
                                                                                                                    // 252
Template.editable_JSON.events({                                                                                     // 253
  'click .editable-JSON-field' : function (evt, tmpl) {                                                             // 254
    tmpl.$(evt.target).find('.editable-JSON-field-text').trigger('click');                                          // 255
  },                                                                                                                // 256
  'click .editable-JSON-field-text' : function (evt,tmpl) {                                                         // 257
    evt.stopPropagation();                                                                                          // 258
    var fieldName = this.toString();                                                                                // 259
    if (fieldName === '_id') {                                                                                      // 260
      return;                                                                                                       // 261
    }                                                                                                               // 262
    var elem = $(evt.target).closest('.editable-JSON-field');                                                       // 263
    var fldData = Template.parentData(function (data) { return data && data.fld; });                                // 264
    var field = fldData && (fldData.fld + '.' + fieldName) || fieldName;                                            // 265
    var editingField = tmpl.get('editingField');                                                                    // 266
    if (editingField) {                                                                                             // 267
      editingField.set(field);                                                                                      // 268
      Tracker.flush();                                                                                              // 269
      EditableJSONInternal.editing_key_press(elem,true);                                                            // 270
    }                                                                                                               // 271
  },                                                                                                                // 272
  'keydown .editable-JSON-field input, focusout .editable-JSON-field input' : function (evt, tmpl) {                // 273
    evt.stopPropagation();                                                                                          // 274
    var charCode = evt.which || evt.keyCode;                                                                        // 275
    if (evt.type === 'keydown') {                                                                                   // 276
      if (charCode === 27) {                                                                                        // 277
        var editingField = tmpl.get('editingField');                                                                // 278
        editingField.set(null);                                                                                     // 279
        return;                                                                                                     // 280
      }                                                                                                             // 281
      if (charCode !== 13) {                                                                                        // 282
        EditableJSONInternal.editing_key_press($(evt.target));                                                      // 283
        return;                                                                                                     // 284
      }                                                                                                             // 285
    }                                                                                                               // 286
    var editingField = tmpl.get('editingField');                                                                    // 287
    var currentFieldName = editingField.get();                                                                      // 288
    var parentFieldName = _.initial(currentFieldName.split('.'));                                                   // 289
    var editedFieldName = $(evt.currentTarget).val();                                                               // 290
    var rejoinedParentFieldName = parentFieldName.join('.');                                                        // 291
    var newFieldName = ((rejoinedParentFieldName) ? rejoinedParentFieldName + '.' : '') + editedFieldName;          // 292
    if (newFieldName !== currentFieldName) {                                                                        // 293
      var modifier1 = {};                                                                                           // 294
      modifier1[currentFieldName] = 1;                                                                              // 295
      var action = {                                                                                                // 296
        "$unset" : modifier1                                                                                        // 297
      };                                                                                                            // 298
      if (editedFieldName) {                                                                                        // 299
        var modifier2 = {};                                                                                         // 300
        modifier2[newFieldName] = tmpl.data[this.toString()];                                                       // 301
        action["$set"] = modifier2                                                                                  // 302
      }                                                                                                             // 303
      EditableJSONInternal.update(tmpl, null, action);                                                              // 304
    }                                                                                                               // 305
    editingField.set(null);                                                                                         // 306
  }                                                                                                                 // 307
});                                                                                                                 // 308
                                                                                                                    // 309
Template.editable_JSON_object.helpers({                                                                             // 310
  notEmpty: function () {                                                                                           // 311
    return !_.isEmpty(this);                                                                                        // 312
  }                                                                                                                 // 313
});                                                                                                                 // 314
                                                                                                                    // 315
Template.editable_JSON_array.helpers({                                                                              // 316
  elements: function () {                                                                                           // 317
  var elements = _.map(this, function (value, index) {                                                              // 318
    return {element:{____val: value, arrIndex: index}, index: index};                                               // 319
  });                                                                                                               // 320
    return elements;                                                                                                // 321
  },                                                                                                                // 322
  last: function (arr) {                                                                                            // 323
    return arr.length === (this.index + 1);                                                                         // 324
  }                                                                                                                 // 325
});                                                                                                                 // 326
                                                                                                                    // 327
Template.editable_JSON_string.helpers({                                                                             // 328
  _idField: function () {                                                                                           // 329
    var parentData = Template.parentData(1);                                                                        // 330
    return parentData && parentData.fld && parentData.fld === '_id';                                                // 331
  }                                                                                                                 // 332
});                                                                                                                 // 333
                                                                                                                    // 334
Template.editable_JSON_string.events({                                                                              // 335
  'click .editable-JSON-string' : function (evt, tmpl) {                                                            // 336
    tmpl.$(evt.target).find('.editable-JSON-edit').trigger('click');                                                // 337
  }                                                                                                                 // 338
});                                                                                                                 // 339
                                                                                                                    // 340
Template.editable_JSON_number.events({                                                                              // 341
  'click .editable-JSON-number' : function (evt, tmpl) {                                                            // 342
    tmpl.$(evt.target).find('.editable-JSON-edit').trigger('click');                                                // 343
  }                                                                                                                 // 344
});                                                                                                                 // 345
                                                                                                                    // 346
/*Template.editable_JSON_date.rendered = function () {                                                              // 347
  var self = this;                                                                                                  // 348
  var field = this.$('input')[0];                                                                                   // 349
  var picker = new Pikaday({                                                                                        // 350
    field: field,                                                                                                   // 351
    onSelect: function (date) {                                                                                     // 352
      field.value = picker.toString();                                                                              // 353
    }                                                                                                               // 354
  });                                                                                                               // 355
}*/                                                                                                                 // 356
                                                                                                                    // 357
Template.editable_JSON_date.helpers({                                                                               // 358
  date: function () {                                                                                               // 359
    return this.toISOString();                                                                                      // 360
  }                                                                                                                 // 361
});                                                                                                                 // 362
                                                                                                                    // 363
Template.editable_JSON_date.events({                                                                                // 364
  'change input' : function (evt, tmpl) {                                                                           // 365
     var currentDate = new Date(this);                                                                              // 366
     var newDate = new Date(tmpl.$('input').val());                                                                 // 367
     if (currentDate.getTime() !== newDate.getTime()) {                                                             // 368
       var modifier = {                                                                                             // 369
         field: EditableJSONInternal.getField(),                                                                    // 370
         value: newDate,                                                                                            // 371
         action: "$set"                                                                                             // 372
       }                                                                                                            // 373
       EditableJSONInternal.update(tmpl, modifier);                                                                 // 374
    }                                                                                                               // 375
  }                                                                                                                 // 376
});                                                                                                                 // 377
                                                                                                                    // 378
Template.editable_JSON_boolean.helpers({                                                                            // 379
  boolean: function () {                                                                                            // 380
    return (this.valueOf() == true) ? 'true' : 'false';                                                             // 381
  }                                                                                                                 // 382
});                                                                                                                 // 383
                                                                                                                    // 384
Template.editable_JSON_boolean.events({                                                                             // 385
  'click .editable-JSON-boolean' : function (evt,tmpl) {                                                            // 386
    var modifier = {                                                                                                // 387
      field: EditableJSONInternal.getField(),                                                                       // 388
      value: !this.valueOf(),                                                                                       // 389
      action: "$set"                                                                                                // 390
    };                                                                                                              // 391
    EditableJSONInternal.update(tmpl,modifier);                                                                     // 392
  }                                                                                                                 // 393
});                                                                                                                 // 394
                                                                                                                    // 395
Blaze.registerHelper('editable_JSON_getField', function () {                                                        // 396
  return EditableJSONInternal.getField();                                                                           // 397
});                                                                                                                 // 398
                                                                                                                    // 399
Blaze.registerHelper('editable_JSON_getContext', function () {                                                      // 400
  return EditableJSONInternal.getContext();                                                                         // 401
});                                                                                                                 // 402
                                                                                                                    // 403
Blaze.registerHelper('editable_JSON_collection', function () {                                                      // 404
  var template = Blaze._templateInstance();                                                                         // 405
  var collection = template.get('collection');                                                                      // 406
  return collection;                                                                                                // 407
});                                                                                                                 // 408
                                                                                                                    // 409
Template.editableJSONInput.created = function () {                                                                  // 410
  this.editing = new ReactiveVar(false);                                                                            // 411
}                                                                                                                   // 412
                                                                                                                    // 413
Template.editableJSONInput.helpers({                                                                                // 414
  editing: function () {                                                                                            // 415
    return Blaze._templateInstance().editing.get();                                                                 // 416
  }                                                                                                                 // 417
});                                                                                                                 // 418
                                                                                                                    // 419
Template.editableJSONInput.events({                                                                                 // 420
  'click .editable-JSON-edit' : function (evt, tmpl) {                                                              // 421
    evt.stopPropagation();                                                                                          // 422
    if (EditableJSON.disableIdField && String(this) === '_id') {                                                    // 423
      return;                                                                                                       // 424
    }                                                                                                               // 425
    var parent = $(evt.target).parent();                                                                            // 426
    tmpl.editing.set(true);                                                                                         // 427
    Tracker.flush();                                                                                                // 428
    EditableJSONInternal.editing_key_press(parent, true);                                                           // 429
  },                                                                                                                // 430
  'input input' : function (evt, tmpl) {                                                                            // 431
    EditableJSONInternal.saveToSession(evt, tmpl, this);                                                            // 432
  },                                                                                                                // 433
  'keydown input' : function (evt, tmpl) {                                                                          // 434
    var charCode = evt.which || evt.keyCode;                                                                        // 435
    if (charCode === 27) {                                                                                          // 436
      tmpl.editing.set(false);                                                                                      // 437
    }                                                                                                               // 438
    if (charCode !== 13) {                                                                                          // 439
      EditableJSONInternal.editing_key_press(tmpl.$(evt.target));                                                   // 440
    }                                                                                                               // 441
  },                                                                                                                // 442
  'keyup input, focusout input' : function (evt, tmpl) {                                                            // 443
    if (evt.type === 'keyup') {                                                                                     // 444
      var charCode = evt.which || evt.keyCode;                                                                      // 445
      if (charCode !== 13) {                                                                                        // 446
        return;                                                                                                     // 447
      }                                                                                                             // 448
    }                                                                                                               // 449
    tmpl.editing.set(false);                                                                                        // 450
    if (this.collection) {                                                                                          // 451
      var elem = tmpl.$(evt.target);                                                                                // 452
      var value = elem.val();                                                                                       // 453
      if (this.number) {                                                                                            // 454
        value = parseFloat(value);                                                                                  // 455
      }                                                                                                             // 456
      if (value !== this.value) {                                                                                   // 457
        var modifier = {                                                                                            // 458
          field: this.field,                                                                                        // 459
          value: value,                                                                                             // 460
          action: "$set"                                                                                            // 461
        };                                                                                                          // 462
        EditableJSONInternal.update(tmpl, modifier);                                                                // 463
      }                                                                                                             // 464
    }                                                                                                               // 465
    else {                                                                                                          // 466
      EditableJSONInternal.saveToSession(evt, tmpl, this, true);                                                    // 467
    }                                                                                                               // 468
  }                                                                                                                 // 469
});                                                                                                                 // 470
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-json'] = {
  EditableJSON: EditableJSON
};

})();
