Meteor.publish 'todos', ->
  if !@userId
    @ready()
  else
    Todos.find {userId: @userId}

Meteor.publish 'todo', (id) ->
  if !@userId
    @ready()
  else
    todo = Todos.findOne _id: id
    [
      Meteor.users.find _id: todo.userId, {fields: {profile: 1}}
      Todos.find _id: id
      Comments.find todoId: id, {sort: {createdAt: -1}}
    ]
Meteor.publish 'users', ->
  if !@userId
    @ready()
  else
    Meteor.users.find {},
      fields:
        profile: 1

Meteor.publish 'user', (userId) ->
  if !@userId
    @ready()
  else
    [
      Meteor.users.find _id: userId, {fields: {profile: 1}}
      Todos.find userId: userId
    ]


Meteor.publishComposite 'toptodos',
  find: ->
    Todos.find {},
      sort:
        createdAt: -1
      limit: 10
  children: [
    {
      find: (article) ->
        Meteor.users.find {_id: article.userId}, {
          fields:
            profile: 1
        }
    }
    {
      find: (article) ->
        Comments.find {todoId: article._id},
          sort:
            createdAt: -1
          limit: 1

      children: [
        {
          find: (comment, article) ->
            Meteor.users.find _id: comment.userId, {
              fields:
                profile: 1
            }
        }
      ]
    }
  ]

#
#Meteor.publishComposite 'toptodos',
#  find: ->
#    Todos.find {},
#      sort:
#        createdAt: -1
#      limit: 10
#  children: [
#    {
#      find: (article) ->
#        Meteor.users.find _id: article.userId
#    }
#    {
#      find: (article) ->
#        Comments.find {todoId: article._id},
#          sort:
#            score: -1
#          limit: 2
#      children: [{
#        find: (comment, article) ->
#          Meteor.users.find _id: comment.userId
#      }]
#    }
#  ]

Meteor.publishComposite 'topFiveTodos',
  find: ->
    Todos.find {}, {
      sort:
        createdAt: -1
      limit: 5
    }
  children: [
    {
      find: (todos)->
        Meteor.users.find _id: todos.userId, {
          sort:
            createdAt: -1
          limit: 1
          fields:
            profile: 1
        }
    }
  ]