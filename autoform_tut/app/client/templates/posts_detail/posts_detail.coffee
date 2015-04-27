Template.PostsDetail.events
  'click [name=removePosts]': (e) ->
    e.preventDefault()
    Posts.remove _id: @_id
    Router.go 'home'

  'click [name=removeComment]': (e)->
    Comments.remove _id: @_id

  'click [name=insert]': (e, tmpl) ->
    e.preventDefault()
    Comments.insert
      comments: tmpl.find('textarea').value
      commentsId: @_id
      userId: Meteor.userId()
    tmpl.find('form').reset()

Template.PostsDetail.helpers
  postComments: ->
    Comments.find()

Template.PostsDetail.created = ->

Template.PostsDetail.rendered = ->

Template.PostsDetail.destroyed = ->
