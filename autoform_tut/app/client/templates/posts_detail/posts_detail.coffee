Template.PostsDetail.events
  'click [name=rm]': (e) ->
    e.preventDefault()
    Posts.remove _id: @_id
    Router.go 'home'

Template.PostsDetail.helpers {}

Template.PostsDetail.created = ->

Template.PostsDetail.rendered = ->

Template.PostsDetail.destroyed = ->
