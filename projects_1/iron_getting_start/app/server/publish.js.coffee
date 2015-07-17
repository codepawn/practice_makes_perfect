
Meteor.publish 'todos', ->
  Todos.find {user_id:@userId}