Meteor.publish('todos', function () {
  return Tasks.find();
});

Meteor.publish('todos2', function () {
  return Todos.find();
});

