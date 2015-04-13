Meteor.publish 'todos', ->
  Todos.find {userId: @userId}

Meteor.publish 'todo', (id)->
  Todos.find _id: id