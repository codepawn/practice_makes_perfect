Meteor.publish 'todos', ->
  Todos.find {userId: @userId}

Meteor.publish 'todo', (id) ->
  todo = Todos.findOne _id: id
  [
    Meteor.users.find _id: todo.userId, {fields: {profile: 1}}
    Todos.find _id: id
    Comments.find todoId: id, {sort: {createdAt: -1}}
  ]
Meteor.publish 'users', ->
  Meteor.users.find {},
    fields:
      profile: 1

Meteor.publish 'user', (userId) ->
  [
    Meteor.users.find _id: userId, {fields: {profile: 1}}
    Todos.find userId: userId
  ]