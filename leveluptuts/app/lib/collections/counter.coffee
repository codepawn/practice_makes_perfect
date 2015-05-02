@Counter = new Mongo.Collection('counter')


if Meteor.isServer
  Counter.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
