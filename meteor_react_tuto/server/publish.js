Meteor.publish('todos', function () {
  return Tasks.find();
});
