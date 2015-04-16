@Posts = new Mongo.Collection('posts')
Posts.attachSchema new SimpleSchema
  title:
    type: String
  url:
    type: String
  createdAt:
    type: Date
    autoValue: ->
      new Date()
    denyUpdate: true


if Meteor.isServer
  Posts.allow
    insert: (userId, doc) ->
      !!userId
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true