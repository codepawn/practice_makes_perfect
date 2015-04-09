Meteor.publish 'posts', ->
  Posts.find()
Meteor.publish 'post',(id) ->
  Posts.find _id: id
