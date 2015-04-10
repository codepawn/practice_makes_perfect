@Todos = new Mongo.Collection('todos')


if Meteor.isServer
  Todos.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
