(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
  comments: {
    type: String,
    max: 100,
    label: 'CommentsBody'
  },
  commentsId: {
    label: 'CommentsId',
    type: String
  },
  userId: {
    type: String
  }
}));

if (Meteor.isServer) {
  Comments.allow({
    insert: function(userId, doc) {
      return !!userId;
    },
    update: function(userId, doc, fieldNames, modifier) {
      return userId === doc.userId;
    },
    remove: function(userId, doc) {
      return userId === doc.userId;
    }
  });
}

})();
