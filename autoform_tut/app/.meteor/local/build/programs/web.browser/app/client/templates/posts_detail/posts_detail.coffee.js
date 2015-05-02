(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.PostsDetail.events({
  'click [name=removePosts]': function(e) {
    e.preventDefault();
    Posts.remove({
      _id: this._id
    });
    return Router.go('home');
  },
  'click [name=removeComment]': function(e) {
    return Comments.remove({
      _id: this._id
    });
  },
  'click [name=insert]': function(e, tmpl) {
    e.preventDefault();
    Comments.insert({
      comments: tmpl.find('textarea').value,
      commentsId: this._id,
      userId: Meteor.userId()
    });
    return tmpl.find('form').reset();
  }
});

Template.PostsDetail.helpers({
  postComments: function() {
    return Comments.find();
  }
});

Template.PostsDetail.created = function() {};

Template.PostsDetail.rendered = function() {};

Template.PostsDetail.destroyed = function() {};

})();
