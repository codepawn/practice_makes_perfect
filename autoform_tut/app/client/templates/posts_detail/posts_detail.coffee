Template.PostsDetail.events
  'click [name=removePosts]': (e) ->
    e.preventDefault()
    Posts.remove _id: @_id
    Router.go 'home'
  'click [name=removeComment]': (e)->
    Comments.remove _id: @_id
  'click [name=insert]': ->
    Comments.insert
      commentsId: @_id

Template.PostsDetail.helpers

Template.PostsDetail.created = ->

Template.PostsDetail.rendered = ->

Template.PostsDetail.destroyed = ->
