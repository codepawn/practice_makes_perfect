@Comments = new Mongo.Collection('comments')
Comments.attachSchema new SimpleSchema
  comments:
    type: String
    max: 100
    label: 'CommentsBody'
  commentsId:
    label: 'CommentsId'
    type: String
  userId:
    type: String

if Meteor.isServer
  Comments.allow
    insert: (userId, doc) ->
      !!userId
    update: (userId, doc, fieldNames, modifier) ->
      userId is doc.userId
    remove: (userId, doc) ->
      userId is doc.userId