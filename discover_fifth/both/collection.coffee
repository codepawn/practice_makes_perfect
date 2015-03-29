@Posts = new Meteor.Collection 'posts'

Posts.attachSchema new SimpleSchema
  title:
    type: String
    label: 'Title'
    max: 200
  url:
    type: String
    label: 'Title'
    max: 200