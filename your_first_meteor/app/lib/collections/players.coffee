@Players = new Mongo.Collection('players')
Players.attachSchema new SimpleSchema
  name:
    type: String
  score:
    type: Number

if Meteor.isServer
  Players.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

  Players.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false

Players.update
  '_id': 'ovZvzA7s4v4zicDvs'
, $set:
  'name': 'fireFox', 'd': 'e', 'score': 2