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
// packages/twbs:bootstrap/dist/js/bootstrap.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Bootstrap v3.3.4 (http://getbootstrap.com)                                                                          // 2
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 3
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (typeof jQuery === 'undefined') {                                                                                   // 7
  throw new Error('Bootstrap\'s JavaScript requires jQuery')                                                           // 8
}                                                                                                                      // 9
                                                                                                                       // 10
+function ($) {                                                                                                        // 11
  'use strict';                                                                                                        // 12
  var version = $.fn.jquery.split(' ')[0].split('.')                                                                   // 13
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {                  // 14
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')                                 // 15
  }                                                                                                                    // 16
}(jQuery);                                                                                                             // 17
                                                                                                                       // 18
/* ========================================================================                                            // 19
 * Bootstrap: transition.js v3.3.4                                                                                     // 20
 * http://getbootstrap.com/javascript/#transitions                                                                     // 21
 * ========================================================================                                            // 22
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 23
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 24
 * ======================================================================== */                                         // 25
                                                                                                                       // 26
                                                                                                                       // 27
+function ($) {                                                                                                        // 28
  'use strict';                                                                                                        // 29
                                                                                                                       // 30
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                                      // 31
  // ============================================================                                                      // 32
                                                                                                                       // 33
  function transitionEnd() {                                                                                           // 34
    var el = document.createElement('bootstrap')                                                                       // 35
                                                                                                                       // 36
    var transEndEventNames = {                                                                                         // 37
      WebkitTransition : 'webkitTransitionEnd',                                                                        // 38
      MozTransition    : 'transitionend',                                                                              // 39
      OTransition      : 'oTransitionEnd otransitionend',                                                              // 40
      transition       : 'transitionend'                                                                               // 41
    }                                                                                                                  // 42
                                                                                                                       // 43
    for (var name in transEndEventNames) {                                                                             // 44
      if (el.style[name] !== undefined) {                                                                              // 45
        return { end: transEndEventNames[name] }                                                                       // 46
      }                                                                                                                // 47
    }                                                                                                                  // 48
                                                                                                                       // 49
    return false // explicit for ie8 (  ._.)                                                                           // 50
  }                                                                                                                    // 51
                                                                                                                       // 52
  // http://blog.alexmaccaw.com/css-transitions                                                                        // 53
  $.fn.emulateTransitionEnd = function (duration) {                                                                    // 54
    var called = false                                                                                                 // 55
    var $el = this                                                                                                     // 56
    $(this).one('bsTransitionEnd', function () { called = true })                                                      // 57
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }                               // 58
    setTimeout(callback, duration)                                                                                     // 59
    return this                                                                                                        // 60
  }                                                                                                                    // 61
                                                                                                                       // 62
  $(function () {                                                                                                      // 63
    $.support.transition = transitionEnd()                                                                             // 64
                                                                                                                       // 65
    if (!$.support.transition) return                                                                                  // 66
                                                                                                                       // 67
    $.event.special.bsTransitionEnd = {                                                                                // 68
      bindType: $.support.transition.end,                                                                              // 69
      delegateType: $.support.transition.end,                                                                          // 70
      handle: function (e) {                                                                                           // 71
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)                                    // 72
      }                                                                                                                // 73
    }                                                                                                                  // 74
  })                                                                                                                   // 75
                                                                                                                       // 76
}(jQuery);                                                                                                             // 77
                                                                                                                       // 78
/* ========================================================================                                            // 79
 * Bootstrap: alert.js v3.3.4                                                                                          // 80
 * http://getbootstrap.com/javascript/#alerts                                                                          // 81
 * ========================================================================                                            // 82
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 83
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 84
 * ======================================================================== */                                         // 85
                                                                                                                       // 86
                                                                                                                       // 87
+function ($) {                                                                                                        // 88
  'use strict';                                                                                                        // 89
                                                                                                                       // 90
  // ALERT CLASS DEFINITION                                                                                            // 91
  // ======================                                                                                            // 92
                                                                                                                       // 93
  var dismiss = '[data-dismiss="alert"]'                                                                               // 94
  var Alert   = function (el) {                                                                                        // 95
    $(el).on('click', dismiss, this.close)                                                                             // 96
  }                                                                                                                    // 97
                                                                                                                       // 98
  Alert.VERSION = '3.3.4'                                                                                              // 99
                                                                                                                       // 100
  Alert.TRANSITION_DURATION = 150                                                                                      // 101
                                                                                                                       // 102
  Alert.prototype.close = function (e) {                                                                               // 103
    var $this    = $(this)                                                                                             // 104
    var selector = $this.attr('data-target')                                                                           // 105
                                                                                                                       // 106
    if (!selector) {                                                                                                   // 107
      selector = $this.attr('href')                                                                                    // 108
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                   // 109
    }                                                                                                                  // 110
                                                                                                                       // 111
    var $parent = $(selector)                                                                                          // 112
                                                                                                                       // 113
    if (e) e.preventDefault()                                                                                          // 114
                                                                                                                       // 115
    if (!$parent.length) {                                                                                             // 116
      $parent = $this.closest('.alert')                                                                                // 117
    }                                                                                                                  // 118
                                                                                                                       // 119
    $parent.trigger(e = $.Event('close.bs.alert'))                                                                     // 120
                                                                                                                       // 121
    if (e.isDefaultPrevented()) return                                                                                 // 122
                                                                                                                       // 123
    $parent.removeClass('in')                                                                                          // 124
                                                                                                                       // 125
    function removeElement() {                                                                                         // 126
      // detach from parent, fire event then clean up data                                                             // 127
      $parent.detach().trigger('closed.bs.alert').remove()                                                             // 128
    }                                                                                                                  // 129
                                                                                                                       // 130
    $.support.transition && $parent.hasClass('fade') ?                                                                 // 131
      $parent                                                                                                          // 132
        .one('bsTransitionEnd', removeElement)                                                                         // 133
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :                                                             // 134
      removeElement()                                                                                                  // 135
  }                                                                                                                    // 136
                                                                                                                       // 137
                                                                                                                       // 138
  // ALERT PLUGIN DEFINITION                                                                                           // 139
  // =======================                                                                                           // 140
                                                                                                                       // 141
  function Plugin(option) {                                                                                            // 142
    return this.each(function () {                                                                                     // 143
      var $this = $(this)                                                                                              // 144
      var data  = $this.data('bs.alert')                                                                               // 145
                                                                                                                       // 146
      if (!data) $this.data('bs.alert', (data = new Alert(this)))                                                      // 147
      if (typeof option == 'string') data[option].call($this)                                                          // 148
    })                                                                                                                 // 149
  }                                                                                                                    // 150
                                                                                                                       // 151
  var old = $.fn.alert                                                                                                 // 152
                                                                                                                       // 153
  $.fn.alert             = Plugin                                                                                      // 154
  $.fn.alert.Constructor = Alert                                                                                       // 155
                                                                                                                       // 156
                                                                                                                       // 157
  // ALERT NO CONFLICT                                                                                                 // 158
  // =================                                                                                                 // 159
                                                                                                                       // 160
  $.fn.alert.noConflict = function () {                                                                                // 161
    $.fn.alert = old                                                                                                   // 162
    return this                                                                                                        // 163
  }                                                                                                                    // 164
                                                                                                                       // 165
                                                                                                                       // 166
  // ALERT DATA-API                                                                                                    // 167
  // ==============                                                                                                    // 168
                                                                                                                       // 169
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)                                            // 170
                                                                                                                       // 171
}(jQuery);                                                                                                             // 172
                                                                                                                       // 173
/* ========================================================================                                            // 174
 * Bootstrap: button.js v3.3.4                                                                                         // 175
 * http://getbootstrap.com/javascript/#buttons                                                                         // 176
 * ========================================================================                                            // 177
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 178
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 179
 * ======================================================================== */                                         // 180
                                                                                                                       // 181
                                                                                                                       // 182
+function ($) {                                                                                                        // 183
  'use strict';                                                                                                        // 184
                                                                                                                       // 185
  // BUTTON PUBLIC CLASS DEFINITION                                                                                    // 186
  // ==============================                                                                                    // 187
                                                                                                                       // 188
  var Button = function (element, options) {                                                                           // 189
    this.$element  = $(element)                                                                                        // 190
    this.options   = $.extend({}, Button.DEFAULTS, options)                                                            // 191
    this.isLoading = false                                                                                             // 192
  }                                                                                                                    // 193
                                                                                                                       // 194
  Button.VERSION  = '3.3.4'                                                                                            // 195
                                                                                                                       // 196
  Button.DEFAULTS = {                                                                                                  // 197
    loadingText: 'loading...'                                                                                          // 198
  }                                                                                                                    // 199
                                                                                                                       // 200
  Button.prototype.setState = function (state) {                                                                       // 201
    var d    = 'disabled'                                                                                              // 202
    var $el  = this.$element                                                                                           // 203
    var val  = $el.is('input') ? 'val' : 'html'                                                                        // 204
    var data = $el.data()                                                                                              // 205
                                                                                                                       // 206
    state = state + 'Text'                                                                                             // 207
                                                                                                                       // 208
    if (data.resetText == null) $el.data('resetText', $el[val]())                                                      // 209
                                                                                                                       // 210
    // push to event loop to allow forms to submit                                                                     // 211
    setTimeout($.proxy(function () {                                                                                   // 212
      $el[val](data[state] == null ? this.options[state] : data[state])                                                // 213
                                                                                                                       // 214
      if (state == 'loadingText') {                                                                                    // 215
        this.isLoading = true                                                                                          // 216
        $el.addClass(d).attr(d, d)                                                                                     // 217
      } else if (this.isLoading) {                                                                                     // 218
        this.isLoading = false                                                                                         // 219
        $el.removeClass(d).removeAttr(d)                                                                               // 220
      }                                                                                                                // 221
    }, this), 0)                                                                                                       // 222
  }                                                                                                                    // 223
                                                                                                                       // 224
  Button.prototype.toggle = function () {                                                                              // 225
    var changed = true                                                                                                 // 226
    var $parent = this.$element.closest('[data-toggle="buttons"]')                                                     // 227
                                                                                                                       // 228
    if ($parent.length) {                                                                                              // 229
      var $input = this.$element.find('input')                                                                         // 230
      if ($input.prop('type') == 'radio') {                                                                            // 231
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false                                // 232
        else $parent.find('.active').removeClass('active')                                                             // 233
      }                                                                                                                // 234
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')                         // 235
    } else {                                                                                                           // 236
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))                                            // 237
    }                                                                                                                  // 238
                                                                                                                       // 239
    if (changed) this.$element.toggleClass('active')                                                                   // 240
  }                                                                                                                    // 241
                                                                                                                       // 242
                                                                                                                       // 243
  // BUTTON PLUGIN DEFINITION                                                                                          // 244
  // ========================                                                                                          // 245
                                                                                                                       // 246
  function Plugin(option) {                                                                                            // 247
    return this.each(function () {                                                                                     // 248
      var $this   = $(this)                                                                                            // 249
      var data    = $this.data('bs.button')                                                                            // 250
      var options = typeof option == 'object' && option                                                                // 251
                                                                                                                       // 252
      if (!data) $this.data('bs.button', (data = new Button(this, options)))                                           // 253
                                                                                                                       // 254
      if (option == 'toggle') data.toggle()                                                                            // 255
      else if (option) data.setState(option)                                                                           // 256
    })                                                                                                                 // 257
  }                                                                                                                    // 258
                                                                                                                       // 259
  var old = $.fn.button                                                                                                // 260
                                                                                                                       // 261
  $.fn.button             = Plugin                                                                                     // 262
  $.fn.button.Constructor = Button                                                                                     // 263
                                                                                                                       // 264
                                                                                                                       // 265
  // BUTTON NO CONFLICT                                                                                                // 266
  // ==================                                                                                                // 267
                                                                                                                       // 268
  $.fn.button.noConflict = function () {                                                                               // 269
    $.fn.button = old                                                                                                  // 270
    return this                                                                                                        // 271
  }                                                                                                                    // 272
                                                                                                                       // 273
                                                                                                                       // 274
  // BUTTON DATA-API                                                                                                   // 275
  // ===============                                                                                                   // 276
                                                                                                                       // 277
  $(document)                                                                                                          // 278
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {                                          // 279
      var $btn = $(e.target)                                                                                           // 280
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')                                                           // 281
      Plugin.call($btn, 'toggle')                                                                                      // 282
      e.preventDefault()                                                                                               // 283
    })                                                                                                                 // 284
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {                  // 285
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))                                    // 286
    })                                                                                                                 // 287
                                                                                                                       // 288
}(jQuery);                                                                                                             // 289
                                                                                                                       // 290
/* ========================================================================                                            // 291
 * Bootstrap: carousel.js v3.3.4                                                                                       // 292
 * http://getbootstrap.com/javascript/#carousel                                                                        // 293
 * ========================================================================                                            // 294
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 295
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 296
 * ======================================================================== */                                         // 297
                                                                                                                       // 298
                                                                                                                       // 299
