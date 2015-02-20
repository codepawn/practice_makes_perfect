@Users = new Mongo.Collection('users');

Schemas = {}

Schemas.Users = new SimpleSchema
  no:
    type: Number
    label: 'No'
    max: 30
  name:
    type: String
    label: 'Name'
    max: 20
  email:
    label: 'Email'
    regEx: SimpleSchema.RegEx.Email
    optional: true
    type: String

Users.attachSchema(Schemas.Users);
