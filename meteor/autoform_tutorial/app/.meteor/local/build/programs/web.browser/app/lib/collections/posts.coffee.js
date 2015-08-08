(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  content: {
    type: String,
    label: 'Content',
    autoform: {
      afFieldInput: {
        type: 'summernote',
        "class": 'editor',
        settings: {
          lang: 'ko-KR',
          toolbar: [['style', ['style']], ['insert', ['link', 'hr']]]
        }
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date;
    },
    autoform: {
      omit: true
    }
  }
}));

if (Meteor.isServer) {
  Posts.allow({
    insert: function(userId, doc) {
      return true;
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