+function ($) {                                                                                                        // 300
  'use strict';                                                                                                        // 301
                                                                                                                       // 302
  // CAROUSEL CLASS DEFINITION                                                                                         // 303
  // =========================                                                                                         // 304
                                                                                                                       // 305
  var Carousel = function (element, options) {                                                                         // 306
    this.$element    = $(element)                                                                                      // 307
    this.$indicators = this.$element.find('.carousel-indicators')                                                      // 308
    this.options     = options                                                                                         // 309
    this.paused      = null                                                                                            // 310
    this.sliding     = null                                                                                            // 311
    this.interval    = null                                                                                            // 312
    this.$active     = null                                                                                            // 313
    this.$items      = null                                                                                            // 314
                                                                                                                       // 315
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))                      // 316
                                                                                                                       // 317
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element                    // 318
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))                                                         // 319
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))                                                         // 320
  }                                                                                                                    // 321
                                                                                                                       // 322
  Carousel.VERSION  = '3.3.4'                                                                                          // 323
                                                                                                                       // 324
  Carousel.TRANSITION_DURATION = 600                                                                                   // 325
                                                                                                                       // 326
  Carousel.DEFAULTS = {                                                                                                // 327
    interval: 5000,                                                                                                    // 328
    pause: 'hover',                                                                                                    // 329
    wrap: true,                                                                                                        // 330
    keyboard: true                                                                                                     // 331
  }                                                                                                                    // 332
                                                                                                                       // 333
  Carousel.prototype.keydown = function (e) {                                                                          // 334
    if (/input|textarea/i.test(e.target.tagName)) return                                                               // 335
    switch (e.which) {                                                                                                 // 336
      case 37: this.prev(); break                                                                                      // 337
      case 39: this.next(); break                                                                                      // 338
      default: return                                                                                                  // 339
    }                                                                                                                  // 340
                                                                                                                       // 341
    e.preventDefault()                                                                                                 // 342
  }                                                                                                                    // 343
                                                                                                                       // 344
  Carousel.prototype.cycle = function (e) {                                                                            // 345
    e || (this.paused = false)                                                                                         // 346
                                                                                                                       // 347
    this.interval && clearInterval(this.interval)                                                                      // 348
                                                                                                                       // 349
    this.options.interval                                                                                              // 350
      && !this.paused                                                                                                  // 351
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))                                // 352
                                                                                                                       // 353
    return this                                                                                                        // 354
  }                                                                                                                    // 355
                                                                                                                       // 356
  Carousel.prototype.getItemIndex = function (item) {                                                                  // 357
    this.$items = item.parent().children('.item')                                                                      // 358
    return this.$items.index(item || this.$active)                                                                     // 359
  }                                                                                                                    // 360
                                                                                                                       // 361
  Carousel.prototype.getItemForDirection = function (direction, active) {                                              // 362
    var activeIndex = this.getItemIndex(active)                                                                        // 363
    var willWrap = (direction == 'prev' && activeIndex === 0)                                                          // 364
                || (direction == 'next' && activeIndex == (this.$items.length - 1))                                    // 365
    if (willWrap && !this.options.wrap) return active                                                                  // 366
    var delta = direction == 'prev' ? -1 : 1                                                                           // 367
    var itemIndex = (activeIndex + delta) % this.$items.length                                                         // 368
    return this.$items.eq(itemIndex)                                                                                   // 369
  }                                                                                                                    // 370
                                                                                                                       // 371
  Carousel.prototype.to = function (pos) {                                                                             // 372
    var that        = this                                                                                             // 373
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))                             // 374
                                                                                                                       // 375
    if (pos > (this.$items.length - 1) || pos < 0) return                                                              // 376
                                                                                                                       // 377
    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"  // 378
    if (activeIndex == pos) return this.pause().cycle()                                                                // 379
                                                                                                                       // 380
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))                                        // 381
  }                                                                                                                    // 382
                                                                                                                       // 383
  Carousel.prototype.pause = function (e) {                                                                            // 384
    e || (this.paused = true)                                                                                          // 385
                                                                                                                       // 386
    if (this.$element.find('.next, .prev').length && $.support.transition) {                                           // 387
      this.$element.trigger($.support.transition.end)                                                                  // 388
      this.cycle(true)                                                                                                 // 389
    }                                                                                                                  // 390
                                                                                                                       // 391
    this.interval = clearInterval(this.interval)                                                                       // 392
                                                                                                                       // 393
    return this                                                                                                        // 394
  }                                                                                                                    // 395
                                                                                                                       // 396
  Carousel.prototype.next = function () {                                                                              // 397
    if (this.sliding) return                                                                                           // 398
    return this.slide('next')                                                                                          // 399
  }                                                                                                                    // 400
                                                                                                                       // 401
  Carousel.prototype.prev = function () {                                                                              // 402
    if (this.sliding) return                                                                                           // 403
    return this.slide('prev')                                                                                          // 404
  }                                                                                                                    // 405
                                                                                                                       // 406
  Carousel.prototype.slide = function (type, next) {                                                                   // 407
    var $active   = this.$element.find('.item.active')                                                                 // 408
    var $next     = next || this.getItemForDirection(type, $active)                                                    // 409
    var isCycling = this.interval                                                                                      // 410
    var direction = type == 'next' ? 'left' : 'right'                                                                  // 411
    var that      = this                                                                                               // 412
                                                                                                                       // 413
    if ($next.hasClass('active')) return (this.sliding = false)                                                        // 414
                                                                                                                       // 415
    var relatedTarget = $next[0]                                                                                       // 416
    var slideEvent = $.Event('slide.bs.carousel', {                                                                    // 417
      relatedTarget: relatedTarget,                                                                                    // 418
      direction: direction                                                                                             // 419
    })                                                                                                                 // 420
    this.$element.trigger(slideEvent)                                                                                  // 421
    if (slideEvent.isDefaultPrevented()) return                                                                        // 422
                                                                                                                       // 423
    this.sliding = true                                                                                                // 424
                                                                                                                       // 425
    isCycling && this.pause()                                                                                          // 426
                                                                                                                       // 427
    if (this.$indicators.length) {                                                                                     // 428
      this.$indicators.find('.active').removeClass('active')                                                           // 429
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])                                    // 430
      $nextIndicator && $nextIndicator.addClass('active')                                                              // 431
    }                                                                                                                  // 432
                                                                                                                       // 433
    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid" // 434
    if ($.support.transition && this.$element.hasClass('slide')) {                                                     // 435
      $next.addClass(type)                                                                                             // 436
      $next[0].offsetWidth // force reflow                                                                             // 437
      $active.addClass(direction)                                                                                      // 438
      $next.addClass(direction)                                                                                        // 439
      $active                                                                                                          // 440
        .one('bsTransitionEnd', function () {                                                                          // 441
          $next.removeClass([type, direction].join(' ')).addClass('active')                                            // 442
          $active.removeClass(['active', direction].join(' '))                                                         // 443
          that.sliding = false                                                                                         // 444
          setTimeout(function () {                                                                                     // 445
            that.$element.trigger(slidEvent)                                                                           // 446
          }, 0)                                                                                                        // 447
        })                                                                                                             // 448
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)                                                            // 449
    } else {                                                                                                           // 450
      $active.removeClass('active')                                                                                    // 451
      $next.addClass('active')                                                                                         // 452
      this.sliding = false                                                                                             // 453
      this.$element.trigger(slidEvent)                                                                                 // 454
    }                                                                                                                  // 455
                                                                                                                       // 456
    isCycling && this.cycle()                                                                                          // 457
                                                                                                                       // 458
    return this                                                                                                        // 459
  }                                                                                                                    // 460
                                                                                                                       // 461
                                                                                                                       // 462
  // CAROUSEL PLUGIN DEFINITION                                                                                        // 463
  // ==========================                                                                                        // 464
                                                                                                                       // 465
  function Plugin(option) {                                                                                            // 466
    return this.each(function () {                                                                                     // 467
      var $this   = $(this)                                                                                            // 468
      var data    = $this.data('bs.carousel')                                                                          // 469
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 470
      var action  = typeof option == 'string' ? option : options.slide                                                 // 471
                                                                                                                       // 472
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))                                       // 473
      if (typeof option == 'number') data.to(option)                                                                   // 474
      else if (action) data[action]()                                                                                  // 475
      else if (options.interval) data.pause().cycle()                                                                  // 476
    })                                                                                                                 // 477
  }                                                                                                                    // 478
                                                                                                                       // 479
  var old = $.fn.carousel                                                                                              // 480
                                                                                                                       // 481
  $.fn.carousel             = Plugin                                                                                   // 482
  $.fn.carousel.Constructor = Carousel                                                                                 // 483
                                                                                                                       // 484
                                                                                                                       // 485
  // CAROUSEL NO CONFLICT                                                                                              // 486
  // ====================                                                                                              // 487
                                                                                                                       // 488
  $.fn.carousel.noConflict = function () {                                                                             // 489
    $.fn.carousel = old                                                                                                // 490
    return this                                                                                                        // 491
  }                                                                                                                    // 492
                                                                                                                       // 493
                                                                                                                       // 494
  // CAROUSEL DATA-API                                                                                                 // 495
  // =================                                                                                                 // 496
                                                                                                                       // 497
  var clickHandler = function (e) {                                                                                    // 498
    var href                                                                                                           // 499
    var $this   = $(this)                                                                                              // 500
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return                                                                          // 502
    var options = $.extend({}, $target.data(), $this.data())                                                           // 503
    var slideIndex = $this.attr('data-slide-to')                                                                       // 504
    if (slideIndex) options.interval = false                                                                           // 505
                                                                                                                       // 506
    Plugin.call($target, options)                                                                                      // 507
                                                                                                                       // 508
    if (slideIndex) {                                                                                                  // 509
      $target.data('bs.carousel').to(slideIndex)                                                                       // 510
    }                                                                                                                  // 511
                                                                                                                       // 512
    e.preventDefault()                                                                                                 // 513
  }                                                                                                                    // 514
                                                                                                                       // 515
  $(document)                                                                                                          // 516
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)                                                    // 517
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)                                                 // 518
                                                                                                                       // 519
  $(window).on('load', function () {                                                                                   // 520
    $('[data-ride="carousel"]').each(function () {                                                                     // 521
      var $carousel = $(this)                                                                                          // 522
      Plugin.call($carousel, $carousel.data())                                                                         // 523
    })                                                                                                                 // 524
  })                                                                                                                   // 525
                                                                                                                       // 526
}(jQuery);                                                                                                             // 527
                                                                                                                       // 528
/* ========================================================================                                            // 529
 * Bootstrap: collapse.js v3.3.4                                                                                       // 530
 * http://getbootstrap.com/javascript/#collapse                                                                        // 531
 * ========================================================================                                            // 532
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 533
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 534
 * ======================================================================== */                                         // 535
                                                                                                                       // 536
                                                                                                                       // 537
