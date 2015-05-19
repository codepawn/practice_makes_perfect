@Post = new Mongo.Collection('post')
Post.attachSchema new SimpleSchema
  title:
    type: String
  createdAt:
    type: Date
    autoValue: ->
      new Date
#    denyUpdate: true
    autoform:
      omit: true
  userId:
    type: String
    autoValue: ->
      Meteor.userId()
    autoform:
      omit: true

if Meteor.isServer
  Post.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

