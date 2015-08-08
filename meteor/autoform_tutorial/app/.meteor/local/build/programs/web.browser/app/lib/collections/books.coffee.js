(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Books = new Mongo.Collection('books');

Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  author: {
    type: String,
    label: 'Author'
  },
  copies: {
    type: Number,
    label: 'Number of copies',
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: 'Last date this book was checked out',
    optional: true,
    autoform: {
      type: "bootstrap-datepicker"
    }
  },
  summary: {
    type: String,
    label: 'Brief summary',
    optional: true,
    max: 1000
  }
}));

if (Meteor.isServer) {
  Books.allow({
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
