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