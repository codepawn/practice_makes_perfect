Meteor.publish 'posts', ->
  Posts.find {}, {
    sort:
      createdAt: -1
  }
Meteor.publish 'post', (id) ->
  Posts.find _id: id
