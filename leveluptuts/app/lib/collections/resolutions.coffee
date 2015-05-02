@Resolutions = new Mongo.Collection('resolutions')
Resolutions.attachSchema new SimpleSchema
  title:
    type: String
  createdAt:
    type: Date
    autoValue: ->
      if @isInsert
        new Date
#      denyUpdate: true
    autoform:
      omit: true
  checked:
    type: Boolean
    autoValue: -> false
    autoform:
      omit: true

if Meteor.isServer
  Resolutions.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true