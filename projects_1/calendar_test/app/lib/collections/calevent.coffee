@Calevent = new Mongo.Collection('calevent')


if Meteor.isServer
  Calevent.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true