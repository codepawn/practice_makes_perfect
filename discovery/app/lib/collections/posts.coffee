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
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

  Posts.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false
