Todos = new Mongo.Collection('todos');


if (Meteor.isServer) {
  Todos.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });
}