+function ($) {                                                                                                        // 538
  'use strict';                                                                                                        // 539
                                                                                                                       // 540
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                                  // 541
  // ================================                                                                                  // 542
                                                                                                                       // 543
  var Collapse = function (element, options) {                                                                         // 544
    this.$element      = $(element)                                                                                    // 545
    this.options       = $.extend({}, Collapse.DEFAULTS, options)                                                      // 546
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +                                   // 547
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')                              // 548
    this.transitioning = null                                                                                          // 549
                                                                                                                       // 550
    if (this.options.parent) {                                                                                         // 551
      this.$parent = this.getParent()                                                                                  // 552
    } else {                                                                                                           // 553
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)                                                      // 554
    }                                                                                                                  // 555
                                                                                                                       // 556
    if (this.options.toggle) this.toggle()                                                                             // 557
  }                                                                                                                    // 558
                                                                                                                       // 559
  Collapse.VERSION  = '3.3.4'                                                                                          // 560
                                                                                                                       // 561
  Collapse.TRANSITION_DURATION = 350                                                                                   // 562
                                                                                                                       // 563
  Collapse.DEFAULTS = {                                                                                                // 564
    toggle: true                                                                                                       // 565
  }                                                                                                                    // 566
                                                                                                                       // 567
  Collapse.prototype.dimension = function () {                                                                         // 568
    var hasWidth = this.$element.hasClass('width')                                                                     // 569
    return hasWidth ? 'width' : 'height'                                                                               // 570
  }                                                                                                                    // 571
                                                                                                                       // 572
  Collapse.prototype.show = function () {                                                                              // 573
    if (this.transitioning || this.$element.hasClass('in')) return                                                     // 574
                                                                                                                       // 575
    var activesData                                                                                                    // 576
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')                         // 577
                                                                                                                       // 578
    if (actives && actives.length) {                                                                                   // 579
      activesData = actives.data('bs.collapse')                                                                        // 580
      if (activesData && activesData.transitioning) return                                                             // 581
    }                                                                                                                  // 582
                                                                                                                       // 583
    var startEvent = $.Event('show.bs.collapse')                                                                       // 584
    this.$element.trigger(startEvent)                                                                                  // 585
    if (startEvent.isDefaultPrevented()) return                                                                        // 586
                                                                                                                       // 587
    if (actives && actives.length) {                                                                                   // 588
      Plugin.call(actives, 'hide')                                                                                     // 589
      activesData || actives.data('bs.collapse', null)                                                                 // 590
    }                                                                                                                  // 591
                                                                                                                       // 592
    var dimension = this.dimension()                                                                                   // 593
                                                                                                                       // 594
    this.$element                                                                                                      // 595
      .removeClass('collapse')                                                                                         // 596
      .addClass('collapsing')[dimension](0)                                                                            // 597
      .attr('aria-expanded', true)                                                                                     // 598
                                                                                                                       // 599
    this.$trigger                                                                                                      // 600
      .removeClass('collapsed')                                                                                        // 601
      .attr('aria-expanded', true)                                                                                     // 602
                                                                                                                       // 603
    this.transitioning = 1                                                                                             // 604
                                                                                                                       // 605
    var complete = function () {                                                                                       // 606
      this.$element                                                                                                    // 607
        .removeClass('collapsing')                                                                                     // 608
        .addClass('collapse in')[dimension]('')                                                                        // 609
      this.transitioning = 0                                                                                           // 610
      this.$element                                                                                                    // 611
        .trigger('shown.bs.collapse')                                                                                  // 612
    }                                                                                                                  // 613
                                                                                                                       // 614
    if (!$.support.transition) return complete.call(this)                                                              // 615
                                                                                                                       // 616
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))                                                      // 617
                                                                                                                       // 618
    this.$element                                                                                                      // 619
      .one('bsTransitionEnd', $.proxy(complete, this))                                                                 // 620
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])                     // 621
  }                                                                                                                    // 622
                                                                                                                       // 623
  Collapse.prototype.hide = function () {                                                                              // 624
    if (this.transitioning || !this.$element.hasClass('in')) return                                                    // 625
                                                                                                                       // 626
    var startEvent = $.Event('hide.bs.collapse')                                                                       // 627
    this.$element.trigger(startEvent)                                                                                  // 628
    if (startEvent.isDefaultPrevented()) return                                                                        // 629
                                                                                                                       // 630
    var dimension = this.dimension()                                                                                   // 631
                                                                                                                       // 632
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight                                               // 633
                                                                                                                       // 634
    this.$element                                                                                                      // 635
      .addClass('collapsing')                                                                                          // 636
      .removeClass('collapse in')                                                                                      // 637
      .attr('aria-expanded', false)                                                                                    // 638
                                                                                                                       // 639
    this.$trigger                                                                                                      // 640
      .addClass('collapsed')                                                                                           // 641
      .attr('aria-expanded', false)                                                                                    // 642
                                                                                                                       // 643
    this.transitioning = 1                                                                                             // 644
                                                                                                                       // 645
    var complete = function () {                                                                                       // 646
      this.transitioning = 0                                                                                           // 647
      this.$element                                                                                                    // 648
        .removeClass('collapsing')                                                                                     // 649
        .addClass('collapse')                                                                                          // 650
        .trigger('hidden.bs.collapse')                                                                                 // 651
    }                                                                                                                  // 652
                                                                                                                       // 653
    if (!$.support.transition) return complete.call(this)                                                              // 654
                                                                                                                       // 655
    this.$element                                                                                                      // 656
      [dimension](0)                                                                                                   // 657
      .one('bsTransitionEnd', $.proxy(complete, this))                                                                 // 658
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)                                                              // 659
  }                                                                                                                    // 660
                                                                                                                       // 661
  Collapse.prototype.toggle = function () {                                                                            // 662
    this[this.$element.hasClass('in') ? 'hide' : 'show']()                                                             // 663
  }                                                                                                                    // 664
                                                                                                                       // 665
  Collapse.prototype.getParent = function () {                                                                         // 666
    return $(this.options.parent)                                                                                      // 667
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')                                     // 668
      .each($.proxy(function (i, element) {                                                                            // 669
        var $element = $(element)                                                                                      // 670
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)                                        // 671
      }, this))                                                                                                        // 672
      .end()                                                                                                           // 673
  }                                                                                                                    // 674
                                                                                                                       // 675
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {                                        // 676
    var isOpen = $element.hasClass('in')                                                                               // 677
                                                                                                                       // 678
    $element.attr('aria-expanded', isOpen)                                                                             // 679
    $trigger                                                                                                           // 680
      .toggleClass('collapsed', !isOpen)                                                                               // 681
      .attr('aria-expanded', isOpen)                                                                                   // 682
  }                                                                                                                    // 683
                                                                                                                       // 684
  function getTargetFromTrigger($trigger) {                                                                            // 685
    var href                                                                                                           // 686
    var target = $trigger.attr('data-target')                                                                          // 687
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7                         // 688
                                                                                                                       // 689
    return $(target)                                                                                                   // 690
  }                                                                                                                    // 691
                                                                                                                       // 692
                                                                                                                       // 693
  // COLLAPSE PLUGIN DEFINITION                                                                                        // 694
  // ==========================                                                                                        // 695
                                                                                                                       // 696
  function Plugin(option) {                                                                                            // 697
    return this.each(function () {                                                                                     // 698
      var $this   = $(this)                                                                                            // 699
      var data    = $this.data('bs.collapse')                                                                          // 700
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 701
                                                                                                                       // 702
      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false                                  // 703
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))                                       // 704
      if (typeof option == 'string') data[option]()                                                                    // 705
    })                                                                                                                 // 706
  }                                                                                                                    // 707
                                                                                                                       // 708
  var old = $.fn.collapse                                                                                              // 709
                                                                                                                       // 710
  $.fn.collapse             = Plugin                                                                                   // 711
  $.fn.collapse.Constructor = Collapse                                                                                 // 712
                                                                                                                       // 713
                                                                                                                       // 714
  // COLLAPSE NO CONFLICT                                                                                              // 715
  // ====================                                                                                              // 716
                                                                                                                       // 717
  $.fn.collapse.noConflict = function () {                                                                             // 718
    $.fn.collapse = old                                                                                                // 719
    return this                                                                                                        // 720
  }                                                                                                                    // 721
                                                                                                                       // 722
                                                                                                                       // 723
  // COLLAPSE DATA-API                                                                                                 // 724
  // =================                                                                                                 // 725
                                                                                                                       // 726
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {                              // 727
    var $this   = $(this)                                                                                              // 728
                                                                                                                       // 729
    if (!$this.attr('data-target')) e.preventDefault()                                                                 // 730
                                                                                                                       // 731
    var $target = getTargetFromTrigger($this)                                                                          // 732
    var data    = $target.data('bs.collapse')                                                                          // 733
    var option  = data ? 'toggle' : $this.data()                                                                       // 734
                                                                                                                       // 735
    Plugin.call($target, option)                                                                                       // 736
  })                                                                                                                   // 737
                                                                                                                       // 738
}(jQuery);                                                                                                             // 739
                                                                                                                       // 740
/* ========================================================================                                            // 741
 * Bootstrap: dropdown.js v3.3.4                                                                                       // 742
 * http://getbootstrap.com/javascript/#dropdowns                                                                       // 743
 * ========================================================================                                            // 744
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 745
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 746
 * ======================================================================== */                                         // 747
                                                                                                                       // 748
                                                                                                                       // 749
+function ($) {                                                                                                        // 750
  'use strict';                                                                                                        // 751
                                                                                                                       // 752
  // DROPDOWN CLASS DEFINITION                                                                                         // 753
  // =========================                                                                                         // 754
                                                                                                                       // 755
  var backdrop = '.dropdown-backdrop'                                                                                  // 756
  var toggle   = '[data-toggle="dropdown"]'                                                                            // 757
  var Dropdown = function (element) {                                                                                  // 758
    $(element).on('click.bs.dropdown', this.toggle)                                                                    // 759
  }                                                                                                                    // 760
                                                                                                                       // 761
  Dropdown.VERSION = '3.3.4'                                                                                           // 762
                                                                                                                       // 763
  Dropdown.prototype.toggle = function (e) {                                                                           // 764
    var $this = $(this)                                                                                                // 765
                                                                                                                       // 766
    if ($this.is('.disabled, :disabled')) return                                                                       // 767
                                                                                                                       // 768
    var $parent  = getParent($this)                                                                                    // 769
    var isActive = $parent.hasClass('open')                                                                            // 770
                                                                                                                       // 771
    clearMenus()                                                                                                       // 772
                                                                                                                       // 773
    if (!isActive) {                                                                                                   // 774
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {                      // 775
        // if mobile we use a backdrop because click events don't delegate                                             // 776
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)                             // 777
      }                                                                                                                // 778
                                                                                                                       // 779
      var relatedTarget = { relatedTarget: this }                                                                      // 780
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))                                                  // 781
                                                                                                                       // 782
      if (e.isDefaultPrevented()) return                                                                               // 783
                                                                                                                       // 784
      $this                                                                                                            // 785
        .trigger('focus')                                                                                              // 786
        .attr('aria-expanded', 'true')                                                                                 // 787
                                                                                                                       // 788
      $parent                                                                                                          // 789
        .toggleClass('open')                                                                                           // 790
        .trigger('shown.bs.dropdown', relatedTarget)                                                                   // 791
    }                                                                                                                  // 792
                                                                                                                       // 793
    return false                                                                                                       // 794
  }                                                                                                                    // 795
                                                                                                                       // 796
  Dropdown.prototype.keydown = function (e) {                                                                          // 797
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return                             // 798
                                                                                                                       // 799
    var $this = $(this)                                                                                                // 800
                                                                                                                       // 801
    e.preventDefault()                                                                                                 // 802
    e.stopPropagation()                                                                                                // 803
                                                                                                                       // 804
    if ($this.is('.disabled, :disabled')) return                                                                       // 805
                                                                                                                       // 806
    var $parent  = getParent($this)                                                                                    // 807
    var isActive = $parent.hasClass('open')                                                                            // 808
                                                                                                                       // 809
    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {                                                 // 810
      if (e.which == 27) $parent.find(toggle).trigger('focus')                                                         // 811
      return $this.trigger('click')                                                                                    // 812
    }                                                                                                                  // 813
                                                                                                                       // 814
    var desc = ' li:not(.disabled):visible a'                                                                          // 815
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)                                    // 816
                                                                                                                       // 817
    if (!$items.length) return                                                                                         // 818
                                                                                                                       // 819
    var index = $items.index(e.target)                                                                                 // 820
                                                                                                                       // 821
    if (e.which == 38 && index > 0)                 index--                        // up                               // 822
    if (e.which == 40 && index < $items.length - 1) index++                        // down                             // 823
    if (!~index)                                      index = 0                                                        // 824
                                                                                                                       // 825
    $items.eq(index).trigger('focus')                                                                                  // 826
  }                                                                                                                    // 827
                                                                                                                       // 828
  function clearMenus(e) {                                                                                             // 829
    if (e && e.which === 3) return                                                                                     // 830
    $(backdrop).remove()                                                                                               // 831
    $(toggle).each(function () {                                                                                       // 832
      var $this         = $(this)                                                                                      // 833
      var $parent       = getParent($this)                                                                             // 834
      var relatedTarget = { relatedTarget: this }                                                                      // 835
                                                                                                                       // 836
      if (!$parent.hasClass('open')) return                                                                            // 837
                                                                                                                       // 838
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))                                                  // 839
                                                                                                                       // 840
      if (e.isDefaultPrevented()) return                                                                               // 841
                                                                                                                       // 842
      $this.attr('aria-expanded', 'false')                                                                             // 843
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)                                         // 844
    })                                                                                                                 // 845
  }                                                                                                                    // 846
                                                                                                                       // 847
  function getParent($this) {                                                                                          // 848
    var selector = $this.attr('data-target')                                                                           // 849
                                                                                                                       // 850
    if (!selector) {                                                                                                   // 851
      selector = $this.attr('href')                                                                                    // 852
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7     // 853
    }                                                                                                                  // 854
                                                                                                                       // 855
    var $parent = selector && $(selector)                                                                              // 856
                                                                                                                       // 857
    return $parent && $parent.length ? $parent : $this.parent()                                                        // 858
  }                                                                                                                    // 859
                                                                                                                       // 860
                                                                                                                       // 861
  // DROPDOWN PLUGIN DEFINITION                                                                                        // 862
  // ==========================                                                                                        // 863
                                                                                                                       // 864
  function Plugin(option) {                                                                                            // 865
    return this.each(function () {                                                                                     // 866
      var $this = $(this)                                                                                              // 867
      var data  = $this.data('bs.dropdown')                                                                            // 868
                                                                                                                       // 869
      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))                                                // 870
      if (typeof option == 'string') data[option].call($this)                                                          // 871
    })                                                                                                                 // 872
  }                                                                                                                    // 873
                                                                                                                       // 874
  var old = $.fn.dropdown                                                                                              // 875
                                                                                                                       // 876
  $.fn.dropdown             = Plugin                                                                                   // 877
  $.fn.dropdown.Constructor = Dropdown                                                                                 // 878
                                                                                                                       // 879
                                                                                                                       // 880
  // DROPDOWN NO CONFLICT                                                                                              // 881
  // ====================                                                                                              // 882
                                                                                                                       // 883
  $.fn.dropdown.noConflict = function () {                                                                             // 884
    $.fn.dropdown = old                                                                                                // 885
    return this                                                                                                        // 886
  }                                                                                                                    // 887
                                                                                                                       // 888
                                                                                                                       // 889
  // APPLY TO STANDARD DROPDOWN ELEMENTS                                                                               // 890
  // ===================================                                                                               // 891
                                                                                                                       // 892
  $(document)                                                                                                          // 893
    .on('click.bs.dropdown.data-api', clearMenus)                                                                      // 894
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })                          // 895
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)                                               // 896
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)                                            // 897
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)                                   // 898
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)                                // 899
                                                                                                                       // 900
}(jQuery);                                                                                                             // 901
                                                                                                                       // 902
