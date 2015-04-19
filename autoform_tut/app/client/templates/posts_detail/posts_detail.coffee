Template.PostsDetail.events
  'click [name=rm]': ->
    Posts.remove _id: @_id
    Router.go 'home'

Template.PostsDetail.helpers {}

# PostsDetail: Lifecycle Hooks 
Template.PostsDetail.created = ->

Template.PostsDetail.rendered = ->

Template.PostsDetail.destroyed = ->
