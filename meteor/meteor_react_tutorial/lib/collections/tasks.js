Tasks = new Meteor.Collection('tasks');

if (Meteor.isServer) {
  Tasks.allow({
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
