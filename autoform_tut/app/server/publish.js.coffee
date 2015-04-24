Meteor.publish 'posts', ->
  Posts.find {}, {
    sort:
      createdAt: -1
  }

Meteor.publish 'post', (id) ->
  [
    Posts.find _id: id
    Comments.find()
  ]

Meteor.publish 'books', ->
  Books.find {}, {
    sort:
      createdAt: -1
  }

Meteor.publish 'book', (id) ->
  Books.find _id: id