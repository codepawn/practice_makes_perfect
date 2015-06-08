@Players = new Mongo.Collection('players')


if Meteor.isServer
  Players.allow
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false

  Players.deny
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
