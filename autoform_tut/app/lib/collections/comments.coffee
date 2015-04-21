@Comments = new Mongo.Collection('comments')
Comments.attachSchema new SimpleSchema
  comments:
    type: String
    max: 100
    label: 'CommentsBody'
  commentsId:
    label: 'CommentsId'
    type: String
    autoform:
      omit: true


if Meteor.isServer
  Comments.allow
    insert: (userId, doc) ->
      true
#      !!userId
    update: (userId, doc, fieldNames, modifier) ->
#      userId is doc.userId
      true
    remove: (userId, doc) ->
      true
#      userId is doc.userId