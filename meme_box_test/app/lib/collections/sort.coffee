@Sort = new Mongo.Collection('sort')
Sort.attachSchema new SimpleSchema
  number:
    type: Number
    label: "0 부터 100까지 입력"
    min: 0
    max: 100


if Meteor.isServer
  Sort.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

  Sort.deny
    insert: (userId, doc) ->
      false
    update: (userId, doc, fieldNames, modifier) ->
      false
    remove: (userId, doc) ->
      false
