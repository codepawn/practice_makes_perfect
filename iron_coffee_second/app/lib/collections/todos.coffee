@Todos = new Mongo.Collection('todos')


if Meteor.isServer
  Todos.allow
    insert: (userId, doc) ->
      userId is doc.userId
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.userId
    remove: (userId, doc) ->
      userId is doc.userId