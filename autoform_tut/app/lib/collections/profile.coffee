@Profile = new Mongo.Collection('profile')
Profile.attachSchema new SimpleSchema
  firstName:
    type: String
    regEx: /^[a-zA-Z-]{2,25}$/
    optional: true
  lastName:
    type: String
    regEx: /^[a-zA-Z]{2,25}$/
    optional: true
  birthday:
    type: Date
    optional: true
  gender:
    type: String
    allowedValues: [
      'Male'
      'Female'
    ]
    optional: true
  organization:
    type: String
    regEx: /^[a-z0-9A-z .]{3,30}$/
    optional: true
  website:
    type: String
    regEx: SimpleSchema.RegEx.Url
    optional: true
  bio:
    type: String
    optional: true
#  country:
#    type: Schema.UserCountry
#    optional: true


if Meteor.isServer
  Profile.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true

