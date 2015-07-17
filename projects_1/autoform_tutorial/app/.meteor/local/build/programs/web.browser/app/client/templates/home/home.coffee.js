(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.Home.events({
  'click [name=remove]': function() {
    return Posts.remove({
      _id: this._id
    });
  }
});

Template.Home.helpers({
  posts: function() {
    return Posts.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }
});

Template.Home.created = function() {};

Template.Home.rendered = function() {};

Template.Home.destroyed = function() {};

})();
