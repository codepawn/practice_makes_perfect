@Comments = new Mongo.Collection('comments')
Comments.attachSchema new SimpleSchema
  body:
    type: String
  todoId:
    type: String
  createdAt:
    type: Date
    autoValue: ->
      new Date
#    denyUpdate: true
    autoform:
      omit: true
  userId:
    type: String
    autoValue: ->
      Meteor.userId()
    autoform:
      omit: true

if Meteor.isServer
  Comments.allow
    insert: (userId, doc) ->
      !!userId
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.userId
    remove: (userId, doc) ->
      userId is doc.userId
