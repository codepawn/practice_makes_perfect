(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    },
    denyUpdate: true
  }
}));

if (Meteor.isServer) {
  Posts.allow({
    insert: function(userId, doc) {
      return !!userId;
    },
    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function(userId, doc) {
      return true;
    }
  });
}

})();

//# sourceMappingURL=posts.coffee.js.map