/* ========================================================================                                            // 903
 * Bootstrap: modal.js v3.3.4                                                                                          // 904
 * http://getbootstrap.com/javascript/#modals                                                                          // 905
 * ========================================================================                                            // 906
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 907
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 908
 * ======================================================================== */                                         // 909
                                                                                                                       // 910
                                                                                                                       // 911
+function ($) {                                                                                                        // 912
  'use strict';                                                                                                        // 913
                                                                                                                       // 914
  // MODAL CLASS DEFINITION                                                                                            // 915
  // ======================                                                                                            // 916
                                                                                                                       // 917
  var Modal = function (element, options) {                                                                            // 918
    this.options             = options                                                                                 // 919
    this.$body               = $(document.body)                                                                        // 920
    this.$element            = $(element)                                                                              // 921
    this.$dialog             = this.$element.find('.modal-dialog')                                                     // 922
    this.$backdrop           = null                                                                                    // 923
    this.isShown             = null                                                                                    // 924
    this.originalBodyPad     = null                                                                                    // 925
    this.scrollbarWidth      = 0                                                                                       // 926
    this.ignoreBackdropClick = false                                                                                   // 927
                                                                                                                       // 928
    if (this.options.remote) {                                                                                         // 929
      this.$element                                                                                                    // 930
        .find('.modal-content')                                                                                        // 931
        .load(this.options.remote, $.proxy(function () {                                                               // 932
          this.$element.trigger('loaded.bs.modal')                                                                     // 933
        }, this))                                                                                                      // 934
    }                                                                                                                  // 935
  }                                                                                                                    // 936
                                                                                                                       // 937
  Modal.VERSION  = '3.3.4'                                                                                             // 938
                                                                                                                       // 939
  Modal.TRANSITION_DURATION = 300                                                                                      // 940
  Modal.BACKDROP_TRANSITION_DURATION = 150                                                                             // 941
                                                                                                                       // 942
  Modal.DEFAULTS = {                                                                                                   // 943
    backdrop: true,                                                                                                    // 944
    keyboard: true,                                                                                                    // 945
    show: true                                                                                                         // 946
  }                                                                                                                    // 947
                                                                                                                       // 948
  Modal.prototype.toggle = function (_relatedTarget) {                                                                 // 949
    return this.isShown ? this.hide() : this.show(_relatedTarget)                                                      // 950
  }                                                                                                                    // 951
                                                                                                                       // 952
  Modal.prototype.show = function (_relatedTarget) {                                                                   // 953
    var that = this                                                                                                    // 954
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })                                             // 955
                                                                                                                       // 956
    this.$element.trigger(e)                                                                                           // 957
                                                                                                                       // 958
    if (this.isShown || e.isDefaultPrevented()) return                                                                 // 959
                                                                                                                       // 960
    this.isShown = true                                                                                                // 961
                                                                                                                       // 962
    this.checkScrollbar()                                                                                              // 963
    this.setScrollbar()                                                                                                // 964
    this.$body.addClass('modal-open')                                                                                  // 965
                                                                                                                       // 966
    this.escape()                                                                                                      // 967
    this.resize()                                                                                                      // 968
                                                                                                                       // 969
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))                     // 970
                                                                                                                       // 971
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {                                                        // 972
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {                                                     // 973
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true                                             // 974
      })                                                                                                               // 975
    })                                                                                                                 // 976
                                                                                                                       // 977
    this.backdrop(function () {                                                                                        // 978
      var transition = $.support.transition && that.$element.hasClass('fade')                                          // 979
                                                                                                                       // 980
      if (!that.$element.parent().length) {                                                                            // 981
        that.$element.appendTo(that.$body) // don't move modals dom position                                           // 982
      }                                                                                                                // 983
                                                                                                                       // 984
      that.$element                                                                                                    // 985
        .show()                                                                                                        // 986
        .scrollTop(0)                                                                                                  // 987
                                                                                                                       // 988
      that.adjustDialog()                                                                                              // 989
                                                                                                                       // 990
      if (transition) {                                                                                                // 991
        that.$element[0].offsetWidth // force reflow                                                                   // 992
      }                                                                                                                // 993
                                                                                                                       // 994
      that.$element                                                                                                    // 995
        .addClass('in')                                                                                                // 996
        .attr('aria-hidden', false)                                                                                    // 997
                                                                                                                       // 998
      that.enforceFocus()                                                                                              // 999
                                                                                                                       // 1000
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })                                             // 1001
                                                                                                                       // 1002
      transition ?                                                                                                     // 1003
        that.$dialog // wait for modal to slide in                                                                     // 1004
          .one('bsTransitionEnd', function () {                                                                        // 1005
            that.$element.trigger('focus').trigger(e)                                                                  // 1006
          })                                                                                                           // 1007
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :                                                           // 1008
        that.$element.trigger('focus').trigger(e)                                                                      // 1009
    })                                                                                                                 // 1010
  }                                                                                                                    // 1011
                                                                                                                       // 1012
  Modal.prototype.hide = function (e) {                                                                                // 1013
    if (e) e.preventDefault()                                                                                          // 1014
                                                                                                                       // 1015
    e = $.Event('hide.bs.modal')                                                                                       // 1016
                                                                                                                       // 1017
    this.$element.trigger(e)                                                                                           // 1018
                                                                                                                       // 1019
    if (!this.isShown || e.isDefaultPrevented()) return                                                                // 1020
                                                                                                                       // 1021
    this.isShown = false                                                                                               // 1022
                                                                                                                       // 1023
    this.escape()                                                                                                      // 1024
    this.resize()                                                                                                      // 1025
                                                                                                                       // 1026
    $(document).off('focusin.bs.modal')                                                                                // 1027
                                                                                                                       // 1028
    this.$element                                                                                                      // 1029
      .removeClass('in')                                                                                               // 1030
      .attr('aria-hidden', true)                                                                                       // 1031
      .off('click.dismiss.bs.modal')                                                                                   // 1032
      .off('mouseup.dismiss.bs.modal')                                                                                 // 1033
                                                                                                                       // 1034
    this.$dialog.off('mousedown.dismiss.bs.modal')                                                                     // 1035
                                                                                                                       // 1036
    $.support.transition && this.$element.hasClass('fade') ?                                                           // 1037
      this.$element                                                                                                    // 1038
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))                                                         // 1039
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :                                                             // 1040
      this.hideModal()                                                                                                 // 1041
  }                                                                                                                    // 1042
                                                                                                                       // 1043
  Modal.prototype.enforceFocus = function () {                                                                         // 1044
    $(document)                                                                                                        // 1045
      .off('focusin.bs.modal') // guard against infinite focus loop                                                    // 1046
      .on('focusin.bs.modal', $.proxy(function (e) {                                                                   // 1047
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {                                    // 1048
          this.$element.trigger('focus')                                                                               // 1049
        }                                                                                                              // 1050
      }, this))                                                                                                        // 1051
  }                                                                                                                    // 1052
                                                                                                                       // 1053
  Modal.prototype.escape = function () {                                                                               // 1054
    if (this.isShown && this.options.keyboard) {                                                                       // 1055
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {                                              // 1056
        e.which == 27 && this.hide()                                                                                   // 1057
      }, this))                                                                                                        // 1058
    } else if (!this.isShown) {                                                                                        // 1059
      this.$element.off('keydown.dismiss.bs.modal')                                                                    // 1060
    }                                                                                                                  // 1061
  }                                                                                                                    // 1062
                                                                                                                       // 1063
  Modal.prototype.resize = function () {                                                                               // 1064
    if (this.isShown) {                                                                                                // 1065
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))                                                // 1066
    } else {                                                                                                           // 1067
      $(window).off('resize.bs.modal')                                                                                 // 1068
    }                                                                                                                  // 1069
  }                                                                                                                    // 1070
                                                                                                                       // 1071
  Modal.prototype.hideModal = function () {                                                                            // 1072
    var that = this                                                                                                    // 1073
    this.$element.hide()                                                                                               // 1074
    this.backdrop(function () {                                                                                        // 1075
      that.$body.removeClass('modal-open')                                                                             // 1076
      that.resetAdjustments()                                                                                          // 1077
      that.resetScrollbar()                                                                                            // 1078
      that.$element.trigger('hidden.bs.modal')                                                                         // 1079
    })                                                                                                                 // 1080
  }                                                                                                                    // 1081
                                                                                                                       // 1082
  Modal.prototype.removeBackdrop = function () {                                                                       // 1083
    this.$backdrop && this.$backdrop.remove()                                                                          // 1084
    this.$backdrop = null                                                                                              // 1085
  }                                                                                                                    // 1086
                                                                                                                       // 1087
  Modal.prototype.backdrop = function (callback) {                                                                     // 1088
    var that = this                                                                                                    // 1089
    var animate = this.$element.hasClass('fade') ? 'fade' : ''                                                         // 1090
                                                                                                                       // 1091
    if (this.isShown && this.options.backdrop) {                                                                       // 1092
      var doAnimate = $.support.transition && animate                                                                  // 1093
                                                                                                                       // 1094
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')                                             // 1095
        .appendTo(this.$body)                                                                                          // 1096
                                                                                                                       // 1097
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {                                                // 1098
        if (this.ignoreBackdropClick) {                                                                                // 1099
          this.ignoreBackdropClick = false                                                                             // 1100
          return                                                                                                       // 1101
        }                                                                                                              // 1102
        if (e.target !== e.currentTarget) return                                                                       // 1103
        this.options.backdrop == 'static'                                                                              // 1104
          ? this.$element[0].focus()                                                                                   // 1105
          : this.hide()                                                                                                // 1106
      }, this))                                                                                                        // 1107
                                                                                                                       // 1108
      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow                                                     // 1109
                                                                                                                       // 1110
      this.$backdrop.addClass('in')                                                                                    // 1111
                                                                                                                       // 1112
      if (!callback) return                                                                                            // 1113
                                                                                                                       // 1114
      doAnimate ?                                                                                                      // 1115
        this.$backdrop                                                                                                 // 1116
          .one('bsTransitionEnd', callback)                                                                            // 1117
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :                                                  // 1118
        callback()                                                                                                     // 1119
                                                                                                                       // 1120
    } else if (!this.isShown && this.$backdrop) {                                                                      // 1121
      this.$backdrop.removeClass('in')                                                                                 // 1122
                                                                                                                       // 1123
      var callbackRemove = function () {                                                                               // 1124
        that.removeBackdrop()                                                                                          // 1125
        callback && callback()                                                                                         // 1126
      }                                                                                                                // 1127
      $.support.transition && this.$element.hasClass('fade') ?                                                         // 1128
        this.$backdrop                                                                                                 // 1129
          .one('bsTransitionEnd', callbackRemove)                                                                      // 1130
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :                                                  // 1131
        callbackRemove()                                                                                               // 1132
                                                                                                                       // 1133
    } else if (callback) {                                                                                             // 1134
      callback()                                                                                                       // 1135
    }                                                                                                                  // 1136
  }                                                                                                                    // 1137
                                                                                                                       // 1138
  // these following methods are used to handle overflowing modals                                                     // 1139
                                                                                                                       // 1140
  Modal.prototype.handleUpdate = function () {                                                                         // 1141
    this.adjustDialog()                                                                                                // 1142
  }                                                                                                                    // 1143
                                                                                                                       // 1144
  Modal.prototype.adjustDialog = function () {                                                                         // 1145
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight                     // 1146
                                                                                                                       // 1147
    this.$element.css({                                                                                                // 1148
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',                          // 1149
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''                           // 1150
    })                                                                                                                 // 1151
  }                                                                                                                    // 1152
                                                                                                                       // 1153
  Modal.prototype.resetAdjustments = function () {                                                                     // 1154
    this.$element.css({                                                                                                // 1155
      paddingLeft: '',                                                                                                 // 1156
      paddingRight: ''                                                                                                 // 1157
    })                                                                                                                 // 1158
  }                                                                                                                    // 1159
                                                                                                                       // 1160
  Modal.prototype.checkScrollbar = function () {                                                                       // 1161
    var fullWindowWidth = window.innerWidth                                                                            // 1162
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8                                         // 1163
      var documentElementRect = document.documentElement.getBoundingClientRect()                                       // 1164
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)                                 // 1165
    }                                                                                                                  // 1166
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth                                               // 1167
    this.scrollbarWidth = this.measureScrollbar()                                                                      // 1168
  }                                                                                                                    // 1169
                                                                                                                       // 1170
  Modal.prototype.setScrollbar = function () {                                                                         // 1171
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)                                                 // 1172
    this.originalBodyPad = document.body.style.paddingRight || ''                                                      // 1173
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)                         // 1174
  }                                                                                                                    // 1175
                                                                                                                       // 1176
  Modal.prototype.resetScrollbar = function () {                                                                       // 1177
    this.$body.css('padding-right', this.originalBodyPad)                                                              // 1178
  }                                                                                                                    // 1179
                                                                                                                       // 1180
  Modal.prototype.measureScrollbar = function () { // thx walsh                                                        // 1181
    var scrollDiv = document.createElement('div')                                                                      // 1182
    scrollDiv.className = 'modal-scrollbar-measure'                                                                    // 1183
    this.$body.append(scrollDiv)                                                                                       // 1184
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth                                                 // 1185
    this.$body[0].removeChild(scrollDiv)                                                                               // 1186
    return scrollbarWidth                                                                                              // 1187
  }                                                                                                                    // 1188
                                                                                                                       // 1189
                                                                                                                       // 1190
  // MODAL PLUGIN DEFINITION                                                                                           // 1191
  // =======================                                                                                           // 1192
                                                                                                                       // 1193
  function Plugin(option, _relatedTarget) {                                                                            // 1194
    return this.each(function () {                                                                                     // 1195
      var $this   = $(this)                                                                                            // 1196
      var data    = $this.data('bs.modal')                                                                             // 1197
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)                    // 1198
                                                                                                                       // 1199
      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))                                             // 1200
      if (typeof option == 'string') data[option](_relatedTarget)                                                      // 1201
      else if (options.show) data.show(_relatedTarget)                                                                 // 1202
    })                                                                                                                 // 1203
  }                                                                                                                    // 1204
                                                                                                                       // 1205
  var old = $.fn.modal                                                                                                 // 1206
                                                                                                                       // 1207
  $.fn.modal             = Plugin                                                                                      // 1208
  $.fn.modal.Constructor = Modal                                                                                       // 1209
                                                                                                                       // 1210
                                                                                                                       // 1211
  // MODAL NO CONFLICT                                                                                                 // 1212
  // =================                                                                                                 // 1213
                                                                                                                       // 1214
  $.fn.modal.noConflict = function () {                                                                                // 1215
    $.fn.modal = old                                                                                                   // 1216
    return this                                                                                                        // 1217
  }                                                                                                                    // 1218
                                                                                                                       // 1219
                                                                                                                       // 1220
  // MODAL DATA-API                                                                                                    // 1221
  // ==============                                                                                                    // 1222
                                                                                                                       // 1223
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {                                    // 1224
    var $this   = $(this)                                                                                              // 1225
    var href    = $this.attr('href')                                                                                   // 1226
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7        // 1227
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
                                                                                                                       // 1229
    if ($this.is('a')) e.preventDefault()                                                                              // 1230
                                                                                                                       // 1231
    $target.one('show.bs.modal', function (showEvent) {                                                                // 1232
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown      // 1233
      $target.one('hidden.bs.modal', function () {                                                                     // 1234
        $this.is(':visible') && $this.trigger('focus')                                                                 // 1235
      })                                                                                                               // 1236
    })                                                                                                                 // 1237
    Plugin.call($target, option, this)                                                                                 // 1238
  })                                                                                                                   // 1239
                                                                                                                       // 1240
}(jQuery);                                                                                                             // 1241
                                                                                                                       // 1242
