Meteor.publish 'articles', ->
  Articles.find()

Meteor.publish 'article', (id) ->
  Articles.find _id:id
