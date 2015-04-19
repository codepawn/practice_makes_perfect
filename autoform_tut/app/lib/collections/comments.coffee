@Comments = new Mongo.Collection('comments')
Comments.attachSchema new SimpleSchema
  comments:
    type: String
    max: 100


if Meteor.isServer
  Comments.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true