/* ========================================================================                                            // 1243
 * Bootstrap: tooltip.js v3.3.4                                                                                        // 1244
 * http://getbootstrap.com/javascript/#tooltip                                                                         // 1245
 * Inspired by the original jQuery.tipsy by Jason Frame                                                                // 1246
 * ========================================================================                                            // 1247
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 1248
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1249
 * ======================================================================== */                                         // 1250
                                                                                                                       // 1251
                                                                                                                       // 1252
+function ($) {                                                                                                        // 1253
  'use strict';                                                                                                        // 1254
                                                                                                                       // 1255
  // TOOLTIP PUBLIC CLASS DEFINITION                                                                                   // 1256
  // ===============================                                                                                   // 1257
                                                                                                                       // 1258
  var Tooltip = function (element, options) {                                                                          // 1259
    this.type       = null                                                                                             // 1260
    this.options    = null                                                                                             // 1261
    this.enabled    = null                                                                                             // 1262
    this.timeout    = null                                                                                             // 1263
    this.hoverState = null                                                                                             // 1264
    this.$element   = null                                                                                             // 1265
                                                                                                                       // 1266
    this.init('tooltip', element, options)                                                                             // 1267
  }                                                                                                                    // 1268
                                                                                                                       // 1269
  Tooltip.VERSION  = '3.3.4'                                                                                           // 1270
                                                                                                                       // 1271
  Tooltip.TRANSITION_DURATION = 150                                                                                    // 1272
                                                                                                                       // 1273
  Tooltip.DEFAULTS = {                                                                                                 // 1274
    animation: true,                                                                                                   // 1275
    placement: 'top',                                                                                                  // 1276
    selector: false,                                                                                                   // 1277
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',                                                                                            // 1279
    title: '',                                                                                                         // 1280
    delay: 0,                                                                                                          // 1281
    html: false,                                                                                                       // 1282
    container: false,                                                                                                  // 1283
    viewport: {                                                                                                        // 1284
      selector: 'body',                                                                                                // 1285
      padding: 0                                                                                                       // 1286
    }                                                                                                                  // 1287
  }                                                                                                                    // 1288
                                                                                                                       // 1289
  Tooltip.prototype.init = function (type, element, options) {                                                         // 1290
    this.enabled   = true                                                                                              // 1291
    this.type      = type                                                                                              // 1292
    this.$element  = $(element)                                                                                        // 1293
    this.options   = this.getOptions(options)                                                                          // 1294
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)               // 1295
                                                                                                                       // 1296
    if (this.$element[0] instanceof document.constructor && !this.options.selector) {                                  // 1297
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }                                                                                                                  // 1299
                                                                                                                       // 1300
    var triggers = this.options.trigger.split(' ')                                                                     // 1301
                                                                                                                       // 1302
    for (var i = triggers.length; i--;) {                                                                              // 1303
      var trigger = triggers[i]                                                                                        // 1304
                                                                                                                       // 1305
      if (trigger == 'click') {                                                                                        // 1306
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))                      // 1307
      } else if (trigger != 'manual') {                                                                                // 1308
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'                                                   // 1309
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'                                                  // 1310
                                                                                                                       // 1311
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))                 // 1312
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))                 // 1313
      }                                                                                                                // 1314
    }                                                                                                                  // 1315
                                                                                                                       // 1316
    this.options.selector ?                                                                                            // 1317
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :                              // 1318
      this.fixTitle()                                                                                                  // 1319
  }                                                                                                                    // 1320
                                                                                                                       // 1321
  Tooltip.prototype.getDefaults = function () {                                                                        // 1322
    return Tooltip.DEFAULTS                                                                                            // 1323
  }                                                                                                                    // 1324
                                                                                                                       // 1325
  Tooltip.prototype.getOptions = function (options) {                                                                  // 1326
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)                                          // 1327
                                                                                                                       // 1328
    if (options.delay && typeof options.delay == 'number') {                                                           // 1329
      options.delay = {                                                                                                // 1330
        show: options.delay,                                                                                           // 1331
        hide: options.delay                                                                                            // 1332
      }                                                                                                                // 1333
    }                                                                                                                  // 1334
                                                                                                                       // 1335
    return options                                                                                                     // 1336
  }                                                                                                                    // 1337
                                                                                                                       // 1338
  Tooltip.prototype.getDelegateOptions = function () {                                                                 // 1339
    var options  = {}                                                                                                  // 1340
    var defaults = this.getDefaults()                                                                                  // 1341
                                                                                                                       // 1342
    this._options && $.each(this._options, function (key, value) {                                                     // 1343
      if (defaults[key] != value) options[key] = value                                                                 // 1344
    })                                                                                                                 // 1345
                                                                                                                       // 1346
    return options                                                                                                     // 1347
  }                                                                                                                    // 1348
                                                                                                                       // 1349
  Tooltip.prototype.enter = function (obj) {                                                                           // 1350
    var self = obj instanceof this.constructor ?                                                                       // 1351
      obj : $(obj.currentTarget).data('bs.' + this.type)                                                               // 1352
                                                                                                                       // 1353
    if (self && self.$tip && self.$tip.is(':visible')) {                                                               // 1354
      self.hoverState = 'in'                                                                                           // 1355
      return                                                                                                           // 1356
    }                                                                                                                  // 1357
                                                                                                                       // 1358
    if (!self) {                                                                                                       // 1359
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())                                        // 1360
      $(obj.currentTarget).data('bs.' + this.type, self)                                                               // 1361
    }                                                                                                                  // 1362
                                                                                                                       // 1363
    clearTimeout(self.timeout)                                                                                         // 1364
                                                                                                                       // 1365
    self.hoverState = 'in'                                                                                             // 1366
                                                                                                                       // 1367
    if (!self.options.delay || !self.options.delay.show) return self.show()                                            // 1368
                                                                                                                       // 1369
    self.timeout = setTimeout(function () {                                                                            // 1370
      if (self.hoverState == 'in') self.show()                                                                         // 1371
    }, self.options.delay.show)                                                                                        // 1372
  }                                                                                                                    // 1373
                                                                                                                       // 1374
  Tooltip.prototype.leave = function (obj) {                                                                           // 1375
    var self = obj instanceof this.constructor ?                                                                       // 1376
      obj : $(obj.currentTarget).data('bs.' + this.type)                                                               // 1377
                                                                                                                       // 1378
    if (!self) {                                                                                                       // 1379
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())                                        // 1380
      $(obj.currentTarget).data('bs.' + this.type, self)                                                               // 1381
    }                                                                                                                  // 1382
                                                                                                                       // 1383
    clearTimeout(self.timeout)                                                                                         // 1384
                                                                                                                       // 1385
    self.hoverState = 'out'                                                                                            // 1386
                                                                                                                       // 1387
    if (!self.options.delay || !self.options.delay.hide) return self.hide()                                            // 1388
                                                                                                                       // 1389
    self.timeout = setTimeout(function () {                                                                            // 1390
      if (self.hoverState == 'out') self.hide()                                                                        // 1391
    }, self.options.delay.hide)                                                                                        // 1392
  }                                                                                                                    // 1393
                                                                                                                       // 1394
  Tooltip.prototype.show = function () {                                                                               // 1395
    var e = $.Event('show.bs.' + this.type)                                                                            // 1396
                                                                                                                       // 1397
    if (this.hasContent() && this.enabled) {                                                                           // 1398
      this.$element.trigger(e)                                                                                         // 1399
                                                                                                                       // 1400
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])                         // 1401
      if (e.isDefaultPrevented() || !inDom) return                                                                     // 1402
      var that = this                                                                                                  // 1403
                                                                                                                       // 1404
      var $tip = this.tip()                                                                                            // 1405
                                                                                                                       // 1406
      var tipId = this.getUID(this.type)                                                                               // 1407
                                                                                                                       // 1408
      this.setContent()                                                                                                // 1409
      $tip.attr('id', tipId)                                                                                           // 1410
      this.$element.attr('aria-describedby', tipId)                                                                    // 1411
                                                                                                                       // 1412
      if (this.options.animation) $tip.addClass('fade')                                                                // 1413
                                                                                                                       // 1414
      var placement = typeof this.options.placement == 'function' ?                                                    // 1415
        this.options.placement.call(this, $tip[0], this.$element[0]) :                                                 // 1416
        this.options.placement                                                                                         // 1417
                                                                                                                       // 1418
      var autoToken = /\s?auto?\s?/i                                                                                   // 1419
      var autoPlace = autoToken.test(placement)                                                                        // 1420
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'                                             // 1421
                                                                                                                       // 1422
      $tip                                                                                                             // 1423
        .detach()                                                                                                      // 1424
        .css({ top: 0, left: 0, display: 'block' })                                                                    // 1425
        .addClass(placement)                                                                                           // 1426
        .data('bs.' + this.type, this)                                                                                 // 1427
                                                                                                                       // 1428
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)                 // 1429
                                                                                                                       // 1430
      var pos          = this.getPosition()                                                                            // 1431
      var actualWidth  = $tip[0].offsetWidth                                                                           // 1432
      var actualHeight = $tip[0].offsetHeight                                                                          // 1433
                                                                                                                       // 1434
      if (autoPlace) {                                                                                                 // 1435
        var orgPlacement = placement                                                                                   // 1436
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()                 // 1437
        var containerDim = this.getPosition($container)                                                                // 1438
                                                                                                                       // 1439
        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :              // 1440
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :              // 1441
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :              // 1442
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :              // 1443
                    placement                                                                                          // 1444
                                                                                                                       // 1445
        $tip                                                                                                           // 1446
          .removeClass(orgPlacement)                                                                                   // 1447
          .addClass(placement)                                                                                         // 1448
      }                                                                                                                // 1449
                                                                                                                       // 1450
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)                       // 1451
                                                                                                                       // 1452
      this.applyPlacement(calculatedOffset, placement)                                                                 // 1453
                                                                                                                       // 1454
      var complete = function () {                                                                                     // 1455
        var prevHoverState = that.hoverState                                                                           // 1456
        that.$element.trigger('shown.bs.' + that.type)                                                                 // 1457
        that.hoverState = null                                                                                         // 1458
                                                                                                                       // 1459
        if (prevHoverState == 'out') that.leave(that)                                                                  // 1460
      }                                                                                                                // 1461
                                                                                                                       // 1462
      $.support.transition && this.$tip.hasClass('fade') ?                                                             // 1463
        $tip                                                                                                           // 1464
          .one('bsTransitionEnd', complete)                                                                            // 1465
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :                                                         // 1466
        complete()                                                                                                     // 1467
    }                                                                                                                  // 1468
  }                                                                                                                    // 1469
                                                                                                                       // 1470
  Tooltip.prototype.applyPlacement = function (offset, placement) {                                                    // 1471
    var $tip   = this.tip()                                                                                            // 1472
    var width  = $tip[0].offsetWidth                                                                                   // 1473
    var height = $tip[0].offsetHeight                                                                                  // 1474
                                                                                                                       // 1475
    // manually read margins because getBoundingClientRect includes difference                                         // 1476
    var marginTop = parseInt($tip.css('margin-top'), 10)                                                               // 1477
    var marginLeft = parseInt($tip.css('margin-left'), 10)                                                             // 1478
                                                                                                                       // 1479
    // we must check for NaN for ie 8/9                                                                                // 1480
    if (isNaN(marginTop))  marginTop  = 0                                                                              // 1481
    if (isNaN(marginLeft)) marginLeft = 0                                                                              // 1482
                                                                                                                       // 1483
    offset.top  = offset.top  + marginTop                                                                              // 1484
    offset.left = offset.left + marginLeft                                                                             // 1485
                                                                                                                       // 1486
    // $.fn.offset doesn't round pixel values                                                                          // 1487
    // so we use setOffset directly with our own function B-0                                                          // 1488
    $.offset.setOffset($tip[0], $.extend({                                                                             // 1489
      using: function (props) {                                                                                        // 1490
        $tip.css({                                                                                                     // 1491
          top: Math.round(props.top),                                                                                  // 1492
          left: Math.round(props.left)                                                                                 // 1493
        })                                                                                                             // 1494
      }                                                                                                                // 1495
    }, offset), 0)                                                                                                     // 1496
                                                                                                                       // 1497
    $tip.addClass('in')                                                                                                // 1498
                                                                                                                       // 1499
    // check to see if placing tip in new offset caused the tip to resize itself                                       // 1500
    var actualWidth  = $tip[0].offsetWidth                                                                             // 1501
    var actualHeight = $tip[0].offsetHeight                                                                            // 1502
                                                                                                                       // 1503
    if (placement == 'top' && actualHeight != height) {                                                                // 1504
      offset.top = offset.top + height - actualHeight                                                                  // 1505
    }                                                                                                                  // 1506
                                                                                                                       // 1507
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)                            // 1508
                                                                                                                       // 1509
    if (delta.left) offset.left += delta.left                                                                          // 1510
    else offset.top += delta.top                                                                                       // 1511
                                                                                                                       // 1512
    var isVertical          = /top|bottom/.test(placement)                                                             // 1513
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'                                              // 1515
                                                                                                                       // 1516
    $tip.offset(offset)                                                                                                // 1517
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)                                            // 1518
  }                                                                                                                    // 1519
                                                                                                                       // 1520
  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {                                           // 1521
    this.arrow()                                                                                                       // 1522
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')                                            // 1523
      .css(isVertical ? 'top' : 'left', '')                                                                            // 1524
  }                                                                                                                    // 1525
                                                                                                                       // 1526
  Tooltip.prototype.setContent = function () {                                                                         // 1527
    var $tip  = this.tip()                                                                                             // 1528
    var title = this.getTitle()                                                                                        // 1529
                                                                                                                       // 1530
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)                                            // 1531
    $tip.removeClass('fade in top bottom left right')                                                                  // 1532
  }                                                                                                                    // 1533
                                                                                                                       // 1534
  Tooltip.prototype.hide = function (callback) {                                                                       // 1535
    var that = this                                                                                                    // 1536
    var $tip = $(this.$tip)                                                                                            // 1537
    var e    = $.Event('hide.bs.' + this.type)                                                                         // 1538
                                                                                                                       // 1539
    function complete() {                                                                                              // 1540
      if (that.hoverState != 'in') $tip.detach()                                                                       // 1541
      that.$element                                                                                                    // 1542
        .removeAttr('aria-describedby')                                                                                // 1543
        .trigger('hidden.bs.' + that.type)                                                                             // 1544
      callback && callback()                                                                                           // 1545
    }                                                                                                                  // 1546
                                                                                                                       // 1547
    this.$element.trigger(e)                                                                                           // 1548
                                                                                                                       // 1549
    if (e.isDefaultPrevented()) return                                                                                 // 1550
                                                                                                                       // 1551
    $tip.removeClass('in')                                                                                             // 1552
                                                                                                                       // 1553
    $.support.transition && $tip.hasClass('fade') ?                                                                    // 1554
      $tip                                                                                                             // 1555
        .one('bsTransitionEnd', complete)                                                                              // 1556
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :                                                           // 1557
      complete()                                                                                                       // 1558
                                                                                                                       // 1559
    this.hoverState = null                                                                                             // 1560
                                                                                                                       // 1561
    return this                                                                                                        // 1562
  }                                                                                                                    // 1563
                                                                                                                       // 1564
  Tooltip.prototype.fixTitle = function () {                                                                           // 1565
    var $e = this.$element                                                                                             // 1566
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {                                     // 1567
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')                                         // 1568
    }                                                                                                                  // 1569
  }                                                                                                                    // 1570
                                                                                                                       // 1571
  Tooltip.prototype.hasContent = function () {                                                                         // 1572
    return this.getTitle()                                                                                             // 1573
  }                                                                                                                    // 1574
                                                                                                                       // 1575
  Tooltip.prototype.getPosition = function ($element) {                                                                // 1576
    $element   = $element || this.$element                                                                             // 1577
                                                                                                                       // 1578
    var el     = $element[0]                                                                                           // 1579
    var isBody = el.tagName == 'BODY'                                                                                  // 1580
                                                                                                                       // 1581
    var elRect    = el.getBoundingClientRect()                                                                         // 1582
    if (elRect.width == null) {                                                                                        // 1583
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })         // 1585
    }                                                                                                                  // 1586
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()                                                   // 1587
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null                           // 1589
                                                                                                                       // 1590
    return $.extend({}, elRect, scroll, outerDims, elOffset)                                                           // 1591
  }                                                                                                                    // 1592
                                                                                                                       // 1593
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {                       // 1594
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } : // 1595
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : // 1596
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }    // 1598
                                                                                                                       // 1599
  }                                                                                                                    // 1600
                                                                                                                       // 1601
  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {                  // 1602
    var delta = { top: 0, left: 0 }                                                                                    // 1603
    if (!this.$viewport) return delta                                                                                  // 1604
                                                                                                                       // 1605
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0                                  // 1606
    var viewportDimensions = this.getPosition(this.$viewport)                                                          // 1607
                                                                                                                       // 1608
    if (/right|left/.test(placement)) {                                                                                // 1609
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll                                     // 1610
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight                      // 1611
      if (topEdgeOffset < viewportDimensions.top) { // top overflow                                                    // 1612
        delta.top = viewportDimensions.top - topEdgeOffset                                                             // 1613
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow           // 1614
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset                              // 1615
      }                                                                                                                // 1616
    } else {                                                                                                           // 1617
      var leftEdgeOffset  = pos.left - viewportPadding                                                                 // 1618
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth                                                   // 1619
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow                                                 // 1620
        delta.left = viewportDimensions.left - leftEdgeOffset                                                          // 1621
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow                                       // 1622
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset                              // 1623
      }                                                                                                                // 1624
    }                                                                                                                  // 1625
                                                                                                                       // 1626
    return delta                                                                                                       // 1627
  }                                                                                                                    // 1628
                                                                                                                       // 1629
  Tooltip.prototype.getTitle = function () {                                                                           // 1630
    var title                                                                                                          // 1631
    var $e = this.$element                                                                                             // 1632
    var o  = this.options                                                                                              // 1633
                                                                                                                       // 1634
    title = $e.attr('data-original-title')                                                                             // 1635
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)                                               // 1636
                                                                                                                       // 1637
    return title                                                                                                       // 1638
  }                                                                                                                    // 1639
                                                                                                                       // 1640
  Tooltip.prototype.getUID = function (prefix) {                                                                       // 1641
    do prefix += ~~(Math.random() * 1000000)                                                                           // 1642
    while (document.getElementById(prefix))                                                                            // 1643
    return prefix                                                                                                      // 1644
  }                                                                                                                    // 1645
                                                                                                                       // 1646
  Tooltip.prototype.tip = function () {                                                                                // 1647
    return (this.$tip = this.$tip || $(this.options.template))                                                         // 1648
  }                                                                                                                    // 1649
                                                                                                                       // 1650
  Tooltip.prototype.arrow = function () {                                                                              // 1651
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))                                            // 1652
  }                                                                                                                    // 1653
                                                                                                                       // 1654
  Tooltip.prototype.enable = function () {                                                                             // 1655
    this.enabled = true                                                                                                // 1656
  }                                                                                                                    // 1657
                                                                                                                       // 1658
  Tooltip.prototype.disable = function () {                                                                            // 1659
    this.enabled = false                                                                                               // 1660
  }                                                                                                                    // 1661
                                                                                                                       // 1662
  Tooltip.prototype.toggleEnabled = function () {                                                                      // 1663
    this.enabled = !this.enabled                                                                                       // 1664
  }                                                                                                                    // 1665
                                                                                                                       // 1666
  Tooltip.prototype.toggle = function (e) {                                                                            // 1667
    var self = this                                                                                                    // 1668
    if (e) {                                                                                                           // 1669
      self = $(e.currentTarget).data('bs.' + this.type)                                                                // 1670
      if (!self) {                                                                                                     // 1671
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())                                        // 1672
        $(e.currentTarget).data('bs.' + this.type, self)                                                               // 1673
      }                                                                                                                // 1674
    }                                                                                                                  // 1675
                                                                                                                       // 1676
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)                                                    // 1677
  }                                                                                                                    // 1678
                                                                                                                       // 1679
  Tooltip.prototype.destroy = function () {                                                                            // 1680
    var that = this                                                                                                    // 1681
    clearTimeout(this.timeout)                                                                                         // 1682
    this.hide(function () {                                                                                            // 1683
      that.$element.off('.' + that.type).removeData('bs.' + that.type)                                                 // 1684
    })                                                                                                                 // 1685
  }                                                                                                                    // 1686
                                                                                                                       // 1687
                                                                                                                       // 1688
  // TOOLTIP PLUGIN DEFINITION                                                                                         // 1689
  // =========================                                                                                         // 1690
                                                                                                                       // 1691
  function Plugin(option) {                                                                                            // 1692
    return this.each(function () {                                                                                     // 1693
      var $this   = $(this)                                                                                            // 1694
      var data    = $this.data('bs.tooltip')                                                                           // 1695
      var options = typeof option == 'object' && option                                                                // 1696
                                                                                                                       // 1697
      if (!data && /destroy|hide/.test(option)) return                                                                 // 1698
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))                                         // 1699
      if (typeof option == 'string') data[option]()                                                                    // 1700
    })                                                                                                                 // 1701
  }                                                                                                                    // 1702
                                                                                                                       // 1703
  var old = $.fn.tooltip                                                                                               // 1704
                                                                                                                       // 1705
  $.fn.tooltip             = Plugin                                                                                    // 1706
  $.fn.tooltip.Constructor = Tooltip                                                                                   // 1707
                                                                                                                       // 1708
                                                                                                                       // 1709
  // TOOLTIP NO CONFLICT                                                                                               // 1710
  // ===================                                                                                               // 1711
                                                                                                                       // 1712
  $.fn.tooltip.noConflict = function () {                                                                              // 1713
    $.fn.tooltip = old                                                                                                 // 1714
    return this                                                                                                        // 1715
  }                                                                                                                    // 1716
                                                                                                                       // 1717
}(jQuery);                                                                                                             // 1718
                                                                                                                       // 1719
