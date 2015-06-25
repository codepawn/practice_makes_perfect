Meteor.publish 'todos', ->
  Todos.find {}, {
    sort:
      createdAt: -1
  }