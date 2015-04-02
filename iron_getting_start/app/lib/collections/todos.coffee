@Todos = new Mongo.Collection('todos')


if Meteor.isServer
  Todos.allow
    insert: (userId, doc) ->
      userId is doc.user_id
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.user_id
    remove: (userId, doc) ->
      userId is doc.user_id

  Todos.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false
