Meteor.publish 'topTenPosts', ->
  Post.find {}, {
    sort:
      createdAt: -1
    limit: 5
  }

#Meteor.publishComposite 'topTenPosts', ->
#  TopTenPosts.find()

`

`