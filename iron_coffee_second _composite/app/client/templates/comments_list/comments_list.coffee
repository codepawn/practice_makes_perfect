Template.CommentsList.events
  'submit form#new-comment': (e, tmpl)->
    e.preventDefault()

    Comments.insert
      todoId: @_id
      createdAt: new Date
      userId: Meteor.userId()
      body: tmpl.find('textarea[name=body]').value

    tmpl.find('form').reset()

Template.CommentsList.helpers
  comments: ->
    Comments.find todoId: @_id, {
      sort:
        createAt: -1
    }

  user: ->
    Meteor.users.findOne _id: @userId

  timestamp: ->
    moment @createdAt
    .fromNow()

# CommentsList: Lifecycle Hooks 
Template.CommentsList.created = ->

Template.CommentsList.rendered = ->

Template.CommentsList.destroyed = ->
