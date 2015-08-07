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
    autoValue: ->
      if @isInsert
        false
    autoform:
      omit: true
  owner:
    type: String
    autoValue: ->
      if @isInsert
        Meteor.userId()
    autoform:
      omit: true
    optional: true
  private:
    type: Boolean
    autoValue: ->
      if @isInsert
        false
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