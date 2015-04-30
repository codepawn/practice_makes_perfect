(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(id) {
  return Posts.find({
    _id: id
  });
});

})();

//# sourceMappingURL=publish.js.coffee.js.map
