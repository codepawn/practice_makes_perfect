@Issues = new Mongo.Collection('issues')
Issues.attachSchema new SimpleSchema
  title:
    type: String
    label: "Title"
    max: 200
  description:
    type: String
    label: "Description"
    max: 1024
  dueDate:
    type: Date
    label: "Due Date"
    optional: true
  priority:
    type: String
    label: "Priority"
    allowedValues: ['High', 'Medium', 'Low']
    optional: true
  createdAt:
    type: Date
    autoValue: ->
      new Date()
    denyUpdate: true
  createdBy:
    type: String
    autoValue: ->
      @userId

if Meteor.isServer
  Issues.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

  Issues.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false
