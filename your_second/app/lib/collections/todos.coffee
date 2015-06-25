@Todos = new Mongo.Collection('todos')
Todos.attachSchema new SimpleSchema
  title:
    type: String

  completed:
    type: Boolean
    autoValue:->
      if @isInsert
        false
    autoform:
      omit: true

  createdAt:
    type: Date
    autoValue: ->
      if @isInsert
        new Date
    denyUpdate: true
    autoform:
      omit: true


if Meteor.isServer
  Todos.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

  Todos.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false
