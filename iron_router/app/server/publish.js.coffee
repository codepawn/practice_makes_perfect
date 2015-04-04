
Meteor.publish 'articles', ->
  Articles.find()