Template.Home.events
  'click [name=remove]': ->
    Posts.remove _id: @_id

Template.Home.helpers
  posts: ->
    Posts.find {}, {
      sort:
        createdAt: -1
    }

Template.Home.created = ->

Template.Home.rendered = ->

Template.Home.destroyed = ->
