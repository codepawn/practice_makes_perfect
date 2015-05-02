(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('posts', function() {
  return Posts.find({}, {
    sort: {
      createdAt: -1
    }
  });
});

Meteor.publish('post', function(id) {
  return [
    Posts.find({
      _id: id
    }), Comments.find({
      commentsId: id
    }, {
      sort: {
        createdAt: -1
      }
    })
  ];
});

Meteor.publish('books', function() {
  return Books.find({}, {
    sort: {
      createdAt: -1
    }
  });
});

Meteor.publish('book', function(id) {
  return Books.find({
    _id: id
  });
});

})();

//# sourceMappingURL=publish.js.coffee.js.map
