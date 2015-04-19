Meteor.publish 'posts', ->
  Posts.find()
Meteor.publish 'post', ->
  Posts.find()

Meteor.publish 'books', ->
  Books.find()