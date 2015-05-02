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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/summernote:summernote/dist/summernote.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Super simple wysiwyg editor on Bootstrap v0.6.5                                                                     // 2
 * http://summernote.org/                                                                                              // 3
 *                                                                                                                     // 4
 * summernote.js                                                                                                       // 5
 * Copyright 2013-2015 Alan Hong. and other contributors                                                               // 6
 * summernote may be freely distributed under the MIT license./                                                        // 7
 *                                                                                                                     // 8
 * Date: 2015-04-26T03:30Z                                                                                             // 9
 */                                                                                                                    // 10
(function (factory) {                                                                                                  // 11
  /* global define */                                                                                                  // 12
  if (typeof define === 'function' && define.amd) {                                                                    // 13
    // AMD. Register as an anonymous module.                                                                           // 14
    define(['jquery'], factory);                                                                                       // 15
  } else {                                                                                                             // 16
    // Browser globals: jQuery                                                                                         // 17
    factory(window.jQuery);                                                                                            // 18
  }                                                                                                                    // 19
}(function ($) {                                                                                                       // 20
                                                                                                                       // 21
                                                                                                                       // 22
                                                                                                                       // 23
  if (!Array.prototype.reduce) {                                                                                       // 24
    /**                                                                                                                // 25
     * Array.prototype.reduce polyfill                                                                                 // 26
     *                                                                                                                 // 27
     * @param {Function} callback                                                                                      // 28
     * @param {Value} [initialValue]                                                                                   // 29
     * @return {Value}                                                                                                 // 30
     *                                                                                                                 // 31
     * @see http://goo.gl/WNriQD                                                                                       // 32
     */                                                                                                                // 33
    Array.prototype.reduce = function (callback) {                                                                     // 34
      var t = Object(this), len = t.length >>> 0, k = 0, value;                                                        // 35
      if (arguments.length === 2) {                                                                                    // 36
        value = arguments[1];                                                                                          // 37
      } else {                                                                                                         // 38
        while (k < len && !(k in t)) {                                                                                 // 39
          k++;                                                                                                         // 40
        }                                                                                                              // 41
        if (k >= len) {                                                                                                // 42
          throw new TypeError('Reduce of empty array with no initial value');                                          // 43
        }                                                                                                              // 44
        value = t[k++];                                                                                                // 45
      }                                                                                                                // 46
      for (; k < len; k++) {                                                                                           // 47
        if (k in t) {                                                                                                  // 48
          value = callback(value, t[k], k, t);                                                                         // 49
        }                                                                                                              // 50
      }                                                                                                                // 51
      return value;                                                                                                    // 52
    };                                                                                                                 // 53
  }                                                                                                                    // 54
                                                                                                                       // 55
  if ('function' !== typeof Array.prototype.filter) {                                                                  // 56
    /**                                                                                                                // 57
     * Array.prototype.filter polyfill                                                                                 // 58
     *                                                                                                                 // 59
     * @param {Function} func                                                                                          // 60
     * @return {Array}                                                                                                 // 61
     *                                                                                                                 // 62
     * @see http://goo.gl/T1KFnq                                                                                       // 63
     */                                                                                                                // 64
    Array.prototype.filter = function (func) {                                                                         // 65
      var t = Object(this), len = t.length >>> 0;                                                                      // 66
                                                                                                                       // 67
      var res = [];                                                                                                    // 68
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;                                                     // 69
      for (var i = 0; i < len; i++) {                                                                                  // 70
        if (i in t) {                                                                                                  // 71
          var val = t[i];                                                                                              // 72
          if (func.call(thisArg, val, i, t)) {                                                                         // 73
            res.push(val);                                                                                             // 74
          }                                                                                                            // 75
        }                                                                                                              // 76
      }                                                                                                                // 77
                                                                                                                       // 78
      return res;                                                                                                      // 79
    };                                                                                                                 // 80
  }                                                                                                                    // 81
                                                                                                                       // 82
  var isSupportAmd = typeof define === 'function' && define.amd;                                                       // 83
                                                                                                                       // 84
  /**                                                                                                                  // 85
   * returns whether font is installed or not.                                                                         // 86
   *                                                                                                                   // 87
   * @param {String} fontName                                                                                          // 88
   * @return {Boolean}                                                                                                 // 89
   */                                                                                                                  // 90
  var isFontInstalled = function (fontName) {                                                                          // 91
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';                                 // 92
    var $tester = $('<div>').css({                                                                                     // 93
      position: 'absolute',                                                                                            // 94
      left: '-9999px',                                                                                                 // 95
      top: '-9999px',                                                                                                  // 96
      fontSize: '200px'                                                                                                // 97
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);                                                               // 98
                                                                                                                       // 99
    var originalWidth = $tester.css('fontFamily', testFontName).width();                                               // 100
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();                                      // 101
                                                                                                                       // 102
    $tester.remove();                                                                                                  // 103
                                                                                                                       // 104
    return originalWidth !== width;                                                                                    // 105
  };                                                                                                                   // 106
                                                                                                                       // 107
  /**                                                                                                                  // 108
   * @class core.agent                                                                                                 // 109
   *                                                                                                                   // 110
   * Object which check platform and agent                                                                             // 111
   *                                                                                                                   // 112
   * @singleton                                                                                                        // 113
   * @alternateClassName agent                                                                                         // 114
   */                                                                                                                  // 115
  var agent = {                                                                                                        // 116
    /** @property {Boolean} [isMac=false] true if this agent is Mac  */                                                // 117
    isMac: navigator.appVersion.indexOf('Mac') > -1,                                                                   // 118
    /** @property {Boolean} [isMSIE=false] true if this agent is a Internet Explorer  */                               // 119
    isMSIE: navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Trident') > -1,                   // 120
    /** @property {Boolean} [isFF=false] true if this agent is a Firefox  */                                           // 121
    isFF: navigator.userAgent.indexOf('Firefox') > -1,                                                                 // 122
    /** @property {String} jqueryVersion current jQuery version string  */                                             // 123
    jqueryVersion: parseFloat($.fn.jquery),                                                                            // 124
    isSupportAmd: isSupportAmd,                                                                                        // 125
    hasCodeMirror: isSupportAmd ? require.specified('CodeMirror') : !!window.CodeMirror,                               // 126
    isFontInstalled: isFontInstalled,                                                                                  // 127
    isW3CRangeSupport: !!document.createRange                                                                          // 128
  };                                                                                                                   // 129
                                                                                                                       // 130
  /**                                                                                                                  // 131
   * @class core.func                                                                                                  // 132
   *                                                                                                                   // 133
   * func utils (for high-order func's arg)                                                                            // 134
   *                                                                                                                   // 135
   * @singleton                                                                                                        // 136
   * @alternateClassName func                                                                                          // 137
   */                                                                                                                  // 138
  var func = (function () {                                                                                            // 139
    var eq = function (itemA) {                                                                                        // 140
      return function (itemB) {                                                                                        // 141
        return itemA === itemB;                                                                                        // 142
      };                                                                                                               // 143
    };                                                                                                                 // 144
                                                                                                                       // 145
    var eq2 = function (itemA, itemB) {                                                                                // 146
      return itemA === itemB;                                                                                          // 147
    };                                                                                                                 // 148
                                                                                                                       // 149
    var peq2 = function (propName) {                                                                                   // 150
      return function (itemA, itemB) {                                                                                 // 151
        return itemA[propName] === itemB[propName];                                                                    // 152
      };                                                                                                               // 153
    };                                                                                                                 // 154
                                                                                                                       // 155
    var ok = function () {                                                                                             // 156
      return true;                                                                                                     // 157
    };                                                                                                                 // 158
                                                                                                                       // 159
    var fail = function () {                                                                                           // 160
      return false;                                                                                                    // 161
    };                                                                                                                 // 162
                                                                                                                       // 163
    var not = function (f) {                                                                                           // 164
      return function () {                                                                                             // 165
        return !f.apply(f, arguments);                                                                                 // 166
      };                                                                                                               // 167
    };                                                                                                                 // 168
                                                                                                                       // 169
    var and = function (fA, fB) {                                                                                      // 170
      return function (item) {                                                                                         // 171
        return fA(item) && fB(item);                                                                                   // 172
      };                                                                                                               // 173
    };                                                                                                                 // 174
                                                                                                                       // 175
    var self = function (a) {                                                                                          // 176
      return a;                                                                                                        // 177
    };                                                                                                                 // 178
                                                                                                                       // 179
    var idCounter = 0;                                                                                                 // 180
                                                                                                                       // 181
    /**                                                                                                                // 182
     * generate a globally-unique id                                                                                   // 183
     *                                                                                                                 // 184
     * @param {String} [prefix]                                                                                        // 185
     */                                                                                                                // 186
    var uniqueId = function (prefix) {                                                                                 // 187
      var id = ++idCounter + '';                                                                                       // 188
      return prefix ? prefix + id : id;                                                                                // 189
    };                                                                                                                 // 190
                                                                                                                       // 191
    /**                                                                                                                // 192
     * returns bnd (bounds) from rect                                                                                  // 193
     *                                                                                                                 // 194
     * - IE Compatability Issue: http://goo.gl/sRLOAo                                                                  // 195
     * - Scroll Issue: http://goo.gl/sNjUc                                                                             // 196
     *                                                                                                                 // 197
     * @param {Rect} rect                                                                                              // 198
     * @return {Object} bounds                                                                                         // 199
     * @return {Number} bounds.top                                                                                     // 200
     * @return {Number} bounds.left                                                                                    // 201
     * @return {Number} bounds.width                                                                                   // 202
     * @return {Number} bounds.height                                                                                  // 203
     */                                                                                                                // 204
    var rect2bnd = function (rect) {                                                                                   // 205
      var $document = $(document);                                                                                     // 206
      return {                                                                                                         // 207
        top: rect.top + $document.scrollTop(),                                                                         // 208
        left: rect.left + $document.scrollLeft(),                                                                      // 209
        width: rect.right - rect.left,                                                                                 // 210
        height: rect.bottom - rect.top                                                                                 // 211
      };                                                                                                               // 212
    };                                                                                                                 // 213
                                                                                                                       // 214
    /**                                                                                                                // 215
     * returns a copy of the object where the keys have become the values and the values the keys.                     // 216
     * @param {Object} obj                                                                                             // 217
     * @return {Object}                                                                                                // 218
     */                                                                                                                // 219
    var invertObject = function (obj) {                                                                                // 220
      var inverted = {};                                                                                               // 221
      for (var key in obj) {                                                                                           // 222
        if (obj.hasOwnProperty(key)) {                                                                                 // 223
          inverted[obj[key]] = key;                                                                                    // 224
        }                                                                                                              // 225
      }                                                                                                                // 226
      return inverted;                                                                                                 // 227
    };                                                                                                                 // 228
                                                                                                                       // 229
    /**                                                                                                                // 230
     * @param {String} namespace                                                                                       // 231
     * @param {String} [prefix]                                                                                        // 232
     * @return {String}                                                                                                // 233
     */                                                                                                                // 234
    var namespaceToCamel = function (namespace, prefix) {                                                              // 235
      prefix = prefix || '';                                                                                           // 236
      return prefix + namespace.split('.').map(function (name) {                                                       // 237
        return name.substring(0, 1).toUpperCase() + name.substring(1);                                                 // 238
      }).join('');                                                                                                     // 239
    };                                                                                                                 // 240
                                                                                                                       // 241
    return {                                                                                                           // 242
      eq: eq,                                                                                                          // 243
      eq2: eq2,                                                                                                        // 244
      peq2: peq2,                                                                                                      // 245
      ok: ok,                                                                                                          // 246
      fail: fail,                                                                                                      // 247
      self: self,                                                                                                      // 248
      not: not,                                                                                                        // 249
      and: and,                                                                                                        // 250
      uniqueId: uniqueId,                                                                                              // 251
      rect2bnd: rect2bnd,                                                                                              // 252
      invertObject: invertObject,                                                                                      // 253
      namespaceToCamel: namespaceToCamel                                                                               // 254
    };                                                                                                                 // 255
  })();                                                                                                                // 256
                                                                                                                       // 257
  /**                                                                                                                  // 258
   * @class core.list                                                                                                  // 259
   *                                                                                                                   // 260
   * list utils                                                                                                        // 261
   *                                                                                                                   // 262
   * @singleton                                                                                                        // 263
   * @alternateClassName list                                                                                          // 264
   */                                                                                                                  // 265
  var list = (function () {                                                                                            // 266
    /**                                                                                                                // 267
     * returns the first item of an array.                                                                             // 268
     *                                                                                                                 // 269
     * @param {Array} array                                                                                            // 270
     */                                                                                                                // 271
    var head = function (array) {                                                                                      // 272
      return array[0];                                                                                                 // 273
    };                                                                                                                 // 274
                                                                                                                       // 275
    /**                                                                                                                // 276
     * returns the last item of an array.                                                                              // 277
     *                                                                                                                 // 278
     * @param {Array} array                                                                                            // 279
     */                                                                                                                // 280
    var last = function (array) {                                                                                      // 281
      return array[array.length - 1];                                                                                  // 282
    };                                                                                                                 // 283
                                                                                                                       // 284
    /**                                                                                                                // 285
     * returns everything but the last entry of the array.                                                             // 286
     *                                                                                                                 // 287
     * @param {Array} array                                                                                            // 288
     */                                                                                                                // 289
    var initial = function (array) {                                                                                   // 290
      return array.slice(0, array.length - 1);                                                                         // 291
    };                                                                                                                 // 292
                                                                                                                       // 293
    /**                                                                                                                // 294
     * returns the rest of the items in an array.                                                                      // 295
     *                                                                                                                 // 296
     * @param {Array} array                                                                                            // 297
     */                                                                                                                // 298
    var tail = function (array) {                                                                                      // 299
      return array.slice(1);                                                                                           // 300
    };                                                                                                                 // 301
                                                                                                                       // 302
    /**                                                                                                                // 303
     * returns item of array                                                                                           // 304
     */                                                                                                                // 305
    var find = function (array, pred) {                                                                                // 306
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 307
        var item = array[idx];                                                                                         // 308
        if (pred(item)) {                                                                                              // 309
          return item;                                                                                                 // 310
        }                                                                                                              // 311
      }                                                                                                                // 312
    };                                                                                                                 // 313
                                                                                                                       // 314
    /**                                                                                                                // 315
     * returns true if all of the values in the array pass the predicate truth test.                                   // 316
     */                                                                                                                // 317
    var all = function (array, pred) {                                                                                 // 318
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 319
        if (!pred(array[idx])) {                                                                                       // 320
          return false;                                                                                                // 321
        }                                                                                                              // 322
      }                                                                                                                // 323
      return true;                                                                                                     // 324
    };                                                                                                                 // 325
                                                                                                                       // 326
    /**                                                                                                                // 327
     * returns true if the value is present in the list.                                                               // 328
     */                                                                                                                // 329
    var contains = function (array, item) {                                                                            // 330
      return $.inArray(item, array) !== -1;                                                                            // 331
    };                                                                                                                 // 332
                                                                                                                       // 333
    /**                                                                                                                // 334
     * get sum from a list                                                                                             // 335
     *                                                                                                                 // 336
     * @param {Array} array - array                                                                                    // 337
     * @param {Function} fn - iterator                                                                                 // 338
     */                                                                                                                // 339
    var sum = function (array, fn) {                                                                                   // 340
      fn = fn || func.self;                                                                                            // 341
      return array.reduce(function (memo, v) {                                                                         // 342
        return memo + fn(v);                                                                                           // 343
      }, 0);                                                                                                           // 344
    };                                                                                                                 // 345
                                                                                                                       // 346
    /**                                                                                                                // 347
     * returns a copy of the collection with array type.                                                               // 348
     * @param {Collection} collection - collection eg) node.childNodes, ...                                            // 349
     */                                                                                                                // 350
    var from = function (collection) {                                                                                 // 351
      var result = [], idx = -1, length = collection.length;                                                           // 352
      while (++idx < length) {                                                                                         // 353
        result[idx] = collection[idx];                                                                                 // 354
      }                                                                                                                // 355
      return result;                                                                                                   // 356
    };                                                                                                                 // 357
                                                                                                                       // 358
    /**                                                                                                                // 359
     * cluster elements by predicate function.                                                                         // 360
     *                                                                                                                 // 361
     * @param {Array} array - array                                                                                    // 362
     * @param {Function} fn - predicate function for cluster rule                                                      // 363
     * @param {Array[]}                                                                                                // 364
     */                                                                                                                // 365
    var clusterBy = function (array, fn) {                                                                             // 366
      if (!array.length) { return []; }                                                                                // 367
      var aTail = tail(array);                                                                                         // 368
      return aTail.reduce(function (memo, v) {                                                                         // 369
        var aLast = last(memo);                                                                                        // 370
        if (fn(last(aLast), v)) {                                                                                      // 371
          aLast[aLast.length] = v;                                                                                     // 372
        } else {                                                                                                       // 373
          memo[memo.length] = [v];                                                                                     // 374
        }                                                                                                              // 375
        return memo;                                                                                                   // 376
      }, [[head(array)]]);                                                                                             // 377
    };                                                                                                                 // 378
                                                                                                                       // 379
    /**                                                                                                                // 380
     * returns a copy of the array with all falsy values removed                                                       // 381
     *                                                                                                                 // 382
     * @param {Array} array - array                                                                                    // 383
     * @param {Function} fn - predicate function for cluster rule                                                      // 384
     */                                                                                                                // 385
    var compact = function (array) {                                                                                   // 386
      var aResult = [];                                                                                                // 387
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 388
        if (array[idx]) { aResult.push(array[idx]); }                                                                  // 389
      }                                                                                                                // 390
      return aResult;                                                                                                  // 391
    };                                                                                                                 // 392
                                                                                                                       // 393
    /**                                                                                                                // 394
     * produces a duplicate-free version of the array                                                                  // 395
     *                                                                                                                 // 396
     * @param {Array} array                                                                                            // 397
     */                                                                                                                // 398
    var unique = function (array) {                                                                                    // 399
      var results = [];                                                                                                // 400
                                                                                                                       // 401
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 402
        if (!contains(results, array[idx])) {                                                                          // 403
          results.push(array[idx]);                                                                                    // 404
        }                                                                                                              // 405
      }                                                                                                                // 406
                                                                                                                       // 407
      return results;                                                                                                  // 408
    };                                                                                                                 // 409
                                                                                                                       // 410
    /**                                                                                                                // 411
     * returns next item.                                                                                              // 412
     * @param {Array} array                                                                                            // 413
     */                                                                                                                // 414
    var next = function (array, item) {                                                                                // 415
      var idx = array.indexOf(item);                                                                                   // 416
      if (idx === -1) { return null; }                                                                                 // 417
                                                                                                                       // 418
      return array[idx + 1];                                                                                           // 419
    };                                                                                                                 // 420
                                                                                                                       // 421
    /**                                                                                                                // 422
     * returns prev item.                                                                                              // 423
     * @param {Array} array                                                                                            // 424
     */                                                                                                                // 425
    var prev = function (array, item) {                                                                                // 426
      var idx = array.indexOf(item);                                                                                   // 427
      if (idx === -1) { return null; }                                                                                 // 428
                                                                                                                       // 429
      return array[idx - 1];                                                                                           // 430
    };                                                                                                                 // 431
                                                                                                                       // 432
                                                                                                                       // 433
    return { head: head, last: last, initial: initial, tail: tail,                                                     // 434
             prev: prev, next: next, find: find, contains: contains,                                                   // 435
             all: all, sum: sum, from: from,                                                                           // 436
             clusterBy: clusterBy, compact: compact, unique: unique };                                                 // 437
  })();                                                                                                                // 438
                                                                                                                       // 439
                                                                                                                       // 440
  var NBSP_CHAR = String.fromCharCode(160);                                                                            // 441
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';                                                                                 // 442
                                                                                                                       // 443
  /**                                                                                                                  // 444
   * @class core.dom                                                                                                   // 445
   *                                                                                                                   // 446
   * Dom functions                                                                                                     // 447
   *                                                                                                                   // 448
   * @singleton                                                                                                        // 449
   * @alternateClassName dom                                                                                           // 450
   */                                                                                                                  // 451
  var dom = (function () {                                                                                             // 452
    /**                                                                                                                // 453
     * @method isEditable                                                                                              // 454
     *                                                                                                                 // 455
     * returns whether node is `note-editable` or not.                                                                 // 456
     *                                                                                                                 // 457
     * @param {Node} node                                                                                              // 458
     * @return {Boolean}                                                                                               // 459
     */                                                                                                                // 460
    var isEditable = function (node) {                                                                                 // 461
      return node && $(node).hasClass('note-editable');                                                                // 462
    };                                                                                                                 // 463
                                                                                                                       // 464
    /**                                                                                                                // 465
     * @method isControlSizing                                                                                         // 466
     *                                                                                                                 // 467
     * returns whether node is `note-control-sizing` or not.                                                           // 468
     *                                                                                                                 // 469
     * @param {Node} node                                                                                              // 470
     * @return {Boolean}                                                                                               // 471
     */                                                                                                                // 472
    var isControlSizing = function (node) {                                                                            // 473
      return node && $(node).hasClass('note-control-sizing');                                                          // 474
    };                                                                                                                 // 475
                                                                                                                       // 476
    /**                                                                                                                // 477
     * @method  buildLayoutInfo                                                                                        // 478
     *                                                                                                                 // 479
     * build layoutInfo from $editor(.note-editor)                                                                     // 480
     *                                                                                                                 // 481
     * @param {jQuery} $editor                                                                                         // 482
     * @return {Object}                                                                                                // 483
     * @return {Function} return.editor                                                                                // 484
     * @return {Node} return.dropzone                                                                                  // 485
     * @return {Node} return.toolbar                                                                                   // 486
     * @return {Node} return.editable                                                                                  // 487
     * @return {Node} return.codable                                                                                   // 488
     * @return {Node} return.popover                                                                                   // 489
     * @return {Node} return.handle                                                                                    // 490
     * @return {Node} return.dialog                                                                                    // 491
     */                                                                                                                // 492
    var buildLayoutInfo = function ($editor) {                                                                         // 493
      var makeFinder;                                                                                                  // 494
                                                                                                                       // 495
      // air mode                                                                                                      // 496
      if ($editor.hasClass('note-air-editor')) {                                                                       // 497
        var id = list.last($editor.attr('id').split('-'));                                                             // 498
        makeFinder = function (sIdPrefix) {                                                                            // 499
          return function () { return $(sIdPrefix + id); };                                                            // 500
        };                                                                                                             // 501
                                                                                                                       // 502
        return {                                                                                                       // 503
          editor: function () { return $editor; },                                                                     // 504
          holder : function () { return $editor.data('holder'); },                                                     // 505
          editable: function () { return $editor; },                                                                   // 506
          popover: makeFinder('#note-popover-'),                                                                       // 507
          handle: makeFinder('#note-handle-'),                                                                         // 508
          dialog: makeFinder('#note-dialog-')                                                                          // 509
        };                                                                                                             // 510
                                                                                                                       // 511
        // frame mode                                                                                                  // 512
      } else {                                                                                                         // 513
        makeFinder = function (sClassName) {                                                                           // 514
          return function () { return $editor.find(sClassName); };                                                     // 515
        };                                                                                                             // 516
        return {                                                                                                       // 517
          editor: function () { return $editor; },                                                                     // 518
          holder : function () { return $editor.data('holder'); },                                                     // 519
          dropzone: makeFinder('.note-dropzone'),                                                                      // 520
          toolbar: makeFinder('.note-toolbar'),                                                                        // 521
          editable: makeFinder('.note-editable'),                                                                      // 522
          codable: makeFinder('.note-codable'),                                                                        // 523
          statusbar: makeFinder('.note-statusbar'),                                                                    // 524
          popover: makeFinder('.note-popover'),                                                                        // 525
          handle: makeFinder('.note-handle'),                                                                          // 526
          dialog: makeFinder('.note-dialog')                                                                           // 527
        };                                                                                                             // 528
      }                                                                                                                // 529
    };                                                                                                                 // 530
                                                                                                                       // 531
    /**                                                                                                                // 532
     * returns makeLayoutInfo from editor's descendant node.                                                           // 533
     *                                                                                                                 // 534
     * @private                                                                                                        // 535
     * @param {Node} descendant                                                                                        // 536
     * @return {Object}                                                                                                // 537
     */                                                                                                                // 538
    var makeLayoutInfo = function (descendant) {                                                                       // 539
      var $target = $(descendant).closest('.note-editor, .note-air-editor, .note-air-layout');                         // 540
                                                                                                                       // 541
      if (!$target.length) {                                                                                           // 542
        return null;                                                                                                   // 543
      }                                                                                                                // 544
                                                                                                                       // 545
      var $editor;                                                                                                     // 546
      if ($target.is('.note-editor, .note-air-editor')) {                                                              // 547
        $editor = $target;                                                                                             // 548
      } else {                                                                                                         // 549
        $editor = $('#note-editor-' + list.last($target.attr('id').split('-')));                                       // 550
      }                                                                                                                // 551
                                                                                                                       // 552
      return buildLayoutInfo($editor);                                                                                 // 553
    };                                                                                                                 // 554
                                                                                                                       // 555
    /**                                                                                                                // 556
     * @method makePredByNodeName                                                                                      // 557
     *                                                                                                                 // 558
     * returns predicate which judge whether nodeName is same                                                          // 559
     *                                                                                                                 // 560
     * @param {String} nodeName                                                                                        // 561
     * @return {Function}                                                                                              // 562
     */                                                                                                                // 563
    var makePredByNodeName = function (nodeName) {                                                                     // 564
      nodeName = nodeName.toUpperCase();                                                                               // 565
      return function (node) {                                                                                         // 566
        return node && node.nodeName.toUpperCase() === nodeName;                                                       // 567
      };                                                                                                               // 568
    };                                                                                                                 // 569
                                                                                                                       // 570
    /**                                                                                                                // 571
     * @method isText                                                                                                  // 572
     *                                                                                                                 // 573
     *                                                                                                                 // 574
     *                                                                                                                 // 575
     * @param {Node} node                                                                                              // 576
     * @return {Boolean} true if node's type is text(3)                                                                // 577
     */                                                                                                                // 578
    var isText = function (node) {                                                                                     // 579
      return node && node.nodeType === 3;                                                                              // 580
    };                                                                                                                 // 581
                                                                                                                       // 582
    /**                                                                                                                // 583
     * ex) br, col, embed, hr, img, input, ...                                                                         // 584
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements                                     // 585
     */                                                                                                                // 586
    var isVoid = function (node) {                                                                                     // 587
      return node && /^BR|^IMG|^HR/.test(node.nodeName.toUpperCase());                                                 // 588
    };                                                                                                                 // 589
                                                                                                                       // 590
    var isPara = function (node) {                                                                                     // 591
      if (isEditable(node)) {                                                                                          // 592
        return false;                                                                                                  // 593
      }                                                                                                                // 594
                                                                                                                       // 595
      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph                                                              // 596
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());                                          // 597
    };                                                                                                                 // 598
                                                                                                                       // 599
    var isLi = makePredByNodeName('LI');                                                                               // 600
                                                                                                                       // 601
    var isPurePara = function (node) {                                                                                 // 602
      return isPara(node) && !isLi(node);                                                                              // 603
    };                                                                                                                 // 604
                                                                                                                       // 605
    var isTable = makePredByNodeName('TABLE');                                                                         // 606
                                                                                                                       // 607
    var isInline = function (node) {                                                                                   // 608
      return !isBodyContainer(node) &&                                                                                 // 609
             !isList(node) &&                                                                                          // 610
             !isPara(node) &&                                                                                          // 611
             !isTable(node) &&                                                                                         // 612
             !isBlockquote(node);                                                                                      // 613
    };                                                                                                                 // 614
                                                                                                                       // 615
    var isList = function (node) {                                                                                     // 616
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());                                                      // 617
    };                                                                                                                 // 618
                                                                                                                       // 619
    var isCell = function (node) {                                                                                     // 620
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());                                                      // 621
    };                                                                                                                 // 622
                                                                                                                       // 623
    var isBlockquote = makePredByNodeName('BLOCKQUOTE');                                                               // 624
                                                                                                                       // 625
    var isBodyContainer = function (node) {                                                                            // 626
      return isCell(node) || isBlockquote(node) || isEditable(node);                                                   // 627
    };                                                                                                                 // 628
                                                                                                                       // 629
    var isAnchor = makePredByNodeName('A');                                                                            // 630
                                                                                                                       // 631
    var isParaInline = function (node) {                                                                               // 632
      return isInline(node) && !!ancestor(node, isPara);                                                               // 633
    };                                                                                                                 // 634
                                                                                                                       // 635
    var isBodyInline = function (node) {                                                                               // 636
      return isInline(node) && !ancestor(node, isPara);                                                                // 637
    };                                                                                                                 // 638
                                                                                                                       // 639
    var isBody = makePredByNodeName('BODY');                                                                           // 640
                                                                                                                       // 641
    /**                                                                                                                // 642
     * returns whether nodeB is closest sibling of nodeA                                                               // 643
     *                                                                                                                 // 644
     * @param {Node} nodeA                                                                                             // 645
     * @param {Node} nodeB                                                                                             // 646
     * @return {Boolean}                                                                                               // 647
     */                                                                                                                // 648
    var isClosestSibling = function (nodeA, nodeB) {                                                                   // 649
      return nodeA.nextSibling === nodeB ||                                                                            // 650
             nodeA.previousSibling === nodeB;                                                                          // 651
    };                                                                                                                 // 652
                                                                                                                       // 653
    /**                                                                                                                // 654
     * returns array of closest siblings with node                                                                     // 655
     *                                                                                                                 // 656
     * @param {Node} node                                                                                              // 657
     * @param {function} [pred] - predicate function                                                                   // 658
     * @return {Node[]}                                                                                                // 659
     */                                                                                                                // 660
    var withClosestSiblings = function (node, pred) {                                                                  // 661
      pred = pred || func.ok;                                                                                          // 662
                                                                                                                       // 663
      var siblings = [];                                                                                               // 664
      if (node.previousSibling && pred(node.previousSibling)) {                                                        // 665
        siblings.push(node.previousSibling);                                                                           // 666
      }                                                                                                                // 667
      siblings.push(node);                                                                                             // 668
      if (node.nextSibling && pred(node.nextSibling)) {                                                                // 669
        siblings.push(node.nextSibling);                                                                               // 670
      }                                                                                                                // 671
      return siblings;                                                                                                 // 672
    };                                                                                                                 // 673
                                                                                                                       // 674
    /**                                                                                                                // 675
     * blank HTML for cursor position                                                                                  // 676
     * - [workaround] for MSIE IE doesn't works with bogus br                                                          // 677
     */                                                                                                                // 678
    var blankHTML = agent.isMSIE ? '&nbsp;' : '<br>';                                                                  // 679
                                                                                                                       // 680
    /**                                                                                                                // 681
     * @method nodeLength                                                                                              // 682
     *                                                                                                                 // 683
     * returns #text's text size or element's childNodes size                                                          // 684
     *                                                                                                                 // 685
     * @param {Node} node                                                                                              // 686
     */                                                                                                                // 687
    var nodeLength = function (node) {                                                                                 // 688
      if (isText(node)) {                                                                                              // 689
        return node.nodeValue.length;                                                                                  // 690
      }                                                                                                                // 691
                                                                                                                       // 692
      return node.childNodes.length;                                                                                   // 693
    };                                                                                                                 // 694
                                                                                                                       // 695
    /**                                                                                                                // 696
     * returns whether node is empty or not.                                                                           // 697
     *                                                                                                                 // 698
     * @param {Node} node                                                                                              // 699
     * @return {Boolean}                                                                                               // 700
     */                                                                                                                // 701
    var isEmpty = function (node) {                                                                                    // 702
      var len = nodeLength(node);                                                                                      // 703
                                                                                                                       // 704
      if (len === 0) {                                                                                                 // 705
        return true;                                                                                                   // 706
      } else if (!dom.isText(node) && len === 1 && node.innerHTML === blankHTML) {                                     // 707
        // ex) <p><br></p>, <span><br></span>                                                                          // 708
        return true;                                                                                                   // 709
      }                                                                                                                // 710
                                                                                                                       // 711
      return false;                                                                                                    // 712
    };                                                                                                                 // 713
                                                                                                                       // 714
    /**                                                                                                                // 715
     * padding blankHTML if node is empty (for cursor position)                                                        // 716
     */                                                                                                                // 717
    var paddingBlankHTML = function (node) {                                                                           // 718
      if (!isVoid(node) && !nodeLength(node)) {                                                                        // 719
        node.innerHTML = blankHTML;                                                                                    // 720
      }                                                                                                                // 721
    };                                                                                                                 // 722
                                                                                                                       // 723
    /**                                                                                                                // 724
     * find nearest ancestor predicate hit                                                                             // 725
     *                                                                                                                 // 726
     * @param {Node} node                                                                                              // 727
     * @param {Function} pred - predicate function                                                                     // 728
     */                                                                                                                // 729
    var ancestor = function (node, pred) {                                                                             // 730
      while (node) {                                                                                                   // 731
        if (pred(node)) { return node; }                                                                               // 732
        if (isEditable(node)) { break; }                                                                               // 733
                                                                                                                       // 734
        node = node.parentNode;                                                                                        // 735
      }                                                                                                                // 736
      return null;                                                                                                     // 737
    };                                                                                                                 // 738
                                                                                                                       // 739
    /**                                                                                                                // 740
     * find nearest ancestor only single child blood line and predicate hit                                            // 741
     *                                                                                                                 // 742
     * @param {Node} node                                                                                              // 743
     * @param {Function} pred - predicate function                                                                     // 744
     */                                                                                                                // 745
    var singleChildAncestor = function (node, pred) {                                                                  // 746
      node = node.parentNode;                                                                                          // 747
                                                                                                                       // 748
      while (node) {                                                                                                   // 749
        if (nodeLength(node) !== 1) { break; }                                                                         // 750
        if (pred(node)) { return node; }                                                                               // 751
        if (isEditable(node)) { break; }                                                                               // 752
                                                                                                                       // 753
        node = node.parentNode;                                                                                        // 754
      }                                                                                                                // 755
      return null;                                                                                                     // 756
    };                                                                                                                 // 757
                                                                                                                       // 758
    /**                                                                                                                // 759
     * returns new array of ancestor nodes (until predicate hit).                                                      // 760
     *                                                                                                                 // 761
     * @param {Node} node                                                                                              // 762
     * @param {Function} [optional] pred - predicate function                                                          // 763
     */                                                                                                                // 764
    var listAncestor = function (node, pred) {                                                                         // 765
      pred = pred || func.fail;                                                                                        // 766
                                                                                                                       // 767
      var ancestors = [];                                                                                              // 768
      ancestor(node, function (el) {                                                                                   // 769
        if (!isEditable(el)) {                                                                                         // 770
          ancestors.push(el);                                                                                          // 771
        }                                                                                                              // 772
                                                                                                                       // 773
        return pred(el);                                                                                               // 774
      });                                                                                                              // 775
      return ancestors;                                                                                                // 776
    };                                                                                                                 // 777
                                                                                                                       // 778
    /**                                                                                                                // 779
     * find farthest ancestor predicate hit                                                                            // 780
     */                                                                                                                // 781
    var lastAncestor = function (node, pred) {                                                                         // 782
      var ancestors = listAncestor(node);                                                                              // 783
      return list.last(ancestors.filter(pred));                                                                        // 784
    };                                                                                                                 // 785
                                                                                                                       // 786
    /**                                                                                                                // 787
     * returns common ancestor node between two nodes.                                                                 // 788
     *                                                                                                                 // 789
     * @param {Node} nodeA                                                                                             // 790
     * @param {Node} nodeB                                                                                             // 791
     */                                                                                                                // 792
    var commonAncestor = function (nodeA, nodeB) {                                                                     // 793
      var ancestors = listAncestor(nodeA);                                                                             // 794
      for (var n = nodeB; n; n = n.parentNode) {                                                                       // 795
        if ($.inArray(n, ancestors) > -1) { return n; }                                                                // 796
      }                                                                                                                // 797
      return null; // difference document area                                                                         // 798
    };                                                                                                                 // 799
                                                                                                                       // 800
    /**                                                                                                                // 801
     * listing all previous siblings (until predicate hit).                                                            // 802
     *                                                                                                                 // 803
     * @param {Node} node                                                                                              // 804
     * @param {Function} [optional] pred - predicate function                                                          // 805
     */                                                                                                                // 806
    var listPrev = function (node, pred) {                                                                             // 807
      pred = pred || func.fail;                                                                                        // 808
                                                                                                                       // 809
      var nodes = [];                                                                                                  // 810
      while (node) {                                                                                                   // 811
        if (pred(node)) { break; }                                                                                     // 812
        nodes.push(node);                                                                                              // 813
        node = node.previousSibling;                                                                                   // 814
      }                                                                                                                // 815
      return nodes;                                                                                                    // 816
    };                                                                                                                 // 817
                                                                                                                       // 818
    /**                                                                                                                // 819
     * listing next siblings (until predicate hit).                                                                    // 820
     *                                                                                                                 // 821
     * @param {Node} node                                                                                              // 822
     * @param {Function} [pred] - predicate function                                                                   // 823
     */                                                                                                                // 824
    var listNext = function (node, pred) {                                                                             // 825
      pred = pred || func.fail;                                                                                        // 826
                                                                                                                       // 827
      var nodes = [];                                                                                                  // 828
      while (node) {                                                                                                   // 829
        if (pred(node)) { break; }                                                                                     // 830
        nodes.push(node);                                                                                              // 831
        node = node.nextSibling;                                                                                       // 832
      }                                                                                                                // 833
      return nodes;                                                                                                    // 834
    };                                                                                                                 // 835
                                                                                                                       // 836
    /**                                                                                                                // 837
     * listing descendant nodes                                                                                        // 838
     *                                                                                                                 // 839
     * @param {Node} node                                                                                              // 840
     * @param {Function} [pred] - predicate function                                                                   // 841
     */                                                                                                                // 842
    var listDescendant = function (node, pred) {                                                                       // 843
      var descendents = [];                                                                                            // 844
      pred = pred || func.ok;                                                                                          // 845
                                                                                                                       // 846
      // start DFS(depth first search) with node                                                                       // 847
      (function fnWalk(current) {                                                                                      // 848
        if (node !== current && pred(current)) {                                                                       // 849
          descendents.push(current);                                                                                   // 850
        }                                                                                                              // 851
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {                                         // 852
          fnWalk(current.childNodes[idx]);                                                                             // 853
        }                                                                                                              // 854
      })(node);                                                                                                        // 855
                                                                                                                       // 856
      return descendents;                                                                                              // 857
    };                                                                                                                 // 858
                                                                                                                       // 859
    /**                                                                                                                // 860
     * wrap node with new tag.                                                                                         // 861
     *                                                                                                                 // 862
     * @param {Node} node                                                                                              // 863
     * @param {Node} tagName of wrapper                                                                                // 864
     * @return {Node} - wrapper                                                                                        // 865
     */                                                                                                                // 866
    var wrap = function (node, wrapperName) {                                                                          // 867
      var parent = node.parentNode;                                                                                    // 868
      var wrapper = $('<' + wrapperName + '>')[0];                                                                     // 869
                                                                                                                       // 870
      parent.insertBefore(wrapper, node);                                                                              // 871
      wrapper.appendChild(node);                                                                                       // 872
                                                                                                                       // 873
      return wrapper;                                                                                                  // 874
    };                                                                                                                 // 875
                                                                                                                       // 876
    /**                                                                                                                // 877
     * insert node after preceding                                                                                     // 878
     *                                                                                                                 // 879
     * @param {Node} node                                                                                              // 880
     * @param {Node} preceding - predicate function                                                                    // 881
     */                                                                                                                // 882
    var insertAfter = function (node, preceding) {                                                                     // 883
      var next = preceding.nextSibling, parent = preceding.parentNode;                                                 // 884
      if (next) {                                                                                                      // 885
        parent.insertBefore(node, next);                                                                               // 886
      } else {                                                                                                         // 887
        parent.appendChild(node);                                                                                      // 888
      }                                                                                                                // 889
      return node;                                                                                                     // 890
    };                                                                                                                 // 891
                                                                                                                       // 892
    /**                                                                                                                // 893
     * append elements.                                                                                                // 894
     *                                                                                                                 // 895
     * @param {Node} node                                                                                              // 896
     * @param {Collection} aChild                                                                                      // 897
     */                                                                                                                // 898
    var appendChildNodes = function (node, aChild) {                                                                   // 899
      $.each(aChild, function (idx, child) {                                                                           // 900
        node.appendChild(child);                                                                                       // 901
      });                                                                                                              // 902
      return node;                                                                                                     // 903
    };                                                                                                                 // 904
                                                                                                                       // 905
    /**                                                                                                                // 906
     * returns whether boundaryPoint is left edge or not.                                                              // 907
     *                                                                                                                 // 908
     * @param {BoundaryPoint} point                                                                                    // 909
     * @return {Boolean}                                                                                               // 910
     */                                                                                                                // 911
    var isLeftEdgePoint = function (point) {                                                                           // 912
      return point.offset === 0;                                                                                       // 913
    };                                                                                                                 // 914
                                                                                                                       // 915
    /**                                                                                                                // 916
     * returns whether boundaryPoint is right edge or not.                                                             // 917
     *                                                                                                                 // 918
     * @param {BoundaryPoint} point                                                                                    // 919
     * @return {Boolean}                                                                                               // 920
     */                                                                                                                // 921
    var isRightEdgePoint = function (point) {                                                                          // 922
      return point.offset === nodeLength(point.node);                                                                  // 923
    };                                                                                                                 // 924
                                                                                                                       // 925
    /**                                                                                                                // 926
     * returns whether boundaryPoint is edge or not.                                                                   // 927
     *                                                                                                                 // 928
     * @param {BoundaryPoint} point                                                                                    // 929
     * @return {Boolean}                                                                                               // 930
     */                                                                                                                // 931
    var isEdgePoint = function (point) {                                                                               // 932
      return isLeftEdgePoint(point) || isRightEdgePoint(point);                                                        // 933
    };                                                                                                                 // 934
                                                                                                                       // 935
    /**                                                                                                                // 936
     * returns wheter node is left edge of ancestor or not.                                                            // 937
     *                                                                                                                 // 938
     * @param {Node} node                                                                                              // 939
     * @param {Node} ancestor                                                                                          // 940
     * @return {Boolean}                                                                                               // 941
     */                                                                                                                // 942
    var isLeftEdgeOf = function (node, ancestor) {                                                                     // 943
      while (node && node !== ancestor) {                                                                              // 944
        if (position(node) !== 0) {                                                                                    // 945
          return false;                                                                                                // 946
        }                                                                                                              // 947
        node = node.parentNode;                                                                                        // 948
      }                                                                                                                // 949
                                                                                                                       // 950
      return true;                                                                                                     // 951
    };                                                                                                                 // 952
                                                                                                                       // 953
    /**                                                                                                                // 954
     * returns whether node is right edge of ancestor or not.                                                          // 955
     *                                                                                                                 // 956
     * @param {Node} node                                                                                              // 957
     * @param {Node} ancestor                                                                                          // 958
     * @return {Boolean}                                                                                               // 959
     */                                                                                                                // 960
    var isRightEdgeOf = function (node, ancestor) {                                                                    // 961
      while (node && node !== ancestor) {                                                                              // 962
        if (position(node) !== nodeLength(node.parentNode) - 1) {                                                      // 963
          return false;                                                                                                // 964
        }                                                                                                              // 965
        node = node.parentNode;                                                                                        // 966
      }                                                                                                                // 967
                                                                                                                       // 968
      return true;                                                                                                     // 969
    };                                                                                                                 // 970
                                                                                                                       // 971
    /**                                                                                                                // 972
     * returns offset from parent.                                                                                     // 973
     *                                                                                                                 // 974
     * @param {Node} node                                                                                              // 975
     */                                                                                                                // 976
    var position = function (node) {                                                                                   // 977
      var offset = 0;                                                                                                  // 978
      while ((node = node.previousSibling)) {                                                                          // 979
        offset += 1;                                                                                                   // 980
      }                                                                                                                // 981
      return offset;                                                                                                   // 982
    };                                                                                                                 // 983
                                                                                                                       // 984
    var hasChildren = function (node) {                                                                                // 985
      return !!(node && node.childNodes && node.childNodes.length);                                                    // 986
    };                                                                                                                 // 987
                                                                                                                       // 988
    /**                                                                                                                // 989
     * returns previous boundaryPoint                                                                                  // 990
     *                                                                                                                 // 991
     * @param {BoundaryPoint} point                                                                                    // 992
     * @param {Boolean} isSkipInnerOffset                                                                              // 993
     * @return {BoundaryPoint}                                                                                         // 994
     */                                                                                                                // 995
    var prevPoint = function (point, isSkipInnerOffset) {                                                              // 996
      var node, offset;                                                                                                // 997
                                                                                                                       // 998
      if (point.offset === 0) {                                                                                        // 999
        if (isEditable(point.node)) {                                                                                  // 1000
          return null;                                                                                                 // 1001
        }                                                                                                              // 1002
                                                                                                                       // 1003
        node = point.node.parentNode;                                                                                  // 1004
        offset = position(point.node);                                                                                 // 1005
      } else if (hasChildren(point.node)) {                                                                            // 1006
        node = point.node.childNodes[point.offset - 1];                                                                // 1007
        offset = nodeLength(node);                                                                                     // 1008
      } else {                                                                                                         // 1009
        node = point.node;                                                                                             // 1010
        offset = isSkipInnerOffset ? 0 : point.offset - 1;                                                             // 1011
      }                                                                                                                // 1012
                                                                                                                       // 1013
      return {                                                                                                         // 1014
        node: node,                                                                                                    // 1015
        offset: offset                                                                                                 // 1016
      };                                                                                                               // 1017
    };                                                                                                                 // 1018
                                                                                                                       // 1019
    /**                                                                                                                // 1020
     * returns next boundaryPoint                                                                                      // 1021
     *                                                                                                                 // 1022
     * @param {BoundaryPoint} point                                                                                    // 1023
     * @param {Boolean} isSkipInnerOffset                                                                              // 1024
     * @return {BoundaryPoint}                                                                                         // 1025
     */                                                                                                                // 1026
    var nextPoint = function (point, isSkipInnerOffset) {                                                              // 1027
      var node, offset;                                                                                                // 1028
                                                                                                                       // 1029
      if (nodeLength(point.node) === point.offset) {                                                                   // 1030
        if (isEditable(point.node)) {                                                                                  // 1031
          return null;                                                                                                 // 1032
        }                                                                                                              // 1033
                                                                                                                       // 1034
        node = point.node.parentNode;                                                                                  // 1035
        offset = position(point.node) + 1;                                                                             // 1036
      } else if (hasChildren(point.node)) {                                                                            // 1037
        node = point.node.childNodes[point.offset];                                                                    // 1038
        offset = 0;                                                                                                    // 1039
      } else {                                                                                                         // 1040
        node = point.node;                                                                                             // 1041
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;                                        // 1042
      }                                                                                                                // 1043
                                                                                                                       // 1044
      return {                                                                                                         // 1045
        node: node,                                                                                                    // 1046
        offset: offset                                                                                                 // 1047
      };                                                                                                               // 1048
    };                                                                                                                 // 1049
                                                                                                                       // 1050
    /**                                                                                                                // 1051
     * returns whether pointA and pointB is same or not.                                                               // 1052
     *                                                                                                                 // 1053
     * @param {BoundaryPoint} pointA                                                                                   // 1054
     * @param {BoundaryPoint} pointB                                                                                   // 1055
     * @return {Boolean}                                                                                               // 1056
     */                                                                                                                // 1057
    var isSamePoint = function (pointA, pointB) {                                                                      // 1058
      return pointA.node === pointB.node && pointA.offset === pointB.offset;                                           // 1059
    };                                                                                                                 // 1060
                                                                                                                       // 1061
    /**                                                                                                                // 1062
     * returns whether point is visible (can set cursor) or not.                                                       // 1063
     *                                                                                                                 // 1064
     * @param {BoundaryPoint} point                                                                                    // 1065
     * @return {Boolean}                                                                                               // 1066
     */                                                                                                                // 1067
    var isVisiblePoint = function (point) {                                                                            // 1068
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {                                     // 1069
        return true;                                                                                                   // 1070
      }                                                                                                                // 1071
                                                                                                                       // 1072
      var leftNode = point.node.childNodes[point.offset - 1];                                                          // 1073
      var rightNode = point.node.childNodes[point.offset];                                                             // 1074
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {                                      // 1075
        return true;                                                                                                   // 1076
      }                                                                                                                // 1077
                                                                                                                       // 1078
      return false;                                                                                                    // 1079
    };                                                                                                                 // 1080
                                                                                                                       // 1081
    /**                                                                                                                // 1082
     * @method prevPointUtil                                                                                           // 1083
     *                                                                                                                 // 1084
     * @param {BoundaryPoint} point                                                                                    // 1085
     * @param {Function} pred                                                                                          // 1086
     * @return {BoundaryPoint}                                                                                         // 1087
     */                                                                                                                // 1088
    var prevPointUntil = function (point, pred) {                                                                      // 1089
      while (point) {                                                                                                  // 1090
        if (pred(point)) {                                                                                             // 1091
          return point;                                                                                                // 1092
        }                                                                                                              // 1093
                                                                                                                       // 1094
        point = prevPoint(point);                                                                                      // 1095
      }                                                                                                                // 1096
                                                                                                                       // 1097
      return null;                                                                                                     // 1098
    };                                                                                                                 // 1099
                                                                                                                       // 1100
    /**                                                                                                                // 1101
     * @method nextPointUntil                                                                                          // 1102
     *                                                                                                                 // 1103
     * @param {BoundaryPoint} point                                                                                    // 1104
     * @param {Function} pred                                                                                          // 1105
     * @return {BoundaryPoint}                                                                                         // 1106
     */                                                                                                                // 1107
    var nextPointUntil = function (point, pred) {                                                                      // 1108
      while (point) {                                                                                                  // 1109
        if (pred(point)) {                                                                                             // 1110
          return point;                                                                                                // 1111
        }                                                                                                              // 1112
                                                                                                                       // 1113
        point = nextPoint(point);                                                                                      // 1114
      }                                                                                                                // 1115
                                                                                                                       // 1116
      return null;                                                                                                     // 1117
    };                                                                                                                 // 1118
                                                                                                                       // 1119
    /**                                                                                                                // 1120
     * returns whether point has character or not.                                                                     // 1121
     *                                                                                                                 // 1122
     * @param {Point} point                                                                                            // 1123
     * @return {Boolean}                                                                                               // 1124
     */                                                                                                                // 1125
    var isCharPoint = function (point) {                                                                               // 1126
      if (!isText(point.node)) {                                                                                       // 1127
        return false;                                                                                                  // 1128
      }                                                                                                                // 1129
                                                                                                                       // 1130
      var ch = point.node.nodeValue.charAt(point.offset - 1);                                                          // 1131
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);                                                                   // 1132
    };                                                                                                                 // 1133
                                                                                                                       // 1134
    /**                                                                                                                // 1135
     * @method walkPoint                                                                                               // 1136
     *                                                                                                                 // 1137
     * @param {BoundaryPoint} startPoint                                                                               // 1138
     * @param {BoundaryPoint} endPoint                                                                                 // 1139
     * @param {Function} handler                                                                                       // 1140
     * @param {Boolean} isSkipInnerOffset                                                                              // 1141
     */                                                                                                                // 1142
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {                                      // 1143
      var point = startPoint;                                                                                          // 1144
                                                                                                                       // 1145
      while (point) {                                                                                                  // 1146
        handler(point);                                                                                                // 1147
                                                                                                                       // 1148
        if (isSamePoint(point, endPoint)) {                                                                            // 1149
          break;                                                                                                       // 1150
        }                                                                                                              // 1151
                                                                                                                       // 1152
        var isSkipOffset = isSkipInnerOffset &&                                                                        // 1153
                           startPoint.node !== point.node &&                                                           // 1154
                           endPoint.node !== point.node;                                                               // 1155
        point = nextPoint(point, isSkipOffset);                                                                        // 1156
      }                                                                                                                // 1157
    };                                                                                                                 // 1158
                                                                                                                       // 1159
    /**                                                                                                                // 1160
     * @method makeOffsetPath                                                                                          // 1161
     *                                                                                                                 // 1162
     * return offsetPath(array of offset) from ancestor                                                                // 1163
     *                                                                                                                 // 1164
     * @param {Node} ancestor - ancestor node                                                                          // 1165
     * @param {Node} node                                                                                              // 1166
     */                                                                                                                // 1167
    var makeOffsetPath = function (ancestor, node) {                                                                   // 1168
      var ancestors = listAncestor(node, func.eq(ancestor));                                                           // 1169
      return $.map(ancestors, position).reverse();                                                                     // 1170
    };                                                                                                                 // 1171
                                                                                                                       // 1172
    /**                                                                                                                // 1173
     * @method fromOffsetPath                                                                                          // 1174
     *                                                                                                                 // 1175
     * return element from offsetPath(array of offset)                                                                 // 1176
     *                                                                                                                 // 1177
     * @param {Node} ancestor - ancestor node                                                                          // 1178
     * @param {array} offsets - offsetPath                                                                             // 1179
     */                                                                                                                // 1180
    var fromOffsetPath = function (ancestor, offsets) {                                                                // 1181
      var current = ancestor;                                                                                          // 1182
      for (var i = 0, len = offsets.length; i < len; i++) {                                                            // 1183
        if (current.childNodes.length <= offsets[i]) {                                                                 // 1184
          current = current.childNodes[current.childNodes.length - 1];                                                 // 1185
        } else {                                                                                                       // 1186
          current = current.childNodes[offsets[i]];                                                                    // 1187
        }                                                                                                              // 1188
      }                                                                                                                // 1189
      return current;                                                                                                  // 1190
    };                                                                                                                 // 1191
                                                                                                                       // 1192
    /**                                                                                                                // 1193
     * @method splitNode                                                                                               // 1194
     *                                                                                                                 // 1195
     * split element or #text                                                                                          // 1196
     *                                                                                                                 // 1197
     * @param {BoundaryPoint} point                                                                                    // 1198
     * @param {Object} [options]                                                                                       // 1199
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false                                              // 1200
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false                                                 // 1201
     * @return {Node} right node of boundaryPoint                                                                      // 1202
     */                                                                                                                // 1203
    var splitNode = function (point, options) {                                                                        // 1204
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;                                          // 1205
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;                                                // 1206
                                                                                                                       // 1207
      // edge case                                                                                                     // 1208
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {                                         // 1209
        if (isLeftEdgePoint(point)) {                                                                                  // 1210
          return point.node;                                                                                           // 1211
        } else if (isRightEdgePoint(point)) {                                                                          // 1212
          return point.node.nextSibling;                                                                               // 1213
        }                                                                                                              // 1214
      }                                                                                                                // 1215
                                                                                                                       // 1216
      // split #text                                                                                                   // 1217
      if (isText(point.node)) {                                                                                        // 1218
        return point.node.splitText(point.offset);                                                                     // 1219
      } else {                                                                                                         // 1220
        var childNode = point.node.childNodes[point.offset];                                                           // 1221
        var clone = insertAfter(point.node.cloneNode(false), point.node);                                              // 1222
        appendChildNodes(clone, listNext(childNode));                                                                  // 1223
                                                                                                                       // 1224
        if (!isSkipPaddingBlankHTML) {                                                                                 // 1225
          paddingBlankHTML(point.node);                                                                                // 1226
          paddingBlankHTML(clone);                                                                                     // 1227
        }                                                                                                              // 1228
                                                                                                                       // 1229
        return clone;                                                                                                  // 1230
      }                                                                                                                // 1231
    };                                                                                                                 // 1232
                                                                                                                       // 1233
    /**                                                                                                                // 1234
     * @method splitTree                                                                                               // 1235
     *                                                                                                                 // 1236
     * split tree by point                                                                                             // 1237
     *                                                                                                                 // 1238
     * @param {Node} root - split root                                                                                 // 1239
     * @param {BoundaryPoint} point                                                                                    // 1240
     * @param {Object} [options]                                                                                       // 1241
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false                                              // 1242
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false                                                 // 1243
     * @return {Node} right node of boundaryPoint                                                                      // 1244
     */                                                                                                                // 1245
    var splitTree = function (root, point, options) {                                                                  // 1246
      // ex) [#text, <span>, <p>]                                                                                      // 1247
      var ancestors = listAncestor(point.node, func.eq(root));                                                         // 1248
                                                                                                                       // 1249
      if (!ancestors.length) {                                                                                         // 1250
        return null;                                                                                                   // 1251
      } else if (ancestors.length === 1) {                                                                             // 1252
        return splitNode(point, options);                                                                              // 1253
      }                                                                                                                // 1254
                                                                                                                       // 1255
      return ancestors.reduce(function (node, parent) {                                                                // 1256
        if (node === point.node) {                                                                                     // 1257
          node = splitNode(point, options);                                                                            // 1258
        }                                                                                                              // 1259
                                                                                                                       // 1260
        return splitNode({                                                                                             // 1261
          node: parent,                                                                                                // 1262
          offset: node ? dom.position(node) : nodeLength(parent)                                                       // 1263
        }, options);                                                                                                   // 1264
      });                                                                                                              // 1265
    };                                                                                                                 // 1266
                                                                                                                       // 1267
    /**                                                                                                                // 1268
     * split point                                                                                                     // 1269
     *                                                                                                                 // 1270
     * @param {Point} point                                                                                            // 1271
     * @param {Boolean} isInline                                                                                       // 1272
     * @return {Object}                                                                                                // 1273
     */                                                                                                                // 1274
    var splitPoint = function (point, isInline) {                                                                      // 1275
      // find splitRoot, container                                                                                     // 1276
      //  - inline: splitRoot is a child of paragraph                                                                  // 1277
      //  - block: splitRoot is a child of bodyContainer                                                               // 1278
      var pred = isInline ? isPara : isBodyContainer;                                                                  // 1279
      var ancestors = listAncestor(point.node, pred);                                                                  // 1280
      var topAncestor = list.last(ancestors) || point.node;                                                            // 1281
                                                                                                                       // 1282
      var splitRoot, container;                                                                                        // 1283
      if (pred(topAncestor)) {                                                                                         // 1284
        splitRoot = ancestors[ancestors.length - 2];                                                                   // 1285
        container = topAncestor;                                                                                       // 1286
      } else {                                                                                                         // 1287
        splitRoot = topAncestor;                                                                                       // 1288
        container = splitRoot.parentNode;                                                                              // 1289
      }                                                                                                                // 1290
                                                                                                                       // 1291
      // if splitRoot is exists, split with splitTree                                                                  // 1292
      var pivot = splitRoot && splitTree(splitRoot, point, {                                                           // 1293
        isSkipPaddingBlankHTML: isInline,                                                                              // 1294
        isNotSplitEdgePoint: isInline                                                                                  // 1295
      });                                                                                                              // 1296
                                                                                                                       // 1297
      // if container is point.node, find pivot with point.offset                                                      // 1298
      if (!pivot && container === point.node) {                                                                        // 1299
        pivot = point.node.childNodes[point.offset];                                                                   // 1300
      }                                                                                                                // 1301
                                                                                                                       // 1302
      return {                                                                                                         // 1303
        rightNode: pivot,                                                                                              // 1304
        container: container                                                                                           // 1305
      };                                                                                                               // 1306
    };                                                                                                                 // 1307
                                                                                                                       // 1308
    var create = function (nodeName) {                                                                                 // 1309
      return document.createElement(nodeName);                                                                         // 1310
    };                                                                                                                 // 1311
                                                                                                                       // 1312
    var createText = function (text) {                                                                                 // 1313
      return document.createTextNode(text);                                                                            // 1314
    };                                                                                                                 // 1315
                                                                                                                       // 1316
    /**                                                                                                                // 1317
     * @method remove                                                                                                  // 1318
     *                                                                                                                 // 1319
     * remove node, (isRemoveChild: remove child or not)                                                               // 1320
     *                                                                                                                 // 1321
     * @param {Node} node                                                                                              // 1322
     * @param {Boolean} isRemoveChild                                                                                  // 1323
     */                                                                                                                // 1324
    var remove = function (node, isRemoveChild) {                                                                      // 1325
      if (!node || !node.parentNode) { return; }                                                                       // 1326
      if (node.removeNode) { return node.removeNode(isRemoveChild); }                                                  // 1327
                                                                                                                       // 1328
      var parent = node.parentNode;                                                                                    // 1329
      if (!isRemoveChild) {                                                                                            // 1330
        var nodes = [];                                                                                                // 1331
        var i, len;                                                                                                    // 1332
        for (i = 0, len = node.childNodes.length; i < len; i++) {                                                      // 1333
          nodes.push(node.childNodes[i]);                                                                              // 1334
        }                                                                                                              // 1335
                                                                                                                       // 1336
        for (i = 0, len = nodes.length; i < len; i++) {                                                                // 1337
          parent.insertBefore(nodes[i], node);                                                                         // 1338
        }                                                                                                              // 1339
      }                                                                                                                // 1340
                                                                                                                       // 1341
      parent.removeChild(node);                                                                                        // 1342
    };                                                                                                                 // 1343
                                                                                                                       // 1344
    /**                                                                                                                // 1345
     * @method removeWhile                                                                                             // 1346
     *                                                                                                                 // 1347
     * @param {Node} node                                                                                              // 1348
     * @param {Function} pred                                                                                          // 1349
     */                                                                                                                // 1350
    var removeWhile = function (node, pred) {                                                                          // 1351
      while (node) {                                                                                                   // 1352
        if (isEditable(node) || !pred(node)) {                                                                         // 1353
          break;                                                                                                       // 1354
        }                                                                                                              // 1355
                                                                                                                       // 1356
        var parent = node.parentNode;                                                                                  // 1357
        remove(node);                                                                                                  // 1358
        node = parent;                                                                                                 // 1359
      }                                                                                                                // 1360
    };                                                                                                                 // 1361
                                                                                                                       // 1362
    /**                                                                                                                // 1363
     * @method replace                                                                                                 // 1364
     *                                                                                                                 // 1365
     * replace node with provided nodeName                                                                             // 1366
     *                                                                                                                 // 1367
     * @param {Node} node                                                                                              // 1368
     * @param {String} nodeName                                                                                        // 1369
     * @return {Node} - new node                                                                                       // 1370
     */                                                                                                                // 1371
    var replace = function (node, nodeName) {                                                                          // 1372
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {                                                    // 1373
        return node;                                                                                                   // 1374
      }                                                                                                                // 1375
                                                                                                                       // 1376
      var newNode = create(nodeName);                                                                                  // 1377
                                                                                                                       // 1378
      if (node.style.cssText) {                                                                                        // 1379
        newNode.style.cssText = node.style.cssText;                                                                    // 1380
      }                                                                                                                // 1381
                                                                                                                       // 1382
      appendChildNodes(newNode, list.from(node.childNodes));                                                           // 1383
      insertAfter(newNode, node);                                                                                      // 1384
      remove(node);                                                                                                    // 1385
                                                                                                                       // 1386
      return newNode;                                                                                                  // 1387
    };                                                                                                                 // 1388
                                                                                                                       // 1389
    var isTextarea = makePredByNodeName('TEXTAREA');                                                                   // 1390
                                                                                                                       // 1391
    /**                                                                                                                // 1392
     * @param {jQuery} $node                                                                                           // 1393
     * @param {Boolean} [stripLinebreaks] - default: false                                                             // 1394
     */                                                                                                                // 1395
    var value = function ($node, stripLinebreaks) {                                                                    // 1396
      var val = isTextarea($node[0]) ? $node.val() : $node.html();                                                     // 1397
      if (stripLinebreaks) {                                                                                           // 1398
        return val.replace(/[\n\r]/g, '');                                                                             // 1399
      }                                                                                                                // 1400
      return val;                                                                                                      // 1401
    };                                                                                                                 // 1402
                                                                                                                       // 1403
    /**                                                                                                                // 1404
     * @method html                                                                                                    // 1405
     *                                                                                                                 // 1406
     * get the HTML contents of node                                                                                   // 1407
     *                                                                                                                 // 1408
     * @param {jQuery} $node                                                                                           // 1409
     * @param {Boolean} [isNewlineOnBlock]                                                                             // 1410
     */                                                                                                                // 1411
    var html = function ($node, isNewlineOnBlock) {                                                                    // 1412
      var markup = value($node);                                                                                       // 1413
                                                                                                                       // 1414
      if (isNewlineOnBlock) {                                                                                          // 1415
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;                                                        // 1416
        markup = markup.replace(regexTag, function (match, endSlash, name) {                                           // 1417
          name = name.toUpperCase();                                                                                   // 1418
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&                                     // 1419
                                       !!endSlash;                                                                     // 1420
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);                                    // 1421
                                                                                                                       // 1422
          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');                                        // 1423
        });                                                                                                            // 1424
        markup = $.trim(markup);                                                                                       // 1425
      }                                                                                                                // 1426
                                                                                                                       // 1427
      return markup;                                                                                                   // 1428
    };                                                                                                                 // 1429
                                                                                                                       // 1430
    return {                                                                                                           // 1431
      /** @property {String} NBSP_CHAR */                                                                              // 1432
      NBSP_CHAR: NBSP_CHAR,                                                                                            // 1433
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */                                                                   // 1434
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,                                                                      // 1435
      /** @property {String} blank */                                                                                  // 1436
      blank: blankHTML,                                                                                                // 1437
      /** @property {String} emptyPara */                                                                              // 1438
      emptyPara: '<p>' + blankHTML + '</p>',                                                                           // 1439
      makePredByNodeName: makePredByNodeName,                                                                          // 1440
      isEditable: isEditable,                                                                                          // 1441
      isControlSizing: isControlSizing,                                                                                // 1442
      buildLayoutInfo: buildLayoutInfo,                                                                                // 1443
      makeLayoutInfo: makeLayoutInfo,                                                                                  // 1444
      isText: isText,                                                                                                  // 1445
      isVoid: isVoid,                                                                                                  // 1446
      isPara: isPara,                                                                                                  // 1447
      isPurePara: isPurePara,                                                                                          // 1448
      isInline: isInline,                                                                                              // 1449
      isBlock: func.not(isInline),                                                                                     // 1450
      isBodyInline: isBodyInline,                                                                                      // 1451
      isBody: isBody,                                                                                                  // 1452
      isParaInline: isParaInline,                                                                                      // 1453
      isList: isList,                                                                                                  // 1454
      isTable: isTable,                                                                                                // 1455
      isCell: isCell,                                                                                                  // 1456
      isBlockquote: isBlockquote,                                                                                      // 1457
      isBodyContainer: isBodyContainer,                                                                                // 1458
      isAnchor: isAnchor,                                                                                              // 1459
      isDiv: makePredByNodeName('DIV'),                                                                                // 1460
      isLi: isLi,                                                                                                      // 1461
      isBR: makePredByNodeName('BR'),                                                                                  // 1462
      isSpan: makePredByNodeName('SPAN'),                                                                              // 1463
      isB: makePredByNodeName('B'),                                                                                    // 1464
      isU: makePredByNodeName('U'),                                                                                    // 1465
      isS: makePredByNodeName('S'),                                                                                    // 1466
      isI: makePredByNodeName('I'),                                                                                    // 1467
      isImg: makePredByNodeName('IMG'),                                                                                // 1468
      isTextarea: isTextarea,                                                                                          // 1469
      isEmpty: isEmpty,                                                                                                // 1470
      isEmptyAnchor: func.and(isAnchor, isEmpty),                                                                      // 1471
      isClosestSibling: isClosestSibling,                                                                              // 1472
      withClosestSiblings: withClosestSiblings,                                                                        // 1473
      nodeLength: nodeLength,                                                                                          // 1474
      isLeftEdgePoint: isLeftEdgePoint,                                                                                // 1475
      isRightEdgePoint: isRightEdgePoint,                                                                              // 1476
      isEdgePoint: isEdgePoint,                                                                                        // 1477
      isLeftEdgeOf: isLeftEdgeOf,                                                                                      // 1478
      isRightEdgeOf: isRightEdgeOf,                                                                                    // 1479
      prevPoint: prevPoint,                                                                                            // 1480
      nextPoint: nextPoint,                                                                                            // 1481
      isSamePoint: isSamePoint,                                                                                        // 1482
      isVisiblePoint: isVisiblePoint,                                                                                  // 1483
      prevPointUntil: prevPointUntil,                                                                                  // 1484
      nextPointUntil: nextPointUntil,                                                                                  // 1485
      isCharPoint: isCharPoint,                                                                                        // 1486
      walkPoint: walkPoint,                                                                                            // 1487
      ancestor: ancestor,                                                                                              // 1488
      singleChildAncestor: singleChildAncestor,                                                                        // 1489
      listAncestor: listAncestor,                                                                                      // 1490
      lastAncestor: lastAncestor,                                                                                      // 1491
      listNext: listNext,                                                                                              // 1492
      listPrev: listPrev,                                                                                              // 1493
      listDescendant: listDescendant,                                                                                  // 1494
      commonAncestor: commonAncestor,                                                                                  // 1495
      wrap: wrap,                                                                                                      // 1496
      insertAfter: insertAfter,                                                                                        // 1497
      appendChildNodes: appendChildNodes,                                                                              // 1498
      position: position,                                                                                              // 1499
      hasChildren: hasChildren,                                                                                        // 1500
      makeOffsetPath: makeOffsetPath,                                                                                  // 1501
      fromOffsetPath: fromOffsetPath,                                                                                  // 1502
      splitTree: splitTree,                                                                                            // 1503
      splitPoint: splitPoint,                                                                                          // 1504
      create: create,                                                                                                  // 1505
      createText: createText,                                                                                          // 1506
      remove: remove,                                                                                                  // 1507
      removeWhile: removeWhile,                                                                                        // 1508
      replace: replace,                                                                                                // 1509
      html: html,                                                                                                      // 1510
      value: value                                                                                                     // 1511
    };                                                                                                                 // 1512
  })();                                                                                                                // 1513
                                                                                                                       // 1514
                                                                                                                       // 1515
  var range = (function () {                                                                                           // 1516
                                                                                                                       // 1517
    /**                                                                                                                // 1518
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js                                        // 1519
     *                                                                                                                 // 1520
     * @param {TextRange} textRange                                                                                    // 1521
     * @param {Boolean} isStart                                                                                        // 1522
     * @return {BoundaryPoint}                                                                                         // 1523
     *                                                                                                                 // 1524
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx                                          // 1525
     */                                                                                                                // 1526
    var textRangeToPoint = function (textRange, isStart) {                                                             // 1527
      var container = textRange.parentElement(), offset;                                                               // 1528
                                                                                                                       // 1529
      var tester = document.body.createTextRange(), prevContainer;                                                     // 1530
      var childNodes = list.from(container.childNodes);                                                                // 1531
      for (offset = 0; offset < childNodes.length; offset++) {                                                         // 1532
        if (dom.isText(childNodes[offset])) {                                                                          // 1533
          continue;                                                                                                    // 1534
        }                                                                                                              // 1535
        tester.moveToElementText(childNodes[offset]);                                                                  // 1536
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {                                                 // 1537
          break;                                                                                                       // 1538
        }                                                                                                              // 1539
        prevContainer = childNodes[offset];                                                                            // 1540
      }                                                                                                                // 1541
                                                                                                                       // 1542
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {                                                        // 1543
        var textRangeStart = document.body.createTextRange(), curTextNode = null;                                      // 1544
        textRangeStart.moveToElementText(prevContainer || container);                                                  // 1545
        textRangeStart.collapse(!prevContainer);                                                                       // 1546
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;                                // 1547
                                                                                                                       // 1548
        var pointTester = textRange.duplicate();                                                                       // 1549
        pointTester.setEndPoint('StartToStart', textRangeStart);                                                       // 1550
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;                                                // 1551
                                                                                                                       // 1552
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {                                  // 1553
          textCount -= curTextNode.nodeValue.length;                                                                   // 1554
          curTextNode = curTextNode.nextSibling;                                                                       // 1555
        }                                                                                                              // 1556
                                                                                                                       // 1557
        /* jshint ignore:start */                                                                                      // 1558
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack                             // 1559
        /* jshint ignore:end */                                                                                        // 1560
                                                                                                                       // 1561
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&                               // 1562
            textCount === curTextNode.nodeValue.length) {                                                              // 1563
          textCount -= curTextNode.nodeValue.length;                                                                   // 1564
          curTextNode = curTextNode.nextSibling;                                                                       // 1565
        }                                                                                                              // 1566
                                                                                                                       // 1567
        container = curTextNode;                                                                                       // 1568
        offset = textCount;                                                                                            // 1569
      }                                                                                                                // 1570
                                                                                                                       // 1571
      return {                                                                                                         // 1572
        cont: container,                                                                                               // 1573
        offset: offset                                                                                                 // 1574
      };                                                                                                               // 1575
    };                                                                                                                 // 1576
                                                                                                                       // 1577
    /**                                                                                                                // 1578
     * return TextRange from boundary point (inspired by google closure-library)                                       // 1579
     * @param {BoundaryPoint} point                                                                                    // 1580
     * @return {TextRange}                                                                                             // 1581
     */                                                                                                                // 1582
    var pointToTextRange = function (point) {                                                                          // 1583
      var textRangeInfo = function (container, offset) {                                                               // 1584
        var node, isCollapseToStart;                                                                                   // 1585
                                                                                                                       // 1586
        if (dom.isText(container)) {                                                                                   // 1587
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));                                           // 1588
          var prevContainer = list.last(prevTextNodes).previousSibling;                                                // 1589
          node =  prevContainer || container.parentNode;                                                               // 1590
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);                                                // 1591
          isCollapseToStart = !prevContainer;                                                                          // 1592
        } else {                                                                                                       // 1593
          node = container.childNodes[offset] || container;                                                            // 1594
          if (dom.isText(node)) {                                                                                      // 1595
            return textRangeInfo(node, 0);                                                                             // 1596
          }                                                                                                            // 1597
                                                                                                                       // 1598
          offset = 0;                                                                                                  // 1599
          isCollapseToStart = false;                                                                                   // 1600
        }                                                                                                              // 1601
                                                                                                                       // 1602
        return {                                                                                                       // 1603
          node: node,                                                                                                  // 1604
          collapseToStart: isCollapseToStart,                                                                          // 1605
          offset: offset                                                                                               // 1606
        };                                                                                                             // 1607
      };                                                                                                               // 1608
                                                                                                                       // 1609
      var textRange = document.body.createTextRange();                                                                 // 1610
      var info = textRangeInfo(point.node, point.offset);                                                              // 1611
                                                                                                                       // 1612
      textRange.moveToElementText(info.node);                                                                          // 1613
      textRange.collapse(info.collapseToStart);                                                                        // 1614
      textRange.moveStart('character', info.offset);                                                                   // 1615
      return textRange;                                                                                                // 1616
    };                                                                                                                 // 1617
                                                                                                                       // 1618
    /**                                                                                                                // 1619
     * Wrapped Range                                                                                                   // 1620
     *                                                                                                                 // 1621
     * @constructor                                                                                                    // 1622
     * @param {Node} sc - start container                                                                              // 1623
     * @param {Number} so - start offset                                                                               // 1624
     * @param {Node} ec - end container                                                                                // 1625
     * @param {Number} eo - end offset                                                                                 // 1626
     */                                                                                                                // 1627
    var WrappedRange = function (sc, so, ec, eo) {                                                                     // 1628
      this.sc = sc;                                                                                                    // 1629
      this.so = so;                                                                                                    // 1630
      this.ec = ec;                                                                                                    // 1631
      this.eo = eo;                                                                                                    // 1632
                                                                                                                       // 1633
      // nativeRange: get nativeRange from sc, so, ec, eo                                                              // 1634
      var nativeRange = function () {                                                                                  // 1635
        if (agent.isW3CRangeSupport) {                                                                                 // 1636
          var w3cRange = document.createRange();                                                                       // 1637
          w3cRange.setStart(sc, so);                                                                                   // 1638
          w3cRange.setEnd(ec, eo);                                                                                     // 1639
                                                                                                                       // 1640
          return w3cRange;                                                                                             // 1641
        } else {                                                                                                       // 1642
          var textRange = pointToTextRange({                                                                           // 1643
            node: sc,                                                                                                  // 1644
            offset: so                                                                                                 // 1645
          });                                                                                                          // 1646
                                                                                                                       // 1647
          textRange.setEndPoint('EndToEnd', pointToTextRange({                                                         // 1648
            node: ec,                                                                                                  // 1649
            offset: eo                                                                                                 // 1650
          }));                                                                                                         // 1651
                                                                                                                       // 1652
          return textRange;                                                                                            // 1653
        }                                                                                                              // 1654
      };                                                                                                               // 1655
                                                                                                                       // 1656
      this.getPoints = function () {                                                                                   // 1657
        return {                                                                                                       // 1658
          sc: sc,                                                                                                      // 1659
          so: so,                                                                                                      // 1660
          ec: ec,                                                                                                      // 1661
          eo: eo                                                                                                       // 1662
        };                                                                                                             // 1663
      };                                                                                                               // 1664
                                                                                                                       // 1665
      this.getStartPoint = function () {                                                                               // 1666
        return {                                                                                                       // 1667
          node: sc,                                                                                                    // 1668
          offset: so                                                                                                   // 1669
        };                                                                                                             // 1670
      };                                                                                                               // 1671
                                                                                                                       // 1672
      this.getEndPoint = function () {                                                                                 // 1673
        return {                                                                                                       // 1674
          node: ec,                                                                                                    // 1675
          offset: eo                                                                                                   // 1676
        };                                                                                                             // 1677
      };                                                                                                               // 1678
                                                                                                                       // 1679
      /**                                                                                                              // 1680
       * select update visible range                                                                                   // 1681
       */                                                                                                              // 1682
      this.select = function () {                                                                                      // 1683
        var nativeRng = nativeRange();                                                                                 // 1684
        if (agent.isW3CRangeSupport) {                                                                                 // 1685
          var selection = document.getSelection();                                                                     // 1686
          if (selection.rangeCount > 0) {                                                                              // 1687
            selection.removeAllRanges();                                                                               // 1688
          }                                                                                                            // 1689
          selection.addRange(nativeRng);                                                                               // 1690
        } else {                                                                                                       // 1691
          nativeRng.select();                                                                                          // 1692
        }                                                                                                              // 1693
                                                                                                                       // 1694
        return this;                                                                                                   // 1695
      };                                                                                                               // 1696
                                                                                                                       // 1697
      /**                                                                                                              // 1698
       * Moves the scrollbar to start container(sc) of current range                                                   // 1699
       *                                                                                                               // 1700
       * @return {WrappedRange}                                                                                        // 1701
       */                                                                                                              // 1702
      this.scrollIntoView = function () {                                                                              // 1703
        if (this.sc.scrollIntoView) {                                                                                  // 1704
          this.sc.scrollIntoView(false);                                                                               // 1705
        }                                                                                                              // 1706
                                                                                                                       // 1707
        return this;                                                                                                   // 1708
      };                                                                                                               // 1709
                                                                                                                       // 1710
      /**                                                                                                              // 1711
       * set a focus into start container of current range                                                             // 1712
       *                                                                                                               // 1713
       * @return {WrappedRange}                                                                                        // 1714
       */                                                                                                              // 1715
      this.focus = function () {                                                                                       // 1716
        this.sc.focus();                                                                                               // 1717
                                                                                                                       // 1718
        return this;                                                                                                   // 1719
      };                                                                                                               // 1720
                                                                                                                       // 1721
      /**                                                                                                              // 1722
       * @return {WrappedRange}                                                                                        // 1723
       */                                                                                                              // 1724
      this.normalize = function () {                                                                                   // 1725
                                                                                                                       // 1726
        /**                                                                                                            // 1727
         * @param {BoundaryPoint} point                                                                                // 1728
         * @return {BoundaryPoint}                                                                                     // 1729
         */                                                                                                            // 1730
        var getVisiblePoint = function (point) {                                                                       // 1731
          if (!dom.isVisiblePoint(point)) {                                                                            // 1732
            if (dom.isLeftEdgePoint(point)) {                                                                          // 1733
              point = dom.nextPointUntil(point, dom.isVisiblePoint);                                                   // 1734
            } else {                                                                                                   // 1735
              point = dom.prevPointUntil(point, dom.isVisiblePoint);                                                   // 1736
            }                                                                                                          // 1737
          }                                                                                                            // 1738
          return point;                                                                                                // 1739
        };                                                                                                             // 1740
                                                                                                                       // 1741
        var startPoint = getVisiblePoint(this.getStartPoint());                                                        // 1742
        var endPoint = getVisiblePoint(this.getEndPoint());                                                            // 1743
                                                                                                                       // 1744
        return new WrappedRange(                                                                                       // 1745
          startPoint.node,                                                                                             // 1746
          startPoint.offset,                                                                                           // 1747
          endPoint.node,                                                                                               // 1748
          endPoint.offset                                                                                              // 1749
        );                                                                                                             // 1750
      };                                                                                                               // 1751
                                                                                                                       // 1752
      /**                                                                                                              // 1753
       * returns matched nodes on range                                                                                // 1754
       *                                                                                                               // 1755
       * @param {Function} [pred] - predicate function                                                                 // 1756
       * @param {Object} [options]                                                                                     // 1757
       * @param {Boolean} [options.includeAncestor]                                                                    // 1758
       * @param {Boolean} [options.fullyContains]                                                                      // 1759
       * @return {Node[]}                                                                                              // 1760
       */                                                                                                              // 1761
      this.nodes = function (pred, options) {                                                                          // 1762
        pred = pred || func.ok;                                                                                        // 1763
                                                                                                                       // 1764
        var includeAncestor = options && options.includeAncestor;                                                      // 1765
        var fullyContains = options && options.fullyContains;                                                          // 1766
                                                                                                                       // 1767
        // TODO compare points and sort                                                                                // 1768
        var startPoint = this.getStartPoint();                                                                         // 1769
        var endPoint = this.getEndPoint();                                                                             // 1770
                                                                                                                       // 1771
        var nodes = [];                                                                                                // 1772
        var leftEdgeNodes = [];                                                                                        // 1773
                                                                                                                       // 1774
        dom.walkPoint(startPoint, endPoint, function (point) {                                                         // 1775
          if (dom.isEditable(point.node)) {                                                                            // 1776
            return;                                                                                                    // 1777
          }                                                                                                            // 1778
                                                                                                                       // 1779
          var node;                                                                                                    // 1780
          if (fullyContains) {                                                                                         // 1781
            if (dom.isLeftEdgePoint(point)) {                                                                          // 1782
              leftEdgeNodes.push(point.node);                                                                          // 1783
            }                                                                                                          // 1784
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {                             // 1785
              node = point.node;                                                                                       // 1786
            }                                                                                                          // 1787
          } else if (includeAncestor) {                                                                                // 1788
            node = dom.ancestor(point.node, pred);                                                                     // 1789
          } else {                                                                                                     // 1790
            node = point.node;                                                                                         // 1791
          }                                                                                                            // 1792
                                                                                                                       // 1793
          if (node && pred(node)) {                                                                                    // 1794
            nodes.push(node);                                                                                          // 1795
          }                                                                                                            // 1796
        }, true);                                                                                                      // 1797
                                                                                                                       // 1798
        return list.unique(nodes);                                                                                     // 1799
      };                                                                                                               // 1800
                                                                                                                       // 1801
      /**                                                                                                              // 1802
       * returns commonAncestor of range                                                                               // 1803
       * @return {Element} - commonAncestor                                                                            // 1804
       */                                                                                                              // 1805
      this.commonAncestor = function () {                                                                              // 1806
        return dom.commonAncestor(sc, ec);                                                                             // 1807
      };                                                                                                               // 1808
                                                                                                                       // 1809
      /**                                                                                                              // 1810
       * returns expanded range by pred                                                                                // 1811
       *                                                                                                               // 1812
       * @param {Function} pred - predicate function                                                                   // 1813
       * @return {WrappedRange}                                                                                        // 1814
       */                                                                                                              // 1815
      this.expand = function (pred) {                                                                                  // 1816
        var startAncestor = dom.ancestor(sc, pred);                                                                    // 1817
        var endAncestor = dom.ancestor(ec, pred);                                                                      // 1818
                                                                                                                       // 1819
        if (!startAncestor && !endAncestor) {                                                                          // 1820
          return new WrappedRange(sc, so, ec, eo);                                                                     // 1821
        }                                                                                                              // 1822
                                                                                                                       // 1823
        var boundaryPoints = this.getPoints();                                                                         // 1824
                                                                                                                       // 1825
        if (startAncestor) {                                                                                           // 1826
          boundaryPoints.sc = startAncestor;                                                                           // 1827
          boundaryPoints.so = 0;                                                                                       // 1828
        }                                                                                                              // 1829
                                                                                                                       // 1830
        if (endAncestor) {                                                                                             // 1831
          boundaryPoints.ec = endAncestor;                                                                             // 1832
          boundaryPoints.eo = dom.nodeLength(endAncestor);                                                             // 1833
        }                                                                                                              // 1834
                                                                                                                       // 1835
        return new WrappedRange(                                                                                       // 1836
          boundaryPoints.sc,                                                                                           // 1837
          boundaryPoints.so,                                                                                           // 1838
          boundaryPoints.ec,                                                                                           // 1839
          boundaryPoints.eo                                                                                            // 1840
        );                                                                                                             // 1841
      };                                                                                                               // 1842
                                                                                                                       // 1843
      /**                                                                                                              // 1844
       * @param {Boolean} isCollapseToStart                                                                            // 1845
       * @return {WrappedRange}                                                                                        // 1846
       */                                                                                                              // 1847
      this.collapse = function (isCollapseToStart) {                                                                   // 1848
        if (isCollapseToStart) {                                                                                       // 1849
          return new WrappedRange(sc, so, sc, so);                                                                     // 1850
        } else {                                                                                                       // 1851
          return new WrappedRange(ec, eo, ec, eo);                                                                     // 1852
        }                                                                                                              // 1853
      };                                                                                                               // 1854
                                                                                                                       // 1855
      /**                                                                                                              // 1856
       * splitText on range                                                                                            // 1857
       */                                                                                                              // 1858
      this.splitText = function () {                                                                                   // 1859
        var isSameContainer = sc === ec;                                                                               // 1860
        var boundaryPoints = this.getPoints();                                                                         // 1861
                                                                                                                       // 1862
        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {                                                  // 1863
          ec.splitText(eo);                                                                                            // 1864
        }                                                                                                              // 1865
                                                                                                                       // 1866
        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {                                                // 1867
          boundaryPoints.sc = sc.splitText(so);                                                                        // 1868
          boundaryPoints.so = 0;                                                                                       // 1869
                                                                                                                       // 1870
          if (isSameContainer) {                                                                                       // 1871
            boundaryPoints.ec = boundaryPoints.sc;                                                                     // 1872
            boundaryPoints.eo = eo - so;                                                                               // 1873
          }                                                                                                            // 1874
        }                                                                                                              // 1875
                                                                                                                       // 1876
        return new WrappedRange(                                                                                       // 1877
          boundaryPoints.sc,                                                                                           // 1878
          boundaryPoints.so,                                                                                           // 1879
          boundaryPoints.ec,                                                                                           // 1880
          boundaryPoints.eo                                                                                            // 1881
        );                                                                                                             // 1882
      };                                                                                                               // 1883
                                                                                                                       // 1884
      /**                                                                                                              // 1885
       * delete contents on range                                                                                      // 1886
       * @return {WrappedRange}                                                                                        // 1887
       */                                                                                                              // 1888
      this.deleteContents = function () {                                                                              // 1889
        if (this.isCollapsed()) {                                                                                      // 1890
          return this;                                                                                                 // 1891
        }                                                                                                              // 1892
                                                                                                                       // 1893
        var rng = this.splitText();                                                                                    // 1894
        var nodes = rng.nodes(null, {                                                                                  // 1895
          fullyContains: true                                                                                          // 1896
        });                                                                                                            // 1897
                                                                                                                       // 1898
        // find new cursor point                                                                                       // 1899
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {                                         // 1900
          return !list.contains(nodes, point.node);                                                                    // 1901
        });                                                                                                            // 1902
                                                                                                                       // 1903
        var emptyParents = [];                                                                                         // 1904
        $.each(nodes, function (idx, node) {                                                                           // 1905
          // find empty parents                                                                                        // 1906
          var parent = node.parentNode;                                                                                // 1907
          if (point.node !== parent && dom.nodeLength(parent) === 1) {                                                 // 1908
            emptyParents.push(parent);                                                                                 // 1909
          }                                                                                                            // 1910
          dom.remove(node, false);                                                                                     // 1911
        });                                                                                                            // 1912
                                                                                                                       // 1913
        // remove empty parents                                                                                        // 1914
        $.each(emptyParents, function (idx, node) {                                                                    // 1915
          dom.remove(node, false);                                                                                     // 1916
        });                                                                                                            // 1917
                                                                                                                       // 1918
        return new WrappedRange(                                                                                       // 1919
          point.node,                                                                                                  // 1920
          point.offset,                                                                                                // 1921
          point.node,                                                                                                  // 1922
          point.offset                                                                                                 // 1923
        ).normalize();                                                                                                 // 1924
      };                                                                                                               // 1925
                                                                                                                       // 1926
      /**                                                                                                              // 1927
       * makeIsOn: return isOn(pred) function                                                                          // 1928
       */                                                                                                              // 1929
      var makeIsOn = function (pred) {                                                                                 // 1930
        return function () {                                                                                           // 1931
          var ancestor = dom.ancestor(sc, pred);                                                                       // 1932
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));                                                  // 1933
        };                                                                                                             // 1934
      };                                                                                                               // 1935
                                                                                                                       // 1936
      // isOnEditable: judge whether range is on editable or not                                                       // 1937
      this.isOnEditable = makeIsOn(dom.isEditable);                                                                    // 1938
      // isOnList: judge whether range is on list node or not                                                          // 1939
      this.isOnList = makeIsOn(dom.isList);                                                                            // 1940
      // isOnAnchor: judge whether range is on anchor node or not                                                      // 1941
      this.isOnAnchor = makeIsOn(dom.isAnchor);                                                                        // 1942
      // isOnAnchor: judge whether range is on cell node or not                                                        // 1943
      this.isOnCell = makeIsOn(dom.isCell);                                                                            // 1944
                                                                                                                       // 1945
      /**                                                                                                              // 1946
       * @param {Function} pred                                                                                        // 1947
       * @return {Boolean}                                                                                             // 1948
       */                                                                                                              // 1949
      this.isLeftEdgeOf = function (pred) {                                                                            // 1950
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {                                                              // 1951
          return false;                                                                                                // 1952
        }                                                                                                              // 1953
                                                                                                                       // 1954
        var node = dom.ancestor(this.sc, pred);                                                                        // 1955
        return node && dom.isLeftEdgeOf(this.sc, node);                                                                // 1956
      };                                                                                                               // 1957
                                                                                                                       // 1958
      /**                                                                                                              // 1959
       * returns whether range was collapsed or not                                                                    // 1960
       */                                                                                                              // 1961
      this.isCollapsed = function () {                                                                                 // 1962
        return sc === ec && so === eo;                                                                                 // 1963
      };                                                                                                               // 1964
                                                                                                                       // 1965
      /**                                                                                                              // 1966
       * wrap inline nodes which children of body with paragraph                                                       // 1967
       *                                                                                                               // 1968
       * @return {WrappedRange}                                                                                        // 1969
       */                                                                                                              // 1970
      this.wrapBodyInlineWithPara = function () {                                                                      // 1971
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {                                                              // 1972
          sc.innerHTML = dom.emptyPara;                                                                                // 1973
          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);                                                 // 1974
        }                                                                                                              // 1975
                                                                                                                       // 1976
        if (dom.isParaInline(sc) || dom.isPara(sc)) {                                                                  // 1977
          return this.normalize();                                                                                     // 1978
        }                                                                                                              // 1979
                                                                                                                       // 1980
        // find inline top ancestor                                                                                    // 1981
        var topAncestor;                                                                                               // 1982
        if (dom.isInline(sc)) {                                                                                        // 1983
          var ancestors = dom.listAncestor(sc, func.not(dom.isInline));                                                // 1984
          topAncestor = list.last(ancestors);                                                                          // 1985
          if (!dom.isInline(topAncestor)) {                                                                            // 1986
            topAncestor = ancestors[ancestors.length - 2] || sc.childNodes[so];                                        // 1987
          }                                                                                                            // 1988
        } else {                                                                                                       // 1989
          topAncestor = sc.childNodes[so > 0 ? so - 1 : 0];                                                            // 1990
        }                                                                                                              // 1991
                                                                                                                       // 1992
        // siblings not in paragraph                                                                                   // 1993
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();                                    // 1994
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));               // 1995
                                                                                                                       // 1996
        // wrap with paragraph                                                                                         // 1997
        if (inlineSiblings.length) {                                                                                   // 1998
          var para = dom.wrap(list.head(inlineSiblings), 'p');                                                         // 1999
          dom.appendChildNodes(para, list.tail(inlineSiblings));                                                       // 2000
        }                                                                                                              // 2001
                                                                                                                       // 2002
        return this.normalize();                                                                                       // 2003
      };                                                                                                               // 2004
                                                                                                                       // 2005
      /**                                                                                                              // 2006
       * insert node at current cursor                                                                                 // 2007
       *                                                                                                               // 2008
       * @param {Node} node                                                                                            // 2009
       * @return {Node}                                                                                                // 2010
       */                                                                                                              // 2011
      this.insertNode = function (node) {                                                                              // 2012
        var rng = this.wrapBodyInlineWithPara().deleteContents();                                                      // 2013
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));                                            // 2014
                                                                                                                       // 2015
        if (info.rightNode) {                                                                                          // 2016
          info.rightNode.parentNode.insertBefore(node, info.rightNode);                                                // 2017
        } else {                                                                                                       // 2018
          info.container.appendChild(node);                                                                            // 2019
        }                                                                                                              // 2020
                                                                                                                       // 2021
        return node;                                                                                                   // 2022
      };                                                                                                               // 2023
                                                                                                                       // 2024
      /**                                                                                                              // 2025
       * insert html at current cursor                                                                                 // 2026
       */                                                                                                              // 2027
      this.pasteHTML = function (markup) {                                                                             // 2028
        var self = this;                                                                                               // 2029
        var contentsContainer = $('<div></div>').html(markup)[0];                                                      // 2030
        var childNodes = list.from(contentsContainer.childNodes);                                                      // 2031
                                                                                                                       // 2032
        this.wrapBodyInlineWithPara().deleteContents();                                                                // 2033
                                                                                                                       // 2034
        return $.map(childNodes.reverse(), function (childNode) {                                                      // 2035
          return self.insertNode(childNode);                                                                           // 2036
        }).reverse();                                                                                                  // 2037
      };                                                                                                               // 2038
                                                                                                                       // 2039
      /**                                                                                                              // 2040
       * returns text in range                                                                                         // 2041
       *                                                                                                               // 2042
       * @return {String}                                                                                              // 2043
       */                                                                                                              // 2044
      this.toString = function () {                                                                                    // 2045
        var nativeRng = nativeRange();                                                                                 // 2046
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;                                        // 2047
      };                                                                                                               // 2048
                                                                                                                       // 2049
      /**                                                                                                              // 2050
       * returns range for word before cursor                                                                          // 2051
       *                                                                                                               // 2052
       * @param {Boolean} [findAfter] - find after cursor, default: false                                              // 2053
       * @return {WrappedRange}                                                                                        // 2054
       */                                                                                                              // 2055
      this.getWordRange = function (findAfter) {                                                                       // 2056
        var endPoint = this.getEndPoint();                                                                             // 2057
                                                                                                                       // 2058
        if (!dom.isCharPoint(endPoint)) {                                                                              // 2059
          return this;                                                                                                 // 2060
        }                                                                                                              // 2061
                                                                                                                       // 2062
        var startPoint = dom.prevPointUntil(endPoint, function (point) {                                               // 2063
          return !dom.isCharPoint(point);                                                                              // 2064
        });                                                                                                            // 2065
                                                                                                                       // 2066
        if (findAfter) {                                                                                               // 2067
          endPoint = dom.nextPointUntil(endPoint, function (point) {                                                   // 2068
            return !dom.isCharPoint(point);                                                                            // 2069
          });                                                                                                          // 2070
        }                                                                                                              // 2071
                                                                                                                       // 2072
        return new WrappedRange(                                                                                       // 2073
          startPoint.node,                                                                                             // 2074
          startPoint.offset,                                                                                           // 2075
          endPoint.node,                                                                                               // 2076
          endPoint.offset                                                                                              // 2077
        );                                                                                                             // 2078
      };                                                                                                               // 2079
                                                                                                                       // 2080
      /**                                                                                                              // 2081
       * create offsetPath bookmark                                                                                    // 2082
       *                                                                                                               // 2083
       * @param {Node} editable                                                                                        // 2084
       */                                                                                                              // 2085
      this.bookmark = function (editable) {                                                                            // 2086
        return {                                                                                                       // 2087
          s: {                                                                                                         // 2088
            path: dom.makeOffsetPath(editable, sc),                                                                    // 2089
            offset: so                                                                                                 // 2090
          },                                                                                                           // 2091
          e: {                                                                                                         // 2092
            path: dom.makeOffsetPath(editable, ec),                                                                    // 2093
            offset: eo                                                                                                 // 2094
          }                                                                                                            // 2095
        };                                                                                                             // 2096
      };                                                                                                               // 2097
                                                                                                                       // 2098
      /**                                                                                                              // 2099
       * create offsetPath bookmark base on paragraph                                                                  // 2100
       *                                                                                                               // 2101
       * @param {Node[]} paras                                                                                         // 2102
       */                                                                                                              // 2103
      this.paraBookmark = function (paras) {                                                                           // 2104
        return {                                                                                                       // 2105
          s: {                                                                                                         // 2106
            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),                                                 // 2107
            offset: so                                                                                                 // 2108
          },                                                                                                           // 2109
          e: {                                                                                                         // 2110
            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),                                                 // 2111
            offset: eo                                                                                                 // 2112
          }                                                                                                            // 2113
        };                                                                                                             // 2114
      };                                                                                                               // 2115
                                                                                                                       // 2116
      /**                                                                                                              // 2117
       * getClientRects                                                                                                // 2118
       * @return {Rect[]}                                                                                              // 2119
       */                                                                                                              // 2120
      this.getClientRects = function () {                                                                              // 2121
        var nativeRng = nativeRange();                                                                                 // 2122
        return nativeRng.getClientRects();                                                                             // 2123
      };                                                                                                               // 2124
    };                                                                                                                 // 2125
                                                                                                                       // 2126
  /**                                                                                                                  // 2127
   * @class core.range                                                                                                 // 2128
   *                                                                                                                   // 2129
   * Data structure                                                                                                    // 2130
   *  * BoundaryPoint: a point of dom tree                                                                             // 2131
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range                         // 2132
   *                                                                                                                   // 2133
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position                        // 2134
   *                                                                                                                   // 2135
   * @singleton                                                                                                        // 2136
   * @alternateClassName range                                                                                         // 2137
   */                                                                                                                  // 2138
    return {                                                                                                           // 2139
      /**                                                                                                              // 2140
       * @method                                                                                                       // 2141
       *                                                                                                               // 2142
       * create Range Object From arguments or Browser Selection                                                       // 2143
       *                                                                                                               // 2144
       * @param {Node} sc - start container                                                                            // 2145
       * @param {Number} so - start offset                                                                             // 2146
       * @param {Node} ec - end container                                                                              // 2147
       * @param {Number} eo - end offset                                                                               // 2148
       * @return {WrappedRange}                                                                                        // 2149
       */                                                                                                              // 2150
      create : function (sc, so, ec, eo) {                                                                             // 2151
        if (!arguments.length) { // from Browser Selection                                                             // 2152
          if (agent.isW3CRangeSupport) {                                                                               // 2153
            var selection = document.getSelection();                                                                   // 2154
            if (selection.rangeCount === 0) {                                                                          // 2155
              return null;                                                                                             // 2156
            } else if (dom.isBody(selection.anchorNode)) {                                                             // 2157
              // Firefox: returns entire body as range on initialization. We won't never need it.                      // 2158
              return null;                                                                                             // 2159
            }                                                                                                          // 2160
                                                                                                                       // 2161
            var nativeRng = selection.getRangeAt(0);                                                                   // 2162
            sc = nativeRng.startContainer;                                                                             // 2163
            so = nativeRng.startOffset;                                                                                // 2164
            ec = nativeRng.endContainer;                                                                               // 2165
            eo = nativeRng.endOffset;                                                                                  // 2166
          } else { // IE8: TextRange                                                                                   // 2167
            var textRange = document.selection.createRange();                                                          // 2168
            var textRangeEnd = textRange.duplicate();                                                                  // 2169
            textRangeEnd.collapse(false);                                                                              // 2170
            var textRangeStart = textRange;                                                                            // 2171
            textRangeStart.collapse(true);                                                                             // 2172
                                                                                                                       // 2173
            var startPoint = textRangeToPoint(textRangeStart, true),                                                   // 2174
            endPoint = textRangeToPoint(textRangeEnd, false);                                                          // 2175
                                                                                                                       // 2176
            // same visible point case: range was collapsed.                                                           // 2177
            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&                                      // 2178
                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&                                     // 2179
                endPoint.node.nextSibling === startPoint.node) {                                                       // 2180
              startPoint = endPoint;                                                                                   // 2181
            }                                                                                                          // 2182
                                                                                                                       // 2183
            sc = startPoint.cont;                                                                                      // 2184
            so = startPoint.offset;                                                                                    // 2185
            ec = endPoint.cont;                                                                                        // 2186
            eo = endPoint.offset;                                                                                      // 2187
          }                                                                                                            // 2188
        } else if (arguments.length === 2) { //collapsed                                                               // 2189
          ec = sc;                                                                                                     // 2190
          eo = so;                                                                                                     // 2191
        }                                                                                                              // 2192
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2193
      },                                                                                                               // 2194
                                                                                                                       // 2195
      /**                                                                                                              // 2196
       * @method                                                                                                       // 2197
       *                                                                                                               // 2198
       * create WrappedRange from node                                                                                 // 2199
       *                                                                                                               // 2200
       * @param {Node} node                                                                                            // 2201
       * @return {WrappedRange}                                                                                        // 2202
       */                                                                                                              // 2203
      createFromNode: function (node) {                                                                                // 2204
        var sc = node;                                                                                                 // 2205
        var so = 0;                                                                                                    // 2206
        var ec = node;                                                                                                 // 2207
        var eo = dom.nodeLength(ec);                                                                                   // 2208
                                                                                                                       // 2209
        // browsers can't target a picture or void node                                                                // 2210
        if (dom.isVoid(sc)) {                                                                                          // 2211
          so = dom.listPrev(sc).length - 1;                                                                            // 2212
          sc = sc.parentNode;                                                                                          // 2213
        }                                                                                                              // 2214
        if (dom.isBR(ec)) {                                                                                            // 2215
          eo = dom.listPrev(ec).length - 1;                                                                            // 2216
          ec = ec.parentNode;                                                                                          // 2217
        } else if (dom.isVoid(ec)) {                                                                                   // 2218
          eo = dom.listPrev(ec).length;                                                                                // 2219
          ec = ec.parentNode;                                                                                          // 2220
        }                                                                                                              // 2221
                                                                                                                       // 2222
        return this.create(sc, so, ec, eo);                                                                            // 2223
      },                                                                                                               // 2224
                                                                                                                       // 2225
      /**                                                                                                              // 2226
       * @method                                                                                                       // 2227
       *                                                                                                               // 2228
       * create WrappedRange from bookmark                                                                             // 2229
       *                                                                                                               // 2230
       * @param {Node} editable                                                                                        // 2231
       * @param {Object} bookmark                                                                                      // 2232
       * @return {WrappedRange}                                                                                        // 2233
       */                                                                                                              // 2234
      createFromBookmark : function (editable, bookmark) {                                                             // 2235
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);                                                        // 2236
        var so = bookmark.s.offset;                                                                                    // 2237
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);                                                        // 2238
        var eo = bookmark.e.offset;                                                                                    // 2239
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2240
      },                                                                                                               // 2241
                                                                                                                       // 2242
      /**                                                                                                              // 2243
       * @method                                                                                                       // 2244
       *                                                                                                               // 2245
       * create WrappedRange from paraBookmark                                                                         // 2246
       *                                                                                                               // 2247
       * @param {Object} bookmark                                                                                      // 2248
       * @param {Node[]} paras                                                                                         // 2249
       * @return {WrappedRange}                                                                                        // 2250
       */                                                                                                              // 2251
      createFromParaBookmark: function (bookmark, paras) {                                                             // 2252
        var so = bookmark.s.offset;                                                                                    // 2253
        var eo = bookmark.e.offset;                                                                                    // 2254
        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);                                                // 2255
        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);                                                // 2256
                                                                                                                       // 2257
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2258
      }                                                                                                                // 2259
    };                                                                                                                 // 2260
  })();                                                                                                                // 2261
                                                                                                                       // 2262
  /**                                                                                                                  // 2263
   * @class defaults                                                                                                   // 2264
   *                                                                                                                   // 2265
   * @singleton                                                                                                        // 2266
   */                                                                                                                  // 2267
  var defaults = {                                                                                                     // 2268
    /** @property */                                                                                                   // 2269
    version: '0.6.5',                                                                                                  // 2270
                                                                                                                       // 2271
    /**                                                                                                                // 2272
     *                                                                                                                 // 2273
     * for event options, reference to EventHandler.attach                                                             // 2274
     *                                                                                                                 // 2275
     * @property {Object} options                                                                                      // 2276
     * @property {String/Number} [options.width=null] set editor width                                                 // 2277
     * @property {String/Number} [options.height=null] set editor height, ex) 300                                      // 2278
     * @property {String/Number} options.minHeight set minimum height of editor                                        // 2279
     * @property {String/Number} options.maxHeight                                                                     // 2280
     * @property {String/Number} options.focus                                                                         // 2281
     * @property {Number} options.tabsize                                                                              // 2282
     * @property {Boolean} options.styleWithSpan                                                                       // 2283
     * @property {Object} options.codemirror                                                                           // 2284
     * @property {Object} [options.codemirror.mode='text/html']                                                        // 2285
     * @property {Object} [options.codemirror.htmlMode=true]                                                           // 2286
     * @property {Object} [options.codemirror.lineNumbers=true]                                                        // 2287
     * @property {String} [options.lang=en-US] language 'en-US', 'ko-KR', ...                                          // 2288
     * @property {String} [options.direction=null] text direction, ex) 'rtl'                                           // 2289
     * @property {Array} [options.toolbar]                                                                             // 2290
     * @property {Boolean} [options.airMode=false]                                                                     // 2291
     * @property {Array} [options.airPopover]                                                                          // 2292
     * @property {Fucntion} [options.onInit] initialize                                                                // 2293
     * @property {Fucntion} [options.onsubmit]                                                                         // 2294
     */                                                                                                                // 2295
    options: {                                                                                                         // 2296
      width: null,                  // set editor width                                                                // 2297
      height: null,                 // set editor height, ex) 300                                                      // 2298
                                                                                                                       // 2299
      minHeight: null,              // set minimum height of editor                                                    // 2300
      maxHeight: null,              // set maximum height of editor                                                    // 2301
                                                                                                                       // 2302
      focus: false,                 // set focus to editable area after initializing summernote                        // 2303
                                                                                                                       // 2304
      tabsize: 4,                   // size of tab ex) 2 or 4                                                          // 2305
      styleWithSpan: true,          // style with span (Chrome and FF only)                                            // 2306
                                                                                                                       // 2307
      disableLinkTarget: false,     // hide link Target Checkbox                                                       // 2308
      disableDragAndDrop: false,    // disable drag and drop event                                                     // 2309
      disableResizeEditor: false,   // disable resizing editor                                                         // 2310
                                                                                                                       // 2311
      shortcuts: true,              // enable keyboard shortcuts                                                       // 2312
                                                                                                                       // 2313
      placeholder: false,           // enable placeholder text                                                         // 2314
      prettifyHtml: true,           // enable prettifying html while toggling codeview                                 // 2315
                                                                                                                       // 2316
      iconPrefix: 'fa fa-',         // prefix for css icon classes                                                     // 2317
                                                                                                                       // 2318
      codemirror: {                 // codemirror options                                                              // 2319
        mode: 'text/html',                                                                                             // 2320
        htmlMode: true,                                                                                                // 2321
        lineNumbers: true                                                                                              // 2322
      },                                                                                                               // 2323
                                                                                                                       // 2324
      // language                                                                                                      // 2325
      lang: 'en-US',                // language 'en-US', 'ko-KR', ...                                                  // 2326
      direction: null,              // text direction, ex) 'rtl'                                                       // 2327
                                                                                                                       // 2328
      // toolbar                                                                                                       // 2329
      toolbar: [                                                                                                       // 2330
        ['style', ['style']],                                                                                          // 2331
        ['font', ['bold', 'italic', 'underline', 'clear']],                                                            // 2332
        // ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],            // 2333
        ['fontname', ['fontname']],                                                                                    // 2334
        // ['fontsize', ['fontsize']],                                                                                 // 2335
        ['color', ['color']],                                                                                          // 2336
        ['para', ['ul', 'ol', 'paragraph']],                                                                           // 2337
        ['height', ['height']],                                                                                        // 2338
        ['table', ['table']],                                                                                          // 2339
        ['insert', ['link', 'picture', 'hr']],                                                                         // 2340
        ['view', ['fullscreen', 'codeview']],                                                                          // 2341
        ['help', ['help']]                                                                                             // 2342
      ],                                                                                                               // 2343
                                                                                                                       // 2344
      // air mode: inline editor                                                                                       // 2345
      airMode: false,                                                                                                  // 2346
      // airPopover: [                                                                                                 // 2347
      //   ['style', ['style']],                                                                                       // 2348
      //   ['font', ['bold', 'italic', 'underline', 'clear']],                                                         // 2349
      //   ['fontname', ['fontname']],                                                                                 // 2350
      //   ['color', ['color']],                                                                                       // 2351
      //   ['para', ['ul', 'ol', 'paragraph']],                                                                        // 2352
      //   ['height', ['height']],                                                                                     // 2353
      //   ['table', ['table']],                                                                                       // 2354
      //   ['insert', ['link', 'picture']],                                                                            // 2355
      //   ['help', ['help']]                                                                                          // 2356
      // ],                                                                                                            // 2357
      airPopover: [                                                                                                    // 2358
        ['color', ['color']],                                                                                          // 2359
        ['font', ['bold', 'underline', 'clear']],                                                                      // 2360
        ['para', ['ul', 'paragraph']],                                                                                 // 2361
        ['table', ['table']],                                                                                          // 2362
        ['insert', ['link', 'picture']]                                                                                // 2363
      ],                                                                                                               // 2364
                                                                                                                       // 2365
      // style tag                                                                                                     // 2366
      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],                                       // 2367
                                                                                                                       // 2368
      // default fontName                                                                                              // 2369
      defaultFontName: 'Helvetica Neue',                                                                               // 2370
                                                                                                                       // 2371
      // fontName                                                                                                      // 2372
      fontNames: [                                                                                                     // 2373
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',                                                        // 2374
        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',                                                      // 2375
        'Tahoma', 'Times New Roman', 'Verdana'                                                                         // 2376
      ],                                                                                                               // 2377
      fontNamesIgnoreCheck: [],                                                                                        // 2378
                                                                                                                       // 2379
      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],                                                 // 2380
                                                                                                                       // 2381
      // pallete colors(n x n)                                                                                         // 2382
      colors: [                                                                                                        // 2383
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],                      // 2384
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],                      // 2385
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],                      // 2386
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],                      // 2387
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],                      // 2388
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],                      // 2389
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],                      // 2390
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']                       // 2391
      ],                                                                                                               // 2392
                                                                                                                       // 2393
      // lineHeight                                                                                                    // 2394
      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],                                           // 2395
                                                                                                                       // 2396
      // insertTable max size                                                                                          // 2397
      insertTableMaxSize: {                                                                                            // 2398
        col: 10,                                                                                                       // 2399
        row: 10                                                                                                        // 2400
      },                                                                                                               // 2401
                                                                                                                       // 2402
      // image                                                                                                         // 2403
      maximumImageFileSize: null, // size in bytes, null = no limit                                                    // 2404
                                                                                                                       // 2405
      // callbacks                                                                                                     // 2406
      oninit: null,             // initialize                                                                          // 2407
      onfocus: null,            // editable has focus                                                                  // 2408
      onblur: null,             // editable out of focus                                                               // 2409
      onenter: null,            // enter key pressed                                                                   // 2410
      onkeyup: null,            // keyup                                                                               // 2411
      onkeydown: null,          // keydown                                                                             // 2412
      onImageUpload: null,      // imageUpload                                                                         // 2413
      onImageUploadError: null, // imageUploadError                                                                    // 2414
      onMediaDelete: null,      // media delete                                                                        // 2415
      onToolbarClick: null,                                                                                            // 2416
      onsubmit: null,                                                                                                  // 2417
                                                                                                                       // 2418
      /**                                                                                                              // 2419
       * manipulate link address when user create link                                                                 // 2420
       * @param {String} sLinkUrl                                                                                      // 2421
       * @return {String}                                                                                              // 2422
       */                                                                                                              // 2423
      onCreateLink: function (sLinkUrl) {                                                                              // 2424
        if (sLinkUrl.indexOf('@') !== -1 && sLinkUrl.indexOf(':') === -1) {                                            // 2425
          sLinkUrl =  'mailto:' + sLinkUrl;                                                                            // 2426
        } else if (sLinkUrl.indexOf('://') === -1) {                                                                   // 2427
          sLinkUrl = 'http://' + sLinkUrl;                                                                             // 2428
        }                                                                                                              // 2429
                                                                                                                       // 2430
        return sLinkUrl;                                                                                               // 2431
      },                                                                                                               // 2432
                                                                                                                       // 2433
      keyMap: {                                                                                                        // 2434
        pc: {                                                                                                          // 2435
          'ENTER': 'insertParagraph',                                                                                  // 2436
          'CTRL+Z': 'undo',                                                                                            // 2437
          'CTRL+Y': 'redo',                                                                                            // 2438
          'TAB': 'tab',                                                                                                // 2439
          'SHIFT+TAB': 'untab',                                                                                        // 2440
          'CTRL+B': 'bold',                                                                                            // 2441
          'CTRL+I': 'italic',                                                                                          // 2442
          'CTRL+U': 'underline',                                                                                       // 2443
          'CTRL+SHIFT+S': 'strikethrough',                                                                             // 2444
          'CTRL+BACKSLASH': 'removeFormat',                                                                            // 2445
          'CTRL+SHIFT+L': 'justifyLeft',                                                                               // 2446
          'CTRL+SHIFT+E': 'justifyCenter',                                                                             // 2447
          'CTRL+SHIFT+R': 'justifyRight',                                                                              // 2448
          'CTRL+SHIFT+J': 'justifyFull',                                                                               // 2449
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',                                                                    // 2450
          'CTRL+SHIFT+NUM8': 'insertOrderedList',                                                                      // 2451
          'CTRL+LEFTBRACKET': 'outdent',                                                                               // 2452
          'CTRL+RIGHTBRACKET': 'indent',                                                                               // 2453
          'CTRL+NUM0': 'formatPara',                                                                                   // 2454
          'CTRL+NUM1': 'formatH1',                                                                                     // 2455
          'CTRL+NUM2': 'formatH2',                                                                                     // 2456
          'CTRL+NUM3': 'formatH3',                                                                                     // 2457
          'CTRL+NUM4': 'formatH4',                                                                                     // 2458
          'CTRL+NUM5': 'formatH5',                                                                                     // 2459
          'CTRL+NUM6': 'formatH6',                                                                                     // 2460
          'CTRL+ENTER': 'insertHorizontalRule',                                                                        // 2461
          'CTRL+K': 'showLinkDialog'                                                                                   // 2462
        },                                                                                                             // 2463
                                                                                                                       // 2464
        mac: {                                                                                                         // 2465
          'ENTER': 'insertParagraph',                                                                                  // 2466
          'CMD+Z': 'undo',                                                                                             // 2467
          'CMD+SHIFT+Z': 'redo',                                                                                       // 2468
          'TAB': 'tab',                                                                                                // 2469
          'SHIFT+TAB': 'untab',                                                                                        // 2470
          'CMD+B': 'bold',                                                                                             // 2471
          'CMD+I': 'italic',                                                                                           // 2472
          'CMD+U': 'underline',                                                                                        // 2473
          'CMD+SHIFT+S': 'strikethrough',                                                                              // 2474
          'CMD+BACKSLASH': 'removeFormat',                                                                             // 2475
          'CMD+SHIFT+L': 'justifyLeft',                                                                                // 2476
          'CMD+SHIFT+E': 'justifyCenter',                                                                              // 2477
          'CMD+SHIFT+R': 'justifyRight',                                                                               // 2478
          'CMD+SHIFT+J': 'justifyFull',                                                                                // 2479
          'CMD+SHIFT+NUM7': 'insertUnorderedList',                                                                     // 2480
          'CMD+SHIFT+NUM8': 'insertOrderedList',                                                                       // 2481
          'CMD+LEFTBRACKET': 'outdent',                                                                                // 2482
          'CMD+RIGHTBRACKET': 'indent',                                                                                // 2483
          'CMD+NUM0': 'formatPara',                                                                                    // 2484
          'CMD+NUM1': 'formatH1',                                                                                      // 2485
          'CMD+NUM2': 'formatH2',                                                                                      // 2486
          'CMD+NUM3': 'formatH3',                                                                                      // 2487
          'CMD+NUM4': 'formatH4',                                                                                      // 2488
          'CMD+NUM5': 'formatH5',                                                                                      // 2489
          'CMD+NUM6': 'formatH6',                                                                                      // 2490
          'CMD+ENTER': 'insertHorizontalRule',                                                                         // 2491
          'CMD+K': 'showLinkDialog'                                                                                    // 2492
        }                                                                                                              // 2493
      }                                                                                                                // 2494
    },                                                                                                                 // 2495
                                                                                                                       // 2496
    // default language: en-US                                                                                         // 2497
    lang: {                                                                                                            // 2498
      'en-US': {                                                                                                       // 2499
        font: {                                                                                                        // 2500
          bold: 'Bold',                                                                                                // 2501
          italic: 'Italic',                                                                                            // 2502
          underline: 'Underline',                                                                                      // 2503
          clear: 'Remove Font Style',                                                                                  // 2504
          height: 'Line Height',                                                                                       // 2505
          name: 'Font Family',                                                                                         // 2506
          strikethrough: 'Strikethrough',                                                                              // 2507
          subscript: 'Subscript',                                                                                      // 2508
          superscript: 'Superscript',                                                                                  // 2509
          size: 'Font Size'                                                                                            // 2510
        },                                                                                                             // 2511
        image: {                                                                                                       // 2512
          image: 'Picture',                                                                                            // 2513
          insert: 'Insert Image',                                                                                      // 2514
          resizeFull: 'Resize Full',                                                                                   // 2515
          resizeHalf: 'Resize Half',                                                                                   // 2516
          resizeQuarter: 'Resize Quarter',                                                                             // 2517
          floatLeft: 'Float Left',                                                                                     // 2518
          floatRight: 'Float Right',                                                                                   // 2519
          floatNone: 'Float None',                                                                                     // 2520
          shapeRounded: 'Shape: Rounded',                                                                              // 2521
          shapeCircle: 'Shape: Circle',                                                                                // 2522
          shapeThumbnail: 'Shape: Thumbnail',                                                                          // 2523
          shapeNone: 'Shape: None',                                                                                    // 2524
          dragImageHere: 'Drag image or text here',                                                                    // 2525
          dropImage: 'Drop image or Text',                                                                             // 2526
          selectFromFiles: 'Select from files',                                                                        // 2527
          maximumFileSize: 'Maximum file size',                                                                        // 2528
          maximumFileSizeError: 'Maximum file size exceeded.',                                                         // 2529
          url: 'Image URL',                                                                                            // 2530
          remove: 'Remove Image'                                                                                       // 2531
        },                                                                                                             // 2532
        link: {                                                                                                        // 2533
          link: 'Link',                                                                                                // 2534
          insert: 'Insert Link',                                                                                       // 2535
          unlink: 'Unlink',                                                                                            // 2536
          edit: 'Edit',                                                                                                // 2537
          textToDisplay: 'Text to display',                                                                            // 2538
          url: 'To what URL should this link go?',                                                                     // 2539
          openInNewWindow: 'Open in new window'                                                                        // 2540
        },                                                                                                             // 2541
        table: {                                                                                                       // 2542
          table: 'Table'                                                                                               // 2543
        },                                                                                                             // 2544
        hr: {                                                                                                          // 2545
          insert: 'Insert Horizontal Rule'                                                                             // 2546
        },                                                                                                             // 2547
        style: {                                                                                                       // 2548
          style: 'Style',                                                                                              // 2549
          normal: 'Normal',                                                                                            // 2550
          blockquote: 'Quote',                                                                                         // 2551
          pre: 'Code',                                                                                                 // 2552
          h1: 'Header 1',                                                                                              // 2553
          h2: 'Header 2',                                                                                              // 2554
          h3: 'Header 3',                                                                                              // 2555
          h4: 'Header 4',                                                                                              // 2556
          h5: 'Header 5',                                                                                              // 2557
          h6: 'Header 6'                                                                                               // 2558
        },                                                                                                             // 2559
        lists: {                                                                                                       // 2560
          unordered: 'Unordered list',                                                                                 // 2561
          ordered: 'Ordered list'                                                                                      // 2562
        },                                                                                                             // 2563
        options: {                                                                                                     // 2564
          help: 'Help',                                                                                                // 2565
          fullscreen: 'Full Screen',                                                                                   // 2566
          codeview: 'Code View'                                                                                        // 2567
        },                                                                                                             // 2568
        paragraph: {                                                                                                   // 2569
          paragraph: 'Paragraph',                                                                                      // 2570
          outdent: 'Outdent',                                                                                          // 2571
          indent: 'Indent',                                                                                            // 2572
          left: 'Align left',                                                                                          // 2573
          center: 'Align center',                                                                                      // 2574
          right: 'Align right',                                                                                        // 2575
          justify: 'Justify full'                                                                                      // 2576
        },                                                                                                             // 2577
        color: {                                                                                                       // 2578
          recent: 'Recent Color',                                                                                      // 2579
          more: 'More Color',                                                                                          // 2580
          background: 'Background Color',                                                                              // 2581
          foreground: 'Foreground Color',                                                                              // 2582
          transparent: 'Transparent',                                                                                  // 2583
          setTransparent: 'Set transparent',                                                                           // 2584
          reset: 'Reset',                                                                                              // 2585
          resetToDefault: 'Reset to default'                                                                           // 2586
        },                                                                                                             // 2587
        shortcut: {                                                                                                    // 2588
          shortcuts: 'Keyboard shortcuts',                                                                             // 2589
          close: 'Close',                                                                                              // 2590
          textFormatting: 'Text formatting',                                                                           // 2591
          action: 'Action',                                                                                            // 2592
          paragraphFormatting: 'Paragraph formatting',                                                                 // 2593
          documentStyle: 'Document Style',                                                                             // 2594
          extraKeys: 'Extra keys'                                                                                      // 2595
        },                                                                                                             // 2596
        history: {                                                                                                     // 2597
          undo: 'Undo',                                                                                                // 2598
          redo: 'Redo'                                                                                                 // 2599
        }                                                                                                              // 2600
      }                                                                                                                // 2601
    }                                                                                                                  // 2602
  };                                                                                                                   // 2603
                                                                                                                       // 2604
  /**                                                                                                                  // 2605
   * @class core.async                                                                                                 // 2606
   *                                                                                                                   // 2607
   * Async functions which returns `Promise`                                                                           // 2608
   *                                                                                                                   // 2609
   * @singleton                                                                                                        // 2610
   * @alternateClassName async                                                                                         // 2611
   */                                                                                                                  // 2612
  var async = (function () {                                                                                           // 2613
    /**                                                                                                                // 2614
     * @method readFileAsDataURL                                                                                       // 2615
     *                                                                                                                 // 2616
     * read contents of file as representing URL                                                                       // 2617
     *                                                                                                                 // 2618
     * @param {File} file                                                                                              // 2619
     * @return {Promise} - then: sDataUrl                                                                              // 2620
     */                                                                                                                // 2621
    var readFileAsDataURL = function (file) {                                                                          // 2622
      return $.Deferred(function (deferred) {                                                                          // 2623
        $.extend(new FileReader(), {                                                                                   // 2624
          onload: function (e) {                                                                                       // 2625
            var sDataURL = e.target.result;                                                                            // 2626
            deferred.resolve(sDataURL);                                                                                // 2627
          },                                                                                                           // 2628
          onerror: function () {                                                                                       // 2629
            deferred.reject(this);                                                                                     // 2630
          }                                                                                                            // 2631
        }).readAsDataURL(file);                                                                                        // 2632
      }).promise();                                                                                                    // 2633
    };                                                                                                                 // 2634
                                                                                                                       // 2635
    /**                                                                                                                // 2636
     * @method createImage                                                                                             // 2637
     *                                                                                                                 // 2638
     * create `<image>` from url string                                                                                // 2639
     *                                                                                                                 // 2640
     * @param {String} sUrl                                                                                            // 2641
     * @param {String} filename                                                                                        // 2642
     * @return {Promise} - then: $image                                                                                // 2643
     */                                                                                                                // 2644
    var createImage = function (sUrl, filename) {                                                                      // 2645
      return $.Deferred(function (deferred) {                                                                          // 2646
        var $img = $('<img>');                                                                                         // 2647
                                                                                                                       // 2648
        $img.one('load', function () {                                                                                 // 2649
          $img.off('error abort');                                                                                     // 2650
          deferred.resolve($img);                                                                                      // 2651
        }).one('error abort', function () {                                                                            // 2652
          $img.off('load').detach();                                                                                   // 2653
          deferred.reject($img);                                                                                       // 2654
        }).css({                                                                                                       // 2655
          display: 'none'                                                                                              // 2656
        }).appendTo(document.body).attr({                                                                              // 2657
          'src': sUrl,                                                                                                 // 2658
          'data-filename': filename                                                                                    // 2659
        });                                                                                                            // 2660
      }).promise();                                                                                                    // 2661
    };                                                                                                                 // 2662
                                                                                                                       // 2663
    return {                                                                                                           // 2664
      readFileAsDataURL: readFileAsDataURL,                                                                            // 2665
      createImage: createImage                                                                                         // 2666
    };                                                                                                                 // 2667
  })();                                                                                                                // 2668
                                                                                                                       // 2669
  /**                                                                                                                  // 2670
   * @class core.key                                                                                                   // 2671
   *                                                                                                                   // 2672
   * Object for keycodes.                                                                                              // 2673
   *                                                                                                                   // 2674
   * @singleton                                                                                                        // 2675
   * @alternateClassName key                                                                                           // 2676
   */                                                                                                                  // 2677
  var key = (function () {                                                                                             // 2678
    var keyMap = {                                                                                                     // 2679
      'BACKSPACE': 8,                                                                                                  // 2680
      'TAB': 9,                                                                                                        // 2681
      'ENTER': 13,                                                                                                     // 2682
      'SPACE': 32,                                                                                                     // 2683
                                                                                                                       // 2684
      // Number: 0-9                                                                                                   // 2685
      'NUM0': 48,                                                                                                      // 2686
      'NUM1': 49,                                                                                                      // 2687
      'NUM2': 50,                                                                                                      // 2688
      'NUM3': 51,                                                                                                      // 2689
      'NUM4': 52,                                                                                                      // 2690
      'NUM5': 53,                                                                                                      // 2691
      'NUM6': 54,                                                                                                      // 2692
      'NUM7': 55,                                                                                                      // 2693
      'NUM8': 56,                                                                                                      // 2694
                                                                                                                       // 2695
      // Alphabet: a-z                                                                                                 // 2696
      'B': 66,                                                                                                         // 2697
      'E': 69,                                                                                                         // 2698
      'I': 73,                                                                                                         // 2699
      'J': 74,                                                                                                         // 2700
      'K': 75,                                                                                                         // 2701
      'L': 76,                                                                                                         // 2702
      'R': 82,                                                                                                         // 2703
      'S': 83,                                                                                                         // 2704
      'U': 85,                                                                                                         // 2705
      'Y': 89,                                                                                                         // 2706
      'Z': 90,                                                                                                         // 2707
                                                                                                                       // 2708
      'SLASH': 191,                                                                                                    // 2709
      'LEFTBRACKET': 219,                                                                                              // 2710
      'BACKSLASH': 220,                                                                                                // 2711
      'RIGHTBRACKET': 221                                                                                              // 2712
    };                                                                                                                 // 2713
                                                                                                                       // 2714
    return {                                                                                                           // 2715
      /**                                                                                                              // 2716
       * @method isEdit                                                                                                // 2717
       *                                                                                                               // 2718
       * @param {Number} keyCode                                                                                       // 2719
       * @return {Boolean}                                                                                             // 2720
       */                                                                                                              // 2721
      isEdit: function (keyCode) {                                                                                     // 2722
        return list.contains([8, 9, 13, 32], keyCode);                                                                 // 2723
      },                                                                                                               // 2724
      /**                                                                                                              // 2725
       * @property {Object} nameFromCode                                                                               // 2726
       * @property {String} nameFromCode.8 "BACKSPACE"                                                                 // 2727
       */                                                                                                              // 2728
      nameFromCode: func.invertObject(keyMap),                                                                         // 2729
      code: keyMap                                                                                                     // 2730
    };                                                                                                                 // 2731
  })();                                                                                                                // 2732
                                                                                                                       // 2733
  /**                                                                                                                  // 2734
   * @class editing.History                                                                                            // 2735
   *                                                                                                                   // 2736
   * Editor History                                                                                                    // 2737
   *                                                                                                                   // 2738
   */                                                                                                                  // 2739
  var History = function ($editable) {                                                                                 // 2740
    var stack = [], stackOffset = -1;                                                                                  // 2741
    var editable = $editable[0];                                                                                       // 2742
                                                                                                                       // 2743
    var makeSnapshot = function () {                                                                                   // 2744
      var rng = range.create();                                                                                        // 2745
      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};                                        // 2746
                                                                                                                       // 2747
      return {                                                                                                         // 2748
        contents: $editable.html(),                                                                                    // 2749
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)                                                       // 2750
      };                                                                                                               // 2751
    };                                                                                                                 // 2752
                                                                                                                       // 2753
    var applySnapshot = function (snapshot) {                                                                          // 2754
      if (snapshot.contents !== null) {                                                                                // 2755
        $editable.html(snapshot.contents);                                                                             // 2756
      }                                                                                                                // 2757
      if (snapshot.bookmark !== null) {                                                                                // 2758
        range.createFromBookmark(editable, snapshot.bookmark).select();                                                // 2759
      }                                                                                                                // 2760
    };                                                                                                                 // 2761
                                                                                                                       // 2762
    /**                                                                                                                // 2763
     * undo                                                                                                            // 2764
     */                                                                                                                // 2765
    this.undo = function () {                                                                                          // 2766
      if (0 < stackOffset) {                                                                                           // 2767
        stackOffset--;                                                                                                 // 2768
        applySnapshot(stack[stackOffset]);                                                                             // 2769
      }                                                                                                                // 2770
    };                                                                                                                 // 2771
                                                                                                                       // 2772
    /**                                                                                                                // 2773
     * redo                                                                                                            // 2774
     */                                                                                                                // 2775
    this.redo = function () {                                                                                          // 2776
      if (stack.length - 1 > stackOffset) {                                                                            // 2777
        stackOffset++;                                                                                                 // 2778
        applySnapshot(stack[stackOffset]);                                                                             // 2779
      }                                                                                                                // 2780
    };                                                                                                                 // 2781
                                                                                                                       // 2782
    /**                                                                                                                // 2783
     * recorded undo                                                                                                   // 2784
     */                                                                                                                // 2785
    this.recordUndo = function () {                                                                                    // 2786
      stackOffset++;                                                                                                   // 2787
                                                                                                                       // 2788
      // Wash out stack after stackOffset                                                                              // 2789
      if (stack.length > stackOffset) {                                                                                // 2790
        stack = stack.slice(0, stackOffset);                                                                           // 2791
      }                                                                                                                // 2792
                                                                                                                       // 2793
      // Create new snapshot and push it to the end                                                                    // 2794
      stack.push(makeSnapshot());                                                                                      // 2795
    };                                                                                                                 // 2796
                                                                                                                       // 2797
    // Create first undo stack                                                                                         // 2798
    this.recordUndo();                                                                                                 // 2799
  };                                                                                                                   // 2800
                                                                                                                       // 2801
  /**                                                                                                                  // 2802
   * @class editing.Style                                                                                              // 2803
   *                                                                                                                   // 2804
   * Style                                                                                                             // 2805
   *                                                                                                                   // 2806
   */                                                                                                                  // 2807
  var Style = function () {                                                                                            // 2808
    /**                                                                                                                // 2809
     * @method jQueryCSS                                                                                               // 2810
     *                                                                                                                 // 2811
     * [workaround] for old jQuery                                                                                     // 2812
     * passing an array of style properties to .css()                                                                  // 2813
     * will result in an object of property-value pairs.                                                               // 2814
     * (compability with version < 1.9)                                                                                // 2815
     *                                                                                                                 // 2816
     * @private                                                                                                        // 2817
     * @param  {jQuery} $obj                                                                                           // 2818
     * @param  {Array} propertyNames - An array of one or more CSS properties.                                         // 2819
     * @return {Object}                                                                                                // 2820
     */                                                                                                                // 2821
    var jQueryCSS = function ($obj, propertyNames) {                                                                   // 2822
      if (agent.jqueryVersion < 1.9) {                                                                                 // 2823
        var result = {};                                                                                               // 2824
        $.each(propertyNames, function (idx, propertyName) {                                                           // 2825
          result[propertyName] = $obj.css(propertyName);                                                               // 2826
        });                                                                                                            // 2827
        return result;                                                                                                 // 2828
      }                                                                                                                // 2829
      return $obj.css.call($obj, propertyNames);                                                                       // 2830
    };                                                                                                                 // 2831
                                                                                                                       // 2832
    /**                                                                                                                // 2833
     * paragraph level style                                                                                           // 2834
     *                                                                                                                 // 2835
     * @param {WrappedRange} rng                                                                                       // 2836
     * @param {Object} styleInfo                                                                                       // 2837
     */                                                                                                                // 2838
    this.stylePara = function (rng, styleInfo) {                                                                       // 2839
      $.each(rng.nodes(dom.isPara, {                                                                                   // 2840
        includeAncestor: true                                                                                          // 2841
      }), function (idx, para) {                                                                                       // 2842
        $(para).css(styleInfo);                                                                                        // 2843
      });                                                                                                              // 2844
    };                                                                                                                 // 2845
                                                                                                                       // 2846
    /**                                                                                                                // 2847
     * insert and returns styleNodes on range.                                                                         // 2848
     *                                                                                                                 // 2849
     * @param {WrappedRange} rng                                                                                       // 2850
     * @param {Object} [options] - options for styleNodes                                                              // 2851
     * @param {String} [options.nodeName] - default: `SPAN`                                                            // 2852
     * @param {Boolean} [options.expandClosestSibling] - default: `false`                                              // 2853
     * @param {Boolean} [options.onlyPartialContains] - default: `false`                                               // 2854
     * @return {Node[]}                                                                                                // 2855
     */                                                                                                                // 2856
    this.styleNodes = function (rng, options) {                                                                        // 2857
      rng = rng.splitText();                                                                                           // 2858
                                                                                                                       // 2859
      var nodeName = options && options.nodeName || 'SPAN';                                                            // 2860
      var expandClosestSibling = !!(options && options.expandClosestSibling);                                          // 2861
      var onlyPartialContains = !!(options && options.onlyPartialContains);                                            // 2862
                                                                                                                       // 2863
      if (rng.isCollapsed()) {                                                                                         // 2864
        return rng.insertNode(dom.create(nodeName));                                                                   // 2865
      }                                                                                                                // 2866
                                                                                                                       // 2867
      var pred = dom.makePredByNodeName(nodeName);                                                                     // 2868
      var nodes = $.map(rng.nodes(dom.isText, {                                                                        // 2869
        fullyContains: true                                                                                            // 2870
      }), function (text) {                                                                                            // 2871
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);                                        // 2872
      });                                                                                                              // 2873
                                                                                                                       // 2874
      if (expandClosestSibling) {                                                                                      // 2875
        if (onlyPartialContains) {                                                                                     // 2876
          var nodesInRange = rng.nodes();                                                                              // 2877
          // compose with partial contains predication                                                                 // 2878
          pred = func.and(pred, function (node) {                                                                      // 2879
            return list.contains(nodesInRange, node);                                                                  // 2880
          });                                                                                                          // 2881
        }                                                                                                              // 2882
                                                                                                                       // 2883
        return $.map(nodes, function (node) {                                                                          // 2884
          var siblings = dom.withClosestSiblings(node, pred);                                                          // 2885
          var head = list.head(siblings);                                                                              // 2886
          var tails = list.tail(siblings);                                                                             // 2887
          $.each(tails, function (idx, elem) {                                                                         // 2888
            dom.appendChildNodes(head, elem.childNodes);                                                               // 2889
            dom.remove(elem);                                                                                          // 2890
          });                                                                                                          // 2891
          return list.head(siblings);                                                                                  // 2892
        });                                                                                                            // 2893
      } else {                                                                                                         // 2894
        return nodes;                                                                                                  // 2895
      }                                                                                                                // 2896
    };                                                                                                                 // 2897
                                                                                                                       // 2898
    /**                                                                                                                // 2899
     * get current style on cursor                                                                                     // 2900
     *                                                                                                                 // 2901
     * @param {WrappedRange} rng                                                                                       // 2902
     * @param {Node} target - target element on event                                                                  // 2903
     * @return {Object} - object contains style properties.                                                            // 2904
     */                                                                                                                // 2905
    this.current = function (rng, target) {                                                                            // 2906
      var $cont = $(dom.isText(rng.sc) ? rng.sc.parentNode : rng.sc);                                                  // 2907
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];                   // 2908
      var styleInfo = jQueryCSS($cont, properties) || {};                                                              // 2909
                                                                                                                       // 2910
      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);                                                   // 2911
                                                                                                                       // 2912
      // document.queryCommandState for toggle state                                                                   // 2913
      styleInfo['font-bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';                                 // 2914
      styleInfo['font-italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';                           // 2915
      styleInfo['font-underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';                  // 2916
      styleInfo['font-strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';      // 2917
      styleInfo['font-superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';            // 2918
      styleInfo['font-subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';                  // 2919
                                                                                                                       // 2920
      // list-style-type to list-style(unordered, ordered)                                                             // 2921
      if (!rng.isOnList()) {                                                                                           // 2922
        styleInfo['list-style'] = 'none';                                                                              // 2923
      } else {                                                                                                         // 2924
        var aOrderedType = ['circle', 'disc', 'disc-leading-zero', 'square'];                                          // 2925
        var isUnordered = $.inArray(styleInfo['list-style-type'], aOrderedType) > -1;                                  // 2926
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';                                               // 2927
      }                                                                                                                // 2928
                                                                                                                       // 2929
      var para = dom.ancestor(rng.sc, dom.isPara);                                                                     // 2930
      if (para && para.style['line-height']) {                                                                         // 2931
        styleInfo['line-height'] = para.style.lineHeight;                                                              // 2932
      } else {                                                                                                         // 2933
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);                // 2934
        styleInfo['line-height'] = lineHeight.toFixed(1);                                                              // 2935
      }                                                                                                                // 2936
                                                                                                                       // 2937
      styleInfo.image = dom.isImg(target) && target;                                                                   // 2938
      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);                                       // 2939
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);                                                  // 2940
      styleInfo.range = rng;                                                                                           // 2941
                                                                                                                       // 2942
      return styleInfo;                                                                                                // 2943
    };                                                                                                                 // 2944
  };                                                                                                                   // 2945
                                                                                                                       // 2946
                                                                                                                       // 2947
  /**                                                                                                                  // 2948
   * @class editing.Bullet                                                                                             // 2949
   *                                                                                                                   // 2950
   * @alternateClassName Bullet                                                                                        // 2951
   */                                                                                                                  // 2952
  var Bullet = function () {                                                                                           // 2953
    /**                                                                                                                // 2954
     * @method insertOrderedList                                                                                       // 2955
     *                                                                                                                 // 2956
     * toggle ordered list                                                                                             // 2957
     *                                                                                                                 // 2958
     * @type command                                                                                                   // 2959
     */                                                                                                                // 2960
    this.insertOrderedList = function () {                                                                             // 2961
      this.toggleList('OL');                                                                                           // 2962
    };                                                                                                                 // 2963
                                                                                                                       // 2964
    /**                                                                                                                // 2965
     * @method insertUnorderedList                                                                                     // 2966
     *                                                                                                                 // 2967
     * toggle unordered list                                                                                           // 2968
     *                                                                                                                 // 2969
     * @type command                                                                                                   // 2970
     */                                                                                                                // 2971
    this.insertUnorderedList = function () {                                                                           // 2972
      this.toggleList('UL');                                                                                           // 2973
    };                                                                                                                 // 2974
                                                                                                                       // 2975
    /**                                                                                                                // 2976
     * @method indent                                                                                                  // 2977
     *                                                                                                                 // 2978
     * indent                                                                                                          // 2979
     *                                                                                                                 // 2980
     * @type command                                                                                                   // 2981
     */                                                                                                                // 2982
    this.indent = function () {                                                                                        // 2983
      var self = this;                                                                                                 // 2984
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 2985
                                                                                                                       // 2986
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 2987
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 2988
                                                                                                                       // 2989
      $.each(clustereds, function (idx, paras) {                                                                       // 2990
        var head = list.head(paras);                                                                                   // 2991
        if (dom.isLi(head)) {                                                                                          // 2992
          self.wrapList(paras, head.parentNode.nodeName);                                                              // 2993
        } else {                                                                                                       // 2994
          $.each(paras, function (idx, para) {                                                                         // 2995
            $(para).css('marginLeft', function (idx, val) {                                                            // 2996
              return (parseInt(val, 10) || 0) + 25;                                                                    // 2997
            });                                                                                                        // 2998
          });                                                                                                          // 2999
        }                                                                                                              // 3000
      });                                                                                                              // 3001
                                                                                                                       // 3002
      rng.select();                                                                                                    // 3003
    };                                                                                                                 // 3004
                                                                                                                       // 3005
    /**                                                                                                                // 3006
     * @method outdent                                                                                                 // 3007
     *                                                                                                                 // 3008
     * outdent                                                                                                         // 3009
     *                                                                                                                 // 3010
     * @type command                                                                                                   // 3011
     */                                                                                                                // 3012
    this.outdent = function () {                                                                                       // 3013
      var self = this;                                                                                                 // 3014
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 3015
                                                                                                                       // 3016
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 3017
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 3018
                                                                                                                       // 3019
      $.each(clustereds, function (idx, paras) {                                                                       // 3020
        var head = list.head(paras);                                                                                   // 3021
        if (dom.isLi(head)) {                                                                                          // 3022
          self.releaseList([paras]);                                                                                   // 3023
        } else {                                                                                                       // 3024
          $.each(paras, function (idx, para) {                                                                         // 3025
            $(para).css('marginLeft', function (idx, val) {                                                            // 3026
              val = (parseInt(val, 10) || 0);                                                                          // 3027
              return val > 25 ? val - 25 : '';                                                                         // 3028
            });                                                                                                        // 3029
          });                                                                                                          // 3030
        }                                                                                                              // 3031
      });                                                                                                              // 3032
                                                                                                                       // 3033
      rng.select();                                                                                                    // 3034
    };                                                                                                                 // 3035
                                                                                                                       // 3036
    /**                                                                                                                // 3037
     * @method toggleList                                                                                              // 3038
     *                                                                                                                 // 3039
     * toggle list                                                                                                     // 3040
     *                                                                                                                 // 3041
     * @param {String} listName - OL or UL                                                                             // 3042
     */                                                                                                                // 3043
    this.toggleList = function (listName) {                                                                            // 3044
      var self = this;                                                                                                 // 3045
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 3046
                                                                                                                       // 3047
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 3048
      var bookmark = rng.paraBookmark(paras);                                                                          // 3049
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 3050
                                                                                                                       // 3051
      // paragraph to list                                                                                             // 3052
      if (list.find(paras, dom.isPurePara)) {                                                                          // 3053
        var wrappedParas = [];                                                                                         // 3054
        $.each(clustereds, function (idx, paras) {                                                                     // 3055
          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));                                          // 3056
        });                                                                                                            // 3057
        paras = wrappedParas;                                                                                          // 3058
      // list to paragraph or change list style                                                                        // 3059
      } else {                                                                                                         // 3060
        var diffLists = rng.nodes(dom.isList, {                                                                        // 3061
          includeAncestor: true                                                                                        // 3062
        }).filter(function (listNode) {                                                                                // 3063
          return !$.nodeName(listNode, listName);                                                                      // 3064
        });                                                                                                            // 3065
                                                                                                                       // 3066
        if (diffLists.length) {                                                                                        // 3067
          $.each(diffLists, function (idx, listNode) {                                                                 // 3068
            dom.replace(listNode, listName);                                                                           // 3069
          });                                                                                                          // 3070
        } else {                                                                                                       // 3071
          paras = this.releaseList(clustereds, true);                                                                  // 3072
        }                                                                                                              // 3073
      }                                                                                                                // 3074
                                                                                                                       // 3075
      range.createFromParaBookmark(bookmark, paras).select();                                                          // 3076
    };                                                                                                                 // 3077
                                                                                                                       // 3078
    /**                                                                                                                // 3079
     * @method wrapList                                                                                                // 3080
     *                                                                                                                 // 3081
     * @param {Node[]} paras                                                                                           // 3082
     * @param {String} listName                                                                                        // 3083
     * @return {Node[]}                                                                                                // 3084
     */                                                                                                                // 3085
    this.wrapList = function (paras, listName) {                                                                       // 3086
      var head = list.head(paras);                                                                                     // 3087
      var last = list.last(paras);                                                                                     // 3088
                                                                                                                       // 3089
      var prevList = dom.isList(head.previousSibling) && head.previousSibling;                                         // 3090
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;                                                 // 3091
                                                                                                                       // 3092
      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);                                  // 3093
                                                                                                                       // 3094
      // P to LI                                                                                                       // 3095
      paras = $.map(paras, function (para) {                                                                           // 3096
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;                                                  // 3097
      });                                                                                                              // 3098
                                                                                                                       // 3099
      // append to list(<ul>, <ol>)                                                                                    // 3100
      dom.appendChildNodes(listNode, paras);                                                                           // 3101
                                                                                                                       // 3102
      if (nextList) {                                                                                                  // 3103
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));                                                // 3104
        dom.remove(nextList);                                                                                          // 3105
      }                                                                                                                // 3106
                                                                                                                       // 3107
      return paras;                                                                                                    // 3108
    };                                                                                                                 // 3109
                                                                                                                       // 3110
    /**                                                                                                                // 3111
     * @method releaseList                                                                                             // 3112
     *                                                                                                                 // 3113
     * @param {Array[]} clustereds                                                                                     // 3114
     * @param {Boolean} isEscapseToBody                                                                                // 3115
     * @return {Node[]}                                                                                                // 3116
     */                                                                                                                // 3117
    this.releaseList = function (clustereds, isEscapseToBody) {                                                        // 3118
      var releasedParas = [];                                                                                          // 3119
                                                                                                                       // 3120
      $.each(clustereds, function (idx, paras) {                                                                       // 3121
        var head = list.head(paras);                                                                                   // 3122
        var last = list.last(paras);                                                                                   // 3123
                                                                                                                       // 3124
        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :                                          // 3125
                                         head.parentNode;                                                              // 3126
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {                                      // 3127
          node: last.parentNode,                                                                                       // 3128
          offset: dom.position(last) + 1                                                                               // 3129
        }, {                                                                                                           // 3130
          isSkipPaddingBlankHTML: true                                                                                 // 3131
        }) : null;                                                                                                     // 3132
                                                                                                                       // 3133
        var middleList = dom.splitTree(headList, {                                                                     // 3134
          node: head.parentNode,                                                                                       // 3135
          offset: dom.position(head)                                                                                   // 3136
        }, {                                                                                                           // 3137
          isSkipPaddingBlankHTML: true                                                                                 // 3138
        });                                                                                                            // 3139
                                                                                                                       // 3140
        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :                                           // 3141
                                  list.from(middleList.childNodes).filter(dom.isLi);                                   // 3142
                                                                                                                       // 3143
        // LI to P                                                                                                     // 3144
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {                                                     // 3145
          paras = $.map(paras, function (para) {                                                                       // 3146
            return dom.replace(para, 'P');                                                                             // 3147
          });                                                                                                          // 3148
        }                                                                                                              // 3149
                                                                                                                       // 3150
        $.each(list.from(paras).reverse(), function (idx, para) {                                                      // 3151
          dom.insertAfter(para, headList);                                                                             // 3152
        });                                                                                                            // 3153
                                                                                                                       // 3154
        // remove empty lists                                                                                          // 3155
        var rootLists = list.compact([headList, middleList, lastList]);                                                // 3156
        $.each(rootLists, function (idx, rootList) {                                                                   // 3157
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));                                 // 3158
          $.each(listNodes.reverse(), function (idx, listNode) {                                                       // 3159
            if (!dom.nodeLength(listNode)) {                                                                           // 3160
              dom.remove(listNode, true);                                                                              // 3161
            }                                                                                                          // 3162
          });                                                                                                          // 3163
        });                                                                                                            // 3164
                                                                                                                       // 3165
        releasedParas = releasedParas.concat(paras);                                                                   // 3166
      });                                                                                                              // 3167
                                                                                                                       // 3168
      return releasedParas;                                                                                            // 3169
    };                                                                                                                 // 3170
  };                                                                                                                   // 3171
                                                                                                                       // 3172
                                                                                                                       // 3173
  /**                                                                                                                  // 3174
   * @class editing.Typing                                                                                             // 3175
   *                                                                                                                   // 3176
   * Typing                                                                                                            // 3177
   *                                                                                                                   // 3178
   */                                                                                                                  // 3179
  var Typing = function () {                                                                                           // 3180
                                                                                                                       // 3181
    // a Bullet instance to toggle lists off                                                                           // 3182
    var bullet = new Bullet();                                                                                         // 3183
                                                                                                                       // 3184
    /**                                                                                                                // 3185
     * insert tab                                                                                                      // 3186
     *                                                                                                                 // 3187
     * @param {jQuery} $editable                                                                                       // 3188
     * @param {WrappedRange} rng                                                                                       // 3189
     * @param {Number} tabsize                                                                                         // 3190
     */                                                                                                                // 3191
    this.insertTab = function ($editable, rng, tabsize) {                                                              // 3192
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));                                            // 3193
      rng = rng.deleteContents();                                                                                      // 3194
      rng.insertNode(tab, true);                                                                                       // 3195
                                                                                                                       // 3196
      rng = range.create(tab, tabsize);                                                                                // 3197
      rng.select();                                                                                                    // 3198
    };                                                                                                                 // 3199
                                                                                                                       // 3200
    /**                                                                                                                // 3201
     * insert paragraph                                                                                                // 3202
     */                                                                                                                // 3203
    this.insertParagraph = function () {                                                                               // 3204
      var rng = range.create();                                                                                        // 3205
                                                                                                                       // 3206
      // deleteContents on range.                                                                                      // 3207
      rng = rng.deleteContents();                                                                                      // 3208
                                                                                                                       // 3209
      // Wrap range if it needs to be wrapped by paragraph                                                             // 3210
      rng = rng.wrapBodyInlineWithPara();                                                                              // 3211
                                                                                                                       // 3212
      // finding paragraph                                                                                             // 3213
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);                                                                // 3214
                                                                                                                       // 3215
      var nextPara;                                                                                                    // 3216
      // on paragraph: split paragraph                                                                                 // 3217
      if (splitRoot) {                                                                                                 // 3218
        // if it is an empty line with li                                                                              // 3219
        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {                                                           // 3220
          // disable UL/OL and escape!                                                                                 // 3221
          bullet.toggleList(splitRoot.parentNode.nodeName);                                                            // 3222
          return;                                                                                                      // 3223
        // if new line has content (not a line break)                                                                  // 3224
        } else {                                                                                                       // 3225
          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());                                                    // 3226
                                                                                                                       // 3227
          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);                                         // 3228
          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));                         // 3229
                                                                                                                       // 3230
          $.each(emptyAnchors, function (idx, anchor) {                                                                // 3231
            dom.remove(anchor);                                                                                        // 3232
          });                                                                                                          // 3233
        }                                                                                                              // 3234
      // no paragraph: insert empty paragraph                                                                          // 3235
      } else {                                                                                                         // 3236
        var next = rng.sc.childNodes[rng.so];                                                                          // 3237
        nextPara = $(dom.emptyPara)[0];                                                                                // 3238
        if (next) {                                                                                                    // 3239
          rng.sc.insertBefore(nextPara, next);                                                                         // 3240
        } else {                                                                                                       // 3241
          rng.sc.appendChild(nextPara);                                                                                // 3242
        }                                                                                                              // 3243
      }                                                                                                                // 3244
                                                                                                                       // 3245
      range.create(nextPara, 0).normalize().select().focus().scrollIntoView();                                         // 3246
                                                                                                                       // 3247
    };                                                                                                                 // 3248
                                                                                                                       // 3249
  };                                                                                                                   // 3250
                                                                                                                       // 3251
  /**                                                                                                                  // 3252
   * @class editing.Table                                                                                              // 3253
   *                                                                                                                   // 3254
   * Table                                                                                                             // 3255
   *                                                                                                                   // 3256
   */                                                                                                                  // 3257
  var Table = function () {                                                                                            // 3258
    /**                                                                                                                // 3259
     * handle tab key                                                                                                  // 3260
     *                                                                                                                 // 3261
     * @param {WrappedRange} rng                                                                                       // 3262
     * @param {Boolean} isShift                                                                                        // 3263
     */                                                                                                                // 3264
    this.tab = function (rng, isShift) {                                                                               // 3265
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);                                                       // 3266
      var table = dom.ancestor(cell, dom.isTable);                                                                     // 3267
      var cells = dom.listDescendant(table, dom.isCell);                                                               // 3268
                                                                                                                       // 3269
      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);                                                     // 3270
      if (nextCell) {                                                                                                  // 3271
        range.create(nextCell, 0).select();                                                                            // 3272
      }                                                                                                                // 3273
    };                                                                                                                 // 3274
                                                                                                                       // 3275
    /**                                                                                                                // 3276
     * create empty table element                                                                                      // 3277
     *                                                                                                                 // 3278
     * @param {Number} rowCount                                                                                        // 3279
     * @param {Number} colCount                                                                                        // 3280
     * @return {Node}                                                                                                  // 3281
     */                                                                                                                // 3282
    this.createTable = function (colCount, rowCount) {                                                                 // 3283
      var tds = [], tdHTML;                                                                                            // 3284
      for (var idxCol = 0; idxCol < colCount; idxCol++) {                                                              // 3285
        tds.push('<td>' + dom.blank + '</td>');                                                                        // 3286
      }                                                                                                                // 3287
      tdHTML = tds.join('');                                                                                           // 3288
                                                                                                                       // 3289
      var trs = [], trHTML;                                                                                            // 3290
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {                                                              // 3291
        trs.push('<tr>' + tdHTML + '</tr>');                                                                           // 3292
      }                                                                                                                // 3293
      trHTML = trs.join('');                                                                                           // 3294
      return $('<table class="table table-bordered">' + trHTML + '</table>')[0];                                       // 3295
    };                                                                                                                 // 3296
  };                                                                                                                   // 3297
                                                                                                                       // 3298
  /**                                                                                                                  // 3299
   * @class editing.Editor                                                                                             // 3300
   *                                                                                                                   // 3301
   * Editor                                                                                                            // 3302
   *                                                                                                                   // 3303
   */                                                                                                                  // 3304
  var Editor = function (handler) {                                                                                    // 3305
                                                                                                                       // 3306
    var style = new Style();                                                                                           // 3307
    var table = new Table();                                                                                           // 3308
    var typing = new Typing();                                                                                         // 3309
    var bullet = new Bullet();                                                                                         // 3310
                                                                                                                       // 3311
    /**                                                                                                                // 3312
     * @method createRange                                                                                             // 3313
     *                                                                                                                 // 3314
     * create range                                                                                                    // 3315
     *                                                                                                                 // 3316
     * @param {jQuery} $editable                                                                                       // 3317
     * @return {WrappedRange}                                                                                          // 3318
     */                                                                                                                // 3319
    this.createRange = function ($editable) {                                                                          // 3320
      $editable.focus();                                                                                               // 3321
      return range.create();                                                                                           // 3322
    };                                                                                                                 // 3323
                                                                                                                       // 3324
    /**                                                                                                                // 3325
     * @method saveRange                                                                                               // 3326
     *                                                                                                                 // 3327
     * save current range                                                                                              // 3328
     *                                                                                                                 // 3329
     * @param {jQuery} $editable                                                                                       // 3330
     * @param {Boolean} [thenCollapse=false]                                                                           // 3331
     */                                                                                                                // 3332
    this.saveRange = function ($editable, thenCollapse) {                                                              // 3333
      $editable.focus();                                                                                               // 3334
      $editable.data('range', range.create());                                                                         // 3335
      if (thenCollapse) {                                                                                              // 3336
        range.create().collapse().select();                                                                            // 3337
      }                                                                                                                // 3338
    };                                                                                                                 // 3339
                                                                                                                       // 3340
    /**                                                                                                                // 3341
     * @method saveRange                                                                                               // 3342
     *                                                                                                                 // 3343
     * save current node list to $editable.data('childNodes')                                                          // 3344
     *                                                                                                                 // 3345
     * @param {jQuery} $editable                                                                                       // 3346
     */                                                                                                                // 3347
    this.saveNode = function ($editable) {                                                                             // 3348
      // copy child node reference                                                                                     // 3349
      var copy = [];                                                                                                   // 3350
      for (var key  = 0, len = $editable[0].childNodes.length; key < len; key++) {                                     // 3351
        copy.push($editable[0].childNodes[key]);                                                                       // 3352
      }                                                                                                                // 3353
      $editable.data('childNodes', copy);                                                                              // 3354
    };                                                                                                                 // 3355
                                                                                                                       // 3356
    /**                                                                                                                // 3357
     * @method restoreRange                                                                                            // 3358
     *                                                                                                                 // 3359
     * restore lately range                                                                                            // 3360
     *                                                                                                                 // 3361
     * @param {jQuery} $editable                                                                                       // 3362
     */                                                                                                                // 3363
    this.restoreRange = function ($editable) {                                                                         // 3364
      var rng = $editable.data('range');                                                                               // 3365
      if (rng) {                                                                                                       // 3366
        rng.select();                                                                                                  // 3367
        $editable.focus();                                                                                             // 3368
      }                                                                                                                // 3369
    };                                                                                                                 // 3370
                                                                                                                       // 3371
    /**                                                                                                                // 3372
     * @method restoreNode                                                                                             // 3373
     *                                                                                                                 // 3374
     * restore lately node list                                                                                        // 3375
     *                                                                                                                 // 3376
     * @param {jQuery} $editable                                                                                       // 3377
     */                                                                                                                // 3378
    this.restoreNode = function ($editable) {                                                                          // 3379
      $editable.html('');                                                                                              // 3380
      var child = $editable.data('childNodes');                                                                        // 3381
      for (var index = 0, len = child.length; index < len; index++) {                                                  // 3382
        $editable[0].appendChild(child[index]);                                                                        // 3383
      }                                                                                                                // 3384
    };                                                                                                                 // 3385
    /**                                                                                                                // 3386
     * @method currentStyle                                                                                            // 3387
     *                                                                                                                 // 3388
     * current style                                                                                                   // 3389
     *                                                                                                                 // 3390
     * @param {Node} target                                                                                            // 3391
     * @return {Boolean} false if range is no                                                                          // 3392
     */                                                                                                                // 3393
    this.currentStyle = function (target) {                                                                            // 3394
      var rng = range.create();                                                                                        // 3395
      return rng ? rng.isOnEditable() && style.current(rng, target) : false;                                           // 3396
    };                                                                                                                 // 3397
                                                                                                                       // 3398
    var triggerOnBeforeChange = function ($editable) {                                                                 // 3399
      // TODO find holder                                                                                              // 3400
      handler.bindCustomEvent(                                                                                         // 3401
        $(), $editable.data('callbacks'), 'before.command'                                                             // 3402
      ).call($editable.html(), $editable);                                                                             // 3403
    };                                                                                                                 // 3404
                                                                                                                       // 3405
    var triggerOnChange = function ($editable) {                                                                       // 3406
      // TODO find holder                                                                                              // 3407
      handler.bindCustomEvent(                                                                                         // 3408
        $(), $editable.data('callbacks'), 'change'                                                                     // 3409
      ).call($editable.html(), $editable);                                                                             // 3410
    };                                                                                                                 // 3411
                                                                                                                       // 3412
    /**                                                                                                                // 3413
     * @method undo                                                                                                    // 3414
     * undo                                                                                                            // 3415
     * @param {jQuery} $editable                                                                                       // 3416
     */                                                                                                                // 3417
    this.undo = function ($editable) {                                                                                 // 3418
      triggerOnBeforeChange($editable);                                                                                // 3419
      $editable.data('NoteHistory').undo();                                                                            // 3420
      triggerOnChange($editable);                                                                                      // 3421
    };                                                                                                                 // 3422
                                                                                                                       // 3423
    /**                                                                                                                // 3424
     * @method redo                                                                                                    // 3425
     * redo                                                                                                            // 3426
     * @param {jQuery} $editable                                                                                       // 3427
     */                                                                                                                // 3428
    this.redo = function ($editable) {                                                                                 // 3429
      triggerOnBeforeChange($editable);                                                                                // 3430
      $editable.data('NoteHistory').redo();                                                                            // 3431
      triggerOnChange($editable);                                                                                      // 3432
    };                                                                                                                 // 3433
                                                                                                                       // 3434
    /**                                                                                                                // 3435
     * @method beforeCommand                                                                                           // 3436
     * before command                                                                                                  // 3437
     * @param {jQuery} $editable                                                                                       // 3438
     */                                                                                                                // 3439
    var beforeCommand = this.beforeCommand = function ($editable) {                                                    // 3440
      triggerOnBeforeChange($editable);                                                                                // 3441
    };                                                                                                                 // 3442
                                                                                                                       // 3443
    /**                                                                                                                // 3444
     * @method afterCommand                                                                                            // 3445
     * after command                                                                                                   // 3446
     * @param {jQuery} $editable                                                                                       // 3447
     * @param {Boolean} isPreventTrigger                                                                               // 3448
     */                                                                                                                // 3449
    var afterCommand = this.afterCommand = function ($editable, isPreventTrigger) {                                    // 3450
      $editable.data('NoteHistory').recordUndo();                                                                      // 3451
      if (!isPreventTrigger) {                                                                                         // 3452
        triggerOnChange($editable);                                                                                    // 3453
      }                                                                                                                // 3454
    };                                                                                                                 // 3455
                                                                                                                       // 3456
    /**                                                                                                                // 3457
     * @method bold                                                                                                    // 3458
     * @param {jQuery} $editable                                                                                       // 3459
     * @param {Mixed} value                                                                                            // 3460
     */                                                                                                                // 3461
                                                                                                                       // 3462
    /**                                                                                                                // 3463
     * @method italic                                                                                                  // 3464
     * @param {jQuery} $editable                                                                                       // 3465
     * @param {Mixed} value                                                                                            // 3466
     */                                                                                                                // 3467
                                                                                                                       // 3468
    /**                                                                                                                // 3469
     * @method underline                                                                                               // 3470
     * @param {jQuery} $editable                                                                                       // 3471
     * @param {Mixed} value                                                                                            // 3472
     */                                                                                                                // 3473
                                                                                                                       // 3474
    /**                                                                                                                // 3475
     * @method strikethrough                                                                                           // 3476
     * @param {jQuery} $editable                                                                                       // 3477
     * @param {Mixed} value                                                                                            // 3478
     */                                                                                                                // 3479
                                                                                                                       // 3480
    /**                                                                                                                // 3481
     * @method formatBlock                                                                                             // 3482
     * @param {jQuery} $editable                                                                                       // 3483
     * @param {Mixed} value                                                                                            // 3484
     */                                                                                                                // 3485
                                                                                                                       // 3486
    /**                                                                                                                // 3487
     * @method superscript                                                                                             // 3488
     * @param {jQuery} $editable                                                                                       // 3489
     * @param {Mixed} value                                                                                            // 3490
     */                                                                                                                // 3491
                                                                                                                       // 3492
    /**                                                                                                                // 3493
     * @method subscript                                                                                               // 3494
     * @param {jQuery} $editable                                                                                       // 3495
     * @param {Mixed} value                                                                                            // 3496
     */                                                                                                                // 3497
                                                                                                                       // 3498
    /**                                                                                                                // 3499
     * @method justifyLeft                                                                                             // 3500
     * @param {jQuery} $editable                                                                                       // 3501
     * @param {Mixed} value                                                                                            // 3502
     */                                                                                                                // 3503
                                                                                                                       // 3504
    /**                                                                                                                // 3505
     * @method justifyCenter                                                                                           // 3506
     * @param {jQuery} $editable                                                                                       // 3507
     * @param {Mixed} value                                                                                            // 3508
     */                                                                                                                // 3509
                                                                                                                       // 3510
    /**                                                                                                                // 3511
     * @method justifyRight                                                                                            // 3512
     * @param {jQuery} $editable                                                                                       // 3513
     * @param {Mixed} value                                                                                            // 3514
     */                                                                                                                // 3515
                                                                                                                       // 3516
    /**                                                                                                                // 3517
     * @method justifyFull                                                                                             // 3518
     * @param {jQuery} $editable                                                                                       // 3519
     * @param {Mixed} value                                                                                            // 3520
     */                                                                                                                // 3521
                                                                                                                       // 3522
    /**                                                                                                                // 3523
     * @method formatBlock                                                                                             // 3524
     * @param {jQuery} $editable                                                                                       // 3525
     * @param {Mixed} value                                                                                            // 3526
     */                                                                                                                // 3527
                                                                                                                       // 3528
    /**                                                                                                                // 3529
     * @method removeFormat                                                                                            // 3530
     * @param {jQuery} $editable                                                                                       // 3531
     * @param {Mixed} value                                                                                            // 3532
     */                                                                                                                // 3533
                                                                                                                       // 3534
    /**                                                                                                                // 3535
     * @method backColor                                                                                               // 3536
     * @param {jQuery} $editable                                                                                       // 3537
     * @param {Mixed} value                                                                                            // 3538
     */                                                                                                                // 3539
                                                                                                                       // 3540
    /**                                                                                                                // 3541
     * @method foreColor                                                                                               // 3542
     * @param {jQuery} $editable                                                                                       // 3543
     * @param {Mixed} value                                                                                            // 3544
     */                                                                                                                // 3545
                                                                                                                       // 3546
    /**                                                                                                                // 3547
     * @method insertHorizontalRule                                                                                    // 3548
     * @param {jQuery} $editable                                                                                       // 3549
     * @param {Mixed} value                                                                                            // 3550
     */                                                                                                                // 3551
                                                                                                                       // 3552
    /**                                                                                                                // 3553
     * @method fontName                                                                                                // 3554
     *                                                                                                                 // 3555
     * change font name                                                                                                // 3556
     *                                                                                                                 // 3557
     * @param {jQuery} $editable                                                                                       // 3558
     * @param {Mixed} value                                                                                            // 3559
     */                                                                                                                // 3560
                                                                                                                       // 3561
    /* jshint ignore:start */                                                                                          // 3562
    // native commands(with execCommand), generate function for execCommand                                            // 3563
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',                        // 3564
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',                                     // 3565
                    'formatBlock', 'removeFormat',                                                                     // 3566
                    'backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];                                     // 3567
                                                                                                                       // 3568
    for (var idx = 0, len = commands.length; idx < len; idx ++) {                                                      // 3569
      this[commands[idx]] = (function (sCmd) {                                                                         // 3570
        return function ($editable, value) {                                                                           // 3571
          beforeCommand($editable);                                                                                    // 3572
                                                                                                                       // 3573
          document.execCommand(sCmd, false, value);                                                                    // 3574
                                                                                                                       // 3575
          afterCommand($editable, true);                                                                               // 3576
        };                                                                                                             // 3577
      })(commands[idx]);                                                                                               // 3578
    }                                                                                                                  // 3579
    /* jshint ignore:end */                                                                                            // 3580
                                                                                                                       // 3581
    /**                                                                                                                // 3582
     * @method tab                                                                                                     // 3583
     *                                                                                                                 // 3584
     * handle tab key                                                                                                  // 3585
     *                                                                                                                 // 3586
     * @param {jQuery} $editable                                                                                       // 3587
     * @param {Object} options                                                                                         // 3588
     */                                                                                                                // 3589
    this.tab = function ($editable, options) {                                                                         // 3590
      var rng = range.create();                                                                                        // 3591
      if (rng.isCollapsed() && rng.isOnCell()) {                                                                       // 3592
        table.tab(rng);                                                                                                // 3593
      } else {                                                                                                         // 3594
        beforeCommand($editable);                                                                                      // 3595
        typing.insertTab($editable, rng, options.tabsize);                                                             // 3596
        afterCommand($editable);                                                                                       // 3597
      }                                                                                                                // 3598
    };                                                                                                                 // 3599
                                                                                                                       // 3600
    /**                                                                                                                // 3601
     * @method untab                                                                                                   // 3602
     *                                                                                                                 // 3603
     * handle shift+tab key                                                                                            // 3604
     *                                                                                                                 // 3605
     */                                                                                                                // 3606
    this.untab = function () {                                                                                         // 3607
      var rng = range.create();                                                                                        // 3608
      if (rng.isCollapsed() && rng.isOnCell()) {                                                                       // 3609
        table.tab(rng, true);                                                                                          // 3610
      }                                                                                                                // 3611
    };                                                                                                                 // 3612
                                                                                                                       // 3613
    /**                                                                                                                // 3614
     * @method insertParagraph                                                                                         // 3615
     *                                                                                                                 // 3616
     * insert paragraph                                                                                                // 3617
     *                                                                                                                 // 3618
     * @param {Node} $editable                                                                                         // 3619
     */                                                                                                                // 3620
    this.insertParagraph = function ($editable) {                                                                      // 3621
      beforeCommand($editable);                                                                                        // 3622
      typing.insertParagraph($editable);                                                                               // 3623
      afterCommand($editable);                                                                                         // 3624
    };                                                                                                                 // 3625
                                                                                                                       // 3626
    /**                                                                                                                // 3627
     * @method insertOrderedList                                                                                       // 3628
     *                                                                                                                 // 3629
     * @param {jQuery} $editable                                                                                       // 3630
     */                                                                                                                // 3631
    this.insertOrderedList = function ($editable) {                                                                    // 3632
      beforeCommand($editable);                                                                                        // 3633
      bullet.insertOrderedList($editable);                                                                             // 3634
      afterCommand($editable);                                                                                         // 3635
    };                                                                                                                 // 3636
                                                                                                                       // 3637
    /**                                                                                                                // 3638
     * @param {jQuery} $editable                                                                                       // 3639
     */                                                                                                                // 3640
    this.insertUnorderedList = function ($editable) {                                                                  // 3641
      beforeCommand($editable);                                                                                        // 3642
      bullet.insertUnorderedList($editable);                                                                           // 3643
      afterCommand($editable);                                                                                         // 3644
    };                                                                                                                 // 3645
                                                                                                                       // 3646
    /**                                                                                                                // 3647
     * @param {jQuery} $editable                                                                                       // 3648
     */                                                                                                                // 3649
    this.indent = function ($editable) {                                                                               // 3650
      beforeCommand($editable);                                                                                        // 3651
      bullet.indent($editable);                                                                                        // 3652
      afterCommand($editable);                                                                                         // 3653
    };                                                                                                                 // 3654
                                                                                                                       // 3655
    /**                                                                                                                // 3656
     * @param {jQuery} $editable                                                                                       // 3657
     */                                                                                                                // 3658
    this.outdent = function ($editable) {                                                                              // 3659
      beforeCommand($editable);                                                                                        // 3660
      bullet.outdent($editable);                                                                                       // 3661
      afterCommand($editable);                                                                                         // 3662
    };                                                                                                                 // 3663
                                                                                                                       // 3664
    /**                                                                                                                // 3665
     * insert image                                                                                                    // 3666
     *                                                                                                                 // 3667
     * @param {jQuery} $editable                                                                                       // 3668
     * @param {String} sUrl                                                                                            // 3669
     */                                                                                                                // 3670
    this.insertImage = function ($editable, sUrl, filename) {                                                          // 3671
      async.createImage(sUrl, filename).then(function ($image) {                                                       // 3672
        beforeCommand($editable);                                                                                      // 3673
        $image.css({                                                                                                   // 3674
          display: '',                                                                                                 // 3675
          width: Math.min($editable.width(), $image.width())                                                           // 3676
        });                                                                                                            // 3677
        range.create().insertNode($image[0]);                                                                          // 3678
        range.createFromNode($image[0]).collapse().select();                                                           // 3679
        afterCommand($editable);                                                                                       // 3680
      }).fail(function () {                                                                                            // 3681
        var callbacks = $editable.data('callbacks');                                                                   // 3682
        if (callbacks.onImageUploadError) {                                                                            // 3683
          callbacks.onImageUploadError();                                                                              // 3684
        }                                                                                                              // 3685
      });                                                                                                              // 3686
    };                                                                                                                 // 3687
                                                                                                                       // 3688
    /**                                                                                                                // 3689
     * @method insertNode                                                                                              // 3690
     * insert node                                                                                                     // 3691
     * @param {Node} $editable                                                                                         // 3692
     * @param {Node} node                                                                                              // 3693
     */                                                                                                                // 3694
    this.insertNode = function ($editable, node) {                                                                     // 3695
      beforeCommand($editable);                                                                                        // 3696
      var rng = this.createRange($editable);                                                                           // 3697
      rng.insertNode(node);                                                                                            // 3698
      range.createFromNode(node).collapse().select();                                                                  // 3699
      afterCommand($editable);                                                                                         // 3700
    };                                                                                                                 // 3701
                                                                                                                       // 3702
    /**                                                                                                                // 3703
     * insert text                                                                                                     // 3704
     * @param {Node} $editable                                                                                         // 3705
     * @param {String} text                                                                                            // 3706
     */                                                                                                                // 3707
    this.insertText = function ($editable, text) {                                                                     // 3708
      beforeCommand($editable);                                                                                        // 3709
      var rng = this.createRange($editable);                                                                           // 3710
      var textNode = rng.insertNode(dom.createText(text));                                                             // 3711
      range.create(textNode, dom.nodeLength(textNode)).select();                                                       // 3712
      afterCommand($editable);                                                                                         // 3713
    };                                                                                                                 // 3714
                                                                                                                       // 3715
    /**                                                                                                                // 3716
     * paste HTML                                                                                                      // 3717
     * @param {Node} $editable                                                                                         // 3718
     * @param {String} markup                                                                                          // 3719
     */                                                                                                                // 3720
    this.pasteHTML = function ($editable, markup) {                                                                    // 3721
      beforeCommand($editable);                                                                                        // 3722
      var rng = this.createRange($editable);                                                                           // 3723
      var contents = rng.pasteHTML(markup);                                                                            // 3724
      range.createFromNode(list.last(contents)).collapse().select();                                                   // 3725
      afterCommand($editable);                                                                                         // 3726
    };                                                                                                                 // 3727
                                                                                                                       // 3728
    /**                                                                                                                // 3729
     * formatBlock                                                                                                     // 3730
     *                                                                                                                 // 3731
     * @param {jQuery} $editable                                                                                       // 3732
     * @param {String} tagName                                                                                         // 3733
     */                                                                                                                // 3734
    this.formatBlock = function ($editable, tagName) {                                                                 // 3735
      beforeCommand($editable);                                                                                        // 3736
      // [workaround] for MSIE, IE need `<`                                                                            // 3737
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;                                                          // 3738
      document.execCommand('FormatBlock', false, tagName);                                                             // 3739
      afterCommand($editable);                                                                                         // 3740
    };                                                                                                                 // 3741
                                                                                                                       // 3742
    this.formatPara = function ($editable) {                                                                           // 3743
      beforeCommand($editable);                                                                                        // 3744
      this.formatBlock($editable, 'P');                                                                                // 3745
      afterCommand($editable);                                                                                         // 3746
    };                                                                                                                 // 3747
                                                                                                                       // 3748
    /* jshint ignore:start */                                                                                          // 3749
    for (var idx = 1; idx <= 6; idx ++) {                                                                              // 3750
      this['formatH' + idx] = function (idx) {                                                                         // 3751
        return function ($editable) {                                                                                  // 3752
          this.formatBlock($editable, 'H' + idx);                                                                      // 3753
        };                                                                                                             // 3754
      }(idx);                                                                                                          // 3755
    };                                                                                                                 // 3756
    /* jshint ignore:end */                                                                                            // 3757
                                                                                                                       // 3758
    /**                                                                                                                // 3759
     * fontSize                                                                                                        // 3760
     *                                                                                                                 // 3761
     * @param {jQuery} $editable                                                                                       // 3762
     * @param {String} value - px                                                                                      // 3763
     */                                                                                                                // 3764
    this.fontSize = function ($editable, value) {                                                                      // 3765
      beforeCommand($editable);                                                                                        // 3766
                                                                                                                       // 3767
      var rng = this.createRange($editable);                                                                           // 3768
      var spans = style.styleNodes(rng);                                                                               // 3769
      $.each(spans, function (idx, span) {                                                                             // 3770
        $(span).css({                                                                                                  // 3771
          'font-size': value + 'px'                                                                                    // 3772
        });                                                                                                            // 3773
      });                                                                                                              // 3774
                                                                                                                       // 3775
      afterCommand($editable);                                                                                         // 3776
    };                                                                                                                 // 3777
                                                                                                                       // 3778
    /**                                                                                                                // 3779
     * lineHeight                                                                                                      // 3780
     * @param {jQuery} $editable                                                                                       // 3781
     * @param {String} value                                                                                           // 3782
     */                                                                                                                // 3783
    this.lineHeight = function ($editable, value) {                                                                    // 3784
      beforeCommand($editable);                                                                                        // 3785
      style.stylePara(range.create(), {                                                                                // 3786
        lineHeight: value                                                                                              // 3787
      });                                                                                                              // 3788
      afterCommand($editable);                                                                                         // 3789
    };                                                                                                                 // 3790
                                                                                                                       // 3791
    /**                                                                                                                // 3792
     * unlink                                                                                                          // 3793
     *                                                                                                                 // 3794
     * @type command                                                                                                   // 3795
     *                                                                                                                 // 3796
     * @param {jQuery} $editable                                                                                       // 3797
     */                                                                                                                // 3798
    this.unlink = function ($editable) {                                                                               // 3799
      var rng = range.create();                                                                                        // 3800
      if (rng.isOnAnchor()) {                                                                                          // 3801
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);                                                               // 3802
        rng = range.createFromNode(anchor);                                                                            // 3803
        rng.select();                                                                                                  // 3804
                                                                                                                       // 3805
        beforeCommand($editable);                                                                                      // 3806
        document.execCommand('unlink');                                                                                // 3807
        afterCommand($editable);                                                                                       // 3808
      }                                                                                                                // 3809
    };                                                                                                                 // 3810
                                                                                                                       // 3811
    /**                                                                                                                // 3812
     * create link (command)                                                                                           // 3813
     *                                                                                                                 // 3814
     * @param {jQuery} $editable                                                                                       // 3815
     * @param {Object} linkInfo                                                                                        // 3816
     * @param {Object} options                                                                                         // 3817
     */                                                                                                                // 3818
    this.createLink = function ($editable, linkInfo, options) {                                                        // 3819
      var linkUrl = linkInfo.url;                                                                                      // 3820
      var linkText = linkInfo.text;                                                                                    // 3821
      var isNewWindow = linkInfo.newWindow;                                                                            // 3822
      var rng = linkInfo.range;                                                                                        // 3823
      var isTextChanged = rng.toString() !== linkText;                                                                 // 3824
                                                                                                                       // 3825
      beforeCommand($editable);                                                                                        // 3826
                                                                                                                       // 3827
      if (options.onCreateLink) {                                                                                      // 3828
        linkUrl = options.onCreateLink(linkUrl);                                                                       // 3829
      }                                                                                                                // 3830
                                                                                                                       // 3831
      var anchors;                                                                                                     // 3832
      if (isTextChanged) {                                                                                             // 3833
        // Create a new link when text changed.                                                                        // 3834
        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);                                                  // 3835
        anchors = [anchor];                                                                                            // 3836
      } else {                                                                                                         // 3837
        anchors = style.styleNodes(rng, {                                                                              // 3838
          nodeName: 'A',                                                                                               // 3839
          expandClosestSibling: true,                                                                                  // 3840
          onlyPartialContains: true                                                                                    // 3841
        });                                                                                                            // 3842
      }                                                                                                                // 3843
                                                                                                                       // 3844
      $.each(anchors, function (idx, anchor) {                                                                         // 3845
        $(anchor).attr('href', linkUrl);                                                                               // 3846
        if (isNewWindow) {                                                                                             // 3847
          $(anchor).attr('target', '_blank');                                                                          // 3848
        } else {                                                                                                       // 3849
          $(anchor).removeAttr('target');                                                                              // 3850
        }                                                                                                              // 3851
      });                                                                                                              // 3852
                                                                                                                       // 3853
      var startRange = range.createFromNode(list.head(anchors)).collapse(true);                                        // 3854
      var startPoint = startRange.getStartPoint();                                                                     // 3855
      var endRange = range.createFromNode(list.last(anchors)).collapse();                                              // 3856
      var endPoint = endRange.getEndPoint();                                                                           // 3857
                                                                                                                       // 3858
      range.create(                                                                                                    // 3859
        startPoint.node,                                                                                               // 3860
        startPoint.offset,                                                                                             // 3861
        endPoint.node,                                                                                                 // 3862
        endPoint.offset                                                                                                // 3863
      ).select();                                                                                                      // 3864
                                                                                                                       // 3865
      afterCommand($editable);                                                                                         // 3866
    };                                                                                                                 // 3867
                                                                                                                       // 3868
    /**                                                                                                                // 3869
     * returns link info                                                                                               // 3870
     *                                                                                                                 // 3871
     * @return {Object}                                                                                                // 3872
     * @return {WrappedRange} return.range                                                                             // 3873
     * @return {String} return.text                                                                                    // 3874
     * @return {Boolean} [return.isNewWindow=true]                                                                     // 3875
     * @return {String} [return.url=""]                                                                                // 3876
     */                                                                                                                // 3877
    this.getLinkInfo = function ($editable) {                                                                          // 3878
      $editable.focus();                                                                                               // 3879
                                                                                                                       // 3880
      var rng = range.create().expand(dom.isAnchor);                                                                   // 3881
                                                                                                                       // 3882
      // Get the first anchor on range(for edit).                                                                      // 3883
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));                                                             // 3884
                                                                                                                       // 3885
      return {                                                                                                         // 3886
        range: rng,                                                                                                    // 3887
        text: rng.toString(),                                                                                          // 3888
        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : false,                                     // 3889
        url: $anchor.length ? $anchor.attr('href') : ''                                                                // 3890
      };                                                                                                               // 3891
    };                                                                                                                 // 3892
                                                                                                                       // 3893
    /**                                                                                                                // 3894
     * setting color                                                                                                   // 3895
     *                                                                                                                 // 3896
     * @param {Node} $editable                                                                                         // 3897
     * @param {Object} sObjColor  color code                                                                           // 3898
     * @param {String} sObjColor.foreColor foreground color                                                            // 3899
     * @param {String} sObjColor.backColor background color                                                            // 3900
     */                                                                                                                // 3901
    this.color = function ($editable, sObjColor) {                                                                     // 3902
      var oColor = JSON.parse(sObjColor);                                                                              // 3903
      var foreColor = oColor.foreColor, backColor = oColor.backColor;                                                  // 3904
                                                                                                                       // 3905
      beforeCommand($editable);                                                                                        // 3906
                                                                                                                       // 3907
      if (foreColor) { document.execCommand('foreColor', false, foreColor); }                                          // 3908
      if (backColor) { document.execCommand('backColor', false, backColor); }                                          // 3909
                                                                                                                       // 3910
      afterCommand($editable);                                                                                         // 3911
    };                                                                                                                 // 3912
                                                                                                                       // 3913
    /**                                                                                                                // 3914
     * insert Table                                                                                                    // 3915
     *                                                                                                                 // 3916
     * @param {Node} $editable                                                                                         // 3917
     * @param {String} sDim dimension of table (ex : "5x5")                                                            // 3918
     */                                                                                                                // 3919
    this.insertTable = function ($editable, sDim) {                                                                    // 3920
      var dimension = sDim.split('x');                                                                                 // 3921
      beforeCommand($editable);                                                                                        // 3922
                                                                                                                       // 3923
      var rng = range.create();                                                                                        // 3924
      rng = rng.deleteContents();                                                                                      // 3925
      rng.insertNode(table.createTable(dimension[0], dimension[1]));                                                   // 3926
      afterCommand($editable);                                                                                         // 3927
    };                                                                                                                 // 3928
                                                                                                                       // 3929
    /**                                                                                                                // 3930
     * float me                                                                                                        // 3931
     *                                                                                                                 // 3932
     * @param {jQuery} $editable                                                                                       // 3933
     * @param {String} value                                                                                           // 3934
     * @param {jQuery} $target                                                                                         // 3935
     */                                                                                                                // 3936
    this.floatMe = function ($editable, value, $target) {                                                              // 3937
      beforeCommand($editable);                                                                                        // 3938
      $target.css('float', value);                                                                                     // 3939
      afterCommand($editable);                                                                                         // 3940
    };                                                                                                                 // 3941
                                                                                                                       // 3942
    /**                                                                                                                // 3943
     * change image shape                                                                                              // 3944
     *                                                                                                                 // 3945
     * @param {jQuery} $editable                                                                                       // 3946
     * @param {String} value css class                                                                                 // 3947
     * @param {Node} $target                                                                                           // 3948
     */                                                                                                                // 3949
    this.imageShape = function ($editable, value, $target) {                                                           // 3950
      beforeCommand($editable);                                                                                        // 3951
                                                                                                                       // 3952
      $target.removeClass('img-rounded img-circle img-thumbnail');                                                     // 3953
                                                                                                                       // 3954
      if (value) {                                                                                                     // 3955
        $target.addClass(value);                                                                                       // 3956
      }                                                                                                                // 3957
                                                                                                                       // 3958
      afterCommand($editable);                                                                                         // 3959
    };                                                                                                                 // 3960
                                                                                                                       // 3961
    /**                                                                                                                // 3962
     * resize overlay element                                                                                          // 3963
     * @param {jQuery} $editable                                                                                       // 3964
     * @param {String} value                                                                                           // 3965
     * @param {jQuery} $target - target element                                                                        // 3966
     */                                                                                                                // 3967
    this.resize = function ($editable, value, $target) {                                                               // 3968
      beforeCommand($editable);                                                                                        // 3969
                                                                                                                       // 3970
      $target.css({                                                                                                    // 3971
        width: value * 100 + '%',                                                                                      // 3972
        height: ''                                                                                                     // 3973
      });                                                                                                              // 3974
                                                                                                                       // 3975
      afterCommand($editable);                                                                                         // 3976
    };                                                                                                                 // 3977
                                                                                                                       // 3978
    /**                                                                                                                // 3979
     * @param {Position} pos                                                                                           // 3980
     * @param {jQuery} $target - target element                                                                        // 3981
     * @param {Boolean} [bKeepRatio] - keep ratio                                                                      // 3982
     */                                                                                                                // 3983
    this.resizeTo = function (pos, $target, bKeepRatio) {                                                              // 3984
      var imageSize;                                                                                                   // 3985
      if (bKeepRatio) {                                                                                                // 3986
        var newRatio = pos.y / pos.x;                                                                                  // 3987
        var ratio = $target.data('ratio');                                                                             // 3988
        imageSize = {                                                                                                  // 3989
          width: ratio > newRatio ? pos.x : pos.y / ratio,                                                             // 3990
          height: ratio > newRatio ? pos.x * ratio : pos.y                                                             // 3991
        };                                                                                                             // 3992
      } else {                                                                                                         // 3993
        imageSize = {                                                                                                  // 3994
          width: pos.x,                                                                                                // 3995
          height: pos.y                                                                                                // 3996
        };                                                                                                             // 3997
      }                                                                                                                // 3998
                                                                                                                       // 3999
      $target.css(imageSize);                                                                                          // 4000
    };                                                                                                                 // 4001
                                                                                                                       // 4002
    /**                                                                                                                // 4003
     * remove media object                                                                                             // 4004
     *                                                                                                                 // 4005
     * @param {jQuery} $editable                                                                                       // 4006
     * @param {String} value - dummy argument (for keep interface)                                                     // 4007
     * @param {jQuery} $target - target element                                                                        // 4008
     */                                                                                                                // 4009
    this.removeMedia = function ($editable, value, $target) {                                                          // 4010
      beforeCommand($editable);                                                                                        // 4011
      $target.detach();                                                                                                // 4012
                                                                                                                       // 4013
      handler.bindCustomEvent(                                                                                         // 4014
        $(), $editable.data('callbacks'), 'media.delete'                                                               // 4015
      ).call($target, this.$editable);                                                                                 // 4016
                                                                                                                       // 4017
      afterCommand($editable);                                                                                         // 4018
    };                                                                                                                 // 4019
                                                                                                                       // 4020
    /**                                                                                                                // 4021
     * set focus                                                                                                       // 4022
     *                                                                                                                 // 4023
     * @param $editable                                                                                                // 4024
     */                                                                                                                // 4025
    this.focus = function ($editable) {                                                                                // 4026
      $editable.focus();                                                                                               // 4027
                                                                                                                       // 4028
      // [workaround] for firefox bug http://goo.gl/lVfAaI                                                             // 4029
      if (agent.isFF) {                                                                                                // 4030
        range.createFromNode($editable[0].firstChild || $editable[0]).collapse().select();                             // 4031
      }                                                                                                                // 4032
    };                                                                                                                 // 4033
  };                                                                                                                   // 4034
                                                                                                                       // 4035
  /**                                                                                                                  // 4036
   * @class module.Button                                                                                              // 4037
   *                                                                                                                   // 4038
   * Button                                                                                                            // 4039
   */                                                                                                                  // 4040
  var Button = function () {                                                                                           // 4041
    /**                                                                                                                // 4042
     * update button status                                                                                            // 4043
     *                                                                                                                 // 4044
     * @param {jQuery} $container                                                                                      // 4045
     * @param {Object} styleInfo                                                                                       // 4046
     */                                                                                                                // 4047
    this.update = function ($container, styleInfo) {                                                                   // 4048
      /**                                                                                                              // 4049
       * handle dropdown's check mark (for fontname, fontsize, lineHeight).                                            // 4050
       * @param {jQuery} $btn                                                                                          // 4051
       * @param {Number} value                                                                                         // 4052
       */                                                                                                              // 4053
      var checkDropdownMenu = function ($btn, value) {                                                                 // 4054
        $btn.find('.dropdown-menu li a').each(function () {                                                            // 4055
          // always compare string to avoid creating another func.                                                     // 4056
          var isChecked = ($(this).data('value') + '') === (value + '');                                               // 4057
          this.className = isChecked ? 'checked' : '';                                                                 // 4058
        });                                                                                                            // 4059
      };                                                                                                               // 4060
                                                                                                                       // 4061
      /**                                                                                                              // 4062
       * update button state(active or not).                                                                           // 4063
       *                                                                                                               // 4064
       * @private                                                                                                      // 4065
       * @param {String} selector                                                                                      // 4066
       * @param {Function} pred                                                                                        // 4067
       */                                                                                                              // 4068
      var btnState = function (selector, pred) {                                                                       // 4069
        var $btn = $container.find(selector);                                                                          // 4070
        $btn.toggleClass('active', pred());                                                                            // 4071
      };                                                                                                               // 4072
                                                                                                                       // 4073
      if (styleInfo.image) {                                                                                           // 4074
        var $img = $(styleInfo.image);                                                                                 // 4075
                                                                                                                       // 4076
        btnState('button[data-event="imageShape"][data-value="img-rounded"]', function () {                            // 4077
          return $img.hasClass('img-rounded');                                                                         // 4078
        });                                                                                                            // 4079
        btnState('button[data-event="imageShape"][data-value="img-circle"]', function () {                             // 4080
          return $img.hasClass('img-circle');                                                                          // 4081
        });                                                                                                            // 4082
        btnState('button[data-event="imageShape"][data-value="img-thumbnail"]', function () {                          // 4083
          return $img.hasClass('img-thumbnail');                                                                       // 4084
        });                                                                                                            // 4085
        btnState('button[data-event="imageShape"]:not([data-value])', function () {                                    // 4086
          return !$img.is('.img-rounded, .img-circle, .img-thumbnail');                                                // 4087
        });                                                                                                            // 4088
                                                                                                                       // 4089
        var imgFloat = $img.css('float');                                                                              // 4090
        btnState('button[data-event="floatMe"][data-value="left"]', function () {                                      // 4091
          return imgFloat === 'left';                                                                                  // 4092
        });                                                                                                            // 4093
        btnState('button[data-event="floatMe"][data-value="right"]', function () {                                     // 4094
          return imgFloat === 'right';                                                                                 // 4095
        });                                                                                                            // 4096
        btnState('button[data-event="floatMe"][data-value="none"]', function () {                                      // 4097
          return imgFloat !== 'left' && imgFloat !== 'right';                                                          // 4098
        });                                                                                                            // 4099
                                                                                                                       // 4100
        var style = $img.attr('style');                                                                                // 4101
        btnState('button[data-event="resize"][data-value="1"]', function () {                                          // 4102
          return !!/(^|\s)(max-)?width\s*:\s*100%/.test(style);                                                        // 4103
        });                                                                                                            // 4104
        btnState('button[data-event="resize"][data-value="0.5"]', function () {                                        // 4105
          return !!/(^|\s)(max-)?width\s*:\s*50%/.test(style);                                                         // 4106
        });                                                                                                            // 4107
        btnState('button[data-event="resize"][data-value="0.25"]', function () {                                       // 4108
          return !!/(^|\s)(max-)?width\s*:\s*25%/.test(style);                                                         // 4109
        });                                                                                                            // 4110
        return;                                                                                                        // 4111
      }                                                                                                                // 4112
                                                                                                                       // 4113
      // fontname                                                                                                      // 4114
      var $fontname = $container.find('.note-fontname');                                                               // 4115
      if ($fontname.length) {                                                                                          // 4116
        var selectedFont = styleInfo['font-family'];                                                                   // 4117
        if (!!selectedFont) {                                                                                          // 4118
                                                                                                                       // 4119
          var list = selectedFont.split(',');                                                                          // 4120
          for (var i = 0, len = list.length; i < len; i++) {                                                           // 4121
            selectedFont = list[i].replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');                     // 4122
            if (agent.isFontInstalled(selectedFont)) {                                                                 // 4123
              break;                                                                                                   // 4124
            }                                                                                                          // 4125
          }                                                                                                            // 4126
                                                                                                                       // 4127
          $fontname.find('.note-current-fontname').text(selectedFont);                                                 // 4128
          checkDropdownMenu($fontname, selectedFont);                                                                  // 4129
                                                                                                                       // 4130
        }                                                                                                              // 4131
      }                                                                                                                // 4132
                                                                                                                       // 4133
      // fontsize                                                                                                      // 4134
      var $fontsize = $container.find('.note-fontsize');                                                               // 4135
      $fontsize.find('.note-current-fontsize').text(styleInfo['font-size']);                                           // 4136
      checkDropdownMenu($fontsize, parseFloat(styleInfo['font-size']));                                                // 4137
                                                                                                                       // 4138
      // lineheight                                                                                                    // 4139
      var $lineHeight = $container.find('.note-height');                                                               // 4140
      checkDropdownMenu($lineHeight, parseFloat(styleInfo['line-height']));                                            // 4141
                                                                                                                       // 4142
      btnState('button[data-event="bold"]', function () {                                                              // 4143
        return styleInfo['font-bold'] === 'bold';                                                                      // 4144
      });                                                                                                              // 4145
      btnState('button[data-event="italic"]', function () {                                                            // 4146
        return styleInfo['font-italic'] === 'italic';                                                                  // 4147
      });                                                                                                              // 4148
      btnState('button[data-event="underline"]', function () {                                                         // 4149
        return styleInfo['font-underline'] === 'underline';                                                            // 4150
      });                                                                                                              // 4151
      btnState('button[data-event="strikethrough"]', function () {                                                     // 4152
        return styleInfo['font-strikethrough'] === 'strikethrough';                                                    // 4153
      });                                                                                                              // 4154
      btnState('button[data-event="superscript"]', function () {                                                       // 4155
        return styleInfo['font-superscript'] === 'superscript';                                                        // 4156
      });                                                                                                              // 4157
      btnState('button[data-event="subscript"]', function () {                                                         // 4158
        return styleInfo['font-subscript'] === 'subscript';                                                            // 4159
      });                                                                                                              // 4160
      btnState('button[data-event="justifyLeft"]', function () {                                                       // 4161
        return styleInfo['text-align'] === 'left' || styleInfo['text-align'] === 'start';                              // 4162
      });                                                                                                              // 4163
      btnState('button[data-event="justifyCenter"]', function () {                                                     // 4164
        return styleInfo['text-align'] === 'center';                                                                   // 4165
      });                                                                                                              // 4166
      btnState('button[data-event="justifyRight"]', function () {                                                      // 4167
        return styleInfo['text-align'] === 'right';                                                                    // 4168
      });                                                                                                              // 4169
      btnState('button[data-event="justifyFull"]', function () {                                                       // 4170
        return styleInfo['text-align'] === 'justify';                                                                  // 4171
      });                                                                                                              // 4172
      btnState('button[data-event="insertUnorderedList"]', function () {                                               // 4173
        return styleInfo['list-style'] === 'unordered';                                                                // 4174
      });                                                                                                              // 4175
      btnState('button[data-event="insertOrderedList"]', function () {                                                 // 4176
        return styleInfo['list-style'] === 'ordered';                                                                  // 4177
      });                                                                                                              // 4178
    };                                                                                                                 // 4179
                                                                                                                       // 4180
    /**                                                                                                                // 4181
     * update recent color                                                                                             // 4182
     *                                                                                                                 // 4183
     * @param {Node} button                                                                                            // 4184
     * @param {String} eventName                                                                                       // 4185
     * @param {Mixed} value                                                                                            // 4186
     */                                                                                                                // 4187
    this.updateRecentColor = function (button, eventName, value) {                                                     // 4188
      var $color = $(button).closest('.note-color');                                                                   // 4189
      var $recentColor = $color.find('.note-recent-color');                                                            // 4190
      var colorInfo = JSON.parse($recentColor.attr('data-value'));                                                     // 4191
      colorInfo[eventName] = value;                                                                                    // 4192
      $recentColor.attr('data-value', JSON.stringify(colorInfo));                                                      // 4193
      var sKey = eventName === 'backColor' ? 'background-color' : 'color';                                             // 4194
      $recentColor.find('i').css(sKey, value);                                                                         // 4195
    };                                                                                                                 // 4196
  };                                                                                                                   // 4197
                                                                                                                       // 4198
  /**                                                                                                                  // 4199
   * @class module.Toolbar                                                                                             // 4200
   *                                                                                                                   // 4201
   * Toolbar                                                                                                           // 4202
   */                                                                                                                  // 4203
  var Toolbar = function () {                                                                                          // 4204
    var button = new Button();                                                                                         // 4205
                                                                                                                       // 4206
    this.update = function ($toolbar, styleInfo) {                                                                     // 4207
      button.update($toolbar, styleInfo);                                                                              // 4208
    };                                                                                                                 // 4209
                                                                                                                       // 4210
    /**                                                                                                                // 4211
     * @param {Node} button                                                                                            // 4212
     * @param {String} eventName                                                                                       // 4213
     * @param {String} value                                                                                           // 4214
     */                                                                                                                // 4215
    this.updateRecentColor = function (buttonNode, eventName, value) {                                                 // 4216
      button.updateRecentColor(buttonNode, eventName, value);                                                          // 4217
    };                                                                                                                 // 4218
                                                                                                                       // 4219
    /**                                                                                                                // 4220
     * activate buttons exclude codeview                                                                               // 4221
     * @param {jQuery} $toolbar                                                                                        // 4222
     */                                                                                                                // 4223
    this.activate = function ($toolbar) {                                                                              // 4224
      $toolbar.find('button')                                                                                          // 4225
              .not('button[data-event="codeview"]')                                                                    // 4226
              .removeClass('disabled');                                                                                // 4227
    };                                                                                                                 // 4228
                                                                                                                       // 4229
    /**                                                                                                                // 4230
     * deactivate buttons exclude codeview                                                                             // 4231
     * @param {jQuery} $toolbar                                                                                        // 4232
     */                                                                                                                // 4233
    this.deactivate = function ($toolbar) {                                                                            // 4234
      $toolbar.find('button')                                                                                          // 4235
              .not('button[data-event="codeview"]')                                                                    // 4236
              .addClass('disabled');                                                                                   // 4237
    };                                                                                                                 // 4238
                                                                                                                       // 4239
    /**                                                                                                                // 4240
     * @param {jQuery} $container                                                                                      // 4241
     * @param {Boolean} [bFullscreen=false]                                                                            // 4242
     */                                                                                                                // 4243
    this.updateFullscreen = function ($container, bFullscreen) {                                                       // 4244
      var $btn = $container.find('button[data-event="fullscreen"]');                                                   // 4245
      $btn.toggleClass('active', bFullscreen);                                                                         // 4246
    };                                                                                                                 // 4247
                                                                                                                       // 4248
    /**                                                                                                                // 4249
     * @param {jQuery} $container                                                                                      // 4250
     * @param {Boolean} [isCodeview=false]                                                                             // 4251
     */                                                                                                                // 4252
    this.updateCodeview = function ($container, isCodeview) {                                                          // 4253
      var $btn = $container.find('button[data-event="codeview"]');                                                     // 4254
      $btn.toggleClass('active', isCodeview);                                                                          // 4255
                                                                                                                       // 4256
      if (isCodeview) {                                                                                                // 4257
        this.deactivate($container);                                                                                   // 4258
      } else {                                                                                                         // 4259
        this.activate($container);                                                                                     // 4260
      }                                                                                                                // 4261
    };                                                                                                                 // 4262
                                                                                                                       // 4263
    /**                                                                                                                // 4264
     * get button in toolbar                                                                                           // 4265
     *                                                                                                                 // 4266
     * @param {jQuery} $editable                                                                                       // 4267
     * @param {String} name                                                                                            // 4268
     * @return {jQuery}                                                                                                // 4269
     */                                                                                                                // 4270
    this.get = function ($editable, name) {                                                                            // 4271
      var $toolbar = dom.makeLayoutInfo($editable).toolbar();                                                          // 4272
                                                                                                                       // 4273
      return $toolbar.find('[data-name=' + name + ']');                                                                // 4274
    };                                                                                                                 // 4275
                                                                                                                       // 4276
    /**                                                                                                                // 4277
     * set button state                                                                                                // 4278
     * @param {jQuery} $editable                                                                                       // 4279
     * @param {String} name                                                                                            // 4280
     * @param {Boolean} [isActive=true]                                                                                // 4281
     */                                                                                                                // 4282
    this.setButtonState = function ($editable, name, isActive) {                                                       // 4283
      isActive = (isActive === false) ? false : true;                                                                  // 4284
                                                                                                                       // 4285
      var $button = this.get($editable, name);                                                                         // 4286
      $button.toggleClass('active', isActive);                                                                         // 4287
    };                                                                                                                 // 4288
  };                                                                                                                   // 4289
                                                                                                                       // 4290
  var EDITABLE_PADDING = 24;                                                                                           // 4291
                                                                                                                       // 4292
  var Statusbar = function () {                                                                                        // 4293
    var $document = $(document);                                                                                       // 4294
                                                                                                                       // 4295
    this.attach = function (layoutInfo, options) {                                                                     // 4296
      if (!options.disableResizeEditor) {                                                                              // 4297
        layoutInfo.statusbar().on('mousedown', hStatusbarMousedown);                                                   // 4298
      }                                                                                                                // 4299
    };                                                                                                                 // 4300
                                                                                                                       // 4301
    /**                                                                                                                // 4302
     * `mousedown` event handler on statusbar                                                                          // 4303
     *                                                                                                                 // 4304
     * @param {MouseEvent} event                                                                                       // 4305
     */                                                                                                                // 4306
    var hStatusbarMousedown = function (event) {                                                                       // 4307
      event.preventDefault();                                                                                          // 4308
      event.stopPropagation();                                                                                         // 4309
                                                                                                                       // 4310
      var $editable = dom.makeLayoutInfo(event.target).editable();                                                     // 4311
      var editableTop = $editable.offset().top - $document.scrollTop();                                                // 4312
                                                                                                                       // 4313
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 4314
      var options = layoutInfo.editor().data('options');                                                               // 4315
                                                                                                                       // 4316
      $document.on('mousemove', function (event) {                                                                     // 4317
        var nHeight = event.clientY - (editableTop + EDITABLE_PADDING);                                                // 4318
                                                                                                                       // 4319
        nHeight = (options.minHeight > 0) ? Math.max(nHeight, options.minHeight) : nHeight;                            // 4320
        nHeight = (options.maxHeight > 0) ? Math.min(nHeight, options.maxHeight) : nHeight;                            // 4321
                                                                                                                       // 4322
        $editable.height(nHeight);                                                                                     // 4323
      }).one('mouseup', function () {                                                                                  // 4324
        $document.off('mousemove');                                                                                    // 4325
      });                                                                                                              // 4326
    };                                                                                                                 // 4327
  };                                                                                                                   // 4328
                                                                                                                       // 4329
  /**                                                                                                                  // 4330
   * @class module.Popover                                                                                             // 4331
   *                                                                                                                   // 4332
   * Popover (http://getbootstrap.com/javascript/#popovers)                                                            // 4333
   *                                                                                                                   // 4334
   */                                                                                                                  // 4335
  var Popover = function () {                                                                                          // 4336
    var button = new Button();                                                                                         // 4337
                                                                                                                       // 4338
    /**                                                                                                                // 4339
     * returns position from placeholder                                                                               // 4340
     *                                                                                                                 // 4341
     * @private                                                                                                        // 4342
     * @param {Node} placeholder                                                                                       // 4343
     * @param {Boolean} isAirMode                                                                                      // 4344
     * @return {Object}                                                                                                // 4345
     * @return {Number} return.left                                                                                    // 4346
     * @return {Number} return.top                                                                                     // 4347
     */                                                                                                                // 4348
    var posFromPlaceholder = function (placeholder, isAirMode) {                                                       // 4349
      var $placeholder = $(placeholder);                                                                               // 4350
      var pos = isAirMode ? $placeholder.offset() : $placeholder.position();                                           // 4351
      var height = $placeholder.outerHeight(true); // include margin                                                   // 4352
                                                                                                                       // 4353
      // popover below placeholder.                                                                                    // 4354
      return {                                                                                                         // 4355
        left: pos.left,                                                                                                // 4356
        top: pos.top + height                                                                                          // 4357
      };                                                                                                               // 4358
    };                                                                                                                 // 4359
                                                                                                                       // 4360
    /**                                                                                                                // 4361
     * show popover                                                                                                    // 4362
     *                                                                                                                 // 4363
     * @private                                                                                                        // 4364
     * @param {jQuery} popover                                                                                         // 4365
     * @param {Position} pos                                                                                           // 4366
     */                                                                                                                // 4367
    var showPopover = function ($popover, pos) {                                                                       // 4368
      $popover.css({                                                                                                   // 4369
        display: 'block',                                                                                              // 4370
        left: pos.left,                                                                                                // 4371
        top: pos.top                                                                                                   // 4372
      });                                                                                                              // 4373
    };                                                                                                                 // 4374
                                                                                                                       // 4375
    var PX_POPOVER_ARROW_OFFSET_X = 20;                                                                                // 4376
                                                                                                                       // 4377
    /**                                                                                                                // 4378
     * update current state                                                                                            // 4379
     * @param {jQuery} $popover - popover container                                                                    // 4380
     * @param {Object} styleInfo - style object                                                                        // 4381
     * @param {Boolean} isAirMode                                                                                      // 4382
     */                                                                                                                // 4383
    this.update = function ($popover, styleInfo, isAirMode) {                                                          // 4384
      button.update($popover, styleInfo);                                                                              // 4385
                                                                                                                       // 4386
      var $linkPopover = $popover.find('.note-link-popover');                                                          // 4387
      if (styleInfo.anchor) {                                                                                          // 4388
        var $anchor = $linkPopover.find('a');                                                                          // 4389
        var href = $(styleInfo.anchor).attr('href');                                                                   // 4390
        var target = $(styleInfo.anchor).attr('target');                                                               // 4391
        $anchor.attr('href', href).html(href);                                                                         // 4392
        if (!target) {                                                                                                 // 4393
          $anchor.removeAttr('target');                                                                                // 4394
        } else {                                                                                                       // 4395
          $anchor.attr('target', '_blank');                                                                            // 4396
        }                                                                                                              // 4397
        showPopover($linkPopover, posFromPlaceholder(styleInfo.anchor, isAirMode));                                    // 4398
      } else {                                                                                                         // 4399
        $linkPopover.hide();                                                                                           // 4400
      }                                                                                                                // 4401
                                                                                                                       // 4402
      var $imagePopover = $popover.find('.note-image-popover');                                                        // 4403
      if (styleInfo.image) {                                                                                           // 4404
        showPopover($imagePopover, posFromPlaceholder(styleInfo.image, isAirMode));                                    // 4405
      } else {                                                                                                         // 4406
        $imagePopover.hide();                                                                                          // 4407
      }                                                                                                                // 4408
                                                                                                                       // 4409
      var $airPopover = $popover.find('.note-air-popover');                                                            // 4410
      if (isAirMode && !styleInfo.range.isCollapsed()) {                                                               // 4411
        var rect = list.last(styleInfo.range.getClientRects());                                                        // 4412
        if (rect) {                                                                                                    // 4413
          var bnd = func.rect2bnd(rect);                                                                               // 4414
          showPopover($airPopover, {                                                                                   // 4415
            left: Math.max(bnd.left + bnd.width / 2 - PX_POPOVER_ARROW_OFFSET_X, 0),                                   // 4416
            top: bnd.top + bnd.height                                                                                  // 4417
          });                                                                                                          // 4418
        }                                                                                                              // 4419
      } else {                                                                                                         // 4420
        $airPopover.hide();                                                                                            // 4421
      }                                                                                                                // 4422
    };                                                                                                                 // 4423
                                                                                                                       // 4424
    /**                                                                                                                // 4425
     * @param {Node} button                                                                                            // 4426
     * @param {String} eventName                                                                                       // 4427
     * @param {String} value                                                                                           // 4428
     */                                                                                                                // 4429
    this.updateRecentColor = function (button, eventName, value) {                                                     // 4430
      button.updateRecentColor(button, eventName, value);                                                              // 4431
    };                                                                                                                 // 4432
                                                                                                                       // 4433
    /**                                                                                                                // 4434
     * hide all popovers                                                                                               // 4435
     * @param {jQuery} $popover - popover container                                                                    // 4436
     */                                                                                                                // 4437
    this.hide = function ($popover) {                                                                                  // 4438
      $popover.children().hide();                                                                                      // 4439
    };                                                                                                                 // 4440
  };                                                                                                                   // 4441
                                                                                                                       // 4442
  /**                                                                                                                  // 4443
   * @class module.Handle                                                                                              // 4444
   *                                                                                                                   // 4445
   * Handle                                                                                                            // 4446
   */                                                                                                                  // 4447
  var Handle = function (handler) {                                                                                    // 4448
    var $document = $(document);                                                                                       // 4449
                                                                                                                       // 4450
    /**                                                                                                                // 4451
     * `mousedown` event handler on $handle                                                                            // 4452
     *  - controlSizing: resize image                                                                                  // 4453
     *                                                                                                                 // 4454
     * @param {MouseEvent} event                                                                                       // 4455
     */                                                                                                                // 4456
    var hHandleMousedown = function (event) {                                                                          // 4457
      if (dom.isControlSizing(event.target)) {                                                                         // 4458
        event.preventDefault();                                                                                        // 4459
        event.stopPropagation();                                                                                       // 4460
                                                                                                                       // 4461
        var layoutInfo = dom.makeLayoutInfo(event.target),                                                             // 4462
            $handle = layoutInfo.handle(),                                                                             // 4463
            $popover = layoutInfo.popover(),                                                                           // 4464
            $editable = layoutInfo.editable(),                                                                         // 4465
            $editor = layoutInfo.editor();                                                                             // 4466
                                                                                                                       // 4467
        var target = $handle.find('.note-control-selection').data('target'),                                           // 4468
            $target = $(target), posStart = $target.offset(),                                                          // 4469
            scrollTop = $document.scrollTop();                                                                         // 4470
                                                                                                                       // 4471
        var isAirMode = $editor.data('options').airMode;                                                               // 4472
                                                                                                                       // 4473
        $document.on('mousemove', function (event) {                                                                   // 4474
          handler.invoke('editor.resizeTo', {                                                                          // 4475
            x: event.clientX - posStart.left,                                                                          // 4476
            y: event.clientY - (posStart.top - scrollTop)                                                              // 4477
          }, $target, !event.shiftKey);                                                                                // 4478
                                                                                                                       // 4479
          handler.invoke('handle.update', $handle, {image: target}, isAirMode);                                        // 4480
          handler.invoke('popover.update', $popover, {image: target}, isAirMode);                                      // 4481
        }).one('mouseup', function () {                                                                                // 4482
          $document.off('mousemove');                                                                                  // 4483
          handler.invoke('editor.afterCommand', $editable);                                                            // 4484
        });                                                                                                            // 4485
                                                                                                                       // 4486
        if (!$target.data('ratio')) { // original ratio.                                                               // 4487
          $target.data('ratio', $target.height() / $target.width());                                                   // 4488
        }                                                                                                              // 4489
      }                                                                                                                // 4490
    };                                                                                                                 // 4491
                                                                                                                       // 4492
    this.attach = function (layoutInfo) {                                                                              // 4493
      layoutInfo.handle().on('mousedown', hHandleMousedown);                                                           // 4494
    };                                                                                                                 // 4495
                                                                                                                       // 4496
    /**                                                                                                                // 4497
     * update handle                                                                                                   // 4498
     * @param {jQuery} $handle                                                                                         // 4499
     * @param {Object} styleInfo                                                                                       // 4500
     * @param {Boolean} isAirMode                                                                                      // 4501
     */                                                                                                                // 4502
    this.update = function ($handle, styleInfo, isAirMode) {                                                           // 4503
      var $selection = $handle.find('.note-control-selection');                                                        // 4504
      if (styleInfo.image) {                                                                                           // 4505
        var $image = $(styleInfo.image);                                                                               // 4506
        var pos = isAirMode ? $image.offset() : $image.position();                                                     // 4507
                                                                                                                       // 4508
        // include margin                                                                                              // 4509
        var imageSize = {                                                                                              // 4510
          w: $image.outerWidth(true),                                                                                  // 4511
          h: $image.outerHeight(true)                                                                                  // 4512
        };                                                                                                             // 4513
                                                                                                                       // 4514
        $selection.css({                                                                                               // 4515
          display: 'block',                                                                                            // 4516
          left: pos.left,                                                                                              // 4517
          top: pos.top,                                                                                                // 4518
          width: imageSize.w,                                                                                          // 4519
          height: imageSize.h                                                                                          // 4520
        }).data('target', styleInfo.image); // save current image element.                                             // 4521
        var sizingText = imageSize.w + 'x' + imageSize.h;                                                              // 4522
        $selection.find('.note-control-selection-info').text(sizingText);                                              // 4523
      } else {                                                                                                         // 4524
        $selection.hide();                                                                                             // 4525
      }                                                                                                                // 4526
    };                                                                                                                 // 4527
                                                                                                                       // 4528
    /**                                                                                                                // 4529
     * hide                                                                                                            // 4530
     *                                                                                                                 // 4531
     * @param {jQuery} $handle                                                                                         // 4532
     */                                                                                                                // 4533
    this.hide = function ($handle) {                                                                                   // 4534
      $handle.children().hide();                                                                                       // 4535
    };                                                                                                                 // 4536
  };                                                                                                                   // 4537
                                                                                                                       // 4538
  var Fullscreen = function (handler) {                                                                                // 4539
    var $window = $(window);                                                                                           // 4540
    var $scrollbar = $('html, body');                                                                                  // 4541
                                                                                                                       // 4542
    /**                                                                                                                // 4543
     * toggle fullscreen                                                                                               // 4544
     *                                                                                                                 // 4545
     * @param {Object} layoutInfo                                                                                      // 4546
     */                                                                                                                // 4547
    this.toggle = function (layoutInfo) {                                                                              // 4548
                                                                                                                       // 4549
      var $editor = layoutInfo.editor(),                                                                               // 4550
          $toolbar = layoutInfo.toolbar(),                                                                             // 4551
          $editable = layoutInfo.editable(),                                                                           // 4552
          $codable = layoutInfo.codable();                                                                             // 4553
                                                                                                                       // 4554
      var resize = function (size) {                                                                                   // 4555
        $editable.css('height', size.h);                                                                               // 4556
        $codable.css('height', size.h);                                                                                // 4557
        if ($codable.data('cmeditor')) {                                                                               // 4558
          $codable.data('cmeditor').setsize(null, size.h);                                                             // 4559
        }                                                                                                              // 4560
      };                                                                                                               // 4561
                                                                                                                       // 4562
      $editor.toggleClass('fullscreen');                                                                               // 4563
      var isFullscreen = $editor.hasClass('fullscreen');                                                               // 4564
      if (isFullscreen) {                                                                                              // 4565
        $editable.data('orgheight', $editable.css('height'));                                                          // 4566
                                                                                                                       // 4567
        $window.on('resize', function () {                                                                             // 4568
          resize({                                                                                                     // 4569
            h: $window.height() - $toolbar.outerHeight()                                                               // 4570
          });                                                                                                          // 4571
        }).trigger('resize');                                                                                          // 4572
                                                                                                                       // 4573
        $scrollbar.css('overflow', 'hidden');                                                                          // 4574
      } else {                                                                                                         // 4575
        $window.off('resize');                                                                                         // 4576
        resize({                                                                                                       // 4577
          h: $editable.data('orgheight')                                                                               // 4578
        });                                                                                                            // 4579
        $scrollbar.css('overflow', 'visible');                                                                         // 4580
      }                                                                                                                // 4581
                                                                                                                       // 4582
      handler.invoke('toolbar.updateFullscreen', $toolbar, isFullscreen);                                              // 4583
    };                                                                                                                 // 4584
  };                                                                                                                   // 4585
                                                                                                                       // 4586
                                                                                                                       // 4587
  var CodeMirror;                                                                                                      // 4588
  if (agent.hasCodeMirror) {                                                                                           // 4589
    if (agent.isSupportAmd) {                                                                                          // 4590
      require(['CodeMirror'], function (cm) {                                                                          // 4591
        CodeMirror = cm;                                                                                               // 4592
      });                                                                                                              // 4593
    } else {                                                                                                           // 4594
      CodeMirror = window.CodeMirror;                                                                                  // 4595
    }                                                                                                                  // 4596
  }                                                                                                                    // 4597
                                                                                                                       // 4598
  /**                                                                                                                  // 4599
   * @class Codeview                                                                                                   // 4600
   */                                                                                                                  // 4601
  var Codeview = function (handler) {                                                                                  // 4602
                                                                                                                       // 4603
    this.sync = function (layoutInfo) {                                                                                // 4604
      var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);                                             // 4605
      if (isCodeview && agent.hasCodeMirror) {                                                                         // 4606
        layoutInfo.codable().data('cmEditor').save();                                                                  // 4607
      }                                                                                                                // 4608
    };                                                                                                                 // 4609
                                                                                                                       // 4610
    /**                                                                                                                // 4611
     * @param {Object} layoutInfo                                                                                      // 4612
     * @return {Boolean}                                                                                               // 4613
     */                                                                                                                // 4614
    this.isActivated = function (layoutInfo) {                                                                         // 4615
      var $editor = layoutInfo.editor();                                                                               // 4616
      return $editor.hasClass('codeview');                                                                             // 4617
    };                                                                                                                 // 4618
                                                                                                                       // 4619
    /**                                                                                                                // 4620
     * toggle codeview                                                                                                 // 4621
     *                                                                                                                 // 4622
     * @param {Object} layoutInfo                                                                                      // 4623
     */                                                                                                                // 4624
    this.toggle = function (layoutInfo) {                                                                              // 4625
      if (this.isActivated(layoutInfo)) {                                                                              // 4626
        this.deactivate(layoutInfo);                                                                                   // 4627
      } else {                                                                                                         // 4628
        this.activate(layoutInfo);                                                                                     // 4629
      }                                                                                                                // 4630
    };                                                                                                                 // 4631
                                                                                                                       // 4632
    /**                                                                                                                // 4633
     * activate code view                                                                                              // 4634
     *                                                                                                                 // 4635
     * @param {Object} layoutInfo                                                                                      // 4636
     */                                                                                                                // 4637
    this.activate = function (layoutInfo) {                                                                            // 4638
      var $editor = layoutInfo.editor(),                                                                               // 4639
          $toolbar = layoutInfo.toolbar(),                                                                             // 4640
          $editable = layoutInfo.editable(),                                                                           // 4641
          $codable = layoutInfo.codable(),                                                                             // 4642
          $popover = layoutInfo.popover(),                                                                             // 4643
          $handle = layoutInfo.handle();                                                                               // 4644
                                                                                                                       // 4645
      var options = $editor.data('options');                                                                           // 4646
                                                                                                                       // 4647
      $codable.val(dom.html($editable, options.prettifyHtml));                                                         // 4648
      $codable.height($editable.height());                                                                             // 4649
                                                                                                                       // 4650
      handler.invoke('toolbar.updateCodeview', $toolbar, true);                                                        // 4651
      handler.invoke('popover.hide', $popover);                                                                        // 4652
      handler.invoke('handle.hide', $handle);                                                                          // 4653
                                                                                                                       // 4654
      $editor.addClass('codeview');                                                                                    // 4655
                                                                                                                       // 4656
      $codable.focus();                                                                                                // 4657
                                                                                                                       // 4658
      // activate CodeMirror as codable                                                                                // 4659
      if (agent.hasCodeMirror) {                                                                                       // 4660
        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);                                       // 4661
                                                                                                                       // 4662
        // CodeMirror TernServer                                                                                       // 4663
        if (options.codemirror.tern) {                                                                                 // 4664
          var server = new CodeMirror.TernServer(options.codemirror.tern);                                             // 4665
          cmEditor.ternServer = server;                                                                                // 4666
          cmEditor.on('cursorActivity', function (cm) {                                                                // 4667
            server.updateArgHints(cm);                                                                                 // 4668
          });                                                                                                          // 4669
        }                                                                                                              // 4670
                                                                                                                       // 4671
        // CodeMirror hasn't Padding.                                                                                  // 4672
        cmEditor.setSize(null, $editable.outerHeight());                                                               // 4673
        $codable.data('cmEditor', cmEditor);                                                                           // 4674
      }                                                                                                                // 4675
    };                                                                                                                 // 4676
                                                                                                                       // 4677
    /**                                                                                                                // 4678
     * deactivate code view                                                                                            // 4679
     *                                                                                                                 // 4680
     * @param {Object} layoutInfo                                                                                      // 4681
     */                                                                                                                // 4682
    this.deactivate = function (layoutInfo) {                                                                          // 4683
      var $editor = layoutInfo.editor(),                                                                               // 4684
          $toolbar = layoutInfo.toolbar(),                                                                             // 4685
          $editable = layoutInfo.editable(),                                                                           // 4686
          $codable = layoutInfo.codable();                                                                             // 4687
                                                                                                                       // 4688
      var options = $editor.data('options');                                                                           // 4689
                                                                                                                       // 4690
      // deactivate CodeMirror as codable                                                                              // 4691
      if (agent.hasCodeMirror) {                                                                                       // 4692
        var cmEditor = $codable.data('cmEditor');                                                                      // 4693
        $codable.val(cmEditor.getValue());                                                                             // 4694
        cmEditor.toTextArea();                                                                                         // 4695
      }                                                                                                                // 4696
                                                                                                                       // 4697
      $editable.html(dom.value($codable, options.prettifyHtml) || dom.emptyPara);                                      // 4698
      $editable.height(options.height ? $codable.height() : 'auto');                                                   // 4699
      $editor.removeClass('codeview');                                                                                 // 4700
                                                                                                                       // 4701
      $editable.focus();                                                                                               // 4702
                                                                                                                       // 4703
      handler.invoke('toolbar.updateCodeview', $toolbar, false);                                                       // 4704
    };                                                                                                                 // 4705
  };                                                                                                                   // 4706
                                                                                                                       // 4707
  var DragAndDrop = function (handler) {                                                                               // 4708
    var $document = $(document);                                                                                       // 4709
                                                                                                                       // 4710
    /**                                                                                                                // 4711
     * attach Drag and Drop Events                                                                                     // 4712
     *                                                                                                                 // 4713
     * @param {Object} layoutInfo - layout Informations                                                                // 4714
     * @param {Object} options                                                                                         // 4715
     */                                                                                                                // 4716
    this.attach = function (layoutInfo, options) {                                                                     // 4717
      if (options.airMode || options.disableDragAndDrop) {                                                             // 4718
        // prevent default drop event                                                                                  // 4719
        $document.on('drop', function (e) {                                                                            // 4720
          e.preventDefault();                                                                                          // 4721
        });                                                                                                            // 4722
      } else {                                                                                                         // 4723
        this.attachDragAndDropEvent(layoutInfo, options);                                                              // 4724
      }                                                                                                                // 4725
    };                                                                                                                 // 4726
                                                                                                                       // 4727
    /**                                                                                                                // 4728
     * attach Drag and Drop Events                                                                                     // 4729
     *                                                                                                                 // 4730
     * @param {Object} layoutInfo - layout Informations                                                                // 4731
     * @param {Object} options                                                                                         // 4732
     */                                                                                                                // 4733
    this.attachDragAndDropEvent = function (layoutInfo, options) {                                                     // 4734
      var collection = $(),                                                                                            // 4735
          $editor = layoutInfo.editor(),                                                                               // 4736
          $dropzone = layoutInfo.dropzone(),                                                                           // 4737
          $dropzoneMessage = $dropzone.find('.note-dropzone-message');                                                 // 4738
                                                                                                                       // 4739
      // show dropzone on dragenter when dragging a object to document                                                 // 4740
      // -but only if the editor is visible, i.e. has a positive width and height                                      // 4741
      $document.on('dragenter', function (e) {                                                                         // 4742
        var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);                                           // 4743
        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;                                               // 4744
        if (!isCodeview && !collection.length && hasEditorSize) {                                                      // 4745
          $editor.addClass('dragover');                                                                                // 4746
          $dropzone.width($editor.width());                                                                            // 4747
          $dropzone.height($editor.height());                                                                          // 4748
          $dropzoneMessage.text(options.langInfo.image.dragImageHere);                                                 // 4749
        }                                                                                                              // 4750
        collection = collection.add(e.target);                                                                         // 4751
      }).on('dragleave', function (e) {                                                                                // 4752
        collection = collection.not(e.target);                                                                         // 4753
        if (!collection.length) {                                                                                      // 4754
          $editor.removeClass('dragover');                                                                             // 4755
        }                                                                                                              // 4756
      }).on('drop', function () {                                                                                      // 4757
        collection = $();                                                                                              // 4758
        $editor.removeClass('dragover');                                                                               // 4759
      });                                                                                                              // 4760
                                                                                                                       // 4761
      // change dropzone's message on hover.                                                                           // 4762
      $dropzone.on('dragenter', function () {                                                                          // 4763
        $dropzone.addClass('hover');                                                                                   // 4764
        $dropzoneMessage.text(options.langInfo.image.dropImage);                                                       // 4765
      }).on('dragleave', function () {                                                                                 // 4766
        $dropzone.removeClass('hover');                                                                                // 4767
        $dropzoneMessage.text(options.langInfo.image.dragImageHere);                                                   // 4768
      });                                                                                                              // 4769
                                                                                                                       // 4770
      // attach dropImage                                                                                              // 4771
      $dropzone.on('drop', function (event) {                                                                          // 4772
        event.preventDefault();                                                                                        // 4773
                                                                                                                       // 4774
        var dataTransfer = event.originalEvent.dataTransfer;                                                           // 4775
        var html = dataTransfer.getData('text/html');                                                                  // 4776
        var text = dataTransfer.getData('text/plain');                                                                 // 4777
                                                                                                                       // 4778
        var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                      // 4779
                                                                                                                       // 4780
        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {                                         // 4781
          layoutInfo.editable().focus();                                                                               // 4782
          handler.insertImages(layoutInfo, dataTransfer.files);                                                        // 4783
        } else if (html) {                                                                                             // 4784
          $(html).each(function () {                                                                                   // 4785
            layoutInfo.editable().focus();                                                                             // 4786
            handler.invoke('editor.insertNode', layoutInfo.editable(), this);                                          // 4787
          });                                                                                                          // 4788
        } else if (text) {                                                                                             // 4789
          layoutInfo.editable().focus();                                                                               // 4790
          handler.invoke('editor.insertText', layoutInfo.editable(), text);                                            // 4791
        }                                                                                                              // 4792
      }).on('dragover', false); // prevent default dragover event                                                      // 4793
    };                                                                                                                 // 4794
  };                                                                                                                   // 4795
                                                                                                                       // 4796
  var Clipboard = function (handler) {                                                                                 // 4797
                                                                                                                       // 4798
    this.attach = function (layoutInfo) {                                                                              // 4799
      layoutInfo.editable().on('paste', hPasteClipboardImage);                                                         // 4800
    };                                                                                                                 // 4801
                                                                                                                       // 4802
    /**                                                                                                                // 4803
     * paste clipboard image                                                                                           // 4804
     *                                                                                                                 // 4805
     * @param {Event} event                                                                                            // 4806
     */                                                                                                                // 4807
    var hPasteClipboardImage = function (event) {                                                                      // 4808
      var clipboardData = event.originalEvent.clipboardData;                                                           // 4809
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 4810
      var $editable = layoutInfo.editable();                                                                           // 4811
                                                                                                                       // 4812
      if (!clipboardData || !clipboardData.items || !clipboardData.items.length) {                                     // 4813
        var callbacks = $editable.data('callbacks');                                                                   // 4814
        // only can run if it has onImageUpload method                                                                 // 4815
        if (!callbacks.onImageUpload) {                                                                                // 4816
          return;                                                                                                      // 4817
        }                                                                                                              // 4818
                                                                                                                       // 4819
        // save cursor                                                                                                 // 4820
        handler.invoke('editor.saveNode', $editable);                                                                  // 4821
        handler.invoke('editor.saveRange', $editable);                                                                 // 4822
                                                                                                                       // 4823
        $editable.html('');                                                                                            // 4824
                                                                                                                       // 4825
        setTimeout(function () {                                                                                       // 4826
          var $img = $editable.find('img');                                                                            // 4827
                                                                                                                       // 4828
          // if img is no in clipboard, insert text or dom                                                             // 4829
          if (!$img.length || $img[0].src.indexOf('data:') === -1) {                                                   // 4830
            var html = $editable.html();                                                                               // 4831
                                                                                                                       // 4832
            handler.invoke('editor.restoreNode', $editable);                                                           // 4833
            handler.invoke('editor.restoreRange', $editable);                                                          // 4834
                                                                                                                       // 4835
            handler.invoke('editor.focus', $editable);                                                                 // 4836
            try {                                                                                                      // 4837
              handler.invoke('editor.pasteHTML', $editable, html);                                                     // 4838
            } catch (ex) {                                                                                             // 4839
              handler.invoke('editor.insertText', $editable, html);                                                    // 4840
            }                                                                                                          // 4841
            return;                                                                                                    // 4842
          }                                                                                                            // 4843
                                                                                                                       // 4844
          var datauri = $img[0].src;                                                                                   // 4845
                                                                                                                       // 4846
          var data = atob(datauri.split(',')[1]);                                                                      // 4847
          var array = new Uint8Array(data.length);                                                                     // 4848
          for (var i = 0; i < data.length; i++) {                                                                      // 4849
            array[i] = data.charCodeAt(i);                                                                             // 4850
          }                                                                                                            // 4851
                                                                                                                       // 4852
          var blob = new Blob([array], { type : 'image/png' });                                                        // 4853
          blob.name = 'clipboard.png';                                                                                 // 4854
                                                                                                                       // 4855
          handler.invoke('editor.restoreNode', $editable);                                                             // 4856
          handler.invoke('editor.restoreRange', $editable);                                                            // 4857
          handler.insertImages(layoutInfo, [blob]);                                                                    // 4858
                                                                                                                       // 4859
          handler.invoke('editor.afterCommand', $editable);                                                            // 4860
        }, 0);                                                                                                         // 4861
                                                                                                                       // 4862
        return;                                                                                                        // 4863
      }                                                                                                                // 4864
                                                                                                                       // 4865
      var item = list.head(clipboardData.items);                                                                       // 4866
      var isClipboardImage = item.kind === 'file' && item.type.indexOf('image/') !== -1;                               // 4867
                                                                                                                       // 4868
      if (isClipboardImage) {                                                                                          // 4869
        handler.insertImages(layoutInfo, [item.getAsFile()]);                                                          // 4870
      }                                                                                                                // 4871
                                                                                                                       // 4872
      handler.invoke('editor.afterCommand', $editable);                                                                // 4873
    };                                                                                                                 // 4874
  };                                                                                                                   // 4875
                                                                                                                       // 4876
  var LinkDialog = function (handler) {                                                                                // 4877
                                                                                                                       // 4878
    /**                                                                                                                // 4879
     * toggle button status                                                                                            // 4880
     *                                                                                                                 // 4881
     * @private                                                                                                        // 4882
     * @param {jQuery} $btn                                                                                            // 4883
     * @param {Boolean} isEnable                                                                                       // 4884
     */                                                                                                                // 4885
    var toggleBtn = function ($btn, isEnable) {                                                                        // 4886
      $btn.toggleClass('disabled', !isEnable);                                                                         // 4887
      $btn.attr('disabled', !isEnable);                                                                                // 4888
    };                                                                                                                 // 4889
                                                                                                                       // 4890
    /**                                                                                                                // 4891
     * bind enter key                                                                                                  // 4892
     *                                                                                                                 // 4893
     * @private                                                                                                        // 4894
     * @param {jQuery} $input                                                                                          // 4895
     * @param {jQuery} $btn                                                                                            // 4896
     */                                                                                                                // 4897
    var bindEnterKey = function ($input, $btn) {                                                                       // 4898
      $input.on('keypress', function (event) {                                                                         // 4899
        if (event.keyCode === key.code.ENTER) {                                                                        // 4900
          $btn.trigger('click');                                                                                       // 4901
        }                                                                                                              // 4902
      });                                                                                                              // 4903
    };                                                                                                                 // 4904
                                                                                                                       // 4905
    /**                                                                                                                // 4906
     * Show link dialog and set event handlers on dialog controls.                                                     // 4907
     *                                                                                                                 // 4908
     * @param {jQuery} $editable                                                                                       // 4909
     * @param {jQuery} $dialog                                                                                         // 4910
     * @param {Object} linkInfo                                                                                        // 4911
     * @return {Promise}                                                                                               // 4912
     */                                                                                                                // 4913
    this.showLinkDialog = function ($editable, $dialog, linkInfo) {                                                    // 4914
      return $.Deferred(function (deferred) {                                                                          // 4915
        var $linkDialog = $dialog.find('.note-link-dialog');                                                           // 4916
                                                                                                                       // 4917
        var $linkText = $linkDialog.find('.note-link-text'),                                                           // 4918
        $linkUrl = $linkDialog.find('.note-link-url'),                                                                 // 4919
        $linkBtn = $linkDialog.find('.note-link-btn'),                                                                 // 4920
        $openInNewWindow = $linkDialog.find('input[type=checkbox]');                                                   // 4921
                                                                                                                       // 4922
        $linkDialog.one('shown.bs.modal', function () {                                                                // 4923
          $linkText.val(linkInfo.text);                                                                                // 4924
                                                                                                                       // 4925
          $linkText.on('input', function () {                                                                          // 4926
            // if linktext was modified by keyup,                                                                      // 4927
            // stop cloning text from linkUrl                                                                          // 4928
            linkInfo.text = $linkText.val();                                                                           // 4929
          });                                                                                                          // 4930
                                                                                                                       // 4931
          // if no url was given, copy text to url                                                                     // 4932
          if (!linkInfo.url) {                                                                                         // 4933
            linkInfo.url = linkInfo.text;                                                                              // 4934
            toggleBtn($linkBtn, linkInfo.text);                                                                        // 4935
          }                                                                                                            // 4936
                                                                                                                       // 4937
          $linkUrl.on('input', function () {                                                                           // 4938
            toggleBtn($linkBtn, $linkUrl.val());                                                                       // 4939
            // display same link on `Text to display` input                                                            // 4940
            // when create a new link                                                                                  // 4941
            if (!linkInfo.text) {                                                                                      // 4942
              $linkText.val($linkUrl.val());                                                                           // 4943
            }                                                                                                          // 4944
          }).val(linkInfo.url).trigger('focus').trigger('select');                                                     // 4945
                                                                                                                       // 4946
          bindEnterKey($linkUrl, $linkBtn);                                                                            // 4947
          bindEnterKey($linkText, $linkBtn);                                                                           // 4948
                                                                                                                       // 4949
          $openInNewWindow.prop('checked', linkInfo.newWindow);                                                        // 4950
                                                                                                                       // 4951
          $linkBtn.one('click', function (event) {                                                                     // 4952
            event.preventDefault();                                                                                    // 4953
                                                                                                                       // 4954
            deferred.resolve({                                                                                         // 4955
              range: linkInfo.range,                                                                                   // 4956
              url: $linkUrl.val(),                                                                                     // 4957
              text: $linkText.val(),                                                                                   // 4958
              newWindow: $openInNewWindow.is(':checked')                                                               // 4959
            });                                                                                                        // 4960
            $linkDialog.modal('hide');                                                                                 // 4961
          });                                                                                                          // 4962
        }).one('hidden.bs.modal', function () {                                                                        // 4963
          // detach events                                                                                             // 4964
          $linkText.off('input keypress');                                                                             // 4965
          $linkUrl.off('input keypress');                                                                              // 4966
          $linkBtn.off('click');                                                                                       // 4967
                                                                                                                       // 4968
          if (deferred.state() === 'pending') {                                                                        // 4969
            deferred.reject();                                                                                         // 4970
          }                                                                                                            // 4971
        }).modal('show');                                                                                              // 4972
      }).promise();                                                                                                    // 4973
    };                                                                                                                 // 4974
                                                                                                                       // 4975
    /**                                                                                                                // 4976
     * @param {Object} layoutInfo                                                                                      // 4977
     */                                                                                                                // 4978
    this.show = function (layoutInfo) {                                                                                // 4979
      var $editor = layoutInfo.editor(),                                                                               // 4980
          $dialog = layoutInfo.dialog(),                                                                               // 4981
          $editable = layoutInfo.editable(),                                                                           // 4982
          $popover = layoutInfo.popover(),                                                                             // 4983
          linkInfo = handler.invoke('editor.getLinkInfo', $editable);                                                  // 4984
                                                                                                                       // 4985
      var options = $editor.data('options');                                                                           // 4986
                                                                                                                       // 4987
      handler.invoke('editor.saveRange', $editable);                                                                   // 4988
      this.showLinkDialog($editable, $dialog, linkInfo).then(function (linkInfo) {                                     // 4989
        handler.invoke('editor.restoreRange', $editable);                                                              // 4990
        handler.invoke('editor.createLink', $editable, linkInfo, options);                                             // 4991
        // hide popover after creating link                                                                            // 4992
        handler.invoke('popover.hide', $popover);                                                                      // 4993
      }).fail(function () {                                                                                            // 4994
        handler.invoke('editor.restoreRange', $editable);                                                              // 4995
      });                                                                                                              // 4996
    };                                                                                                                 // 4997
  };                                                                                                                   // 4998
                                                                                                                       // 4999
  var ImageDialog = function (handler) {                                                                               // 5000
    /**                                                                                                                // 5001
     * toggle button status                                                                                            // 5002
     *                                                                                                                 // 5003
     * @private                                                                                                        // 5004
     * @param {jQuery} $btn                                                                                            // 5005
     * @param {Boolean} isEnable                                                                                       // 5006
     */                                                                                                                // 5007
    var toggleBtn = function ($btn, isEnable) {                                                                        // 5008
      $btn.toggleClass('disabled', !isEnable);                                                                         // 5009
      $btn.attr('disabled', !isEnable);                                                                                // 5010
    };                                                                                                                 // 5011
                                                                                                                       // 5012
    /**                                                                                                                // 5013
     * bind enter key                                                                                                  // 5014
     *                                                                                                                 // 5015
     * @private                                                                                                        // 5016
     * @param {jQuery} $input                                                                                          // 5017
     * @param {jQuery} $btn                                                                                            // 5018
     */                                                                                                                // 5019
    var bindEnterKey = function ($input, $btn) {                                                                       // 5020
      $input.on('keypress', function (event) {                                                                         // 5021
        if (event.keyCode === key.code.ENTER) {                                                                        // 5022
          $btn.trigger('click');                                                                                       // 5023
        }                                                                                                              // 5024
      });                                                                                                              // 5025
    };                                                                                                                 // 5026
                                                                                                                       // 5027
    this.show = function (layoutInfo) {                                                                                // 5028
      var $dialog = layoutInfo.dialog(),                                                                               // 5029
          $editable = layoutInfo.editable();                                                                           // 5030
                                                                                                                       // 5031
      handler.invoke('editor.saveRange', $editable);                                                                   // 5032
      this.showImageDialog($editable, $dialog).then(function (data) {                                                  // 5033
        handler.invoke('editor.restoreRange', $editable);                                                              // 5034
                                                                                                                       // 5035
        if (typeof data === 'string') {                                                                                // 5036
          // image url                                                                                                 // 5037
          handler.invoke('editor.insertImage', $editable, data);                                                       // 5038
        } else {                                                                                                       // 5039
          // array of files                                                                                            // 5040
          handler.insertImages(layoutInfo, data);                                                                      // 5041
        }                                                                                                              // 5042
      }).fail(function () {                                                                                            // 5043
        handler.invoke('editor.restoreRange', $editable);                                                              // 5044
      });                                                                                                              // 5045
    };                                                                                                                 // 5046
                                                                                                                       // 5047
    /**                                                                                                                // 5048
     * show image dialog                                                                                               // 5049
     *                                                                                                                 // 5050
     * @param {jQuery} $editable                                                                                       // 5051
     * @param {jQuery} $dialog                                                                                         // 5052
     * @return {Promise}                                                                                               // 5053
     */                                                                                                                // 5054
    this.showImageDialog = function ($editable, $dialog) {                                                             // 5055
      return $.Deferred(function (deferred) {                                                                          // 5056
        var $imageDialog = $dialog.find('.note-image-dialog');                                                         // 5057
                                                                                                                       // 5058
        var $imageInput = $dialog.find('.note-image-input'),                                                           // 5059
            $imageUrl = $dialog.find('.note-image-url'),                                                               // 5060
            $imageBtn = $dialog.find('.note-image-btn');                                                               // 5061
                                                                                                                       // 5062
        $imageDialog.one('shown.bs.modal', function () {                                                               // 5063
          // Cloning imageInput to clear element.                                                                      // 5064
          $imageInput.replaceWith($imageInput.clone()                                                                  // 5065
            .on('change', function () {                                                                                // 5066
              deferred.resolve(this.files || this.value);                                                              // 5067
              $imageDialog.modal('hide');                                                                              // 5068
            })                                                                                                         // 5069
            .val('')                                                                                                   // 5070
          );                                                                                                           // 5071
                                                                                                                       // 5072
          $imageBtn.click(function (event) {                                                                           // 5073
            event.preventDefault();                                                                                    // 5074
                                                                                                                       // 5075
            deferred.resolve($imageUrl.val());                                                                         // 5076
            $imageDialog.modal('hide');                                                                                // 5077
          });                                                                                                          // 5078
                                                                                                                       // 5079
          $imageUrl.on('keyup paste', function (event) {                                                               // 5080
            var url;                                                                                                   // 5081
                                                                                                                       // 5082
            if (event.type === 'paste') {                                                                              // 5083
              url = event.originalEvent.clipboardData.getData('text');                                                 // 5084
            } else {                                                                                                   // 5085
              url = $imageUrl.val();                                                                                   // 5086
            }                                                                                                          // 5087
                                                                                                                       // 5088
            toggleBtn($imageBtn, url);                                                                                 // 5089
          }).val('').trigger('focus');                                                                                 // 5090
          bindEnterKey($imageUrl, $imageBtn);                                                                          // 5091
        }).one('hidden.bs.modal', function () {                                                                        // 5092
          $imageInput.off('change');                                                                                   // 5093
          $imageUrl.off('keyup paste keypress');                                                                       // 5094
          $imageBtn.off('click');                                                                                      // 5095
                                                                                                                       // 5096
          if (deferred.state() === 'pending') {                                                                        // 5097
            deferred.reject();                                                                                         // 5098
          }                                                                                                            // 5099
        }).modal('show');                                                                                              // 5100
      });                                                                                                              // 5101
    };                                                                                                                 // 5102
  };                                                                                                                   // 5103
                                                                                                                       // 5104
  var HelpDialog = function (handler) {                                                                                // 5105
    /**                                                                                                                // 5106
     * show help dialog                                                                                                // 5107
     *                                                                                                                 // 5108
     * @param {jQuery} $editable                                                                                       // 5109
     * @param {jQuery} $dialog                                                                                         // 5110
     * @return {Promise}                                                                                               // 5111
     */                                                                                                                // 5112
    this.showHelpDialog = function ($editable, $dialog) {                                                              // 5113
      return $.Deferred(function (deferred) {                                                                          // 5114
        var $helpDialog = $dialog.find('.note-help-dialog');                                                           // 5115
                                                                                                                       // 5116
        $helpDialog.one('hidden.bs.modal', function () {                                                               // 5117
          deferred.resolve();                                                                                          // 5118
        }).modal('show');                                                                                              // 5119
      }).promise();                                                                                                    // 5120
    };                                                                                                                 // 5121
                                                                                                                       // 5122
    /**                                                                                                                // 5123
     * @param {Object} layoutInfo                                                                                      // 5124
     */                                                                                                                // 5125
    this.show = function (layoutInfo) {                                                                                // 5126
      var $dialog = layoutInfo.dialog(),                                                                               // 5127
          $editable = layoutInfo.editable();                                                                           // 5128
                                                                                                                       // 5129
      handler.invoke('editor.saveRange', $editable, true);                                                             // 5130
      this.showHelpDialog($editable, $dialog).then(function () {                                                       // 5131
        handler.invoke('editor.restoreRange', $editable);                                                              // 5132
      });                                                                                                              // 5133
    };                                                                                                                 // 5134
  };                                                                                                                   // 5135
                                                                                                                       // 5136
                                                                                                                       // 5137
  /**                                                                                                                  // 5138
   * @class EventHandler                                                                                               // 5139
   *                                                                                                                   // 5140
   * EventHandler                                                                                                      // 5141
   *  - TODO: new instance per a editor                                                                                // 5142
   *  - TODO: rename EventHandler                                                                                      // 5143
   */                                                                                                                  // 5144
  var EventHandler = function () {                                                                                     // 5145
    /**                                                                                                                // 5146
     * Modules                                                                                                         // 5147
     */                                                                                                                // 5148
    var modules = this.modules = {                                                                                     // 5149
      editor: new Editor(this),                                                                                        // 5150
      toolbar: new Toolbar(this),                                                                                      // 5151
      statusbar: new Statusbar(this),                                                                                  // 5152
      popover: new Popover(this),                                                                                      // 5153
      handle: new Handle(this),                                                                                        // 5154
      fullscreen: new Fullscreen(this),                                                                                // 5155
      codeview: new Codeview(this),                                                                                    // 5156
      dragAndDrop: new DragAndDrop(this),                                                                              // 5157
      clipboard: new Clipboard(this),                                                                                  // 5158
      linkDialog: new LinkDialog(this),                                                                                // 5159
      imageDialog: new ImageDialog(this),                                                                              // 5160
      helpDialog: new HelpDialog(this)                                                                                 // 5161
    };                                                                                                                 // 5162
                                                                                                                       // 5163
    // TODO refactor modules and eventHandler                                                                          // 5164
    //  - remove this method and use custom event from $holder instead                                                 // 5165
    this.invoke = function () {                                                                                        // 5166
      var moduleAndMethod = list.head(list.from(arguments));                                                           // 5167
      var args = list.tail(list.from(arguments));                                                                      // 5168
                                                                                                                       // 5169
      var splits = moduleAndMethod.split('.');                                                                         // 5170
      var hasSeparator = splits.length > 1;                                                                            // 5171
      var moduleName = hasSeparator && list.head(splits);                                                              // 5172
      var methodName = hasSeparator ? list.last(splits) : list.head(splits);                                           // 5173
                                                                                                                       // 5174
      var module = this.getModule(moduleName);                                                                         // 5175
      var method = module[methodName];                                                                                 // 5176
                                                                                                                       // 5177
      return method && method.apply(module, args);                                                                     // 5178
    };                                                                                                                 // 5179
                                                                                                                       // 5180
    /**                                                                                                                // 5181
     * returns module                                                                                                  // 5182
     *                                                                                                                 // 5183
     * @param {String} moduleName - name of module                                                                     // 5184
     * @return {Module} - defaults is editor                                                                           // 5185
     */                                                                                                                // 5186
    this.getModule = function (moduleName) {                                                                           // 5187
      return this.modules[moduleName] || this.modules.editor;                                                          // 5188
    };                                                                                                                 // 5189
                                                                                                                       // 5190
    /**                                                                                                                // 5191
     * @param {jQuery} $holder                                                                                         // 5192
     * @param {Object} callbacks                                                                                       // 5193
     * @param {String} eventNamespace                                                                                  // 5194
     * @returns {Function}                                                                                             // 5195
     */                                                                                                                // 5196
    var bindCustomEvent = this.bindCustomEvent = function ($holder, callbacks, eventNamespace) {                       // 5197
      return function () {                                                                                             // 5198
        var callback = callbacks[func.namespaceToCamel(eventNamespace, 'on')];                                         // 5199
        if (callback) {                                                                                                // 5200
          callback(arguments);                                                                                         // 5201
        }                                                                                                              // 5202
        return $holder.trigger('summernote.' + eventNamespace, arguments);                                             // 5203
      };                                                                                                               // 5204
    };                                                                                                                 // 5205
                                                                                                                       // 5206
    /**                                                                                                                // 5207
     * insert Images from file array.                                                                                  // 5208
     *                                                                                                                 // 5209
     * @private                                                                                                        // 5210
     * @param {Object} layoutInfo                                                                                      // 5211
     * @param {File[]} files                                                                                           // 5212
     */                                                                                                                // 5213
    this.insertImages = function (layoutInfo, files) {                                                                 // 5214
      var $editor = layoutInfo.editor(),                                                                               // 5215
          $editable = layoutInfo.editable(),                                                                           // 5216
          $holder = layoutInfo.holder();                                                                               // 5217
                                                                                                                       // 5218
      var callbacks = $editable.data('callbacks');                                                                     // 5219
      var options = $editor.data('options');                                                                           // 5220
                                                                                                                       // 5221
      // If onImageUpload options setted                                                                               // 5222
      if (callbacks.onImageUpload) {                                                                                   // 5223
        bindCustomEvent($holder, callbacks, 'image.upload')([files]);                                                  // 5224
      // else insert Image as dataURL                                                                                  // 5225
      } else {                                                                                                         // 5226
        $.each(files, function (idx, file) {                                                                           // 5227
          var filename = file.name;                                                                                    // 5228
          if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {                              // 5229
            bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);    // 5230
          } else {                                                                                                     // 5231
            async.readFileAsDataURL(file).then(function (sDataURL) {                                                   // 5232
              modules.editor.insertImage($editable, sDataURL, filename);                                               // 5233
            }).fail(function () {                                                                                      // 5234
              bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);  // 5235
            });                                                                                                        // 5236
          }                                                                                                            // 5237
        });                                                                                                            // 5238
      }                                                                                                                // 5239
    };                                                                                                                 // 5240
                                                                                                                       // 5241
    var commands = {                                                                                                   // 5242
      /**                                                                                                              // 5243
       * @param {Object} layoutInfo                                                                                    // 5244
       */                                                                                                              // 5245
      showLinkDialog: function (layoutInfo) {                                                                          // 5246
        modules.linkDialog.show(layoutInfo);                                                                           // 5247
      },                                                                                                               // 5248
                                                                                                                       // 5249
      /**                                                                                                              // 5250
       * @param {Object} layoutInfo                                                                                    // 5251
       */                                                                                                              // 5252
      showImageDialog: function (layoutInfo) {                                                                         // 5253
        modules.imageDialog.show(layoutInfo);                                                                          // 5254
      },                                                                                                               // 5255
                                                                                                                       // 5256
      /**                                                                                                              // 5257
       * @param {Object} layoutInfo                                                                                    // 5258
       */                                                                                                              // 5259
      showHelpDialog: function (layoutInfo) {                                                                          // 5260
        modules.helpDialog.show(layoutInfo);                                                                           // 5261
      },                                                                                                               // 5262
                                                                                                                       // 5263
      /**                                                                                                              // 5264
       * @param {Object} layoutInfo                                                                                    // 5265
       */                                                                                                              // 5266
      fullscreen: function (layoutInfo) {                                                                              // 5267
        modules.fullscreen.toggle(layoutInfo);                                                                         // 5268
      },                                                                                                               // 5269
                                                                                                                       // 5270
      /**                                                                                                              // 5271
       * @param {Object} layoutInfo                                                                                    // 5272
       */                                                                                                              // 5273
      codeview: function (layoutInfo) {                                                                                // 5274
        modules.codeview.toggle(layoutInfo);                                                                           // 5275
      }                                                                                                                // 5276
    };                                                                                                                 // 5277
                                                                                                                       // 5278
    var hMousedown = function (event) {                                                                                // 5279
      //preventDefault Selection for FF, IE8+                                                                          // 5280
      if (dom.isImg(event.target)) {                                                                                   // 5281
        event.preventDefault();                                                                                        // 5282
      }                                                                                                                // 5283
    };                                                                                                                 // 5284
                                                                                                                       // 5285
    var hToolbarAndPopoverUpdate = function (event) {                                                                  // 5286
      // delay for range after mouseup                                                                                 // 5287
      setTimeout(function () {                                                                                         // 5288
        var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                      // 5289
        var styleInfo = modules.editor.currentStyle(event.target);                                                     // 5290
        if (!styleInfo) { return; }                                                                                    // 5291
                                                                                                                       // 5292
        var isAirMode = layoutInfo.editor().data('options').airMode;                                                   // 5293
        if (!isAirMode) {                                                                                              // 5294
          modules.toolbar.update(layoutInfo.toolbar(), styleInfo);                                                     // 5295
        }                                                                                                              // 5296
                                                                                                                       // 5297
        modules.popover.update(layoutInfo.popover(), styleInfo, isAirMode);                                            // 5298
        modules.handle.update(layoutInfo.handle(), styleInfo, isAirMode);                                              // 5299
      }, 0);                                                                                                           // 5300
    };                                                                                                                 // 5301
                                                                                                                       // 5302
    var hScroll = function (event) {                                                                                   // 5303
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 5304
      //hide popover and handle when scrolled                                                                          // 5305
      modules.popover.hide(layoutInfo.popover());                                                                      // 5306
      modules.handle.hide(layoutInfo.handle());                                                                        // 5307
    };                                                                                                                 // 5308
                                                                                                                       // 5309
    var hToolbarAndPopoverMousedown = function (event) {                                                               // 5310
      // prevent default event when insertTable (FF, Webkit)                                                           // 5311
      var $btn = $(event.target).closest('[data-event]');                                                              // 5312
      if ($btn.length) {                                                                                               // 5313
        event.preventDefault();                                                                                        // 5314
      }                                                                                                                // 5315
    };                                                                                                                 // 5316
                                                                                                                       // 5317
    var hToolbarAndPopoverClick = function (event) {                                                                   // 5318
      var $btn = $(event.target).closest('[data-event]');                                                              // 5319
                                                                                                                       // 5320
      if ($btn.length) {                                                                                               // 5321
        var eventName = $btn.attr('data-event'),                                                                       // 5322
            value = $btn.attr('data-value'),                                                                           // 5323
            hide = $btn.attr('data-hide');                                                                             // 5324
                                                                                                                       // 5325
        var layoutInfo = dom.makeLayoutInfo(event.target);                                                             // 5326
                                                                                                                       // 5327
        // before command: detect control selection element($target)                                                   // 5328
        var $target;                                                                                                   // 5329
        if ($.inArray(eventName, ['resize', 'floatMe', 'removeMedia', 'imageShape']) !== -1) {                         // 5330
          var $selection = layoutInfo.handle().find('.note-control-selection');                                        // 5331
          $target = $($selection.data('target'));                                                                      // 5332
        }                                                                                                              // 5333
                                                                                                                       // 5334
        // If requested, hide the popover when the button is clicked.                                                  // 5335
        // Useful for things like showHelpDialog.                                                                      // 5336
        if (hide) {                                                                                                    // 5337
          $btn.parents('.popover').hide();                                                                             // 5338
        }                                                                                                              // 5339
                                                                                                                       // 5340
        if ($.isFunction($.summernote.pluginEvents[eventName])) {                                                      // 5341
          $.summernote.pluginEvents[eventName](event, modules.editor, layoutInfo, value);                              // 5342
        } else if (modules.editor[eventName]) { // on command                                                          // 5343
          var $editable = layoutInfo.editable();                                                                       // 5344
          $editable.focus();                                                                                           // 5345
          modules.editor[eventName]($editable, value, $target);                                                        // 5346
          event.preventDefault();                                                                                      // 5347
        } else if (commands[eventName]) {                                                                              // 5348
          commands[eventName].call(this, layoutInfo);                                                                  // 5349
          event.preventDefault();                                                                                      // 5350
        }                                                                                                              // 5351
                                                                                                                       // 5352
        // after command                                                                                               // 5353
        if ($.inArray(eventName, ['backColor', 'foreColor']) !== -1) {                                                 // 5354
          var options = layoutInfo.editor().data('options', options);                                                  // 5355
          var module = options.airMode ? modules.popover : modules.toolbar;                                            // 5356
          module.updateRecentColor(list.head($btn), eventName, value);                                                 // 5357
        }                                                                                                              // 5358
                                                                                                                       // 5359
        hToolbarAndPopoverUpdate(event);                                                                               // 5360
      }                                                                                                                // 5361
    };                                                                                                                 // 5362
                                                                                                                       // 5363
    var PX_PER_EM = 18;                                                                                                // 5364
    var hDimensionPickerMove = function (event, options) {                                                             // 5365
      var $picker = $(event.target.parentNode); // target is mousecatcher                                              // 5366
      var $dimensionDisplay = $picker.next();                                                                          // 5367
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');                                              // 5368
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');                                           // 5369
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');                                       // 5370
                                                                                                                       // 5371
      var posOffset;                                                                                                   // 5372
      // HTML5 with jQuery - e.offsetX is undefined in Firefox                                                         // 5373
      if (event.offsetX === undefined) {                                                                               // 5374
        var posCatcher = $(event.target).offset();                                                                     // 5375
        posOffset = {                                                                                                  // 5376
          x: event.pageX - posCatcher.left,                                                                            // 5377
          y: event.pageY - posCatcher.top                                                                              // 5378
        };                                                                                                             // 5379
      } else {                                                                                                         // 5380
        posOffset = {                                                                                                  // 5381
          x: event.offsetX,                                                                                            // 5382
          y: event.offsetY                                                                                             // 5383
        };                                                                                                             // 5384
      }                                                                                                                // 5385
                                                                                                                       // 5386
      var dim = {                                                                                                      // 5387
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,                                                                    // 5388
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1                                                                     // 5389
      };                                                                                                               // 5390
                                                                                                                       // 5391
      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });                                                 // 5392
      $catcher.attr('data-value', dim.c + 'x' + dim.r);                                                                // 5393
                                                                                                                       // 5394
      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {                                                       // 5395
        $unhighlighted.css({ width: dim.c + 1 + 'em'});                                                                // 5396
      }                                                                                                                // 5397
                                                                                                                       // 5398
      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {                                                       // 5399
        $unhighlighted.css({ height: dim.r + 1 + 'em'});                                                               // 5400
      }                                                                                                                // 5401
                                                                                                                       // 5402
      $dimensionDisplay.html(dim.c + ' x ' + dim.r);                                                                   // 5403
    };                                                                                                                 // 5404
                                                                                                                       // 5405
    /**                                                                                                                // 5406
     * bind KeyMap on keydown                                                                                          // 5407
     *                                                                                                                 // 5408
     * @param {Object} layoutInfo                                                                                      // 5409
     * @param {Object} keyMap                                                                                          // 5410
     */                                                                                                                // 5411
    this.bindKeyMap = function (layoutInfo, keyMap) {                                                                  // 5412
      var $editor = layoutInfo.editor();                                                                               // 5413
      var $editable = layoutInfo.editable();                                                                           // 5414
                                                                                                                       // 5415
      $editable.on('keydown', function (event) {                                                                       // 5416
        var keys = [];                                                                                                 // 5417
                                                                                                                       // 5418
        // modifier                                                                                                    // 5419
        if (event.metaKey) { keys.push('CMD'); }                                                                       // 5420
        if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }                                                     // 5421
        if (event.shiftKey) { keys.push('SHIFT'); }                                                                    // 5422
                                                                                                                       // 5423
        // keycode                                                                                                     // 5424
        var keyName = key.nameFromCode[event.keyCode];                                                                 // 5425
        if (keyName) {                                                                                                 // 5426
          keys.push(keyName);                                                                                          // 5427
        }                                                                                                              // 5428
                                                                                                                       // 5429
        var eventName = keyMap[keys.join('+')];                                                                        // 5430
        if (eventName) {                                                                                               // 5431
          if ($.summernote.pluginEvents[eventName]) {                                                                  // 5432
            var plugin = $.summernote.pluginEvents[eventName];                                                         // 5433
            if ($.isFunction(plugin)) {                                                                                // 5434
              plugin(event, modules.editor, layoutInfo);                                                               // 5435
            }                                                                                                          // 5436
          } else if (modules.editor[eventName]) {                                                                      // 5437
            modules.editor[eventName]($editable, $editor.data('options'));                                             // 5438
            event.preventDefault();                                                                                    // 5439
          } else if (commands[eventName]) {                                                                            // 5440
            commands[eventName].call(this, layoutInfo);                                                                // 5441
            event.preventDefault();                                                                                    // 5442
          }                                                                                                            // 5443
        } else if (key.isEdit(event.keyCode)) {                                                                        // 5444
          modules.editor.afterCommand($editable);                                                                      // 5445
        }                                                                                                              // 5446
      });                                                                                                              // 5447
    };                                                                                                                 // 5448
                                                                                                                       // 5449
    /**                                                                                                                // 5450
     * attach eventhandler                                                                                             // 5451
     *                                                                                                                 // 5452
     * @param {Object} layoutInfo - layout Informations                                                                // 5453
     * @param {Object} options - user options include custom event handlers                                            // 5454
     */                                                                                                                // 5455
    this.attach = function (layoutInfo, options) {                                                                     // 5456
      // handlers for editable                                                                                         // 5457
      if (options.shortcuts) {                                                                                         // 5458
        this.bindKeyMap(layoutInfo, options.keyMap[agent.isMac ? 'mac' : 'pc']);                                       // 5459
      }                                                                                                                // 5460
      layoutInfo.editable().on('mousedown', hMousedown);                                                               // 5461
      layoutInfo.editable().on('keyup mouseup', hToolbarAndPopoverUpdate);                                             // 5462
      layoutInfo.editable().on('scroll', hScroll);                                                                     // 5463
      modules.clipboard.attach(layoutInfo, options);                                                                   // 5464
                                                                                                                       // 5465
      // handler for handle and popover                                                                                // 5466
      modules.handle.attach(layoutInfo, options);                                                                      // 5467
      layoutInfo.popover().on('click', hToolbarAndPopoverClick);                                                       // 5468
      layoutInfo.popover().on('mousedown', hToolbarAndPopoverMousedown);                                               // 5469
                                                                                                                       // 5470
      // handler for drag and drop                                                                                     // 5471
      modules.dragAndDrop.attach(layoutInfo, options);                                                                 // 5472
                                                                                                                       // 5473
      // handlers for frame mode (toolbar, statusbar)                                                                  // 5474
      if (!options.airMode) {                                                                                          // 5475
        // handler for toolbar                                                                                         // 5476
        layoutInfo.toolbar().on('click', hToolbarAndPopoverClick);                                                     // 5477
        layoutInfo.toolbar().on('mousedown', hToolbarAndPopoverMousedown);                                             // 5478
                                                                                                                       // 5479
        // handler for statusbar                                                                                       // 5480
        modules.statusbar.attach(layoutInfo, options);                                                                 // 5481
      }                                                                                                                // 5482
                                                                                                                       // 5483
      // handler for table dimension                                                                                   // 5484
      var $catcherContainer = options.airMode ? layoutInfo.popover() :                                                 // 5485
                                                layoutInfo.toolbar();                                                  // 5486
      var $catcher = $catcherContainer.find('.note-dimension-picker-mousecatcher');                                    // 5487
      $catcher.css({                                                                                                   // 5488
        width: options.insertTableMaxSize.col + 'em',                                                                  // 5489
        height: options.insertTableMaxSize.row + 'em'                                                                  // 5490
      }).on('mousemove', function (event) {                                                                            // 5491
        hDimensionPickerMove(event, options);                                                                          // 5492
      });                                                                                                              // 5493
                                                                                                                       // 5494
      // save options on editor                                                                                        // 5495
      layoutInfo.editor().data('options', options);                                                                    // 5496
                                                                                                                       // 5497
      // ret styleWithCSS for backColor / foreColor clearing with 'inherit'.                                           // 5498
      if (!agent.isMSIE) {                                                                                             // 5499
        // [workaround] for Firefox                                                                                    // 5500
        //  - protect FF Error: NS_ERROR_FAILURE: Failure                                                              // 5501
        setTimeout(function () {                                                                                       // 5502
          document.execCommand('styleWithCSS', 0, options.styleWithSpan);                                              // 5503
        }, 0);                                                                                                         // 5504
      }                                                                                                                // 5505
                                                                                                                       // 5506
      // History                                                                                                       // 5507
      var history = new History(layoutInfo.editable());                                                                // 5508
      layoutInfo.editable().data('NoteHistory', history);                                                              // 5509
                                                                                                                       // 5510
      // All editor status will be saved on editable with jquery's data                                                // 5511
      // for support multiple editor with singleton object.                                                            // 5512
      layoutInfo.editable().data('callbacks', {                                                                        // 5513
        onInit: options.onInit,                                                                                        // 5514
        onFocus: options.onFocus,                                                                                      // 5515
        onBlur: options.onBlur,                                                                                        // 5516
        onKeydown: options.onKeydown,                                                                                  // 5517
        onKeyup: options.onKeyup,                                                                                      // 5518
        onMousedown: options.onMousedown,                                                                              // 5519
        onEnter: options.onEnter,                                                                                      // 5520
        onPaste: options.onPaste,                                                                                      // 5521
        onBeforeCommand: options.onBeforeCommand,                                                                      // 5522
        onChange: options.onChange,                                                                                    // 5523
        onImageUpload: options.onImageUpload,                                                                          // 5524
        onImageUploadError: options.onImageUploadError,                                                                // 5525
        onMediaDelete : options.onMediaDelete                                                                          // 5526
      });                                                                                                              // 5527
                                                                                                                       // 5528
      // Textarea: auto filling the code before form submit.                                                           // 5529
      if (dom.isTextarea(list.head(layoutInfo.holder()))) {                                                            // 5530
        layoutInfo.holder().closest('form').submit(function () {                                                       // 5531
          var contents = layoutInfo.holder().code();                                                                   // 5532
          layoutInfo.holder().val(contents);                                                                           // 5533
                                                                                                                       // 5534
          // callback on submit                                                                                        // 5535
          if (options.onsubmit) {                                                                                      // 5536
            options.onsubmit(contents);                                                                                // 5537
          }                                                                                                            // 5538
        });                                                                                                            // 5539
      }                                                                                                                // 5540
    };                                                                                                                 // 5541
                                                                                                                       // 5542
    /**                                                                                                                // 5543
     * attach jquery custom event                                                                                      // 5544
     *                                                                                                                 // 5545
     * @param {Object} layoutInfo - layout Informations                                                                // 5546
     */                                                                                                                // 5547
    this.attachCustomEvent = function (layoutInfo, options) {                                                          // 5548
      var $holder = layoutInfo.holder();                                                                               // 5549
      var $editable = layoutInfo.editable();                                                                           // 5550
      var callbacks = $editable.data('callbacks');                                                                     // 5551
                                                                                                                       // 5552
      $editable.focus(bindCustomEvent($holder, callbacks, 'focus'));                                                   // 5553
      $editable.blur(bindCustomEvent($holder, callbacks, 'blur'));                                                     // 5554
                                                                                                                       // 5555
      $editable.keydown(function (event) {                                                                             // 5556
        if (event.keyCode === key.code.ENTER) {                                                                        // 5557
          bindCustomEvent($holder, callbacks, 'enter').call(this, event);                                              // 5558
        }                                                                                                              // 5559
        bindCustomEvent($holder, callbacks, 'keydown').call(this, event);                                              // 5560
      });                                                                                                              // 5561
      $editable.keyup(bindCustomEvent($holder, callbacks, 'keyup'));                                                   // 5562
                                                                                                                       // 5563
      $editable.on('mousedown', bindCustomEvent($holder, callbacks, 'mousedown'));                                     // 5564
      $editable.on('mouseup', bindCustomEvent($holder, callbacks, 'mouseup'));                                         // 5565
      $editable.on('scroll', bindCustomEvent($holder, callbacks, 'scroll'));                                           // 5566
                                                                                                                       // 5567
      $editable.on('paste', bindCustomEvent($holder, callbacks, 'paste'));                                             // 5568
                                                                                                                       // 5569
      // [workaround] for old IE - IE8 don't have input events                                                         // 5570
      if (agent.isMSIE) {                                                                                              // 5571
        var sDomEvents = 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted';                                // 5572
        $editable.on(sDomEvents, bindCustomEvent($holder, callbacks, 'change'));                                       // 5573
      } else {                                                                                                         // 5574
        $editable.on('input', bindCustomEvent($holder, callbacks, 'change'));                                          // 5575
      }                                                                                                                // 5576
                                                                                                                       // 5577
      // callbacks for advanced features (camel)                                                                       // 5578
      if (!options.airMode) {                                                                                          // 5579
        layoutInfo.toolbar().click(bindCustomEvent($holder, callbacks, 'toolbar.click'));                              // 5580
        layoutInfo.popover().click(bindCustomEvent($holder, callbacks, 'popover.click'));                              // 5581
      }                                                                                                                // 5582
                                                                                                                       // 5583
      // Textarea: auto filling the code before form submit.                                                           // 5584
      if (dom.isTextarea(list.head($holder))) {                                                                        // 5585
        $holder.closest('form').submit(function (e) {                                                                  // 5586
          bindCustomEvent($holder, callbacks, 'submit').call(this, e, $holder.code());                                 // 5587
        });                                                                                                            // 5588
      }                                                                                                                // 5589
                                                                                                                       // 5590
      // fire init event                                                                                               // 5591
      bindCustomEvent($holder, callbacks, 'init')(layoutInfo);                                                         // 5592
                                                                                                                       // 5593
      // fire plugin init event                                                                                        // 5594
      for (var i = 0, len = $.summernote.plugins.length; i < len; i++) {                                               // 5595
        if ($.isFunction($.summernote.plugins[i].init)) {                                                              // 5596
          $.summernote.plugins[i].init(layoutInfo);                                                                    // 5597
        }                                                                                                              // 5598
      }                                                                                                                // 5599
    };                                                                                                                 // 5600
                                                                                                                       // 5601
    this.detach = function (layoutInfo, options) {                                                                     // 5602
      layoutInfo.holder().off();                                                                                       // 5603
      layoutInfo.editable().off();                                                                                     // 5604
                                                                                                                       // 5605
      layoutInfo.popover().off();                                                                                      // 5606
      layoutInfo.handle().off();                                                                                       // 5607
      layoutInfo.dialog().off();                                                                                       // 5608
                                                                                                                       // 5609
      if (!options.airMode) {                                                                                          // 5610
        layoutInfo.dropzone().off();                                                                                   // 5611
        layoutInfo.toolbar().off();                                                                                    // 5612
        layoutInfo.statusbar().off();                                                                                  // 5613
      }                                                                                                                // 5614
    };                                                                                                                 // 5615
  };                                                                                                                   // 5616
                                                                                                                       // 5617
  /**                                                                                                                  // 5618
   * @class Renderer                                                                                                   // 5619
   *                                                                                                                   // 5620
   * renderer                                                                                                          // 5621
   *                                                                                                                   // 5622
   * rendering toolbar and editable                                                                                    // 5623
   */                                                                                                                  // 5624
  var Renderer = function () {                                                                                         // 5625
                                                                                                                       // 5626
    /**                                                                                                                // 5627
     * bootstrap button template                                                                                       // 5628
     * @private                                                                                                        // 5629
     * @param {String} label button name                                                                               // 5630
     * @param {Object} [options] button options                                                                        // 5631
     * @param {String} [options.event] data-event                                                                      // 5632
     * @param {String} [options.className] button's class name                                                         // 5633
     * @param {String} [options.value] data-value                                                                      // 5634
     * @param {String} [options.title] button's title for popup                                                        // 5635
     * @param {String} [options.dropdown] dropdown html                                                                // 5636
     * @param {String} [options.hide] data-hide                                                                        // 5637
     */                                                                                                                // 5638
    var tplButton = function (label, options) {                                                                        // 5639
      var event = options.event;                                                                                       // 5640
      var value = options.value;                                                                                       // 5641
      var title = options.title;                                                                                       // 5642
      var className = options.className;                                                                               // 5643
      var dropdown = options.dropdown;                                                                                 // 5644
      var hide = options.hide;                                                                                         // 5645
                                                                                                                       // 5646
      return '<button type="button"' +                                                                                 // 5647
                 ' class="btn btn-default btn-sm btn-small' +                                                          // 5648
                   (className ? ' ' + className : '') +                                                                // 5649
                   (dropdown ? ' dropdown-toggle' : '') +                                                              // 5650
                 '"' +                                                                                                 // 5651
                 (dropdown ? ' data-toggle="dropdown"' : '') +                                                         // 5652
                 (title ? ' title="' + title + '"' : '') +                                                             // 5653
                 (event ? ' data-event="' + event + '"' : '') +                                                        // 5654
                 (value ? ' data-value=\'' + value + '\'' : '') +                                                      // 5655
                 (hide ? ' data-hide=\'' + hide + '\'' : '') +                                                         // 5656
                 ' tabindex="-1">' +                                                                                   // 5657
               label +                                                                                                 // 5658
               (dropdown ? ' <span class="caret"></span>' : '') +                                                      // 5659
             '</button>' +                                                                                             // 5660
             (dropdown || '');                                                                                         // 5661
    };                                                                                                                 // 5662
                                                                                                                       // 5663
    /**                                                                                                                // 5664
     * bootstrap icon button template                                                                                  // 5665
     * @private                                                                                                        // 5666
     * @param {String} iconClassName                                                                                   // 5667
     * @param {Object} [options]                                                                                       // 5668
     * @param {String} [options.event]                                                                                 // 5669
     * @param {String} [options.value]                                                                                 // 5670
     * @param {String} [options.title]                                                                                 // 5671
     * @param {String} [options.dropdown]                                                                              // 5672
     */                                                                                                                // 5673
    var tplIconButton = function (iconClassName, options) {                                                            // 5674
      var label = '<i class="' + iconClassName + '"></i>';                                                             // 5675
      return tplButton(label, options);                                                                                // 5676
    };                                                                                                                 // 5677
                                                                                                                       // 5678
    /**                                                                                                                // 5679
     * bootstrap popover template                                                                                      // 5680
     * @private                                                                                                        // 5681
     * @param {String} className                                                                                       // 5682
     * @param {String} content                                                                                         // 5683
     */                                                                                                                // 5684
    var tplPopover = function (className, content) {                                                                   // 5685
      var $popover = $('<div class="' + className + ' popover bottom in" style="display: none;">' +                    // 5686
               '<div class="arrow"></div>' +                                                                           // 5687
               '<div class="popover-content">' +                                                                       // 5688
               '</div>' +                                                                                              // 5689
             '</div>');                                                                                                // 5690
                                                                                                                       // 5691
      $popover.find('.popover-content').append(content);                                                               // 5692
      return $popover;                                                                                                 // 5693
    };                                                                                                                 // 5694
                                                                                                                       // 5695
    /**                                                                                                                // 5696
     * bootstrap dialog template                                                                                       // 5697
     *                                                                                                                 // 5698
     * @param {String} className                                                                                       // 5699
     * @param {String} [title='']                                                                                      // 5700
     * @param {String} body                                                                                            // 5701
     * @param {String} [footer='']                                                                                     // 5702
     */                                                                                                                // 5703
    var tplDialog = function (className, title, body, footer) {                                                        // 5704
      return '<div class="' + className + ' modal" aria-hidden="false">' +                                             // 5705
               '<div class="modal-dialog">' +                                                                          // 5706
                 '<div class="modal-content">' +                                                                       // 5707
                   (title ?                                                                                            // 5708
                   '<div class="modal-header">' +                                                                      // 5709
                     '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>' +         // 5710
                     '<h4 class="modal-title">' + title + '</h4>' +                                                    // 5711
                   '</div>' : ''                                                                                       // 5712
                   ) +                                                                                                 // 5713
                   '<div class="modal-body">' + body + '</div>' +                                                      // 5714
                   (footer ?                                                                                           // 5715
                   '<div class="modal-footer">' + footer + '</div>' : ''                                               // 5716
                   ) +                                                                                                 // 5717
                 '</div>' +                                                                                            // 5718
               '</div>' +                                                                                              // 5719
             '</div>';                                                                                                 // 5720
    };                                                                                                                 // 5721
                                                                                                                       // 5722
    var tplButtonInfo = {                                                                                              // 5723
      picture: function (lang, options) {                                                                              // 5724
        return tplIconButton(options.iconPrefix + 'picture-o', {                                                       // 5725
          event: 'showImageDialog',                                                                                    // 5726
          title: lang.image.image,                                                                                     // 5727
          hide: true                                                                                                   // 5728
        });                                                                                                            // 5729
      },                                                                                                               // 5730
      link: function (lang, options) {                                                                                 // 5731
        return tplIconButton(options.iconPrefix + 'link', {                                                            // 5732
          event: 'showLinkDialog',                                                                                     // 5733
          title: lang.link.link,                                                                                       // 5734
          hide: true                                                                                                   // 5735
        });                                                                                                            // 5736
      },                                                                                                               // 5737
      table: function (lang, options) {                                                                                // 5738
        var dropdown = '<ul class="note-table dropdown-menu">' +                                                       // 5739
                         '<div class="note-dimension-picker">' +                                                       // 5740
                           '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>' +
                           '<div class="note-dimension-picker-highlighted"></div>' +                                   // 5742
                           '<div class="note-dimension-picker-unhighlighted"></div>' +                                 // 5743
                         '</div>' +                                                                                    // 5744
                         '<div class="note-dimension-display"> 1 x 1 </div>' +                                         // 5745
                       '</ul>';                                                                                        // 5746
        return tplIconButton(options.iconPrefix + 'table', {                                                           // 5747
          title: lang.table.table,                                                                                     // 5748
          dropdown: dropdown                                                                                           // 5749
        });                                                                                                            // 5750
      },                                                                                                               // 5751
      style: function (lang, options) {                                                                                // 5752
        var items = options.styleTags.reduce(function (memo, v) {                                                      // 5753
          var label = lang.style[v === 'p' ? 'normal' : v];                                                            // 5754
          return memo + '<li><a data-event="formatBlock" href="#" data-value="' + v + '">' +                           // 5755
                   (                                                                                                   // 5756
                     (v === 'p' || v === 'pre') ? label :                                                              // 5757
                     '<' + v + '>' + label + '</' + v + '>'                                                            // 5758
                   ) +                                                                                                 // 5759
                 '</a></li>';                                                                                          // 5760
        }, '');                                                                                                        // 5761
                                                                                                                       // 5762
        return tplIconButton(options.iconPrefix + 'magic', {                                                           // 5763
          title: lang.style.style,                                                                                     // 5764
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'                                                     // 5765
        });                                                                                                            // 5766
      },                                                                                                               // 5767
      fontname: function (lang, options) {                                                                             // 5768
        var realFontList = [];                                                                                         // 5769
        var items = options.fontNames.reduce(function (memo, v) {                                                      // 5770
          if (!agent.isFontInstalled(v) && options.fontNamesIgnoreCheck.indexOf(v) === -1) {                           // 5771
            return memo;                                                                                               // 5772
          }                                                                                                            // 5773
          realFontList.push(v);                                                                                        // 5774
          return memo + '<li><a data-event="fontName" href="#" data-value="' + v + '" style="font-family:\'' + v + '\'">' +
                          '<i class="' + options.iconPrefix + 'check"></i> ' + v +                                     // 5776
                        '</a></li>';                                                                                   // 5777
        }, '');                                                                                                        // 5778
                                                                                                                       // 5779
        var hasDefaultFont = agent.isFontInstalled(options.defaultFontName);                                           // 5780
        var defaultFontName = (hasDefaultFont) ? options.defaultFontName : realFontList[0];                            // 5781
                                                                                                                       // 5782
        var label = '<span class="note-current-fontname">' +                                                           // 5783
                        defaultFontName +                                                                              // 5784
                     '</span>';                                                                                        // 5785
        return tplButton(label, {                                                                                      // 5786
          title: lang.font.name,                                                                                       // 5787
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'                                                     // 5788
        });                                                                                                            // 5789
      },                                                                                                               // 5790
      fontsize: function (lang, options) {                                                                             // 5791
        var items = options.fontSizes.reduce(function (memo, v) {                                                      // 5792
          return memo + '<li><a data-event="fontSize" href="#" data-value="' + v + '">' +                              // 5793
                          '<i class="fa fa-check"></i> ' + v +                                                         // 5794
                        '</a></li>';                                                                                   // 5795
        }, '');                                                                                                        // 5796
                                                                                                                       // 5797
        var label = '<span class="note-current-fontsize">11</span>';                                                   // 5798
        return tplButton(label, {                                                                                      // 5799
          title: lang.font.size,                                                                                       // 5800
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'                                                     // 5801
        });                                                                                                            // 5802
      },                                                                                                               // 5803
      color: function (lang, options) {                                                                                // 5804
        var colorButtonLabel = '<i class="' + options.iconPrefix + 'font" style="color:black;background-color:yellow;"></i>';
        var colorButton = tplButton(colorButtonLabel, {                                                                // 5806
          className: 'note-recent-color',                                                                              // 5807
          title: lang.color.recent,                                                                                    // 5808
          event: 'color',                                                                                              // 5809
          value: '{"backColor":"yellow"}'                                                                              // 5810
        });                                                                                                            // 5811
                                                                                                                       // 5812
        var dropdown = '<ul class="dropdown-menu">' +                                                                  // 5813
                         '<li>' +                                                                                      // 5814
                           '<div class="btn-group">' +                                                                 // 5815
                             '<div class="note-palette-title">' + lang.color.background + '</div>' +                   // 5816
                             '<div class="note-color-reset" data-event="backColor"' +                                  // 5817
                               ' data-value="inherit" title="' + lang.color.transparent + '">' +                       // 5818
                               lang.color.setTransparent +                                                             // 5819
                             '</div>' +                                                                                // 5820
                             '<div class="note-color-palette" data-target-event="backColor"></div>' +                  // 5821
                           '</div>' +                                                                                  // 5822
                           '<div class="btn-group">' +                                                                 // 5823
                             '<div class="note-palette-title">' + lang.color.foreground + '</div>' +                   // 5824
                             '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + lang.color.reset + '">' +
                               lang.color.resetToDefault +                                                             // 5826
                             '</div>' +                                                                                // 5827
                             '<div class="note-color-palette" data-target-event="foreColor"></div>' +                  // 5828
                           '</div>' +                                                                                  // 5829
                         '</li>' +                                                                                     // 5830
                       '</ul>';                                                                                        // 5831
                                                                                                                       // 5832
        var moreButton = tplButton('', {                                                                               // 5833
          title: lang.color.more,                                                                                      // 5834
          dropdown: dropdown                                                                                           // 5835
        });                                                                                                            // 5836
                                                                                                                       // 5837
        return colorButton + moreButton;                                                                               // 5838
      },                                                                                                               // 5839
      bold: function (lang, options) {                                                                                 // 5840
        return tplIconButton(options.iconPrefix + 'bold', {                                                            // 5841
          event: 'bold',                                                                                               // 5842
          title: lang.font.bold                                                                                        // 5843
        });                                                                                                            // 5844
      },                                                                                                               // 5845
      italic: function (lang, options) {                                                                               // 5846
        return tplIconButton(options.iconPrefix + 'italic', {                                                          // 5847
          event: 'italic',                                                                                             // 5848
          title: lang.font.italic                                                                                      // 5849
        });                                                                                                            // 5850
      },                                                                                                               // 5851
      underline: function (lang, options) {                                                                            // 5852
        return tplIconButton(options.iconPrefix + 'underline', {                                                       // 5853
          event: 'underline',                                                                                          // 5854
          title: lang.font.underline                                                                                   // 5855
        });                                                                                                            // 5856
      },                                                                                                               // 5857
      strikethrough: function (lang) {                                                                                 // 5858
        return tplIconButton('fa fa-strikethrough', {                                                                  // 5859
          event: 'strikethrough',                                                                                      // 5860
          title: lang.font.strikethrough                                                                               // 5861
        });                                                                                                            // 5862
      },                                                                                                               // 5863
      superscript: function (lang) {                                                                                   // 5864
        return tplIconButton('fa fa-superscript', {                                                                    // 5865
          event: 'superscript',                                                                                        // 5866
          title: lang.font.superscript                                                                                 // 5867
        });                                                                                                            // 5868
      },                                                                                                               // 5869
      subscript: function (lang) {                                                                                     // 5870
        return tplIconButton('fa fa-subscript', {                                                                      // 5871
          event: 'subscript',                                                                                          // 5872
          title: lang.font.subscript                                                                                   // 5873
        });                                                                                                            // 5874
      },                                                                                                               // 5875
      clear: function (lang, options) {                                                                                // 5876
        return tplIconButton(options.iconPrefix + 'eraser', {                                                          // 5877
          event: 'removeFormat',                                                                                       // 5878
          title: lang.font.clear                                                                                       // 5879
        });                                                                                                            // 5880
      },                                                                                                               // 5881
      ul: function (lang, options) {                                                                                   // 5882
        return tplIconButton(options.iconPrefix + 'list-ul', {                                                         // 5883
          event: 'insertUnorderedList',                                                                                // 5884
          title: lang.lists.unordered                                                                                  // 5885
        });                                                                                                            // 5886
      },                                                                                                               // 5887
      ol: function (lang, options) {                                                                                   // 5888
        return tplIconButton(options.iconPrefix + 'list-ol', {                                                         // 5889
          event: 'insertOrderedList',                                                                                  // 5890
          title: lang.lists.ordered                                                                                    // 5891
        });                                                                                                            // 5892
      },                                                                                                               // 5893
      paragraph: function (lang, options) {                                                                            // 5894
        var leftButton = tplIconButton(options.iconPrefix + 'align-left', {                                            // 5895
          title: lang.paragraph.left,                                                                                  // 5896
          event: 'justifyLeft'                                                                                         // 5897
        });                                                                                                            // 5898
        var centerButton = tplIconButton(options.iconPrefix + 'align-center', {                                        // 5899
          title: lang.paragraph.center,                                                                                // 5900
          event: 'justifyCenter'                                                                                       // 5901
        });                                                                                                            // 5902
        var rightButton = tplIconButton(options.iconPrefix + 'align-right', {                                          // 5903
          title: lang.paragraph.right,                                                                                 // 5904
          event: 'justifyRight'                                                                                        // 5905
        });                                                                                                            // 5906
        var justifyButton = tplIconButton(options.iconPrefix + 'align-justify', {                                      // 5907
          title: lang.paragraph.justify,                                                                               // 5908
          event: 'justifyFull'                                                                                         // 5909
        });                                                                                                            // 5910
                                                                                                                       // 5911
        var outdentButton = tplIconButton(options.iconPrefix + 'outdent', {                                            // 5912
          title: lang.paragraph.outdent,                                                                               // 5913
          event: 'outdent'                                                                                             // 5914
        });                                                                                                            // 5915
        var indentButton = tplIconButton(options.iconPrefix + 'indent', {                                              // 5916
          title: lang.paragraph.indent,                                                                                // 5917
          event: 'indent'                                                                                              // 5918
        });                                                                                                            // 5919
                                                                                                                       // 5920
        var dropdown = '<div class="dropdown-menu">' +                                                                 // 5921
                         '<div class="note-align btn-group">' +                                                        // 5922
                           leftButton + centerButton + rightButton + justifyButton +                                   // 5923
                         '</div>' +                                                                                    // 5924
                         '<div class="note-list btn-group">' +                                                         // 5925
                           indentButton + outdentButton +                                                              // 5926
                         '</div>' +                                                                                    // 5927
                       '</div>';                                                                                       // 5928
                                                                                                                       // 5929
        return tplIconButton(options.iconPrefix + 'align-left', {                                                      // 5930
          title: lang.paragraph.paragraph,                                                                             // 5931
          dropdown: dropdown                                                                                           // 5932
        });                                                                                                            // 5933
      },                                                                                                               // 5934
      height: function (lang, options) {                                                                               // 5935
        var items = options.lineHeights.reduce(function (memo, v) {                                                    // 5936
          return memo + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(v) + '">' +                // 5937
                          '<i class="' + options.iconPrefix + 'check"></i> ' + v +                                     // 5938
                        '</a></li>';                                                                                   // 5939
        }, '');                                                                                                        // 5940
                                                                                                                       // 5941
        return tplIconButton(options.iconPrefix + 'text-height', {                                                     // 5942
          title: lang.font.height,                                                                                     // 5943
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'                                                     // 5944
        });                                                                                                            // 5945
                                                                                                                       // 5946
      },                                                                                                               // 5947
      help: function (lang, options) {                                                                                 // 5948
        return tplIconButton(options.iconPrefix + 'question', {                                                        // 5949
          event: 'showHelpDialog',                                                                                     // 5950
          title: lang.options.help,                                                                                    // 5951
          hide: true                                                                                                   // 5952
        });                                                                                                            // 5953
      },                                                                                                               // 5954
      fullscreen: function (lang, options) {                                                                           // 5955
        return tplIconButton(options.iconPrefix + 'arrows-alt', {                                                      // 5956
          event: 'fullscreen',                                                                                         // 5957
          title: lang.options.fullscreen                                                                               // 5958
        });                                                                                                            // 5959
      },                                                                                                               // 5960
      codeview: function (lang, options) {                                                                             // 5961
        return tplIconButton(options.iconPrefix + 'code', {                                                            // 5962
          event: 'codeview',                                                                                           // 5963
          title: lang.options.codeview                                                                                 // 5964
        });                                                                                                            // 5965
      },                                                                                                               // 5966
      undo: function (lang, options) {                                                                                 // 5967
        return tplIconButton(options.iconPrefix + 'undo', {                                                            // 5968
          event: 'undo',                                                                                               // 5969
          title: lang.history.undo                                                                                     // 5970
        });                                                                                                            // 5971
      },                                                                                                               // 5972
      redo: function (lang, options) {                                                                                 // 5973
        return tplIconButton(options.iconPrefix + 'repeat', {                                                          // 5974
          event: 'redo',                                                                                               // 5975
          title: lang.history.redo                                                                                     // 5976
        });                                                                                                            // 5977
      },                                                                                                               // 5978
      hr: function (lang, options) {                                                                                   // 5979
        return tplIconButton(options.iconPrefix + 'minus', {                                                           // 5980
          event: 'insertHorizontalRule',                                                                               // 5981
          title: lang.hr.insert                                                                                        // 5982
        });                                                                                                            // 5983
      }                                                                                                                // 5984
    };                                                                                                                 // 5985
                                                                                                                       // 5986
    var tplPopovers = function (lang, options) {                                                                       // 5987
      var tplLinkPopover = function () {                                                                               // 5988
        var linkButton = tplIconButton(options.iconPrefix + 'edit', {                                                  // 5989
          title: lang.link.edit,                                                                                       // 5990
          event: 'showLinkDialog',                                                                                     // 5991
          hide: true                                                                                                   // 5992
        });                                                                                                            // 5993
        var unlinkButton = tplIconButton(options.iconPrefix + 'unlink', {                                              // 5994
          title: lang.link.unlink,                                                                                     // 5995
          event: 'unlink'                                                                                              // 5996
        });                                                                                                            // 5997
        var content = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;' +               // 5998
                      '<div class="note-insert btn-group">' +                                                          // 5999
                        linkButton + unlinkButton +                                                                    // 6000
                      '</div>';                                                                                        // 6001
        return tplPopover('note-link-popover', content);                                                               // 6002
      };                                                                                                               // 6003
                                                                                                                       // 6004
      var tplImagePopover = function () {                                                                              // 6005
        var fullButton = tplButton('<span class="note-fontsize-10">100%</span>', {                                     // 6006
          title: lang.image.resizeFull,                                                                                // 6007
          event: 'resize',                                                                                             // 6008
          value: '1'                                                                                                   // 6009
        });                                                                                                            // 6010
        var halfButton = tplButton('<span class="note-fontsize-10">50%</span>', {                                      // 6011
          title: lang.image.resizeHalf,                                                                                // 6012
          event: 'resize',                                                                                             // 6013
          value: '0.5'                                                                                                 // 6014
        });                                                                                                            // 6015
        var quarterButton = tplButton('<span class="note-fontsize-10">25%</span>', {                                   // 6016
          title: lang.image.resizeQuarter,                                                                             // 6017
          event: 'resize',                                                                                             // 6018
          value: '0.25'                                                                                                // 6019
        });                                                                                                            // 6020
                                                                                                                       // 6021
        var leftButton = tplIconButton(options.iconPrefix + 'align-left', {                                            // 6022
          title: lang.image.floatLeft,                                                                                 // 6023
          event: 'floatMe',                                                                                            // 6024
          value: 'left'                                                                                                // 6025
        });                                                                                                            // 6026
        var rightButton = tplIconButton(options.iconPrefix + 'align-right', {                                          // 6027
          title: lang.image.floatRight,                                                                                // 6028
          event: 'floatMe',                                                                                            // 6029
          value: 'right'                                                                                               // 6030
        });                                                                                                            // 6031
        var justifyButton = tplIconButton(options.iconPrefix + 'align-justify', {                                      // 6032
          title: lang.image.floatNone,                                                                                 // 6033
          event: 'floatMe',                                                                                            // 6034
          value: 'none'                                                                                                // 6035
        });                                                                                                            // 6036
                                                                                                                       // 6037
        var roundedButton = tplIconButton(options.iconPrefix + 'square', {                                             // 6038
          title: lang.image.shapeRounded,                                                                              // 6039
          event: 'imageShape',                                                                                         // 6040
          value: 'img-rounded'                                                                                         // 6041
        });                                                                                                            // 6042
        var circleButton = tplIconButton(options.iconPrefix + 'circle-o', {                                            // 6043
          title: lang.image.shapeCircle,                                                                               // 6044
          event: 'imageShape',                                                                                         // 6045
          value: 'img-circle'                                                                                          // 6046
        });                                                                                                            // 6047
        var thumbnailButton = tplIconButton(options.iconPrefix + 'picture-o', {                                        // 6048
          title: lang.image.shapeThumbnail,                                                                            // 6049
          event: 'imageShape',                                                                                         // 6050
          value: 'img-thumbnail'                                                                                       // 6051
        });                                                                                                            // 6052
        var noneButton = tplIconButton(options.iconPrefix + 'times', {                                                 // 6053
          title: lang.image.shapeNone,                                                                                 // 6054
          event: 'imageShape',                                                                                         // 6055
          value: ''                                                                                                    // 6056
        });                                                                                                            // 6057
                                                                                                                       // 6058
        var removeButton = tplIconButton(options.iconPrefix + 'trash-o', {                                             // 6059
          title: lang.image.remove,                                                                                    // 6060
          event: 'removeMedia',                                                                                        // 6061
          value: 'none'                                                                                                // 6062
        });                                                                                                            // 6063
                                                                                                                       // 6064
        var content = '<div class="btn-group">' + fullButton + halfButton + quarterButton + '</div>' +                 // 6065
                      '<div class="btn-group">' + leftButton + rightButton + justifyButton + '</div>' +                // 6066
                      '<div class="btn-group">' + roundedButton + circleButton + thumbnailButton + noneButton + '</div>' +
                      '<div class="btn-group">' + removeButton + '</div>';                                             // 6068
        return tplPopover('note-image-popover', content);                                                              // 6069
      };                                                                                                               // 6070
                                                                                                                       // 6071
      var tplAirPopover = function () {                                                                                // 6072
        var $content = $('<div />');                                                                                   // 6073
        for (var idx = 0, len = options.airPopover.length; idx < len; idx ++) {                                        // 6074
          var group = options.airPopover[idx];                                                                         // 6075
                                                                                                                       // 6076
          var $group = $('<div class="note-' + group[0] + ' btn-group">');                                             // 6077
          for (var i = 0, lenGroup = group[1].length; i < lenGroup; i++) {                                             // 6078
            var $button = $(tplButtonInfo[group[1][i]](lang, options));                                                // 6079
                                                                                                                       // 6080
            $button.attr('data-name', group[1][i]);                                                                    // 6081
                                                                                                                       // 6082
            $group.append($button);                                                                                    // 6083
          }                                                                                                            // 6084
          $content.append($group);                                                                                     // 6085
        }                                                                                                              // 6086
                                                                                                                       // 6087
        return tplPopover('note-air-popover', $content.children());                                                    // 6088
      };                                                                                                               // 6089
                                                                                                                       // 6090
      var $notePopover = $('<div class="note-popover" />');                                                            // 6091
                                                                                                                       // 6092
      $notePopover.append(tplLinkPopover());                                                                           // 6093
      $notePopover.append(tplImagePopover());                                                                          // 6094
                                                                                                                       // 6095
      if (options.airMode) {                                                                                           // 6096
        $notePopover.append(tplAirPopover());                                                                          // 6097
      }                                                                                                                // 6098
                                                                                                                       // 6099
      return $notePopover;                                                                                             // 6100
    };                                                                                                                 // 6101
                                                                                                                       // 6102
    var tplHandles = function () {                                                                                     // 6103
      return '<div class="note-handle">' +                                                                             // 6104
               '<div class="note-control-selection">' +                                                                // 6105
                 '<div class="note-control-selection-bg"></div>' +                                                     // 6106
                 '<div class="note-control-holder note-control-nw"></div>' +                                           // 6107
                 '<div class="note-control-holder note-control-ne"></div>' +                                           // 6108
                 '<div class="note-control-holder note-control-sw"></div>' +                                           // 6109
                 '<div class="note-control-sizing note-control-se"></div>' +                                           // 6110
                 '<div class="note-control-selection-info"></div>' +                                                   // 6111
               '</div>' +                                                                                              // 6112
             '</div>';                                                                                                 // 6113
    };                                                                                                                 // 6114
                                                                                                                       // 6115
    /**                                                                                                                // 6116
     * shortcut table template                                                                                         // 6117
     * @param {String} title                                                                                           // 6118
     * @param {String} body                                                                                            // 6119
     */                                                                                                                // 6120
    var tplShortcut = function (title, keys) {                                                                         // 6121
      var keyClass = 'note-shortcut-col col-xs-6 note-shortcut-';                                                      // 6122
      var body = [];                                                                                                   // 6123
                                                                                                                       // 6124
      for (var i in keys) {                                                                                            // 6125
        if (keys.hasOwnProperty(i)) {                                                                                  // 6126
          body.push(                                                                                                   // 6127
            '<div class="' + keyClass + 'key">' + keys[i].kbd + '</div>' +                                             // 6128
            '<div class="' + keyClass + 'name">' + keys[i].text + '</div>'                                             // 6129
            );                                                                                                         // 6130
        }                                                                                                              // 6131
      }                                                                                                                // 6132
                                                                                                                       // 6133
      return '<div class="note-shortcut-row row"><div class="' + keyClass + 'title col-xs-offset-6">' + title + '</div></div>' +
             '<div class="note-shortcut-row row">' + body.join('</div><div class="note-shortcut-row row">') + '</div>';
    };                                                                                                                 // 6136
                                                                                                                       // 6137
    var tplShortcutText = function (lang) {                                                                            // 6138
      var keys = [                                                                                                     // 6139
        { kbd: '⌘ + B', text: lang.font.bold },                                                                        // 6140
        { kbd: '⌘ + I', text: lang.font.italic },                                                                      // 6141
        { kbd: '⌘ + U', text: lang.font.underline },                                                                   // 6142
        { kbd: '⌘ + \\', text: lang.font.clear }                                                                       // 6143
      ];                                                                                                               // 6144
                                                                                                                       // 6145
      return tplShortcut(lang.shortcut.textFormatting, keys);                                                          // 6146
    };                                                                                                                 // 6147
                                                                                                                       // 6148
    var tplShortcutAction = function (lang) {                                                                          // 6149
      var keys = [                                                                                                     // 6150
        { kbd: '⌘ + Z', text: lang.history.undo },                                                                     // 6151
        { kbd: '⌘ + ⇧ + Z', text: lang.history.redo },                                                                 // 6152
        { kbd: '⌘ + ]', text: lang.paragraph.indent },                                                                 // 6153
        { kbd: '⌘ + [', text: lang.paragraph.outdent },                                                                // 6154
        { kbd: '⌘ + ENTER', text: lang.hr.insert }                                                                     // 6155
      ];                                                                                                               // 6156
                                                                                                                       // 6157
      return tplShortcut(lang.shortcut.action, keys);                                                                  // 6158
    };                                                                                                                 // 6159
                                                                                                                       // 6160
    var tplShortcutPara = function (lang) {                                                                            // 6161
      var keys = [                                                                                                     // 6162
        { kbd: '⌘ + ⇧ + L', text: lang.paragraph.left },                                                               // 6163
        { kbd: '⌘ + ⇧ + E', text: lang.paragraph.center },                                                             // 6164
        { kbd: '⌘ + ⇧ + R', text: lang.paragraph.right },                                                              // 6165
        { kbd: '⌘ + ⇧ + J', text: lang.paragraph.justify },                                                            // 6166
        { kbd: '⌘ + ⇧ + NUM7', text: lang.lists.ordered },                                                             // 6167
        { kbd: '⌘ + ⇧ + NUM8', text: lang.lists.unordered }                                                            // 6168
      ];                                                                                                               // 6169
                                                                                                                       // 6170
      return tplShortcut(lang.shortcut.paragraphFormatting, keys);                                                     // 6171
    };                                                                                                                 // 6172
                                                                                                                       // 6173
    var tplShortcutStyle = function (lang) {                                                                           // 6174
      var keys = [                                                                                                     // 6175
        { kbd: '⌘ + NUM0', text: lang.style.normal },                                                                  // 6176
        { kbd: '⌘ + NUM1', text: lang.style.h1 },                                                                      // 6177
        { kbd: '⌘ + NUM2', text: lang.style.h2 },                                                                      // 6178
        { kbd: '⌘ + NUM3', text: lang.style.h3 },                                                                      // 6179
        { kbd: '⌘ + NUM4', text: lang.style.h4 },                                                                      // 6180
        { kbd: '⌘ + NUM5', text: lang.style.h5 },                                                                      // 6181
        { kbd: '⌘ + NUM6', text: lang.style.h6 }                                                                       // 6182
      ];                                                                                                               // 6183
                                                                                                                       // 6184
      return tplShortcut(lang.shortcut.documentStyle, keys);                                                           // 6185
    };                                                                                                                 // 6186
                                                                                                                       // 6187
    var tplExtraShortcuts = function (lang, options) {                                                                 // 6188
      var extraKeys = options.extraKeys;                                                                               // 6189
      var keys = [];                                                                                                   // 6190
                                                                                                                       // 6191
      for (var key in extraKeys) {                                                                                     // 6192
        if (extraKeys.hasOwnProperty(key)) {                                                                           // 6193
          keys.push({ kbd: key, text: extraKeys[key] });                                                               // 6194
        }                                                                                                              // 6195
      }                                                                                                                // 6196
                                                                                                                       // 6197
      return tplShortcut(lang.shortcut.extraKeys, keys);                                                               // 6198
    };                                                                                                                 // 6199
                                                                                                                       // 6200
    var tplShortcutTable = function (lang, options) {                                                                  // 6201
      var colClass = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"';                                     // 6202
      var template = [                                                                                                 // 6203
        '<div ' + colClass + '>' + tplShortcutAction(lang, options) + '</div>' +                                       // 6204
        '<div ' + colClass + '>' + tplShortcutText(lang, options) + '</div>',                                          // 6205
        '<div ' + colClass + '>' + tplShortcutStyle(lang, options) + '</div>' +                                        // 6206
        '<div ' + colClass + '>' + tplShortcutPara(lang, options) + '</div>'                                           // 6207
      ];                                                                                                               // 6208
                                                                                                                       // 6209
      if (options.extraKeys) {                                                                                         // 6210
        template.push('<div ' + colClass + '>' + tplExtraShortcuts(lang, options) + '</div>');                         // 6211
      }                                                                                                                // 6212
                                                                                                                       // 6213
      return '<div class="note-shortcut-row row">' +                                                                   // 6214
               template.join('</div><div class="note-shortcut-row row">') +                                            // 6215
             '</div>';                                                                                                 // 6216
    };                                                                                                                 // 6217
                                                                                                                       // 6218
    var replaceMacKeys = function (sHtml) {                                                                            // 6219
      return sHtml.replace(/⌘/g, 'Ctrl').replace(/⇧/g, 'Shift');                                                       // 6220
    };                                                                                                                 // 6221
                                                                                                                       // 6222
    var tplDialogInfo = {                                                                                              // 6223
      image: function (lang, options) {                                                                                // 6224
        var imageLimitation = '';                                                                                      // 6225
        if (options.maximumImageFileSize) {                                                                            // 6226
          var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));                              // 6227
          var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +                    // 6228
                             ' ' + ' KMGTP'[unit] + 'B';                                                               // 6229
          imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';                // 6230
        }                                                                                                              // 6231
                                                                                                                       // 6232
        var body = '<div class="form-group row-fluid note-group-select-from-files">' +                                 // 6233
                     '<label>' + lang.image.selectFromFiles + '</label>' +                                             // 6234
                     '<input class="note-image-input" type="file" name="files" accept="image/*" multiple="multiple" />' +
                     imageLimitation +                                                                                 // 6236
                   '</div>' +                                                                                          // 6237
                   '<div class="form-group row-fluid">' +                                                              // 6238
                     '<label>' + lang.image.url + '</label>' +                                                         // 6239
                     '<input class="note-image-url form-control span12" type="text" />' +                              // 6240
                   '</div>';                                                                                           // 6241
        var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';
        return tplDialog('note-image-dialog', lang.image.insert, body, footer);                                        // 6243
      },                                                                                                               // 6244
                                                                                                                       // 6245
      link: function (lang, options) {                                                                                 // 6246
        var body = '<div class="form-group row-fluid">' +                                                              // 6247
                     '<label>' + lang.link.textToDisplay + '</label>' +                                                // 6248
                     '<input class="note-link-text form-control span12" type="text" />' +                              // 6249
                   '</div>' +                                                                                          // 6250
                   '<div class="form-group row-fluid">' +                                                              // 6251
                     '<label>' + lang.link.url + '</label>' +                                                          // 6252
                     '<input class="note-link-url form-control span12" type="text" />' +                               // 6253
                   '</div>' +                                                                                          // 6254
                   (!options.disableLinkTarget ?                                                                       // 6255
                     '<div class="checkbox">' +                                                                        // 6256
                       '<label>' + '<input type="checkbox" checked> ' +                                                // 6257
                         lang.link.openInNewWindow +                                                                   // 6258
                       '</label>' +                                                                                    // 6259
                     '</div>' : ''                                                                                     // 6260
                   );                                                                                                  // 6261
        var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';
        return tplDialog('note-link-dialog', lang.link.insert, body, footer);                                          // 6263
      },                                                                                                               // 6264
                                                                                                                       // 6265
      help: function (lang, options) {                                                                                 // 6266
        var body = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + lang.shortcut.close + '</a>' +
                   '<div class="title">' + lang.shortcut.shortcuts + '</div>' +                                        // 6268
                   (agent.isMac ? tplShortcutTable(lang, options) : replaceMacKeys(tplShortcutTable(lang, options))) + // 6269
                   '<p class="text-center">' +                                                                         // 6270
                     '<a href="//summernote.org/" target="_blank">Summernote 0.6.5</a> · ' +                           // 6271
                     '<a href="//github.com/summernote/summernote" target="_blank">Project</a> · ' +                   // 6272
                     '<a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a>' +                // 6273
                   '</p>';                                                                                             // 6274
        return tplDialog('note-help-dialog', '', body, '');                                                            // 6275
      }                                                                                                                // 6276
    };                                                                                                                 // 6277
                                                                                                                       // 6278
    var tplDialogs = function (lang, options) {                                                                        // 6279
      var dialogs = '';                                                                                                // 6280
                                                                                                                       // 6281
      $.each(tplDialogInfo, function (idx, tplDialog) {                                                                // 6282
        dialogs += tplDialog(lang, options);                                                                           // 6283
      });                                                                                                              // 6284
                                                                                                                       // 6285
      return '<div class="note-dialog">' + dialogs + '</div>';                                                         // 6286
    };                                                                                                                 // 6287
                                                                                                                       // 6288
    var tplStatusbar = function () {                                                                                   // 6289
      return '<div class="note-resizebar">' +                                                                          // 6290
               '<div class="note-icon-bar"></div>' +                                                                   // 6291
               '<div class="note-icon-bar"></div>' +                                                                   // 6292
               '<div class="note-icon-bar"></div>' +                                                                   // 6293
             '</div>';                                                                                                 // 6294
    };                                                                                                                 // 6295
                                                                                                                       // 6296
    var representShortcut = function (str) {                                                                           // 6297
      if (agent.isMac) {                                                                                               // 6298
        str = str.replace('CMD', '⌘').replace('SHIFT', '⇧');                                                           // 6299
      }                                                                                                                // 6300
                                                                                                                       // 6301
      return str.replace('BACKSLASH', '\\')                                                                            // 6302
                .replace('SLASH', '/')                                                                                 // 6303
                .replace('LEFTBRACKET', '[')                                                                           // 6304
                .replace('RIGHTBRACKET', ']');                                                                         // 6305
    };                                                                                                                 // 6306
                                                                                                                       // 6307
    /**                                                                                                                // 6308
     * createTooltip                                                                                                   // 6309
     *                                                                                                                 // 6310
     * @param {jQuery} $container                                                                                      // 6311
     * @param {Object} keyMap                                                                                          // 6312
     * @param {String} [sPlacement]                                                                                    // 6313
     */                                                                                                                // 6314
    var createTooltip = function ($container, keyMap, sPlacement) {                                                    // 6315
      var invertedKeyMap = func.invertObject(keyMap);                                                                  // 6316
      var $buttons = $container.find('button');                                                                        // 6317
                                                                                                                       // 6318
      $buttons.each(function (i, elBtn) {                                                                              // 6319
        var $btn = $(elBtn);                                                                                           // 6320
        var sShortcut = invertedKeyMap[$btn.data('event')];                                                            // 6321
        if (sShortcut) {                                                                                               // 6322
          $btn.attr('title', function (i, v) {                                                                         // 6323
            return v + ' (' + representShortcut(sShortcut) + ')';                                                      // 6324
          });                                                                                                          // 6325
        }                                                                                                              // 6326
      // bootstrap tooltip on btn-group bug                                                                            // 6327
      // https://github.com/twbs/bootstrap/issues/5687                                                                 // 6328
      }).tooltip({                                                                                                     // 6329
        container: 'body',                                                                                             // 6330
        trigger: 'hover',                                                                                              // 6331
        placement: sPlacement || 'top'                                                                                 // 6332
      }).on('click', function () {                                                                                     // 6333
        $(this).tooltip('hide');                                                                                       // 6334
      });                                                                                                              // 6335
    };                                                                                                                 // 6336
                                                                                                                       // 6337
    // createPalette                                                                                                   // 6338
    var createPalette = function ($container, options) {                                                               // 6339
      var colorInfo = options.colors;                                                                                  // 6340
      $container.find('.note-color-palette').each(function () {                                                        // 6341
        var $palette = $(this), eventName = $palette.attr('data-target-event');                                        // 6342
        var paletteContents = [];                                                                                      // 6343
        for (var row = 0, lenRow = colorInfo.length; row < lenRow; row++) {                                            // 6344
          var colors = colorInfo[row];                                                                                 // 6345
          var buttons = [];                                                                                            // 6346
          for (var col = 0, lenCol = colors.length; col < lenCol; col++) {                                             // 6347
            var color = colors[col];                                                                                   // 6348
            buttons.push(['<button type="button" class="note-color-btn" style="background-color:', color,              // 6349
                           ';" data-event="', eventName,                                                               // 6350
                           '" data-value="', color,                                                                    // 6351
                           '" title="', color,                                                                         // 6352
                           '" data-toggle="button" tabindex="-1"></button>'].join(''));                                // 6353
          }                                                                                                            // 6354
          paletteContents.push('<div class="note-color-row">' + buttons.join('') + '</div>');                          // 6355
        }                                                                                                              // 6356
        $palette.html(paletteContents.join(''));                                                                       // 6357
      });                                                                                                              // 6358
    };                                                                                                                 // 6359
                                                                                                                       // 6360
    /**                                                                                                                // 6361
     * create summernote layout (air mode)                                                                             // 6362
     *                                                                                                                 // 6363
     * @param {jQuery} $holder                                                                                         // 6364
     * @param {Object} options                                                                                         // 6365
     */                                                                                                                // 6366
    this.createLayoutByAirMode = function ($holder, options) {                                                         // 6367
      var langInfo = options.langInfo;                                                                                 // 6368
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];                                                         // 6369
      var id = func.uniqueId();                                                                                        // 6370
                                                                                                                       // 6371
      $holder.addClass('note-air-editor note-editable');                                                               // 6372
      $holder.attr({                                                                                                   // 6373
        'id': 'note-editor-' + id,                                                                                     // 6374
        'contentEditable': true                                                                                        // 6375
      });                                                                                                              // 6376
                                                                                                                       // 6377
      var body = document.body;                                                                                        // 6378
                                                                                                                       // 6379
      // create Popover                                                                                                // 6380
      var $popover = $(tplPopovers(langInfo, options));                                                                // 6381
      $popover.addClass('note-air-layout');                                                                            // 6382
      $popover.attr('id', 'note-popover-' + id);                                                                       // 6383
      $popover.appendTo(body);                                                                                         // 6384
      createTooltip($popover, keyMap);                                                                                 // 6385
      createPalette($popover, options);                                                                                // 6386
                                                                                                                       // 6387
      // create Handle                                                                                                 // 6388
      var $handle = $(tplHandles());                                                                                   // 6389
      $handle.addClass('note-air-layout');                                                                             // 6390
      $handle.attr('id', 'note-handle-' + id);                                                                         // 6391
      $handle.appendTo(body);                                                                                          // 6392
                                                                                                                       // 6393
      // create Dialog                                                                                                 // 6394
      var $dialog = $(tplDialogs(langInfo, options));                                                                  // 6395
      $dialog.addClass('note-air-layout');                                                                             // 6396
      $dialog.attr('id', 'note-dialog-' + id);                                                                         // 6397
      $dialog.find('button.close, a.modal-close').click(function () {                                                  // 6398
        $(this).closest('.modal').modal('hide');                                                                       // 6399
      });                                                                                                              // 6400
      $dialog.appendTo(body);                                                                                          // 6401
    };                                                                                                                 // 6402
                                                                                                                       // 6403
    /**                                                                                                                // 6404
     * create summernote layout (normal mode)                                                                          // 6405
     *                                                                                                                 // 6406
     * @param {jQuery} $holder                                                                                         // 6407
     * @param {Object} options                                                                                         // 6408
     */                                                                                                                // 6409
    this.createLayoutByFrame = function ($holder, options) {                                                           // 6410
      var langInfo = options.langInfo;                                                                                 // 6411
                                                                                                                       // 6412
      //01. create Editor                                                                                              // 6413
      var $editor = $('<div class="note-editor"></div>');                                                              // 6414
      if (options.width) {                                                                                             // 6415
        $editor.width(options.width);                                                                                  // 6416
      }                                                                                                                // 6417
                                                                                                                       // 6418
      //02. statusbar (resizebar)                                                                                      // 6419
      if (options.height > 0) {                                                                                        // 6420
        $('<div class="note-statusbar">' + (options.disableResizeEditor ? '' : tplStatusbar()) + '</div>').prependTo($editor);
      }                                                                                                                // 6422
                                                                                                                       // 6423
      //03. create Editable                                                                                            // 6424
      var isContentEditable = !$holder.is(':disabled');                                                                // 6425
      var $editable = $('<div class="note-editable" contentEditable="' + isContentEditable + '"></div>')               // 6426
          .prependTo($editor);                                                                                         // 6427
      if (options.height) {                                                                                            // 6428
        $editable.height(options.height);                                                                              // 6429
      }                                                                                                                // 6430
      if (options.direction) {                                                                                         // 6431
        $editable.attr('dir', options.direction);                                                                      // 6432
      }                                                                                                                // 6433
      var placeholder = $holder.attr('placeholder') || options.placeholder;                                            // 6434
      if (placeholder) {                                                                                               // 6435
        $editable.attr('data-placeholder', placeholder);                                                               // 6436
      }                                                                                                                // 6437
                                                                                                                       // 6438
      $editable.html(dom.html($holder));                                                                               // 6439
                                                                                                                       // 6440
      //031. create codable                                                                                            // 6441
      $('<textarea class="note-codable"></textarea>').prependTo($editor);                                              // 6442
                                                                                                                       // 6443
      //04. create Toolbar                                                                                             // 6444
      var $toolbar = $('<div class="note-toolbar btn-toolbar" />');                                                    // 6445
      for (var idx = 0, len = options.toolbar.length; idx < len; idx ++) {                                             // 6446
        var groupName = options.toolbar[idx][0];                                                                       // 6447
        var groupButtons = options.toolbar[idx][1];                                                                    // 6448
                                                                                                                       // 6449
        var $group = $('<div class="note-' + groupName + ' btn-group" />');                                            // 6450
        for (var i = 0, btnLength = groupButtons.length; i < btnLength; i++) {                                         // 6451
          var buttonInfo = tplButtonInfo[groupButtons[i]];                                                             // 6452
          // continue creating toolbar even if a button doesn't exist                                                  // 6453
          if (!$.isFunction(buttonInfo)) { continue; }                                                                 // 6454
                                                                                                                       // 6455
          var $button = $(buttonInfo(langInfo, options));                                                              // 6456
          $button.attr('data-name', groupButtons[i]);  // set button's alias, becuase to get button element from $toolbar
          $group.append($button);                                                                                      // 6458
        }                                                                                                              // 6459
        $toolbar.append($group);                                                                                       // 6460
      }                                                                                                                // 6461
                                                                                                                       // 6462
      $toolbar.prependTo($editor);                                                                                     // 6463
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];                                                         // 6464
      createPalette($toolbar, options);                                                                                // 6465
      createTooltip($toolbar, keyMap, 'bottom');                                                                       // 6466
                                                                                                                       // 6467
      //05. create Popover                                                                                             // 6468
      var $popover = $(tplPopovers(langInfo, options)).prependTo($editor);                                             // 6469
      createPalette($popover, options);                                                                                // 6470
      createTooltip($popover, keyMap);                                                                                 // 6471
                                                                                                                       // 6472
      //06. handle(control selection, ...)                                                                             // 6473
      $(tplHandles()).prependTo($editor);                                                                              // 6474
                                                                                                                       // 6475
      //07. create Dialog                                                                                              // 6476
      var $dialog = $(tplDialogs(langInfo, options)).prependTo($editor);                                               // 6477
      $dialog.find('button.close, a.modal-close').click(function () {                                                  // 6478
        $(this).closest('.modal').modal('hide');                                                                       // 6479
      });                                                                                                              // 6480
                                                                                                                       // 6481
      //08. create Dropzone                                                                                            // 6482
      $('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo($editor);              // 6483
                                                                                                                       // 6484
      //09. Editor/Holder switch                                                                                       // 6485
      $editor.insertAfter($holder);                                                                                    // 6486
      $holder.hide();                                                                                                  // 6487
    };                                                                                                                 // 6488
                                                                                                                       // 6489
    this.hasNoteEditor = function ($holder) {                                                                          // 6490
      return this.noteEditorFromHolder($holder).length > 0;                                                            // 6491
    };                                                                                                                 // 6492
                                                                                                                       // 6493
    this.noteEditorFromHolder = function ($holder) {                                                                   // 6494
      if ($holder.hasClass('note-air-editor')) {                                                                       // 6495
        return $holder;                                                                                                // 6496
      } else if ($holder.next().hasClass('note-editor')) {                                                             // 6497
        return $holder.next();                                                                                         // 6498
      } else {                                                                                                         // 6499
        return $();                                                                                                    // 6500
      }                                                                                                                // 6501
    };                                                                                                                 // 6502
                                                                                                                       // 6503
    /**                                                                                                                // 6504
     * create summernote layout                                                                                        // 6505
     *                                                                                                                 // 6506
     * @param {jQuery} $holder                                                                                         // 6507
     * @param {Object} options                                                                                         // 6508
     */                                                                                                                // 6509
    this.createLayout = function ($holder, options) {                                                                  // 6510
      if (options.airMode) {                                                                                           // 6511
        this.createLayoutByAirMode($holder, options);                                                                  // 6512
      } else {                                                                                                         // 6513
        this.createLayoutByFrame($holder, options);                                                                    // 6514
      }                                                                                                                // 6515
    };                                                                                                                 // 6516
                                                                                                                       // 6517
    /**                                                                                                                // 6518
     * returns layoutInfo from holder                                                                                  // 6519
     *                                                                                                                 // 6520
     * @param {jQuery} $holder - placeholder                                                                           // 6521
     * @return {Object}                                                                                                // 6522
     */                                                                                                                // 6523
    this.layoutInfoFromHolder = function ($holder) {                                                                   // 6524
      var $editor = this.noteEditorFromHolder($holder);                                                                // 6525
      if (!$editor.length) {                                                                                           // 6526
        return;                                                                                                        // 6527
      }                                                                                                                // 6528
                                                                                                                       // 6529
      // connect $holder to $editor                                                                                    // 6530
      $editor.data('holder', $holder);                                                                                 // 6531
                                                                                                                       // 6532
      return dom.buildLayoutInfo($editor);                                                                             // 6533
    };                                                                                                                 // 6534
                                                                                                                       // 6535
    /**                                                                                                                // 6536
     * removeLayout                                                                                                    // 6537
     *                                                                                                                 // 6538
     * @param {jQuery} $holder - placeholder                                                                           // 6539
     * @param {Object} layoutInfo                                                                                      // 6540
     * @param {Object} options                                                                                         // 6541
     *                                                                                                                 // 6542
     */                                                                                                                // 6543
    this.removeLayout = function ($holder, layoutInfo, options) {                                                      // 6544
      if (options.airMode) {                                                                                           // 6545
        $holder.removeClass('note-air-editor note-editable')                                                           // 6546
               .removeAttr('id contentEditable');                                                                      // 6547
                                                                                                                       // 6548
        layoutInfo.popover().remove();                                                                                 // 6549
        layoutInfo.handle().remove();                                                                                  // 6550
        layoutInfo.dialog().remove();                                                                                  // 6551
      } else {                                                                                                         // 6552
        $holder.html(layoutInfo.editable().html());                                                                    // 6553
                                                                                                                       // 6554
        layoutInfo.editor().remove();                                                                                  // 6555
        $holder.show();                                                                                                // 6556
      }                                                                                                                // 6557
    };                                                                                                                 // 6558
                                                                                                                       // 6559
    /**                                                                                                                // 6560
     *                                                                                                                 // 6561
     * @return {Object}                                                                                                // 6562
     * @return {function(label, options=):string} return.button {@link #tplButton function to make text button}        // 6563
     * @return {function(iconClass, options=):string} return.iconButton {@link #tplIconButton function to make icon button}
     * @return {function(className, title=, body=, footer=):string} return.dialog {@link #tplDialog function to make dialog}
     */                                                                                                                // 6566
    this.getTemplate = function () {                                                                                   // 6567
      return {                                                                                                         // 6568
        button: tplButton,                                                                                             // 6569
        iconButton: tplIconButton,                                                                                     // 6570
        dialog: tplDialog                                                                                              // 6571
      };                                                                                                               // 6572
    };                                                                                                                 // 6573
                                                                                                                       // 6574
    /**                                                                                                                // 6575
     * add button information                                                                                          // 6576
     *                                                                                                                 // 6577
     * @param {String} name button name                                                                                // 6578
     * @param {Function} buttonInfo function to make button, reference to {@link #tplButton},{@link #tplIconButton}    // 6579
     */                                                                                                                // 6580
    this.addButtonInfo = function (name, buttonInfo) {                                                                 // 6581
      tplButtonInfo[name] = buttonInfo;                                                                                // 6582
    };                                                                                                                 // 6583
                                                                                                                       // 6584
    /**                                                                                                                // 6585
     *                                                                                                                 // 6586
     * @param {String} name                                                                                            // 6587
     * @param {Function} dialogInfo function to make dialog, reference to {@link #tplDialog}                           // 6588
     */                                                                                                                // 6589
    this.addDialogInfo = function (name, dialogInfo) {                                                                 // 6590
      tplDialogInfo[name] = dialogInfo;                                                                                // 6591
    };                                                                                                                 // 6592
  };                                                                                                                   // 6593
                                                                                                                       // 6594
                                                                                                                       // 6595
  // jQuery namespace for summernote                                                                                   // 6596
  /**                                                                                                                  // 6597
   * @class $.summernote                                                                                               // 6598
   *                                                                                                                   // 6599
   * summernote attribute                                                                                              // 6600
   *                                                                                                                   // 6601
   * @mixin defaults                                                                                                   // 6602
   * @singleton                                                                                                        // 6603
   *                                                                                                                   // 6604
   */                                                                                                                  // 6605
  $.summernote = $.summernote || {};                                                                                   // 6606
                                                                                                                       // 6607
  // extends default settings                                                                                          // 6608
  //  - $.summernote.version                                                                                           // 6609
  //  - $.summernote.options                                                                                           // 6610
  //  - $.summernote.lang                                                                                              // 6611
  $.extend($.summernote, defaults);                                                                                    // 6612
                                                                                                                       // 6613
  var renderer = new Renderer();                                                                                       // 6614
  var eventHandler = new EventHandler();                                                                               // 6615
                                                                                                                       // 6616
  $.extend($.summernote, {                                                                                             // 6617
    /** @property {Renderer} */                                                                                        // 6618
    renderer: renderer,                                                                                                // 6619
    /** @property {EventHandler} */                                                                                    // 6620
    eventHandler: eventHandler,                                                                                        // 6621
    /**                                                                                                                // 6622
     * @property {Object} core                                                                                         // 6623
     * @property {core.agent} core.agent                                                                               // 6624
     * @property {core.dom} core.dom                                                                                   // 6625
     * @property {core.range} core.range                                                                               // 6626
     */                                                                                                                // 6627
    core: {                                                                                                            // 6628
      agent: agent,                                                                                                    // 6629
      dom: dom,                                                                                                        // 6630
      range: range                                                                                                     // 6631
    },                                                                                                                 // 6632
    /**                                                                                                                // 6633
     * @property {Object}                                                                                              // 6634
     * pluginEvents event list for plugins                                                                             // 6635
     * event has name and callback function.                                                                           // 6636
     *                                                                                                                 // 6637
     * ```                                                                                                             // 6638
     * $.summernote.addPlugin({                                                                                        // 6639
     *     events : {                                                                                                  // 6640
     *          'hello' : function(layoutInfo, value, $target) {                                                       // 6641
     *              console.log('event name is hello, value is ' + value );                                            // 6642
     *          }                                                                                                      // 6643
     *     }                                                                                                           // 6644
     * })                                                                                                              // 6645
     * ```                                                                                                             // 6646
     *                                                                                                                 // 6647
     * * event name is data-event property.                                                                            // 6648
     * * layoutInfo is a summernote layout information.                                                                // 6649
     * * value is data-value property.                                                                                 // 6650
     */                                                                                                                // 6651
    pluginEvents: {},                                                                                                  // 6652
                                                                                                                       // 6653
    plugins : []                                                                                                       // 6654
  });                                                                                                                  // 6655
                                                                                                                       // 6656
  /**                                                                                                                  // 6657
   * @method addPlugin                                                                                                 // 6658
   *                                                                                                                   // 6659
   * add Plugin in Summernote                                                                                          // 6660
   *                                                                                                                   // 6661
   * Summernote can make a own plugin.                                                                                 // 6662
   *                                                                                                                   // 6663
   * ### Define plugin                                                                                                 // 6664
   * ```                                                                                                               // 6665
   * // get template function                                                                                          // 6666
   * var tmpl = $.summernote.renderer.getTemplate();                                                                   // 6667
   *                                                                                                                   // 6668
   * // add a button                                                                                                   // 6669
   * $.summernote.addPlugin({                                                                                          // 6670
   *     buttons : {                                                                                                   // 6671
   *        // "hello"  is button's namespace.                                                                         // 6672
   *        "hello" : function(lang, options) {                                                                        // 6673
   *            // make icon button by template function                                                               // 6674
   *            return tmpl.iconButton('fa fa-header', {                                                               // 6675
   *                // callback function name when button clicked                                                      // 6676
   *                event : 'hello',                                                                                   // 6677
   *                // set data-value property                                                                         // 6678
   *                value : 'hello',                                                                                   // 6679
   *                hide : true                                                                                        // 6680
   *            });                                                                                                    // 6681
   *        }                                                                                                          // 6682
   *                                                                                                                   // 6683
   *     },                                                                                                            // 6684
   *                                                                                                                   // 6685
   *     events : {                                                                                                    // 6686
   *        "hello" : function(layoutInfo, value) {                                                                    // 6687
   *            // here is event code                                                                                  // 6688
   *        }                                                                                                          // 6689
   *     }                                                                                                             // 6690
   * });                                                                                                               // 6691
   * ```                                                                                                               // 6692
   * ### Use a plugin in toolbar                                                                                       // 6693
   *                                                                                                                   // 6694
   * ```                                                                                                               // 6695
   *    $("#editor").summernote({                                                                                      // 6696
   *    ...                                                                                                            // 6697
   *    toolbar : [                                                                                                    // 6698
   *        // display hello plugin in toolbar                                                                         // 6699
   *        ['group', [ 'hello' ]]                                                                                     // 6700
   *    ]                                                                                                              // 6701
   *    ...                                                                                                            // 6702
   *    });                                                                                                            // 6703
   * ```                                                                                                               // 6704
   *                                                                                                                   // 6705
   *                                                                                                                   // 6706
   * @param {Object} plugin                                                                                            // 6707
   * @param {Object} [plugin.buttons] define plugin button. for detail, see to Renderer.addButtonInfo                  // 6708
   * @param {Object} [plugin.dialogs] define plugin dialog. for detail, see to Renderer.addDialogInfo                  // 6709
   * @param {Object} [plugin.events] add event in $.summernote.pluginEvents                                            // 6710
   * @param {Object} [plugin.langs] update $.summernote.lang                                                           // 6711
   * @param {Object} [plugin.options] update $.summernote.options                                                      // 6712
   */                                                                                                                  // 6713
  $.summernote.addPlugin = function (plugin) {                                                                         // 6714
                                                                                                                       // 6715
    // save plugin list                                                                                                // 6716
    $.summernote.plugins.push(plugin);                                                                                 // 6717
                                                                                                                       // 6718
    if (plugin.buttons) {                                                                                              // 6719
      $.each(plugin.buttons, function (name, button) {                                                                 // 6720
        renderer.addButtonInfo(name, button);                                                                          // 6721
      });                                                                                                              // 6722
    }                                                                                                                  // 6723
                                                                                                                       // 6724
    if (plugin.dialogs) {                                                                                              // 6725
      $.each(plugin.dialogs, function (name, dialog) {                                                                 // 6726
        renderer.addDialogInfo(name, dialog);                                                                          // 6727
      });                                                                                                              // 6728
    }                                                                                                                  // 6729
                                                                                                                       // 6730
    if (plugin.events) {                                                                                               // 6731
      $.each(plugin.events, function (name, event) {                                                                   // 6732
        $.summernote.pluginEvents[name] = event;                                                                       // 6733
      });                                                                                                              // 6734
    }                                                                                                                  // 6735
                                                                                                                       // 6736
    if (plugin.langs) {                                                                                                // 6737
      $.each(plugin.langs, function (locale, lang) {                                                                   // 6738
        if ($.summernote.lang[locale]) {                                                                               // 6739
          $.extend($.summernote.lang[locale], lang);                                                                   // 6740
        }                                                                                                              // 6741
      });                                                                                                              // 6742
    }                                                                                                                  // 6743
                                                                                                                       // 6744
    if (plugin.options) {                                                                                              // 6745
      $.extend($.summernote.options, plugin.options);                                                                  // 6746
    }                                                                                                                  // 6747
  };                                                                                                                   // 6748
                                                                                                                       // 6749
  /*                                                                                                                   // 6750
   * extend $.fn                                                                                                       // 6751
   */                                                                                                                  // 6752
  $.fn.extend({                                                                                                        // 6753
    /**                                                                                                                // 6754
     * @method                                                                                                         // 6755
     * Initialize summernote                                                                                           // 6756
     *  - create editor layout and attach Mouse and keyboard events.                                                   // 6757
     *                                                                                                                 // 6758
     * ```                                                                                                             // 6759
     * $("#summernote").summernote( { options ..} );                                                                   // 6760
     * ```                                                                                                             // 6761
     *                                                                                                                 // 6762
     * @member $.fn                                                                                                    // 6763
     * @param {Object|String} options reference to $.summernote.options                                                // 6764
     * @return {this}                                                                                                  // 6765
     */                                                                                                                // 6766
    summernote: function () {                                                                                          // 6767
      // check first argument's type                                                                                   // 6768
      //  - {String}: External API call {{module}}.{{method}}                                                          // 6769
      //  - {Object}: init options                                                                                     // 6770
      var type = $.type(list.head(arguments));                                                                         // 6771
      var isExternalAPICalled = type === 'string';                                                                     // 6772
      var isInitOptions = type === 'object';                                                                           // 6773
                                                                                                                       // 6774
      // extend default options with custom user options                                                               // 6775
      var options = isInitOptions ? list.head(arguments) : {};                                                         // 6776
      options = $.extend({}, $.summernote.options, options);                                                           // 6777
                                                                                                                       // 6778
      // Include langInfo in options for later use, e.g. for image drag-n-drop                                         // 6779
      // Setup language info with en-US as default                                                                     // 6780
      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);              // 6781
                                                                                                                       // 6782
      this.each(function (idx, holder) {                                                                               // 6783
        var $holder = $(holder);                                                                                       // 6784
                                                                                                                       // 6785
        // if layout isn't created yet, createLayout and attach events                                                 // 6786
        if (!renderer.hasNoteEditor($holder)) {                                                                        // 6787
          renderer.createLayout($holder, options);                                                                     // 6788
                                                                                                                       // 6789
          var layoutInfo = renderer.layoutInfoFromHolder($holder);                                                     // 6790
                                                                                                                       // 6791
          eventHandler.attach(layoutInfo, options);                                                                    // 6792
          eventHandler.attachCustomEvent(layoutInfo, options);                                                         // 6793
                                                                                                                       // 6794
        }                                                                                                              // 6795
      });                                                                                                              // 6796
                                                                                                                       // 6797
      // callback on init                                                                                              // 6798
      if (!isExternalAPICalled && this.length && options.oninit) {                                                     // 6799
        options.oninit();                                                                                              // 6800
      }                                                                                                                // 6801
                                                                                                                       // 6802
      var $first = this.first();                                                                                       // 6803
      if ($first.length) {                                                                                             // 6804
        var layoutInfo = renderer.layoutInfoFromHolder($first);                                                        // 6805
                                                                                                                       // 6806
        // external API                                                                                                // 6807
        if (isExternalAPICalled) {                                                                                     // 6808
          var moduleAndMethod = list.head(list.from(arguments));                                                       // 6809
          var args = list.tail(list.from(arguments));                                                                  // 6810
                                                                                                                       // 6811
          // TODO now external API only works for editor                                                               // 6812
          var params = [moduleAndMethod, layoutInfo.editable()].concat(args);                                          // 6813
          return eventHandler.invoke.apply(eventHandler, params);                                                      // 6814
        } else if (options.focus) {                                                                                    // 6815
          // focus on first editable element for initialize editor                                                     // 6816
          layoutInfo.editable().focus();                                                                               // 6817
        }                                                                                                              // 6818
      }                                                                                                                // 6819
                                                                                                                       // 6820
      return this;                                                                                                     // 6821
    },                                                                                                                 // 6822
                                                                                                                       // 6823
    /**                                                                                                                // 6824
     * @method                                                                                                         // 6825
     *                                                                                                                 // 6826
     * get the HTML contents of note or set the HTML contents of note.                                                 // 6827
     *                                                                                                                 // 6828
     * * get contents                                                                                                  // 6829
     * ```                                                                                                             // 6830
     * var content = $("#summernote").code();                                                                          // 6831
     * ```                                                                                                             // 6832
     * * set contents                                                                                                  // 6833
     *                                                                                                                 // 6834
     * ```                                                                                                             // 6835
     * $("#summernote").code(html);                                                                                    // 6836
     * ```                                                                                                             // 6837
     *                                                                                                                 // 6838
     * @member $.fn                                                                                                    // 6839
     * @param {String} [html] - HTML contents(optional, set)                                                           // 6840
     * @return {this|String} - context(set) or HTML contents of note(get).                                             // 6841
     */                                                                                                                // 6842
    code: function (html) {                                                                                            // 6843
      // get the HTML contents of note                                                                                 // 6844
      if (html === undefined) {                                                                                        // 6845
        var $holder = this.first();                                                                                    // 6846
        if (!$holder.length) {                                                                                         // 6847
          return;                                                                                                      // 6848
        }                                                                                                              // 6849
                                                                                                                       // 6850
        var layoutInfo = renderer.layoutInfoFromHolder($holder);                                                       // 6851
        var $editable = layoutInfo && layoutInfo.editable();                                                           // 6852
                                                                                                                       // 6853
        if ($editable && $editable.length) {                                                                           // 6854
          var isCodeview = eventHandler.invoke('codeview.isActivated', layoutInfo);                                    // 6855
          eventHandler.invoke('codeview.sync', layoutInfo);                                                            // 6856
          return isCodeview ? layoutInfo.codable().val() :                                                             // 6857
                              layoutInfo.editable().html();                                                            // 6858
        }                                                                                                              // 6859
        return dom.value($holder);                                                                                     // 6860
      }                                                                                                                // 6861
                                                                                                                       // 6862
      // set the HTML contents of note                                                                                 // 6863
      this.each(function (i, holder) {                                                                                 // 6864
        var layoutInfo = renderer.layoutInfoFromHolder($(holder));                                                     // 6865
        var $editable = layoutInfo && layoutInfo.editable();                                                           // 6866
        if ($editable) {                                                                                               // 6867
          $editable.html(html);                                                                                        // 6868
        }                                                                                                              // 6869
      });                                                                                                              // 6870
                                                                                                                       // 6871
      return this;                                                                                                     // 6872
    },                                                                                                                 // 6873
                                                                                                                       // 6874
    /**                                                                                                                // 6875
     * @method                                                                                                         // 6876
     *                                                                                                                 // 6877
     * destroy Editor Layout and detach Key and Mouse Event                                                            // 6878
     *                                                                                                                 // 6879
     * @member $.fn                                                                                                    // 6880
     * @return {this}                                                                                                  // 6881
     */                                                                                                                // 6882
    destroy: function () {                                                                                             // 6883
      this.each(function (idx, holder) {                                                                               // 6884
        var $holder = $(holder);                                                                                       // 6885
                                                                                                                       // 6886
        if (!renderer.hasNoteEditor($holder)) {                                                                        // 6887
          return;                                                                                                      // 6888
        }                                                                                                              // 6889
                                                                                                                       // 6890
        var info = renderer.layoutInfoFromHolder($holder);                                                             // 6891
        var options = info.editor().data('options');                                                                   // 6892
                                                                                                                       // 6893
        eventHandler.detach(info, options);                                                                            // 6894
        renderer.removeLayout($holder, info, options);                                                                 // 6895
      });                                                                                                              // 6896
                                                                                                                       // 6897
      return this;                                                                                                     // 6898
    }                                                                                                                  // 6899
  });                                                                                                                  // 6900
}));                                                                                                                   // 6901
                                                                                                                       // 6902
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['summernote:summernote'] = {};

})();
