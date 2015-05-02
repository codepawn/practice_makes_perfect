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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rajit:bootstrap3-datepicker/lib/js/bootstrap-datepicker.js                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/*!                                                                                                                // 1
 * Datepicker for Bootstrap v1.4.0 (https://github.com/eternicode/bootstrap-datepicker)                            // 2
 *                                                                                                                 // 3
 * Copyright 2012 Stefan Petre                                                                                     // 4
 * Improvements by Andrew Rowls                                                                                    // 5
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)                             // 6
 */(function($, undefined){                                                                                        // 7
                                                                                                                   // 8
	function UTCDate(){                                                                                               // 9
		return new Date(Date.UTC.apply(Date, arguments));                                                                // 10
	}                                                                                                                 // 11
	function UTCToday(){                                                                                              // 12
		var today = new Date();                                                                                          // 13
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());                                          // 14
	}                                                                                                                 // 15
	function isUTCEquals(date1, date2) {                                                                              // 16
		return (                                                                                                         // 17
			date1.getUTCFullYear() === date2.getUTCFullYear() &&                                                            // 18
			date1.getUTCMonth() === date2.getUTCMonth() &&                                                                  // 19
			date1.getUTCDate() === date2.getUTCDate()                                                                       // 20
		);                                                                                                               // 21
	}                                                                                                                 // 22
	function alias(method){                                                                                           // 23
		return function(){                                                                                               // 24
			return this[method].apply(this, arguments);                                                                     // 25
		};                                                                                                               // 26
	}                                                                                                                 // 27
                                                                                                                   // 28
	var DateArray = (function(){                                                                                      // 29
		var extras = {                                                                                                   // 30
			get: function(i){                                                                                               // 31
				return this.slice(i)[0];                                                                                       // 32
			},                                                                                                              // 33
			contains: function(d){                                                                                          // 34
				// Array.indexOf is not cross-browser;                                                                         // 35
				// $.inArray doesn't work with Dates                                                                           // 36
				var val = d && d.valueOf();                                                                                    // 37
				for (var i=0, l=this.length; i < l; i++)                                                                       // 38
					if (this[i].valueOf() === val)                                                                                // 39
						return i;                                                                                                    // 40
				return -1;                                                                                                     // 41
			},                                                                                                              // 42
			remove: function(i){                                                                                            // 43
				this.splice(i,1);                                                                                              // 44
			},                                                                                                              // 45
			replace: function(new_array){                                                                                   // 46
				if (!new_array)                                                                                                // 47
					return;                                                                                                       // 48
				if (!$.isArray(new_array))                                                                                     // 49
					new_array = [new_array];                                                                                      // 50
				this.clear();                                                                                                  // 51
				this.push.apply(this, new_array);                                                                              // 52
			},                                                                                                              // 53
			clear: function(){                                                                                              // 54
				this.length = 0;                                                                                               // 55
			},                                                                                                              // 56
			copy: function(){                                                                                               // 57
				var a = new DateArray();                                                                                       // 58
				a.replace(this);                                                                                               // 59
				return a;                                                                                                      // 60
			}                                                                                                               // 61
		};                                                                                                               // 62
                                                                                                                   // 63
		return function(){                                                                                               // 64
			var a = [];                                                                                                     // 65
			a.push.apply(a, arguments);                                                                                     // 66
			$.extend(a, extras);                                                                                            // 67
			return a;                                                                                                       // 68
		};                                                                                                               // 69
	})();                                                                                                             // 70
                                                                                                                   // 71
                                                                                                                   // 72
	// Picker object                                                                                                  // 73
                                                                                                                   // 74
	var Datepicker = function(element, options){                                                                      // 75
		this._process_options(options);                                                                                  // 76
                                                                                                                   // 77
		this.dates = new DateArray();                                                                                    // 78
		this.viewDate = this.o.defaultViewDate;                                                                          // 79
		this.focusDate = null;                                                                                           // 80
                                                                                                                   // 81
		this.element = $(element);                                                                                       // 82
		this.isInline = false;                                                                                           // 83
		this.isInput = this.element.is('input');                                                                         // 84
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false; // 85
		this.hasInput = this.component && this.element.find('input').length;                                             // 86
		if (this.component && this.component.length === 0)                                                               // 87
			this.component = false;                                                                                         // 88
                                                                                                                   // 89
		this.picker = $(DPGlobal.template);                                                                              // 90
		this._buildEvents();                                                                                             // 91
		this._attachEvents();                                                                                            // 92
                                                                                                                   // 93
		if (this.isInline){                                                                                              // 94
			this.picker.addClass('datepicker-inline').appendTo(this.element);                                               // 95
		}                                                                                                                // 96
		else {                                                                                                           // 97
			this.picker.addClass('datepicker-dropdown dropdown-menu');                                                      // 98
		}                                                                                                                // 99
                                                                                                                   // 100
		if (this.o.rtl){                                                                                                 // 101
			this.picker.addClass('datepicker-rtl');                                                                         // 102
		}                                                                                                                // 103
                                                                                                                   // 104
		this.viewMode = this.o.startView;                                                                                // 105
                                                                                                                   // 106
		if (this.o.calendarWeeks)                                                                                        // 107
			this.picker.find('tfoot .today, tfoot .clear')                                                                  // 108
						.attr('colspan', function(i, val){                                                                           // 109
							return parseInt(val) + 1;                                                                                   // 110
						});                                                                                                          // 111
                                                                                                                   // 112
		this._allow_update = false;                                                                                      // 113
                                                                                                                   // 114
		this.setStartDate(this._o.startDate);                                                                            // 115
		this.setEndDate(this._o.endDate);                                                                                // 116
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);                                                           // 117
		this.setDatesDisabled(this.o.datesDisabled);                                                                     // 118
                                                                                                                   // 119
		this.fillDow();                                                                                                  // 120
		this.fillMonths();                                                                                               // 121
                                                                                                                   // 122
		this._allow_update = true;                                                                                       // 123
                                                                                                                   // 124
		this.update();                                                                                                   // 125
		this.showMode();                                                                                                 // 126
                                                                                                                   // 127
		if (this.isInline){                                                                                              // 128
			this.show();                                                                                                    // 129
		}                                                                                                                // 130
	};                                                                                                                // 131
                                                                                                                   // 132
	Datepicker.prototype = {                                                                                          // 133
		constructor: Datepicker,                                                                                         // 134
                                                                                                                   // 135
		_process_options: function(opts){                                                                                // 136
			// Store raw options for reference                                                                              // 137
			this._o = $.extend({}, this._o, opts);                                                                          // 138
			// Processed options                                                                                            // 139
			var o = this.o = $.extend({}, this._o);                                                                         // 140
                                                                                                                   // 141
			// Check if "de-DE" style date is available, if not language should                                             // 142
			// fallback to 2 letter code eg "de"                                                                            // 143
			var lang = o.language;                                                                                          // 144
			if (!dates[lang]){                                                                                              // 145
				lang = lang.split('-')[0];                                                                                     // 146
				if (!dates[lang])                                                                                              // 147
					lang = defaults.language;                                                                                     // 148
			}                                                                                                               // 149
			o.language = lang;                                                                                              // 150
                                                                                                                   // 151
			switch (o.startView){                                                                                           // 152
				case 2:                                                                                                        // 153
				case 'decade':                                                                                                 // 154
					o.startView = 2;                                                                                              // 155
					break;                                                                                                        // 156
				case 1:                                                                                                        // 157
				case 'year':                                                                                                   // 158
					o.startView = 1;                                                                                              // 159
					break;                                                                                                        // 160
				default:                                                                                                       // 161
					o.startView = 0;                                                                                              // 162
			}                                                                                                               // 163
                                                                                                                   // 164
			switch (o.minViewMode){                                                                                         // 165
				case 1:                                                                                                        // 166
				case 'months':                                                                                                 // 167
					o.minViewMode = 1;                                                                                            // 168
					break;                                                                                                        // 169
				case 2:                                                                                                        // 170
				case 'years':                                                                                                  // 171
					o.minViewMode = 2;                                                                                            // 172
					break;                                                                                                        // 173
				default:                                                                                                       // 174
					o.minViewMode = 0;                                                                                            // 175
			}                                                                                                               // 176
                                                                                                                   // 177
			o.startView = Math.max(o.startView, o.minViewMode);                                                             // 178
                                                                                                                   // 179
			// true, false, or Number > 0                                                                                   // 180
			if (o.multidate !== true){                                                                                      // 181
				o.multidate = Number(o.multidate) || false;                                                                    // 182
				if (o.multidate !== false)                                                                                     // 183
					o.multidate = Math.max(0, o.multidate);                                                                       // 184
			}                                                                                                               // 185
			o.multidateSeparator = String(o.multidateSeparator);                                                            // 186
                                                                                                                   // 187
			o.weekStart %= 7;                                                                                               // 188
			o.weekEnd = ((o.weekStart + 6) % 7);                                                                            // 189
                                                                                                                   // 190
			var format = DPGlobal.parseFormat(o.format);                                                                    // 191
			if (o.startDate !== -Infinity){                                                                                 // 192
				if (!!o.startDate){                                                                                            // 193
					if (o.startDate instanceof Date)                                                                              // 194
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));                                              // 195
					else                                                                                                          // 196
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);                                           // 197
				}                                                                                                              // 198
				else {                                                                                                         // 199
					o.startDate = -Infinity;                                                                                      // 200
				}                                                                                                              // 201
			}                                                                                                               // 202
			if (o.endDate !== Infinity){                                                                                    // 203
				if (!!o.endDate){                                                                                              // 204
					if (o.endDate instanceof Date)                                                                                // 205
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));                                                  // 206
					else                                                                                                          // 207
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);                                               // 208
				}                                                                                                              // 209
				else {                                                                                                         // 210
					o.endDate = Infinity;                                                                                         // 211
				}                                                                                                              // 212
			}                                                                                                               // 213
                                                                                                                   // 214
			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];                                                                // 215
			if (!$.isArray(o.daysOfWeekDisabled))                                                                           // 216
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);                                                   // 217
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){                                                 // 218
				return parseInt(d, 10);                                                                                        // 219
			});                                                                                                             // 220
                                                                                                                   // 221
			o.datesDisabled = o.datesDisabled||[];                                                                          // 222
			if (!$.isArray(o.datesDisabled)) {                                                                              // 223
				var datesDisabled = [];                                                                                        // 224
				datesDisabled.push(DPGlobal.parseDate(o.datesDisabled, format, o.language));                                   // 225
				o.datesDisabled = datesDisabled;                                                                               // 226
			}                                                                                                               // 227
			o.datesDisabled = $.map(o.datesDisabled,function(d){                                                            // 228
				return DPGlobal.parseDate(d, format, o.language);                                                              // 229
			});                                                                                                             // 230
                                                                                                                   // 231
			var plc = String(o.orientation).toLowerCase().split(/\s+/g),                                                    // 232
				_plc = o.orientation.toLowerCase();                                                                            // 233
			plc = $.grep(plc, function(word){                                                                               // 234
				return /^auto|left|right|top|bottom$/.test(word);                                                              // 235
			});                                                                                                             // 236
			o.orientation = {x: 'auto', y: 'auto'};                                                                         // 237
			if (!_plc || _plc === 'auto')                                                                                   // 238
				; // no action                                                                                                 // 239
			else if (plc.length === 1){                                                                                     // 240
				switch (plc[0]){                                                                                               // 241
					case 'top':                                                                                                   // 242
					case 'bottom':                                                                                                // 243
						o.orientation.y = plc[0];                                                                                    // 244
						break;                                                                                                       // 245
					case 'left':                                                                                                  // 246
					case 'right':                                                                                                 // 247
						o.orientation.x = plc[0];                                                                                    // 248
						break;                                                                                                       // 249
				}                                                                                                              // 250
			}                                                                                                               // 251
			else {                                                                                                          // 252
				_plc = $.grep(plc, function(word){                                                                             // 253
					return /^left|right$/.test(word);                                                                             // 254
				});                                                                                                            // 255
				o.orientation.x = _plc[0] || 'auto';                                                                           // 256
                                                                                                                   // 257
				_plc = $.grep(plc, function(word){                                                                             // 258
					return /^top|bottom$/.test(word);                                                                             // 259
				});                                                                                                            // 260
				o.orientation.y = _plc[0] || 'auto';                                                                           // 261
			}                                                                                                               // 262
			if (o.defaultViewDate) {                                                                                        // 263
				var year = o.defaultViewDate.year || new Date().getFullYear();                                                 // 264
				var month = o.defaultViewDate.month || 0;                                                                      // 265
				var day = o.defaultViewDate.day || 1;                                                                          // 266
				o.defaultViewDate = UTCDate(year, month, day);                                                                 // 267
			} else {                                                                                                        // 268
				o.defaultViewDate = UTCToday();                                                                                // 269
			}                                                                                                               // 270
			o.showOnFocus = o.showOnFocus !== undefined ? o.showOnFocus : true;                                             // 271
		},                                                                                                               // 272
		_events: [],                                                                                                     // 273
		_secondaryEvents: [],                                                                                            // 274
		_applyEvents: function(evs){                                                                                     // 275
			for (var i=0, el, ch, ev; i < evs.length; i++){                                                                 // 276
				el = evs[i][0];                                                                                                // 277
				if (evs[i].length === 2){                                                                                      // 278
					ch = undefined;                                                                                               // 279
					ev = evs[i][1];                                                                                               // 280
				}                                                                                                              // 281
				else if (evs[i].length === 3){                                                                                 // 282
					ch = evs[i][1];                                                                                               // 283
					ev = evs[i][2];                                                                                               // 284
				}                                                                                                              // 285
				el.on(ev, ch);                                                                                                 // 286
			}                                                                                                               // 287
		},                                                                                                               // 288
		_unapplyEvents: function(evs){                                                                                   // 289
			for (var i=0, el, ev, ch; i < evs.length; i++){                                                                 // 290
				el = evs[i][0];                                                                                                // 291
				if (evs[i].length === 2){                                                                                      // 292
					ch = undefined;                                                                                               // 293
					ev = evs[i][1];                                                                                               // 294
				}                                                                                                              // 295
				else if (evs[i].length === 3){                                                                                 // 296
					ch = evs[i][1];                                                                                               // 297
					ev = evs[i][2];                                                                                               // 298
				}                                                                                                              // 299
				el.off(ev, ch);                                                                                                // 300
			}                                                                                                               // 301
		},                                                                                                               // 302
		_buildEvents: function(){                                                                                        // 303
            var events = {                                                                                         // 304
                keyup: $.proxy(function(e){                                                                        // 305
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)                              // 306
                        this.update();                                                                             // 307
                }, this),                                                                                          // 308
                keydown: $.proxy(this.keydown, this)                                                               // 309
            };                                                                                                     // 310
                                                                                                                   // 311
            if (this.o.showOnFocus === true) {                                                                     // 312
                events.focus = $.proxy(this.show, this);                                                           // 313
            }                                                                                                      // 314
                                                                                                                   // 315
            if (this.isInput) { // single input                                                                    // 316
                this._events = [                                                                                   // 317
                    [this.element, events]                                                                         // 318
                ];                                                                                                 // 319
            }                                                                                                      // 320
            else if (this.component && this.hasInput) { // component: input + button                               // 321
                this._events = [                                                                                   // 322
                    // For components that are not readonly, allow keyboard nav                                    // 323
                    [this.element.find('input'), events],                                                          // 324
                    [this.component, {                                                                             // 325
                        click: $.proxy(this.show, this)                                                            // 326
                    }]                                                                                             // 327
                ];                                                                                                 // 328
            }                                                                                                      // 329
			else if (this.element.is('div')){  // inline datepicker                                                         // 330
				this.isInline = true;                                                                                          // 331
			}                                                                                                               // 332
			else {                                                                                                          // 333
				this._events = [                                                                                               // 334
					[this.element, {                                                                                              // 335
						click: $.proxy(this.show, this)                                                                              // 336
					}]                                                                                                            // 337
				];                                                                                                             // 338
			}                                                                                                               // 339
			this._events.push(                                                                                              // 340
				// Component: listen for blur on element descendants                                                           // 341
				[this.element, '*', {                                                                                          // 342
					blur: $.proxy(function(e){                                                                                    // 343
						this._focused_from = e.target;                                                                               // 344
					}, this)                                                                                                      // 345
				}],                                                                                                            // 346
				// Input: listen for blur on element                                                                           // 347
				[this.element, {                                                                                               // 348
					blur: $.proxy(function(e){                                                                                    // 349
						this._focused_from = e.target;                                                                               // 350
					}, this)                                                                                                      // 351
				}]                                                                                                             // 352
			);                                                                                                              // 353
                                                                                                                   // 354
			this._secondaryEvents = [                                                                                       // 355
				[this.picker, {                                                                                                // 356
					click: $.proxy(this.click, this)                                                                              // 357
				}],                                                                                                            // 358
				[$(window), {                                                                                                  // 359
					resize: $.proxy(this.place, this)                                                                             // 360
				}],                                                                                                            // 361
				[$(document), {                                                                                                // 362
					'mousedown touchstart': $.proxy(function(e){                                                                  // 363
						// Clicked outside the datepicker, hide it                                                                   // 364
						if (!(                                                                                                       // 365
							this.element.is(e.target) ||                                                                                // 366
							this.element.find(e.target).length ||                                                                       // 367
							this.picker.is(e.target) ||                                                                                 // 368
							this.picker.find(e.target).length                                                                           // 369
						)){                                                                                                          // 370
							this.hide();                                                                                                // 371
						}                                                                                                            // 372
					}, this)                                                                                                      // 373
				}]                                                                                                             // 374
			];                                                                                                              // 375
		},                                                                                                               // 376
		_attachEvents: function(){                                                                                       // 377
			this._detachEvents();                                                                                           // 378
			this._applyEvents(this._events);                                                                                // 379
		},                                                                                                               // 380
		_detachEvents: function(){                                                                                       // 381
			this._unapplyEvents(this._events);                                                                              // 382
		},                                                                                                               // 383
		_attachSecondaryEvents: function(){                                                                              // 384
			this._detachSecondaryEvents();                                                                                  // 385
			this._applyEvents(this._secondaryEvents);                                                                       // 386
		},                                                                                                               // 387
		_detachSecondaryEvents: function(){                                                                              // 388
			this._unapplyEvents(this._secondaryEvents);                                                                     // 389
		},                                                                                                               // 390
		_trigger: function(event, altdate){                                                                              // 391
			var date = altdate || this.dates.get(-1),                                                                       // 392
				local_date = this._utc_to_local(date);                                                                         // 393
                                                                                                                   // 394
			this.element.trigger({                                                                                          // 395
				type: event,                                                                                                   // 396
				date: local_date,                                                                                              // 397
				dates: $.map(this.dates, this._utc_to_local),                                                                  // 398
				format: $.proxy(function(ix, format){                                                                          // 399
					if (arguments.length === 0){                                                                                  // 400
						ix = this.dates.length - 1;                                                                                  // 401
						format = this.o.format;                                                                                      // 402
					}                                                                                                             // 403
					else if (typeof ix === 'string'){                                                                             // 404
						format = ix;                                                                                                 // 405
						ix = this.dates.length - 1;                                                                                  // 406
					}                                                                                                             // 407
					format = format || this.o.format;                                                                             // 408
					var date = this.dates.get(ix);                                                                                // 409
					return DPGlobal.formatDate(date, format, this.o.language);                                                    // 410
				}, this)                                                                                                       // 411
			});                                                                                                             // 412
		},                                                                                                               // 413
                                                                                                                   // 414
		show: function(){                                                                                                // 415
			if (this.element.attr('readonly'))                                                                              // 416
				return;                                                                                                        // 417
			if (!this.isInline)                                                                                             // 418
				this.picker.appendTo(this.o.container);                                                                        // 419
			this.place();                                                                                                   // 420
			this.picker.show();                                                                                             // 421
			this._attachSecondaryEvents();                                                                                  // 422
			this._trigger('show');                                                                                          // 423
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {         // 424
				$(this.element).blur();                                                                                        // 425
			}                                                                                                               // 426
			return this;                                                                                                    // 427
		},                                                                                                               // 428
                                                                                                                   // 429
		hide: function(){                                                                                                // 430
			if (this.isInline)                                                                                              // 431
				return this;                                                                                                   // 432
			if (!this.picker.is(':visible'))                                                                                // 433
				return this;                                                                                                   // 434
			this.focusDate = null;                                                                                          // 435
			this.picker.hide().detach();                                                                                    // 436
			this._detachSecondaryEvents();                                                                                  // 437
			this.viewMode = this.o.startView;                                                                               // 438
			this.showMode();                                                                                                // 439
                                                                                                                   // 440
			if (                                                                                                            // 441
				this.o.forceParse &&                                                                                           // 442
				(                                                                                                              // 443
					this.isInput && this.element.val() ||                                                                         // 444
					this.hasInput && this.element.find('input').val()                                                             // 445
				)                                                                                                              // 446
			)                                                                                                               // 447
				this.setValue();                                                                                               // 448
			this._trigger('hide');                                                                                          // 449
			return this;                                                                                                    // 450
		},                                                                                                               // 451
                                                                                                                   // 452
		remove: function(){                                                                                              // 453
			this.hide();                                                                                                    // 454
			this._detachEvents();                                                                                           // 455
			this._detachSecondaryEvents();                                                                                  // 456
			this.picker.remove();                                                                                           // 457
			delete this.element.data().datepicker;                                                                          // 458
			if (!this.isInput){                                                                                             // 459
				delete this.element.data().date;                                                                               // 460
			}                                                                                                               // 461
			return this;                                                                                                    // 462
		},                                                                                                               // 463
                                                                                                                   // 464
		_utc_to_local: function(utc){                                                                                    // 465
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));                                        // 466
		},                                                                                                               // 467
		_local_to_utc: function(local){                                                                                  // 468
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));                                  // 469
		},                                                                                                               // 470
		_zero_time: function(local){                                                                                     // 471
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());                               // 472
		},                                                                                                               // 473
		_zero_utc_time: function(utc){                                                                                   // 474
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));                    // 475
		},                                                                                                               // 476
                                                                                                                   // 477
		getDates: function(){                                                                                            // 478
			return $.map(this.dates, this._utc_to_local);                                                                   // 479
		},                                                                                                               // 480
                                                                                                                   // 481
		getUTCDates: function(){                                                                                         // 482
			return $.map(this.dates, function(d){                                                                           // 483
				return new Date(d);                                                                                            // 484
			});                                                                                                             // 485
		},                                                                                                               // 486
                                                                                                                   // 487
		getDate: function(){                                                                                             // 488
			return this._utc_to_local(this.getUTCDate());                                                                   // 489
		},                                                                                                               // 490
                                                                                                                   // 491
		getUTCDate: function(){                                                                                          // 492
			var selected_date = this.dates.get(-1);                                                                         // 493
			if (typeof selected_date !== 'undefined') {                                                                     // 494
				return new Date(selected_date);                                                                                // 495
			} else {                                                                                                        // 496
				return null;                                                                                                   // 497
			}                                                                                                               // 498
		},                                                                                                               // 499
                                                                                                                   // 500
		clearDates: function(){                                                                                          // 501
			var element;                                                                                                    // 502
			if (this.isInput) {                                                                                             // 503
				element = this.element;                                                                                        // 504
			} else if (this.component) {                                                                                    // 505
				element = this.element.find('input');                                                                          // 506
			}                                                                                                               // 507
                                                                                                                   // 508
			if (element) {                                                                                                  // 509
				element.val('').change();                                                                                      // 510
			}                                                                                                               // 511
                                                                                                                   // 512
			this.update();                                                                                                  // 513
			this._trigger('changeDate');                                                                                    // 514
                                                                                                                   // 515
			if (this.o.autoclose) {                                                                                         // 516
				this.hide();                                                                                                   // 517
			}                                                                                                               // 518
		},                                                                                                               // 519
		setDates: function(){                                                                                            // 520
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                                  // 521
			this.update.apply(this, args);                                                                                  // 522
			this._trigger('changeDate');                                                                                    // 523
			this.setValue();                                                                                                // 524
			return this;                                                                                                    // 525
		},                                                                                                               // 526
                                                                                                                   // 527
		setUTCDates: function(){                                                                                         // 528
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                                  // 529
			this.update.apply(this, $.map(args, this._utc_to_local));                                                       // 530
			this._trigger('changeDate');                                                                                    // 531
			this.setValue();                                                                                                // 532
			return this;                                                                                                    // 533
		},                                                                                                               // 534
                                                                                                                   // 535
		setDate: alias('setDates'),                                                                                      // 536
		setUTCDate: alias('setUTCDates'),                                                                                // 537
                                                                                                                   // 538
		setValue: function(){                                                                                            // 539
			var formatted = this.getFormattedDate();                                                                        // 540
			if (!this.isInput){                                                                                             // 541
				if (this.component){                                                                                           // 542
					this.element.find('input').val(formatted).change();                                                           // 543
				}                                                                                                              // 544
			}                                                                                                               // 545
			else {                                                                                                          // 546
				this.element.val(formatted).change();                                                                          // 547
			}                                                                                                               // 548
			return this;                                                                                                    // 549
		},                                                                                                               // 550
                                                                                                                   // 551
		getFormattedDate: function(format){                                                                              // 552
			if (format === undefined)                                                                                       // 553
				format = this.o.format;                                                                                        // 554
                                                                                                                   // 555
			var lang = this.o.language;                                                                                     // 556
			return $.map(this.dates, function(d){                                                                           // 557
				return DPGlobal.formatDate(d, format, lang);                                                                   // 558
			}).join(this.o.multidateSeparator);                                                                             // 559
		},                                                                                                               // 560
                                                                                                                   // 561
		setStartDate: function(startDate){                                                                               // 562
			this._process_options({startDate: startDate});                                                                  // 563
			this.update();                                                                                                  // 564
			this.updateNavArrows();                                                                                         // 565
			return this;                                                                                                    // 566
		},                                                                                                               // 567
                                                                                                                   // 568
		setEndDate: function(endDate){                                                                                   // 569
			this._process_options({endDate: endDate});                                                                      // 570
			this.update();                                                                                                  // 571
			this.updateNavArrows();                                                                                         // 572
			return this;                                                                                                    // 573
		},                                                                                                               // 574
                                                                                                                   // 575
		setDaysOfWeekDisabled: function(daysOfWeekDisabled){                                                             // 576
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});                                                // 577
			this.update();                                                                                                  // 578
			this.updateNavArrows();                                                                                         // 579
			return this;                                                                                                    // 580
		},                                                                                                               // 581
                                                                                                                   // 582
		setDatesDisabled: function(datesDisabled){                                                                       // 583
			this._process_options({datesDisabled: datesDisabled});                                                          // 584
			this.update();                                                                                                  // 585
			this.updateNavArrows();                                                                                         // 586
		},                                                                                                               // 587
                                                                                                                   // 588
		place: function(){                                                                                               // 589
			if (this.isInline)                                                                                              // 590
				return this;                                                                                                   // 591
			var calendarWidth = this.picker.outerWidth(),                                                                   // 592
				calendarHeight = this.picker.outerHeight(),                                                                    // 593
				visualPadding = 10,                                                                                            // 594
				windowWidth = $(this.o.container).width(),                                                                     // 595
				windowHeight = $(this.o.container).height(),                                                                   // 596
				scrollTop = $(this.o.container).scrollTop(),                                                                   // 597
				appendOffset = $(this.o.container).offset();                                                                   // 598
                                                                                                                   // 599
			var parentsZindex = [];                                                                                         // 600
			this.element.parents().each(function(){                                                                         // 601
				var itemZIndex = $(this).css('z-index');                                                                       // 602
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));                       // 603
			});                                                                                                             // 604
			var zIndex = Math.max.apply(Math, parentsZindex) + 10;                                                          // 605
			var offset = this.component ? this.component.parent().offset() : this.element.offset();                         // 606
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);               // 607
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);                  // 608
			var left = offset.left - appendOffset.left,                                                                     // 609
				top = offset.top - appendOffset.top;                                                                           // 610
                                                                                                                   // 611
			this.picker.removeClass(                                                                                        // 612
				'datepicker-orient-top datepicker-orient-bottom '+                                                             // 613
				'datepicker-orient-right datepicker-orient-left'                                                               // 614
			);                                                                                                              // 615
                                                                                                                   // 616
			if (this.o.orientation.x !== 'auto'){                                                                           // 617
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);                                             // 618
				if (this.o.orientation.x === 'right')                                                                          // 619
					left -= calendarWidth - width;                                                                                // 620
			}                                                                                                               // 621
			// auto x orientation is best-placement: if it crosses a window                                                 // 622
			// edge, fudge it sideways                                                                                      // 623
			else {                                                                                                          // 624
				if (offset.left < 0) {                                                                                         // 625
					// component is outside the window on the left side. Move it into visible range                               // 626
					this.picker.addClass('datepicker-orient-left');                                                               // 627
					left -= offset.left - visualPadding;                                                                          // 628
				} else if (left + calendarWidth > windowWidth) {                                                               // 629
					// the calendar passes the widow right edge. Align it to component right side                                 // 630
					this.picker.addClass('datepicker-orient-right');                                                              // 631
					left = offset.left + width - calendarWidth;                                                                   // 632
				} else {                                                                                                       // 633
					// Default to left                                                                                            // 634
					this.picker.addClass('datepicker-orient-left');                                                               // 635
				}                                                                                                              // 636
			}                                                                                                               // 637
                                                                                                                   // 638
			// auto y orientation is best-situation: top or bottom, no fudging,                                             // 639
			// decision based on which shows more of the calendar                                                           // 640
			var yorient = this.o.orientation.y,                                                                             // 641
				top_overflow, bottom_overflow;                                                                                 // 642
			if (yorient === 'auto'){                                                                                        // 643
				top_overflow = -scrollTop + top - calendarHeight;                                                              // 644
				bottom_overflow = scrollTop + windowHeight - (top + height + calendarHeight);                                  // 645
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)                                               // 646
					yorient = 'top';                                                                                              // 647
				else                                                                                                           // 648
					yorient = 'bottom';                                                                                           // 649
			}                                                                                                               // 650
			this.picker.addClass('datepicker-orient-' + yorient);                                                           // 651
			if (yorient === 'top')                                                                                          // 652
				top += height;                                                                                                 // 653
			else                                                                                                            // 654
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));                                              // 655
                                                                                                                   // 656
			if (this.o.rtl) {                                                                                               // 657
				var right = windowWidth - (left + width);                                                                      // 658
				this.picker.css({                                                                                              // 659
					top: top,                                                                                                     // 660
					right: right,                                                                                                 // 661
					zIndex: zIndex                                                                                                // 662
				});                                                                                                            // 663
			} else {                                                                                                        // 664
				this.picker.css({                                                                                              // 665
					top: top,                                                                                                     // 666
					left: left,                                                                                                   // 667
					zIndex: zIndex                                                                                                // 668
				});                                                                                                            // 669
			}                                                                                                               // 670
			return this;                                                                                                    // 671
		},                                                                                                               // 672
                                                                                                                   // 673
		_allow_update: true,                                                                                             // 674
		update: function(){                                                                                              // 675
			if (!this._allow_update)                                                                                        // 676
				return this;                                                                                                   // 677
                                                                                                                   // 678
			var oldDates = this.dates.copy(),                                                                               // 679
				dates = [],                                                                                                    // 680
				fromArgs = false;                                                                                              // 681
			if (arguments.length){                                                                                          // 682
				$.each(arguments, $.proxy(function(i, date){                                                                   // 683
					if (date instanceof Date)                                                                                     // 684
						date = this._local_to_utc(date);                                                                             // 685
					dates.push(date);                                                                                             // 686
				}, this));                                                                                                     // 687
				fromArgs = true;                                                                                               // 688
			}                                                                                                               // 689
			else {                                                                                                          // 690
				dates = this.isInput                                                                                           // 691
						? this.element.val()                                                                                         // 692
						: this.element.data('date') || this.element.find('input').val();                                             // 693
				if (dates && this.o.multidate)                                                                                 // 694
					dates = dates.split(this.o.multidateSeparator);                                                               // 695
				else                                                                                                           // 696
					dates = [dates];                                                                                              // 697
				delete this.element.data().date;                                                                               // 698
			}                                                                                                               // 699
                                                                                                                   // 700
			dates = $.map(dates, $.proxy(function(date){                                                                    // 701
				return DPGlobal.parseDate(date, this.o.format, this.o.language);                                               // 702
			}, this));                                                                                                      // 703
			dates = $.grep(dates, $.proxy(function(date){                                                                   // 704
				return (                                                                                                       // 705
					date < this.o.startDate ||                                                                                    // 706
					date > this.o.endDate ||                                                                                      // 707
					!date                                                                                                         // 708
				);                                                                                                             // 709
			}, this), true);                                                                                                // 710
			this.dates.replace(dates);                                                                                      // 711
                                                                                                                   // 712
			if (this.dates.length)                                                                                          // 713
				this.viewDate = new Date(this.dates.get(-1));                                                                  // 714
			else if (this.viewDate < this.o.startDate)                                                                      // 715
				this.viewDate = new Date(this.o.startDate);                                                                    // 716
			else if (this.viewDate > this.o.endDate)                                                                        // 717
				this.viewDate = new Date(this.o.endDate);                                                                      // 718
                                                                                                                   // 719
			if (fromArgs){                                                                                                  // 720
				// setting date by clicking                                                                                    // 721
				this.setValue();                                                                                               // 722
			}                                                                                                               // 723
			else if (dates.length){                                                                                         // 724
				// setting date by typing                                                                                      // 725
				if (String(oldDates) !== String(this.dates))                                                                   // 726
					this._trigger('changeDate');                                                                                  // 727
			}                                                                                                               // 728
			if (!this.dates.length && oldDates.length)                                                                      // 729
				this._trigger('clearDate');                                                                                    // 730
                                                                                                                   // 731
			this.fill();                                                                                                    // 732
			return this;                                                                                                    // 733
		},                                                                                                               // 734
                                                                                                                   // 735
		fillDow: function(){                                                                                             // 736
			var dowCnt = this.o.weekStart,                                                                                  // 737
				html = '<tr>';                                                                                                 // 738
			if (this.o.calendarWeeks){                                                                                      // 739
				this.picker.find('.datepicker-days thead tr:first-child .datepicker-switch')                                   // 740
					.attr('colspan', function(i, val){                                                                            // 741
						return parseInt(val) + 1;                                                                                    // 742
					});                                                                                                           // 743
				var cell = '<th class="cw">&#160;</th>';                                                                       // 744
				html += cell;                                                                                                  // 745
			}                                                                                                               // 746
			while (dowCnt < this.o.weekStart + 7){                                                                          // 747
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';                               // 748
			}                                                                                                               // 749
			html += '</tr>';                                                                                                // 750
			this.picker.find('.datepicker-days thead').append(html);                                                        // 751
		},                                                                                                               // 752
                                                                                                                   // 753
		fillMonths: function(){                                                                                          // 754
			var html = '',                                                                                                  // 755
			i = 0;                                                                                                          // 756
			while (i < 12){                                                                                                 // 757
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';                              // 758
			}                                                                                                               // 759
			this.picker.find('.datepicker-months td').html(html);                                                           // 760
		},                                                                                                               // 761
                                                                                                                   // 762
		setRange: function(range){                                                                                       // 763
			if (!range || !range.length)                                                                                    // 764
				delete this.range;                                                                                             // 765
			else                                                                                                            // 766
				this.range = $.map(range, function(d){                                                                         // 767
					return d.valueOf();                                                                                           // 768
				});                                                                                                            // 769
			this.fill();                                                                                                    // 770
		},                                                                                                               // 771
                                                                                                                   // 772
		getClassNames: function(date){                                                                                   // 773
			var cls = [],                                                                                                   // 774
				year = this.viewDate.getUTCFullYear(),                                                                         // 775
				month = this.viewDate.getUTCMonth(),                                                                           // 776
				today = new Date();                                                                                            // 777
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){            // 778
				cls.push('old');                                                                                               // 779
			}                                                                                                               // 780
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){       // 781
				cls.push('new');                                                                                               // 782
			}                                                                                                               // 783
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())                                              // 784
				cls.push('focused');                                                                                           // 785
			// Compare internal UTC date with local today, not UTC today                                                    // 786
			if (this.o.todayHighlight &&                                                                                    // 787
				date.getUTCFullYear() === today.getFullYear() &&                                                               // 788
				date.getUTCMonth() === today.getMonth() &&                                                                     // 789
				date.getUTCDate() === today.getDate()){                                                                        // 790
				cls.push('today');                                                                                             // 791
			}                                                                                                               // 792
			if (this.dates.contains(date) !== -1)                                                                           // 793
				cls.push('active');                                                                                            // 794
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||                                     // 795
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){                                                // 796
				cls.push('disabled');                                                                                          // 797
			}                                                                                                               // 798
			if (this.o.datesDisabled.length > 0 &&                                                                          // 799
				$.grep(this.o.datesDisabled, function(d){                                                                      // 800
					return isUTCEquals(date, d); }).length > 0) {                                                                 // 801
				cls.push('disabled', 'disabled-date');                                                                         // 802
			}                                                                                                               // 803
                                                                                                                   // 804
			if (this.range){                                                                                                // 805
				if (date > this.range[0] && date < this.range[this.range.length-1]){                                           // 806
					cls.push('range');                                                                                            // 807
				}                                                                                                              // 808
				if ($.inArray(date.valueOf(), this.range) !== -1){                                                             // 809
					cls.push('selected');                                                                                         // 810
				}                                                                                                              // 811
			}                                                                                                               // 812
			return cls;                                                                                                     // 813
		},                                                                                                               // 814
                                                                                                                   // 815
		fill: function(){                                                                                                // 816
			var d = new Date(this.viewDate),                                                                                // 817
				year = d.getUTCFullYear(),                                                                                     // 818
				month = d.getUTCMonth(),                                                                                       // 819
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,                    // 820
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,                      // 821
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,                            // 822
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,                              // 823
				todaytxt = dates[this.o.language].today || dates['en'].today || '',                                            // 824
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',                                            // 825
				tooltip;                                                                                                       // 826
			if (isNaN(year) || isNaN(month))                                                                                // 827
				return;                                                                                                        // 828
			this.picker.find('.datepicker-days thead .datepicker-switch')                                                   // 829
						.text(dates[this.o.language].months[month]+' '+year);                                                        // 830
			this.picker.find('tfoot .today')                                                                                // 831
						.text(todaytxt)                                                                                              // 832
						.toggle(this.o.todayBtn !== false);                                                                          // 833
			this.picker.find('tfoot .clear')                                                                                // 834
						.text(cleartxt)                                                                                              // 835
						.toggle(this.o.clearBtn !== false);                                                                          // 836
			this.updateNavArrows();                                                                                         // 837
			this.fillMonths();                                                                                              // 838
			var prevMonth = UTCDate(year, month-1, 28),                                                                     // 839
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());                            // 840
			prevMonth.setUTCDate(day);                                                                                      // 841
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);                                   // 842
			var nextMonth = new Date(prevMonth);                                                                            // 843
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);                                                              // 844
			nextMonth = nextMonth.valueOf();                                                                                // 845
			var html = [];                                                                                                  // 846
			var clsName;                                                                                                    // 847
			while (prevMonth.valueOf() < nextMonth){                                                                        // 848
				if (prevMonth.getUTCDay() === this.o.weekStart){                                                               // 849
					html.push('<tr>');                                                                                            // 850
					if (this.o.calendarWeeks){                                                                                    // 851
						// ISO 8601: First week contains first thursday.                                                             // 852
						// ISO also states week starts on Monday, but we can be more abstract here.                                  // 853
						var                                                                                                          // 854
							// Start of current week: based on weekstart/current date                                                   // 855
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),                     // 856
							// Thursday of this week                                                                                    // 857
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),                                           // 858
							// First Thursday of year, year from thursday                                                               // 859
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),       // 860
							// Calendar week: ms between thursdays, div ms per day, div 7 days                                          // 861
							calWeek =  (th - yth) / 864e5 / 7 + 1;                                                                      // 862
						html.push('<td class="cw">'+ calWeek +'</td>');                                                              // 863
                                                                                                                   // 864
					}                                                                                                             // 865
				}                                                                                                              // 866
				clsName = this.getClassNames(prevMonth);                                                                       // 867
				clsName.push('day');                                                                                           // 868
                                                                                                                   // 869
				if (this.o.beforeShowDay !== $.noop){                                                                          // 870
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));                                             // 871
					if (before === undefined)                                                                                     // 872
						before = {};                                                                                                 // 873
					else if (typeof(before) === 'boolean')                                                                        // 874
						before = {enabled: before};                                                                                  // 875
					else if (typeof(before) === 'string')                                                                         // 876
						before = {classes: before};                                                                                  // 877
					if (before.enabled === false)                                                                                 // 878
						clsName.push('disabled');                                                                                    // 879
					if (before.classes)                                                                                           // 880
						clsName = clsName.concat(before.classes.split(/\s+/));                                                       // 881
					if (before.tooltip)                                                                                           // 882
						tooltip = before.tooltip;                                                                                    // 883
				}                                                                                                              // 884
                                                                                                                   // 885
				clsName = $.unique(clsName);                                                                                   // 886
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;                                                                                                // 888
				if (prevMonth.getUTCDay() === this.o.weekEnd){                                                                 // 889
					html.push('</tr>');                                                                                           // 890
				}                                                                                                              // 891
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);                                                                // 892
			}                                                                                                               // 893
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));                                       // 894
                                                                                                                   // 895
			var months = this.picker.find('.datepicker-months')                                                             // 896
						.find('th:eq(1)')                                                                                            // 897
							.text(year)                                                                                                 // 898
							.end()                                                                                                      // 899
						.find('span').removeClass('active');                                                                         // 900
                                                                                                                   // 901
			$.each(this.dates, function(i, d){                                                                              // 902
				if (d.getUTCFullYear() === year)                                                                               // 903
					months.eq(d.getUTCMonth()).addClass('active');                                                                // 904
			});                                                                                                             // 905
                                                                                                                   // 906
			if (year < startYear || year > endYear){                                                                        // 907
				months.addClass('disabled');                                                                                   // 908
			}                                                                                                               // 909
			if (year === startYear){                                                                                        // 910
				months.slice(0, startMonth).addClass('disabled');                                                              // 911
			}                                                                                                               // 912
			if (year === endYear){                                                                                          // 913
				months.slice(endMonth+1).addClass('disabled');                                                                 // 914
			}                                                                                                               // 915
                                                                                                                   // 916
			if (this.o.beforeShowMonth !== $.noop){                                                                         // 917
				var that = this;                                                                                               // 918
				$.each(months, function(i, month){                                                                             // 919
					if (!$(month).hasClass('disabled')) {                                                                         // 920
						var moDate = new Date(year, i, 1);                                                                           // 921
						var before = that.o.beforeShowMonth(moDate);                                                                 // 922
						if (before === false)                                                                                        // 923
							$(month).addClass('disabled');                                                                              // 924
					}                                                                                                             // 925
				});                                                                                                            // 926
			}                                                                                                               // 927
                                                                                                                   // 928
			html = '';                                                                                                      // 929
			year = parseInt(year/10, 10) * 10;                                                                              // 930
			var yearCont = this.picker.find('.datepicker-years')                                                            // 931
								.find('th:eq(1)')                                                                                          // 932
									.text(year + '-' + (year + 9))                                                                            // 933
									.end()                                                                                                    // 934
								.find('td');                                                                                               // 935
			year -= 1;                                                                                                      // 936
			var years = $.map(this.dates, function(d){                                                                      // 937
					return d.getUTCFullYear();                                                                                    // 938
				}),                                                                                                            // 939
				classes;                                                                                                       // 940
			for (var i = -1; i < 11; i++){                                                                                  // 941
				classes = ['year'];                                                                                            // 942
				if (i === -1)                                                                                                  // 943
					classes.push('old');                                                                                          // 944
				else if (i === 10)                                                                                             // 945
					classes.push('new');                                                                                          // 946
				if ($.inArray(year, years) !== -1)                                                                             // 947
					classes.push('active');                                                                                       // 948
				if (year < startYear || year > endYear)                                                                        // 949
					classes.push('disabled');                                                                                     // 950
				html += '<span class="' + classes.join(' ') + '">' + year + '</span>';                                         // 951
				year += 1;                                                                                                     // 952
			}                                                                                                               // 953
			yearCont.html(html);                                                                                            // 954
		},                                                                                                               // 955
                                                                                                                   // 956
		updateNavArrows: function(){                                                                                     // 957
			if (!this._allow_update)                                                                                        // 958
				return;                                                                                                        // 959
                                                                                                                   // 960
			var d = new Date(this.viewDate),                                                                                // 961
				year = d.getUTCFullYear(),                                                                                     // 962
				month = d.getUTCMonth();                                                                                       // 963
			switch (this.viewMode){                                                                                         // 964
				case 0:                                                                                                        // 965
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});                                                       // 967
					}                                                                                                             // 968
					else {                                                                                                        // 969
						this.picker.find('.prev').css({visibility: 'visible'});                                                      // 970
					}                                                                                                             // 971
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});                                                       // 973
					}                                                                                                             // 974
					else {                                                                                                        // 975
						this.picker.find('.next').css({visibility: 'visible'});                                                      // 976
					}                                                                                                             // 977
					break;                                                                                                        // 978
				case 1:                                                                                                        // 979
				case 2:                                                                                                        // 980
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){                             // 981
						this.picker.find('.prev').css({visibility: 'hidden'});                                                       // 982
					}                                                                                                             // 983
					else {                                                                                                        // 984
						this.picker.find('.prev').css({visibility: 'visible'});                                                      // 985
					}                                                                                                             // 986
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){                                  // 987
						this.picker.find('.next').css({visibility: 'hidden'});                                                       // 988
					}                                                                                                             // 989
					else {                                                                                                        // 990
						this.picker.find('.next').css({visibility: 'visible'});                                                      // 991
					}                                                                                                             // 992
					break;                                                                                                        // 993
			}                                                                                                               // 994
		},                                                                                                               // 995
                                                                                                                   // 996
		click: function(e){                                                                                              // 997
			e.preventDefault();                                                                                             // 998
			var target = $(e.target).closest('span, td, th'),                                                               // 999
				year, month, day;                                                                                              // 1000
			if (target.length === 1){                                                                                       // 1001
				switch (target[0].nodeName.toLowerCase()){                                                                     // 1002
					case 'th':                                                                                                    // 1003
						switch (target[0].className){                                                                                // 1004
							case 'datepicker-switch':                                                                                   // 1005
								this.showMode(1);                                                                                          // 1006
								break;                                                                                                     // 1007
							case 'prev':                                                                                                // 1008
							case 'next':                                                                                                // 1009
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);               // 1010
								switch (this.viewMode){                                                                                    // 1011
									case 0:                                                                                                   // 1012
										this.viewDate = this.moveMonth(this.viewDate, dir);                                                      // 1013
										this._trigger('changeMonth', this.viewDate);                                                             // 1014
										break;                                                                                                   // 1015
									case 1:                                                                                                   // 1016
									case 2:                                                                                                   // 1017
										this.viewDate = this.moveYear(this.viewDate, dir);                                                       // 1018
										if (this.viewMode === 1)                                                                                 // 1019
											this._trigger('changeYear', this.viewDate);                                                             // 1020
										break;                                                                                                   // 1021
								}                                                                                                          // 1022
								this.fill();                                                                                               // 1023
								break;                                                                                                     // 1024
							case 'today':                                                                                               // 1025
								var date = new Date();                                                                                     // 1026
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);                              // 1027
                                                                                                                   // 1028
								this.showMode(-2);                                                                                         // 1029
								var which = this.o.todayBtn === 'linked' ? null : 'view';                                                  // 1030
								this._setDate(date, which);                                                                                // 1031
								break;                                                                                                     // 1032
							case 'clear':                                                                                               // 1033
								this.clearDates();                                                                                         // 1034
								break;                                                                                                     // 1035
						}                                                                                                            // 1036
						break;                                                                                                       // 1037
					case 'span':                                                                                                  // 1038
						if (!target.hasClass('disabled')){                                                                           // 1039
							this.viewDate.setUTCDate(1);                                                                                // 1040
							if (target.hasClass('month')){                                                                              // 1041
								day = 1;                                                                                                   // 1042
								month = target.parent().find('span').index(target);                                                        // 1043
								year = this.viewDate.getUTCFullYear();                                                                     // 1044
								this.viewDate.setUTCMonth(month);                                                                          // 1045
								this._trigger('changeMonth', this.viewDate);                                                               // 1046
								if (this.o.minViewMode === 1){                                                                             // 1047
									this._setDate(UTCDate(year, month, day));                                                                 // 1048
								}                                                                                                          // 1049
							}                                                                                                           // 1050
							else {                                                                                                      // 1051
								day = 1;                                                                                                   // 1052
								month = 0;                                                                                                 // 1053
								year = parseInt(target.text(), 10)||0;                                                                     // 1054
								this.viewDate.setUTCFullYear(year);                                                                        // 1055
								this._trigger('changeYear', this.viewDate);                                                                // 1056
								if (this.o.minViewMode === 2){                                                                             // 1057
									this._setDate(UTCDate(year, month, day));                                                                 // 1058
								}                                                                                                          // 1059
							}                                                                                                           // 1060
							this.showMode(-1);                                                                                          // 1061
							this.fill();                                                                                                // 1062
						}                                                                                                            // 1063
						break;                                                                                                       // 1064
					case 'td':                                                                                                    // 1065
						if (target.hasClass('day') && !target.hasClass('disabled')){                                                 // 1066
							day = parseInt(target.text(), 10)||1;                                                                       // 1067
							year = this.viewDate.getUTCFullYear();                                                                      // 1068
							month = this.viewDate.getUTCMonth();                                                                        // 1069
							if (target.hasClass('old')){                                                                                // 1070
								if (month === 0){                                                                                          // 1071
									month = 11;                                                                                               // 1072
									year -= 1;                                                                                                // 1073
								}                                                                                                          // 1074
								else {                                                                                                     // 1075
									month -= 1;                                                                                               // 1076
								}                                                                                                          // 1077
							}                                                                                                           // 1078
							else if (target.hasClass('new')){                                                                           // 1079
								if (month === 11){                                                                                         // 1080
									month = 0;                                                                                                // 1081
									year += 1;                                                                                                // 1082
								}                                                                                                          // 1083
								else {                                                                                                     // 1084
									month += 1;                                                                                               // 1085
								}                                                                                                          // 1086
							}                                                                                                           // 1087
							this._setDate(UTCDate(year, month, day));                                                                   // 1088
						}                                                                                                            // 1089
						break;                                                                                                       // 1090
				}                                                                                                              // 1091
			}                                                                                                               // 1092
			if (this.picker.is(':visible') && this._focused_from){                                                          // 1093
				$(this._focused_from).focus();                                                                                 // 1094
			}                                                                                                               // 1095
			delete this._focused_from;                                                                                      // 1096
		},                                                                                                               // 1097
                                                                                                                   // 1098
		_toggle_multidate: function(date){                                                                               // 1099
			var ix = this.dates.contains(date);                                                                             // 1100
			if (!date){                                                                                                     // 1101
				this.dates.clear();                                                                                            // 1102
			}                                                                                                               // 1103
                                                                                                                   // 1104
			if (ix !== -1){                                                                                                 // 1105
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){                                 // 1106
					this.dates.remove(ix);                                                                                        // 1107
				}                                                                                                              // 1108
			} else if (this.o.multidate === false) {                                                                        // 1109
				this.dates.clear();                                                                                            // 1110
				this.dates.push(date);                                                                                         // 1111
			}                                                                                                               // 1112
			else {                                                                                                          // 1113
				this.dates.push(date);                                                                                         // 1114
			}                                                                                                               // 1115
                                                                                                                   // 1116
			if (typeof this.o.multidate === 'number')                                                                       // 1117
				while (this.dates.length > this.o.multidate)                                                                   // 1118
					this.dates.remove(0);                                                                                         // 1119
		},                                                                                                               // 1120
                                                                                                                   // 1121
		_setDate: function(date, which){                                                                                 // 1122
			if (!which || which === 'date')                                                                                 // 1123
				this._toggle_multidate(date && new Date(date));                                                                // 1124
			if (!which || which  === 'view')                                                                                // 1125
				this.viewDate = date && new Date(date);                                                                        // 1126
                                                                                                                   // 1127
			this.fill();                                                                                                    // 1128
			this.setValue();                                                                                                // 1129
			if (!which || which  !== 'view') {                                                                              // 1130
				this._trigger('changeDate');                                                                                   // 1131
			}                                                                                                               // 1132
			var element;                                                                                                    // 1133
			if (this.isInput){                                                                                              // 1134
				element = this.element;                                                                                        // 1135
			}                                                                                                               // 1136
			else if (this.component){                                                                                       // 1137
				element = this.element.find('input');                                                                          // 1138
			}                                                                                                               // 1139
			if (element){                                                                                                   // 1140
				element.change();                                                                                              // 1141
			}                                                                                                               // 1142
			if (this.o.autoclose && (!which || which === 'date')){                                                          // 1143
				this.hide();                                                                                                   // 1144
			}                                                                                                               // 1145
		},                                                                                                               // 1146
                                                                                                                   // 1147
		moveMonth: function(date, dir){                                                                                  // 1148
			if (!date)                                                                                                      // 1149
				return undefined;                                                                                              // 1150
			if (!dir)                                                                                                       // 1151
				return date;                                                                                                   // 1152
			var new_date = new Date(date.valueOf()),                                                                        // 1153
				day = new_date.getUTCDate(),                                                                                   // 1154
				month = new_date.getUTCMonth(),                                                                                // 1155
				mag = Math.abs(dir),                                                                                           // 1156
				new_month, test;                                                                                               // 1157
			dir = dir > 0 ? 1 : -1;                                                                                         // 1158
			if (mag === 1){                                                                                                 // 1159
				test = dir === -1                                                                                              // 1160
					// If going back one month, make sure month is not current month                                              // 1161
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)                                                               // 1162
					? function(){                                                                                                 // 1163
						return new_date.getUTCMonth() === month;                                                                     // 1164
					}                                                                                                             // 1165
					// If going forward one month, make sure month is as expected                                                 // 1166
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)                                                               // 1167
					: function(){                                                                                                 // 1168
						return new_date.getUTCMonth() !== new_month;                                                                 // 1169
					};                                                                                                            // 1170
				new_month = month + dir;                                                                                       // 1171
				new_date.setUTCMonth(new_month);                                                                               // 1172
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11                                           // 1173
				if (new_month < 0 || new_month > 11)                                                                           // 1174
					new_month = (new_month + 12) % 12;                                                                            // 1175
			}                                                                                                               // 1176
			else {                                                                                                          // 1177
				// For magnitudes >1, move one month at a time...                                                              // 1178
				for (var i=0; i < mag; i++)                                                                                    // 1179
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...                                             // 1180
					new_date = this.moveMonth(new_date, dir);                                                                     // 1181
				// ...then reset the day, keeping it in the new month                                                          // 1182
				new_month = new_date.getUTCMonth();                                                                            // 1183
				new_date.setUTCDate(day);                                                                                      // 1184
				test = function(){                                                                                             // 1185
					return new_month !== new_date.getUTCMonth();                                                                  // 1186
				};                                                                                                             // 1187
			}                                                                                                               // 1188
			// Common date-resetting loop -- if date is beyond end of month, make it                                        // 1189
			// end of month                                                                                                 // 1190
			while (test()){                                                                                                 // 1191
				new_date.setUTCDate(--day);                                                                                    // 1192
				new_date.setUTCMonth(new_month);                                                                               // 1193
			}                                                                                                               // 1194
			return new_date;                                                                                                // 1195
		},                                                                                                               // 1196
                                                                                                                   // 1197
		moveYear: function(date, dir){                                                                                   // 1198
			return this.moveMonth(date, dir*12);                                                                            // 1199
		},                                                                                                               // 1200
                                                                                                                   // 1201
		dateWithinRange: function(date){                                                                                 // 1202
			return date >= this.o.startDate && date <= this.o.endDate;                                                      // 1203
		},                                                                                                               // 1204
                                                                                                                   // 1205
		keydown: function(e){                                                                                            // 1206
			if (!this.picker.is(':visible')){                                                                               // 1207
				if (e.keyCode === 27) // allow escape to hide and re-show picker                                               // 1208
					this.show();                                                                                                  // 1209
				return;                                                                                                        // 1210
			}                                                                                                               // 1211
			var dateChanged = false,                                                                                        // 1212
				dir, newDate, newViewDate,                                                                                     // 1213
				focusDate = this.focusDate || this.viewDate;                                                                   // 1214
			switch (e.keyCode){                                                                                             // 1215
				case 27: // escape                                                                                             // 1216
					if (this.focusDate){                                                                                          // 1217
						this.focusDate = null;                                                                                       // 1218
						this.viewDate = this.dates.get(-1) || this.viewDate;                                                         // 1219
						this.fill();                                                                                                 // 1220
					}                                                                                                             // 1221
					else                                                                                                          // 1222
						this.hide();                                                                                                 // 1223
					e.preventDefault();                                                                                           // 1224
					break;                                                                                                        // 1225
				case 37: // left                                                                                               // 1226
				case 39: // right                                                                                              // 1227
					if (!this.o.keyboardNavigation)                                                                               // 1228
						break;                                                                                                       // 1229
					dir = e.keyCode === 37 ? -1 : 1;                                                                              // 1230
					if (e.ctrlKey){                                                                                               // 1231
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);                                              // 1232
						newViewDate = this.moveYear(focusDate, dir);                                                                 // 1233
						this._trigger('changeYear', this.viewDate);                                                                  // 1234
					}                                                                                                             // 1235
					else if (e.shiftKey){                                                                                         // 1236
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);                                             // 1237
						newViewDate = this.moveMonth(focusDate, dir);                                                                // 1238
						this._trigger('changeMonth', this.viewDate);                                                                 // 1239
					}                                                                                                             // 1240
					else {                                                                                                        // 1241
						newDate = new Date(this.dates.get(-1) || UTCToday());                                                        // 1242
						newDate.setUTCDate(newDate.getUTCDate() + dir);                                                              // 1243
						newViewDate = new Date(focusDate);                                                                           // 1244
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);                                                        // 1245
					}                                                                                                             // 1246
					if (this.dateWithinRange(newViewDate)){                                                                       // 1247
						this.focusDate = this.viewDate = newViewDate;                                                                // 1248
						this.setValue();                                                                                             // 1249
						this.fill();                                                                                                 // 1250
						e.preventDefault();                                                                                          // 1251
					}                                                                                                             // 1252
					break;                                                                                                        // 1253
				case 38: // up                                                                                                 // 1254
				case 40: // down                                                                                               // 1255
					if (!this.o.keyboardNavigation)                                                                               // 1256
						break;                                                                                                       // 1257
					dir = e.keyCode === 38 ? -1 : 1;                                                                              // 1258
					if (e.ctrlKey){                                                                                               // 1259
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);                                              // 1260
						newViewDate = this.moveYear(focusDate, dir);                                                                 // 1261
						this._trigger('changeYear', this.viewDate);                                                                  // 1262
					}                                                                                                             // 1263
					else if (e.shiftKey){                                                                                         // 1264
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);                                             // 1265
						newViewDate = this.moveMonth(focusDate, dir);                                                                // 1266
						this._trigger('changeMonth', this.viewDate);                                                                 // 1267
					}                                                                                                             // 1268
					else {                                                                                                        // 1269
						newDate = new Date(this.dates.get(-1) || UTCToday());                                                        // 1270
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);                                                          // 1271
						newViewDate = new Date(focusDate);                                                                           // 1272
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);                                                    // 1273
					}                                                                                                             // 1274
					if (this.dateWithinRange(newViewDate)){                                                                       // 1275
						this.focusDate = this.viewDate = newViewDate;                                                                // 1276
						this.setValue();                                                                                             // 1277
						this.fill();                                                                                                 // 1278
						e.preventDefault();                                                                                          // 1279
					}                                                                                                             // 1280
					break;                                                                                                        // 1281
				case 32: // spacebar                                                                                           // 1282
					// Spacebar is used in manually typing dates in some formats.                                                 // 1283
					// As such, its behavior should not be hijacked.                                                              // 1284
					break;                                                                                                        // 1285
				case 13: // enter                                                                                              // 1286
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;                                            // 1287
					if (this.o.keyboardNavigation) {                                                                              // 1288
						this._toggle_multidate(focusDate);                                                                           // 1289
						dateChanged = true;                                                                                          // 1290
					}                                                                                                             // 1291
					this.focusDate = null;                                                                                        // 1292
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                          // 1293
					this.setValue();                                                                                              // 1294
					this.fill();                                                                                                  // 1295
					if (this.picker.is(':visible')){                                                                              // 1296
						e.preventDefault();                                                                                          // 1297
						if (typeof e.stopPropagation === 'function') {                                                               // 1298
							e.stopPropagation(); // All modern browsers, IE9+                                                           // 1299
						} else {                                                                                                     // 1300
							e.cancelBubble = true; // IE6,7,8 ignore "stopPropagation"                                                  // 1301
						}                                                                                                            // 1302
						if (this.o.autoclose)                                                                                        // 1303
							this.hide();                                                                                                // 1304
					}                                                                                                             // 1305
					break;                                                                                                        // 1306
				case 9: // tab                                                                                                 // 1307
					this.focusDate = null;                                                                                        // 1308
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                          // 1309
					this.fill();                                                                                                  // 1310
					this.hide();                                                                                                  // 1311
					break;                                                                                                        // 1312
			}                                                                                                               // 1313
			if (dateChanged){                                                                                               // 1314
				if (this.dates.length)                                                                                         // 1315
					this._trigger('changeDate');                                                                                  // 1316
				else                                                                                                           // 1317
					this._trigger('clearDate');                                                                                   // 1318
				var element;                                                                                                   // 1319
				if (this.isInput){                                                                                             // 1320
					element = this.element;                                                                                       // 1321
				}                                                                                                              // 1322
				else if (this.component){                                                                                      // 1323
					element = this.element.find('input');                                                                         // 1324
				}                                                                                                              // 1325
				if (element){                                                                                                  // 1326
					element.change();                                                                                             // 1327
				}                                                                                                              // 1328
			}                                                                                                               // 1329
		},                                                                                                               // 1330
                                                                                                                   // 1331
		showMode: function(dir){                                                                                         // 1332
			if (dir){                                                                                                       // 1333
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));                                // 1334
			}                                                                                                               // 1335
			this.picker                                                                                                     // 1336
				.children('div')                                                                                               // 1337
				.hide()                                                                                                        // 1338
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)                                                // 1339
					.css('display', 'block');                                                                                     // 1340
			this.updateNavArrows();                                                                                         // 1341
		}                                                                                                                // 1342
	};                                                                                                                // 1343
                                                                                                                   // 1344
	var DateRangePicker = function(element, options){                                                                 // 1345
		this.element = $(element);                                                                                       // 1346
		this.inputs = $.map(options.inputs, function(i){                                                                 // 1347
			return i.jquery ? i[0] : i;                                                                                     // 1348
		});                                                                                                              // 1349
		delete options.inputs;                                                                                           // 1350
                                                                                                                   // 1351
		datepickerPlugin.call($(this.inputs), options)                                                                   // 1352
			.bind('changeDate', $.proxy(this.dateUpdated, this));                                                           // 1353
                                                                                                                   // 1354
		this.pickers = $.map(this.inputs, function(i){                                                                   // 1355
			return $(i).data('datepicker');                                                                                 // 1356
		});                                                                                                              // 1357
		this.updateDates();                                                                                              // 1358
	};                                                                                                                // 1359
	DateRangePicker.prototype = {                                                                                     // 1360
		updateDates: function(){                                                                                         // 1361
			this.dates = $.map(this.pickers, function(i){                                                                   // 1362
				return i.getUTCDate();                                                                                         // 1363
			});                                                                                                             // 1364
			this.updateRanges();                                                                                            // 1365
		},                                                                                                               // 1366
		updateRanges: function(){                                                                                        // 1367
			var range = $.map(this.dates, function(d){                                                                      // 1368
				return d.valueOf();                                                                                            // 1369
			});                                                                                                             // 1370
			$.each(this.pickers, function(i, p){                                                                            // 1371
				p.setRange(range);                                                                                             // 1372
			});                                                                                                             // 1373
		},                                                                                                               // 1374
		dateUpdated: function(e){                                                                                        // 1375
			// `this.updating` is a workaround for preventing infinite recursion                                            // 1376
			// between `changeDate` triggering and `setUTCDate` calling.  Until                                             // 1377
			// there is a better mechanism.                                                                                 // 1378
			if (this.updating)                                                                                              // 1379
				return;                                                                                                        // 1380
			this.updating = true;                                                                                           // 1381
                                                                                                                   // 1382
			var dp = $(e.target).data('datepicker'),                                                                        // 1383
				new_date = dp.getUTCDate(),                                                                                    // 1384
				i = $.inArray(e.target, this.inputs),                                                                          // 1385
				j = i - 1,                                                                                                     // 1386
				k = i + 1,                                                                                                     // 1387
				l = this.inputs.length;                                                                                        // 1388
			if (i === -1)                                                                                                   // 1389
				return;                                                                                                        // 1390
                                                                                                                   // 1391
			$.each(this.pickers, function(i, p){                                                                            // 1392
				if (!p.getUTCDate())                                                                                           // 1393
					p.setUTCDate(new_date);                                                                                       // 1394
			});                                                                                                             // 1395
                                                                                                                   // 1396
			if (new_date < this.dates[j]){                                                                                  // 1397
				// Date being moved earlier/left                                                                               // 1398
				while (j >= 0 && new_date < this.dates[j]){                                                                    // 1399
					this.pickers[j--].setUTCDate(new_date);                                                                       // 1400
				}                                                                                                              // 1401
			}                                                                                                               // 1402
			else if (new_date > this.dates[k]){                                                                             // 1403
				// Date being moved later/right                                                                                // 1404
				while (k < l && new_date > this.dates[k]){                                                                     // 1405
					this.pickers[k++].setUTCDate(new_date);                                                                       // 1406
				}                                                                                                              // 1407
			}                                                                                                               // 1408
			this.updateDates();                                                                                             // 1409
                                                                                                                   // 1410
			delete this.updating;                                                                                           // 1411
		},                                                                                                               // 1412
		remove: function(){                                                                                              // 1413
			$.map(this.pickers, function(p){ p.remove(); });                                                                // 1414
			delete this.element.data().datepicker;                                                                          // 1415
		}                                                                                                                // 1416
	};                                                                                                                // 1417
                                                                                                                   // 1418
	function opts_from_el(el, prefix){                                                                                // 1419
		// Derive options from element data-attrs                                                                        // 1420
		var data = $(el).data(),                                                                                         // 1421
			out = {}, inkey,                                                                                                // 1422
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');                                                   // 1423
		prefix = new RegExp('^' + prefix.toLowerCase());                                                                 // 1424
		function re_lower(_,a){                                                                                          // 1425
			return a.toLowerCase();                                                                                         // 1426
		}                                                                                                                // 1427
		for (var key in data)                                                                                            // 1428
			if (prefix.test(key)){                                                                                          // 1429
				inkey = key.replace(replace, re_lower);                                                                        // 1430
				out[inkey] = data[key];                                                                                        // 1431
			}                                                                                                               // 1432
		return out;                                                                                                      // 1433
	}                                                                                                                 // 1434
                                                                                                                   // 1435
	function opts_from_locale(lang){                                                                                  // 1436
		// Derive options from locale plugins                                                                            // 1437
		var out = {};                                                                                                    // 1438
		// Check if "de-DE" style date is available, if not language should                                              // 1439
		// fallback to 2 letter code eg "de"                                                                             // 1440
		if (!dates[lang]){                                                                                               // 1441
			lang = lang.split('-')[0];                                                                                      // 1442
			if (!dates[lang])                                                                                               // 1443
				return;                                                                                                        // 1444
		}                                                                                                                // 1445
		var d = dates[lang];                                                                                             // 1446
		$.each(locale_opts, function(i,k){                                                                               // 1447
			if (k in d)                                                                                                     // 1448
				out[k] = d[k];                                                                                                 // 1449
		});                                                                                                              // 1450
		return out;                                                                                                      // 1451
	}                                                                                                                 // 1452
                                                                                                                   // 1453
	var old = $.fn.datepicker;                                                                                        // 1454
	var datepickerPlugin = function(option){                                                                          // 1455
		var args = Array.apply(null, arguments);                                                                         // 1456
		args.shift();                                                                                                    // 1457
		var internal_return;                                                                                             // 1458
		this.each(function(){                                                                                            // 1459
			var $this = $(this),                                                                                            // 1460
				data = $this.data('datepicker'),                                                                               // 1461
				options = typeof option === 'object' && option;                                                                // 1462
			if (!data){                                                                                                     // 1463
				var elopts = opts_from_el(this, 'date'),                                                                       // 1464
					// Preliminary otions                                                                                         // 1465
					xopts = $.extend({}, defaults, elopts, options),                                                              // 1466
					locopts = opts_from_locale(xopts.language),                                                                   // 1467
					// Options priority: js args, data-attrs, locales, defaults                                                   // 1468
					opts = $.extend({}, defaults, locopts, elopts, options);                                                      // 1469
				if ($this.hasClass('input-daterange') || opts.inputs){                                                         // 1470
					var ropts = {                                                                                                 // 1471
						inputs: opts.inputs || $this.find('input').toArray()                                                         // 1472
					};                                                                                                            // 1473
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));                          // 1474
				}                                                                                                              // 1475
				else {                                                                                                         // 1476
					$this.data('datepicker', (data = new Datepicker(this, opts)));                                                // 1477
				}                                                                                                              // 1478
			}                                                                                                               // 1479
			if (typeof option === 'string' && typeof data[option] === 'function'){                                          // 1480
				internal_return = data[option].apply(data, args);                                                              // 1481
				if (internal_return !== undefined)                                                                             // 1482
					return false;                                                                                                 // 1483
			}                                                                                                               // 1484
		});                                                                                                              // 1485
		if (internal_return !== undefined)                                                                               // 1486
			return internal_return;                                                                                         // 1487
		else                                                                                                             // 1488
			return this;                                                                                                    // 1489
	};                                                                                                                // 1490
	$.fn.datepicker = datepickerPlugin;                                                                               // 1491
                                                                                                                   // 1492
	var defaults = $.fn.datepicker.defaults = {                                                                       // 1493
		autoclose: false,                                                                                                // 1494
		beforeShowDay: $.noop,                                                                                           // 1495
		beforeShowMonth: $.noop,                                                                                         // 1496
		calendarWeeks: false,                                                                                            // 1497
		clearBtn: false,                                                                                                 // 1498
		toggleActive: false,                                                                                             // 1499
		daysOfWeekDisabled: [],                                                                                          // 1500
		datesDisabled: [],                                                                                               // 1501
		endDate: Infinity,                                                                                               // 1502
		forceParse: true,                                                                                                // 1503
		format: 'mm/dd/yyyy',                                                                                            // 1504
		keyboardNavigation: true,                                                                                        // 1505
		language: 'en',                                                                                                  // 1506
		minViewMode: 0,                                                                                                  // 1507
		multidate: false,                                                                                                // 1508
		multidateSeparator: ',',                                                                                         // 1509
		orientation: "auto",                                                                                             // 1510
		rtl: false,                                                                                                      // 1511
		startDate: -Infinity,                                                                                            // 1512
		startView: 0,                                                                                                    // 1513
		todayBtn: false,                                                                                                 // 1514
		todayHighlight: false,                                                                                           // 1515
		weekStart: 0,                                                                                                    // 1516
		disableTouchKeyboard: false,                                                                                     // 1517
		container: 'body'                                                                                                // 1518
	};                                                                                                                // 1519
	var locale_opts = $.fn.datepicker.locale_opts = [                                                                 // 1520
		'format',                                                                                                        // 1521
		'rtl',                                                                                                           // 1522
		'weekStart'                                                                                                      // 1523
	];                                                                                                                // 1524
	$.fn.datepicker.Constructor = Datepicker;                                                                         // 1525
	var dates = $.fn.datepicker.dates = {                                                                             // 1526
		en: {                                                                                                            // 1527
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],                 // 1528
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],                                            // 1529
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],                                                      // 1530
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],              // 1532
			today: "Today",                                                                                                 // 1533
			clear: "Clear"                                                                                                  // 1534
		}                                                                                                                // 1535
	};                                                                                                                // 1536
                                                                                                                   // 1537
	var DPGlobal = {                                                                                                  // 1538
		modes: [                                                                                                         // 1539
			{                                                                                                               // 1540
				clsName: 'days',                                                                                               // 1541
				navFnc: 'Month',                                                                                               // 1542
				navStep: 1                                                                                                     // 1543
			},                                                                                                              // 1544
			{                                                                                                               // 1545
				clsName: 'months',                                                                                             // 1546
				navFnc: 'FullYear',                                                                                            // 1547
				navStep: 1                                                                                                     // 1548
			},                                                                                                              // 1549
			{                                                                                                               // 1550
				clsName: 'years',                                                                                              // 1551
				navFnc: 'FullYear',                                                                                            // 1552
				navStep: 10                                                                                                    // 1553
		}],                                                                                                              // 1554
		isLeapYear: function(year){                                                                                      // 1555
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));                                        // 1556
		},                                                                                                               // 1557
		getDaysInMonth: function(year, month){                                                                           // 1558
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];              // 1559
		},                                                                                                               // 1560
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,                                                                        // 1561
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,                                                        // 1562
		parseFormat: function(format){                                                                                   // 1563
			// IE treats \0 as a string end in inputs (truncating the value),                                               // 1564
			// so it's a bad format delimiter, anyway                                                                       // 1565
			var separators = format.replace(this.validParts, '\0').split('\0'),                                             // 1566
				parts = format.match(this.validParts);                                                                         // 1567
			if (!separators || !separators.length || !parts || parts.length === 0){                                         // 1568
				throw new Error("Invalid date format.");                                                                       // 1569
			}                                                                                                               // 1570
			return {separators: separators, parts: parts};                                                                  // 1571
		},                                                                                                               // 1572
		parseDate: function(date, format, language){                                                                     // 1573
			if (!date)                                                                                                      // 1574
				return undefined;                                                                                              // 1575
			if (date instanceof Date)                                                                                       // 1576
				return date;                                                                                                   // 1577
			if (typeof format === 'string')                                                                                 // 1578
				format = DPGlobal.parseFormat(format);                                                                         // 1579
			var part_re = /([\-+]\d+)([dmwy])/,                                                                             // 1580
				parts = date.match(/([\-+]\d+)([dmwy])/g),                                                                     // 1581
				part, dir, i;                                                                                                  // 1582
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){                                                      // 1583
				date = new Date();                                                                                             // 1584
				for (i=0; i < parts.length; i++){                                                                              // 1585
					part = part_re.exec(parts[i]);                                                                                // 1586
					dir = parseInt(part[1]);                                                                                      // 1587
					switch (part[2]){                                                                                             // 1588
						case 'd':                                                                                                    // 1589
							date.setUTCDate(date.getUTCDate() + dir);                                                                   // 1590
							break;                                                                                                      // 1591
						case 'm':                                                                                                    // 1592
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);                                // 1593
							break;                                                                                                      // 1594
						case 'w':                                                                                                    // 1595
							date.setUTCDate(date.getUTCDate() + dir * 7);                                                               // 1596
							break;                                                                                                      // 1597
						case 'y':                                                                                                    // 1598
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);                                 // 1599
							break;                                                                                                      // 1600
					}                                                                                                             // 1601
				}                                                                                                              // 1602
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);                         // 1603
			}                                                                                                               // 1604
			parts = date && date.match(this.nonpunctuation) || [];                                                          // 1605
			date = new Date();                                                                                              // 1606
			var parsed = {},                                                                                                // 1607
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],                                               // 1608
				setters_map = {                                                                                                // 1609
					yyyy: function(d,v){                                                                                          // 1610
						return d.setUTCFullYear(v);                                                                                  // 1611
					},                                                                                                            // 1612
					yy: function(d,v){                                                                                            // 1613
						return d.setUTCFullYear(2000+v);                                                                             // 1614
					},                                                                                                            // 1615
					m: function(d,v){                                                                                             // 1616
						if (isNaN(d))                                                                                                // 1617
							return d;                                                                                                   // 1618
						v -= 1;                                                                                                      // 1619
						while (v < 0) v += 12;                                                                                       // 1620
						v %= 12;                                                                                                     // 1621
						d.setUTCMonth(v);                                                                                            // 1622
						while (d.getUTCMonth() !== v)                                                                                // 1623
							d.setUTCDate(d.getUTCDate()-1);                                                                             // 1624
						return d;                                                                                                    // 1625
					},                                                                                                            // 1626
					d: function(d,v){                                                                                             // 1627
						return d.setUTCDate(v);                                                                                      // 1628
					}                                                                                                             // 1629
				},                                                                                                             // 1630
				val, filtered;                                                                                                 // 1631
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];                                    // 1632
			setters_map['dd'] = setters_map['d'];                                                                           // 1633
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);                                   // 1634
			var fparts = format.parts.slice();                                                                              // 1635
			// Remove noop parts                                                                                            // 1636
			if (parts.length !== fparts.length){                                                                            // 1637
				fparts = $(fparts).filter(function(i,p){                                                                       // 1638
					return $.inArray(p, setters_order) !== -1;                                                                    // 1639
				}).toArray();                                                                                                  // 1640
			}                                                                                                               // 1641
			// Process remainder                                                                                            // 1642
			function match_part(){                                                                                          // 1643
				var m = this.slice(0, parts[i].length),                                                                        // 1644
					p = parts[i].slice(0, m.length);                                                                              // 1645
				return m.toLowerCase() === p.toLowerCase();                                                                    // 1646
			}                                                                                                               // 1647
			if (parts.length === fparts.length){                                                                            // 1648
				var cnt;                                                                                                       // 1649
				for (i=0, cnt = fparts.length; i < cnt; i++){                                                                  // 1650
					val = parseInt(parts[i], 10);                                                                                 // 1651
					part = fparts[i];                                                                                             // 1652
					if (isNaN(val)){                                                                                              // 1653
						switch (part){                                                                                               // 1654
							case 'MM':                                                                                                  // 1655
								filtered = $(dates[language].months).filter(match_part);                                                   // 1656
								val = $.inArray(filtered[0], dates[language].months) + 1;                                                  // 1657
								break;                                                                                                     // 1658
							case 'M':                                                                                                   // 1659
								filtered = $(dates[language].monthsShort).filter(match_part);                                              // 1660
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;                                             // 1661
								break;                                                                                                     // 1662
						}                                                                                                            // 1663
					}                                                                                                             // 1664
					parsed[part] = val;                                                                                           // 1665
				}                                                                                                              // 1666
				var _date, s;                                                                                                  // 1667
				for (i=0; i < setters_order.length; i++){                                                                      // 1668
					s = setters_order[i];                                                                                         // 1669
					if (s in parsed && !isNaN(parsed[s])){                                                                        // 1670
						_date = new Date(date);                                                                                      // 1671
						setters_map[s](_date, parsed[s]);                                                                            // 1672
						if (!isNaN(_date))                                                                                           // 1673
							date = _date;                                                                                               // 1674
					}                                                                                                             // 1675
				}                                                                                                              // 1676
			}                                                                                                               // 1677
			return date;                                                                                                    // 1678
		},                                                                                                               // 1679
		formatDate: function(date, format, language){                                                                    // 1680
			if (!date)                                                                                                      // 1681
				return '';                                                                                                     // 1682
			if (typeof format === 'string')                                                                                 // 1683
				format = DPGlobal.parseFormat(format);                                                                         // 1684
			var val = {                                                                                                     // 1685
				d: date.getUTCDate(),                                                                                          // 1686
				D: dates[language].daysShort[date.getUTCDay()],                                                                // 1687
				DD: dates[language].days[date.getUTCDay()],                                                                    // 1688
				m: date.getUTCMonth() + 1,                                                                                     // 1689
				M: dates[language].monthsShort[date.getUTCMonth()],                                                            // 1690
				MM: dates[language].months[date.getUTCMonth()],                                                                // 1691
				yy: date.getUTCFullYear().toString().substring(2),                                                             // 1692
				yyyy: date.getUTCFullYear()                                                                                    // 1693
			};                                                                                                              // 1694
			val.dd = (val.d < 10 ? '0' : '') + val.d;                                                                       // 1695
			val.mm = (val.m < 10 ? '0' : '') + val.m;                                                                       // 1696
			date = [];                                                                                                      // 1697
			var seps = $.extend([], format.separators);                                                                     // 1698
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){                                                        // 1699
				if (seps.length)                                                                                               // 1700
					date.push(seps.shift());                                                                                      // 1701
				date.push(val[format.parts[i]]);                                                                               // 1702
			}                                                                                                               // 1703
			return date.join('');                                                                                           // 1704
		},                                                                                                               // 1705
		headTemplate: '<thead>'+                                                                                         // 1706
							'<tr>'+                                                                                                     // 1707
								'<th class="prev">&#171;</th>'+                                                                            // 1708
								'<th colspan="5" class="datepicker-switch"></th>'+                                                         // 1709
								'<th class="next">&#187;</th>'+                                                                            // 1710
							'</tr>'+                                                                                                    // 1711
						'</thead>',                                                                                                  // 1712
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',                                                   // 1713
		footTemplate: '<tfoot>'+                                                                                         // 1714
							'<tr>'+                                                                                                     // 1715
								'<th colspan="7" class="today"></th>'+                                                                     // 1716
							'</tr>'+                                                                                                    // 1717
							'<tr>'+                                                                                                     // 1718
								'<th colspan="7" class="clear"></th>'+                                                                     // 1719
							'</tr>'+                                                                                                    // 1720
						'</tfoot>'                                                                                                   // 1721
	};                                                                                                                // 1722
	DPGlobal.template = '<div class="datepicker">'+                                                                   // 1723
							'<div class="datepicker-days">'+                                                                            // 1724
								'<table class=" table-condensed">'+                                                                        // 1725
									DPGlobal.headTemplate+                                                                                    // 1726
									'<tbody></tbody>'+                                                                                        // 1727
									DPGlobal.footTemplate+                                                                                    // 1728
								'</table>'+                                                                                                // 1729
							'</div>'+                                                                                                   // 1730
							'<div class="datepicker-months">'+                                                                          // 1731
								'<table class="table-condensed">'+                                                                         // 1732
									DPGlobal.headTemplate+                                                                                    // 1733
									DPGlobal.contTemplate+                                                                                    // 1734
									DPGlobal.footTemplate+                                                                                    // 1735
								'</table>'+                                                                                                // 1736
							'</div>'+                                                                                                   // 1737
							'<div class="datepicker-years">'+                                                                           // 1738
								'<table class="table-condensed">'+                                                                         // 1739
									DPGlobal.headTemplate+                                                                                    // 1740
									DPGlobal.contTemplate+                                                                                    // 1741
									DPGlobal.footTemplate+                                                                                    // 1742
								'</table>'+                                                                                                // 1743
							'</div>'+                                                                                                   // 1744
						'</div>';                                                                                                    // 1745
                                                                                                                   // 1746
	$.fn.datepicker.DPGlobal = DPGlobal;                                                                              // 1747
                                                                                                                   // 1748
                                                                                                                   // 1749
	/* DATEPICKER NO CONFLICT                                                                                         // 1750
	* =================== */                                                                                          // 1751
                                                                                                                   // 1752
	$.fn.datepicker.noConflict = function(){                                                                          // 1753
		$.fn.datepicker = old;                                                                                           // 1754
		return this;                                                                                                     // 1755
	};                                                                                                                // 1756
                                                                                                                   // 1757
                                                                                                                   // 1758
	/* DATEPICKER DATA-API                                                                                            // 1759
	* ================== */                                                                                           // 1760
                                                                                                                   // 1761
	$(document).on(                                                                                                   // 1762
		'focus.datepicker.data-api click.datepicker.data-api',                                                           // 1763
		'[data-provide="datepicker"]',                                                                                   // 1764
		function(e){                                                                                                     // 1765
			var $this = $(this);                                                                                            // 1766
			if ($this.data('datepicker'))                                                                                   // 1767
				return;                                                                                                        // 1768
			e.preventDefault();                                                                                             // 1769
			// component click requires us to explicitly show it                                                            // 1770
			datepickerPlugin.call($this, 'show');                                                                           // 1771
		}                                                                                                                // 1772
	);                                                                                                                // 1773
	$(function(){                                                                                                     // 1774
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));                                                  // 1775
	});                                                                                                               // 1776
                                                                                                                   // 1777
}(window.jQuery));                                                                                                 // 1778
                                                                                                                   // 1779
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rajit:bootstrap3-datepicker'] = {};

})();
