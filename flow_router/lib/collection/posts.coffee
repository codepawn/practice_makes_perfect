@Posts = new Mongo.Collection('posts')
Posts.attachSchema new SimpleSchema
  title:
    type: String

if Meteor.isServer
  Posts.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
