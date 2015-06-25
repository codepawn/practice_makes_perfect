encode_utf8 = (s)->
  unescape(encodeURIComponent(s))
decode_utf8 = (s) ->
  decodeURIComponent escape(s)

Template.N5.events

Template.N5.helpers

Template.N5.created = ->

Template.N5.rendered = ->
  html = ''
  console.log encodeURIComponent(html), html
  console.log encode_utf8(html)
  console.log escape(html)
  console.log "0xAC08" - "0xAC00", '값'
  ff = 0xAC08 - 0xAC00
  console.log ff / 21 / 28

Template.N5.destroyed = ->
