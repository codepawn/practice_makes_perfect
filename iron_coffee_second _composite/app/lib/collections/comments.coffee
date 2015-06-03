@Comments = new Mongo.Collection('comments')


if Meteor.isServer
  Comments.allow
    insert: (userId, doc) ->
      !!userId
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.userId
    remove: (userId, doc) ->
      userId is doc.userId
