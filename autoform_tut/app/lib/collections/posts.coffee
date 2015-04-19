@Posts = new Mongo.Collection('posts')
Posts.attachSchema new SimpleSchema
  title:
    type: String
    label: 'Title'
    max: 200
  content:
    type: String
    label: 'Content'
  createdAt:
    type: Date
    autoValue: ->
      new Date
#    denyUpdate: true
    autoform:
      omit:true

if Meteor.isServer
  Posts.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
