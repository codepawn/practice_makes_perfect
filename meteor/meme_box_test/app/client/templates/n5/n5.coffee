encode_utf8 = (s)->
  unescape(encodeURIComponent(s))
decode_utf8 = (s) ->
  decodeURIComponent escape(s)

Template.N5.events
  'keyup [name=kValue]': (e, tmpl) ->
    console.log e.currentTarget.value
    Session.set 'keyword', e.currentTarget.value

Template.N5.helpers
  kValue: ->
    Session.get 'keyword'

Template.N5.created = ->
  Session.setDefault 'keyword'

Template.N5.rendered = ->
  html = '갈'
#  console.log encodeURIComponent(html)
#  console.log encode_utf8(html)
#  console.log escape(html), html
  console.log unescape(html), html
  console.log "0xAC08" - "0xAC00", '값'
  ff = 0xAC08 - 0xAC00
  console.log ff / 21 / 28

Template.N5.destroyed = ->