/* ========================================================================                                            // 1720
 * Bootstrap: popover.js v3.3.4                                                                                        // 1721
 * http://getbootstrap.com/javascript/#popovers                                                                        // 1722
 * ========================================================================                                            // 1723
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 1724
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1725
 * ======================================================================== */                                         // 1726
                                                                                                                       // 1727
                                                                                                                       // 1728
+function ($) {                                                                                                        // 1729
  'use strict';                                                                                                        // 1730
                                                                                                                       // 1731
  // POPOVER PUBLIC CLASS DEFINITION                                                                                   // 1732
  // ===============================                                                                                   // 1733
                                                                                                                       // 1734
  var Popover = function (element, options) {                                                                          // 1735
    this.init('popover', element, options)                                                                             // 1736
  }                                                                                                                    // 1737
                                                                                                                       // 1738
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')                                                    // 1739
                                                                                                                       // 1740
  Popover.VERSION  = '3.3.4'                                                                                           // 1741
                                                                                                                       // 1742
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {                                                 // 1743
    placement: 'right',                                                                                                // 1744
    trigger: 'click',                                                                                                  // 1745
    content: '',                                                                                                       // 1746
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })                                                                                                                   // 1748
                                                                                                                       // 1749
                                                                                                                       // 1750
  // NOTE: POPOVER EXTENDS tooltip.js                                                                                  // 1751
  // ================================                                                                                  // 1752
                                                                                                                       // 1753
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)                                                 // 1754
                                                                                                                       // 1755
  Popover.prototype.constructor = Popover                                                                              // 1756
                                                                                                                       // 1757
  Popover.prototype.getDefaults = function () {                                                                        // 1758
    return Popover.DEFAULTS                                                                                            // 1759
  }                                                                                                                    // 1760
                                                                                                                       // 1761
  Popover.prototype.setContent = function () {                                                                         // 1762
    var $tip    = this.tip()                                                                                           // 1763
    var title   = this.getTitle()                                                                                      // 1764
    var content = this.getContent()                                                                                    // 1765
                                                                                                                       // 1766
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)                                            // 1767
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events   // 1768
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'                                    // 1769
    ](content)                                                                                                         // 1770
                                                                                                                       // 1771
    $tip.removeClass('fade top bottom left right in')                                                                  // 1772
                                                                                                                       // 1773
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do                                       // 1774
    // this manually by checking the contents.                                                                         // 1775
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()                                        // 1776
  }                                                                                                                    // 1777
                                                                                                                       // 1778
  Popover.prototype.hasContent = function () {                                                                         // 1779
    return this.getTitle() || this.getContent()                                                                        // 1780
  }                                                                                                                    // 1781
                                                                                                                       // 1782
  Popover.prototype.getContent = function () {                                                                         // 1783
    var $e = this.$element                                                                                             // 1784
    var o  = this.options                                                                                              // 1785
                                                                                                                       // 1786
    return $e.attr('data-content')                                                                                     // 1787
      || (typeof o.content == 'function' ?                                                                             // 1788
            o.content.call($e[0]) :                                                                                    // 1789
            o.content)                                                                                                 // 1790
  }                                                                                                                    // 1791
                                                                                                                       // 1792
  Popover.prototype.arrow = function () {                                                                              // 1793
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))                                                    // 1794
  }                                                                                                                    // 1795
                                                                                                                       // 1796
                                                                                                                       // 1797
  // POPOVER PLUGIN DEFINITION                                                                                         // 1798
  // =========================                                                                                         // 1799
                                                                                                                       // 1800
  function Plugin(option) {                                                                                            // 1801
    return this.each(function () {                                                                                     // 1802
      var $this   = $(this)                                                                                            // 1803
      var data    = $this.data('bs.popover')                                                                           // 1804
      var options = typeof option == 'object' && option                                                                // 1805
                                                                                                                       // 1806
      if (!data && /destroy|hide/.test(option)) return                                                                 // 1807
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))                                         // 1808
      if (typeof option == 'string') data[option]()                                                                    // 1809
    })                                                                                                                 // 1810
  }                                                                                                                    // 1811
                                                                                                                       // 1812
  var old = $.fn.popover                                                                                               // 1813
                                                                                                                       // 1814
  $.fn.popover             = Plugin                                                                                    // 1815
  $.fn.popover.Constructor = Popover                                                                                   // 1816
                                                                                                                       // 1817
                                                                                                                       // 1818
  // POPOVER NO CONFLICT                                                                                               // 1819
  // ===================                                                                                               // 1820
                                                                                                                       // 1821
  $.fn.popover.noConflict = function () {                                                                              // 1822
    $.fn.popover = old                                                                                                 // 1823
    return this                                                                                                        // 1824
  }                                                                                                                    // 1825
                                                                                                                       // 1826
}(jQuery);                                                                                                             // 1827
                                                                                                                       // 1828
