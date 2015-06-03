@Todos = new Mongo.Collection('todos')
Todos.attachSchema new SimpleSchema
  subject:
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
  isDone:
    type: Boolean
    autoValue: ->
      if @isInsert
        false
    autoform:
      omit: true

if Meteor.isServer
  Todos.allow
    insert: (userId, doc) ->
      userId is doc.userId
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.userId
    remove: (userId, doc) ->
      userId is doc.userId