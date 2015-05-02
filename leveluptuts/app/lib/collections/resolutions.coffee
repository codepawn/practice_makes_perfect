@Resolutions = new Mongo.Collection('resolutions')


if Meteor.isServer
  Resolutions.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true