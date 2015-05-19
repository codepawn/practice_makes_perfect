Template.Lab2.events
  'click [name=rm]': ->
    Post.remove @_id

Template.Lab2.helpers
  posts: ->
    Post.find {}, {
      sort:
        createdAt: -1
      limit: 5
#      transform: (doc) ->
#        Meteor.subscribe 'getAuthor', doc.userId
    }
#  author: ->
#    Meteor.users.findOne(@userId)

# Lab2: Lifecycle Hooks 
Template.Lab2.created = ->

Template.Lab2.rendered = ->

Template.Lab2.destroyed = ->
