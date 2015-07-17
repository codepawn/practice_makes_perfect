(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var moment;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs:moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.10.3                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
(function (global, factory) {                                                                                          // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function utils_hooks__hooks () {                                                                                   // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function defaultParsingFlags() {                                                                                   // 25
        // We need to deep clone this object.                                                                          // 26
        return {                                                                                                       // 27
            empty           : false,                                                                                   // 28
            unusedTokens    : [],                                                                                      // 29
            unusedInput     : [],                                                                                      // 30
            overflow        : -2,                                                                                      // 31
            charsLeftOver   : 0,                                                                                       // 32
            nullInput       : false,                                                                                   // 33
            invalidMonth    : null,                                                                                    // 34
            invalidFormat   : false,                                                                                   // 35
            userInvalidated : false,                                                                                   // 36
            iso             : false                                                                                    // 37
        };                                                                                                             // 38
    }                                                                                                                  // 39
                                                                                                                       // 40
    function isArray(input) {                                                                                          // 41
        return Object.prototype.toString.call(input) === '[object Array]';                                             // 42
    }                                                                                                                  // 43
                                                                                                                       // 44
    function isDate(input) {                                                                                           // 45
        return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;                     // 46
    }                                                                                                                  // 47
                                                                                                                       // 48
    function map(arr, fn) {                                                                                            // 49
        var res = [], i;                                                                                               // 50
        for (i = 0; i < arr.length; ++i) {                                                                             // 51
            res.push(fn(arr[i], i));                                                                                   // 52
        }                                                                                                              // 53
        return res;                                                                                                    // 54
    }                                                                                                                  // 55
                                                                                                                       // 56
    function hasOwnProp(a, b) {                                                                                        // 57
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 58
    }                                                                                                                  // 59
                                                                                                                       // 60
    function extend(a, b) {                                                                                            // 61
        for (var i in b) {                                                                                             // 62
            if (hasOwnProp(b, i)) {                                                                                    // 63
                a[i] = b[i];                                                                                           // 64
            }                                                                                                          // 65
        }                                                                                                              // 66
                                                                                                                       // 67
        if (hasOwnProp(b, 'toString')) {                                                                               // 68
            a.toString = b.toString;                                                                                   // 69
        }                                                                                                              // 70
                                                                                                                       // 71
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 72
            a.valueOf = b.valueOf;                                                                                     // 73
        }                                                                                                              // 74
                                                                                                                       // 75
        return a;                                                                                                      // 76
    }                                                                                                                  // 77
                                                                                                                       // 78
    function create_utc__createUTC (input, format, locale, strict) {                                                   // 79
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 80
    }                                                                                                                  // 81
                                                                                                                       // 82
    function valid__isValid(m) {                                                                                       // 83
        if (m._isValid == null) {                                                                                      // 84
            m._isValid = !isNaN(m._d.getTime()) &&                                                                     // 85
                m._pf.overflow < 0 &&                                                                                  // 86
                !m._pf.empty &&                                                                                        // 87
                !m._pf.invalidMonth &&                                                                                 // 88
                !m._pf.nullInput &&                                                                                    // 89
                !m._pf.invalidFormat &&                                                                                // 90
                !m._pf.userInvalidated;                                                                                // 91
                                                                                                                       // 92
            if (m._strict) {                                                                                           // 93
                m._isValid = m._isValid &&                                                                             // 94
                    m._pf.charsLeftOver === 0 &&                                                                       // 95
                    m._pf.unusedTokens.length === 0 &&                                                                 // 96
                    m._pf.bigHour === undefined;                                                                       // 97
            }                                                                                                          // 98
        }                                                                                                              // 99
        return m._isValid;                                                                                             // 100
    }                                                                                                                  // 101
                                                                                                                       // 102
    function valid__createInvalid (flags) {                                                                            // 103
        var m = create_utc__createUTC(NaN);                                                                            // 104
        if (flags != null) {                                                                                           // 105
            extend(m._pf, flags);                                                                                      // 106
        }                                                                                                              // 107
        else {                                                                                                         // 108
            m._pf.userInvalidated = true;                                                                              // 109
        }                                                                                                              // 110
                                                                                                                       // 111
        return m;                                                                                                      // 112
    }                                                                                                                  // 113
                                                                                                                       // 114
    var momentProperties = utils_hooks__hooks.momentProperties = [];                                                   // 115
                                                                                                                       // 116
    function copyConfig(to, from) {                                                                                    // 117
        var i, prop, val;                                                                                              // 118
                                                                                                                       // 119
        if (typeof from._isAMomentObject !== 'undefined') {                                                            // 120
            to._isAMomentObject = from._isAMomentObject;                                                               // 121
        }                                                                                                              // 122
        if (typeof from._i !== 'undefined') {                                                                          // 123
            to._i = from._i;                                                                                           // 124
        }                                                                                                              // 125
        if (typeof from._f !== 'undefined') {                                                                          // 126
            to._f = from._f;                                                                                           // 127
        }                                                                                                              // 128
        if (typeof from._l !== 'undefined') {                                                                          // 129
            to._l = from._l;                                                                                           // 130
        }                                                                                                              // 131
        if (typeof from._strict !== 'undefined') {                                                                     // 132
            to._strict = from._strict;                                                                                 // 133
        }                                                                                                              // 134
        if (typeof from._tzm !== 'undefined') {                                                                        // 135
            to._tzm = from._tzm;                                                                                       // 136
        }                                                                                                              // 137
        if (typeof from._isUTC !== 'undefined') {                                                                      // 138
            to._isUTC = from._isUTC;                                                                                   // 139
        }                                                                                                              // 140
        if (typeof from._offset !== 'undefined') {                                                                     // 141
            to._offset = from._offset;                                                                                 // 142
        }                                                                                                              // 143
        if (typeof from._pf !== 'undefined') {                                                                         // 144
            to._pf = from._pf;                                                                                         // 145
        }                                                                                                              // 146
        if (typeof from._locale !== 'undefined') {                                                                     // 147
            to._locale = from._locale;                                                                                 // 148
        }                                                                                                              // 149
                                                                                                                       // 150
        if (momentProperties.length > 0) {                                                                             // 151
            for (i in momentProperties) {                                                                              // 152
                prop = momentProperties[i];                                                                            // 153
                val = from[prop];                                                                                      // 154
                if (typeof val !== 'undefined') {                                                                      // 155
                    to[prop] = val;                                                                                    // 156
                }                                                                                                      // 157
            }                                                                                                          // 158
        }                                                                                                              // 159
                                                                                                                       // 160
        return to;                                                                                                     // 161
    }                                                                                                                  // 162
                                                                                                                       // 163
    var updateInProgress = false;                                                                                      // 164
                                                                                                                       // 165
    // Moment prototype object                                                                                         // 166
    function Moment(config) {                                                                                          // 167
        copyConfig(this, config);                                                                                      // 168
        this._d = new Date(+config._d);                                                                                // 169
        // Prevent infinite loop in case updateOffset creates new moment                                               // 170
        // objects.                                                                                                    // 171
        if (updateInProgress === false) {                                                                              // 172
            updateInProgress = true;                                                                                   // 173
            utils_hooks__hooks.updateOffset(this);                                                                     // 174
            updateInProgress = false;                                                                                  // 175
        }                                                                                                              // 176
    }                                                                                                                  // 177
                                                                                                                       // 178
    function isMoment (obj) {                                                                                          // 179
        return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));                          // 180
    }                                                                                                                  // 181
                                                                                                                       // 182
    function toInt(argumentForCoercion) {                                                                              // 183
        var coercedNumber = +argumentForCoercion,                                                                      // 184
            value = 0;                                                                                                 // 185
                                                                                                                       // 186
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 187
            if (coercedNumber >= 0) {                                                                                  // 188
                value = Math.floor(coercedNumber);                                                                     // 189
            } else {                                                                                                   // 190
                value = Math.ceil(coercedNumber);                                                                      // 191
            }                                                                                                          // 192
        }                                                                                                              // 193
                                                                                                                       // 194
        return value;                                                                                                  // 195
    }                                                                                                                  // 196
                                                                                                                       // 197
    function compareArrays(array1, array2, dontConvert) {                                                              // 198
        var len = Math.min(array1.length, array2.length),                                                              // 199
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 200
            diffs = 0,                                                                                                 // 201
            i;                                                                                                         // 202
        for (i = 0; i < len; i++) {                                                                                    // 203
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 204
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 205
                diffs++;                                                                                               // 206
            }                                                                                                          // 207
        }                                                                                                              // 208
        return diffs + lengthDiff;                                                                                     // 209
    }                                                                                                                  // 210
                                                                                                                       // 211
    function Locale() {                                                                                                // 212
    }                                                                                                                  // 213
                                                                                                                       // 214
    var locales = {};                                                                                                  // 215
    var globalLocale;                                                                                                  // 216
                                                                                                                       // 217
    function normalizeLocale(key) {                                                                                    // 218
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 219
    }                                                                                                                  // 220
                                                                                                                       // 221
    // pick the locale from the array                                                                                  // 222
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 223
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 225
        var i = 0, j, next, locale, split;                                                                             // 226
                                                                                                                       // 227
        while (i < names.length) {                                                                                     // 228
            split = normalizeLocale(names[i]).split('-');                                                              // 229
            j = split.length;                                                                                          // 230
            next = normalizeLocale(names[i + 1]);                                                                      // 231
            next = next ? next.split('-') : null;                                                                      // 232
            while (j > 0) {                                                                                            // 233
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 234
                if (locale) {                                                                                          // 235
                    return locale;                                                                                     // 236
                }                                                                                                      // 237
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 238
                    //the next array item is better than a shallower substring of this one                             // 239
                    break;                                                                                             // 240
                }                                                                                                      // 241
                j--;                                                                                                   // 242
            }                                                                                                          // 243
            i++;                                                                                                       // 244
        }                                                                                                              // 245
        return null;                                                                                                   // 246
    }                                                                                                                  // 247
                                                                                                                       // 248
    function loadLocale(name) {                                                                                        // 249
        var oldLocale = null;                                                                                          // 250
        // TODO: Find a better way to register and load all the locales in Node                                        // 251
        if (!locales[name] && typeof module !== 'undefined' &&                                                         // 252
                module && module.exports) {                                                                            // 253
            try {                                                                                                      // 254
                oldLocale = globalLocale._abbr;                                                                        // 255
                require('./locale/' + name);                                                                           // 256
                // because defineLocale currently also sets the global locale, we                                      // 257
                // want to undo that for lazy loaded locales                                                           // 258
                locale_locales__getSetGlobalLocale(oldLocale);                                                         // 259
            } catch (e) { }                                                                                            // 260
        }                                                                                                              // 261
        return locales[name];                                                                                          // 262
    }                                                                                                                  // 263
                                                                                                                       // 264
    // This function will load locale and then set the global locale.  If                                              // 265
    // no arguments are passed in, it will simply return the current global                                            // 266
    // locale key.                                                                                                     // 267
    function locale_locales__getSetGlobalLocale (key, values) {                                                        // 268
        var data;                                                                                                      // 269
        if (key) {                                                                                                     // 270
            if (typeof values === 'undefined') {                                                                       // 271
                data = locale_locales__getLocale(key);                                                                 // 272
            }                                                                                                          // 273
            else {                                                                                                     // 274
                data = defineLocale(key, values);                                                                      // 275
            }                                                                                                          // 276
                                                                                                                       // 277
            if (data) {                                                                                                // 278
                // moment.duration._locale = moment._locale = data;                                                    // 279
                globalLocale = data;                                                                                   // 280
            }                                                                                                          // 281
        }                                                                                                              // 282
                                                                                                                       // 283
        return globalLocale._abbr;                                                                                     // 284
    }                                                                                                                  // 285
                                                                                                                       // 286
    function defineLocale (name, values) {                                                                             // 287
        if (values !== null) {                                                                                         // 288
            values.abbr = name;                                                                                        // 289
            if (!locales[name]) {                                                                                      // 290
                locales[name] = new Locale();                                                                          // 291
            }                                                                                                          // 292
            locales[name].set(values);                                                                                 // 293
                                                                                                                       // 294
            // backwards compat for now: also set the locale                                                           // 295
            locale_locales__getSetGlobalLocale(name);                                                                  // 296
                                                                                                                       // 297
            return locales[name];                                                                                      // 298
        } else {                                                                                                       // 299
            // useful for testing                                                                                      // 300
            delete locales[name];                                                                                      // 301
            return null;                                                                                               // 302
        }                                                                                                              // 303
    }                                                                                                                  // 304
                                                                                                                       // 305
    // returns locale data                                                                                             // 306
    function locale_locales__getLocale (key) {                                                                         // 307
        var locale;                                                                                                    // 308
                                                                                                                       // 309
        if (key && key._locale && key._locale._abbr) {                                                                 // 310
            key = key._locale._abbr;                                                                                   // 311
        }                                                                                                              // 312
                                                                                                                       // 313
        if (!key) {                                                                                                    // 314
            return globalLocale;                                                                                       // 315
        }                                                                                                              // 316
                                                                                                                       // 317
        if (!isArray(key)) {                                                                                           // 318
            //short-circuit everything else                                                                            // 319
            locale = loadLocale(key);                                                                                  // 320
            if (locale) {                                                                                              // 321
                return locale;                                                                                         // 322
            }                                                                                                          // 323
            key = [key];                                                                                               // 324
        }                                                                                                              // 325
                                                                                                                       // 326
        return chooseLocale(key);                                                                                      // 327
    }                                                                                                                  // 328
                                                                                                                       // 329
    var aliases = {};                                                                                                  // 330
                                                                                                                       // 331
    function addUnitAlias (unit, shorthand) {                                                                          // 332
        var lowerCase = unit.toLowerCase();                                                                            // 333
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 334
    }                                                                                                                  // 335
                                                                                                                       // 336
    function normalizeUnits(units) {                                                                                   // 337
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 338
    }                                                                                                                  // 339
                                                                                                                       // 340
    function normalizeObjectUnits(inputObject) {                                                                       // 341
        var normalizedInput = {},                                                                                      // 342
            normalizedProp,                                                                                            // 343
            prop;                                                                                                      // 344
                                                                                                                       // 345
        for (prop in inputObject) {                                                                                    // 346
            if (hasOwnProp(inputObject, prop)) {                                                                       // 347
                normalizedProp = normalizeUnits(prop);                                                                 // 348
                if (normalizedProp) {                                                                                  // 349
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 350
                }                                                                                                      // 351
            }                                                                                                          // 352
        }                                                                                                              // 353
                                                                                                                       // 354
        return normalizedInput;                                                                                        // 355
    }                                                                                                                  // 356
                                                                                                                       // 357
    function makeGetSet (unit, keepTime) {                                                                             // 358
        return function (value) {                                                                                      // 359
            if (value != null) {                                                                                       // 360
                get_set__set(this, unit, value);                                                                       // 361
                utils_hooks__hooks.updateOffset(this, keepTime);                                                       // 362
                return this;                                                                                           // 363
            } else {                                                                                                   // 364
                return get_set__get(this, unit);                                                                       // 365
            }                                                                                                          // 366
        };                                                                                                             // 367
    }                                                                                                                  // 368
                                                                                                                       // 369
    function get_set__get (mom, unit) {                                                                                // 370
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();                                                     // 371
    }                                                                                                                  // 372
                                                                                                                       // 373
    function get_set__set (mom, unit, value) {                                                                         // 374
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                // 375
    }                                                                                                                  // 376
                                                                                                                       // 377
    // MOMENTS                                                                                                         // 378
                                                                                                                       // 379
    function getSet (units, value) {                                                                                   // 380
        var unit;                                                                                                      // 381
        if (typeof units === 'object') {                                                                               // 382
            for (unit in units) {                                                                                      // 383
                this.set(unit, units[unit]);                                                                           // 384
            }                                                                                                          // 385
        } else {                                                                                                       // 386
            units = normalizeUnits(units);                                                                             // 387
            if (typeof this[units] === 'function') {                                                                   // 388
                return this[units](value);                                                                             // 389
            }                                                                                                          // 390
        }                                                                                                              // 391
        return this;                                                                                                   // 392
    }                                                                                                                  // 393
                                                                                                                       // 394
    function zeroFill(number, targetLength, forceSign) {                                                               // 395
        var output = '' + Math.abs(number),                                                                            // 396
            sign = number >= 0;                                                                                        // 397
                                                                                                                       // 398
        while (output.length < targetLength) {                                                                         // 399
            output = '0' + output;                                                                                     // 400
        }                                                                                                              // 401
        return (sign ? (forceSign ? '+' : '') : '-') + output;                                                         // 402
    }                                                                                                                  // 403
                                                                                                                       // 404
    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 406
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 407
                                                                                                                       // 408
    var formatFunctions = {};                                                                                          // 409
                                                                                                                       // 410
    var formatTokenFunctions = {};                                                                                     // 411
                                                                                                                       // 412
    // token:    'M'                                                                                                   // 413
    // padded:   ['MM', 2]                                                                                             // 414
    // ordinal:  'Mo'                                                                                                  // 415
    // callback: function () { this.month() + 1 }                                                                      // 416
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 417
        var func = callback;                                                                                           // 418
        if (typeof callback === 'string') {                                                                            // 419
            func = function () {                                                                                       // 420
                return this[callback]();                                                                               // 421
            };                                                                                                         // 422
        }                                                                                                              // 423
        if (token) {                                                                                                   // 424
            formatTokenFunctions[token] = func;                                                                        // 425
        }                                                                                                              // 426
        if (padded) {                                                                                                  // 427
            formatTokenFunctions[padded[0]] = function () {                                                            // 428
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 429
            };                                                                                                         // 430
        }                                                                                                              // 431
        if (ordinal) {                                                                                                 // 432
            formatTokenFunctions[ordinal] = function () {                                                              // 433
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 434
            };                                                                                                         // 435
        }                                                                                                              // 436
    }                                                                                                                  // 437
                                                                                                                       // 438
    function removeFormattingTokens(input) {                                                                           // 439
        if (input.match(/\[[\s\S]/)) {                                                                                 // 440
            return input.replace(/^\[|\]$/g, '');                                                                      // 441
        }                                                                                                              // 442
        return input.replace(/\\/g, '');                                                                               // 443
    }                                                                                                                  // 444
                                                                                                                       // 445
    function makeFormatFunction(format) {                                                                              // 446
        var array = format.match(formattingTokens), i, length;                                                         // 447
                                                                                                                       // 448
        for (i = 0, length = array.length; i < length; i++) {                                                          // 449
            if (formatTokenFunctions[array[i]]) {                                                                      // 450
                array[i] = formatTokenFunctions[array[i]];                                                             // 451
            } else {                                                                                                   // 452
                array[i] = removeFormattingTokens(array[i]);                                                           // 453
            }                                                                                                          // 454
        }                                                                                                              // 455
                                                                                                                       // 456
        return function (mom) {                                                                                        // 457
            var output = '';                                                                                           // 458
            for (i = 0; i < length; i++) {                                                                             // 459
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 460
            }                                                                                                          // 461
            return output;                                                                                             // 462
        };                                                                                                             // 463
    }                                                                                                                  // 464
                                                                                                                       // 465
    // format date using native date object                                                                            // 466
    function formatMoment(m, format) {                                                                                 // 467
        if (!m.isValid()) {                                                                                            // 468
            return m.localeData().invalidDate();                                                                       // 469
        }                                                                                                              // 470
                                                                                                                       // 471
        format = expandFormat(format, m.localeData());                                                                 // 472
                                                                                                                       // 473
        if (!formatFunctions[format]) {                                                                                // 474
            formatFunctions[format] = makeFormatFunction(format);                                                      // 475
        }                                                                                                              // 476
                                                                                                                       // 477
        return formatFunctions[format](m);                                                                             // 478
    }                                                                                                                  // 479
                                                                                                                       // 480
    function expandFormat(format, locale) {                                                                            // 481
        var i = 5;                                                                                                     // 482
                                                                                                                       // 483
        function replaceLongDateFormatTokens(input) {                                                                  // 484
            return locale.longDateFormat(input) || input;                                                              // 485
        }                                                                                                              // 486
                                                                                                                       // 487
        localFormattingTokens.lastIndex = 0;                                                                           // 488
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 489
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 490
            localFormattingTokens.lastIndex = 0;                                                                       // 491
            i -= 1;                                                                                                    // 492
        }                                                                                                              // 493
                                                                                                                       // 494
        return format;                                                                                                 // 495
    }                                                                                                                  // 496
                                                                                                                       // 497
    var match1         = /\d/;            //       0 - 9                                                               // 498
    var match2         = /\d\d/;          //      00 - 99                                                              // 499
    var match3         = /\d{3}/;         //     000 - 999                                                             // 500
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 501
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 502
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 503
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 504
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 505
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 506
                                                                                                                       // 507
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 508
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 509
                                                                                                                       // 510
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 511
                                                                                                                       // 512
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 513
                                                                                                                       // 514
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 515
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 517
    var regexes = {};                                                                                                  // 518
                                                                                                                       // 519
    function addRegexToken (token, regex, strictRegex) {                                                               // 520
        regexes[token] = typeof regex === 'function' ? regex : function (isStrict) {                                   // 521
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 522
        };                                                                                                             // 523
    }                                                                                                                  // 524
                                                                                                                       // 525
    function getParseRegexForToken (token, config) {                                                                   // 526
        if (!hasOwnProp(regexes, token)) {                                                                             // 527
            return new RegExp(unescapeFormat(token));                                                                  // 528
        }                                                                                                              // 529
                                                                                                                       // 530
        return regexes[token](config._strict, config._locale);                                                         // 531
    }                                                                                                                  // 532
                                                                                                                       // 533
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 534
    function unescapeFormat(s) {                                                                                       // 535
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { // 536
            return p1 || p2 || p3 || p4;                                                                               // 537
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                                  // 538
    }                                                                                                                  // 539
                                                                                                                       // 540
    var tokens = {};                                                                                                   // 541
                                                                                                                       // 542
    function addParseToken (token, callback) {                                                                         // 543
        var i, func = callback;                                                                                        // 544
        if (typeof token === 'string') {                                                                               // 545
            token = [token];                                                                                           // 546
        }                                                                                                              // 547
        if (typeof callback === 'number') {                                                                            // 548
            func = function (input, array) {                                                                           // 549
                array[callback] = toInt(input);                                                                        // 550
            };                                                                                                         // 551
        }                                                                                                              // 552
        for (i = 0; i < token.length; i++) {                                                                           // 553
            tokens[token[i]] = func;                                                                                   // 554
        }                                                                                                              // 555
    }                                                                                                                  // 556
                                                                                                                       // 557
    function addWeekParseToken (token, callback) {                                                                     // 558
        addParseToken(token, function (input, array, config, token) {                                                  // 559
            config._w = config._w || {};                                                                               // 560
            callback(input, config._w, config, token);                                                                 // 561
        });                                                                                                            // 562
    }                                                                                                                  // 563
                                                                                                                       // 564
    function addTimeToArrayFromToken(token, input, config) {                                                           // 565
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 566
            tokens[token](input, config._a, config, token);                                                            // 567
        }                                                                                                              // 568
    }                                                                                                                  // 569
                                                                                                                       // 570
    var YEAR = 0;                                                                                                      // 571
    var MONTH = 1;                                                                                                     // 572
    var DATE = 2;                                                                                                      // 573
    var HOUR = 3;                                                                                                      // 574
    var MINUTE = 4;                                                                                                    // 575
    var SECOND = 5;                                                                                                    // 576
    var MILLISECOND = 6;                                                                                               // 577
                                                                                                                       // 578
    function daysInMonth(year, month) {                                                                                // 579
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 580
    }                                                                                                                  // 581
                                                                                                                       // 582
    // FORMATTING                                                                                                      // 583
                                                                                                                       // 584
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 585
        return this.month() + 1;                                                                                       // 586
    });                                                                                                                // 587
                                                                                                                       // 588
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 589
        return this.localeData().monthsShort(this, format);                                                            // 590
    });                                                                                                                // 591
                                                                                                                       // 592
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 593
        return this.localeData().months(this, format);                                                                 // 594
    });                                                                                                                // 595
                                                                                                                       // 596
    // ALIASES                                                                                                         // 597
                                                                                                                       // 598
    addUnitAlias('month', 'M');                                                                                        // 599
                                                                                                                       // 600
    // PARSING                                                                                                         // 601
                                                                                                                       // 602
    addRegexToken('M',    match1to2);                                                                                  // 603
    addRegexToken('MM',   match1to2, match2);                                                                          // 604
    addRegexToken('MMM',  matchWord);                                                                                  // 605
    addRegexToken('MMMM', matchWord);                                                                                  // 606
                                                                                                                       // 607
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 608
        array[MONTH] = toInt(input) - 1;                                                                               // 609
    });                                                                                                                // 610
                                                                                                                       // 611
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 612
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 613
        // if we didn't find a month name, mark the date as invalid.                                                   // 614
        if (month != null) {                                                                                           // 615
            array[MONTH] = month;                                                                                      // 616
        } else {                                                                                                       // 617
            config._pf.invalidMonth = input;                                                                           // 618
        }                                                                                                              // 619
    });                                                                                                                // 620
                                                                                                                       // 621
    // LOCALES                                                                                                         // 622
                                                                                                                       // 623
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {                                                                                        // 625
        return this._months[m.month()];                                                                                // 626
    }                                                                                                                  // 627
                                                                                                                       // 628
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                       // 629
    function localeMonthsShort (m) {                                                                                   // 630
        return this._monthsShort[m.month()];                                                                           // 631
    }                                                                                                                  // 632
                                                                                                                       // 633
    function localeMonthsParse (monthName, format, strict) {                                                           // 634
        var i, mom, regex;                                                                                             // 635
                                                                                                                       // 636
        if (!this._monthsParse) {                                                                                      // 637
            this._monthsParse = [];                                                                                    // 638
            this._longMonthsParse = [];                                                                                // 639
            this._shortMonthsParse = [];                                                                               // 640
        }                                                                                                              // 641
                                                                                                                       // 642
        for (i = 0; i < 12; i++) {                                                                                     // 643
            // make the regex if we don't have it already                                                              // 644
            mom = create_utc__createUTC([2000, i]);                                                                    // 645
            if (strict && !this._longMonthsParse[i]) {                                                                 // 646
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 647
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 648
            }                                                                                                          // 649
            if (!strict && !this._monthsParse[i]) {                                                                    // 650
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 651
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 652
            }                                                                                                          // 653
            // test the regex                                                                                          // 654
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 655
                return i;                                                                                              // 656
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 657
                return i;                                                                                              // 658
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 659
                return i;                                                                                              // 660
            }                                                                                                          // 661
        }                                                                                                              // 662
    }                                                                                                                  // 663
                                                                                                                       // 664
    // MOMENTS                                                                                                         // 665
                                                                                                                       // 666
    function setMonth (mom, value) {                                                                                   // 667
        var dayOfMonth;                                                                                                // 668
                                                                                                                       // 669
        // TODO: Move this out of here!                                                                                // 670
        if (typeof value === 'string') {                                                                               // 671
            value = mom.localeData().monthsParse(value);                                                               // 672
            // TODO: Another silent failure?                                                                           // 673
            if (typeof value !== 'number') {                                                                           // 674
                return mom;                                                                                            // 675
            }                                                                                                          // 676
        }                                                                                                              // 677
                                                                                                                       // 678
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 679
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 680
        return mom;                                                                                                    // 681
    }                                                                                                                  // 682
                                                                                                                       // 683
    function getSetMonth (value) {                                                                                     // 684
        if (value != null) {                                                                                           // 685
            setMonth(this, value);                                                                                     // 686
            utils_hooks__hooks.updateOffset(this, true);                                                               // 687
            return this;                                                                                               // 688
        } else {                                                                                                       // 689
            return get_set__get(this, 'Month');                                                                        // 690
        }                                                                                                              // 691
    }                                                                                                                  // 692
                                                                                                                       // 693
    function getDaysInMonth () {                                                                                       // 694
        return daysInMonth(this.year(), this.month());                                                                 // 695
    }                                                                                                                  // 696
                                                                                                                       // 697
    function checkOverflow (m) {                                                                                       // 698
        var overflow;                                                                                                  // 699
        var a = m._a;                                                                                                  // 700
                                                                                                                       // 701
        if (a && m._pf.overflow === -2) {                                                                              // 702
            overflow =                                                                                                 // 703
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 704
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 705
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 707
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 708
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 709
                -1;                                                                                                    // 710
                                                                                                                       // 711
            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                                    // 712
                overflow = DATE;                                                                                       // 713
            }                                                                                                          // 714
                                                                                                                       // 715
            m._pf.overflow = overflow;                                                                                 // 716
        }                                                                                                              // 717
                                                                                                                       // 718
        return m;                                                                                                      // 719
    }                                                                                                                  // 720
                                                                                                                       // 721
    function warn(msg) {                                                                                               // 722
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);                                                               // 724
        }                                                                                                              // 725
    }                                                                                                                  // 726
                                                                                                                       // 727
    function deprecate(msg, fn) {                                                                                      // 728
        var firstTime = true;                                                                                          // 729
        return extend(function () {                                                                                    // 730
            if (firstTime) {                                                                                           // 731
                warn(msg);                                                                                             // 732
                firstTime = false;                                                                                     // 733
            }                                                                                                          // 734
            return fn.apply(this, arguments);                                                                          // 735
        }, fn);                                                                                                        // 736
    }                                                                                                                  // 737
                                                                                                                       // 738
    var deprecations = {};                                                                                             // 739
                                                                                                                       // 740
    function deprecateSimple(name, msg) {                                                                              // 741
        if (!deprecations[name]) {                                                                                     // 742
            warn(msg);                                                                                                 // 743
            deprecations[name] = true;                                                                                 // 744
        }                                                                                                              // 745
    }                                                                                                                  // 746
                                                                                                                       // 747
    utils_hooks__hooks.suppressDeprecationWarnings = false;                                                            // 748
                                                                                                                       // 749
    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
                                                                                                                       // 751
    var isoDates = [                                                                                                   // 752
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],                                                                     // 753
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],                                                                           // 754
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],                                                                           // 755
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],                                                                                // 756
        ['YYYY-DDD', /\d{4}-\d{3}/]                                                                                    // 757
    ];                                                                                                                 // 758
                                                                                                                       // 759
    // iso time formats and regexes                                                                                    // 760
    var isoTimes = [                                                                                                   // 761
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],                                                                 // 762
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],                                                                           // 763
        ['HH:mm', /(T| )\d\d:\d\d/],                                                                                   // 764
        ['HH', /(T| )\d\d/]                                                                                            // 765
    ];                                                                                                                 // 766
                                                                                                                       // 767
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 768
                                                                                                                       // 769
    // date from iso format                                                                                            // 770
    function configFromISO(config) {                                                                                   // 771
        var i, l,                                                                                                      // 772
            string = config._i,                                                                                        // 773
            match = from_string__isoRegex.exec(string);                                                                // 774
                                                                                                                       // 775
        if (match) {                                                                                                   // 776
            config._pf.iso = true;                                                                                     // 777
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 778
                if (isoDates[i][1].exec(string)) {                                                                     // 779
                    // match[5] should be 'T' or undefined                                                             // 780
                    config._f = isoDates[i][0] + (match[6] || ' ');                                                    // 781
                    break;                                                                                             // 782
                }                                                                                                      // 783
            }                                                                                                          // 784
            for (i = 0, l = isoTimes.length; i < l; i++) {                                                             // 785
                if (isoTimes[i][1].exec(string)) {                                                                     // 786
                    config._f += isoTimes[i][0];                                                                       // 787
                    break;                                                                                             // 788
                }                                                                                                      // 789
            }                                                                                                          // 790
            if (string.match(matchOffset)) {                                                                           // 791
                config._f += 'Z';                                                                                      // 792
            }                                                                                                          // 793
            configFromStringAndFormat(config);                                                                         // 794
        } else {                                                                                                       // 795
            config._isValid = false;                                                                                   // 796
        }                                                                                                              // 797
    }                                                                                                                  // 798
                                                                                                                       // 799
    // date from iso format or fallback                                                                                // 800
    function configFromString(config) {                                                                                // 801
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 802
                                                                                                                       // 803
        if (matched !== null) {                                                                                        // 804
            config._d = new Date(+matched[1]);                                                                         // 805
            return;                                                                                                    // 806
        }                                                                                                              // 807
                                                                                                                       // 808
        configFromISO(config);                                                                                         // 809
        if (config._isValid === false) {                                                                               // 810
            delete config._isValid;                                                                                    // 811
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 812
        }                                                                                                              // 813
    }                                                                                                                  // 814
                                                                                                                       // 815
    utils_hooks__hooks.createFromInputFallback = deprecate(                                                            // 816
        'moment construction falls back to js Date. This is ' +                                                        // 817
        'discouraged and will be removed in upcoming major ' +                                                         // 818
        'release. Please refer to ' +                                                                                  // 819
        'https://github.com/moment/moment/issues/1407 for more info.',                                                 // 820
        function (config) {                                                                                            // 821
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 822
        }                                                                                                              // 823
    );                                                                                                                 // 824
                                                                                                                       // 825
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 826
        //can't just apply() to create a date:                                                                         // 827
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 829
                                                                                                                       // 830
        //the date constructor doesn't accept years < 1970                                                             // 831
        if (y < 1970) {                                                                                                // 832
            date.setFullYear(y);                                                                                       // 833
        }                                                                                                              // 834
        return date;                                                                                                   // 835
    }                                                                                                                  // 836
                                                                                                                       // 837
    function createUTCDate (y) {                                                                                       // 838
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 839
        if (y < 1970) {                                                                                                // 840
            date.setUTCFullYear(y);                                                                                    // 841
        }                                                                                                              // 842
        return date;                                                                                                   // 843
    }                                                                                                                  // 844
                                                                                                                       // 845
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 846
        return this.year() % 100;                                                                                      // 847
    });                                                                                                                // 848
                                                                                                                       // 849
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 850
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 851
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 852
                                                                                                                       // 853
    // ALIASES                                                                                                         // 854
                                                                                                                       // 855
    addUnitAlias('year', 'y');                                                                                         // 856
                                                                                                                       // 857
    // PARSING                                                                                                         // 858
                                                                                                                       // 859
    addRegexToken('Y',      matchSigned);                                                                              // 860
    addRegexToken('YY',     match1to2, match2);                                                                        // 861
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 862
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 863
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 864
                                                                                                                       // 865
    addParseToken(['YYYY', 'YYYYY', 'YYYYYY'], YEAR);                                                                  // 866
    addParseToken('YY', function (input, array) {                                                                      // 867
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 868
    });                                                                                                                // 869
                                                                                                                       // 870
    // HELPERS                                                                                                         // 871
                                                                                                                       // 872
    function daysInYear(year) {                                                                                        // 873
        return isLeapYear(year) ? 366 : 365;                                                                           // 874
    }                                                                                                                  // 875
                                                                                                                       // 876
    function isLeapYear(year) {                                                                                        // 877
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 878
    }                                                                                                                  // 879
                                                                                                                       // 880
    // HOOKS                                                                                                           // 881
                                                                                                                       // 882
    utils_hooks__hooks.parseTwoDigitYear = function (input) {                                                          // 883
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 884
    };                                                                                                                 // 885
                                                                                                                       // 886
    // MOMENTS                                                                                                         // 887
                                                                                                                       // 888
    var getSetYear = makeGetSet('FullYear', false);                                                                    // 889
                                                                                                                       // 890
    function getIsLeapYear () {                                                                                        // 891
        return isLeapYear(this.year());                                                                                // 892
    }                                                                                                                  // 893
                                                                                                                       // 894
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 895
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 896
                                                                                                                       // 897
    // ALIASES                                                                                                         // 898
                                                                                                                       // 899
    addUnitAlias('week', 'w');                                                                                         // 900
    addUnitAlias('isoWeek', 'W');                                                                                      // 901
                                                                                                                       // 902
    // PARSING                                                                                                         // 903
                                                                                                                       // 904
    addRegexToken('w',  match1to2);                                                                                    // 905
    addRegexToken('ww', match1to2, match2);                                                                            // 906
    addRegexToken('W',  match1to2);                                                                                    // 907
    addRegexToken('WW', match1to2, match2);                                                                            // 908
                                                                                                                       // 909
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 910
        week[token.substr(0, 1)] = toInt(input);                                                                       // 911
    });                                                                                                                // 912
                                                                                                                       // 913
    // HELPERS                                                                                                         // 914
                                                                                                                       // 915
    // firstDayOfWeek       0 = sun, 6 = sat                                                                           // 916
    //                      the day of the week that starts the week                                                   // 917
    //                      (usually sunday or monday)                                                                 // 918
    // firstDayOfWeekOfYear 0 = sun, 6 = sat                                                                           // 919
    //                      the first week is the week that contains the first                                         // 920
    //                      of this day of the week                                                                    // 921
    //                      (eg. ISO weeks use thursday (4))                                                           // 922
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {                                                   // 923
        var end = firstDayOfWeekOfYear - firstDayOfWeek,                                                               // 924
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),                                                        // 925
            adjustedMoment;                                                                                            // 926
                                                                                                                       // 927
                                                                                                                       // 928
        if (daysToDayOfWeek > end) {                                                                                   // 929
            daysToDayOfWeek -= 7;                                                                                      // 930
        }                                                                                                              // 931
                                                                                                                       // 932
        if (daysToDayOfWeek < end - 7) {                                                                               // 933
            daysToDayOfWeek += 7;                                                                                      // 934
        }                                                                                                              // 935
                                                                                                                       // 936
        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');                                            // 937
        return {                                                                                                       // 938
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),                                                           // 939
            year: adjustedMoment.year()                                                                                // 940
        };                                                                                                             // 941
    }                                                                                                                  // 942
                                                                                                                       // 943
    // LOCALES                                                                                                         // 944
                                                                                                                       // 945
    function localeWeek (mom) {                                                                                        // 946
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 947
    }                                                                                                                  // 948
                                                                                                                       // 949
    var defaultLocaleWeek = {                                                                                          // 950
        dow : 0, // Sunday is the first day of the week.                                                               // 951
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 952
    };                                                                                                                 // 953
                                                                                                                       // 954
    function localeFirstDayOfWeek () {                                                                                 // 955
        return this._week.dow;                                                                                         // 956
    }                                                                                                                  // 957
                                                                                                                       // 958
    function localeFirstDayOfYear () {                                                                                 // 959
        return this._week.doy;                                                                                         // 960
    }                                                                                                                  // 961
                                                                                                                       // 962
    // MOMENTS                                                                                                         // 963
                                                                                                                       // 964
    function getSetWeek (input) {                                                                                      // 965
        var week = this.localeData().week(this);                                                                       // 966
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 967
    }                                                                                                                  // 968
                                                                                                                       // 969
    function getSetISOWeek (input) {                                                                                   // 970
        var week = weekOfYear(this, 1, 4).week;                                                                        // 971
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 972
    }                                                                                                                  // 973
                                                                                                                       // 974
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 975
                                                                                                                       // 976
    // ALIASES                                                                                                         // 977
                                                                                                                       // 978
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 979
                                                                                                                       // 980
    // PARSING                                                                                                         // 981
                                                                                                                       // 982
    addRegexToken('DDD',  match1to3);                                                                                  // 983
    addRegexToken('DDDD', match3);                                                                                     // 984
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 985
        config._dayOfYear = toInt(input);                                                                              // 986
    });                                                                                                                // 987
                                                                                                                       // 988
    // HELPERS                                                                                                         // 989
                                                                                                                       // 990
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 991
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {                           // 992
        var d = createUTCDate(year, 0, 1).getUTCDay();                                                                 // 993
        var daysToAdd;                                                                                                 // 994
        var dayOfYear;                                                                                                 // 995
                                                                                                                       // 996
        d = d === 0 ? 7 : d;                                                                                           // 997
        weekday = weekday != null ? weekday : firstDayOfWeek;                                                          // 998
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);            // 999
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;                                       // 1000
                                                                                                                       // 1001
        return {                                                                                                       // 1002
            year      : dayOfYear > 0 ? year      : year - 1,                                                          // 1003
            dayOfYear : dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear                                   // 1004
        };                                                                                                             // 1005
    }                                                                                                                  // 1006
                                                                                                                       // 1007
    // MOMENTS                                                                                                         // 1008
                                                                                                                       // 1009
    function getSetDayOfYear (input) {                                                                                 // 1010
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 1011
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 1012
    }                                                                                                                  // 1013
                                                                                                                       // 1014
    // Pick the first defined of two or three arguments.                                                               // 1015
    function defaults(a, b, c) {                                                                                       // 1016
        if (a != null) {                                                                                               // 1017
            return a;                                                                                                  // 1018
        }                                                                                                              // 1019
        if (b != null) {                                                                                               // 1020
            return b;                                                                                                  // 1021
        }                                                                                                              // 1022
        return c;                                                                                                      // 1023
    }                                                                                                                  // 1024
                                                                                                                       // 1025
    function currentDateArray(config) {                                                                                // 1026
        var now = new Date();                                                                                          // 1027
        if (config._useUTC) {                                                                                          // 1028
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];                                        // 1029
        }                                                                                                              // 1030
        return [now.getFullYear(), now.getMonth(), now.getDate()];                                                     // 1031
    }                                                                                                                  // 1032
                                                                                                                       // 1033
    // convert an array to a date.                                                                                     // 1034
    // the array should mirror the parameters below                                                                    // 1035
    // note: all values past the year are optional and will default to the lowest possible value.                      // 1036
    // [year, month, day , hour, minute, second, millisecond]                                                          // 1037
    function configFromArray (config) {                                                                                // 1038
        var i, date, input = [], currentDate, yearToUse;                                                               // 1039
                                                                                                                       // 1040
        if (config._d) {                                                                                               // 1041
            return;                                                                                                    // 1042
        }                                                                                                              // 1043
                                                                                                                       // 1044
        currentDate = currentDateArray(config);                                                                        // 1045
                                                                                                                       // 1046
        //compute day of the year from weeks and weekdays                                                              // 1047
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 1048
            dayOfYearFromWeekInfo(config);                                                                             // 1049
        }                                                                                                              // 1050
                                                                                                                       // 1051
        //if the day of the year is set, figure out what it is                                                         // 1052
        if (config._dayOfYear) {                                                                                       // 1053
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 1054
                                                                                                                       // 1055
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 1056
                config._pf._overflowDayOfYear = true;                                                                  // 1057
            }                                                                                                          // 1058
                                                                                                                       // 1059
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 1060
            config._a[MONTH] = date.getUTCMonth();                                                                     // 1061
            config._a[DATE] = date.getUTCDate();                                                                       // 1062
        }                                                                                                              // 1063
                                                                                                                       // 1064
        // Default to current date.                                                                                    // 1065
        // * if no year, month, day of month are given, default to today                                               // 1066
        // * if day of month is given, default month and year                                                          // 1067
        // * if month is given, default only year                                                                      // 1068
        // * if year is given, don't default anything                                                                  // 1069
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 1070
            config._a[i] = input[i] = currentDate[i];                                                                  // 1071
        }                                                                                                              // 1072
                                                                                                                       // 1073
        // Zero out whatever was not defaulted, including time                                                         // 1074
        for (; i < 7; i++) {                                                                                           // 1075
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 1076
        }                                                                                                              // 1077
                                                                                                                       // 1078
        // Check for 24:00:00.000                                                                                      // 1079
        if (config._a[HOUR] === 24 &&                                                                                  // 1080
                config._a[MINUTE] === 0 &&                                                                             // 1081
                config._a[SECOND] === 0 &&                                                                             // 1082
                config._a[MILLISECOND] === 0) {                                                                        // 1083
            config._nextDay = true;                                                                                    // 1084
            config._a[HOUR] = 0;                                                                                       // 1085
        }                                                                                                              // 1086
                                                                                                                       // 1087
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 1088
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 1089
        // with parseZone.                                                                                             // 1090
        if (config._tzm != null) {                                                                                     // 1091
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 1092
        }                                                                                                              // 1093
                                                                                                                       // 1094
        if (config._nextDay) {                                                                                         // 1095
            config._a[HOUR] = 24;                                                                                      // 1096
        }                                                                                                              // 1097
    }                                                                                                                  // 1098
                                                                                                                       // 1099
    function dayOfYearFromWeekInfo(config) {                                                                           // 1100
        var w, weekYear, week, weekday, dow, doy, temp;                                                                // 1101
                                                                                                                       // 1102
        w = config._w;                                                                                                 // 1103
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 1104
            dow = 1;                                                                                                   // 1105
            doy = 4;                                                                                                   // 1106
                                                                                                                       // 1107
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 1108
            // how we interpret now (local, utc, fixed offset). So create                                              // 1109
            // a now version of current config (take local/utc/offset flags, and                                       // 1110
            // create now).                                                                                            // 1111
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 1112
            week = defaults(w.W, 1);                                                                                   // 1113
            weekday = defaults(w.E, 1);                                                                                // 1114
        } else {                                                                                                       // 1115
            dow = config._locale._week.dow;                                                                            // 1116
            doy = config._locale._week.doy;                                                                            // 1117
                                                                                                                       // 1118
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 1119
            week = defaults(w.w, 1);                                                                                   // 1120
                                                                                                                       // 1121
            if (w.d != null) {                                                                                         // 1122
                // weekday -- low day numbers are considered next week                                                 // 1123
                weekday = w.d;                                                                                         // 1124
                if (weekday < dow) {                                                                                   // 1125
                    ++week;                                                                                            // 1126
                }                                                                                                      // 1127
            } else if (w.e != null) {                                                                                  // 1128
                // local weekday -- counting starts from begining of week                                              // 1129
                weekday = w.e + dow;                                                                                   // 1130
            } else {                                                                                                   // 1131
                // default to begining of week                                                                         // 1132
                weekday = dow;                                                                                         // 1133
            }                                                                                                          // 1134
        }                                                                                                              // 1135
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);                                                  // 1136
                                                                                                                       // 1137
        config._a[YEAR] = temp.year;                                                                                   // 1138
        config._dayOfYear = temp.dayOfYear;                                                                            // 1139
    }                                                                                                                  // 1140
                                                                                                                       // 1141
    utils_hooks__hooks.ISO_8601 = function () {};                                                                      // 1142
                                                                                                                       // 1143
    // date from string and format string                                                                              // 1144
    function configFromStringAndFormat(config) {                                                                       // 1145
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 1146
        if (config._f === utils_hooks__hooks.ISO_8601) {                                                               // 1147
            configFromISO(config);                                                                                     // 1148
            return;                                                                                                    // 1149
        }                                                                                                              // 1150
                                                                                                                       // 1151
        config._a = [];                                                                                                // 1152
        config._pf.empty = true;                                                                                       // 1153
                                                                                                                       // 1154
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 1155
        var string = '' + config._i,                                                                                   // 1156
            i, parsedInput, tokens, token, skipped,                                                                    // 1157
            stringLength = string.length,                                                                              // 1158
            totalParsedInputLength = 0;                                                                                // 1159
                                                                                                                       // 1160
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 1161
                                                                                                                       // 1162
        for (i = 0; i < tokens.length; i++) {                                                                          // 1163
            token = tokens[i];                                                                                         // 1164
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 1165
            if (parsedInput) {                                                                                         // 1166
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 1167
                if (skipped.length > 0) {                                                                              // 1168
                    config._pf.unusedInput.push(skipped);                                                              // 1169
                }                                                                                                      // 1170
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 1171
                totalParsedInputLength += parsedInput.length;                                                          // 1172
            }                                                                                                          // 1173
            // don't parse if it's not a known token                                                                   // 1174
            if (formatTokenFunctions[token]) {                                                                         // 1175
                if (parsedInput) {                                                                                     // 1176
                    config._pf.empty = false;                                                                          // 1177
                }                                                                                                      // 1178
                else {                                                                                                 // 1179
                    config._pf.unusedTokens.push(token);                                                               // 1180
                }                                                                                                      // 1181
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 1182
            }                                                                                                          // 1183
            else if (config._strict && !parsedInput) {                                                                 // 1184
                config._pf.unusedTokens.push(token);                                                                   // 1185
            }                                                                                                          // 1186
        }                                                                                                              // 1187
                                                                                                                       // 1188
        // add remaining unparsed input length to the string                                                           // 1189
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;                                              // 1190
        if (string.length > 0) {                                                                                       // 1191
            config._pf.unusedInput.push(string);                                                                       // 1192
        }                                                                                                              // 1193
                                                                                                                       // 1194
        // clear _12h flag if hour is <= 12                                                                            // 1195
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {                                                    // 1196
            config._pf.bigHour = undefined;                                                                            // 1197
        }                                                                                                              // 1198
        // handle meridiem                                                                                             // 1199
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 1200
                                                                                                                       // 1201
        configFromArray(config);                                                                                       // 1202
        checkOverflow(config);                                                                                         // 1203
    }                                                                                                                  // 1204
                                                                                                                       // 1205
                                                                                                                       // 1206
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 1207
        var isPm;                                                                                                      // 1208
                                                                                                                       // 1209
        if (meridiem == null) {                                                                                        // 1210
            // nothing to do                                                                                           // 1211
            return hour;                                                                                               // 1212
        }                                                                                                              // 1213
        if (locale.meridiemHour != null) {                                                                             // 1214
            return locale.meridiemHour(hour, meridiem);                                                                // 1215
        } else if (locale.isPM != null) {                                                                              // 1216
            // Fallback                                                                                                // 1217
            isPm = locale.isPM(meridiem);                                                                              // 1218
            if (isPm && hour < 12) {                                                                                   // 1219
                hour += 12;                                                                                            // 1220
            }                                                                                                          // 1221
            if (!isPm && hour === 12) {                                                                                // 1222
                hour = 0;                                                                                              // 1223
            }                                                                                                          // 1224
            return hour;                                                                                               // 1225
        } else {                                                                                                       // 1226
            // this is not supposed to happen                                                                          // 1227
            return hour;                                                                                               // 1228
        }                                                                                                              // 1229
    }                                                                                                                  // 1230
                                                                                                                       // 1231
    function configFromStringAndArray(config) {                                                                        // 1232
        var tempConfig,                                                                                                // 1233
            bestMoment,                                                                                                // 1234
                                                                                                                       // 1235
            scoreToBeat,                                                                                               // 1236
            i,                                                                                                         // 1237
            currentScore;                                                                                              // 1238
                                                                                                                       // 1239
        if (config._f.length === 0) {                                                                                  // 1240
            config._pf.invalidFormat = true;                                                                           // 1241
            config._d = new Date(NaN);                                                                                 // 1242
            return;                                                                                                    // 1243
        }                                                                                                              // 1244
                                                                                                                       // 1245
        for (i = 0; i < config._f.length; i++) {                                                                       // 1246
            currentScore = 0;                                                                                          // 1247
            tempConfig = copyConfig({}, config);                                                                       // 1248
            if (config._useUTC != null) {                                                                              // 1249
                tempConfig._useUTC = config._useUTC;                                                                   // 1250
            }                                                                                                          // 1251
            tempConfig._pf = defaultParsingFlags();                                                                    // 1252
            tempConfig._f = config._f[i];                                                                              // 1253
            configFromStringAndFormat(tempConfig);                                                                     // 1254
                                                                                                                       // 1255
            if (!valid__isValid(tempConfig)) {                                                                         // 1256
                continue;                                                                                              // 1257
            }                                                                                                          // 1258
                                                                                                                       // 1259
            // if there is any input that was not parsed add a penalty for that format                                 // 1260
            currentScore += tempConfig._pf.charsLeftOver;                                                              // 1261
                                                                                                                       // 1262
            //or tokens                                                                                                // 1263
            currentScore += tempConfig._pf.unusedTokens.length * 10;                                                   // 1264
                                                                                                                       // 1265
            tempConfig._pf.score = currentScore;                                                                       // 1266
                                                                                                                       // 1267
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 1268
                scoreToBeat = currentScore;                                                                            // 1269
                bestMoment = tempConfig;                                                                               // 1270
            }                                                                                                          // 1271
        }                                                                                                              // 1272
                                                                                                                       // 1273
        extend(config, bestMoment || tempConfig);                                                                      // 1274
    }                                                                                                                  // 1275
                                                                                                                       // 1276
    function configFromObject(config) {                                                                                // 1277
        if (config._d) {                                                                                               // 1278
            return;                                                                                                    // 1279
        }                                                                                                              // 1280
                                                                                                                       // 1281
        var i = normalizeObjectUnits(config._i);                                                                       // 1282
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];                     // 1283
                                                                                                                       // 1284
        configFromArray(config);                                                                                       // 1285
    }                                                                                                                  // 1286
                                                                                                                       // 1287
    function createFromConfig (config) {                                                                               // 1288
        var input = config._i,                                                                                         // 1289
            format = config._f,                                                                                        // 1290
            res;                                                                                                       // 1291
                                                                                                                       // 1292
        config._locale = config._locale || locale_locales__getLocale(config._l);                                       // 1293
                                                                                                                       // 1294
        if (input === null || (format === undefined && input === '')) {                                                // 1295
            return valid__createInvalid({nullInput: true});                                                            // 1296
        }                                                                                                              // 1297
                                                                                                                       // 1298
        if (typeof input === 'string') {                                                                               // 1299
            config._i = input = config._locale.preparse(input);                                                        // 1300
        }                                                                                                              // 1301
                                                                                                                       // 1302
        if (isMoment(input)) {                                                                                         // 1303
            return new Moment(checkOverflow(input));                                                                   // 1304
        } else if (isArray(format)) {                                                                                  // 1305
            configFromStringAndArray(config);                                                                          // 1306
        } else if (format) {                                                                                           // 1307
            configFromStringAndFormat(config);                                                                         // 1308
        } else {                                                                                                       // 1309
            configFromInput(config);                                                                                   // 1310
        }                                                                                                              // 1311
                                                                                                                       // 1312
        res = new Moment(checkOverflow(config));                                                                       // 1313
        if (res._nextDay) {                                                                                            // 1314
            // Adding is smart enough around DST                                                                       // 1315
            res.add(1, 'd');                                                                                           // 1316
            res._nextDay = undefined;                                                                                  // 1317
        }                                                                                                              // 1318
                                                                                                                       // 1319
        return res;                                                                                                    // 1320
    }                                                                                                                  // 1321
                                                                                                                       // 1322
    function configFromInput(config) {                                                                                 // 1323
        var input = config._i;                                                                                         // 1324
        if (input === undefined) {                                                                                     // 1325
            config._d = new Date();                                                                                    // 1326
        } else if (isDate(input)) {                                                                                    // 1327
            config._d = new Date(+input);                                                                              // 1328
        } else if (typeof input === 'string') {                                                                        // 1329
            configFromString(config);                                                                                  // 1330
        } else if (isArray(input)) {                                                                                   // 1331
            config._a = map(input.slice(0), function (obj) {                                                           // 1332
                return parseInt(obj, 10);                                                                              // 1333
            });                                                                                                        // 1334
            configFromArray(config);                                                                                   // 1335
        } else if (typeof(input) === 'object') {                                                                       // 1336
            configFromObject(config);                                                                                  // 1337
        } else if (typeof(input) === 'number') {                                                                       // 1338
            // from milliseconds                                                                                       // 1339
            config._d = new Date(input);                                                                               // 1340
        } else {                                                                                                       // 1341
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 1342
        }                                                                                                              // 1343
    }                                                                                                                  // 1344
                                                                                                                       // 1345
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 1346
        var c = {};                                                                                                    // 1347
                                                                                                                       // 1348
        if (typeof(locale) === 'boolean') {                                                                            // 1349
            strict = locale;                                                                                           // 1350
            locale = undefined;                                                                                        // 1351
        }                                                                                                              // 1352
        // object construction must be done this way.                                                                  // 1353
        // https://github.com/moment/moment/issues/1423                                                                // 1354
        c._isAMomentObject = true;                                                                                     // 1355
        c._useUTC = c._isUTC = isUTC;                                                                                  // 1356
        c._l = locale;                                                                                                 // 1357
        c._i = input;                                                                                                  // 1358
        c._f = format;                                                                                                 // 1359
        c._strict = strict;                                                                                            // 1360
        c._pf = defaultParsingFlags();                                                                                 // 1361
                                                                                                                       // 1362
        return createFromConfig(c);                                                                                    // 1363
    }                                                                                                                  // 1364
                                                                                                                       // 1365
    function local__createLocal (input, format, locale, strict) {                                                      // 1366
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 1367
    }                                                                                                                  // 1368
                                                                                                                       // 1369
    var prototypeMin = deprecate(                                                                                      // 1370
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',           // 1371
         function () {                                                                                                 // 1372
             var other = local__createLocal.apply(null, arguments);                                                    // 1373
             return other < this ? this : other;                                                                       // 1374
         }                                                                                                             // 1375
     );                                                                                                                // 1376
                                                                                                                       // 1377
    var prototypeMax = deprecate(                                                                                      // 1378
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',            // 1379
        function () {                                                                                                  // 1380
            var other = local__createLocal.apply(null, arguments);                                                     // 1381
            return other > this ? this : other;                                                                        // 1382
        }                                                                                                              // 1383
    );                                                                                                                 // 1384
                                                                                                                       // 1385
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 1386
    // other. This relies on the function fn to be transitive.                                                         // 1387
    //                                                                                                                 // 1388
    // moments should either be an array of moment objects or an array, whose                                          // 1389
    // first element is an array of moment objects.                                                                    // 1390
    function pickBy(fn, moments) {                                                                                     // 1391
        var res, i;                                                                                                    // 1392
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 1393
            moments = moments[0];                                                                                      // 1394
        }                                                                                                              // 1395
        if (!moments.length) {                                                                                         // 1396
            return local__createLocal();                                                                               // 1397
        }                                                                                                              // 1398
        res = moments[0];                                                                                              // 1399
        for (i = 1; i < moments.length; ++i) {                                                                         // 1400
            if (moments[i][fn](res)) {                                                                                 // 1401
                res = moments[i];                                                                                      // 1402
            }                                                                                                          // 1403
        }                                                                                                              // 1404
        return res;                                                                                                    // 1405
    }                                                                                                                  // 1406
                                                                                                                       // 1407
    // TODO: Use [].sort instead?                                                                                      // 1408
    function min () {                                                                                                  // 1409
        var args = [].slice.call(arguments, 0);                                                                        // 1410
                                                                                                                       // 1411
        return pickBy('isBefore', args);                                                                               // 1412
    }                                                                                                                  // 1413
                                                                                                                       // 1414
    function max () {                                                                                                  // 1415
        var args = [].slice.call(arguments, 0);                                                                        // 1416
                                                                                                                       // 1417
        return pickBy('isAfter', args);                                                                                // 1418
    }                                                                                                                  // 1419
                                                                                                                       // 1420
    function Duration (duration) {                                                                                     // 1421
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 1422
            years = normalizedInput.year || 0,                                                                         // 1423
            quarters = normalizedInput.quarter || 0,                                                                   // 1424
            months = normalizedInput.month || 0,                                                                       // 1425
            weeks = normalizedInput.week || 0,                                                                         // 1426
            days = normalizedInput.day || 0,                                                                           // 1427
            hours = normalizedInput.hour || 0,                                                                         // 1428
            minutes = normalizedInput.minute || 0,                                                                     // 1429
            seconds = normalizedInput.second || 0,                                                                     // 1430
            milliseconds = normalizedInput.millisecond || 0;                                                           // 1431
                                                                                                                       // 1432
        // representation for dateAddRemove                                                                            // 1433
        this._milliseconds = +milliseconds +                                                                           // 1434
            seconds * 1e3 + // 1000                                                                                    // 1435
            minutes * 6e4 + // 1000 * 60                                                                               // 1436
            hours * 36e5; // 1000 * 60 * 60                                                                            // 1437
        // Because of dateAddRemove treats 24 hours as different from a                                                // 1438
        // day when working around DST, we need to store them separately                                               // 1439
        this._days = +days +                                                                                           // 1440
            weeks * 7;                                                                                                 // 1441
        // It is impossible translate months into days without knowing                                                 // 1442
        // which months you are are talking about, so we have to store                                                 // 1443
        // it separately.                                                                                              // 1444
        this._months = +months +                                                                                       // 1445
            quarters * 3 +                                                                                             // 1446
            years * 12;                                                                                                // 1447
                                                                                                                       // 1448
        this._data = {};                                                                                               // 1449
                                                                                                                       // 1450
        this._locale = locale_locales__getLocale();                                                                    // 1451
                                                                                                                       // 1452
        this._bubble();                                                                                                // 1453
    }                                                                                                                  // 1454
                                                                                                                       // 1455
    function isDuration (obj) {                                                                                        // 1456
        return obj instanceof Duration;                                                                                // 1457
    }                                                                                                                  // 1458
                                                                                                                       // 1459
    function offset (token, separator) {                                                                               // 1460
        addFormatToken(token, 0, 0, function () {                                                                      // 1461
            var offset = this.utcOffset();                                                                             // 1462
            var sign = '+';                                                                                            // 1463
            if (offset < 0) {                                                                                          // 1464
                offset = -offset;                                                                                      // 1465
                sign = '-';                                                                                            // 1466
            }                                                                                                          // 1467
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 1468
        });                                                                                                            // 1469
    }                                                                                                                  // 1470
                                                                                                                       // 1471
    offset('Z', ':');                                                                                                  // 1472
    offset('ZZ', '');                                                                                                  // 1473
                                                                                                                       // 1474
    // PARSING                                                                                                         // 1475
                                                                                                                       // 1476
    addRegexToken('Z',  matchOffset);                                                                                  // 1477
    addRegexToken('ZZ', matchOffset);                                                                                  // 1478
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 1479
        config._useUTC = true;                                                                                         // 1480
        config._tzm = offsetFromString(input);                                                                         // 1481
    });                                                                                                                // 1482
                                                                                                                       // 1483
    // HELPERS                                                                                                         // 1484
                                                                                                                       // 1485
    // timezone chunker                                                                                                // 1486
    // '+10:00' > ['10',  '00']                                                                                        // 1487
    // '-1530'  > ['-15', '30']                                                                                        // 1488
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 1489
                                                                                                                       // 1490
    function offsetFromString(string) {                                                                                // 1491
        var matches = ((string || '').match(matchOffset) || []);                                                       // 1492
        var chunk   = matches[matches.length - 1] || [];                                                               // 1493
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 1494
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 1495
                                                                                                                       // 1496
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 1497
    }                                                                                                                  // 1498
                                                                                                                       // 1499
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 1500
    function cloneWithOffset(input, model) {                                                                           // 1501
        var res, diff;                                                                                                 // 1502
        if (model._isUTC) {                                                                                            // 1503
            res = model.clone();                                                                                       // 1504
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);                  // 1505
            // Use low-level api, because this fn is low-level api.                                                    // 1506
            res._d.setTime(+res._d + diff);                                                                            // 1507
            utils_hooks__hooks.updateOffset(res, false);                                                               // 1508
            return res;                                                                                                // 1509
        } else {                                                                                                       // 1510
            return local__createLocal(input).local();                                                                  // 1511
        }                                                                                                              // 1512
        return model._isUTC ? local__createLocal(input).zone(model._offset || 0) : local__createLocal(input).local();  // 1513
    }                                                                                                                  // 1514
                                                                                                                       // 1515
    function getDateOffset (m) {                                                                                       // 1516
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 1517
        // https://github.com/moment/moment/pull/1871                                                                  // 1518
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 1519
    }                                                                                                                  // 1520
                                                                                                                       // 1521
    // HOOKS                                                                                                           // 1522
                                                                                                                       // 1523
    // This function will be called whenever a moment is mutated.                                                      // 1524
    // It is intended to keep the offset in sync with the timezone.                                                    // 1525
    utils_hooks__hooks.updateOffset = function () {};                                                                  // 1526
                                                                                                                       // 1527
    // MOMENTS                                                                                                         // 1528
                                                                                                                       // 1529
    // keepLocalTime = true means only change the timezone, without                                                    // 1530
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 1531
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 1532
    // +0200, so we adjust the time as needed, to be valid.                                                            // 1533
    //                                                                                                                 // 1534
    // Keeping the time actually adds/subtracts (one hour)                                                             // 1535
    // from the actual represented time. That is why we call updateOffset                                              // 1536
    // a second time. In case it wants us to change the offset again                                                   // 1537
    // _changeInProgress == true case, then we have to adjust, because                                                 // 1538
    // there is no such time in the given timezone.                                                                    // 1539
    function getSetOffset (input, keepLocalTime) {                                                                     // 1540
        var offset = this._offset || 0,                                                                                // 1541
            localAdjust;                                                                                               // 1542
        if (input != null) {                                                                                           // 1543
            if (typeof input === 'string') {                                                                           // 1544
                input = offsetFromString(input);                                                                       // 1545
            }                                                                                                          // 1546
            if (Math.abs(input) < 16) {                                                                                // 1547
                input = input * 60;                                                                                    // 1548
            }                                                                                                          // 1549
            if (!this._isUTC && keepLocalTime) {                                                                       // 1550
                localAdjust = getDateOffset(this);                                                                     // 1551
            }                                                                                                          // 1552
            this._offset = input;                                                                                      // 1553
            this._isUTC = true;                                                                                        // 1554
            if (localAdjust != null) {                                                                                 // 1555
                this.add(localAdjust, 'm');                                                                            // 1556
            }                                                                                                          // 1557
            if (offset !== input) {                                                                                    // 1558
                if (!keepLocalTime || this._changeInProgress) {                                                        // 1559
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 1560
                } else if (!this._changeInProgress) {                                                                  // 1561
                    this._changeInProgress = true;                                                                     // 1562
                    utils_hooks__hooks.updateOffset(this, true);                                                       // 1563
                    this._changeInProgress = null;                                                                     // 1564
                }                                                                                                      // 1565
            }                                                                                                          // 1566
            return this;                                                                                               // 1567
        } else {                                                                                                       // 1568
            return this._isUTC ? offset : getDateOffset(this);                                                         // 1569
        }                                                                                                              // 1570
    }                                                                                                                  // 1571
                                                                                                                       // 1572
    function getSetZone (input, keepLocalTime) {                                                                       // 1573
        if (input != null) {                                                                                           // 1574
            if (typeof input !== 'string') {                                                                           // 1575
                input = -input;                                                                                        // 1576
            }                                                                                                          // 1577
                                                                                                                       // 1578
            this.utcOffset(input, keepLocalTime);                                                                      // 1579
                                                                                                                       // 1580
            return this;                                                                                               // 1581
        } else {                                                                                                       // 1582
            return -this.utcOffset();                                                                                  // 1583
        }                                                                                                              // 1584
    }                                                                                                                  // 1585
                                                                                                                       // 1586
    function setOffsetToUTC (keepLocalTime) {                                                                          // 1587
        return this.utcOffset(0, keepLocalTime);                                                                       // 1588
    }                                                                                                                  // 1589
                                                                                                                       // 1590
    function setOffsetToLocal (keepLocalTime) {                                                                        // 1591
        if (this._isUTC) {                                                                                             // 1592
            this.utcOffset(0, keepLocalTime);                                                                          // 1593
            this._isUTC = false;                                                                                       // 1594
                                                                                                                       // 1595
            if (keepLocalTime) {                                                                                       // 1596
                this.subtract(getDateOffset(this), 'm');                                                               // 1597
            }                                                                                                          // 1598
        }                                                                                                              // 1599
        return this;                                                                                                   // 1600
    }                                                                                                                  // 1601
                                                                                                                       // 1602
    function setOffsetToParsedOffset () {                                                                              // 1603
        if (this._tzm) {                                                                                               // 1604
            this.utcOffset(this._tzm);                                                                                 // 1605
        } else if (typeof this._i === 'string') {                                                                      // 1606
            this.utcOffset(offsetFromString(this._i));                                                                 // 1607
        }                                                                                                              // 1608
        return this;                                                                                                   // 1609
    }                                                                                                                  // 1610
                                                                                                                       // 1611
    function hasAlignedHourOffset (input) {                                                                            // 1612
        if (!input) {                                                                                                  // 1613
            input = 0;                                                                                                 // 1614
        }                                                                                                              // 1615
        else {                                                                                                         // 1616
            input = local__createLocal(input).utcOffset();                                                             // 1617
        }                                                                                                              // 1618
                                                                                                                       // 1619
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 1620
    }                                                                                                                  // 1621
                                                                                                                       // 1622
    function isDaylightSavingTime () {                                                                                 // 1623
        return (                                                                                                       // 1624
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 1625
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 1626
        );                                                                                                             // 1627
    }                                                                                                                  // 1628
                                                                                                                       // 1629
    function isDaylightSavingTimeShifted () {                                                                          // 1630
        if (this._a) {                                                                                                 // 1631
            var other = this._isUTC ? create_utc__createUTC(this._a) : local__createLocal(this._a);                    // 1632
            return this.isValid() && compareArrays(this._a, other.toArray()) > 0;                                      // 1633
        }                                                                                                              // 1634
                                                                                                                       // 1635
        return false;                                                                                                  // 1636
    }                                                                                                                  // 1637
                                                                                                                       // 1638
    function isLocal () {                                                                                              // 1639
        return !this._isUTC;                                                                                           // 1640
    }                                                                                                                  // 1641
                                                                                                                       // 1642
    function isUtcOffset () {                                                                                          // 1643
        return this._isUTC;                                                                                            // 1644
    }                                                                                                                  // 1645
                                                                                                                       // 1646
    function isUtc () {                                                                                                // 1647
        return this._isUTC && this._offset === 0;                                                                      // 1648
    }                                                                                                                  // 1649
                                                                                                                       // 1650
    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;                                          // 1651
                                                                                                                       // 1652
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 1653
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 1654
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
                                                                                                                       // 1656
    function create__createDuration (input, key) {                                                                     // 1657
        var duration = input,                                                                                          // 1658
            // matching against regexp is expensive, do it on demand                                                   // 1659
            match = null,                                                                                              // 1660
            sign,                                                                                                      // 1661
            ret,                                                                                                       // 1662
            diffRes;                                                                                                   // 1663
                                                                                                                       // 1664
        if (isDuration(input)) {                                                                                       // 1665
            duration = {                                                                                               // 1666
                ms : input._milliseconds,                                                                              // 1667
                d  : input._days,                                                                                      // 1668
                M  : input._months                                                                                     // 1669
            };                                                                                                         // 1670
        } else if (typeof input === 'number') {                                                                        // 1671
            duration = {};                                                                                             // 1672
            if (key) {                                                                                                 // 1673
                duration[key] = input;                                                                                 // 1674
            } else {                                                                                                   // 1675
                duration.milliseconds = input;                                                                         // 1676
            }                                                                                                          // 1677
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 1678
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1679
            duration = {                                                                                               // 1680
                y  : 0,                                                                                                // 1681
                d  : toInt(match[DATE])        * sign,                                                                 // 1682
                h  : toInt(match[HOUR])        * sign,                                                                 // 1683
                m  : toInt(match[MINUTE])      * sign,                                                                 // 1684
                s  : toInt(match[SECOND])      * sign,                                                                 // 1685
                ms : toInt(match[MILLISECOND]) * sign                                                                  // 1686
            };                                                                                                         // 1687
        } else if (!!(match = create__isoRegex.exec(input))) {                                                         // 1688
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1689
            duration = {                                                                                               // 1690
                y : parseIso(match[2], sign),                                                                          // 1691
                M : parseIso(match[3], sign),                                                                          // 1692
                d : parseIso(match[4], sign),                                                                          // 1693
                h : parseIso(match[5], sign),                                                                          // 1694
                m : parseIso(match[6], sign),                                                                          // 1695
                s : parseIso(match[7], sign),                                                                          // 1696
                w : parseIso(match[8], sign)                                                                           // 1697
            };                                                                                                         // 1698
        } else if (duration == null) {// checks for null or undefined                                                  // 1699
            duration = {};                                                                                             // 1700
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 1701
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 1702
                                                                                                                       // 1703
            duration = {};                                                                                             // 1704
            duration.ms = diffRes.milliseconds;                                                                        // 1705
            duration.M = diffRes.months;                                                                               // 1706
        }                                                                                                              // 1707
                                                                                                                       // 1708
        ret = new Duration(duration);                                                                                  // 1709
                                                                                                                       // 1710
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 1711
            ret._locale = input._locale;                                                                               // 1712
        }                                                                                                              // 1713
                                                                                                                       // 1714
        return ret;                                                                                                    // 1715
    }                                                                                                                  // 1716
                                                                                                                       // 1717
    create__createDuration.fn = Duration.prototype;                                                                    // 1718
                                                                                                                       // 1719
    function parseIso (inp, sign) {                                                                                    // 1720
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 1721
        // converts floats to ints.                                                                                    // 1722
        // inp may be undefined, so careful calling replace on it.                                                     // 1723
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 1724
        // apply sign while we're at it                                                                                // 1725
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 1726
    }                                                                                                                  // 1727
                                                                                                                       // 1728
    function positiveMomentsDifference(base, other) {                                                                  // 1729
        var res = {milliseconds: 0, months: 0};                                                                        // 1730
                                                                                                                       // 1731
        res.months = other.month() - base.month() +                                                                    // 1732
            (other.year() - base.year()) * 12;                                                                         // 1733
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 1734
            --res.months;                                                                                              // 1735
        }                                                                                                              // 1736
                                                                                                                       // 1737
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 1738
                                                                                                                       // 1739
        return res;                                                                                                    // 1740
    }                                                                                                                  // 1741
                                                                                                                       // 1742
    function momentsDifference(base, other) {                                                                          // 1743
        var res;                                                                                                       // 1744
        other = cloneWithOffset(other, base);                                                                          // 1745
        if (base.isBefore(other)) {                                                                                    // 1746
            res = positiveMomentsDifference(base, other);                                                              // 1747
        } else {                                                                                                       // 1748
            res = positiveMomentsDifference(other, base);                                                              // 1749
            res.milliseconds = -res.milliseconds;                                                                      // 1750
            res.months = -res.months;                                                                                  // 1751
        }                                                                                                              // 1752
                                                                                                                       // 1753
        return res;                                                                                                    // 1754
    }                                                                                                                  // 1755
                                                                                                                       // 1756
    function createAdder(direction, name) {                                                                            // 1757
        return function (val, period) {                                                                                // 1758
            var dur, tmp;                                                                                              // 1759
            //invert the arguments, but complain about it                                                              // 1760
            if (period !== null && !isNaN(+period)) {                                                                  // 1761
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;                                                                 // 1763
            }                                                                                                          // 1764
                                                                                                                       // 1765
            val = typeof val === 'string' ? +val : val;                                                                // 1766
            dur = create__createDuration(val, period);                                                                 // 1767
            add_subtract__addSubtract(this, dur, direction);                                                           // 1768
            return this;                                                                                               // 1769
        };                                                                                                             // 1770
    }                                                                                                                  // 1771
                                                                                                                       // 1772
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 1773
        var milliseconds = duration._milliseconds,                                                                     // 1774
            days = duration._days,                                                                                     // 1775
            months = duration._months;                                                                                 // 1776
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 1777
                                                                                                                       // 1778
        if (milliseconds) {                                                                                            // 1779
            mom._d.setTime(+mom._d + milliseconds * isAdding);                                                         // 1780
        }                                                                                                              // 1781
        if (days) {                                                                                                    // 1782
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 1783
        }                                                                                                              // 1784
        if (months) {                                                                                                  // 1785
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 1786
        }                                                                                                              // 1787
        if (updateOffset) {                                                                                            // 1788
            utils_hooks__hooks.updateOffset(mom, days || months);                                                      // 1789
        }                                                                                                              // 1790
    }                                                                                                                  // 1791
                                                                                                                       // 1792
    var add_subtract__add      = createAdder(1, 'add');                                                                // 1793
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 1794
                                                                                                                       // 1795
    function moment_calendar__calendar (time) {                                                                        // 1796
        // We want to compare the start of today, vs this.                                                             // 1797
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 1798
        var now = time || local__createLocal(),                                                                        // 1799
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 1800
            diff = this.diff(sod, 'days', true),                                                                       // 1801
            format = diff < -6 ? 'sameElse' :                                                                          // 1802
                diff < -1 ? 'lastWeek' :                                                                               // 1803
                diff < 0 ? 'lastDay' :                                                                                 // 1804
                diff < 1 ? 'sameDay' :                                                                                 // 1805
                diff < 2 ? 'nextDay' :                                                                                 // 1806
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 1807
        return this.format(this.localeData().calendar(format, this, local__createLocal(now)));                         // 1808
    }                                                                                                                  // 1809
                                                                                                                       // 1810
    function clone () {                                                                                                // 1811
        return new Moment(this);                                                                                       // 1812
    }                                                                                                                  // 1813
                                                                                                                       // 1814
    function isAfter (input, units) {                                                                                  // 1815
        var inputMs;                                                                                                   // 1816
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');                                  // 1817
        if (units === 'millisecond') {                                                                                 // 1818
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1819
            return +this > +input;                                                                                     // 1820
        } else {                                                                                                       // 1821
            inputMs = isMoment(input) ? +input : +local__createLocal(input);                                           // 1822
            return inputMs < +this.clone().startOf(units);                                                             // 1823
        }                                                                                                              // 1824
    }                                                                                                                  // 1825
                                                                                                                       // 1826
    function isBefore (input, units) {                                                                                 // 1827
        var inputMs;                                                                                                   // 1828
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');                                  // 1829
        if (units === 'millisecond') {                                                                                 // 1830
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1831
            return +this < +input;                                                                                     // 1832
        } else {                                                                                                       // 1833
            inputMs = isMoment(input) ? +input : +local__createLocal(input);                                           // 1834
            return +this.clone().endOf(units) < inputMs;                                                               // 1835
        }                                                                                                              // 1836
    }                                                                                                                  // 1837
                                                                                                                       // 1838
    function isBetween (from, to, units) {                                                                             // 1839
        return this.isAfter(from, units) && this.isBefore(to, units);                                                  // 1840
    }                                                                                                                  // 1841
                                                                                                                       // 1842
    function isSame (input, units) {                                                                                   // 1843
        var inputMs;                                                                                                   // 1844
        units = normalizeUnits(units || 'millisecond');                                                                // 1845
        if (units === 'millisecond') {                                                                                 // 1846
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1847
            return +this === +input;                                                                                   // 1848
        } else {                                                                                                       // 1849
            inputMs = +local__createLocal(input);                                                                      // 1850
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));               // 1851
        }                                                                                                              // 1852
    }                                                                                                                  // 1853
                                                                                                                       // 1854
    function absFloor (number) {                                                                                       // 1855
        if (number < 0) {                                                                                              // 1856
            return Math.ceil(number);                                                                                  // 1857
        } else {                                                                                                       // 1858
            return Math.floor(number);                                                                                 // 1859
        }                                                                                                              // 1860
    }                                                                                                                  // 1861
                                                                                                                       // 1862
    function diff (input, units, asFloat) {                                                                            // 1863
        var that = cloneWithOffset(input, this),                                                                       // 1864
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,                                                   // 1865
            delta, output;                                                                                             // 1866
                                                                                                                       // 1867
        units = normalizeUnits(units);                                                                                 // 1868
                                                                                                                       // 1869
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 1870
            output = monthDiff(this, that);                                                                            // 1871
            if (units === 'quarter') {                                                                                 // 1872
                output = output / 3;                                                                                   // 1873
            } else if (units === 'year') {                                                                             // 1874
                output = output / 12;                                                                                  // 1875
            }                                                                                                          // 1876
        } else {                                                                                                       // 1877
            delta = this - that;                                                                                       // 1878
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 1879
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 1880
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 1881
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 1882
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 1883
                delta;                                                                                                 // 1884
        }                                                                                                              // 1885
        return asFloat ? output : absFloor(output);                                                                    // 1886
    }                                                                                                                  // 1887
                                                                                                                       // 1888
    function monthDiff (a, b) {                                                                                        // 1889
        // difference in months                                                                                        // 1890
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 1891
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 1892
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 1893
            anchor2, adjust;                                                                                           // 1894
                                                                                                                       // 1895
        if (b - anchor < 0) {                                                                                          // 1896
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 1897
            // linear across the month                                                                                 // 1898
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 1899
        } else {                                                                                                       // 1900
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 1901
            // linear across the month                                                                                 // 1902
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 1903
        }                                                                                                              // 1904
                                                                                                                       // 1905
        return -(wholeMonthDiff + adjust);                                                                             // 1906
    }                                                                                                                  // 1907
                                                                                                                       // 1908
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                         // 1909
                                                                                                                       // 1910
    function toString () {                                                                                             // 1911
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 1912
    }                                                                                                                  // 1913
                                                                                                                       // 1914
    function moment_format__toISOString () {                                                                           // 1915
        var m = this.clone().utc();                                                                                    // 1916
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 1917
            if ('function' === typeof Date.prototype.toISOString) {                                                    // 1918
                // native implementation is ~50x faster, use it when we can                                            // 1919
                return this.toDate().toISOString();                                                                    // 1920
            } else {                                                                                                   // 1921
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 1922
            }                                                                                                          // 1923
        } else {                                                                                                       // 1924
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 1925
        }                                                                                                              // 1926
    }                                                                                                                  // 1927
                                                                                                                       // 1928
    function format (inputString) {                                                                                    // 1929
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);                              // 1930
        return this.localeData().postformat(output);                                                                   // 1931
    }                                                                                                                  // 1932
                                                                                                                       // 1933
    function from (time, withoutSuffix) {                                                                              // 1934
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);          // 1935
    }                                                                                                                  // 1936
                                                                                                                       // 1937
    function fromNow (withoutSuffix) {                                                                                 // 1938
        return this.from(local__createLocal(), withoutSuffix);                                                         // 1939
    }                                                                                                                  // 1940
                                                                                                                       // 1941
    function locale (key) {                                                                                            // 1942
        var newLocaleData;                                                                                             // 1943
                                                                                                                       // 1944
        if (key === undefined) {                                                                                       // 1945
            return this._locale._abbr;                                                                                 // 1946
        } else {                                                                                                       // 1947
            newLocaleData = locale_locales__getLocale(key);                                                            // 1948
            if (newLocaleData != null) {                                                                               // 1949
                this._locale = newLocaleData;                                                                          // 1950
            }                                                                                                          // 1951
            return this;                                                                                               // 1952
        }                                                                                                              // 1953
    }                                                                                                                  // 1954
                                                                                                                       // 1955
    var lang = deprecate(                                                                                              // 1956
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 1958
            if (key === undefined) {                                                                                   // 1959
                return this.localeData();                                                                              // 1960
            } else {                                                                                                   // 1961
                return this.locale(key);                                                                               // 1962
            }                                                                                                          // 1963
        }                                                                                                              // 1964
    );                                                                                                                 // 1965
                                                                                                                       // 1966
    function localeData () {                                                                                           // 1967
        return this._locale;                                                                                           // 1968
    }                                                                                                                  // 1969
                                                                                                                       // 1970
    function startOf (units) {                                                                                         // 1971
        units = normalizeUnits(units);                                                                                 // 1972
        // the following switch intentionally omits break keywords                                                     // 1973
        // to utilize falling through the cases.                                                                       // 1974
        switch (units) {                                                                                               // 1975
        case 'year':                                                                                                   // 1976
            this.month(0);                                                                                             // 1977
            /* falls through */                                                                                        // 1978
        case 'quarter':                                                                                                // 1979
        case 'month':                                                                                                  // 1980
            this.date(1);                                                                                              // 1981
            /* falls through */                                                                                        // 1982
        case 'week':                                                                                                   // 1983
        case 'isoWeek':                                                                                                // 1984
        case 'day':                                                                                                    // 1985
            this.hours(0);                                                                                             // 1986
            /* falls through */                                                                                        // 1987
        case 'hour':                                                                                                   // 1988
            this.minutes(0);                                                                                           // 1989
            /* falls through */                                                                                        // 1990
        case 'minute':                                                                                                 // 1991
            this.seconds(0);                                                                                           // 1992
            /* falls through */                                                                                        // 1993
        case 'second':                                                                                                 // 1994
            this.milliseconds(0);                                                                                      // 1995
        }                                                                                                              // 1996
                                                                                                                       // 1997
        // weeks are a special case                                                                                    // 1998
        if (units === 'week') {                                                                                        // 1999
            this.weekday(0);                                                                                           // 2000
        }                                                                                                              // 2001
        if (units === 'isoWeek') {                                                                                     // 2002
            this.isoWeekday(1);                                                                                        // 2003
        }                                                                                                              // 2004
                                                                                                                       // 2005
        // quarters are also special                                                                                   // 2006
        if (units === 'quarter') {                                                                                     // 2007
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 2008
        }                                                                                                              // 2009
                                                                                                                       // 2010
        return this;                                                                                                   // 2011
    }                                                                                                                  // 2012
                                                                                                                       // 2013
    function endOf (units) {                                                                                           // 2014
        units = normalizeUnits(units);                                                                                 // 2015
        if (units === undefined || units === 'millisecond') {                                                          // 2016
            return this;                                                                                               // 2017
        }                                                                                                              // 2018
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 2019
    }                                                                                                                  // 2020
                                                                                                                       // 2021
    function to_type__valueOf () {                                                                                     // 2022
        return +this._d - ((this._offset || 0) * 60000);                                                               // 2023
    }                                                                                                                  // 2024
                                                                                                                       // 2025
    function unix () {                                                                                                 // 2026
        return Math.floor(+this / 1000);                                                                               // 2027
    }                                                                                                                  // 2028
                                                                                                                       // 2029
    function toDate () {                                                                                               // 2030
        return this._offset ? new Date(+this) : this._d;                                                               // 2031
    }                                                                                                                  // 2032
                                                                                                                       // 2033
    function toArray () {                                                                                              // 2034
        var m = this;                                                                                                  // 2035
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 2036
    }                                                                                                                  // 2037
                                                                                                                       // 2038
    function moment_valid__isValid () {                                                                                // 2039
        return valid__isValid(this);                                                                                   // 2040
    }                                                                                                                  // 2041
                                                                                                                       // 2042
    function parsingFlags () {                                                                                         // 2043
        return extend({}, this._pf);                                                                                   // 2044
    }                                                                                                                  // 2045
                                                                                                                       // 2046
    function invalidAt () {                                                                                            // 2047
        return this._pf.overflow;                                                                                      // 2048
    }                                                                                                                  // 2049
                                                                                                                       // 2050
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 2051
        return this.weekYear() % 100;                                                                                  // 2052
    });                                                                                                                // 2053
                                                                                                                       // 2054
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 2055
        return this.isoWeekYear() % 100;                                                                               // 2056
    });                                                                                                                // 2057
                                                                                                                       // 2058
    function addWeekYearFormatToken (token, getter) {                                                                  // 2059
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 2060
    }                                                                                                                  // 2061
                                                                                                                       // 2062
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 2063
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 2064
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 2065
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 2066
                                                                                                                       // 2067
    // ALIASES                                                                                                         // 2068
                                                                                                                       // 2069
    addUnitAlias('weekYear', 'gg');                                                                                    // 2070
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 2071
                                                                                                                       // 2072
    // PARSING                                                                                                         // 2073
                                                                                                                       // 2074
    addRegexToken('G',      matchSigned);                                                                              // 2075
    addRegexToken('g',      matchSigned);                                                                              // 2076
    addRegexToken('GG',     match1to2, match2);                                                                        // 2077
    addRegexToken('gg',     match1to2, match2);                                                                        // 2078
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 2079
    addRegexToken('gggg',   match1to4, match4);                                                                        // 2080
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 2081
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 2082
                                                                                                                       // 2083
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 2084
        week[token.substr(0, 2)] = toInt(input);                                                                       // 2085
    });                                                                                                                // 2086
                                                                                                                       // 2087
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 2088
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 2089
    });                                                                                                                // 2090
                                                                                                                       // 2091
    // HELPERS                                                                                                         // 2092
                                                                                                                       // 2093
    function weeksInYear(year, dow, doy) {                                                                             // 2094
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;                              // 2095
    }                                                                                                                  // 2096
                                                                                                                       // 2097
    // MOMENTS                                                                                                         // 2098
                                                                                                                       // 2099
    function getSetWeekYear (input) {                                                                                  // 2100
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;                    // 2101
        return input == null ? year : this.add((input - year), 'y');                                                   // 2102
    }                                                                                                                  // 2103
                                                                                                                       // 2104
    function getSetISOWeekYear (input) {                                                                               // 2105
        var year = weekOfYear(this, 1, 4).year;                                                                        // 2106
        return input == null ? year : this.add((input - year), 'y');                                                   // 2107
    }                                                                                                                  // 2108
                                                                                                                       // 2109
    function getISOWeeksInYear () {                                                                                    // 2110
        return weeksInYear(this.year(), 1, 4);                                                                         // 2111
    }                                                                                                                  // 2112
                                                                                                                       // 2113
    function getWeeksInYear () {                                                                                       // 2114
        var weekInfo = this.localeData()._week;                                                                        // 2115
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 2116
    }                                                                                                                  // 2117
                                                                                                                       // 2118
    addFormatToken('Q', 0, 0, 'quarter');                                                                              // 2119
                                                                                                                       // 2120
    // ALIASES                                                                                                         // 2121
                                                                                                                       // 2122
    addUnitAlias('quarter', 'Q');                                                                                      // 2123
                                                                                                                       // 2124
    // PARSING                                                                                                         // 2125
                                                                                                                       // 2126
    addRegexToken('Q', match1);                                                                                        // 2127
    addParseToken('Q', function (input, array) {                                                                       // 2128
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 2129
    });                                                                                                                // 2130
                                                                                                                       // 2131
    // MOMENTS                                                                                                         // 2132
                                                                                                                       // 2133
    function getSetQuarter (input) {                                                                                   // 2134
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 2135
    }                                                                                                                  // 2136
                                                                                                                       // 2137
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 2138
                                                                                                                       // 2139
    // ALIASES                                                                                                         // 2140
                                                                                                                       // 2141
    addUnitAlias('date', 'D');                                                                                         // 2142
                                                                                                                       // 2143
    // PARSING                                                                                                         // 2144
                                                                                                                       // 2145
    addRegexToken('D',  match1to2);                                                                                    // 2146
    addRegexToken('DD', match1to2, match2);                                                                            // 2147
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 2148
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 2149
    });                                                                                                                // 2150
                                                                                                                       // 2151
    addParseToken(['D', 'DD'], DATE);                                                                                  // 2152
    addParseToken('Do', function (input, array) {                                                                      // 2153
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 2154
    });                                                                                                                // 2155
                                                                                                                       // 2156
    // MOMENTS                                                                                                         // 2157
                                                                                                                       // 2158
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 2159
                                                                                                                       // 2160
    addFormatToken('d', 0, 'do', 'day');                                                                               // 2161
                                                                                                                       // 2162
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 2163
        return this.localeData().weekdaysMin(this, format);                                                            // 2164
    });                                                                                                                // 2165
                                                                                                                       // 2166
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 2167
        return this.localeData().weekdaysShort(this, format);                                                          // 2168
    });                                                                                                                // 2169
                                                                                                                       // 2170
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 2171
        return this.localeData().weekdays(this, format);                                                               // 2172
    });                                                                                                                // 2173
                                                                                                                       // 2174
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 2175
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 2176
                                                                                                                       // 2177
    // ALIASES                                                                                                         // 2178
                                                                                                                       // 2179
    addUnitAlias('day', 'd');                                                                                          // 2180
    addUnitAlias('weekday', 'e');                                                                                      // 2181
    addUnitAlias('isoWeekday', 'E');                                                                                   // 2182
                                                                                                                       // 2183
    // PARSING                                                                                                         // 2184
                                                                                                                       // 2185
    addRegexToken('d',    match1to2);                                                                                  // 2186
    addRegexToken('e',    match1to2);                                                                                  // 2187
    addRegexToken('E',    match1to2);                                                                                  // 2188
    addRegexToken('dd',   matchWord);                                                                                  // 2189
    addRegexToken('ddd',  matchWord);                                                                                  // 2190
    addRegexToken('dddd', matchWord);                                                                                  // 2191
                                                                                                                       // 2192
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {                                          // 2193
        var weekday = config._locale.weekdaysParse(input);                                                             // 2194
        // if we didn't get a weekday name, mark the date as invalid                                                   // 2195
        if (weekday != null) {                                                                                         // 2196
            week.d = weekday;                                                                                          // 2197
        } else {                                                                                                       // 2198
            config._pf.invalidWeekday = input;                                                                         // 2199
        }                                                                                                              // 2200
    });                                                                                                                // 2201
                                                                                                                       // 2202
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 2203
        week[token] = toInt(input);                                                                                    // 2204
    });                                                                                                                // 2205
                                                                                                                       // 2206
    // HELPERS                                                                                                         // 2207
                                                                                                                       // 2208
    function parseWeekday(input, locale) {                                                                             // 2209
        if (typeof input === 'string') {                                                                               // 2210
            if (!isNaN(input)) {                                                                                       // 2211
                input = parseInt(input, 10);                                                                           // 2212
            }                                                                                                          // 2213
            else {                                                                                                     // 2214
                input = locale.weekdaysParse(input);                                                                   // 2215
                if (typeof input !== 'number') {                                                                       // 2216
                    return null;                                                                                       // 2217
                }                                                                                                      // 2218
            }                                                                                                          // 2219
        }                                                                                                              // 2220
        return input;                                                                                                  // 2221
    }                                                                                                                  // 2222
                                                                                                                       // 2223
    // LOCALES                                                                                                         // 2224
                                                                                                                       // 2225
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 2226
    function localeWeekdays (m) {                                                                                      // 2227
        return this._weekdays[m.day()];                                                                                // 2228
    }                                                                                                                  // 2229
                                                                                                                       // 2230
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 2231
    function localeWeekdaysShort (m) {                                                                                 // 2232
        return this._weekdaysShort[m.day()];                                                                           // 2233
    }                                                                                                                  // 2234
                                                                                                                       // 2235
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 2236
    function localeWeekdaysMin (m) {                                                                                   // 2237
        return this._weekdaysMin[m.day()];                                                                             // 2238
    }                                                                                                                  // 2239
                                                                                                                       // 2240
    function localeWeekdaysParse (weekdayName) {                                                                       // 2241
        var i, mom, regex;                                                                                             // 2242
                                                                                                                       // 2243
        if (!this._weekdaysParse) {                                                                                    // 2244
            this._weekdaysParse = [];                                                                                  // 2245
        }                                                                                                              // 2246
                                                                                                                       // 2247
        for (i = 0; i < 7; i++) {                                                                                      // 2248
            // make the regex if we don't have it already                                                              // 2249
            if (!this._weekdaysParse[i]) {                                                                             // 2250
                mom = local__createLocal([2000, 1]).day(i);                                                            // 2251
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 2253
            }                                                                                                          // 2254
            // test the regex                                                                                          // 2255
            if (this._weekdaysParse[i].test(weekdayName)) {                                                            // 2256
                return i;                                                                                              // 2257
            }                                                                                                          // 2258
        }                                                                                                              // 2259
    }                                                                                                                  // 2260
                                                                                                                       // 2261
    // MOMENTS                                                                                                         // 2262
                                                                                                                       // 2263
    function getSetDayOfWeek (input) {                                                                                 // 2264
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 2265
        if (input != null) {                                                                                           // 2266
            input = parseWeekday(input, this.localeData());                                                            // 2267
            return this.add(input - day, 'd');                                                                         // 2268
        } else {                                                                                                       // 2269
            return day;                                                                                                // 2270
        }                                                                                                              // 2271
    }                                                                                                                  // 2272
                                                                                                                       // 2273
    function getSetLocaleDayOfWeek (input) {                                                                           // 2274
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 2275
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 2276
    }                                                                                                                  // 2277
                                                                                                                       // 2278
    function getSetISODayOfWeek (input) {                                                                              // 2279
        // behaves the same as moment#day except                                                                       // 2280
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 2281
        // as a setter, sunday should belong to the previous week.                                                     // 2282
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);                         // 2283
    }                                                                                                                  // 2284
                                                                                                                       // 2285
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 2286
    addFormatToken('h', ['hh', 2], 0, function () {                                                                    // 2287
        return this.hours() % 12 || 12;                                                                                // 2288
    });                                                                                                                // 2289
                                                                                                                       // 2290
    function meridiem (token, lowercase) {                                                                             // 2291
        addFormatToken(token, 0, 0, function () {                                                                      // 2292
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 2293
        });                                                                                                            // 2294
    }                                                                                                                  // 2295
                                                                                                                       // 2296
    meridiem('a', true);                                                                                               // 2297
    meridiem('A', false);                                                                                              // 2298
                                                                                                                       // 2299
    // ALIASES                                                                                                         // 2300
                                                                                                                       // 2301
    addUnitAlias('hour', 'h');                                                                                         // 2302
                                                                                                                       // 2303
    // PARSING                                                                                                         // 2304
                                                                                                                       // 2305
    function matchMeridiem (isStrict, locale) {                                                                        // 2306
        return locale._meridiemParse;                                                                                  // 2307
    }                                                                                                                  // 2308
                                                                                                                       // 2309
    addRegexToken('a',  matchMeridiem);                                                                                // 2310
    addRegexToken('A',  matchMeridiem);                                                                                // 2311
    addRegexToken('H',  match1to2);                                                                                    // 2312
    addRegexToken('h',  match1to2);                                                                                    // 2313
    addRegexToken('HH', match1to2, match2);                                                                            // 2314
    addRegexToken('hh', match1to2, match2);                                                                            // 2315
                                                                                                                       // 2316
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 2317
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 2318
        config._isPm = config._locale.isPM(input);                                                                     // 2319
        config._meridiem = input;                                                                                      // 2320
    });                                                                                                                // 2321
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 2322
        array[HOUR] = toInt(input);                                                                                    // 2323
        config._pf.bigHour = true;                                                                                     // 2324
    });                                                                                                                // 2325
                                                                                                                       // 2326
    // LOCALES                                                                                                         // 2327
                                                                                                                       // 2328
    function localeIsPM (input) {                                                                                      // 2329
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 2330
        // Using charAt should be more compatible.                                                                     // 2331
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 2332
    }                                                                                                                  // 2333
                                                                                                                       // 2334
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 2335
    function localeMeridiem (hours, minutes, isLower) {                                                                // 2336
        if (hours > 11) {                                                                                              // 2337
            return isLower ? 'pm' : 'PM';                                                                              // 2338
        } else {                                                                                                       // 2339
            return isLower ? 'am' : 'AM';                                                                              // 2340
        }                                                                                                              // 2341
    }                                                                                                                  // 2342
                                                                                                                       // 2343
                                                                                                                       // 2344
    // MOMENTS                                                                                                         // 2345
                                                                                                                       // 2346
    // Setting the hour should keep the time, because the user explicitly                                              // 2347
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 2348
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 2349
    // this rule.                                                                                                      // 2350
    var getSetHour = makeGetSet('Hours', true);                                                                        // 2351
                                                                                                                       // 2352
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 2353
                                                                                                                       // 2354
    // ALIASES                                                                                                         // 2355
                                                                                                                       // 2356
    addUnitAlias('minute', 'm');                                                                                       // 2357
                                                                                                                       // 2358
    // PARSING                                                                                                         // 2359
                                                                                                                       // 2360
    addRegexToken('m',  match1to2);                                                                                    // 2361
    addRegexToken('mm', match1to2, match2);                                                                            // 2362
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 2363
                                                                                                                       // 2364
    // MOMENTS                                                                                                         // 2365
                                                                                                                       // 2366
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 2367
                                                                                                                       // 2368
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 2369
                                                                                                                       // 2370
    // ALIASES                                                                                                         // 2371
                                                                                                                       // 2372
    addUnitAlias('second', 's');                                                                                       // 2373
                                                                                                                       // 2374
    // PARSING                                                                                                         // 2375
                                                                                                                       // 2376
    addRegexToken('s',  match1to2);                                                                                    // 2377
    addRegexToken('ss', match1to2, match2);                                                                            // 2378
    addParseToken(['s', 'ss'], SECOND);                                                                                // 2379
                                                                                                                       // 2380
    // MOMENTS                                                                                                         // 2381
                                                                                                                       // 2382
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 2383
                                                                                                                       // 2384
    addFormatToken('S', 0, 0, function () {                                                                            // 2385
        return ~~(this.millisecond() / 100);                                                                           // 2386
    });                                                                                                                // 2387
                                                                                                                       // 2388
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 2389
        return ~~(this.millisecond() / 10);                                                                            // 2390
    });                                                                                                                // 2391
                                                                                                                       // 2392
    function millisecond__milliseconds (token) {                                                                       // 2393
        addFormatToken(0, [token, 3], 0, 'millisecond');                                                               // 2394
    }                                                                                                                  // 2395
                                                                                                                       // 2396
    millisecond__milliseconds('SSS');                                                                                  // 2397
    millisecond__milliseconds('SSSS');                                                                                 // 2398
                                                                                                                       // 2399
    // ALIASES                                                                                                         // 2400
                                                                                                                       // 2401
    addUnitAlias('millisecond', 'ms');                                                                                 // 2402
                                                                                                                       // 2403
    // PARSING                                                                                                         // 2404
                                                                                                                       // 2405
    addRegexToken('S',    match1to3, match1);                                                                          // 2406
    addRegexToken('SS',   match1to3, match2);                                                                          // 2407
    addRegexToken('SSS',  match1to3, match3);                                                                          // 2408
    addRegexToken('SSSS', matchUnsigned);                                                                              // 2409
    addParseToken(['S', 'SS', 'SSS', 'SSSS'], function (input, array) {                                                // 2410
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 2411
    });                                                                                                                // 2412
                                                                                                                       // 2413
    // MOMENTS                                                                                                         // 2414
                                                                                                                       // 2415
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 2416
                                                                                                                       // 2417
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 2418
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 2419
                                                                                                                       // 2420
    // MOMENTS                                                                                                         // 2421
                                                                                                                       // 2422
    function getZoneAbbr () {                                                                                          // 2423
        return this._isUTC ? 'UTC' : '';                                                                               // 2424
    }                                                                                                                  // 2425
                                                                                                                       // 2426
    function getZoneName () {                                                                                          // 2427
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 2428
    }                                                                                                                  // 2429
                                                                                                                       // 2430
    var momentPrototype__proto = Moment.prototype;                                                                     // 2431
                                                                                                                       // 2432
    momentPrototype__proto.add          = add_subtract__add;                                                           // 2433
    momentPrototype__proto.calendar     = moment_calendar__calendar;                                                   // 2434
    momentPrototype__proto.clone        = clone;                                                                       // 2435
    momentPrototype__proto.diff         = diff;                                                                        // 2436
    momentPrototype__proto.endOf        = endOf;                                                                       // 2437
    momentPrototype__proto.format       = format;                                                                      // 2438
    momentPrototype__proto.from         = from;                                                                        // 2439
    momentPrototype__proto.fromNow      = fromNow;                                                                     // 2440
    momentPrototype__proto.get          = getSet;                                                                      // 2441
    momentPrototype__proto.invalidAt    = invalidAt;                                                                   // 2442
    momentPrototype__proto.isAfter      = isAfter;                                                                     // 2443
    momentPrototype__proto.isBefore     = isBefore;                                                                    // 2444
    momentPrototype__proto.isBetween    = isBetween;                                                                   // 2445
    momentPrototype__proto.isSame       = isSame;                                                                      // 2446
    momentPrototype__proto.isValid      = moment_valid__isValid;                                                       // 2447
    momentPrototype__proto.lang         = lang;                                                                        // 2448
    momentPrototype__proto.locale       = locale;                                                                      // 2449
    momentPrototype__proto.localeData   = localeData;                                                                  // 2450
    momentPrototype__proto.max          = prototypeMax;                                                                // 2451
    momentPrototype__proto.min          = prototypeMin;                                                                // 2452
    momentPrototype__proto.parsingFlags = parsingFlags;                                                                // 2453
    momentPrototype__proto.set          = getSet;                                                                      // 2454
    momentPrototype__proto.startOf      = startOf;                                                                     // 2455
    momentPrototype__proto.subtract     = add_subtract__subtract;                                                      // 2456
    momentPrototype__proto.toArray      = toArray;                                                                     // 2457
    momentPrototype__proto.toDate       = toDate;                                                                      // 2458
    momentPrototype__proto.toISOString  = moment_format__toISOString;                                                  // 2459
    momentPrototype__proto.toJSON       = moment_format__toISOString;                                                  // 2460
    momentPrototype__proto.toString     = toString;                                                                    // 2461
    momentPrototype__proto.unix         = unix;                                                                        // 2462
    momentPrototype__proto.valueOf      = to_type__valueOf;                                                            // 2463
                                                                                                                       // 2464
    // Year                                                                                                            // 2465
    momentPrototype__proto.year       = getSetYear;                                                                    // 2466
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 2467
                                                                                                                       // 2468
    // Week Year                                                                                                       // 2469
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 2470
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 2471
                                                                                                                       // 2472
    // Quarter                                                                                                         // 2473
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 2474
                                                                                                                       // 2475
    // Month                                                                                                           // 2476
    momentPrototype__proto.month       = getSetMonth;                                                                  // 2477
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 2478
                                                                                                                       // 2479
    // Week                                                                                                            // 2480
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 2481
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 2482
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 2483
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 2484
                                                                                                                       // 2485
    // Day                                                                                                             // 2486
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 2487
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 2488
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 2489
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 2490
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 2491
                                                                                                                       // 2492
    // Hour                                                                                                            // 2493
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 2494
                                                                                                                       // 2495
    // Minute                                                                                                          // 2496
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 2497
                                                                                                                       // 2498
    // Second                                                                                                          // 2499
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 2500
                                                                                                                       // 2501
    // Millisecond                                                                                                     // 2502
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 2503
                                                                                                                       // 2504
    // Offset                                                                                                          // 2505
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 2506
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 2507
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 2508
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 2509
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 2510
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 2511
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;                                         // 2512
    momentPrototype__proto.isLocal              = isLocal;                                                             // 2513
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 2514
    momentPrototype__proto.isUtc                = isUtc;                                                               // 2515
    momentPrototype__proto.isUTC                = isUtc;                                                               // 2516
                                                                                                                       // 2517
    // Timezone                                                                                                        // 2518
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 2519
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 2520
                                                                                                                       // 2521
    // Deprecations                                                                                                    // 2522
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 2523
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 2524
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 2525
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
                                                                                                                       // 2527
    var momentPrototype = momentPrototype__proto;                                                                      // 2528
                                                                                                                       // 2529
    function moment__createUnix (input) {                                                                              // 2530
        return local__createLocal(input * 1000);                                                                       // 2531
    }                                                                                                                  // 2532
                                                                                                                       // 2533
    function moment__createInZone () {                                                                                 // 2534
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 2535
    }                                                                                                                  // 2536
                                                                                                                       // 2537
    var defaultCalendar = {                                                                                            // 2538
        sameDay : '[Today at] LT',                                                                                     // 2539
        nextDay : '[Tomorrow at] LT',                                                                                  // 2540
        nextWeek : 'dddd [at] LT',                                                                                     // 2541
        lastDay : '[Yesterday at] LT',                                                                                 // 2542
        lastWeek : '[Last] dddd [at] LT',                                                                              // 2543
        sameElse : 'L'                                                                                                 // 2544
    };                                                                                                                 // 2545
                                                                                                                       // 2546
    function locale_calendar__calendar (key, mom, now) {                                                               // 2547
        var output = this._calendar[key];                                                                              // 2548
        return typeof output === 'function' ? output.call(mom, now) : output;                                          // 2549
    }                                                                                                                  // 2550
                                                                                                                       // 2551
    var defaultLongDateFormat = {                                                                                      // 2552
        LTS  : 'h:mm:ss A',                                                                                            // 2553
        LT   : 'h:mm A',                                                                                               // 2554
        L    : 'MM/DD/YYYY',                                                                                           // 2555
        LL   : 'MMMM D, YYYY',                                                                                         // 2556
        LLL  : 'MMMM D, YYYY LT',                                                                                      // 2557
        LLLL : 'dddd, MMMM D, YYYY LT'                                                                                 // 2558
    };                                                                                                                 // 2559
                                                                                                                       // 2560
    function longDateFormat (key) {                                                                                    // 2561
        var output = this._longDateFormat[key];                                                                        // 2562
        if (!output && this._longDateFormat[key.toUpperCase()]) {                                                      // 2563
            output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {              // 2564
                return val.slice(1);                                                                                   // 2565
            });                                                                                                        // 2566
            this._longDateFormat[key] = output;                                                                        // 2567
        }                                                                                                              // 2568
        return output;                                                                                                 // 2569
    }                                                                                                                  // 2570
                                                                                                                       // 2571
    var defaultInvalidDate = 'Invalid date';                                                                           // 2572
                                                                                                                       // 2573
    function invalidDate () {                                                                                          // 2574
        return this._invalidDate;                                                                                      // 2575
    }                                                                                                                  // 2576
                                                                                                                       // 2577
    var defaultOrdinal = '%d';                                                                                         // 2578
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 2579
                                                                                                                       // 2580
    function ordinal (number) {                                                                                        // 2581
        return this._ordinal.replace('%d', number);                                                                    // 2582
    }                                                                                                                  // 2583
                                                                                                                       // 2584
    function preParsePostFormat (string) {                                                                             // 2585
        return string;                                                                                                 // 2586
    }                                                                                                                  // 2587
                                                                                                                       // 2588
    var defaultRelativeTime = {                                                                                        // 2589
        future : 'in %s',                                                                                              // 2590
        past   : '%s ago',                                                                                             // 2591
        s  : 'a few seconds',                                                                                          // 2592
        m  : 'a minute',                                                                                               // 2593
        mm : '%d minutes',                                                                                             // 2594
        h  : 'an hour',                                                                                                // 2595
        hh : '%d hours',                                                                                               // 2596
        d  : 'a day',                                                                                                  // 2597
        dd : '%d days',                                                                                                // 2598
        M  : 'a month',                                                                                                // 2599
        MM : '%d months',                                                                                              // 2600
        y  : 'a year',                                                                                                 // 2601
        yy : '%d years'                                                                                                // 2602
    };                                                                                                                 // 2603
                                                                                                                       // 2604
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 2605
        var output = this._relativeTime[string];                                                                       // 2606
        return (typeof output === 'function') ?                                                                        // 2607
            output(number, withoutSuffix, string, isFuture) :                                                          // 2608
            output.replace(/%d/i, number);                                                                             // 2609
    }                                                                                                                  // 2610
                                                                                                                       // 2611
    function pastFuture (diff, output) {                                                                               // 2612
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 2613
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);                          // 2614
    }                                                                                                                  // 2615
                                                                                                                       // 2616
    function locale_set__set (config) {                                                                                // 2617
        var prop, i;                                                                                                   // 2618
        for (i in config) {                                                                                            // 2619
            prop = config[i];                                                                                          // 2620
            if (typeof prop === 'function') {                                                                          // 2621
                this[i] = prop;                                                                                        // 2622
            } else {                                                                                                   // 2623
                this['_' + i] = prop;                                                                                  // 2624
            }                                                                                                          // 2625
        }                                                                                                              // 2626
        // Lenient ordinal parsing accepts just a number in addition to                                                // 2627
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 2628
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);                    // 2629
    }                                                                                                                  // 2630
                                                                                                                       // 2631
    var prototype__proto = Locale.prototype;                                                                           // 2632
                                                                                                                       // 2633
    prototype__proto._calendar       = defaultCalendar;                                                                // 2634
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 2635
    prototype__proto._longDateFormat = defaultLongDateFormat;                                                          // 2636
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 2637
    prototype__proto._invalidDate    = defaultInvalidDate;                                                             // 2638
    prototype__proto.invalidDate     = invalidDate;                                                                    // 2639
    prototype__proto._ordinal        = defaultOrdinal;                                                                 // 2640
    prototype__proto.ordinal         = ordinal;                                                                        // 2641
    prototype__proto._ordinalParse   = defaultOrdinalParse;                                                            // 2642
    prototype__proto.preparse        = preParsePostFormat;                                                             // 2643
    prototype__proto.postformat      = preParsePostFormat;                                                             // 2644
    prototype__proto._relativeTime   = defaultRelativeTime;                                                            // 2645
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 2646
    prototype__proto.pastFuture      = pastFuture;                                                                     // 2647
    prototype__proto.set             = locale_set__set;                                                                // 2648
                                                                                                                       // 2649
    // Month                                                                                                           // 2650
    prototype__proto.months       =        localeMonths;                                                               // 2651
    prototype__proto._months      = defaultLocaleMonths;                                                               // 2652
    prototype__proto.monthsShort  =        localeMonthsShort;                                                          // 2653
    prototype__proto._monthsShort = defaultLocaleMonthsShort;                                                          // 2654
    prototype__proto.monthsParse  =        localeMonthsParse;                                                          // 2655
                                                                                                                       // 2656
    // Week                                                                                                            // 2657
    prototype__proto.week = localeWeek;                                                                                // 2658
    prototype__proto._week = defaultLocaleWeek;                                                                        // 2659
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 2660
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 2661
                                                                                                                       // 2662
    // Day of Week                                                                                                     // 2663
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 2664
    prototype__proto._weekdays      = defaultLocaleWeekdays;                                                           // 2665
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 2666
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;                                                        // 2667
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 2668
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;                                                      // 2669
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 2670
                                                                                                                       // 2671
    // Hours                                                                                                           // 2672
    prototype__proto.isPM = localeIsPM;                                                                                // 2673
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;                                                      // 2674
    prototype__proto.meridiem = localeMeridiem;                                                                        // 2675
                                                                                                                       // 2676
    function lists__get (format, index, field, setter) {                                                               // 2677
        var locale = locale_locales__getLocale();                                                                      // 2678
        var utc = create_utc__createUTC().set(setter, index);                                                          // 2679
        return locale[field](utc, format);                                                                             // 2680
    }                                                                                                                  // 2681
                                                                                                                       // 2682
    function list (format, index, field, count, setter) {                                                              // 2683
        if (typeof format === 'number') {                                                                              // 2684
            index = format;                                                                                            // 2685
            format = undefined;                                                                                        // 2686
        }                                                                                                              // 2687
                                                                                                                       // 2688
        format = format || '';                                                                                         // 2689
                                                                                                                       // 2690
        if (index != null) {                                                                                           // 2691
            return lists__get(format, index, field, setter);                                                           // 2692
        }                                                                                                              // 2693
                                                                                                                       // 2694
        var i;                                                                                                         // 2695
        var out = [];                                                                                                  // 2696
        for (i = 0; i < count; i++) {                                                                                  // 2697
            out[i] = lists__get(format, i, field, setter);                                                             // 2698
        }                                                                                                              // 2699
        return out;                                                                                                    // 2700
    }                                                                                                                  // 2701
                                                                                                                       // 2702
    function lists__listMonths (format, index) {                                                                       // 2703
        return list(format, index, 'months', 12, 'month');                                                             // 2704
    }                                                                                                                  // 2705
                                                                                                                       // 2706
    function lists__listMonthsShort (format, index) {                                                                  // 2707
        return list(format, index, 'monthsShort', 12, 'month');                                                        // 2708
    }                                                                                                                  // 2709
                                                                                                                       // 2710
    function lists__listWeekdays (format, index) {                                                                     // 2711
        return list(format, index, 'weekdays', 7, 'day');                                                              // 2712
    }                                                                                                                  // 2713
                                                                                                                       // 2714
    function lists__listWeekdaysShort (format, index) {                                                                // 2715
        return list(format, index, 'weekdaysShort', 7, 'day');                                                         // 2716
    }                                                                                                                  // 2717
                                                                                                                       // 2718
    function lists__listWeekdaysMin (format, index) {                                                                  // 2719
        return list(format, index, 'weekdaysMin', 7, 'day');                                                           // 2720
    }                                                                                                                  // 2721
                                                                                                                       // 2722
    locale_locales__getSetGlobalLocale('en', {                                                                         // 2723
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 2724
        ordinal : function (number) {                                                                                  // 2725
            var b = number % 10,                                                                                       // 2726
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 2727
                (b === 1) ? 'st' :                                                                                     // 2728
                (b === 2) ? 'nd' :                                                                                     // 2729
                (b === 3) ? 'rd' : 'th';                                                                               // 2730
            return number + output;                                                                                    // 2731
        }                                                                                                              // 2732
    });                                                                                                                // 2733
                                                                                                                       // 2734
    // Side effect imports                                                                                             // 2735
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
                                                                                                                       // 2738
    var mathAbs = Math.abs;                                                                                            // 2739
                                                                                                                       // 2740
    function duration_abs__abs () {                                                                                    // 2741
        var data           = this._data;                                                                               // 2742
                                                                                                                       // 2743
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 2744
        this._days         = mathAbs(this._days);                                                                      // 2745
        this._months       = mathAbs(this._months);                                                                    // 2746
                                                                                                                       // 2747
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 2748
        data.seconds       = mathAbs(data.seconds);                                                                    // 2749
        data.minutes       = mathAbs(data.minutes);                                                                    // 2750
        data.hours         = mathAbs(data.hours);                                                                      // 2751
        data.months        = mathAbs(data.months);                                                                     // 2752
        data.years         = mathAbs(data.years);                                                                      // 2753
                                                                                                                       // 2754
        return this;                                                                                                   // 2755
    }                                                                                                                  // 2756
                                                                                                                       // 2757
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 2758
        var other = create__createDuration(input, value);                                                              // 2759
                                                                                                                       // 2760
        duration._milliseconds += direction * other._milliseconds;                                                     // 2761
        duration._days         += direction * other._days;                                                             // 2762
        duration._months       += direction * other._months;                                                           // 2763
                                                                                                                       // 2764
        return duration._bubble();                                                                                     // 2765
    }                                                                                                                  // 2766
                                                                                                                       // 2767
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 2768
    function duration_add_subtract__add (input, value) {                                                               // 2769
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 2770
    }                                                                                                                  // 2771
                                                                                                                       // 2772
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 2773
    function duration_add_subtract__subtract (input, value) {                                                          // 2774
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 2775
    }                                                                                                                  // 2776
                                                                                                                       // 2777
    function bubble () {                                                                                               // 2778
        var milliseconds = this._milliseconds;                                                                         // 2779
        var days         = this._days;                                                                                 // 2780
        var months       = this._months;                                                                               // 2781
        var data         = this._data;                                                                                 // 2782
        var seconds, minutes, hours, years = 0;                                                                        // 2783
                                                                                                                       // 2784
        // The following code bubbles up values, see the tests for                                                     // 2785
        // examples of what that means.                                                                                // 2786
        data.milliseconds = milliseconds % 1000;                                                                       // 2787
                                                                                                                       // 2788
        seconds           = absFloor(milliseconds / 1000);                                                             // 2789
        data.seconds      = seconds % 60;                                                                              // 2790
                                                                                                                       // 2791
        minutes           = absFloor(seconds / 60);                                                                    // 2792
        data.minutes      = minutes % 60;                                                                              // 2793
                                                                                                                       // 2794
        hours             = absFloor(minutes / 60);                                                                    // 2795
        data.hours        = hours % 24;                                                                                // 2796
                                                                                                                       // 2797
        days += absFloor(hours / 24);                                                                                  // 2798
                                                                                                                       // 2799
        // Accurately convert days to years, assume start from year 0.                                                 // 2800
        years = absFloor(daysToYears(days));                                                                           // 2801
        days -= absFloor(yearsToDays(years));                                                                          // 2802
                                                                                                                       // 2803
        // 30 days to a month                                                                                          // 2804
        // TODO (iskren): Use anchor date (like 1st Jan) to compute this.                                              // 2805
        months += absFloor(days / 30);                                                                                 // 2806
        days   %= 30;                                                                                                  // 2807
                                                                                                                       // 2808
        // 12 months -> 1 year                                                                                         // 2809
        years  += absFloor(months / 12);                                                                               // 2810
        months %= 12;                                                                                                  // 2811
                                                                                                                       // 2812
        data.days   = days;                                                                                            // 2813
        data.months = months;                                                                                          // 2814
        data.years  = years;                                                                                           // 2815
                                                                                                                       // 2816
        return this;                                                                                                   // 2817
    }                                                                                                                  // 2818
                                                                                                                       // 2819
    function daysToYears (days) {                                                                                      // 2820
        // 400 years have 146097 days (taking into account leap year rules)                                            // 2821
        return days * 400 / 146097;                                                                                    // 2822
    }                                                                                                                  // 2823
                                                                                                                       // 2824
    function yearsToDays (years) {                                                                                     // 2825
        // years * 365 + absFloor(years / 4) -                                                                         // 2826
        //     absFloor(years / 100) + absFloor(years / 400);                                                          // 2827
        return years * 146097 / 400;                                                                                   // 2828
    }                                                                                                                  // 2829
                                                                                                                       // 2830
    function as (units) {                                                                                              // 2831
        var days;                                                                                                      // 2832
        var months;                                                                                                    // 2833
        var milliseconds = this._milliseconds;                                                                         // 2834
                                                                                                                       // 2835
        units = normalizeUnits(units);                                                                                 // 2836
                                                                                                                       // 2837
        if (units === 'month' || units === 'year') {                                                                   // 2838
            days   = this._days   + milliseconds / 864e5;                                                              // 2839
            months = this._months + daysToYears(days) * 12;                                                            // 2840
            return units === 'month' ? months : months / 12;                                                           // 2841
        } else {                                                                                                       // 2842
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 2843
            days = this._days + Math.round(yearsToDays(this._months / 12));                                            // 2844
            switch (units) {                                                                                           // 2845
                case 'week'   : return days / 7            + milliseconds / 6048e5;                                    // 2846
                case 'day'    : return days                + milliseconds / 864e5;                                     // 2847
                case 'hour'   : return days * 24           + milliseconds / 36e5;                                      // 2848
                case 'minute' : return days * 24 * 60      + milliseconds / 6e4;                                       // 2849
                case 'second' : return days * 24 * 60 * 60 + milliseconds / 1000;                                      // 2850
                // Math.floor prevents floating point math errors here                                                 // 2851
                case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + milliseconds;                      // 2852
                default: throw new Error('Unknown unit ' + units);                                                     // 2853
            }                                                                                                          // 2854
        }                                                                                                              // 2855
    }                                                                                                                  // 2856
                                                                                                                       // 2857
    // TODO: Use this.as('ms')?                                                                                        // 2858
    function duration_as__valueOf () {                                                                                 // 2859
        return (                                                                                                       // 2860
            this._milliseconds +                                                                                       // 2861
            this._days * 864e5 +                                                                                       // 2862
            (this._months % 12) * 2592e6 +                                                                             // 2863
            toInt(this._months / 12) * 31536e6                                                                         // 2864
        );                                                                                                             // 2865
    }                                                                                                                  // 2866
                                                                                                                       // 2867
    function makeAs (alias) {                                                                                          // 2868
        return function () {                                                                                           // 2869
            return this.as(alias);                                                                                     // 2870
        };                                                                                                             // 2871
    }                                                                                                                  // 2872
                                                                                                                       // 2873
    var asMilliseconds = makeAs('ms');                                                                                 // 2874
    var asSeconds      = makeAs('s');                                                                                  // 2875
    var asMinutes      = makeAs('m');                                                                                  // 2876
    var asHours        = makeAs('h');                                                                                  // 2877
    var asDays         = makeAs('d');                                                                                  // 2878
    var asWeeks        = makeAs('w');                                                                                  // 2879
    var asMonths       = makeAs('M');                                                                                  // 2880
    var asYears        = makeAs('y');                                                                                  // 2881
                                                                                                                       // 2882
    function duration_get__get (units) {                                                                               // 2883
        units = normalizeUnits(units);                                                                                 // 2884
        return this[units + 's']();                                                                                    // 2885
    }                                                                                                                  // 2886
                                                                                                                       // 2887
    function makeGetter(name) {                                                                                        // 2888
        return function () {                                                                                           // 2889
            return this._data[name];                                                                                   // 2890
        };                                                                                                             // 2891
    }                                                                                                                  // 2892
                                                                                                                       // 2893
    var duration_get__milliseconds = makeGetter('milliseconds');                                                       // 2894
    var seconds      = makeGetter('seconds');                                                                          // 2895
    var minutes      = makeGetter('minutes');                                                                          // 2896
    var hours        = makeGetter('hours');                                                                            // 2897
    var days         = makeGetter('days');                                                                             // 2898
    var months       = makeGetter('months');                                                                           // 2899
    var years        = makeGetter('years');                                                                            // 2900
                                                                                                                       // 2901
    function weeks () {                                                                                                // 2902
        return absFloor(this.days() / 7);                                                                              // 2903
    }                                                                                                                  // 2904
                                                                                                                       // 2905
    var round = Math.round;                                                                                            // 2906
    var thresholds = {                                                                                                 // 2907
        s: 45,  // seconds to minute                                                                                   // 2908
        m: 45,  // minutes to hour                                                                                     // 2909
        h: 22,  // hours to day                                                                                        // 2910
        d: 26,  // days to month                                                                                       // 2911
        M: 11   // months to year                                                                                      // 2912
    };                                                                                                                 // 2913
                                                                                                                       // 2914
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 2915
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 2916
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 2917
    }                                                                                                                  // 2918
                                                                                                                       // 2919
    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                 // 2920
        var duration = create__createDuration(posNegDuration).abs();                                                   // 2921
        var seconds  = round(duration.as('s'));                                                                        // 2922
        var minutes  = round(duration.as('m'));                                                                        // 2923
        var hours    = round(duration.as('h'));                                                                        // 2924
        var days     = round(duration.as('d'));                                                                        // 2925
        var months   = round(duration.as('M'));                                                                        // 2926
        var years    = round(duration.as('y'));                                                                        // 2927
                                                                                                                       // 2928
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 2929
                minutes === 1          && ['m']           ||                                                           // 2930
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 2931
                hours   === 1          && ['h']           ||                                                           // 2932
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 2933
                days    === 1          && ['d']           ||                                                           // 2934
                days    < thresholds.d && ['dd', days]    ||                                                           // 2935
                months  === 1          && ['M']           ||                                                           // 2936
                months  < thresholds.M && ['MM', months]  ||                                                           // 2937
                years   === 1          && ['y']           || ['yy', years];                                            // 2938
                                                                                                                       // 2939
        a[2] = withoutSuffix;                                                                                          // 2940
        a[3] = +posNegDuration > 0;                                                                                    // 2941
        a[4] = locale;                                                                                                 // 2942
        return substituteTimeAgo.apply(null, a);                                                                       // 2943
    }                                                                                                                  // 2944
                                                                                                                       // 2945
    // This function allows you to set a threshold for relative time strings                                           // 2946
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {                                       // 2947
        if (thresholds[threshold] === undefined) {                                                                     // 2948
            return false;                                                                                              // 2949
        }                                                                                                              // 2950
        if (limit === undefined) {                                                                                     // 2951
            return thresholds[threshold];                                                                              // 2952
        }                                                                                                              // 2953
        thresholds[threshold] = limit;                                                                                 // 2954
        return true;                                                                                                   // 2955
    }                                                                                                                  // 2956
                                                                                                                       // 2957
    function humanize (withSuffix) {                                                                                   // 2958
        var locale = this.localeData();                                                                                // 2959
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);                                       // 2960
                                                                                                                       // 2961
        if (withSuffix) {                                                                                              // 2962
            output = locale.pastFuture(+this, output);                                                                 // 2963
        }                                                                                                              // 2964
                                                                                                                       // 2965
        return locale.postformat(output);                                                                              // 2966
    }                                                                                                                  // 2967
                                                                                                                       // 2968
    var iso_string__abs = Math.abs;                                                                                    // 2969
                                                                                                                       // 2970
    function iso_string__toISOString() {                                                                               // 2971
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 2972
        var Y = iso_string__abs(this.years());                                                                         // 2973
        var M = iso_string__abs(this.months());                                                                        // 2974
        var D = iso_string__abs(this.days());                                                                          // 2975
        var h = iso_string__abs(this.hours());                                                                         // 2976
        var m = iso_string__abs(this.minutes());                                                                       // 2977
        var s = iso_string__abs(this.seconds() + this.milliseconds() / 1000);                                          // 2978
        var total = this.asSeconds();                                                                                  // 2979
                                                                                                                       // 2980
        if (!total) {                                                                                                  // 2981
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 2982
            // but not other JS (goog.date)                                                                            // 2983
            return 'P0D';                                                                                              // 2984
        }                                                                                                              // 2985
                                                                                                                       // 2986
        return (total < 0 ? '-' : '') +                                                                                // 2987
            'P' +                                                                                                      // 2988
            (Y ? Y + 'Y' : '') +                                                                                       // 2989
            (M ? M + 'M' : '') +                                                                                       // 2990
            (D ? D + 'D' : '') +                                                                                       // 2991
            ((h || m || s) ? 'T' : '') +                                                                               // 2992
            (h ? h + 'H' : '') +                                                                                       // 2993
            (m ? m + 'M' : '') +                                                                                       // 2994
            (s ? s + 'S' : '');                                                                                        // 2995
    }                                                                                                                  // 2996
                                                                                                                       // 2997
    var duration_prototype__proto = Duration.prototype;                                                                // 2998
                                                                                                                       // 2999
    duration_prototype__proto.abs            = duration_abs__abs;                                                      // 3000
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 3001
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 3002
    duration_prototype__proto.as             = as;                                                                     // 3003
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 3004
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 3005
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 3006
    duration_prototype__proto.asHours        = asHours;                                                                // 3007
    duration_prototype__proto.asDays         = asDays;                                                                 // 3008
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 3009
    duration_prototype__proto.asMonths       = asMonths;                                                               // 3010
    duration_prototype__proto.asYears        = asYears;                                                                // 3011
    duration_prototype__proto.valueOf        = duration_as__valueOf;                                                   // 3012
    duration_prototype__proto._bubble        = bubble;                                                                 // 3013
    duration_prototype__proto.get            = duration_get__get;                                                      // 3014
    duration_prototype__proto.milliseconds   = duration_get__milliseconds;                                             // 3015
    duration_prototype__proto.seconds        = seconds;                                                                // 3016
    duration_prototype__proto.minutes        = minutes;                                                                // 3017
    duration_prototype__proto.hours          = hours;                                                                  // 3018
    duration_prototype__proto.days           = days;                                                                   // 3019
    duration_prototype__proto.weeks          = weeks;                                                                  // 3020
    duration_prototype__proto.months         = months;                                                                 // 3021
    duration_prototype__proto.years          = years;                                                                  // 3022
    duration_prototype__proto.humanize       = humanize;                                                               // 3023
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 3024
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 3025
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 3026
    duration_prototype__proto.locale         = locale;                                                                 // 3027
    duration_prototype__proto.localeData     = localeData;                                                             // 3028
                                                                                                                       // 3029
    // Deprecations                                                                                                    // 3030
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 3032
                                                                                                                       // 3033
    // Side effect imports                                                                                             // 3034
                                                                                                                       // 3035
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 3036
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 3037
                                                                                                                       // 3038
    // PARSING                                                                                                         // 3039
                                                                                                                       // 3040
    addRegexToken('x', matchSigned);                                                                                   // 3041
    addRegexToken('X', matchTimestamp);                                                                                // 3042
    addParseToken('X', function (input, array, config) {                                                               // 3043
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 3044
    });                                                                                                                // 3045
    addParseToken('x', function (input, array, config) {                                                               // 3046
        config._d = new Date(toInt(input));                                                                            // 3047
    });                                                                                                                // 3048
                                                                                                                       // 3049
    // Side effect imports                                                                                             // 3050
                                                                                                                       // 3051
                                                                                                                       // 3052
    utils_hooks__hooks.version = '2.10.3';                                                                             // 3053
                                                                                                                       // 3054
    setHookCallback(local__createLocal);                                                                               // 3055
                                                                                                                       // 3056
    utils_hooks__hooks.fn                    = momentPrototype;                                                        // 3057
    utils_hooks__hooks.min                   = min;                                                                    // 3058
    utils_hooks__hooks.max                   = max;                                                                    // 3059
    utils_hooks__hooks.utc                   = create_utc__createUTC;                                                  // 3060
    utils_hooks__hooks.unix                  = moment__createUnix;                                                     // 3061
    utils_hooks__hooks.months                = lists__listMonths;                                                      // 3062
    utils_hooks__hooks.isDate                = isDate;                                                                 // 3063
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;                                     // 3064
    utils_hooks__hooks.invalid               = valid__createInvalid;                                                   // 3065
    utils_hooks__hooks.duration              = create__createDuration;                                                 // 3066
    utils_hooks__hooks.isMoment              = isMoment;                                                               // 3067
    utils_hooks__hooks.weekdays              = lists__listWeekdays;                                                    // 3068
    utils_hooks__hooks.parseZone             = moment__createInZone;                                                   // 3069
    utils_hooks__hooks.localeData            = locale_locales__getLocale;                                              // 3070
    utils_hooks__hooks.isDuration            = isDuration;                                                             // 3071
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;                                                 // 3072
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                 // 3073
    utils_hooks__hooks.defineLocale          = defineLocale;                                                           // 3074
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                               // 3075
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;                                                         // 3076
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;                         // 3077
                                                                                                                       // 3078
    var _moment = utils_hooks__hooks;                                                                                  // 3079
                                                                                                                       // 3080
    return _moment;                                                                                                    // 3081
                                                                                                                       // 3082
}));                                                                                                                   // 3083
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs:moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
try {                                                                                                                  // 3
    delete this.moment;                                                                                                // 4
} catch (e) {                                                                                                          // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['momentjs:moment'] = {
  moment: moment
};

})();

//# sourceMappingURL=momentjs_moment.js.map
