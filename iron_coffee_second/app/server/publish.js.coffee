Meteor.publish 'todos', ->
  Todos.find {userId: @userId}