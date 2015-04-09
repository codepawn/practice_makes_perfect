Template.Home.events
  'click [name=rm]': ->
    Posts.remove _id: @_id

Template.Home.helpers
  posts: ->
    Posts.find()
  domain: ->
    a = document.createElement('a')
    a.href = @url
    a.hostname

Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
