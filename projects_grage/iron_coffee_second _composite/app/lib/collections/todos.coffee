@Todos = new Mongo.Collection('todos')
Todos.attachSchema new SimpleSchema
  subject:
    type: String
  description:
    type: String
    autoform:
      omit: true
    optional: true
  createdAt:
    type: Date
    autoValue: ->
      if @isInsert
        new Date
    denyUpdate: true
    autoform:
      omit: true
  updatedAt:
    type: Date
    autoValue: ->
      if @isUpdate
        new Date
    autoform:
      omit: true
    optional: true
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