Meteor.publish 'topTenPosts', ->
  Post.find {}, {
    sort:
      createdAt: -1
    limit: 5
  }

Meteor.publish 'getAuthor', (userId) ->
  check userId, Number
  Meteor.users.findOne userId
  
Meteor.publish 'images', ->
  Images.find()

  

#Meteor.publishComposite 'topTenPosts', ->
#  TopTenPosts.find()

`

`