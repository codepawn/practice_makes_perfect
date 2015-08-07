(function(){__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.PostsController = RouteController.extend({
  subscriptions: function() {
    return this.subscribe('post', this.params._id);
  },
  data: function() {
    return Posts.findOne({
      _id: this.params._id
    });
  },
  action: function() {
    Session.set('pageTitle', 'Detail');
    return this.render('PostsDetail', {});
  },
  edit: function() {
    Session.set('pageTitle', 'Edit');
    return this.render('EditPost', {});
  }
});

})();

//# sourceMappingURL=posts_controller.coffee.js.map