/* ========================================================================                                            // 1829
 * Bootstrap: scrollspy.js v3.3.4                                                                                      // 1830
 * http://getbootstrap.com/javascript/#scrollspy                                                                       // 1831
 * ========================================================================                                            // 1832
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 1833
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1834
 * ======================================================================== */                                         // 1835
                                                                                                                       // 1836
                                                                                                                       // 1837
+function ($) {                                                                                                        // 1838
  'use strict';                                                                                                        // 1839
                                                                                                                       // 1840
  // SCROLLSPY CLASS DEFINITION                                                                                        // 1841
  // ==========================                                                                                        // 1842
                                                                                                                       // 1843
  function ScrollSpy(element, options) {                                                                               // 1844
    this.$body          = $(document.body)                                                                             // 1845
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)                                        // 1846
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)                                                    // 1847
    this.selector       = (this.options.target || '') + ' .nav li > a'                                                 // 1848
    this.offsets        = []                                                                                           // 1849
    this.targets        = []                                                                                           // 1850
    this.activeTarget   = null                                                                                         // 1851
    this.scrollHeight   = 0                                                                                            // 1852
                                                                                                                       // 1853
    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))                                         // 1854
    this.refresh()                                                                                                     // 1855
    this.process()                                                                                                     // 1856
  }                                                                                                                    // 1857
                                                                                                                       // 1858
  ScrollSpy.VERSION  = '3.3.4'                                                                                         // 1859
                                                                                                                       // 1860
  ScrollSpy.DEFAULTS = {                                                                                               // 1861
    offset: 10                                                                                                         // 1862
  }                                                                                                                    // 1863
                                                                                                                       // 1864
  ScrollSpy.prototype.getScrollHeight = function () {                                                                  // 1865
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }                                                                                                                    // 1867
                                                                                                                       // 1868
  ScrollSpy.prototype.refresh = function () {                                                                          // 1869
    var that          = this                                                                                           // 1870
    var offsetMethod  = 'offset'                                                                                       // 1871
    var offsetBase    = 0                                                                                              // 1872
                                                                                                                       // 1873
    this.offsets      = []                                                                                             // 1874
    this.targets      = []                                                                                             // 1875
    this.scrollHeight = this.getScrollHeight()                                                                         // 1876
                                                                                                                       // 1877
    if (!$.isWindow(this.$scrollElement[0])) {                                                                         // 1878
      offsetMethod = 'position'                                                                                        // 1879
      offsetBase   = this.$scrollElement.scrollTop()                                                                   // 1880
    }                                                                                                                  // 1881
                                                                                                                       // 1882
    this.$body                                                                                                         // 1883
      .find(this.selector)                                                                                             // 1884
      .map(function () {                                                                                               // 1885
        var $el   = $(this)                                                                                            // 1886
        var href  = $el.data('target') || $el.attr('href')                                                             // 1887
        var $href = /^#./.test(href) && $(href)                                                                        // 1888
                                                                                                                       // 1889
        return ($href                                                                                                  // 1890
          && $href.length                                                                                              // 1891
          && $href.is(':visible')                                                                                      // 1892
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null                                                 // 1893
      })                                                                                                               // 1894
      .sort(function (a, b) { return a[0] - b[0] })                                                                    // 1895
      .each(function () {                                                                                              // 1896
        that.offsets.push(this[0])                                                                                     // 1897
        that.targets.push(this[1])                                                                                     // 1898
      })                                                                                                               // 1899
  }                                                                                                                    // 1900
                                                                                                                       // 1901
  ScrollSpy.prototype.process = function () {                                                                          // 1902
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset                                           // 1903
    var scrollHeight = this.getScrollHeight()                                                                          // 1904
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()                               // 1905
    var offsets      = this.offsets                                                                                    // 1906
    var targets      = this.targets                                                                                    // 1907
    var activeTarget = this.activeTarget                                                                               // 1908
    var i                                                                                                              // 1909
                                                                                                                       // 1910
    if (this.scrollHeight != scrollHeight) {                                                                           // 1911
      this.refresh()                                                                                                   // 1912
    }                                                                                                                  // 1913
                                                                                                                       // 1914
    if (scrollTop >= maxScroll) {                                                                                      // 1915
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)                                     // 1916
    }                                                                                                                  // 1917
                                                                                                                       // 1918
    if (activeTarget && scrollTop < offsets[0]) {                                                                      // 1919
      this.activeTarget = null                                                                                         // 1920
      return this.clear()                                                                                              // 1921
    }                                                                                                                  // 1922
                                                                                                                       // 1923
    for (i = offsets.length; i--;) {                                                                                   // 1924
      activeTarget != targets[i]                                                                                       // 1925
        && scrollTop >= offsets[i]                                                                                     // 1926
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])                                                // 1927
        && this.activate(targets[i])                                                                                   // 1928
    }                                                                                                                  // 1929
  }                                                                                                                    // 1930
                                                                                                                       // 1931
  ScrollSpy.prototype.activate = function (target) {                                                                   // 1932
    this.activeTarget = target                                                                                         // 1933
                                                                                                                       // 1934
    this.clear()                                                                                                       // 1935
                                                                                                                       // 1936
    var selector = this.selector +                                                                                     // 1937
      '[data-target="' + target + '"],' +                                                                              // 1938
      this.selector + '[href="' + target + '"]'                                                                        // 1939
                                                                                                                       // 1940
    var active = $(selector)                                                                                           // 1941
      .parents('li')                                                                                                   // 1942
      .addClass('active')                                                                                              // 1943
                                                                                                                       // 1944
    if (active.parent('.dropdown-menu').length) {                                                                      // 1945
      active = active                                                                                                  // 1946
        .closest('li.dropdown')                                                                                        // 1947
        .addClass('active')                                                                                            // 1948
    }                                                                                                                  // 1949
                                                                                                                       // 1950
    active.trigger('activate.bs.scrollspy')                                                                            // 1951
  }                                                                                                                    // 1952
                                                                                                                       // 1953
  ScrollSpy.prototype.clear = function () {                                                                            // 1954
    $(this.selector)                                                                                                   // 1955
      .parentsUntil(this.options.target, '.active')                                                                    // 1956
      .removeClass('active')                                                                                           // 1957
  }                                                                                                                    // 1958
                                                                                                                       // 1959
                                                                                                                       // 1960
  // SCROLLSPY PLUGIN DEFINITION                                                                                       // 1961
  // ===========================                                                                                       // 1962
                                                                                                                       // 1963
  function Plugin(option) {                                                                                            // 1964
    return this.each(function () {                                                                                     // 1965
      var $this   = $(this)                                                                                            // 1966
      var data    = $this.data('bs.scrollspy')                                                                         // 1967
      var options = typeof option == 'object' && option                                                                // 1968
                                                                                                                       // 1969
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))                                     // 1970
      if (typeof option == 'string') data[option]()                                                                    // 1971
    })                                                                                                                 // 1972
  }                                                                                                                    // 1973
                                                                                                                       // 1974
  var old = $.fn.scrollspy                                                                                             // 1975
                                                                                                                       // 1976
  $.fn.scrollspy             = Plugin                                                                                  // 1977
  $.fn.scrollspy.Constructor = ScrollSpy                                                                               // 1978
                                                                                                                       // 1979
                                                                                                                       // 1980
  // SCROLLSPY NO CONFLICT                                                                                             // 1981
  // =====================                                                                                             // 1982
                                                                                                                       // 1983
  $.fn.scrollspy.noConflict = function () {                                                                            // 1984
    $.fn.scrollspy = old                                                                                               // 1985
    return this                                                                                                        // 1986
  }                                                                                                                    // 1987
                                                                                                                       // 1988
                                                                                                                       // 1989
  // SCROLLSPY DATA-API                                                                                                // 1990
  // ==================                                                                                                // 1991
                                                                                                                       // 1992
  $(window).on('load.bs.scrollspy.data-api', function () {                                                             // 1993
    $('[data-spy="scroll"]').each(function () {                                                                        // 1994
      var $spy = $(this)                                                                                               // 1995
      Plugin.call($spy, $spy.data())                                                                                   // 1996
    })                                                                                                                 // 1997
  })                                                                                                                   // 1998
                                                                                                                       // 1999
}(jQuery);                                                                                                             // 2000
                                                                                                                       // 2001
/* ========================================================================                                            // 2002
 * Bootstrap: tab.js v3.3.4                                                                                            // 2003
 * http://getbootstrap.com/javascript/#tabs                                                                            // 2004
 * ========================================================================                                            // 2005
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 2006
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 2007
 * ======================================================================== */                                         // 2008
                                                                                                                       // 2009
                                                                                                                       // 2010
