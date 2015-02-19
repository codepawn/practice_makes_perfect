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
    type: String
    label:'Email'
    optional: true
    max: 20

Users.attachSchema(Schemas.Users);