+function ($) {                                                                                                        // 2011
  'use strict';                                                                                                        // 2012
                                                                                                                       // 2013
  // TAB CLASS DEFINITION                                                                                              // 2014
  // ====================                                                                                              // 2015
                                                                                                                       // 2016
  var Tab = function (element) {                                                                                       // 2017
    this.element = $(element)                                                                                          // 2018
  }                                                                                                                    // 2019
                                                                                                                       // 2020
  Tab.VERSION = '3.3.4'                                                                                                // 2021
                                                                                                                       // 2022
  Tab.TRANSITION_DURATION = 150                                                                                        // 2023
                                                                                                                       // 2024
  Tab.prototype.show = function () {                                                                                   // 2025
    var $this    = this.element                                                                                        // 2026
    var $ul      = $this.closest('ul:not(.dropdown-menu)')                                                             // 2027
    var selector = $this.data('target')                                                                                // 2028
                                                                                                                       // 2029
    if (!selector) {                                                                                                   // 2030
      selector = $this.attr('href')                                                                                    // 2031
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                   // 2032
    }                                                                                                                  // 2033
                                                                                                                       // 2034
    if ($this.parent('li').hasClass('active')) return                                                                  // 2035
                                                                                                                       // 2036
    var $previous = $ul.find('.active:last a')                                                                         // 2037
    var hideEvent = $.Event('hide.bs.tab', {                                                                           // 2038
      relatedTarget: $this[0]                                                                                          // 2039
    })                                                                                                                 // 2040
    var showEvent = $.Event('show.bs.tab', {                                                                           // 2041
      relatedTarget: $previous[0]                                                                                      // 2042
    })                                                                                                                 // 2043
                                                                                                                       // 2044
    $previous.trigger(hideEvent)                                                                                       // 2045
    $this.trigger(showEvent)                                                                                           // 2046
                                                                                                                       // 2047
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return                                       // 2048
                                                                                                                       // 2049
    var $target = $(selector)                                                                                          // 2050
                                                                                                                       // 2051
    this.activate($this.closest('li'), $ul)                                                                            // 2052
    this.activate($target, $target.parent(), function () {                                                             // 2053
      $previous.trigger({                                                                                              // 2054
        type: 'hidden.bs.tab',                                                                                         // 2055
        relatedTarget: $this[0]                                                                                        // 2056
      })                                                                                                               // 2057
      $this.trigger({                                                                                                  // 2058
        type: 'shown.bs.tab',                                                                                          // 2059
        relatedTarget: $previous[0]                                                                                    // 2060
      })                                                                                                               // 2061
    })                                                                                                                 // 2062
  }                                                                                                                    // 2063
                                                                                                                       // 2064
  Tab.prototype.activate = function (element, container, callback) {                                                   // 2065
    var $active    = container.find('> .active')                                                                       // 2066
    var transition = callback                                                                                          // 2067
      && $.support.transition                                                                                          // 2068
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)                          // 2069
                                                                                                                       // 2070
    function next() {                                                                                                  // 2071
      $active                                                                                                          // 2072
        .removeClass('active')                                                                                         // 2073
        .find('> .dropdown-menu > .active')                                                                            // 2074
          .removeClass('active')                                                                                       // 2075
        .end()                                                                                                         // 2076
        .find('[data-toggle="tab"]')                                                                                   // 2077
          .attr('aria-expanded', false)                                                                                // 2078
                                                                                                                       // 2079
      element                                                                                                          // 2080
        .addClass('active')                                                                                            // 2081
        .find('[data-toggle="tab"]')                                                                                   // 2082
          .attr('aria-expanded', true)                                                                                 // 2083
                                                                                                                       // 2084
      if (transition) {                                                                                                // 2085
        element[0].offsetWidth // reflow for transition                                                                // 2086
        element.addClass('in')                                                                                         // 2087
      } else {                                                                                                         // 2088
        element.removeClass('fade')                                                                                    // 2089
      }                                                                                                                // 2090
                                                                                                                       // 2091
      if (element.parent('.dropdown-menu').length) {                                                                   // 2092
        element                                                                                                        // 2093
          .closest('li.dropdown')                                                                                      // 2094
            .addClass('active')                                                                                        // 2095
          .end()                                                                                                       // 2096
          .find('[data-toggle="tab"]')                                                                                 // 2097
            .attr('aria-expanded', true)                                                                               // 2098
      }                                                                                                                // 2099
                                                                                                                       // 2100
      callback && callback()                                                                                           // 2101
    }                                                                                                                  // 2102
                                                                                                                       // 2103
    $active.length && transition ?                                                                                     // 2104
      $active                                                                                                          // 2105
        .one('bsTransitionEnd', next)                                                                                  // 2106
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :                                                               // 2107
      next()                                                                                                           // 2108
                                                                                                                       // 2109
    $active.removeClass('in')                                                                                          // 2110
  }                                                                                                                    // 2111
                                                                                                                       // 2112
                                                                                                                       // 2113
  // TAB PLUGIN DEFINITION                                                                                             // 2114
  // =====================                                                                                             // 2115
                                                                                                                       // 2116
  function Plugin(option) {                                                                                            // 2117
    return this.each(function () {                                                                                     // 2118
      var $this = $(this)                                                                                              // 2119
      var data  = $this.data('bs.tab')                                                                                 // 2120
                                                                                                                       // 2121
      if (!data) $this.data('bs.tab', (data = new Tab(this)))                                                          // 2122
      if (typeof option == 'string') data[option]()                                                                    // 2123
    })                                                                                                                 // 2124
  }                                                                                                                    // 2125
                                                                                                                       // 2126
  var old = $.fn.tab                                                                                                   // 2127
                                                                                                                       // 2128
  $.fn.tab             = Plugin                                                                                        // 2129
  $.fn.tab.Constructor = Tab                                                                                           // 2130
                                                                                                                       // 2131
                                                                                                                       // 2132
  // TAB NO CONFLICT                                                                                                   // 2133
  // ===============                                                                                                   // 2134
                                                                                                                       // 2135
  $.fn.tab.noConflict = function () {                                                                                  // 2136
    $.fn.tab = old                                                                                                     // 2137
    return this                                                                                                        // 2138
  }                                                                                                                    // 2139
                                                                                                                       // 2140
                                                                                                                       // 2141
  // TAB DATA-API                                                                                                      // 2142
  // ============                                                                                                      // 2143
                                                                                                                       // 2144
  var clickHandler = function (e) {                                                                                    // 2145
    e.preventDefault()                                                                                                 // 2146
    Plugin.call($(this), 'show')                                                                                       // 2147
  }                                                                                                                    // 2148
                                                                                                                       // 2149
  $(document)                                                                                                          // 2150
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)                                                  // 2151
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)                                                 // 2152
                                                                                                                       // 2153
}(jQuery);                                                                                                             // 2154
                                                                                                                       // 2155
/* ========================================================================                                            // 2156
 * Bootstrap: affix.js v3.3.4                                                                                          // 2157
 * http://getbootstrap.com/javascript/#affix                                                                           // 2158
 * ========================================================================                                            // 2159
 * Copyright 2011-2015 Twitter, Inc.                                                                                   // 2160
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 2161
 * ======================================================================== */                                         // 2162
                                                                                                                       // 2163
                                                                                                                       // 2164
+function ($) {                                                                                                        // 2165
  'use strict';                                                                                                        // 2166
                                                                                                                       // 2167
  // AFFIX CLASS DEFINITION                                                                                            // 2168
  // ======================                                                                                            // 2169
                                                                                                                       // 2170
  var Affix = function (element, options) {                                                                            // 2171
    this.options = $.extend({}, Affix.DEFAULTS, options)                                                               // 2172
                                                                                                                       // 2173
    this.$target = $(this.options.target)                                                                              // 2174
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))                                               // 2175
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))                                  // 2176
                                                                                                                       // 2177
    this.$element     = $(element)                                                                                     // 2178
    this.affixed      = null                                                                                           // 2179
    this.unpin        = null                                                                                           // 2180
    this.pinnedOffset = null                                                                                           // 2181
                                                                                                                       // 2182
    this.checkPosition()                                                                                               // 2183
  }                                                                                                                    // 2184
                                                                                                                       // 2185
  Affix.VERSION  = '3.3.4'                                                                                             // 2186
                                                                                                                       // 2187
  Affix.RESET    = 'affix affix-top affix-bottom'                                                                      // 2188
                                                                                                                       // 2189
  Affix.DEFAULTS = {                                                                                                   // 2190
    offset: 0,                                                                                                         // 2191
    target: window                                                                                                     // 2192
  }                                                                                                                    // 2193
                                                                                                                       // 2194
  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {                                // 2195
    var scrollTop    = this.$target.scrollTop()                                                                        // 2196
    var position     = this.$element.offset()                                                                          // 2197
    var targetHeight = this.$target.height()                                                                           // 2198
                                                                                                                       // 2199
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false                       // 2200
                                                                                                                       // 2201
    if (this.affixed == 'bottom') {                                                                                    // 2202
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'                        // 2203
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'                              // 2204
    }                                                                                                                  // 2205
                                                                                                                       // 2206
    var initializing   = this.affixed == null                                                                          // 2207
    var colliderTop    = initializing ? scrollTop : position.top                                                       // 2208
    var colliderHeight = initializing ? targetHeight : height                                                          // 2209
                                                                                                                       // 2210
    if (offsetTop != null && scrollTop <= offsetTop) return 'top'                                                      // 2211
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'         // 2212
                                                                                                                       // 2213
    return false                                                                                                       // 2214
  }                                                                                                                    // 2215
                                                                                                                       // 2216
  Affix.prototype.getPinnedOffset = function () {                                                                      // 2217
    if (this.pinnedOffset) return this.pinnedOffset                                                                    // 2218
    this.$element.removeClass(Affix.RESET).addClass('affix')                                                           // 2219
    var scrollTop = this.$target.scrollTop()                                                                           // 2220
    var position  = this.$element.offset()                                                                             // 2221
    return (this.pinnedOffset = position.top - scrollTop)                                                              // 2222
  }                                                                                                                    // 2223
                                                                                                                       // 2224
  Affix.prototype.checkPositionWithEventLoop = function () {                                                           // 2225
    setTimeout($.proxy(this.checkPosition, this), 1)                                                                   // 2226
  }                                                                                                                    // 2227
                                                                                                                       // 2228
  Affix.prototype.checkPosition = function () {                                                                        // 2229
    if (!this.$element.is(':visible')) return                                                                          // 2230
                                                                                                                       // 2231
    var height       = this.$element.height()                                                                          // 2232
    var offset       = this.options.offset                                                                             // 2233
    var offsetTop    = offset.top                                                                                      // 2234
    var offsetBottom = offset.bottom                                                                                   // 2235
    var scrollHeight = $(document.body).height()                                                                       // 2236
                                                                                                                       // 2237
    if (typeof offset != 'object')         offsetBottom = offsetTop = offset                                           // 2238
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)                                    // 2239
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)                                 // 2240
                                                                                                                       // 2241
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)                                           // 2242
                                                                                                                       // 2243
    if (this.affixed != affix) {                                                                                       // 2244
      if (this.unpin != null) this.$element.css('top', '')                                                             // 2245
                                                                                                                       // 2246
      var affixType = 'affix' + (affix ? '-' + affix : '')                                                             // 2247
      var e         = $.Event(affixType + '.bs.affix')                                                                 // 2248
                                                                                                                       // 2249
      this.$element.trigger(e)                                                                                         // 2250
                                                                                                                       // 2251
      if (e.isDefaultPrevented()) return                                                                               // 2252
                                                                                                                       // 2253
      this.affixed = affix                                                                                             // 2254
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null                                                   // 2255
                                                                                                                       // 2256
      this.$element                                                                                                    // 2257
        .removeClass(Affix.RESET)                                                                                      // 2258
        .addClass(affixType)                                                                                           // 2259
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')                                                  // 2260
    }                                                                                                                  // 2261
                                                                                                                       // 2262
    if (affix == 'bottom') {                                                                                           // 2263
      this.$element.offset({                                                                                           // 2264
        top: scrollHeight - height - offsetBottom                                                                      // 2265
      })                                                                                                               // 2266
    }                                                                                                                  // 2267
  }                                                                                                                    // 2268
                                                                                                                       // 2269
                                                                                                                       // 2270
  // AFFIX PLUGIN DEFINITION                                                                                           // 2271
  // =======================                                                                                           // 2272
                                                                                                                       // 2273
  function Plugin(option) {                                                                                            // 2274
    return this.each(function () {                                                                                     // 2275
      var $this   = $(this)                                                                                            // 2276
      var data    = $this.data('bs.affix')                                                                             // 2277
      var options = typeof option == 'object' && option                                                                // 2278
                                                                                                                       // 2279
      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))                                             // 2280
      if (typeof option == 'string') data[option]()                                                                    // 2281
    })                                                                                                                 // 2282
  }                                                                                                                    // 2283
                                                                                                                       // 2284
  var old = $.fn.affix                                                                                                 // 2285
                                                                                                                       // 2286
  $.fn.affix             = Plugin                                                                                      // 2287
  $.fn.affix.Constructor = Affix                                                                                       // 2288
                                                                                                                       // 2289
                                                                                                                       // 2290
  // AFFIX NO CONFLICT                                                                                                 // 2291
  // =================                                                                                                 // 2292
                                                                                                                       // 2293
  $.fn.affix.noConflict = function () {                                                                                // 2294
    $.fn.affix = old                                                                                                   // 2295
    return this                                                                                                        // 2296
  }                                                                                                                    // 2297
                                                                                                                       // 2298
                                                                                                                       // 2299
  // AFFIX DATA-API                                                                                                    // 2300
  // ==============                                                                                                    // 2301
                                                                                                                       // 2302
  $(window).on('load', function () {                                                                                   // 2303
    $('[data-spy="affix"]').each(function () {                                                                         // 2304
      var $spy = $(this)                                                                                               // 2305
      var data = $spy.data()                                                                                           // 2306
                                                                                                                       // 2307
      data.offset = data.offset || {}                                                                                  // 2308
                                                                                                                       // 2309
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom                                            // 2310
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop                                               // 2311
                                                                                                                       // 2312
      Plugin.call($spy, data)                                                                                          // 2313
    })                                                                                                                 // 2314
  })                                                                                                                   // 2315
                                                                                                                       // 2316
}(jQuery);                                                                                                             // 2317
                                                                                                                       // 2318
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['twbs:bootstrap'] = {};

})();
